import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledFooter = styled.footer`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  padding: 2rem;

  a {
    text-decoration: none;
  }

  button {
    padding: 1rem 2rem;
    background: #6a8fd6;
    color: #fff;
    border-radius: 0.5rem;
    display: flex;
    justify-content: center;
    font-size: 1.5rem;
    width: 100%;

    &:nth-child(2) {
      background: #88c963;
    }

    &:nth-child(3) {
      background: #d55;
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Link to={"/add_contact"}>
        <button>Add</button>
      </Link>
      <button>Share</button>
      <button>Delete</button>
    </StyledFooter>
  );
};

export default Footer;
