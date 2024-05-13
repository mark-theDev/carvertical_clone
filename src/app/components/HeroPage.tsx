"use client"
import React, {useState, useEffect} from 'react'
import ReportButton from './ReportButton'
import Lottie from 'lottie-react'
import CheckTypes from './CheckTypes'


type Props = {}

const HeroPage = (props: Props) => {
  const [animationData, setAnimationData] = useState<any>(null)
  useEffect (() => {
    const fetchAnimationData = async () => {
      try{
        const {default: data} = await import('./HeroAnimation.json')
        setAnimationData(data)
      }
      catch (error) {
        console.error(error)
      }
    }
    fetchAnimationData();
  }, [])
  return (
    <section className="mx-auto flex max-w-7xl bg-sky-300 flex-col items-center gap-2
        pb-12 transition-all lg:flex-row lg:items-center lg:gap-4">
        <div className="flex flex-col items-center lg:items-start w-full px-5 gap-6 mt-[100px] md:mt-14 pt-8 lg:w-[60%]
            md:px-5 lg:pt-[80px] md:gap-10 md:text-left">
            <h1 className="text-3xl sm:text-5xl lg:text-5xl text-center lg:text-left font-bold">Learn the story of your future or current car</h1>
            <p className="text-lg sm:w-[70%] text-center lg:text-left lg:w-full sm:text-2xl">Get a report to avoid bad deals, sell faster, or learn if your car is safe.</p>
            <ReportButton />
            <CheckTypes />         
        </div>  
        <div className="relative lg:w-1/2 lg:h-300px w-full max-w-[400px] ">
          {animationData && <Lottie loop={false} className="lg:mt-32 px-5 h-[200px] md:h-[400px] mt-8 lg:h-[500px] lg:w-[400px]" animationData={animationData} />}
        </div>             
    </section>    
  )
}

export default HeroPage