import styled from "styled-components";

const StyledContacts = styled.div`
  padding: 3rem 2rem;

  .contact {
    display: flex;
    align-items: center;
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

    div {
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
  }
`;

const Contacts = () => {
  return (
    <StyledContacts>
      <div className="contact">
        <picture>
          <img src={"/src/assets/user_icon.png"} alt="User Image" />
        </picture>

        <div>
          <h2>John Doe</h2>
          <p>+234 90 567 9228</p>
        </div>
      </div>
    </StyledContacts>
  );
};

export default Contacts;
