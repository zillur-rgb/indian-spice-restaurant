import { HStack, Icon, Text } from '@chakra-ui/react';
import React from 'react';
import { BsWhatsapp } from 'react-icons/bs';

const HeroContact = () => {
  return (
    <HStack
      justify={'space-between'}
      w="100%"
      px={{ base: 4, md: 80 }}
      bg="brand.900"
      py={4}
      color="#fff"
    >
      <Text fontSize={{ base: 16, md: 32 }} fontWeight="700">
        Reservieren Sie auch per Whatsapp
      </Text>
      <a href="https://wa.me/4917632237918">
        <HStack
          textDecor={'underline'}
          fontSize={{ base: 16, md: 32 }}
          fontWeight="700"
          spacing={8}
        >
          <Icon as={BsWhatsapp} />
          <Text>0176/32237918</Text>
        </HStack>
      </a>
    </HStack>
  );
};

export default HeroContact;
