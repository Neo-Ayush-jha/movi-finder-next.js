import Image from 'next/image'
import logo from '@/public/logo.webp'
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
function Header() {
    return (
        <>
            <div className='flex flex-1 bg-[#055160] text-white justify-between px-36 py-3    items-center gap-5 sm:w-400 md:w-700 lg:w-900'>
                <div className="flex flex-row items-center">
                    <span className="[&>svg]:w-7 flex-row">
                        <span className="hover:text-yellow-400 text-slate-300 font-bold text-3xl">#movie_finder</span>
                    </span>
                </div>

                <form className="d-flex">
                    <input type="text" placeholder="Search for products, brands and more" className="rounded-l-lg p-2 border-t border-b border-l text-gray-800 border-gray-200 bg-white sm:w-40 md:w-56 lg:w-64" />
                    <button type="submit" className="rounded-r-lg bg-blue-500 hover:bg-blue-700 text-white p-2">Search</button>
                </form>
                <div className="flex gap-5  justify-center items-center hover:text-slate-100">
                    <Link href="/" className='hover:text-yellow-400 text-slate-300 text-decoration-none'>Home</Link>
                    <Link href="/about" className='hover:text-yellow-400 text-slate-300 text-decoration-none'>About</Link>
                    <Link href="/contact" className='hover:text-slate-100 text-slate-300 text-decoration-none'>Login</Link>
                    <Link href="/movie" className='hover:text-yellow-400 text-slate-300 text-decoration-none'><i className="bi bi-film"></i> Cart</Link>
                </div>
            </div>
        </>
    )
}

export default Header