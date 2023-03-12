import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { BsFillPersonFill } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';


const SocialLink = () => {


    const links = [
        {
            id: '1',
            child: (
                <>
                     LinkedIn<FaLinkedin size={30}/>
                </>
            ),
            href: 'https://www.linkedin.com/in/nasimuddinarif/',
            style: 'rounded-tr-md'
        },
        {
            id: '2',
            child: (
                <>
                     Github<FaGithub size={30}/>
                </>
            ),
            href: 'https://github.com/arif726',
        },
        {
            id: '3',
            child: (
                <>
                     Mail<HiOutlineMail size={30}/>
                </>
            ),
            href: 'mailto:akonarif3@gmail.com'
        },
        {
            id: '4',
            child: (
                <>
                     Resume<BsFillPersonFill size={30}/>
                </>
            ),
            href: '/Arif_CV_(EEE).pdf',
            style: 'rounded-br-md',
            download: true
        },
]

  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
          <ul>
              
              {
                  links.map(({id, child, href, style, download}) => (
                      <li key={id} className={'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] bg-gray-500 hover:rounded-md hover:ml-[-10px] duration-300' + " " + style}>
                          <a
                              href={href}
                              className='flex justify-between items-center w-full text-white'
                              download={download}
                              target='_blank'
                              rel='noreferrer'>
                              {child}
                         </a>
              </li>
                  ))
              }
          </ul>
    </div>
  )
}

export default SocialLink