import { HStack, Heading, Stack, VStack, Image, Text, Box } from '@chakra-ui/react'
import React from 'react'
import free from '../assets/free.png'
import happiness from '../assets/happiness.png'
import head from '../assets/headphones.png'
import leaf from '../assets/leaf.png'

const HeroSection = () => {
    return (
        <>
            <Heading textAlign='center' mt={10} p={2} color={'#4CAF50'} fontSize={'5xl'}>
                Why Bought From Us ?
            </Heading>
            <HStack justifyContent={'space-around'} mt={[5,20]} fontSize={'lg'}>
                <Stack w={[60,200]} fontWeight={'bold'}>
                    <Image src={free} h={[50, 90]} w={[10,20]}/>
                    <Text >Free Shipping</Text>
                    <Text color={'#4CAF50'}>Shop now and enjoy free shipping on all orders</Text>

                </Stack>

                <Stack w={[60,200]} fontWeight={'bold'}>
                    <Image src={happiness} h={[50, 90]} w={[10,20]} />
                    <Text>Satisfaction Guaranteed</Text>
                    <Text color={'#4CAF50'}>Our satisfaction guarantee ensures quality products</Text>

                </Stack>

                <Stack w={[60,200]} fontWeight={'bold'}>
                    <Image src={leaf} h={[50, 90]} w={[10,20]}/>
                    <Text>Eco Friendly Packaging</Text>
                    <Text color={'#4CAF50'}>Using eco-friendly materials, sustainable and biodegradable.</Text>

                </Stack>

                <Stack w={[60,200]} fontWeight={'bold'}>
                    <Image src={head} h={[50, 90]} w={[10,20]}/>
                    <Text>Fast Response</Text>
                    <Text color={'#4CAF50'}>24/7 fast and reliable assistance whenever you need it</Text>

                </Stack>
            </HStack>
        </>
    )
}

export default HeroSection