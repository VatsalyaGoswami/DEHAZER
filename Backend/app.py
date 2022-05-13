from fileinput import filename
from flask import Flask, request, send_file, render_template
import mimetypes
from flask_cors import CORS
import cv2
import numpy as np

app = Flask(__name__)
CORS(app)
formatList = {
    'jpeg': 'jpeg',
    'jpg': 'jpeg',
    'png': 'png',
    'gif': 'gif',
    'tif': 'tiff',
}

"""Single image dehazing."""



class Channel_value:
    val = -1.0
    intensity = -1.0

# Finding atmospheric intensity(A)
def intensity_of_atmospheric_light(img, gray):
    top_num= int(img.shape[0] * img.shape[1] * 0.001)
    toplist = [Channel_value()] * top_num
    dark_channel1 = dark_channel(img)

    for y in range(img.shape[0]):
        for x in range(img.shape[1]):
            val = img.item(y, x, dark_channel1)
            intensity = gray.item(y, x)
            for t in toplist:
                if t.val < val or (t.val == val and t.intensity < intensity):
                    t.val = val
                    t.intensity = intensity
                    break

    max_channel = Channel_value()
    for t in toplist:
        if t.intensity > max_channel.intensity:
            max_channel = t

    return max_channel.intensity


def dark_channel(img):
    return np.unravel_index(np.argmin(img), img.shape)[2]


def clamp(minimum, x, maximum):
    return max(minimum, min(x, maximum))


# finding transmission map and final output
def dehaze(img, light_intensity, windowSize, t0, w):
    size = (img.shape[0], img.shape[1])

    outimg = np.zeros(img.shape, img.dtype)

    for y in range(size[0]):
        for x in range(size[1]):
            x_low = max(x-(windowSize//2), 0)
            y_low = max(y-(windowSize//2), 0)
            x_high = min(x+(windowSize//2), size[1])
            y_high = min(y+(windowSize//2), size[0])

            sliceimg = img[y_low:y_high, x_low:x_high]

            dark_channel1 = dark_channel(sliceimg)
            t = 1.0 - (w * img.item(y, x, dark_channel1) / light_intensity)

            outimg.itemset((y,x,0), clamp(0, ((img.item(y,x,0) - light_intensity) / max(t, t0) + light_intensity), 255))
            outimg.itemset((y,x,1), clamp(0, ((img.item(y,x,1) - light_intensity) / max(t, t0) + light_intensity), 255))
            outimg.itemset((y,x,2), clamp(0, ((img.item(y,x,2) - light_intensity) / max(t, t0) + light_intensity), 255))
    return outimg


# GET ROUTE
@app.route('/', methods=["GET"])
def home():
    return render_template("index.html")

# POST ROUTE
@app.route('/process-image', methods=["POST"])
def process_image():
    # Saving the received file as temp.*
    print(request.files)
    f = request.files["file"]
    file_name = f.filename
    dot_index = file_name.rfind('.')
    file_format = formatList[file_name[dot_index+1:]]
    file_name = f"temp.{file_format}"
    f.save(file_name)

   
   #Reading image from frontend
    path = file_name
    img = cv2.imread(path)
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    light_intensity = intensity_of_atmospheric_light(img, gray)
    w = 0.95
    t0 = 0.55
    outimg = dehaze(img, light_intensity, 20, t0, w)
    name ='result'+'.jpg'
    cv2.imwrite(name, outimg)
    print(outimg,name)
    mime = mimetypes.guess_type(name)[0]
    
    #Sending back Output image
    return send_file(name, mimetype=mime)

if __name__ == "__main__":
    app.run(debug=True)
