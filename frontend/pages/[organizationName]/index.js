import ProjectCard from "../../components/projects/projectCard"
import OrganizationNavbar from "../../components/organizationNav"
import Image from 'next/image'
import samplePic from '../../images/sampel.jpg'


export default (props) => {
    return (
        <>
            <div className="bg-slate-50 pt-5">
                <div className="my-24 flex">
                    <div className="mx-4">
                        <Image src={samplePic} width={300} height={300} className="rounded-full"/>
                    </div>
                    <div className="mx-4">
                        <h1 className="text-5xl my-5 font-bold title-font text-gray-700">{props.organizationName}</h1>
                        <p>{props.description}</p>  
                    </div>
     
                </div>
                <OrganizationNavbar />
            </div>
            
            <div className="bg-slate-50 p-5">
                {props.projects.map(item => {
                    return <ProjectCard 
                    organization={props.organizationName}
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
    const organizationName = context.query.organizationName
    console.log(organizationName)
    return {
        props: {
            organizationName,
            projects: ["Project 1", "Project 2"],
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aspernatur repellendus, saepe veritatis natus mollitia blanditiis. Maiores enim voluptate minima porro provident quasi maxime doloremque?"
        }
    }
}