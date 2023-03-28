import { Heading, Image, Text } from "@chakra-ui/react";
import logo from "../assets/funnel.png";

const Header = () => {
  return (
    <>
      <Image src={logo} alt="logo" width="200px" marginBottom="2rem" />
      <Heading color="white" fontSize="75px" mb="2rem">
        Keyword Extractor
      </Heading>
      <Text fontSize={25} textAlign="center">
        Paste in your text below and we'll extract the keywords for you
      </Text>
    </>
  );
};

export default Header;
