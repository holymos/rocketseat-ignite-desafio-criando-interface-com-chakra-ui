import { Box, Flex, Image, Heading, Text } from "@chakra-ui/react";

interface CityProps {
  cityImg: string;
  city: string;
  country: string;
  flag: string;
}

export function City({ cityImg, city, country, flag }: CityProps) {
  return (
    <Box borderRadius="5px" overflow="hidden">
      <Image src={cityImg} w="100%" h="170px" />
      <Flex
        p="6"
        align="center"
        justify="space-between"
        bg="white"
        border="1px"
        borderColor="yellow.400"
        borderTop="0"
      >
        <Flex flexDir="column">
          <Heading fontSize="xl" fontWeight="500">
            {city}
          </Heading>
          <Text mt="3" color="gray.500" fontWeight="500">
            {country}
          </Text>
        </Flex>

        <Image src={flag} w="30px" h="30px" borderRadius="50%" />
      </Flex>
    </Box>
  );
}
