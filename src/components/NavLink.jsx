"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ link }) => {
    const pathName = usePathname();

    return (
        <Link className={`rounded py-1 px-2 ms-2 ${pathName === link.url && "bg-black text-white"} transition-all duration-300 ease-out`} href={link.url}>
            {link.title}
        </Link>
    );
};

export default NavLink;