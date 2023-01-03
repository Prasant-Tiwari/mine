import React from 'react';
import {MdOutlineKeyboardArrowRight} from "react-icons/md";
import {Cursor, useTypewriter} from "react-simple-typewriter";
// import {motion} from "framer-motion";
import BackgroundCircles from './BackgroundCircles';
import {Link} from "react-scroll"




const Home = () => {
    const [text] = useTypewriter({
        words: ["Hi, The Name's Prasant Tiwari","I'm a Developer, Designer", "A Student who <LovesToCodeMore />",],
        loop:true,
        delaySpeed: 2000,
    })
  return (
    <div name = "home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 z-0 text-white'>
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden '>
        <BackgroundCircles />
        <div >
            <h2 className='text-sm uppercase text-gray-500 pb-2 pt-2 tracking-[15px]'>Coding Enthusiast</h2>
            <h1 className='sm:text-4xl lg:text-6xl font-semibold px-10'>
                <span className='mr-3'>{text}</span>
                <Cursor cursorColor = "#F7AB0A" />
            </h1>
           
            <div className='items-center sm:hidden lg:block'>
            <Link to ="portfolio" smooth duration={700} className=' group w-fit px-6 py-3 my-6 flex items-center rounded-md bg-gradient-to-r from-yellow-400 to-[#F7AB0A] cursor-pointer mx-auto'>
                    <b>Portfolio</b>
                    <span className='group-hover:rotate-90 duration-300'>
                        <MdOutlineKeyboardArrowRight size={25} className = 'ml-1' />
                    </span>
                </Link>
            </div>

            <div className='items-center sm:block lg:hidden'>
                <button className=' group w-fit px-6 py-3 my-6 flex items-center rounded-md bg-gradient-to-r from-yellow-400 to-[#F7AB0A] cursor-pointer mx-auto'><a href='/resume.pdf'target="_blank"><b>Resume</b></a>
                <span className='group-hover:rotate-90 duration-300'>
                        <MdOutlineKeyboardArrowRight size={25} className = 'ml-1' />
                    </span>
                </button>
            </div>
            

            <div>
         

        </div>
      
        </div>
     </div>
    </div>
  )
}

export default Home
