import {Heading} from '../components/heading'
import {Subheading} from '../components/subheading'
import {InputBox} from '../components/inputBox'
import {ButtonWarning} from '../components/buttonWarning'
import { Button } from '../components/button'
import { useState } from 'react'
import axios from 'axios'
export const Signup=()=>{
    const [firstname, setFirstname]= useState("")
    const [lastname, setLastname]= useState("")
    const [Email, setEmail]= useState("")
    const [Password, setPassword]= useState("")
    return <div className='bg-slate-300 h-screen flex justify-center'>
        <div className='flex flex-col justify-center'>
            <div className='rounded-lg bg-white w-80 text-center p-2 h-max px-4'>
                <Heading label={"Signup"}/>
                <Subheading label={"Enter your information to create an account"}/>
                <InputBox onChange={(e)=>{
                    setFirstname(e.target.value)
                }} label="First name" placeholder={"Yashas"}/>
                <InputBox onChange={(e)=>{
                    setLastname(e.target.value)
                }}label="Last name" placeholder={"Salian"}/>
                <InputBox onChange={(e)=>{
                    setEmail(e.target.value)
                }}label="Email" placeholder={"yashas123@gmail.com"}/>
                <InputBox onChange={(e)=>{
                    setPassword(e.target.value)
                }}label="Password" placeholder={"12345"}/>
                <div>
                    <Button onClick={()=>{
                        axios.post("https://localhost:3000/api/v1/user/signup",{
                            Email,
                            firstname,
                            lastname,
                            Password
                        })
                    }} label={"signup"}/>
                </div>
                <ButtonWarning label={"Already have an account?"} buttonText={"signin"} to="/signin"/>
            </div>
        </div>
    </div>
}