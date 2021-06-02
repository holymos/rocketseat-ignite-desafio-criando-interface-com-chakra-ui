import { Grid, GridItem, HStack } from "@chakra-ui/react";
import { DestinyItem } from "./DestinyItem";

export function DestinyList() {
  return (
    <Grid
      templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5, 1fr)"]}
      w="100%"
      justifyContent="space-between"
      alignItems="center"
      mt={["10", "32"]}
      mx="auto"
      maxW="1160px"
      gap={[1, 5]}
    >
      <GridItem>
        <DestinyItem icon="/cocktail.svg" destiny="vida noturna" />
      </GridItem>
      <GridItem>
        <DestinyItem icon="/surf.svg" destiny="praia" />
      </GridItem>
      <GridItem>
        <DestinyItem icon="/building.svg" destiny="moderno" />
      </GridItem>
      <GridItem>
        <DestinyItem icon="/museum.svg" destiny="vida clássico" />
      </GridItem>
      <GridItem colSpan={[2, 2, 2, 1]}>
        <DestinyItem icon="/earth.svg" destiny="e mais..." />
      </GridItem>
    </Grid>
  );
}
