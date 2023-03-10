import React from 'react'
import image from '../assets/heroImage.png'
import {BsArrowRight} from "react-icons/bs";

const Home = () => {
  return (
     <div>
          <div className='flex'>
              <div>
                  <h2>I'm a Full Stack Developer</h2>
                  <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam magni dolorum veritatis quaerat dolor, eius placeat hic quia debitis eos nihil omnis sapiente sint possimus aut commodi voluptatem enim aliquam.
                  </p>
                  <div>
                      <button>
                          Portfolio
                          <span><BsArrowRight/></span>
                      </button>
                  </div>
              </div>
              <div>
                <img src={image} alt="my-pic" />
              </div>
          </div>
     </div>
  )
}

export default Home