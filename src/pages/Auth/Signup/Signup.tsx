import React,{useState}from 'react'
import "./Signup.css"
import { useNavigate } from 'react-router-dom'
import signupdata from '../../../models/signupmodel'


export let mydata={}

function Signup() {
    const [data,setData]=useState<signupdata>({
        name:"",
        phonenumber:"",
        email:"",
        password:"",
        companyname:"",
        agency:false
    })

    const navigate=useNavigate()
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        mydata={
            ...data
        }
        setData({
            name:"",
            phonenumber:0,
            email:"",
            password:"",
            companyname:"",
            agency:false
        })

        navigate("/auth/login")
    }

    return (
        <div className='signup'>
            <h1 className='title'>Create Your PopX Account</h1>
            <div className='form-container'>
                <form onSubmit={handleSubmit} className='form'>

                        <div className='input-container'>
                            <input type="text" name="" id="name" className='input' placeholder=' ' 
                            value={data.name}
                            onChange={(e)=>{setData((prev)=>({...prev,name:e.target.value}))}}/>
                            <div className='cut'></div>
                            <label htmlFor="name" className='placeholder'>Name</label>
                        </div>

                        <div className='input-container'>
                            <input type="tel" minLength={10} name='' id="phn-number" className='input' placeholder=' ' pattern="^[0-9-+\s()]*$" 
                            value={data.phonenumber} 
                            onChange={(e)=>{setData((prev)=>({...prev,phonenumber:Number(e.target.value)}))}} />
                            <div className='cut'></div>
                            <label htmlFor="phn-number" className='placeholder'>Phone Number</label>
                        </div>

                        <div className='input-container' >
                            <input type="email" name="" id="email" className='input' placeholder=' '
                            value={data.email} 
                            onChange={(e)=>{setData((prev)=>({...prev,email:e.target.value}))}}/>
                            <div className='cut'></div>
                            <label htmlFor="email" className='placeholder'>Email address</label>
                        </div>

                        <div className='input-container'>
                            <input type="text" name="" id="password" className='input' placeholder=' '
                            value={data.password} 
                            onChange={(e)=>{setData((prev)=>({...prev,password:e.target.value}))}}/>
                            <div className='cut'></div>
                            <label htmlFor="password" className='placeholder'>Password</label>
                        </div>

                        <div className='input-container'>
                            <input type="text" name="" id="company" className='input' placeholder=' '
                            value={data.companyname} 
                            onChange={(e)=>{setData((prev)=>({...prev,companyname:e.target.value}))}}/>
                            <div className='cut'></div>
                            <label htmlFor="company" className='placeholder'>Company Name</label>
                        </div>

                        <div className='radio-container'>
                            <p>Are You an Agency?</p>
                            <div className='radio-section'>
                                <label htmlFor="agency-true">yes</label>
                                <input type="radio" name="radio" id="agency-true" value="true"
                                onChange={(e)=>{setData((prev)=>({...prev,agency:Boolean(e.target.value)}))}} className='radio' />
                                <label htmlFor="agency-false">no</label>
                                <input type="radio" name="radio" id="agency-false" value="false" className='radio' onChange={(e)=>{setData((prev)=>({...prev,agency:Boolean(e.target.value)}))}} />
                            </div>
                        </div>


                    <div>
                        <button type="submit" className='submit'>Create Account</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Signup;
