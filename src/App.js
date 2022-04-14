import { Routes, Route } from "react-router-dom";
import { Reset } from "styled-reset";
import { createGlobalStyle } from "styled-components";

import HomePage from "./pages/HomePage";
import ImagePage from "./pages/ImagePage";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #fafafa;
  }
`;

const App = () => {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<ImagePage />} />
      </Routes>
    </>
  );
};

export default App;
