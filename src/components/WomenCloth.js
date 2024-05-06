import React, { useEffect, useState } from 'react'
import { Box, HStack, Heading, Image, Select, Text, VStack, Wrap } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import Loader from './Loader';



const WomenCloth = () => {
  const [womcloth, setwomcloth] = useState([]);
  const [sort , setsort] = useState('asc');
  const [load , setload] = useState(true)


  useEffect(() => {
    const fetcheljewelery = async () => {
      const data = await fetch(`https://fakestoreapi.com/products/category/women's clothing?sort=${sort}`)
      const jsons = await data.json();
      setwomcloth(jsons);
      setload(false)
      // console.log(jsons)
    }
    fetcheljewelery()
  }, [sort])
  return (
    <Box mt={5} p={3}>
      <HStack justifyContent={'space-around'}>
        <Heading fontSize={'5xl'}>Womens Collections</Heading>
        <Select w={300} placeholder='Filter' fontSize={'xl'} p={2}  onChange={(e) => setsort(e.target.value)}>
          <option value='asc'>Price low to high</option>
          <option value='desc'>Price high to low</option>
        </Select>
      </HStack>

      <HStack mt={10} p={5} justifyContent={'center'} >
        <Wrap justifyContent={'center'} ml={100}>
          {
            load ? (<Loader/>) :
            womcloth.map((item) => (
              <WomensCard key={item.id} image={item.image} title={item.title} price={item.price} id={item.id} />
            ))
          }
        </Wrap>

      </HStack>

    </Box>
  )
}
const WomensCard = ({ image, title, price, id }) => {
  return (
    <Link to={`/productsdetails/${id}`}>
      <HStack w={500} h={600} p={5}>
        <VStack>
          <Image src={image} w={300} h={400} />
          <Text p={5} ml={6} mr={6} fontSize={'xl'}>{title}</Text>
          <Text color={'green.600'} fontSize={'xl'}>${price}</Text>
        </VStack>
      </HStack>
    </Link>

  )
}
export default WomenCloth