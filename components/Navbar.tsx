import React from "react";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="navbar bg-neutral text-neutral-content">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">Algebra Calculator</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <Link href="/calculator"><li> <a>Calculator</a></li></Link>
                    <li tabIndex={0}>
                        <a>
                            Conjunction
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                        </a>
                        <ul className="p-2 bg-neutral">
                                <Link href="/conjunction"> <li><a>Tutorial</a></li></Link>
                                
                                <Link href="/conjunction/create"> <li><a>Create / View</a></li></Link>
                        </ul>
                        </li>
                    <Link href="/about"><li><a>About</a></li></Link>
                </ul>
            </div>
         </div>
    );
}
 
export default Navbar ;