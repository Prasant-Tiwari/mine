import React from 'react'
// import {motion} from "framer-motion"
import HeroImage1 from "../assets/heroImage1.jpg";


const BackgroundCircles = () => {
  return (
    <div 
    className='flex justify-center items-center'>

<img src = {HeroImage1} alt = "my profile" className=' relative rounded-full h-[210px] w-[210px] mx-auto object-cover'></img>
      <div className=' absolute border border-[#333333] rounded-full h-[200px] w-[200px] animate-ping' />
      {/* <div className=' absolute border border-[#333333] rounded-full h-[300px] w-[300px]  mt-52' /> */}
      {/* <div className=' absolute border border-[#333333] rounded-full h-[500px] w-[500px] mt-52' /> */}
     
      <div className='rounded-full border border-[#F7AB0A] opacity-20 h-[250px] w-[250px] absolute  animate-pulse'/>
      {/* <div className='rounded-full border border-[#333333] h-[800px] w-[800px] absolute mt-52' /> */}
    </div>
  )
}

export default BackgroundCircles
