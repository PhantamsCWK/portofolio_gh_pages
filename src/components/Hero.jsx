import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { SharkCanvas } from './canvas'
import { slideIn } from '../utils/motion'

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    setIsMobile(mediaQuery.matches)

    const handleMediaQueryChange = e => {
      setIsMobile(e.matches)
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange)

    return () => {
      mediaQuery.removeEventListener('change', 
      handleMediaQueryChange)
    }
  }, [])
  

  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div>
          <h1 className={`${styles.heroHeadText}`}>Hi, I'm <span className='text-[#915eff]'>Chan</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Hello this my first portofolio
          </p>
        </div>
      </div>

      <motion.div
        variants={slideIn('right', "tween", 0.2, 1)}
        className=' relative w-full h-full'
      >
        <SharkCanvas isMobile={isMobile} />

      </motion.div>
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href="#about">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div 
              animate={{ 
                y: [0, 24, 0]
               }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
               }}
               className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero