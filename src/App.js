import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Contact from "./components/Contact";
import { Route, Routes } from "react-router";
import Main from "./components/Main";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
