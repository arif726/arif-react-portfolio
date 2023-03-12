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
          className='w-full bg-gradient-to-b from-gray-800 to-black text-white h-full'>
          <div className='p-4 mx-auto max-w-screen-lg w-full h-full flex flex-col justify-center'>
              <div className='pb-8'>
                  <p className='text-4xl font-bold border-b-4 border-gray-500 inline p-2'>Experiance</p>
                  <p className='py-6'>These are the technologies I've work with</p>
              </div>
              <div className='w-full grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 py-8 sm:px-0 text-center'>
                  
                  {
                      experiances.map(({ id, logo, title, style}) => (
                          <div
                              key={id}
                              className={`shadow-md py-2 rounded-lg hover:scale-105 duration-500 ${style}`}>
                              <img
                                  src={logo}
                                  alt=""
                                  className='w-20 mx-auto'
                              />
                            <p className='mt-4 capitalize'>
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