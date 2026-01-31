import Btn from "@/app/components/general/Btn"



export default function Login(){
    return(
        <div className="formcontainer">
            <h1>Login</h1>
            <form method="post" className="grid-row-7 grid-cols-2">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" className="textbox outline-none border rounded pl-1" />
                <label htmlFor="pass">Password</label>
                <input type="password" name="password" id="password" className="textbox outline-none border rounded pl-1"/>
                <Btn name="Login" type="submit" />
            </form>
            <Btn name="Forgot password ?" url="/Forgot" />
            <Btn name="New User ? register here" url="/Register" />
        </div>
    )
}