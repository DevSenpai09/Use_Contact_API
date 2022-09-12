import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

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
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  a {
    color: inherit;
    font-size: 2.5rem;
    display: flex;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <h1>Contacts</h1>
      <div>
        <BsSearch />
        <Link to={"/"}>
          <IoIosArrowBack />
        </Link>
      </div>
    </StyledHeader>
  );
};

export default Header;
