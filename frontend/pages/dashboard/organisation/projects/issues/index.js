import React from "react";

const Issues = () => {
	return (
		<div className="flex flex-col">
			<div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
				<div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
					<div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
						<table className="min-w-full divide-y divide-gray-200">
							<thead className="bg-gray-100">
								<tr>
									<th
										scope="col"
										className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider"
									>
										Issue
									</th>
									<th
										scope="col"
										className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider"
									>
										Author
									</th>
									<th
										scope="col"
										className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider"
									>
										Tags
									</th>
									<th
										scope="col"
										className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider"
									>
										Status
									</th>
									<th
										scope="col"
										className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider"
									>
										Assignee
									</th>
									<th
										scope="col"
										className="relative px-6 py-3"
									>
										<span className="sr-only">Edit</span>
									</th>
								</tr>
							</thead>
							<tbody className="bg-white divide-y divide-gray-200">
								<tr>
									<td className="px-6 py-4 whitespace-nowrap">
										<div className="flex items-center">
											<div className="text-2xl font-medium text-gray-900 ">
												Issue name
											</div>
										</div>
									</td>
									<td className="px-6 py-4 whitespace-nowrap">
										<div className="text-md text-gray-900">
											Author name
										</div>
									</td>
									<td className="px-6 py-4 whitespace-nowrap">
										<span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full  text-black border-2">
											tag1
										</span>{" "}
										<br />
										<span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full text-black border-2">
											tag2
										</span>
										<br />
										<span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full text-black border-2">
											tag3
										</span>
										<br />
										<span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full text-black border-2">
											tag4
										</span>
									</td>
									<td className="px-6 py-4 whitespace-nowrap">
										<span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-200 text-green-800">
											Active
										</span>
										<br />
										<span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-200 text-red-800">
											Closed
										</span>
										<br />
										<span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-200 text-blue-800">
											Verified
										</span>
										<br />
										<span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-200 text-yellow-800">
											Under Verification
										</span>
									</td>
									<td className="px-6 py-4 whitespace-nowrap text-md text-gray-900">
										Assignee name
									</td>
									<td className="py-4 px-6 whitespace-nowrap text-sm text-left font-medium">
										<button
											className=" bg-gray-800 text-white w-24 h-10"
											style={{ borderRadius: "25px" }}
										>
											Edit
										</button>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Issues;
