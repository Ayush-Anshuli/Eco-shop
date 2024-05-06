import React from 'react'
import { Box, Grid, GridItem, HStack, Image, Text, VStack } from '@chakra-ui/react'
import ecologo from '../assets/ecologo.png'
import payment from '../assets/payment.png'
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";




const Footer = () => {
  return (
    <>
    
      <Box w={'full'}  h={'100'} pos='relative' py={5} mt={16} borderTop='1px solid green'> 
       <Image src={ecologo} pos='absolute' left='50%' transform='translate(-50%,-50%)' />

      </Box>
            <Grid templateColumns='repeat(4, 1fr)' mt={5} pl={2} gap={5}  mb={2} py={2}>
            <GridItem>
                <VStack>
                    <Text fontFamily='bold' fontSize='xl' color='#4CAF50'>Eco Shop</Text>
                    <Text>About Us</Text>
                    <Text>Contact Us</Text>
                    <Text>FAQs</Text>
                </VStack>
            </GridItem>

            <GridItem>
                <VStack>
                    <Text  fontFamily='bold' fontSize='xl' color='#4CAF50'>Product Categories</Text>
                    <Text>Electronics</Text>
                    <Text>Jewelery</Text>
                    <Text>Men's Clothing</Text>
                    <Text>Women's Clothing</Text>
                </VStack>
            </GridItem>

            <GridItem>
                <VStack>
                    <Text  fontFamily='bold' fontSize='xl' color='#4CAF50'>Support</Text>
                    <Text>Shipping</Text>
                    <Text>Returns</Text>
                    <Text>Privacy Policy</Text>
                    <Text>Terms of Use</Text>
                    <Text>Affiliates</Text>
                </VStack>
            </GridItem>

            <GridItem>
                <VStack>
                  <Text  fontFamily='bold' fontSize='xl' color='#4CAF50'>Payment Method</Text>
                  <Image src={payment} h={150} mt={2}/>
                </VStack>
            </GridItem>
      </Grid>

        <HStack w='100%' mt={5} mb={5} p={3} justifyContent='space-around'>
              <VStack>
                <Text> © 2023 ECO Shop India. All Rights Reserved </Text>
                <Text>Made With ❤️ Ayush Anshuli</Text>
                
              </VStack>
              <HStack fontSize='1.95rem'>
              <a href='https://www.instagram.com/__ay_u_sh_8/'><FaInstagram/></a>
              <a href='https://github.com/Ayush-Anshuli'><FaGithub/></a>
              <a href='https://www.linkedin.com/in/ayush-anshuli-1a4b71246/'><FaLinkedin/></a>
              
              </HStack>

        </HStack>
    </>

  )
}

export default Footer