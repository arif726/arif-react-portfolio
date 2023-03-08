import React from 'react';
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {

    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'portfolio'
        },
        {
            id: 4,
            link: 'experiance'
        },
        {
            id: 5,
            link: 'contact'
        }
]

  return (
      <div className='flex justify-between items-center bg-black w-full h-20 text-white px-4'>
          <div>
              <h1 className='font-signature text-5xl ml-2'>Arif</h1>
          </div>
          <ul className='flex'>
            
              {links.map(({id, link}) => (
                  <li
                      key={id}
                      className='p-4 cursor-pointer font-medium text-gray-500 capitalize hover:scale-105 duration-200'>{link}</li>
                ))}
              
          </ul>
      </div>
  )
}

export default NavBar