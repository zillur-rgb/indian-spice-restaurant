import { Box, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navabr';

export default function Kontaktieren() {
  return (
    <Box w="100%" h="100vh" bg="brand.900">
      <Navbar />
      <VStack align={'flex-start'} px={{ base: 0, md: 80 }} spacing={8} py={12}>
        <Text color="#fff" fontSize={24}>
          <Box as="span" fontWeight={700} fontStyle="italic">
            Adresse:
          </Box>{' '}
          Bahnstraße 20, 41515 Grevenboich
        </Text>
        <Text color="#fff" fontSize={24}>
          <Box as="span" fontWeight={700} fontStyle="italic">
            Telefon:
          </Box>{' '}
          02181/62186
        </Text>
        <Text color="#fff" fontSize={24}>
          <Box as="span" fontWeight={700} fontStyle="italic">
            Whatsapp:
          </Box>{' '}
          0176/32237918
        </Text>
      </VStack>
      <Footer />
    </Box>
  );
}
