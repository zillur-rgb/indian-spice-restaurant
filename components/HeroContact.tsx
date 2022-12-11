import { Heading, HStack, Icon, Stack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { BsWhatsapp } from 'react-icons/bs';

const HeroContact = () => {
  return (
    <VStack bg="brand.900" py={4} color="#fff">
      <Heading
        fontSize={{ base: '28px', lg: '36px' }}
        color="#fff"
        textAlign={'center'}
      >
        Das Team-Restaurant Indian Spice heißt Sie herzlich willkommen.
      </Heading>
      <Stack
        display={'flex'}
        flexDir={{ base: 'column', md: 'row' }}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
        w="100%"
        px={{ base: 4, md: 80 }}
        spacing={{ base: 0, md: 8 }}
      >
        <Text
          fontSize={{ base: 16, md: 32 }}
          fontWeight="700"
          px={{ base: 0, md: 12 }}
        >
          Reservieren Sie auch per Whatsapp
        </Text>
        <a href="https://wa.me/4917632237918">
          <HStack
            textDecor={'underline'}
            fontSize={{ base: 16, md: 32 }}
            fontWeight="700"
            spacing={{ base: 1, md: 8 }}
          >
            <Icon as={BsWhatsapp} />
            <Text>0176/32237918</Text>
          </HStack>
        </a>
      </Stack>
    </VStack>
  );
};

export default HeroContact;
