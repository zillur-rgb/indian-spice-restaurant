import { Box, Flex, HStack, Text } from '@chakra-ui/react';
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
          py={12}
        >
          Unsere Speisekarte
        </Text>
      </Flex>

      <HStack h="100vh">
        <iframe
          src="/pdfs/aussen.pdf"
          title="testPdf"
          height="100%"
          width="50%"
        />
        <iframe
          src="/pdfs/innen.pdf"
          title="testPdf"
          height="100%"
          width="50%"
        />
      </HStack>
      <Footer />
    </Box>
  );
}
