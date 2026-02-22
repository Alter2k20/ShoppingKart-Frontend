"use client"
import {useState} from "react"

import Btn from "@/app/components/general/Btn"

export default function Forgot(){

    const [formData, setFormData] = useState({
        email:""
    })

    const handleChange = (e) => {
        const {name, value} = e.target

        setFormData(()=>({
            [name]:value
        }))
        
    }

    const handleSubmit = async (e) =>{
        e.preventDeafault()

        let res 
        try{
            res = await ForgotPassword()
        }catch (err){
            console.log(err)
        }
    }

    return(
        <div className="formcontainer">
            <h1>Forgot Password</h1>
            <form method="post" onSubmit={handleSubmit}>
                <label htmlFor="email">Enter email</label>
                <input type="email" name="email" id="email" className="textbox outline-none border rounded pl-1" required onChange={handleChange} />

                <Btn name="Submit" type="submit" />
            </form>
        </div>

    )
}