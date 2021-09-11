import styled from "styled-components";

export const PetContainer = styled.article`
  background: #fff;
  margin-bottom: 2rem;
  box-shadow: 2px 5px 3px 0px rgba(0, 0, 0, 0.5);
  transition: all 0.5s linear;
  display: grid;
  grid-template-rows: auto 1fr;
  border-radius: 0.5rem;

  &:hover {
    box-shadow: 4px 10px 5px 0px rgba(0, 0, 0, 0.5);
    transform: scale(1.05);
  }

  & img {
    height: 20rem;
    object-fit: cover;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  }
`;
export const PetFooter = styled.div`
  padding: 1.5rem;

  & h1,
  h2,
  p {
    margin-bottom: 0.3rem;
  }

  & p {
    color: var(--darkGrey);
    margin-bottom: 0.5rem;
  }
`;
