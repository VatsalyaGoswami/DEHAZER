import React from 'react';
import { HashLink } from 'react-router-hash-link';

export const Navbar = () => {
	return (
		<section class=" dark:bg-slate-900">
			<nav class="container p-6 mx-auto lg:flex lg:justify-between lg:items-center">
				<div class="flex items-center justify-between">
					<div>
						<a
							class="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300"
							href="#"
						>
							D-E-HAZE
						</a>
					</div>

					<div class="flex lg:hidden">
						<button
							type="button"
							class="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
							aria-label="toggle menu"
						>
							<svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
								<path
									fill-rule="evenodd"
									d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
								></path>
							</svg>
						</button>
					</div>
				</div>

				<div class="flex flex-col mt-4 space-y-2 lg:mt-0 lg:flex-row lg:-mx-6 lg:space-y-0">
					<a
						class="text-gray-700 lg:mx-6 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500"
						href="#"
					>
						Home
					</a>

					<a
						class="text-gray-700 lg:mx-6 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500"
						href="#"
					>
						About
					</a>

					<a
						class="text-gray-700 lg:mx-6 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500"
						href="#"
					>
						Team
					</a>
				</div>

				<a
					class="block h-10 px-5 py-2 mt-4 text-sm text-center text-gray-700 capitalize transition-colors duration-200 transform border rounded-md dark:hover:bg-gray-700 dark:text-white lg:mt-0 hover:bg-gray-100 lg:w-auto"
					href="#"
				>
					Try Out
				</a>
			</nav>

			<div class="container px-6 py-16 mx-auto text-center">
				<div class="max-w-lg mx-auto">
					<h1 class="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl">
						Get Dehazed Images in one go.
					</h1>

					<p class="mt-8 text-gray-500 dark:text-gray-300">
						Image Dehazing is now easy and is few steps away.
					</p>
					<br />
					<button
						type="button"
						class="h-10 px-4 py-2 m-1 text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400"
					>
						Dehaze
					</button>
				</div>
			</div>
		</section>
	);
};
