import OrganizationCard from "../../components/dashboard/organizationCard"

let orgs = ["Organization 1", "Organization 2", "Organization 3"]



export default () => {
    return (
        <>
            <div className="my-24">
                <h1 className="text-5xl my-5 font-bold title-font text-gray-700">Dashboard</h1>
                <p>Manage your organizaitons here!</p>       
            </div>
            <div>
                {orgs.map(item => {
                    return <OrganizationCard 
                    name={item} 
                    role="Manager"
                    button1="View Projects"
                    />
                })}
            </div>
        </>
    )
}