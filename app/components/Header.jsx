import Image from 'next/image'
import logo from '@/public/logo.webp'
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import heroStyles from "@/app/styles/home.module.css"

function Header() {
    return (
        <>
            <div className='flex flex-1 bg-[#055160] text-white justify-between xl:px-36 md:px-26 sm:px-16 py-3 items-center xl:gap-5 md:gap-3 sm:gap-1 sm:w-240 md:w-600 lg:w-900'>
                <div className="flex flex-row items-center">
                    <span className="[&>svg]:w-7 flex-row">
                        <span className="hover:text-yellow-400 text-slate-300 font-bold xl:text-3xl md:text-2xl sm:text-1xl">#movie_finder</span>
                    </span>
                </div>
                
                <div className="flex flex-1 gap-5  justify-center items-center hover:text-slate-100">
                    <Link href="/" className='hover:text-yellow-400 text-slate-300 text-decoration-none'>Home</Link>
                    <Link href="/about" className='hover:text-yellow-400 text-slate-300 text-decoration-none'>About</Link>
                    <Link href="/login" className='hover:text-slate-100 text-slate-300 text-decoration-none'><i className="bi bi-lock"></i>Login</Link>
                </div>
            </div>
        </>
    )
}

export default Header