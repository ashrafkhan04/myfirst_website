import "./Home.css";
import Hero from "../../Component/Navbar/Hero/Hero";
import Displaymenu from "../../Component/Navbar/Displaymenu/Displaymenu";
import { useState } from "react";
import { Displaycards } from "../../Component/displaycards/Displaycards";

export const Home = () => {
  const [category, setcategory] = useState("all");
  return (
    <div className=" container_hero">
      <Hero></Hero>
      <Displaymenu category={category} setcategory={setcategory}></Displaymenu>
      <Displaycards category={category}></Displaycards>
    </div>
  );
};
