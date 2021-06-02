import SwiperCore, { Navigation, Pagination, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import { Heading, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

SwiperCore.use([Navigation, Pagination, A11y]);

export function Slider() {
  return (
    <Flex direction="column" px={["0", "0", "0", "100px"]}>
      <Heading
        textAlign="center"
        fontWeight="500"
        mb={["5", "14"]}
        fontSize={["lg", "3xl", "4xl"]}
      >
        Vamos nessa?
        <br /> Então escolha seu continente
      </Heading>

      <Flex
        w="100%"
        maxW="1240px"
        mx="auto"
        mb={["5", "10"]}
        h={["250px", "450px"]}
      >
        <Swiper
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          style={{ width: "100%", flex: "1" }}
        >
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
              <Link href="/europe" passHref>
                <a>
                  <Heading
                    fontSize={["3xl", "4xl", "5xl"]}
                    color="gray.100"
                    fontWeight="bold"
                  >
                    Europa
                  </Heading>
                  <Text
                    fontWeight="bold"
                    color="gray.300"
                    fontSize={["0.8rem", "1xl", "2xl"]}
                    mt={["2", "4"]}
                    textTransform="capitalize"
                  >
                    O continente mais antigo.
                  </Text>
                </a>
              </Link>
            </Flex>
          </SwiperSlide>

          <SwiperSlide>
            <Flex
              w="100%"
              h="100%"
              align="center"
              justify="center"
              direction="column"
              bgImage="url('/amazon.jpg')"
              bgRepeat="no-repeat"
              bgSize="cover"
              textAlign="center"
              bgPos="center"
            >
              <Link href="/" passHref>
                <a>
                  <Heading
                    fontSize={["3xl", "4xl", "5xl"]}
                    color="gray.100"
                    fontWeight="bold"
                  >
                    América do Sul
                  </Heading>
                  <Text
                    fontWeight="bold"
                    color="gray.300"
                    fontSize={["0.8rem", "1xl", "2xl"]}
                    mt={["2", "4"]}
                    textTransform="capitalize"
                  >
                    O continente mais antigo.
                  </Text>
                </a>
              </Link>
            </Flex>
          </SwiperSlide>
        </Swiper>
      </Flex>
    </Flex>
  );
}
