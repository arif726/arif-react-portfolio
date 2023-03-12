import React from 'react';
import arrayDestruct from '../assets/portfolio/arrayDestruct.jpg';
import navbar from '../assets/portfolio/navbar.jpg';
import reactParallax from '../assets/portfolio/reactParallax.jpg';
import reactSmooth from '../assets/portfolio/reactSmooth.jpg';
import reactWeather from '../assets/portfolio/reactWeather.jpg';

const Portfolio = () => {

    const portfolios = [
        {
            id: '1',
            src: arrayDestruct
        },
        {
            id: '2',
            src: navbar
        },
        {
            id: '3',
            src: reactParallax
        },
        {
            id: '4',
            src: reactSmooth
        },
        {
            id: '5',
            src: reactWeather
        },
]

  return (
      <div
          name='portfolio'
          className='w-full bg-gradient-to-b from-black to-gray-800 text-white md:h-screen'>
          <div className='p-4 mx-auto max-w-screen-lg w-full h-full flex flex-col justify-center'>
              <div className='pb-8'>
                  <p className='text-4xl font-bold border-b-4 border-gray-500 inline'>Portfolio</p>
                  <p className='py-6'>Here checkout some of my work</p>
              </div>
              <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                  
                  {
                      portfolios.map(({ id, src }) => (
                          <div
                              key={id}
                              className='shadow-md shadow-gray-600 rounded-lg'>
                      <img
                          src={src}
                          alt=""
                          className='rounded-md hover:scale-105 duration-500 cursor-pointer'
                      />
                      <div className='flex items-center justify-center'>
                          <a
                              target='_blank'
                              rel='noreferrer'
                              href="https://www.google.com/">
                              <button
                                  className='w-1/2 px-6 m-4 hover:scale-105 duration-500'>
                                  Demo
                              </button>
                          </a>
                          <a
                              target='_blank'
                              rel='noreferrer'
                              href="https://www.google.com/">
                              <button
                                  className='w-1/2 px-6 m-4 hover:scale-105 duration-500'>
                                  Code
                              </button>
                          </a>
                      </div>
                  </div>
                      ))
                  }     
              </div>
          </div>
    </div>
  )
}

export default Portfolio