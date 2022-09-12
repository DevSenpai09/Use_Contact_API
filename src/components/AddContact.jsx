import styled from "styled-components";

const StyledAddContacts = styled.div`
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;

  h2 {
    font-family: sans-serif;
    margin-bottom: 5rem;
  }

  picture {
    display: block;
    width: 15rem;
    height: 15rem;
    border: 3px solid var(--gray);
    border-radius: 1rem;
    padding: 1rem;
    align-self: center;

    img {
      width: 100%;
    }
  }

  form {
    display: grid;
    gap: 2rem;
    margin-top: 5rem;

    input {
      width: 100%;
      border: 2px solid var(--gray);
      border-radius: 0.5rem;
      padding: 1rem;
      color: var(--gray);
    }
  }
`;

const AddContact = () => {
  return (
    <StyledAddContacts>
      <h2>Add Contacts</h2>

      <picture>
        <img src="" alt="" />
        <img src={"/src/assets/image_icon.svg"} alt="" />
      </picture>

      <form>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="tel" placeholder="Phone Number" />
        <input type="email" placeholder="Email" />
      </form>
    </StyledAddContacts>
  );
};

export default AddContact;
