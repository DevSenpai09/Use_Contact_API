import styled from "styled-components";
import { AiOutlineShareAlt } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";

const StyledContacts = styled.div`
  padding: 3rem 2rem;

  .contact {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;

    picture {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 5rem;
      height: 5rem;
      border: 2px solid var(--gray);
      border-radius: 1rem;
      padding: 0.5rem;
      img {
        width: 100%;
      }
    }

    .details {
      font-family: sans-serif;

      h2 {
        font-size: 1.7rem;
      }

      p {
        font-size: 1.3rem;
        color: var(--gray);
        margin-top: 0.5rem;
      }
    }

    .icons {
      font-size: 3rem;
      color: #777;
      display: flex;
      gap: 2rem;
    }
  }
`;

const Contacts = () => {
  return (
    <StyledContacts>
      <div className="contact">
        <picture>
          <img src={"/src/assets/user_icon.png"} alt="User Image" />
        </picture>

        <div className="details">
          <h2>John Doe</h2>
          <p>+234 90 567 9228</p>
        </div>

        <div className="icons">
          <AiOutlineShareAlt />
          <RiDeleteBin6Line style={{ color: "#d55" }} />
        </div>
      </div>
    </StyledContacts>
  );
};

export default Contacts;
