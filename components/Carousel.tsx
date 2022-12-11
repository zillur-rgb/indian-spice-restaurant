import React from 'react';
import {
  Box,
  Container,
  Heading,
  IconButton,
  Stack,
  Text,
  useBreakpointValue,
  Image,
  VStack,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Carousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });

  // These are the images used in the slide
  const cards = [
    '/images/interior1.jpeg',
    '/images/spice2.jpeg',
    '/images/spice3.jpeg',
    '/images/spice4.jpeg',
    '/images/qspice.jpg',
  ];

  return (
    <Box
      position={'relative'}
      height={{ base: '550px', md: '750px' }}
      width={'100%'}
      overflow={'hidden'}
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        bg="brand.900"
        color={'#fff'}
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        bg="brand.900"
        color={'#fff'}
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((url, index) => (
          <Box
            key={index}
            height={{ base: '3xl', md: '6xl' }}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            bgImage={`linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.7)) , url(${url})`}
            w="100%"
          >
            <Container
              size="container.lg"
              height={{ base: '400px', md: '600px' }}
              position="relative"
              w={{ base: '100%', md: '700px' }}
            >
              <VStack
                spacing={6}
                w={{ base: '100%', md: '700px' }}
                overflow={{ base: 'hidden', md: 'auto' }}
                pt={{ base: '70px', lg: '150px' }}
                ml={{ base: '0px', lg: '-100px' }}
              >
                <Image src="/images/logo.jpeg" w={{ base: 150, md: 200 }} />
                <Heading
                  pr={{ base: '0', md: 0 }}
                  fontSize={{ base: '28px', lg: '64px' }}
                  color="#fff"
                  textAlign={'center'}
                >
                  Das Team-Restaurant Indian Spice heißt Sie herzlich
                  willkommen.
                </Heading>
              </VStack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
