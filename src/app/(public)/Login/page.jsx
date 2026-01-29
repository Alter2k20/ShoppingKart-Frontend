import Btn from "@/app/components/general/Btn"



export default function Login(){
    return(
        <div className="m-2 flex justify-center items-center w-full h-full">
            
            <form method="post" className="bg-[#FFFFFF] grid grid-rows-7 p-4 m-4 w-[40vw] h-[60vh] border-0 rounded items-center gap-1">
                <h1>Login</h1>
                <label htmlFor="cemail">Email</label>
                <input type="email" name="cemail" id="cemail" className="textbox outline-none border rounded pl-1" />
                <label htmlFor="cpass">Password</label>
                <input type="password" name="cpass" id="cpass" className="textbox outline-none border rounded pl-1"/>
                <Btn name="Login" type="submit" />
                <Btn name="Forgot password ?" url="/Customer/Forgot" />
            </form>
        </div>
    )
}