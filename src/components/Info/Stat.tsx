import {
  Flex,
  Heading,
  Icon,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverTrigger,
  Text,
  PopoverContent,
} from "@chakra-ui/react";
import { RiInformationLine } from "react-icons/ri";

interface StatProps {
  heading: string;
  text: string;
  icon?: boolean;
}

export function Stat({ heading, text, icon = false }: StatProps) {
  return (
    <Flex
      flexDir="column"
      justify="center"
      align={["flex-start", "flex-start", "center"]}
    >
      <Heading color="yellow.500" fontSize={["2xl", "5xl"]} fontWeight="500">
        {heading}
      </Heading>
      <Flex align="center">
        <Text fontWeight="500" fontSize={["md", "xl"]} color="gray.600">
          {text}
        </Text>
        {icon && (
          <Popover>
            <PopoverTrigger>
              <span>
                <Icon
                  cursor="pointer"
                  as={RiInformationLine}
                  ml="2"
                  color="gray.400"
                  w={["10px", "16px"]}
                  h={["10px", "16px"]}
                />
              </span>
            </PopoverTrigger>
            <PopoverContent bg="yellow.500" color="gray.100">
              <PopoverArrow bg="yellow.500" />
              <PopoverCloseButton />
              <PopoverBody fontWeight="400" fontSize={["md", "lg"]}>
                Londres, Paris, Roma, Praga, Amsterdã
              </PopoverBody>
            </PopoverContent>
          </Popover>
        )}
      </Flex>
    </Flex>
  );
}
