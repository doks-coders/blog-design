import React from 'react'
import {Header} from './Header'
import { Box } from '@chakra-ui/react'
import {Footer} from './Footer'
const Layout = ({children}) => {
  return (
    <>
    <Header/>
    <Box color="gray.700">
    {children}
    </Box>
  
    <Footer/>
    </>
  )
}

export default Layout