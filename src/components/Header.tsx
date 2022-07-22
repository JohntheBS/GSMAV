import { Box, Button, MantineProvider } from '@mantine/core'
import React from 'react'
import pic from "../Images/House-Construction.jpg";
const Header = () => {
  return (
    <MantineProvider>
      <Box component='header' className='h-[32rem] object-cover relative'>
        <img  src={pic} alt="pic" className='h-full w-full absolute' />
        <div className='bg-black/70 absolute h-full w-full flex-col justify-center items-center text-center pt-28 space-y-6 text-white'>
          <h1 className='text-5xl sm:text-7xl text-orange-500 font-bold uppercase'>we build great projects</h1>
          <p className='text-2xl sm:text-4xl'>Perfection is always in our mind</p>
          <div className='flex items-center justify-center gap-5'>
            <Button type='button' variant='filled' color='orange' className='bg-orange-500'>Our services</Button>
            <Button uppercase className='bg-white text-sky-600 hover:text-white'>request a quote</Button>
          </div>
        </div>
      </Box>
    </MantineProvider>
  )
}

export default Header
