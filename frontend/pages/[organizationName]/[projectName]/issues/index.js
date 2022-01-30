import React from "react";
import Issue from '../../../../components/issues/issue'

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
							<Issue 
							issueName="Not working"
							authorName="Someone"
							tags={["tag 1", "tag 2"]}
							status="Approved"
							assignedTo="xyz"
							/>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Issues;
