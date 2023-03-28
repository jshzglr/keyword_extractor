import { useState } from "react";
import { Textarea, Button, useToast } from "@chakra-ui/react";

const TextInput = ({ extractKeywords }) => {
  const [text, setText] = useState("");
  const toast = useToast();

  const submitText = () => {
    if (text === "") {
      toast({
        title: "The text field is empty",
        description: "Please enter some text for keyword extraction",
        status: "error",
        duration: 4000,
      });
    } else {
      extractKeywords(text);
    }
  };

  return (
    <>
      <Textarea
        variant="solid"
        value={text}
        bg="whiteAlpha.200"
        width="800px"
        height="300px"
        margin="20px"
        onChange={(e) => setText(e.target.value)}
      />
      <Button bg="white" color="black" onClick={submitText}>
        Extract Keywords
      </Button>
    </>
  );
};

export default TextInput;
