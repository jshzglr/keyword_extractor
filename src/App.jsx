import { useState } from "react";
import { Container, Box } from "@chakra-ui/react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TextInput from "./components/TextInput";
import Modal from "./components/KeywordsModal";

const App = () => {
  const [keywords, setKeywords] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const extractKeywords = async (text) => {
    setIsLoading(true);
    setIsOpen(true);

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "text-davinci-003",
        prompt:
          "Extract keywords from this text. Make the first letter of each word uppercase and separate with commas.\n\n" +
          text,
        temperature: 0.4,
        max_tokens: 20,
        frequency_penalty: 0.8,
      }),
    };

    const response = await fetch(import.meta.env.VITE_OPENAI_API_URL, options);
    const json = await response.json();
    const data = json.choices[0].text.trim();
    setKeywords(data);
    setIsLoading(false);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Box bg="black" color="white" height="100vh" paddingTop="130px">
      <Container maxW="3xl" centerContent>
        <Header />
        <TextInput extractKeywords={extractKeywords} />
        <Footer />
      </Container>
      <Modal
        keywords={keywords}
        isLoading={isLoading}
        isOpen={isOpen}
        closeModal={closeModal}
      />
    </Box>
  );
};

export default App;
