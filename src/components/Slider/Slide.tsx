import { Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

import { SwiperSlide } from "swiper/react";

interface SliderProps {
  image: string;
  continent: string;
  description: string;
}

export function Slide({ image, continent, description }: SliderProps) {
  return (
    <SwiperSlide>
      <Flex
        w="100%"
        h="100%"
        align="center"
        justify="center"
        direction="column"
        bgImage="url('/europe.png')"
        bgRepeat="no-repeat"
        bgSize="cover"
        textAlign="center"
        bgPos="center"
      >
        <Link href={`/continent/${image}`} passHref>
          <a>
            <Heading
              fontSize={["3xl", "4xl", "5xl"]}
              color="gray.100"
              fontWeight="bold"
            >
              {continent}
            </Heading>
            <Text
              fontWeight="bold"
              color="gray.300"
              fontSize={["0.8rem", "1xl", "2xl"]}
              mt={["2", "4"]}
              textTransform="capitalize"
            >
              {description}
            </Text>
          </a>
        </Link>
      </Flex>
    </SwiperSlide>
  );
}
