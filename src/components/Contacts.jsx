import styled from "styled-components";

const StyledContacts = styled.div``;

const Contacts = () => {
  return (
    <StyledContacts>
      <div className="contact">
        <picture>
          <img src="" alt="" />
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
