"use client"
import React from 'react'
import { ListItems } from './ListItems';
import Button from './Button';
import Link from 'next/link';
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import FooterItems from './FooterItems';

const Footer = () => {
  const reports = ['Advantages','Sample Report','Vin Decoder: Free VIN Number Lookup','Motorcycle VIN Lookup','Pricing','Help'];
  const opportunities = ['Affiliate Program','Influencers program', 'For Business']
  const company = ['About Us','Contacts','Blog','Press Area']
  const mobileApps = ['VIN Decoder for Android', 'VIN Decoder for iOS']
  const decodersByMake = ['Audi VIN Decoder','Chevrolet VIN Decoder','Dodge VIN Decoder','Ford VIN Decoder', 'Jeep VIN Decoder', 'Lexus VIN decoder',
  'Mercedes-Benz VIN Decoder','Nissan VIN Decoder','RAM VIN Decoder','Toyota VIN Decoder', 'Volkswagen VIN Decoder']
 
  function toggleButton () {

  }

  return (
    <div className="bg-black text-white pt-12 px-8">
      <div className="flex items-center md:flex-row gap-3 flex-col">
        <div className="flex flex-col items-center w-full pb-6 border-b border-gray-900 md:border-b-0 gap-4 md:w-1/2">
          <p className="text-xl font-semibold">Join our newsletter</p>
          <p className="text-sm font-light">We'll keep you updated with exciting news, useful content and promotions.</p>
          <div className="flex flex-col relative w-full max-w-[400px]">
            <input type="text" 
            placeholder="name@example.com" 
            className="bg-black border rounded-lg text-xs py-3 px-2 max-w-[400px] 
            border-gray-400 text-gray-400"/>
            <button className="bg-gray-300 right-[10px] top-[6px] font-bold
              absolute text-xs px-2 py-2 rounded-full text-black hover:bg-black hover:text-white" >
                Subscribe
            </button>
          </div>  
          <p className="text-xs text-gray-600">You may opt out any time. For more details, review our 
            <a href="/" className="underline font-bold"> Privacy Policy.</a> 
          </p>       
        </div>
        <div className="bg-gray-500/20 mt-6 w-full md:w-1/2 px-6 text-center flex flex-col gap-2 rounded-3xl justify-between py-6">
            <p className="font-bold">Download Our App</p>
            <p className="text-sm font-light py-3">Buying or selling a used car? Try our App!</p>
            <div className="flex flex-row gap-3 justify-center">   
              <Link href="/">
                  <Button title='Play Store' icon="google-play.svg" />
              </Link>
              
              <Button title='Apple Store' icon="apple.svg" />
            </div>            
        </div>    
      </div>
      {/* Grid cols for descriptions */}
      <div className="hidden sm:grid border-b border-gray-900 md:border-0 pb-6 mt-6 md:grid-cols-4 grid-cols-2 gap-4">        
        <ListItems href='/' title='Reports' items={reports} />
        <ListItems href='/' title='Opportunities' items={opportunities} />
        <ListItems href='/' title='Company' items={company} />
        <ListItems href='/' title='Mobile Apps' items={mobileApps} />  
      </div>
      <div className="hidden sm:grid border-b border-gray-900 md:border-0 pb-6 mt-6 md:grid-cols-4 grid-cols-2 gap-4">
        <ListItems href='/' title='Decoders by Make' items={decodersByMake} className="grid grid-col-2 md:grid-cols-4" />
      </div>
      <FooterItems />
      <div>
        <div className="mt-6 text-center text-xl flex justify-center gap-3"> 
          <button className="px-3 hover:bg-white hover:text-black transition py-3 bg-gray-500/20 rounded-full"><FaFacebookF className="text-3xl" /></button>
          <button className="px-3 hover:bg-white hover:text-black transition py-3 bg-gray-500/20 rounded-full"><FaYoutube className="text-3xl" /></button>
          <button className="px-3 hover:bg-white hover:text-black py-3 transition  bg-gray-500/20 rounded-full"><FaInstagram className="text-3xl" /></button>

        </div>
        <div className="flex flex-wrap justify-between text-sm mt-6 border-b border-gray-900 pb-6">
          <Link className="hover:text-gray-700" href="/">Privacy</Link>        
          <Link className="hover:text-gray-700" href="/">Terms & Conditions</Link>        
          <Link className="hover:text-gray-700" href="/">Security</Link>        
          <Link className="hover:text-gray-700" href="/">Remove Your Data</Link>        
          <Link className="hover:text-gray-700" href="/">Refund Policy</Link>        
        </div>
      </div>
      <div className="text-center mt-6 pb-2">
          <p className="text-xs font-light">&copy; 2024 mark_theDev. All rights reserved.</p>
      </div>
          
    </div>
  )
}

export default Footer