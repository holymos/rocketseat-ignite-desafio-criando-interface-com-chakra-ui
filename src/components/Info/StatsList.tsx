import { Flex, Heading, Text } from "@chakra-ui/react";
import { Stat } from "./Stat";

export function StatsList() {
  return (
    <Flex align="center" justify="space-between">
      <Stat heading="50" text="países" />
      <Stat heading="60" text="línguas" />
      <Stat heading="27" text="cidades + 100" icon={true} />
    </Flex>
  );
}
