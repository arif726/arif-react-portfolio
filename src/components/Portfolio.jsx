import React from 'react';
import portfolio from '../assets/portfolio/portfolio.jpg';
import reactjs from '../assets/portfolio/reactjs.jpg';
import quizjs from '../assets/portfolio/quiz-js.jpg';
import MacPurchasesite from '../assets/portfolio/Mac Purchase site.jpg';
import javascript from '../assets/portfolio/javascript.jpg';
import bootstrap from '../assets/portfolio/bootstrap.jpg';

const Portfolio = () => {

    const portfolios = [
        {
            id: '1',
            src: portfolio,
            code: 'https://github.com/arif726/my-',
            live: ''
        },
        {
            id: '2',
            src: reactjs,
            code: 'https://github.com/arif726/ema-jon-react-project',
            live: ''
        },
        {
            id: '3',
            src: quizjs,
            code: 'https://github.com/arif726/js-quiz-app',
            live: 'https://famous-biscotti-f1539e.netlify.app/'
        },
        {
            id: '4',
            src: MacPurchasesite,
            code: 'https://github.com/arif726/my-',
            live: 'https://macbook-pc-buy.netlify.app'
        },
        {
            id: '5',
            src: javascript,
            code: 'https://github.com/arif726/Vanila_JS_ImageSlider',
            live: ''
        },
        {
            id: '6',
            src: bootstrap,
            code: 'https://github.com/arif726/my-portfolio-website',
            live: 'https://portfolio-html-bootstrap.netlify.app'
        },
]

  return (
      <div
          name='portfolio'
          className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
          <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
              <div className='pb-8'>
                  <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
                      Portfolio
                  </p>
                  <p className='py-6'>Here checkout some of my work</p>
              </div>
              <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                  
                  {
                      portfolios.map(({ id, src, code, live }) => (
                          <div
                              key={id}
                              className='shadow-md shadow-gray-600 rounded-lg'>
                      <img
                          src={src}
                          alt=""
                          className='rounded-md hover:scale-105 duration-500'
                      />
                      <div className='flex items-center justify-center'>
                          <a
                              target='_blank'
                              rel='noreferrer'
                              href={code}>
                              <button
                                  className='w-1/2 px-6 m-4 hover:scale-110 hover:font-semibold duration-500'>
                                  Code
                              </button>
                          </a>
                          <a
                              target='_blank'
                              rel='noreferrer'
                              href={live}>
                              <button
                                  className='w-1/2 px-6 m-4 hover:scale-110 hover:font-semibold duration-500'>
                                  Live
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