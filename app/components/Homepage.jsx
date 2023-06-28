import React from 'react'
import Side from './Side'
import Link from 'next/link'
import Image from 'next/image'
import heroStyles from "@/app/styles/home.module.css"

function Homepage({ title, image }) {
  return (
    <>
      <div className='flex justify-center gap-2 items-center' style={{ backgroundImage: "url(/header.jpg)", backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', height: '100vh' }}>
        <div className="flex flex-row w-10/12 justify-center items-center">
          <div className="flex flex-col w-6/12">
            <h2 className="font-bold xl:text-6xl md:text-3xl sm-text-1xl">{title}</h2>
            <p className="text-sleat-400">From award-winning dramas to blockbuster action movies, we&apos;ve got you covered. Browse
              our
              selection of the latest and greatest movies, and find your new favorite today.</p>
            <Link href="/login">
              <button className="rounded-full bg-slate-900 hover:bg-slate-300 hover:text-slate-900 text-lg font-bold border-black text-slate-300 px-3 py-2 justify-center items-center" type='submit'>Explore Movies</button>
            </Link>
          </div>
          <div className="flex flex-col w-6/12">
            <Image src={image} alt="watching netflix" width={500} height={500} />
          </div>
        </div>
      </div>
      <div className={heroStyles['custom-shape-divider-bottom-1681647578']}>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
          preserveAspectRatio="none">
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className={heroStyles["shape-fill"]}></path>
        </svg>
      </div>
    </>
  )
}

export default Homepage