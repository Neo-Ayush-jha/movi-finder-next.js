import Link from 'next/link'
import React from 'react'
import MovieCard from '../components/MovieCard';


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
const page = async () => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  const url = process.env.RAPID_KEY;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '79eef92ad3msh2574463fd0ea9b2p1e7024jsn6ef70d0a6bd1',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };
  const res = await fetch(url, options)
  const data = await res.json();
  const main_data = data.titles;
  console.log(main_data.jawSummary)
  return (
    <div className="flex container ">
      <div className="row justify-center items-center text-center my-3">
        <h1 className="text-bold text-6xl text-slate-500">All movie's and web serice</h1>
        <div className="row">
          {
            main_data.map((curElem) => {
              return <MovieCard key={curElem.id} {...curElem} />
            })
          }
        </div>
      </div>

    </div >
  )
}

export default page