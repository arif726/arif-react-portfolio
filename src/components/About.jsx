import React from 'react'

const About = () => {
  return (
      <div
          name='about'
          className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
          <div className='flex flex-col justify-center p-4 mx-auto w-full h-full max-w-screen-lg'>
              <div className='pb-8'>
                  <p className='text-4xl font-bold border-b-4 border-gray-500 inline'>About</p>
              </div>
              <p className='text-xl mt-20'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti mollitia tempora voluptas magnam odio similique neque dignissimos animi ducimus sunt consequuntur ex totam, exercitationem optio ratione minus facere nihil laborum officia repudiandae culpa repellat voluptate. Nulla, sapiente assumenda asperiores esse nesciunt illum dolores possimus. Aliquam vitae placeat assumenda labore nisi.
              </p>

              <br />
              
              <p className='text-xl'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptate tempora pariatur aliquid quod dolores id laborum error quae et. Officiis exercitationem excepturi, veritatis harum, accusamus, vel tenetur fuga earum dolores doloribus voluptas omnis doloremque odit. Tempore quis quaerat nihil facere assumenda est ipsam nesciunt numquam temporibus quibusdam! Voluptatum, deserunt?
              </p>
          </div>
    </div>
  )
}

export default About