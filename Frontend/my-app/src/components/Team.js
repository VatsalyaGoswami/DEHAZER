import React from 'react';

function Team() {
	return (
		<section id="/team" class="text-gray-400 bg-gray-900 body-font ">
			<div class="container px-5 py-24 mx-auto">
				<div class="flex flex-col text-center w-full mb-20">
					<h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Our Team</h1>
					<p class="lg:w-2/3 mx-auto leading-relaxed text-base"></p>
				</div>
				<div class="flex flex-wrap -m-2">
					<div class="p-2 lg:w-1/3 md:w-1/2 w-full">
						<div class="h-full flex items-center border-gray-800 border p-4 rounded-lg">
							<img
								alt="team"
								class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
								src="https://media-exp1.licdn.com/dms/image/C5603AQGodjlctnVMww/profile-displayphoto-shrink_800_800/0/1630359114558?e=1655337600&v=beta&t=7HR2V6eE89XFzte2E1kXN_jcGjXNQXM-920swr3i3fE"
							/>
							<div class="flex-grow">
								<h2 class="text-white title-font font-medium">Vatsalya Goswami</h2>
								<p class="text-gray-600">PROJECT Lead</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Team;
