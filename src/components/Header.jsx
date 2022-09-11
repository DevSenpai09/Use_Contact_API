import styled from "styled-components";
import { BsSearch } from "react-icons/bs";

const StyledHeader = styled.header`
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 5px 18px -15px rgb(0 0 0 / 70%);

  h1 {
    color: var(--gray);
    font-weight: 400;
  }

  div {
    color: var(--gray);
    font-size: 2rem;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <h1>Contacts</h1>
      <div>
        <BsSearch />
      </div>
    </StyledHeader>
  );
};

export default Header;
