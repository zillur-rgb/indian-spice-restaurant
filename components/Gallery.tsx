import { Grid, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';

export default function Gallery() {
  const images = [
    '/images/interior2.jpeg',
    '/images/interior3.jpeg',
    '/images/interior4.jpeg',
    '/images/interior5.jpeg',
    '/images/interior6.jpeg',
    '/images/interior1.jpeg',
    '/images/spice2.jpeg',
    '/images/spice3.jpeg',
    '/images/spice4.jpeg',
    '/images/qspice.jpg',
  ];
  return (
    <VStack px={{ base: 0, md: 80 }}>
      <Text py={10} fontSize="32px" color="#fff" fontWeight={700}>
        Unsere Gallerie
      </Text>
      <Text
        w={{ base: '90%', md: '60%' }}
        mx="auto"
        textAlign={'center'}
        color="#fff"
        pb={10}
        fontSize={24}
      >
        Gern begrüßen wir Sie in unseren Räumlichkeiten in ruhiger Atmosphäre,
        zu einem kühlen Getränk im grünen Biergarten oder liefern für Ihre
        Feierlichkeit zu Ihnen nach Hause!
      </Text>
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
          lg: 'repeat(4, 1fr)',
        }}
        gap={8}
        p={4}
        bg="white"
        w="100%"
      >
        {images.map((image) => (
          <Image
            _hover={{
              bgOpacity: '.8',
            }}
            src={image}
            key={image}
            h="200px"
            w="100%"
            objectFit="cover"
          />
        ))}
      </Grid>
    </VStack>
  );
}
