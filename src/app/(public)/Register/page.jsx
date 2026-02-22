"use client"
import { useState } from "react"


import Btn from "@/app/components/general/Btn"

import { UserRegister } from "@/lib/api/user"
import { MerchantRegister } from "@/lib/api/merchant"

export default function Register() {
    const [merchant, setMerchant] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
    setFormData(prev => ({
        ...prev,
        [name]: value
    }))
    }


    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        address: "",
        city: "",
        state: "",
        pincode: "",
        password: "",
        // isorg: false,
        org: ""
    })

    const buildPayload = () => {
    if (merchant) {
        const { org, ...common } = formData
        return {
            ...common,
            org
        }
    }

    // user payload
    const { org, ...userPayload } = formData
    return userPayload
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        let res
        const payload = buildPayload()
        // alert(JSON.stringify(payload, null, 2))
        try {
            if (merchant) {
                res = await MerchantRegister(payload)
            } else {
                res = await UserRegister(payload)
            }

            // alert("Registration successful")
        } catch (err) {
            console.error(err)
            // alert("Registration failed")
        }
        // localStorage.setItem("val",res)
    }

    return (
        <div className="formcontainer">
            <h1>Register</h1>
            <form method="post" className="" onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" className="textbox outline-none border rounded pl-1" required onChange={handleChange} />
                <label htmlFor="phone">Phone</label>
                <input type="number" name="phone" id="phone" className="textbox outline-none border rounded pl-1" required onChange={handleChange} />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" className="textbox outline-none border rounded pl-1" required onChange={handleChange} />
                <label htmlFor="address">Address</label>
                <input type="text" name="address" id="address" className="textbox outline-none border rounded pl-1" onChange={handleChange} />
                <label htmlFor="city">City</label>
                <input type="text" name="city" id="city" className="textbox outline-none border rounded pl-1" onChange={handleChange} />
                <label htmlFor="state">state</label>
                <input type="text" name="state" id="state" className="textbox outline-none border rounded pl-1" onChange={handleChange} />
                <label htmlFor="pincode">Pincode</label>
                <input type="number" name="pincode" id="pincode" className="textbox outline-none border rounded pl-1" onChange={handleChange} />
                <label htmlFor="pass">Password</label>
                <input type="password" name="password" id="password" className="textbox outline-none border rounded pl-1" required onChange={handleChange} />
                <label htmlFor="isorg">Merchant</label>
                <input
                    type="checkbox"
                    name="isorg"
                    checked={merchant}
                    onChange={(e) => {
                        setMerchant(e.target.checked)
                        // handleChange(e)
                    }}
                />
                {merchant ?
                    <>
                        <label htmlFor="org">Organization name</label>
                        <input type="text" name="org" id="org" className="textbox outline-none border rounded pl-1" required />
                    </> : <></>}
                <Btn name="Sign up" type="submit" />
                <Btn name="Forgot password ?" url="/Forgot" />
            </form>
        </div>
    )
}