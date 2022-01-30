import axios from "axios";
import { useEffect, useState } from "react"
import OrganizationCard from "../../components/dashboard/organizationCard"

//let orgs = ["Organization 1", "Organization 2", "Organization 3"]



export default () => {
    
    const [orgs,setOrgs]=useState()
    useEffect(async()=>{
        
          
        
        let res=await axios.get("http://localhost:5000/api/users/orgs",{
            headers:{
                "token":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZjYwZTFjODYyZjIzMDhhODVkYTUwOSIsIjYxZjYxMmYyOGE1MWU4OGVkOTRiYWE5NiI6dHJ1ZSwiaWF0IjoxNjQzNTIyNjQ2LCJleHAiOjE2NDM3ODE4NDZ9.f1YsIQOZX0oGUHOsn9NeJaE7FQmFXb0FqWsnOuMoxYg"
            }
        }
        )
    
        if(res.data.data){
            console.log(res.data.data.namesId); 
            setOrgs(res.data.data.namesId)
        }
        
        console.log(orgs);
    
   

    },[])
    return (
        <>
            <div className="my-24">
                <h1 className="text-5xl my-5 font-bold title-font text-gray-700">Dashboard</h1>
                <p>Manage your organizations here!</p>       
            </div>
            <div>
<<<<<<< HEAD
                    {orgs.map(item => {
                        return <OrganizationCard 
                        name={item} 
                        role="Manager"
                        button1="View Projects"
                        />
                    })}
=======
                {orgs && orgs.map(({oname,role,id}) => {
                    return <OrganizationCard 
                    name={oname} 
                    role={role}
                    key={id}
                    id={id}
                    button1="View Projects"
                    />
                })}
>>>>>>> 93280e207b4890a580110b4dbda61541ede09e71
            </div>
        </>
    )
}