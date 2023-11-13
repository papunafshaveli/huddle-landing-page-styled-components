/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { StyledCard } from "./styles/Card.styled";
export default function Card({ item: { id, title, body, image } }) {
  return (
    <StyledCard layout={id % 2 === 0 ? "row-reverse" : undefined}>
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>

      <div>
        <img src={`./${image}`} alt="" />
      </div>
    </StyledCard>
  );
}
