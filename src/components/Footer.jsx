import styled from "styled-components";

const StyledFooter = styled.footer`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  padding: 2rem;

  button {
    padding: 1rem 2rem;
    background: #6a8fd6;
    color: #fff;
    border-radius: 0.5rem;

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
      <button>Add</button>
      <button>Share</button>
      <button>Delete</button>
    </StyledFooter>
  );
};

export default Footer;
