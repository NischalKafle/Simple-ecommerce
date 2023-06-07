import React from 'react'
import { motion } from 'framer-motion'
const Thankyou = () => {
  return (

<div style={{ backgroundColor: 'crimson', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', color: 'white' }}>
<motion.h1 style={{ textAlign: 'center' }} initial={{x:'-150vw'}} animate={{x:0,transition:{delay:.3}}}>Thank you for visiting us</motion.h1>
<motion.p initial={{y:'150vw'}} animate={{y:0,transition:{delay:.5}}}>Please visit us again.</motion.p>
</div>

  )
}

export default Thankyou