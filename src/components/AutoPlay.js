import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Text, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import HeroSection from "./HeroSection";

function AutoPlay() {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 3000,
    cssEase: "linear"
  };


  const [allproducts, setallproducts] = useState([]);

  useEffect(() => {
    const fetchallproduct = async () => {
      const data = await fetch(`https://fakestoreapi.com/products`);
      const jsons = await data.json();
      console.log(jsons);
      setallproducts(jsons);
    }
    fetchallproduct();
  }, [])

  return (
    <>
    
    <div className="slider-container" >
      <Slider {...settings} >

        {
          allproducts.map((item) => (
            <CrauselCard key={item.id} image={item.image} title={item.title} price={item.price} id={item.id} />
          ))
        }

      </Slider>
    </div>

    <HeroSection/>
    </>
  );
}
const CrauselCard = ({ image, title, price,id }) => {
  return (
    <Link to={`/productsdetails/${id}`}>
      <Box p={2} h={[500]} >
        <Image src={image} h={250} ml={5}/>
        <Text fontSize={'lg'} textAlign={'center'} pl={4} pr={4} pt={4}>{title}</Text>
        <Text fontSize={'lg'} color={'#4CAF50'} fontFamily={'bold'} textAlign={'center'} p={4} mt={0}>${price}</Text>
      </Box>
    </Link>

  )
}
export default AutoPlay;
