/* eslint-disable no-unused-vars */
import React from "react";

import { StyledHeader } from "./styles/Header.styled";

import { Container } from "./styles/Container.styled";

import { Nav } from "./styles/Header.styled";

import { Button } from "./styles/Button.styled";

import { Logo } from "./styles/Header.styled";
export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="./logo.svg" alt="logo" />
          <Button>Try It Free</Button>
        </Nav>
      </Container>
    </StyledHeader>
  );
}
