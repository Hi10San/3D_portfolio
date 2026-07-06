import { img, p } from 'motion/react-client'
import React from 'react'
import { motion } from "motion/react";

const ProjectDetails = ({
    title,
    description,
    subDescription,
    href,
    image,
    tags,
    closeModal,
}) => {
  return (
    <div 
      onClick={closeModal} 
      className='fixed inset-0 z-50 flex items-center justify-center w-full h-full p-4 md:p-6 backdrop-blur-sm bg-black/60 overflow-hidden'
    >
      <motion.div 
        onClick={(e) => e.stopPropagation()}
        className='relative w-full max-w-2xl shadow-2xl rounded-2xl bg-gradient-to-tl from-[#3A3A3A] via-[#242424] to-[#3A3A3A] overflow-hidden flex flex-col max-h-[90vh]'
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <button 
          onClick={closeModal} 
          className='absolute p-2 rounded-full top-5 right-5 bg-midnight/80 hover:bg-neutral-700/80 z-20 transition-all cursor-pointer backdrop-blur-sm'
        >
          <img src="assets/close.svg" className='w-5 h-5' alt="close" />
        </button>

        <div className="overflow-y-auto w-full h-full scrollbar-thin">
          <img src={image} alt={title} className='w-full rounded-t-2xl object-cover max-h-[320px]' />
          <div className='p-6 md:p-8'>
            <h5 className='mb-2 text-2xl md:text-3xl font-extrabold text-white font-montserrat'>{title}</h5>
            <p className='mb-4 font-normal text-neutral-300 font-montserrat leading-relaxed'>{description}</p>
            {subDescription.map((subDesc, index) => (
              <p key={index} className='mb-4 font-normal text-neutral-400 font-montserrat leading-relaxed'>{subDesc}</p>
            ))}
            <div className='flex flex-wrap items-center justify-between gap-4 mt-6 pt-6 border-t border-white/5'>
              <div className='flex gap-3 flex-wrap'>
                {tags.map((tag) => (
                  <img 
                    key={tag.id} 
                    src={tag.path} 
                    alt={tag.name}
                    className='rounded-lg size-10 hover-animation'
                    title={tag.name}
                  />
                ))}
              </div>
              {href && (
                <a 
                  href={href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className='inline-flex items-center gap-1.5 font-bold uppercase tracking-wider text-xs text-aqua hover:text-white cursor-pointer hover-animation font-montserrat'
                >
                  View Project <img src="assets/arrow-up.svg" className='size-4' alt="arrow" />
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;