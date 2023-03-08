import React from "react";
// import { MagnifyingGlassCircleIcon } from '@heroicons/react/solid';
import { projects } from '../data'; 

function Projects() {
  return (
    <section id='projects' className='text-gray-400 bg-gray-900 body-font'>
      <div className='container px-5 py-10 mx-auto text-center lg: px-40'>
        <div className='flex flex-col w-full mb-20'>
          {/* <MagnifyingGlassCircleIcon className='mx-auto inline-block w-10 mb-4' /> */}
          <h1 className='sm:text-4xl text-3xl font-medium title-font mb-4 text-white'>
            Apps I've built
          </h1>
          <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
            Something to fill in later about the projects. 
          </p>
        </div>
        <div className='flex flex-wrap -m-4'>
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className='sm:w=1/2 w-100 p-4'>
              <div className='flex relative'>
                <img
                  alt='gallery'
                  className='absolute inset-0 w-full h-full object-cover object-center'
                  src={project.image}
                />
                <div className='px-8 py-10 relative z-10 w-full border-4 boarder-gray-800 bg-gray-900 opacity-0 hover:opacity-100'>

                </div>
              </div>
            </a>  
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects;

