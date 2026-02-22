import Link from "next/link";

export default function Footer(){
    return(
        <footer id="footer" className="flex flex-col justify-around">
            <Link href={"/About"} >About us</Link>
            <Link href={"/Login"}>Become a Merchant </Link>
        </footer>
    );
    
}