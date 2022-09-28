import React from 'react'
import { Box, Typography, Button } from '@mui/material';

// import HeroBannerImage from '../assets/images/banner.png';
 import HeroBannerImage from '../assets/images/LA.jpg';

const HeroBanner = () => {
  return (
    <Box sx={{
      mt: { lg: '212px', xs:'70px'}, 
      ml: { sm: '50px'}
    }} position="relative" p="20px">
      <Typography color="#0000FF"
      fontWeight="600" fontSize="60px">
        Larry's Gym
      </Typography>
      <Typography fontWeight={700}
      sx={{ fontSize: { lg: '44px', xs: '40px'}
      }}
      mb="23px" mt="30px">
        Get Big <br /> Stay Big
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={5}>
        How do you get big?
      </Typography>
      <Button variant="contained" color="error" href="#exercises" sx={{ backgroundColor: '#0000FF', padding: '10px'}}>Explore Exercises</Button>
      <Typography fontWeight={600} color="#ff2625"
      sx={{opacity: 0.1, display: {lg: 'block', xs: 'none'}}} fontSize="200px">
        Lift
      </Typography>
      <img src={HeroBannerImage} alt="banner"
      className="hero-banner-img"/>
    </Box>
  )
}

export default HeroBanner