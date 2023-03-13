import React from 'react';
import html from '../assets/html.png'
import css from '../assets/css.png'
import github from '../assets/github.png'
import javascript from '../assets/javascript.png'
import tailwind from '../assets/tailwind.png'
import node from '../assets/node.png'
import reactImg from '../assets/react.png'
import nextjs from '../assets/nextjs.png'

const Experiance = () => {

    const experiances = [
        {
            id: '1',
            logo: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: '2',
            logo: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: '3',
            logo: javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: '4',
            logo: reactImg,
            title: 'React',
            style: 'shadow-blue-600'
        },
        {
            id: '5',
            logo: tailwind,
            title: 'Tailwind',
            style: 'shadow-sky-400'
        },
        {
            id: '6',
            logo: github,
            title: 'GitHub',
            style: 'shadow-gray-600'
        },
        {
            id: '7',
            logo: node,
            title: 'NodeJS',
            style: 'shadow-green-400'
        },
        {
            id: '8',
            logo: nextjs,
            title: 'NextJS',
            style: 'shadow-white'
        }
]


  return (
      <div
          name='experiance'
          className='w-full h-screen bg-[#0a192f] text-gray-300'>
          <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
              <div>
                  <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Experiance</p>
                  <p className='py-4'>These are the technologies I've worked with</p>
              </div>
              <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                  
                  {
                      experiances.map(({ id, logo, title, style}) => (
                          <div
                              key={id}
                              className={`shadow-md py-2 rounded-lg hover:scale-110 duration-500 ${style}`}>
                              <img
                                  src={logo}
                                  alt=""
                                  className='w-20 mx-auto'
                              />
                            <p className='my-4'>
                                {title}  
                            </p>
                          </div>
                      ))
                  }
              </div>
          </div> 
    </div>
  )
}

export default Experiance