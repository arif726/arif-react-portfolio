import React from 'react';
// import Typical from 'react-typical'; 
import image from '../assets/heroImage (1).png';
import {BsArrowRight} from "react-icons/bs";

const Home = () => {
  return (
      <div
          name='home'
          className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
          <div className='flex flex-col max-w-screen-lg h-full mx-auto justify-center items-center px-4 md:flex-row'>
              <div className='flex flex-col justify-center h-full'>
                  <h2 className='text-white text-4xl sm:text-7xl font-bold'>I'm a Full Stack Developer</h2>
                  <p className='text-gray-500 py-4 max-w-md'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam magni dolorum veritatis quaerat dolor, eius placeat hic quia debitis eos nihil omnis sapiente sint possimus aut commodi voluptatem enim aliquam.
                  </p>
                  <div>
                      <button className='group flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 my-2 rounded-md text-white'>
                          Portfolio
                          <span className='group-hover:rotate-90 ml-2 duration-300'>
                              <BsArrowRight size={20} />
                          </span>
                      </button>
                  </div>
              </div>
              <div>
                  <img
                      src={image}
                      alt="my-pic"
                      className='rounded-2xl mx-auto w-2/3 md:w-full' />
              </div>
          </div>
     </div>
  )
}

export default Home