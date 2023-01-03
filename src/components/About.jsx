import React from 'react'
import { motion } from 'framer-motion'
import HeroImage2 from "../assets/heroImage2.jpg";
// import About from './About';



const About = () => {
  return (
//     <motion.div  name = "about"
//     initial = {{
//         opacity:0,
//     }}
//     whileInView = {{opacity:1}}
//     transition = {{duration:1.5}}
    
//     className='h-screen  flex relative flex-col text-center  md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center '>
       
//         <h3 className='md:absolute top-14 uppercase tracking-[20px] text-gray-500 text-2xl md:top-10'>About</h3>
       
      

// <motion.img initial = {{
//     x: -200,
//     opacity:0,
// }}
// transition = {{
//     duration:1.2
// }}
// whileInView = {{
//     x:0,
//     opacity:1
// }}
// src={HeroImage2} className = ' md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:h-[400px] xl:w-[300px]'/>

// <div className='px-5 md:mt-11 lg:px-10 '>
//     <h4 className='text-3xl  font-semibold md:my-7 lg:text-4xl xl:text-5xl md:-mt-20 sm:mb-4'>Here is a <span className='underline decoration-[#F7AB0A]/50'>little</span> background</h4>
//     <p className='text-base sm:mt-10'>I’m currently pursuing Honors in Bachelor of Commerce from St. Xavier’s College (Autonomous), Kolkata.<br />
// From tallying the assets and liabilities of Balance Sheet to lines of code on a web page, I love combining the worlds of logic and creative designs to make eye-catching, accessible, and user- friendly websites and applications.<br />
// I’m excited to make the leap and continue refining my skills with the right company.<br />
// <b>When I’m not in front of a computer screen,</b> I’m probably reading books or playing cricket outdoor.
// </p>
// </div>

//     </motion.div>
// --------------------------------------------------------------------

<motion.div
    initial = {{
        opacity:0
    }}
    whileInView = {{
        opacity:1
    }}
    transition = {{
        duration: 1.5
    }}
name = "about" className='  relative  flex flex-col text-center  mx-auto   px-10 sm:bg-[#F5F5F6]'>
    <div className='my-8 mt-20 pt-5'>
        <h3 className='uppercase text-gray-500 text-2xl tracking-[20px] '>About</h3>
    </div>

    <div className='flex flex-col md:flex-row md:my-6 '>
        <div className='mx-auto mb-7 md:w-2/4 md:mb-0 lg:w-1/3 sm:w-[100%]'>
            <motion.img
            initial = {{
                x:-200,
                opacity:0
            }}
            transition = {{
                duration:1.2
            }}
            whileInView = {{
                x:0,
                opacity:1
            }}
            src={HeroImage2} className='h-56 w-56 rounded-full object-cover flex-shrink-0 md:rounded-lg md:w-64 md:h-96 mx-auto md:mx-0 xl:h-[400px] xl:w-[300px]'></motion.img>
        </div>


        <div className='w-3/4 mx-auto md:mx-0 justify-evenly items-center flex flex-col'>
        <h4 className='text-2xl font-semibold md:text-3xl lg:text-4xl xl:text-5xl '>Here is a <span className='underline decoration-[#F7AB0A]/50'>little</span> background</h4>
        <p className='text-base sm:mt-5 md:text-left sm:text-center mb-6 '>I’m currently pursuing Bachelor's of Commerce in Finance and Accountancy at St. Xavier’s College (Autonomous), Kolkata.<br /> <br />
From tallying the assets and liabilities of Balance Sheet to lines of code on a web page, I found my interest in coding which led me  combining the worlds of logic and creative designs to make eye-catching, accessible, and user- friendly websites and applications.<br />
I’m excited to make the leap and continue refining my skills with the right company.<br /> <br />
<b>When I’m not in front of a computer screen,</b> I’m probably reading books or playing cricket outdoor.
</p>
        </div>
    </div>
</motion.div>
  )
}

export default About
