import React from 'react'
import { HStack, VStack, Text, Heading, Button , Image,Box , Stack, Skeleton} from '@chakra-ui/react'
import heroimg from '../assets/heroimg.png'
import {Link} from 'react-router-dom'
import electronicimg from '../assets/electronic.jpg'
import jewel from '../assets/jewelery.jpg'
import menclothimg from '../assets/menscloth.jpg'
import womeclothimg from '../assets/womenscloth.jpg'
import Product from './Product'
import useOnline from '../utils/useOnline'




const Hero = () => {

  const category = [
    {
      id:1,
      name:'Electronic',
      image:electronicimg
    },
    {
      id:2,
      name:'Jewelery',
      image:jewel
    },
    {
      id:3,
      name:`Mens Clothing`,
      image:menclothimg
    },
    {
      id:4,
      name:'Womens Clothing',
      image:womeclothimg
    }
  ]

  const isonline = useOnline();

  if(!isonline) {
    return(
      <div>connection lost</div>
    )
  }


  
  // console.log(category)
  return (
    <>
      <HStack justifyContent={'space-around'} flex={'wrap'} mt={'50px'} p={'20px'}>
        <VStack alignItems={['center', 'flex-start']} px={['3rem', '20']} py={['5rem', '0']}>

          <Heading lineHeight={'150%'} textAlign={['center', 'left']} fontSize={['40px', '50px']} color={'gray'}>
            Healthy cutlery , <br /> healthy body
          </Heading>

          <Text color={'gray'} pl='5px' pr={'5px'} ml={'0px'} fontSize={'20px'}>
            Upgrade your dining experience and begin your path to a healthyy you right now
          </Text>

          <Button
            size='md'
            height='48px'
            width='200px'
            border='none'
            color='white' bg='#4CAF50' fontSize='18px'
            cursor={'pointer'}
            borderRadius={'50px'}
          >
            Learn More
          </Button>
        </VStack>
        <VStack p={'5px'} mr={5} >
          <Image src={heroimg}  borderRadius={'50px'}/>
        </VStack>
      </HStack>

      <HStack direction={['column','row']} p={15} gap={10} justifyContent={'center'} mt={50} >
        <Heading fontSize={'50px'} mr={20} color={'#4CAF50'}>
            Category <br/> For you
        </Heading>
                {
                  category.map((item) => (
                    <CategoryCard key={item.id} name={item.name} image={item.image}/>
                  ))
                }
      </HStack>

        <Product/>
      
      

    </>
  )
}

const CategoryCard = ({name,image}) => {
    return(

      <Link to={`/${name}`}>
          <Box pos={'relative'} cursor={'pointer'} w={[200]}>
              <Image src={image} borderRadius={'0.5rem'}/>
              <Button border={'none'}  fontSize={[]} bg={'rgba(0,0,0,0.7)'} pos={'absolute'} top={'50%'} left={'50%'} color={'white'} transform={'translate(-50%,-50%)'}>{name}</Button>
          </Box>
      </Link>

    )
}

export default Hero