import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Fishing = () => {
  return (
    <motion.div
      className='fixed left-10  h-96 w-20 flex flex-col justify-start items-center z-10'
    >
        <div className='bg-black w-1 h-full' />
        <Link to="/" onClick={() => window.scrollTo(0,0)} className='w-6 h-6 bg-yellow-300 rounded-full' />
    </motion.div>
  )
}

export default Fishing