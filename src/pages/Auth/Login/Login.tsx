import React, { useState } from 'react'
import "./Login.css"
import { useNavigate } from 'react-router-dom';
import { logindata } from '../../../models/signupmodel';
import { mydata } from '../Signup/Signup';

export interface review{
        name?:string,
        phonenumber?:string,
        email?:string,
        password?:string,
        companyname?:string,
        agency?:boolean
}


const Login = () => {
    const reviewdata:review=mydata
    const [data,setData]=useState<logindata>({
        email:"",
        password:""
    })
    const[err,setErr]=useState<string>("")
    const navigate = useNavigate();
    const handleLoginSubmit=(e:React.FormEvent)=>{
        e.preventDefault()
        console.log("review data",reviewdata)
        console.log("data",data)
        if(!data.email||!data.password){
            setErr("fill all the details")
            return
        }
        if (data.email!==reviewdata?.email || data.password!==reviewdata?.password) {
            setErr("incorrect data")
            return
        }

        navigate('/final');
    }

  return (
    <div className="container">
        <div className="login-box">
            <div className='headline'>
            <h2>Signin to your PopX account</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <form onSubmit={handleLoginSubmit}>
                <div className="input-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" placeholder="Enter email address" 
                    value={data.email}
                    onChange={(e)=>setData((prev)=>({...prev,email:e.target.value}))}/>
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="text" id="password" placeholder="Enter password"
                    value={data.password}
                    onChange={(e)=>{setData((prev)=>({...prev,password:e.target.value}))}}
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
        <div className='err'>{err && <p>{err}</p>}</div>
    </div>
  )
}

export default Login
