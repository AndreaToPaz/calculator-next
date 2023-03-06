import React from "react";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="navbar bg-opacity-80 text-neutral-content">
            <div className="flex-1">
                <Link className= "btn btn-ghost normal-case text-xl" href="/">Algebra Calculator</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><Link href="/calculator">Calculator</Link></li>
                    <li tabIndex={0}>
                        <a>
                            Conjunction
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                        </a>
                        <ul className="p-2 bg-neutral">
                            <li><Link href="/conjunction"> Tutorial</Link></li>
                            <li> <Link href="/conjunction/create">Create / View</Link></li>
                        </ul>
                        </li>
                    <li><Link href="/about">About</Link></li>
                </ul>
            </div>
         </div>
    );
}
 
export default Navbar ;