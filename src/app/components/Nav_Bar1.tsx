'use client';
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IoIosArrowDown } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { useAutoAnimate } from '@formkit/auto-animate/react'

type NavItems = {
    label: string,
    link?: string,
    children?: NavItems [],
    icon?: string
}

const navItems: NavItems [] = [
    {
        label: "Reports",
        link: '/',
        children:[
            {label:"Sample Report", link: "/",icon:"/report.svg"},
            {label:"Pricing", link:"/",icon:"/price.svg"},
            {label:"Advantages", link:"/",icon:"/company-advantage.svg"},
            {label:"B2B Pricing", link:"/",icon:"/b2b.svg"}
        ]
    },
    {
        label: "Resources",
        link: "/",
        children: [
            {label: "Blog"},
            {label: "Help"}
        ]
    },
    {
        label: "For Business",
        link: "/",
        children: [
            {label: "Dealerships", link: "/"},
            {label: "Insurance Companies", link: "/"},
            {label: "Leasing Companies", link: "/"},
            {label: "Affiliate Programs", link: "/"}
        ]
    },
    {
        label: "Company",
        link: "/",
        children: [
            {label: "About Us", link: "/"},
            {label: "Contacts", link: "/"},
            {label: "Press Area", link: "/"}
        ]
    }
    
]

export default function Nav_Bar1 () {   
    const [animationParent] = useAutoAnimate() 
    const [isSideOpen, setSideOpen] = useState(false)

    function openSideMenu () {
        setSideOpen(true)
    }
    function closeSideMenu () {
        setSideOpen(false)
    }
  return (
    <nav className="mx-auto flex fixed z-10 w-full max-w-7xl 
        justify-between px-4 py-3 text-sm bg-gray-100">
        
        {/* left hand side of navbar */}
        <section ref={animationParent} className='flex items-center gap-10'>

            {/* Logo */}
            <Image src="/Carvertical-logo.svg" alt="Carvertical logo" width={210} height={70} />
            
            {isSideOpen && <MobileNav closeSideMenu={closeSideMenu} />}
            {/* Nav Links */}
            <div className="hidden lg:flex items-end gap-4 transition-all text-base font-semibold">
                {navItems.map((d,i)=>
                <Link key={i} href={d.link ?? "/"} className="relative group px-4 py-3 transition-all">
                    <p className="flex justify-center items-center gap-2 text-neutral-400 cursor-pointer 
                    group-hover:text-black/90">
                        <span>{d.label}</span>
                        <IoIosArrowDown className="rotate-180 transition-all group-hover:rotate-0"/>
                    </p>
                    {/* sub links */}
                    {d.children &&
                    <div 
                        className="absolute right-[-20px] top-full py-3 hidden flex-col gap-1 w-full min-w-[200px] rounded-lg 
                        bg-white shadow-md transition-all duration-300 ease-in-out group-hover:flex">
                        {d.children.map((child,index)=>                        
                        <Link key={index} href="/" 
                            className="flex cursor-pointer items-center py-1 px-6 pr-8
                            text-neutral-400 hover:text-black">                            
                                {child.icon && 
                            <Image src={child.icon ?? ""} alt='reports' width={20} height={20}/>}
                            <span className="whitespace-nowrap pl-2 text-sm">{child.label}</span>
                        </Link>)}
                    </div>}
                </Link>
                )}
            </div>
        </section> 

        {/* Right side navbar */}

        <section className='hidden lg:flex items-center gap-2'>
            <button className="h-fit text-neutral-400 transition-all
               px-4 py-1 font-semibold rounded-full hover:text-black/90">
                Login    
            </button>
            <button className="flex justify-center items-center gap-1 h-fit text-neutral-400 transition-all px-4 py-1 rounded-full
                border-2 font-semibold border-neutral-400 hover:border-black hover:text-black">
                <Image src="/user.svg" alt='user' width={20} height={20} />
                Register    
            </button>            
        </section>
        <CiMenuFries onClick={openSideMenu} className="cursor-pointer lg:hidden text-4xl" />
    </nav>
  )
}

function MobileNav ({closeSideMenu}:{closeSideMenu: ()=> void}) {

    return (
        <div className="fixed top-0 left-0 flex h-full min-h-screen w-full
            justify-end bg-black/60 lg:hidden">
            <div className="sm:w-[50%] w-full h-auto bg-gray-100 p-4">
                <section className="cursor-pointer flex justify-end">
                    <IoMdClose onClick={closeSideMenu} className="cursor-pointer text-4xl" />
                </section>
                <div className="flex flex-col gap-4 transition-all text-base font-semibold">
                    {navItems.map((d,i)=>
                        <SingleNavLink
                            key={i}
                            label={d.label}
                            icon={d.icon}
                            link={d.link}
                        >
                            {d.children}
                        </SingleNavLink>
                        )}
                </div>
                <section className='flex flex-col mt-4 items-center gap-8'>
                    <button className="h-fit text-neutral-400 transition-all
                    px-4 py-1 text-base font-semibold rounded-full hover:text-black/90">
                        Login    
                    </button>
                    <button className="flex w-full justify-center gap-1 h-fit max-w-[200px] text-neutral-400 transition-all px-4 py-2 rounded-full
                        border-2 font-semibold border-neutral-400 hover:border-black hover:text-black">
                        <Image src="/user.svg" alt='user' width={20} height={20} />
                        Register    
                    </button>            
                </section>
            </div>
        </div>
    )
}

function SingleNavLink (d:NavItems) {
    const [animationParent] = useAutoAnimate()
    const [isOpen, setIsOpen] = useState(false)

    function toggleOpen () {
        return setIsOpen(!isOpen)
    }

    return(
        
        <Link 
            ref={animationParent}
            onClick={toggleOpen}
            href={d.link ?? "/"} className="relative px-4 py-3 transition-all">
            <p className="flex items-center gap-2 text-neutral-400 cursor-pointer 
                group-hover:text-black/90">
                <span>{d.label}</span>
                <IoIosArrowDown className={`text-xs transition-all ${isOpen && "rotate-180"}`} />
            </p>
            {/* sub links */}
                {isOpen && d.children &&
                <div 
                        className="py-3 flex-col gap-1 w-auto rounded-lg 
                        bg-white transition-all duration-300 ease-in-out flex">
                        {d.children.map((child,index)=>                        
                        <Link key={index} href="/" 
                            className="flex cursor-pointer items-center py-1 px-6 pr-8
                            text-neutral-400 hover:text-black">                            
                                {child.icon && 
                            <Image src={child.icon ?? ""} alt='reports' width={20} height={20}/>}
                            <span className="whitespace-nowrap pl-2 text-sm">{child.label}</span>
                        </Link>)}
                </div>}
        </Link>
    )
}