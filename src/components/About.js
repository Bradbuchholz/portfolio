import React from "react";

function About() {
  return (
    <section id='about'>
      <div className=''>
        <div className=''>
          <h1 className=''>Hi, I'm Brad
            <br className='hidden lg: inline-block' />I am a something something something fill in later.
          </h1>
          <p className='mb-8 leading-relaxed'>
            Insert text later.
          </p>
          <div className='flex justify-center'>
            <a
              href='#contact'
              className='inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg'>
                Get in touch with me! 
              </a>
              <a
                href='#projects'
                className='ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg'>
                Check out some of my past work
              </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;