import React from 'react';

function Info() {
	return (
		<section class="text-gray-600 body-font">
			<div class="container px-5 py-24 mx-auto">
				<div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
					<h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
						Made Image Dehazing Easy
					</h1>
					<p class="lg:w-1/2 w-full leading-relaxed text-gray-500">
						We provide an easy platform to dehaze your images.
					</p>
				</div>
				<div class="flex flex-wrap -m-4">
					<div class="xl:w-1/3 md:w-1/2 p-4">
						<div class="border border-gray-200 p-6 rounded-lg">
							<div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
								<svg
									fill="none"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									class="w-6 h-6"
									viewBox="0 0 24 24"
								>
									<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
								</svg>
							</div>
							<h2 class="text-lg text-gray-900 font-medium title-font mb-2">Fast</h2>
							<p class="leading-relaxed text-base">Quicker than most method available out there</p>
						</div>
					</div>
					<div class="xl:w-1/3 md:w-1/2 p-4">
						<div class="border border-gray-200 p-6 rounded-lg">
							<div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
								<svg
									fill="none"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									class="w-6 h-6"
									viewBox="0 0 24 24"
								>
									<circle cx="6" cy="6" r="3"></circle>
									<circle cx="6" cy="18" r="3"></circle>
									<path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
								</svg>
							</div>
							<h2 class="text-lg text-gray-900 font-medium title-font mb-2">Easy to use</h2>
							<p class="leading-relaxed text-base">
								Just input your image in the form below and get the result
							</p>
						</div>
					</div>
					<div class="xl:w-1/3 md:w-1/2 p-4">
						<div class="border border-gray-200 p-6 rounded-lg">
							<div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
								<svg
									fill="none"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									class="w-6 h-6"
									viewBox="0 0 24 24"
								>
									<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
									<circle cx="12" cy="7" r="4"></circle>
								</svg>
							</div>
							<h2 class="text-lg text-gray-900 font-medium title-font mb-2">No Login Required</h2>
							<p class="leading-relaxed text-base">
								You don't have to make a account now to use this app.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Info;
