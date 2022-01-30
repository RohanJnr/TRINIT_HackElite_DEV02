import { useRouter } from 'next/router'

export default function ProjectCard(props) {
    const router = useRouter()

    const handleNewIssueRoute = () => {
        return `${props.organization}/${props.name}/issues/new`
    }

    return (
        <div onClick={()=>router.push({
            pathname: `[organizationName]/[projectName]/issues`,
            query: {organizationName: router.query.organizationName, projectName: props.name}
        })} className="my-20 p-10 w-full flex flex-row shadow-xl md:rounded-lg justify-between items-center bg-white hover:scale-105 ease-in duration-300 cursor-pointer">
            <div className="p-2">
                <h1 className="text-4xl font-bold title-font text-gray-700 my-2">{props.name}</h1>
                <small className="text-lg font-semibold text-gray-500 m-1">Role: {props.role}</small>
                <p className="m-1 mt-4 text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nostrum dolorem molestias quae. Id perferendis veniam impedit aperiam tenetur ipsum veritatis quibusdam delectus, asperiores blanditiis?.</p>
            </div>
            <div className="flex flex-col">
                <button className="bg-gray-800 text-xs hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-full m-2">
                    {props.button1}
                </button>
                {props.button2 ? (
                    <button className="bg-gray-800 text-xs hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-full m-2">
                        {props.button2}
                    </button>
                ):<></>}
                
            </div>
        </div>
    )
}