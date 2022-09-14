import styled from "styled-components";
import { AiOutlineShareAlt } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useRef, useEffect, useState } from "react";
import axios from "axios";

const config = {
  method: "get",
  url: "https://jsonplaceholder.typicode.com/users",
  headers: {},
};

const StyledContacts = styled.div`
  padding: 3rem 2rem;
  display: grid;
  gap: 2rem;

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
  const contactsRef = useRef([]);
  const [isContacts, setIsContacts] = useState(false);

  useEffect(() => {
    axios(config)
      .then((response) => {
        contactsRef.current = response.data;
        console.log(contactsRef.current);
        setIsContacts(true);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <StyledContacts>
      {isContacts &&
        contactsRef.current.map((contact) => (
          <div className="contact" key={contact.id}>
            <picture>
              <img src={"/src/assets/user_icon.png"} alt="User Image" />
            </picture>

            <div className="details">
              <h2>{contact.name}</h2>
              <p>{contact.phone}</p>
            </div>

            <div className="icons">
              <AiOutlineShareAlt />
              <RiDeleteBin6Line style={{ color: "#d55" }} />
            </div>
          </div>
        ))}
    </StyledContacts>
  );
};

export default Contacts;
