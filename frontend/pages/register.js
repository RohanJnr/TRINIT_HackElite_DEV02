import React from "react";

const Register = () => {
	return (
		<section className="text-gray-600">
			<div
				className="bg-gray-100 rounded-lg p-8 flex flex-col mx-auto "
				style={{ width: "30rem" }}
			>
				<h2 className="text-gray-900 text-3xl font-medium title-font mb-5 text-center">
					Register
				</h2>
				<div className="relative mb-4">
					<label
						for="fname"
						className="leading-7 text-lg text-gray-800"
					>
						First Name
					</label>
					<input
						type="text"
						id="fname"
						name="fname"
						className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
					/>
				</div>
				<div className="relative mb-4">
					<label
						for="lname"
						className="leading-7 text-lg text-gray-800"
					>
						Last Name
					</label>
					<input
						type="text"
						id="lname"
						name="lname"
						className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
					/>
				</div>
				<div className="relative mb-4">
					<label
						for="username"
						className="leading-7 text-lg text-gray-800"
					>
						Username
					</label>
					<input
						type="text"
						id="username"
						name="username"
						className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
					/>
				</div>
				<div className="relative mb-4">
					<label
						for="email"
						className="leading-7 text-lg text-gray-800"
					>
						Email
					</label>
					<input
						type="email"
						id="email"
						name="email"
						className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
					/>
				</div>
				<div className="relative mb-4">
					<label
						for="password"
						className="leading-7 text-lg text-gray-800"
					>
						Password
					</label>
					<input
						type="password"
						id="password"
						name="password"
						className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
					/>
				</div>

				<button className="text-white w-1/2 mx-auto bg-gray-800 border-0 py-2 px-8 focus:outline-none hover:bg-black rounded text-lg">
					Register
				</button>
			</div>
		</section>
	);
};

export default Register;
