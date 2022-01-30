import React from "react";

const CreateProject = () => {
	return (
		<section className="text-gray-600">
			<div className=" w-96 bg-gray-100 rounded-lg p-8 flex flex-col mx-auto ">
				<h2 className="text-gray-900 text-3xl font-medium title-font mb-5 text-center">
					Create Project
				</h2>
				<div className="relative mb-4">
					<label
						for="oname"
						className="leading-7 text-lg text-gray-800"
					>
						Project Name
					</label>
					<input
						type="text"
						id="oname"
						name="oname"
						className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
					/>
				</div>
				<div className="relative mb-4">
					<label
						for="description"
						className="leading-7 text-lg text-gray-800"
					>
						Description
					</label>
					<textarea
						id="description"
						name="description"
						class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
					></textarea>
				</div>

				<button className="text-white w-1/2 mx-auto bg-gray-800 border-0 py-2 px-8 focus:outline-none hover:bg-black rounded text-lg">
					Create
				</button>
			</div>
		</section>
	);
};

export default CreateProject;
