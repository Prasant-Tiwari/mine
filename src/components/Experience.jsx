import React from 'react'
import html from "../assets/html.png"
import css from "../assets/css.png"
import javascript from "../assets/javascript.png"
import reactImage from "../assets/react.png"
import github from "../assets/github.png"
import tailwind from "../assets/tailwind.png"
import java from "../assets/java.png"
import node from "../assets/node.png"



const Experience = () => {

    const techs = [
        {
            id:1,
            src:html,
            title: 'HTML',
            style:'shadow-orange-500',
        },
        {
            id:2,
            src:css,
            title: 'CSS',
            style:'shadow-blue-500',
        },
     
        {
            id:3,
            src:reactImage,
            title: 'React',
            style:'shadow-blue-600',
        },
        {
            id:4,
            src:javascript,
            title: 'JavaScript',
            style:'shadow-yellow-500',
        },
        {
            id:5,
            src:github,
            title: 'Github',
            style:'shadow-gray-400',
        },
        {
            id:6,
            src:tailwind,
            title: 'Tailwind',
            style:'shadow-sky-400',
        },
        {
            id:7,
            src:node,
            title: 'Node',
            style:'shadow-green-400',
        },
        {
            id:8,
            src:java,
            title: 'Java',
            style:'shadow-sky-400',
        },
    ]

  return (
    <div name = "experience" className='bg-gradient-to-b from-gray-800 to-black w-full'>
      <div className='max-w-screen-lg sm:p-4 mx-auto flex flex-col w-full h-full text-white'>
        <div className=' text-center pb-8 mt-20'>
        <h3 className='uppercase py-6 text-center md:text-2xl tracking-[20px] '>Experience</h3>
        <p className='py-2'>These are the Technologies I've worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 md:grid-cols-3 gap-8 text-center py-8 px-12 '>

            {techs.map(({id,src,title,style})=>(
                 <div key ={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                 <img src={src} alt = '' className='w-20 mx-auto'></img>
                 <p className='mt-4'>{title}</p>
             </div>
            ))}

           
        </div>
        </div>
    </div>
  )
}

export default Experience
