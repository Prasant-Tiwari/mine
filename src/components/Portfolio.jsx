import React from 'react'
import reactWeather from '../assets/portfolio/reactWeather.png'
import memeGenerator from '../assets/portfolio/MemeGenerator.png'
import todoApp from '../assets/portfolio/TODO-app.png'
import foodWebsite from '../assets/portfolio/FoodWebsite.png'
import guessTheNumberGame from '../assets/portfolio/Guess-the-number-game.png'

import chatGPT from '../assets/portfolio/chat-gpt.png'


const Portfolio = () => {

    const portfolios = [
      {
        id:1,
        src: reactWeather,
        projectname:"React-Weather-App",
        demoLinks: "https://react-weather-app-my.netlify.app",
        codeLinks: "https://github.com/Prasant-Tiwari/react-weather-app"
      },
      {
        id:2,
        src: memeGenerator,
        projectname:"Meme Generator",
        demoLinks: "https://my1-meme-generator.netlify.app/",
        codeLinks: "https://github.com/Prasant-Tiwari/meme-generator"
      },
      {
        id:3,
        src: todoApp,
        projectname:"TODO-App",
        demoLinks: "https://my-todo-apppp.netlify.app/",
        codeLinks: "https://github.com/Prasant-Tiwari/TODO-app"
      },
      {
        id:4,
        src: foodWebsite,
        projectname:"Restaurant Website",
        demoLinks: "https://responsive-website-restaurant.netlify.app/",
        codeLinks: "https://github.com/Prasant-Tiwari/restaurant-website-responsive"
      },
      {
        id:5,
        src: guessTheNumberGame,
        projectname:"Guess-the-number-game",
        demoLinks: "https://guess-the-numbergame.netlify.app/",
        codeLinks: "https://github.com/Prasant-Tiwari/Guess-the-number-game"
      },
     
     
    ]


  return (
    <div name = "portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white  '>

      <div className='max-w-screen-lg p-4 mx-auto flex flex-col  w-full h-full'>
        <div className=' text-center pb-8 pt-10'>
        <h3 className='uppercase py-6 text-center md:text-2xl tracking-[20px] '>Portfolio</h3>
        <p className='py-2'>Some of the Projects made by me</p>
        </div>


        <div className='grid  md:grid-cols-3 gap-8 sm:px-8'>
          
        {
          portfolios.map(({id,src,projectname,demoLinks,codeLinks})=>(
            
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg '>
              <div className='text-center'>
              <p className='py-5 text-2xl md:text-xl'>{projectname}</p>
            </div>
          <img src={src} alt='' className='rounded-md duration-200 hover:scale-105 md:w-full md:h-[210px]'></img>
          <div className='flex items-center justify-center'>
            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'><a href = {demoLinks} target="_blank" rel='noreferrer'>Demo</a></button>
            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'><a href={codeLinks} target="_blank" rel='noreferrer'>Code</a></button>
           
          </div>
          
        </div>
          ))
        }
            <div className='shadow-md shadow-gray-600 rounded-lg relative pb-2 '>
              <div className='text-center'>
              <p className='py-5 text-2xl md:text-xl'>ChatGPT Clone</p>
            </div>
            
           
            
          <img src={chatGPT} alt='' className='rounded-md duration-200 hover:scale-105 md:w-full md:h-[210px] blur-sm'></img>
          <p className='text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl text-[#F7AB0A]'><b>Coming Soon...</b></p>
          {/* <div className='flex items-center justify-center'>
            <button  className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
           
          </div> */}
          
        </div>
        </div>
      </div>


    </div>
  )
}

export default Portfolio
