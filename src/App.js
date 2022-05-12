import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { About, Blog, Error404, Header, Home, Post } from "./components";
import { ContextTheme } from "./contexts/contextTheme";

function App() {
  const { theme } = useContext(ContextTheme);

  return (
    <BrowserRouter>
      <MainContainer>
        <Header />
        <Main theme={theme}>
          <Routes>
            <Route path="*" element={<Error404 />} />
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/post/:id" element={<Post />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Main>
      </MainContainer>
    </BrowserRouter>
  );
}

const MainContainer = styled.div`
  padding: 40px;
  width: 90%;
  max-width: 700px;
`;

const Main = styled.main`
  font-size: ${(props) => (props.theme ? props.theme.font + "px" : "16px")};
  text-align: ${(props) => (props.theme ? props.theme.align : "right")};
  background: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;

export default App;
