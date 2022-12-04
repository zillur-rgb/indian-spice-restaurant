import { Box, Flex, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navabr';

export default function speisekarte() {
  return (
    <Box w="100%" h="100vh" bg="brand.900">
      <Navbar />
      <Flex
        display="flex"
        flexDir={'column'}
        justifyContent="center"
        alignItems="center"
      >
        <Text
          color="#fff"
          fontSize={{ base: 24, md: 48 }}
          fontWeight={700}
          py={0}
        >
          Unsere Speisekarte
        </Text>
      </Flex>

      <Flex
        w="100%"
        h="auto"
        align={'center'}
        bg="brand.900"
        flexDir={{ base: 'column', lg: 'row' }}
      >
        <Box w="50%" h="70vh" overflow={'hidden'} bg="brand.900">
          <iframe
            src="/pdfs/aussen.pdf"
            title="testPdf"
            height="100%"
            width="100%"
          />
        </Box>
        <Box w="50%" h="70vh" overflow={'hidden'} bg="brand.900">
          <iframe
            src="/pdfs/innen.pdf"
            title="testPdf"
            height="100%"
            width="100%"
          />
        </Box>
      </Flex>
      <Footer />
    </Box>
  );
}
