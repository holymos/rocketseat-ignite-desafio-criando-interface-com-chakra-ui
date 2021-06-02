import { Box } from "@chakra-ui/react";

export function Separator() {
  return (
    <Box
      width={["60px", "90px"]}
      mx="auto"
      h="2px"
      bg="gray.600"
      my={["9", "20"]}
    ></Box>
  );
}
