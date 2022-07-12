import React from "react";
import { Button, InputBox, StyledContainer } from "../../../styles/UrlContainer.styled";

const UrlContainer = () => {
  return (
    <StyledContainer>
      <InputBox
        placeholder="Shorten a link here..."
        required = "please add a link"
        id="link"

      />
      <Button type="submit">
        Shorten It!
      </Button>
    </StyledContainer>
  );
};

export default UrlContainer;
