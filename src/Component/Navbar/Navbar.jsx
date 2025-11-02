import { useContext, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { ContetStore } from "../../contactstore/Contextstore";

export const Navbar = ({ setstate }) => {
  const { TotalAmountButton } = useContext(ContetStore);
  const [menu, setmenu] = useState("home");
  return (
    <div className="container_Navbar">
      <div className="logo">ashu_khan</div>
      <div className="middle">
        <ul>
          <Link
            to="/"
            onClick={() => setmenu("home")}
            className={menu === "home" ? "active" : ""}
          >
            home
          </Link>

          <a
            href="#displaymenu"
            onClick={() => setmenu("menu")}
            className={menu === "menu" ? "active" : ""}
          >
            Menu
          </a>
          <a
            href="#displaycards"
            onClick={() => setmenu("item")}
            className={menu === "item" ? "active" : ""}
          >
            Items
          </a>
          <div className="display_icons_shop">
            <Link to="carts">
              {" "}
              <FaCartShopping className="display_cards_shop_icon" />
            </Link>
            <div className={TotalAmountButton() === 0 ? "" : "dot"}></div>
          </div>
        </ul>
      </div>
      <button
        onClick={() => setstate(true)}
        type="button"
        class="btn btn-outline-dark"
      >
        Sign_In
      </button>
    </div>
  );
};
