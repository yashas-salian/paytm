import {Heading} from '../components/heading'
import {Subheading} from '../components/subheading'
import {InputBox} from '../components/inputBox'
import {ButtonWarning} from '../components/buttonWarning'
import { Button } from '../components/button'
export const Signin=()=>{
    return <div className='bg-slate-300 h-screen flex justify-center'>
    <div className='flex flex-col justify-center'>
        <div className='rounded-lg bg-white w-80 text-center p-2 h-max px-4'>
                <Heading label={"Signin"}/>
                <Subheading label={"Enter your information to create an account"}/>
                <InputBox label="Email" placeholder={"yashas123@gmail.com"}/>
                <InputBox label="Password" placeholder={"12345"}/>
                <div>
                    <Button label={"signin"}/>
                </div>
                <ButtonWarning label={"Don't have an account?"} buttonText={"signup"} to={"/signup"}/>
            </div>
        </div>
</div>
}