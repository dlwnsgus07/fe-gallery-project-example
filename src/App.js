import { Routes, Route } from "react-router-dom";
import { Reset } from "styled-reset";
import { createGlobalStyle } from "styled-components";

import HomePage from "./pages/HomePage";
import ImagePage from "./pages/ImagePage";
import ArticleCreateForm from "./pages/ArticleCreateForm";

const GlobalStyle = createGlobalStyle`
  * {
    outline: none;
    box-sizing: border-box;
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
        <Route path="/create" element={<ArticleCreateForm />} />
      </Routes>
    </>
  );
};

export default App;
