import Link from 'next/link';
import logo from '@/assets/logo.png';
import NavLink from './nav-link';

export default function Header() {
    return (
        <header className="flex flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row sm:px-[8%] sm:py-8">
            <Link href="/" className="flex gap-4 items-center">
                <img
                    className="h-24 w-20 object-contain drop-shadow-lg transition-transform duration-200 hover:scale-105 hover:-rotate-3"
                    src={logo.src}
                    alt="Logo for Resturant"
                />
            <h1 className="text-2xl font-bold text-white">Yummy Meals</h1>
            </Link>
            <nav>
                <ul className="flex items-center gap-2 sm:gap-4">
                    <li>
                       <NavLink href="/meals">Our Meals</NavLink>
                    </li>
                    <li>
                        <NavLink href="/community">Community</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
    