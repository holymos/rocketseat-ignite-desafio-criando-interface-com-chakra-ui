import { useRouter } from "next/dist/client/router";

import { RiArrowLeftSLine } from "react-icons/ri";

import { Flex, Icon, Image as ChakraImage, Text } from "@chakra-ui/react";
import Link from "next/link";
import { Box } from "@chakra-ui/react";

export function Header() {
  const { asPath } = useRouter();
  const notHomePage = asPath !== "/";

  return (
    <Flex
      bg="white"
      w="100%"
      as="header"
      mx="auto"
      px="1rem"
      h={["50px", "100px"]}
      align="center"
      justify="center"
    >
      <Flex
        h="100%"
        mx="auto"
        w="100%"
        maxW="1160px"
        align="center"
        justify="center"
        position="relative"
      >
        {notHomePage && (
          <Box position="absolute" left={["10px", "60px", "140px"]}>
            <Link href="/">
              <a>
                <Icon as={RiArrowLeftSLine} fontSize={[20, 40]} />
              </a>
            </Link>
          </Box>
        )}
        <ChakraImage
          src="/logo.svg"
          alt="Logo"
          width={["81px", "184px"]}
          height="46px"
        />
      </Flex>
    </Flex>
  );
}
