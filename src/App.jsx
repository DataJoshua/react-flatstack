import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/templates/Home";
import Index from "./components/templates";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/homework" element={<Index />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
