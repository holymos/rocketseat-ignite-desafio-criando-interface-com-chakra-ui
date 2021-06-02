import { Flex } from "@chakra-ui/react";
import Head from "next/head";

import { Banner } from "../components/Banner";
import { DestinyList } from "../components/DestinyList";
import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Slider } from "../components/Slider";

export default function Home() {
  return (
    <>
      <Head>
        <title>worldtrip | Home</title>
      </Head>

      <Flex direction="column">
        <Header />
        <Banner />
        <DestinyList />
        <Separator />
        <Slider />
      </Flex>
    </>
  );
}
