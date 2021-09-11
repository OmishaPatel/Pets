import React from "react";
import { Link } from "react-router-dom";
import { PetContainer, PetFooter } from "./styledcomponents/PetContainer.style";
import { Button } from "./styledcomponents/Button.style";
const Pet = ({ name, info, image, id }) => {
  return (
    <PetContainer>
      <img src={image} alt={name} />
      <PetFooter>
        <h3>{name}</h3>
        <p>{info}</p>
        <Button backgroundColor="#d47995">
          <Link to={`/pet/${id}`}>Details</Link>
        </Button>
      </PetFooter>
    </PetContainer>
  );
};
export default Pet;
