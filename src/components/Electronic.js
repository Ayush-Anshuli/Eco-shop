import React, { useEffect, useState } from 'react'
import { Box, HStack, Heading, Image, Select, Text, VStack, Wrap } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import Loader from './Loader';



const Electronic = () => {
  const [electronic, setelectronic] = useState([]);
  const [sort,setsort] = useState('asc');
  const [load , setload] = useState(true)


  useEffect(() => {
    const fetchelectronic = async () => {
      const data = await fetch(`https://fakestoreapi.com/products/category/electronics?sort=${sort}`)
      const jsons = await data.json();
      setelectronic(jsons);
      // console.log(jsons)
      setload(false);
    }
    fetchelectronic()
  }, [sort])
  return  (
    <Box mt={5} p={3}>
      <HStack justifyContent={'space-around'}>
        <Heading fontSize={'5xl'}>Electronic</Heading>
        <Select w={300} placeholder='Filter' fontSize={'xl'} p={2} defaultValue={'asc'} onChange={(e) => setsort(e.currentTarget.value)}>
          <option value='asc'>Price low to high</option>
          <option value='desc'>Price high to low</option>
        </Select>
      </HStack>

      <HStack mt={10} p={5} justifyContent={'center'} >
        <Wrap justifyContent={'center'} ml={100}>
        {
          load ? (<Loader/>) : 
          electronic.map((item) => (
            <ElectronicCard key={item.id} image={item.image} title={item.title} price={item.price} id={item.id} />
          ))
        }
        </Wrap>

      </HStack>

    </Box>
  )
}
const ElectronicCard = ({ image, title, price , id }) => {
  return (
    <Link to={`/productsdetails/${id}`}>
      <HStack w={500} h={600} p={5}>
        <VStack>
        <Image src={image} w={300} h={400}/>
        <Text p={5} ml={6} mr={6} fontSize={'xl'}>{title}</Text>
        <Text color={'green.600'} fontSize={'xl'}>${price}</Text>
        </VStack>
      </HStack>
    </Link>

  )
}
export default Electronic