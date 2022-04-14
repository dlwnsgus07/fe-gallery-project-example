import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ImagePage from "./pages/ImagePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/:id" element={<ImagePage />} />
    </Routes>
  );
}

export default App;
