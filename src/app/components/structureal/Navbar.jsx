
import Btn from "../general/Btn"


export default function(){
    return(
        <nav className="w-screen h-fit flex justify-center p-0 m-0">
            <ul id="nav" className="flex justify-around items-center p-2 w-[80vw] border rounded mt-1.5">
                <li><Btn name="🏠" url="/" /></li>
                <li className="flex gap-1 justify-center"><input className="textbox outline-none border rounded pl-1" placeholder="search..." type="text" name="search" id="search" /><Btn name="🔍" type="submit"/></li>
                <li><Btn name="login" url="/Login" /></li>
            </ul>
        </nav>
    )
}