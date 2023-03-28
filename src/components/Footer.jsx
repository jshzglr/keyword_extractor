import { Box, Image, Text, Flex } from "@chakra-ui/react";
import logo from "../assets/open_ai.svg";

const Footer = () => {
  return (
    <Box margin="10px" paddingRight="5px" marginTop="1rem">
      <Flex justifyContent="center" alignItems="center">
        <Image src={logo} width="30px" />
        <Text>Powered by Open AI</Text>
      </Flex>
    </Box>
  );
};

export default Footer;
