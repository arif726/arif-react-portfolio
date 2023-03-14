import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi'

const Footer = () => {
  return (
      <div className=' bg-[#0a192f] w-full py-12 text-white'>
          <div className='flex flex-col gap-4 lg:flex-row items-center justify-center lg:gap-20'>
              <div className='flex px-4 gap-4'>
              <a
                  href="https://www.linkedin.com/in/nasimuddinarif/"
                  target='_blank'
                  rel='noreferrer'>
                 <FaLinkedin size={20}/> 
              </a>
              <a
                  href="https://github.com/arif726"
                  target='_blank'
                  rel='noreferrer'>
                 <FaGithub size={20}/>
              </a>
              <a
                  href="mailto:akonarif3@gmail.com"
                  target='_blank'
                  rel='noreferrer'>
                 <HiOutlineMail size={20}/>
              </a>
              </div>

          <div>
              <h1 className='font-signature text-2xl text-pink-500'>Arif</h1>
          </div>
          <p>&copy; 2023 Nasim Uddin Arif. All rights reserved.</p>
         </div>
          </div>
          
  )
}

export default Footer