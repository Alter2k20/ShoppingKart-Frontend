import Link from "next/link";

/**
 * Dynamic button component that can work as both link and button
 * @param {String} name
 * @param {String} type Button type
 * @param {String} url pass url if you want url
 * @param {Function} callback pass a callback function for button
 * @returns 
 */
export default function Btn({name, type, url, callback}){
    if (url) {
        return (
            <Link className="hover:text-blue-600" href={url} onClick={callback}>
                {name}
            </Link>
        );
    } else {
        return (
            <button className="button w-full p-1 transition duration-500 border-0 rounded" type={type} onClick={callback}>
                {name}
            </button>
        );
    }
}