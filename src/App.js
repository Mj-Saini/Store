import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import About from "./components/About";
import Range from "./components/Range";
import Delivary from "./components/Delivary";
import Services from "./components/Services";
import Thoughts from "./components/Thoughts";
import Popularty from "./components/Popularty";
import Mail from "./components/Mail";
import Order from "./components/Order";
import Potent from "./components/Potent";
import Classification from "./components/Classification";
import Items from "./components/Items";
import Blogs from "./components/Blogs";
import Pandas from "./components/Pandas";
import Timing from "./components/Timing";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { Route, Routes } from "react-router";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/Contact " element={<Contact />} />
      </Routes>
      <Header />
      <About />
      <Range />
      <Delivary />
      <Services />
      <Thoughts />
      <Popularty />
      <Order />
      <Mail />
      <Potent />
      <Classification />
      <Items />
      <Blogs />
      <Pandas />
      <Timing />
      <Footer />
    </>
  );
}

export default App;
