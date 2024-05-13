import React from 'react'
import { FormInput } from './FormInput'

export default function VinForm () {
  return (
    <div className='w-full'>
        <form className="w-full">
            <FormInput              
              type="text"
              placeholder= "Enter Vin Number"
              className="py-5 px-4 text-lg rounded-lg outline-none w-full"
            />
        </form>
    </div>
  )
}

