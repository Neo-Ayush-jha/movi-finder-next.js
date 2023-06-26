import Image from "next/image";
import React from 'react'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Link from "next/link";
const MovieCard = (curElem) => {
    
    const { id, type, title, synopsis } = curElem.jawSummary;
    return (
        <>
            <div className="flex-1 my-2 col-xl-3 col-sm-3 px-2 py-3 border-slate-600 border justify-center items-center rounded ">
                <Image src={curElem.jawSummary.backgroundImage.url} alt={title} width={360} height={300} />
                <h3 className="text-xl font-bold my-2">{title.substring(0, 20)}</h3>
                <p className="text-gray-700 mb-4">{`${synopsis.substring(0, 70)}...`}</p>
                <Link href={`/movie/${id}`} className="bg-[#055160] text-decoration-none hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">Button</Link>
            </div>

        </>
    )
}

export default MovieCard