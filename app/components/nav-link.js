'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function NavLink({ href, children }) {
    const path = usePathname();
    return (
        <Link
            href={href}
            className={path.startsWith(href) ? 'rounded-full px-4 py-2 font-bold bg-amber-500 text-stone-900 transition-all duration-200 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-300' : 'rounded-full px-4 py-2 font-bold text-amber-50 text-white transition-all duration-200 hover:text-amber-300 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-300'}
        >
            {children}
        </Link>
    )
}