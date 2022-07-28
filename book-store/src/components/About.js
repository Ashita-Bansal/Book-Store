import React from 'react'
import {Box, Typography} from '@mui/material'

const About = () => {
  return (
    <div>
    <Box display='flex' flexDirection='column' alignItems='center'>
    <Typography variant='h2'>This is an application for a book store.</Typography>
    <Typography variant='h3'>This is a CRUD application made via MERN stack.</Typography>

    </Box>
    </div>
  )
}

export default About