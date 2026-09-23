import Link from 'next/link';
import logo from '@/assets/logo.png';

export default function Header() {
    return (
        <header className="flex flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row sm:px-[8%] sm:py-8">
            <Link href="/" className="flex gap-4 items-center">
                <img
                    className="h-24 w-20 object-contain drop-shadow-lg transition-transform duration-200 hover:scale-105 hover:-rotate-3"
                    src={logo.src}
                    alt="Logo for Resturant"
                />
            <h1 className="text-2xl font-bold text-white">Burger Shop</h1>
            </Link>
            <nav>
                <ul className="flex items-center gap-2 sm:gap-4">
                    <li>
                        <Link
                            href="/meals"
                            className="rounded-full px-4 py-2 font-bold text-amber-50 text-white transition-colors hover:bg-amber-400 hover:text-stone-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-300"
                        >
                            Meals
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/meals/share"
                            className="rounded-full bg-amber-400 px-5 py-2 font-bold text-stone-900 shadow-md transition-colors hover:bg-red-600 hover:text-amber-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-300"
                        >
                            Share Meal
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/community"
                            className="rounded-full px-4 py-2 font-bold text-amber-50 transition-colors hover:bg-amber-400 hover:text-stone-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-300"
                        >
                            Community
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}