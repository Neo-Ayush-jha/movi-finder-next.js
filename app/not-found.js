import Link from "next/link";

const NotFound = () => {
    return (
        <div className='flex-1 flex flex-col  rounded bg-slate-300 gap-2 h-[97vh] justify-center items-center'>
            <div className="flex flex-col justify-center items-center">
                <h1 className='text-slate-900  text-bold text-6xl'>404</h1>
                <h2 className="font-bold text-5xl my-4">Not Found</h2>
                <p>Could not find requested resource</p>
                <Link href="/" className='bg-teal-600 text-white px-4 py-3 text-decoration-none hover:bg-[#055160] text-white  text-2xl rounded' style={{width:"450px"}}>Go back to the home page...</Link>
            </div>
        </div>
    );
}

export default NotFound;