import axios from "axios";
import { Router, useRouter } from "next/router";
import React, { useState } from "react";

const Login = () => {
	const [email,setEmail]=useState("")
	const [password,setPassword]=useState("")
	const router=useRouter()
	const handleSubmit=()=>{
		axios.post("http://localhost:5000/api/auth/login",
		{
			email,
			password
		})
		.then((res)=>{
			console.log(res);
			if(res.data.data){
		
		
				localStorage.setItem("token",res.data.data.token);
				router.push("/dashboard");
			}
				
		})
		.catch((e)=>console.error(e))
	}

	return (
		<section className="text-gray-600">
			<div className=" w-96 bg-gray-100 rounded-lg p-8 flex flex-col mx-auto ">
				<h2 className="text-gray-900 text-3xl font-medium title-font mb-5 text-center">
					Login
				</h2>
				<div className="relative mb-4">
					<label
						for="email"
						className="leading-7 text-lg text-gray-800"
					>
						Email
					</label>
					<input
						type="email"
						id="email"
						name="email"
						value={email}
						onChange={(e)=>setEmail(e.target.value)}
						className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
					/>
				</div>
				<div className="relative mb-4">
					<label
						for="password"
						className="leading-7 text-lg text-gray-800"
					>
						Password
					</label>
					<input
						type="text"
						id="password"
						name="password"
						value={password}
						onChange={(e)=>setPassword(e.target.value)}
						className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
					/>
				</div>

				<button onClick={handleSubmit} className="text-white w-1/2 mx-auto bg-gray-800 border-0 py-2 px-8 focus:outline-none hover:bg-black rounded text-lg">
					Login
				</button>
			</div>
		</section>
	);
};

export default Login;
