import styled from "styled-components";
import { Routes, Route, useLocation } from "react-router-dom";
import { PageLocation } from "./states/Context";
import AddContact from "./components/AddContact";
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

  main {
    overflow-y: auto;
  }
`;

const App = () => {
  const location = useLocation();

  return (
    <StyledApp>
      <PageLocation.Provider value={{ location }}>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Contacts />} />
            <Route path="/add_contact" element={<AddContact />} />
          </Routes>
        </main>
        <Footer />
      </PageLocation.Provider>
    </StyledApp>
  );
};

export default App;
