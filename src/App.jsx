import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Carts } from "./pages/home/carts/Carts";
import { Placeorder } from "./pages/home/placeorder/Placeorder";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "../src/Component/Navbar/Navbar";
import { useState } from "react";
import Pop_Up from "./Component/displaycards/display-pop-up/Pop_Up";
import { Footer } from "./pages/home/Footer/Footer";
function App() {
  const [state, setstate] = useState(false);
  return (
    <>
      {state ? <Pop_Up setstate={setstate}></Pop_Up> : <></>}
      <Navbar setstate={setstate}></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/carts" element={<Carts></Carts>} />
        <Route path="/order" element={<Placeorder></Placeorder>} />
      </Routes>
    </>
  );
}

export default App;
