import styled from "styled-components";

export const Button = styled.button`
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  color: #fff;
  border: 2px solid #db4876;
  padding: 0.45rem 0.8rem;
  display: inline-block;
  transition: all 0.5s linear;
  cursor: pointer;
  font-size: 0.8rem;
  background: ${(props) => props.backgroundColor};
  border-radius: 0.5rem;
  display: inline-block;

  &:hover {
    background: #c0033c;
  }
  & a {
    color: #fff;
  }
`;
