import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react';
import Link from 'next/link';

export default function Hero() {
  return (
    <Flex
      w={'full'}
      h={'70vh'}
      backgroundImage={'url(/images/qspice.jpg)'}
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
    >
      <VStack
        w={'full'}
        justify={'center'}
        align={'flex-start'}
        px={useBreakpointValue({ base: 4, md: 28 })}
        bgGradient={'linear(to-r, blackAlpha.600, blackAlpha.900)'}
      >
        <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
          <Text
            color={'#fff'}
            fontWeight={700}
            lineHeight={1.5}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}
          >
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            eiusmod tempor
          </Text>
          <Stack direction={'row'}>
            <Button
              bg={'brand.900'}
              rounded={'full'}
              px={10}
              py={7}
              color={'white'}
              _hover={{ bg: 'black' }}
            >
              <Link href="/speiskekarte">Unsere Speisekarte</Link>
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}
