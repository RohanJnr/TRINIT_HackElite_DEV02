const axios=require("axios");
const {initUsers}=require("./sample");

/*
const usr_req=(data)=>{
    axios.post("http://localhost:5000/api/auth/register",data)
    .then((res)=>console.log(res))
    .catch((e)=>console.log(e));
    
}

initUsers.forEach((item)=>usr_req(item));

*/

const crt_org=(data,token)=>{
    axios.post("http://localhost:5000/api/org",
    item,
    {
        Headers:{
            "token":token
        }
    })
    .then((res)=>console.log(res))
    .catch((e)=>console.log(e))
}

let logins=[{email:"George123@mail.com",password:"George123"},
{email:"Raphael123@mail.com",password:"Raphael123"},,
{email:"Hannah123@mail.com",password:"Hannah123"},
]


const login=async(data)=>{
    const res=await axios.post("http://localhost:5000/api/auth/login",data);
    if(res.token){
        
    }
}