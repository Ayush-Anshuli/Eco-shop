import React, { useEffect, useState } from 'react'
import { Box, HStack, Heading, Image, Select, Text, VStack, Wrap } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import Loader from './Loader';



const MensCloth = () => {
  const [mencloth, setmenscloth] = useState([]);
  const [sort,setsort] = useState('asc');
  const [load , setload] = useState(true);


  useEffect(() => {
    const fetcheljewelery = async () => {
      const data = await fetch(`https://fakestoreapi.com/products/category/men's clothing?sort=${sort}`)
      const jsons = await data.json();
      setmenscloth(jsons);
      setload(false)
      // console.log(jsons)
    }
    fetcheljewelery()
  }, [sort])
  return (
    <Box mt={5} p={3}>
      <HStack justifyContent={'space-around'}>
        <Heading fontSize={'5xl'}>Mens Collections</Heading>
        <Select w={300} placeholder='Filter' fontSize={'xl'} p={2} defaultValue='asc' onChange={(e) => setsort(e.currentTarget.value)}>
          <option value='asc'>Price low to high</option>
          <option value='desc'>Price high to low</option>
        </Select>
      </HStack>

      <HStack mt={10} p={5} justifyContent={'center'} >

          {
            load ? (<Loader/>) :
            mencloth.map((item) => (
              <MensCard key={item.id} image={item.image} title={item.title} price={item.price} id={item.id} />
            ))
          }
        

      </HStack>

    </Box>
  )
}
const MensCard = ({ image, title, price, id }) => {
  return (
    <Link to={`/productsdetails/${id}`}>
      <HStack w={400} h={600} p={5}>
        <VStack w={400}>
          <Image src={image} w={300} h={400} />
          <Text p={5} ml={6} mr={6} fontSize={'xl'}>{title}</Text>
          <Text color={'green.600'} fontSize={'xl'}>${price}</Text>
        </VStack>
      </HStack>
    </Link>

  )
}
export default MensCloth