import OrganizationCard from "../../components/dashboard/organizationCard"

export default (props) => {
    return (
        <>
            <div className="my-24">
                <h1 className="text-5xl my-5 font-bold title-font text-gray-700">{props.id}</h1>
                <p>Manage your organizaitons here!</p>       
            </div>
            <div>
                {props.projects.map(item => {
                    return <OrganizationCard 
                    name={item} 
                    role="Manager"
                    button1="View Issues"
                    button2="View Members"
                    />
                })}
            </div>
        </>
    )
}

export async function getServerSideProps(context) {
    const id = context.params.id
    console.log(id)
    return {
        props: {
            id,
            projects: ["Project 1", "Project 2"]
        }
    }
}