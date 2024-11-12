"use client";

import { loadGetInitialProps } from "next/dist/shared/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        name: 'home',
        path: "/"
    },
    {
        name: 'services',
        path: "/services"
    },
    {
        name: 'resume',
        path: "/resume"
    },
    {
        name: 'project',
        path: "/project"
    },
    {
        name: 'contact',
        path: "/contact"
    },
];

const Nav = () => {
    const pathname = usePathname();
    console.log(pathname)
    return( 
    <nav className="flex gap-8 justify-end ">
        {links.map((link, index)=> {
            return ( <Link href={link.path} key={index}
             className={`${
              link.path === pathname && "text-lime-500 border-b-2 border-lime-500"
             } capitalize font-medium hover:text-lime-500 transition-all`}
             >
                {link.name}
            </Link>
            );
        })}
    </nav>
    );
};
export default Nav;