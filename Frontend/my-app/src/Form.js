import React, { useState } from 'react';
import './Form.css';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';

const Form = () => {
	const [isSubmitted, setIsSubmitted] = useState(false);

	async function submitForm(formValue) {
		console.log(formValue.image);
		const formData = new FormData();
		formData.append('file', formValue.image);
		const response = await fetch('http://127.0.0.1:5000/process-image', {
			method: 'POST',
			body: formData,
		});
		setIsSubmitted(true);
		const outputImg = await response.blob();
		const urlCreator = window.URL || window.webkitURL;
		document.getElementById('reponse-image').src = urlCreator.createObjectURL(outputImg);
		document.getElementById('original-image').src = urlCreator.createObjectURL(formValue.image);
	}
	return (
		<>
			<div className="form-container">
				<span className="close-btn">×</span>
				<div className="form-content-left">
					<img id="original-image" className="form-img" src="img/img-2.svg" alt="spaceship" />
				</div>
				{!isSubmitted ? <FormSignup submitForm={submitForm} /> : <FormSuccess />}
			</div>
		</>
	);
};

export default Form;
