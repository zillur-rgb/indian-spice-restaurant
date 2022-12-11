import {
  Box,
  Card,
  Text,
  CardBody,
  Grid,
  Heading,
  Button,
} from '@chakra-ui/react';
import React from 'react';

const Features = () => {
  const features = [
    {
      id: 0,
      title: 'FEIERLICHKEITEN',
      desc: 'Ab sofort steht für Seminare ein seperater Raum zur Verfügung für ca. 45 Personen! Wir organisieren Ihre Feierlich- keiten! Hochzeiten, Weihnachtsfeiern, Kommunion/Konfirmation, Trauerfeiern, Firmenfeste, Frühstück, Brunch usw.',
    },
    {
      id: 1,
      title: 'PARTYSERVICE',
      desc: 'Feiern Sie im Restaurant Indian Spice oder Zuhause mit unserem Party-Service. Unsere Räumlichkeiten verfügen über 60 Sitz-Plätze, direkt vor dem Restaurant sind ausreichend Parkplätze vorhanden.',
    },
    {
      id: 2,
      title: 'LIEFERSERVICE INDIAN SPICE',
      desc: 'Über unseren Außer-Haus-Service können Sie bequem per Telefon Ihr gewünschtes Gericht bestellen und nach etwa 20-30 Minuten im Restaurant abholen.',
    },
  ];

  return (
    <Box
      w={'full'}
      h={'70vh'}
      backgroundImage={'url(/images/qspice.jpg)'}
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
      px={{ base: 4, md: 80 }}
      py={{ base: 4, md: 32 }}
    >
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
          lg: 'repeat(3, 1fr)',
        }}
        gap={8}
      >
        {features.map((feature) => (
          <Card bg={'brand.900'} key={feature.id} h="400px">
            <CardBody color="#fff" pos={'relative'}>
              <Text fontSize={24} py={4} borderBottom="1px solid #aaa">
                {feature.title}
              </Text>
              <Text py={4} lineHeight="28px">
                {feature.desc}
              </Text>
              <Button pos="absolute" bottom={8} right={4} color={'brand.900'}>
                Mehr lesen
              </Button>
            </CardBody>
          </Card>
        ))}
      </Grid>
    </Box>
  );
};

export default Features;
