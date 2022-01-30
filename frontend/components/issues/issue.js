import Tag from './tag'
import Status from './status'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Issue(props) {
    const router = useRouter()

    console.log("here")
    console.log(props)
    console.log(router.query)
    return (
        <tbody className="bg-white divide-y divide-gray-200">
            <tr>
                <td className="px-6 py-2 whitespace-nowrap">
                    <div className="flex items-center">
                        <div className="text-2xl font-medium text-gray-900 ">
                            {props.issueName}
                        </div>
                    </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-md text-gray-900">
                    {props.authorName}
                    </div>
                </td>
                <td className="px-6 py-4">
                    <div className="flex flex-wrap w-36">
                        {props.tags.map(item => <Tag tag={item} />)}
                    </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <Status status={props.status} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-md text-gray-900">
                    {props.assignedTo}
                </td>
                <td className="py-4 px-6 whitespace-nowrap text-sm text-left font-medium">
                    <button
                        className=" bg-gray-800 text-white w-24 h-10"
                        style={{ borderRadius: "25px" }}
                    >   
                    <Link href={`${router.query.organizationName}/${router.query.projectName}/issues/${props.issueName}`}>
                        <a>
                            View
                        </a>
                    </Link>
                    </button>
                </td>
            </tr>
        </tbody>
    )
}