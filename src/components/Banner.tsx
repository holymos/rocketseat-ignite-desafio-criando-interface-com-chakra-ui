import { Box, Flex, Text, Image, Heading } from "@chakra-ui/react";

export function Banner() {
  return (
    <Flex
      w="100%"
      h={["163px", "250px", "250px", "335px"]}
      bgImage="url('/background_img.jpg')"
      bgPosition={["100% 20%", "100% 20%", "100% 30%"]}
      bgRepeat="no-repeat"
      bgSize="cover"
      align="center"
      position="relative"
    >
      <Flex
        justify={["center", "space-between"]}
        align="center"
        w="100%"
        mx="auto"
        px={["4", "10", "15", "20", "36"]}
      >
        <Box>
          <Heading
            fontSize={["xl", "2l", "2xl", "4xl", "4xl"]}
            fontWeight="medium"
            color="gray.100"
          >
            5 Continentes,
            <br /> infinitas possibilidades.
          </Heading>
          <Text
            fontSize={["0.8rem", "xl"]}
            fontWeight="regular"
            color="gray.300"
            mt="5"
            maxW={["100%", "100%", "100%", "550px"]}
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>

        <Image
          src="/airplane.svg"
          alt="Airplane"
          w={["300px", "300px", "300px", "430px"]}
          display={["none", "none", "block"]}
          transform="translateY(48px)"
          ml="8"
        />
      </Flex>
    </Flex>
  );
}
