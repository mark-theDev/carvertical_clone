import React from 'react'
import VinForm from './VinForm'
import { FaQuestion } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";


const ReportButton = () => {
  return (
    <div className="lg:flex lg:flex-col lg:items-start lg:justify-start relative lg:w-[100%] w-full sm:max-w-[70%] ">
        <VinForm />
        <button className="sm:absolute hover:bg-yellow-500 w-full mt-3 sm:mt-0 sm:w-fit transition top-4 right-2 bg-yellow-300 text-sm font-medium px-2 py-2 rounded-2xl">
          Get Report
        </button>        
        <button className="bg-gray-300 absolute top-6 right-3 sm:right-[120px] px-1 py-1 rounded-full hover:bg-gray-800 transition"><FaQuestion className="text-white text-xs" /></button>
        <button className='flex text-sm gap-2 font-bold py-1 items-center justify-center border-2 border-black mt-4 rounded-xl w-full transition duration-300 hover:text-gray-500 hover:border-gray-500'>I don't have VIN <FaArrowRight className='text-base pb-1' /></button>
    </div>
  )
}
export default ReportButton