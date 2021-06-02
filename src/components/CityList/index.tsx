import { Box, Grid, Heading } from "@chakra-ui/react";
import { City } from "./City";

export function CityList() {
  return (
    <Box>
      <Heading fontWeight="500" fontSize={["2xl", "4xl"]} mb="10">
        Cidades +100
      </Heading>
      <Grid
        templateColumns={["1fr", "2fr", "repeat(3, 1fr)", "repeat(4, 1fr)"]}
        gap={["20px", "45px"]}
        alignItems="center"
        justifyContent="center"
        px={["30px", "0"]}
      >
        <City
          cityImg="/london.jpg"
          city="Londres"
          country="Reino Unido"
          flag="/uk_flag.png"
        />
        <City
          cityImg="/paris.jpg"
          city="Paris"
          country="França"
          flag="/french_flag.png"
        />
        <City
          cityImg="/rome.jpg"
          city="Roma"
          country="Itália"
          flag="/italian_flag.png"
        />
        <City
          cityImg="/prague.jpg"
          city="Praga"
          country="República Tcheca"
          flag="/czech_flag.svg"
        />
        <City
          cityImg="/amsterdam.jpg"
          city="Amsterdã"
          country="Holanda"
          flag="/dutch_flag.png"
        />
      </Grid>
    </Box>
  );
}
