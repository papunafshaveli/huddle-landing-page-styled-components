/* eslint-disable no-unused-vars */
import React from "react";

import { StyledHeader } from "./styles/Header.styled";

import { Container } from "./styles/Container.styled";

import { Nav } from "./styles/Header.styled";

import { Button } from "./styles/Button.styled";

import { Logo } from "./styles/Header.styled";

import { Flex } from "./Flex.styled";

import { Image } from "./styles/Header.styled";
export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="./logo.svg" alt="logo" />
          <Button>Try It Free</Button>
        </Nav>

        <Flex>
          <div>
            <h1>Build The Community Yor Fans Will Love</h1>

            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>

            <Button bg="#ff0099" color="white">
              Get Started For Free
            </Button>
          </div>

          <Image src="./illustration-mockups.svg" alt="illustration" />
        </Flex>
      </Container>
    </StyledHeader>
  );
}
