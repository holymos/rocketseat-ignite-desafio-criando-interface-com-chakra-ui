import { Flex } from "@chakra-ui/react";
import Head from "next/head";
import { CityList } from "../components/CityList";
import { ContinentBanner } from "../components/ContinentBanner";
import { Header } from "../components/Header";
import { Info } from "../components/Info";

export default function Continent() {
  return (
    <>
      <Head>
        <title>worldtrip | Europe</title>
      </Head>

      <Flex flexDirection="column">
        <Header />
        <ContinentBanner />
        <Flex flexDir="column" maxW="1160px" mx="auto" mb="10" px="1rem">
          <Info />
          <CityList />
        </Flex>
      </Flex>
    </>
  );
}
