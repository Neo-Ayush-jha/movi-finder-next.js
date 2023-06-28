import Image from "next/image";
import React from 'react'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Link from "next/link";
const page = async ({ params }) => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  const id = params.id;
  const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '79eef92ad3msh2574463fd0ea9b2p1e7024jsn6ef70d0a6bd1',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };
  const res = await fetch(url, options)
  const data = await res.json();
  const main_data = data[0].details;
  return (
    <>
      <div className='flex-1 flex flex-row px-14 py-16 rounded bg-slate-300 gap-2 h-[97vh]'>
        <h1 className='font-bold text-4xl'> Netflix \ <span> {main_data.type} </span></h1>
        <div className="flex flex-row px-10">
          <div className="w-8/12 justify-center items-center">
            <Image src={main_data.backgroundImage.url} alt={main_data.title} width={800} height={500} />
          </div>
          <div className="w-6/12 justify-center items-center">
            <p className='text-slate-900 text-bold text-3xl'>Title: {main_data.title} </p>
            <p className="text-1xl my-4"><span className="font-bold">Discription:</span> {main_data.synopsis}</p>
            <div className="flex justify-end">
              <Link href="/movie" className='bg-teal-600 text-white px-4 py-3 text-decoration-none hover:bg-[#055160] text-white font-bold text-3xl rounded'>Back</Link>

            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default page
