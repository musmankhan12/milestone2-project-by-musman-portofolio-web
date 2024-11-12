"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import { Span } from "next/dist/trace";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuFries } from 'react-icons/ci';

const links = [
    {
        name: 'home',
        path: '/'
    },
    {
        name: 'services',
        path: '/services'
    },
    {
        name: 'resume',
        path: '/resume'
    },
    {
        name: 'project',
        path: '/project'
    },
    {
        name: 'contact',
        path: '/contact'
    },
];

const MobileNav = () => {
    const pathname = usePathname();
    return(
         <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-lime-500" />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                  {/* logo */}
                <div className="mt-32 mb-40 text-center text-2xl">
                    <Link href="/">
                       <h1 className="text-4xl font-semibold">
                        Muhammad<span className="text-lime-500">Usman</span>
                       </h1>
                     </Link>
                </div>
                <nav className="flex flex-col justify-center items-center gap-8">
                    {links.map((link, index) => {
                        return (
                            <Link
                              href={link.path}
                              key={index}
                              className={`${link.path === pathname &&
                                "text-lime-500 border-b-2 border-lime-500"
                                }  text-xl capitalize hover:text-lime-500 transition-all`}
                              >
                                {link.name}
                              </Link>
                        );
                    })}
                </nav>
            </SheetContent>
         </Sheet>   
          );
};

export default MobileNav;