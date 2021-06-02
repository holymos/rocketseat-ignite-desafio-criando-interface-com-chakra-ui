import { Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";

interface DestinyItemProps {
  icon: string;
  destiny: string;
}

export function DestinyItem({ icon, destiny }: DestinyItemProps) {
  const isMobile = useBreakpointValue({
    base: false,
    sm: true,
  });

  return (
    <Flex as="li" flexDir={["row", "column"]} align="center" justify="center">
      {isMobile ? (
        <Image src={icon} width={85} height={85} mb="6" />
      ) : (
        <Text color="yellow.500" fontSize="4xl" mr="2">
          •
        </Text>
      )}

      <Text fontWeight="600" color="gray.600" fontSize={["md", "xl", "2xl"]}>
        {destiny}
      </Text>
    </Flex>
  );
}
