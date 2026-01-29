import Link from "next/link";
import About from "../../(public)/About/page";

export default function Footer(){
    return(
        <footer id="footer" className="flex flex-col justify-around">
            <Link href={"/About"} >About us</Link>
            <Link href={"/Login"}>Join As Merchant </Link>
        </footer>
    );
    
}