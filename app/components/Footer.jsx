import React from 'react'

function Footer() {
  let date = new Date();
  let year = date.getFullYear() 
  return (
    <>
        <div className="container-fluid bg-slate-300 text-slate-600 mt-5 py-5">
            <div className="row">
            <div className="col-6 mx-auto text-center">
                <h1 className="sm:text-1xl xl:text-4xl md:text-3xl fw-bold">Created By NEO AYUSH | &copy;copyright {year}</h1>
            </div>
            </div>
        </div>
    </>
  )
}

export default Footer