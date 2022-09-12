import styled from "styled-components";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Header from "./components/Header";

const StyledApp = styled.div`
  background-color: #fff;
  width: min(100vw - 5rem, 40rem);
  height: min(100vh - 3rem, 70rem);
  border-radius: 1rem;
  display: grid;
  grid-template-rows: auto 1fr auto;
`;

const App = () => {
  return (
    <StyledApp>
      <Header />
      <Contacts />
      <Footer />
    </StyledApp>
  );
};

export default App;
