import { Box, Button, HStack, Image,Stack,Text } from '@chakra-ui/react'
import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import Hero from './Hero'

const NavBar = () => {
  return (
    <>
        <Box borderBottom={'1.5px solid green'}>
        <HStack justifyContent='space-between'p={8}>
            <Link to='/'>
                <Image src={logo} w='5rem'/>
            </Link>
           
           <HStack spacing='24px'>
                <Link style={{textDecoration:'none',color:'black',fontSize:'20px'}}>
                    <Text>Home</Text>
                </Link>
                <Link to='/electronic'style={{textDecoration:'none',color:'black',fontSize:'20px'}}>
                    <Text>Electronic</Text>
                </Link>
                <Link to='/jewelery'style={{textDecoration:'none',color:'black',fontSize:'20px'}}>
                    <Text>Jewelery</Text>
                </Link>
                <Link to='/mens clothing'style={{textDecoration:'none',color:'black',fontSize:'20px'}}>
                    <Text>Men's Clothing</Text>
                </Link>
                <Link to='/womens clothing'style={{textDecoration:'none',color:'black',fontSize:'20px'}}>
                    <Text>Women's Clothing</Text>
                </Link>
           </HStack>

                <Button border={'none'} bg={'transparent'} color='green' fontSize={'20px'} cursor={'pointer'}>
                    Login
                </Button>
        </HStack>
    </Box>

    </>

  )
}

export default NavBar