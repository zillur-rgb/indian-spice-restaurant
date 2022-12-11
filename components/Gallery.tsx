import { Grid, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';

export default function Gallery() {
  const images = [
    'https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80',
    'https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80',
    'https://images.unsplash.com/photo-1596797038530-2c107229654b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
    'https://images.unsplash.com/photo-1517244683847-7456b63c5969?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
    'https://images.unsplash.com/photo-1593560704563-f176a2eb61db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
    '/images/interior1.jpeg',
    '/images/interior2.jpeg',
    '/images/interior3.jpeg',
    '/images/interior4.jpeg',
    '/images/interior5.jpeg',
    '/images/interior6.jpeg',
  ];
  return (
    <VStack px={{ base: 4, md: 80 }}>
      <Text py={10} fontSize="32px" color="#fff" fontWeight={700}>
        Unsere Gallerie
      </Text>
      <Text
        w="60%"
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
