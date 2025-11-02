import { RiCloseLargeLine } from "react-icons/ri";
import "./Pop_Up.css";
import { useState } from "react";
const Pop_Up = ({ setstate }) => {
  const [condition, secondition] = useState("sign in");
  return (
    <div className="Pop_up">
      <form className="pop_up_container">
        <div className="Pop_Up_Content">
          <h1>sign in</h1>

          <RiCloseLargeLine
            onClick={() => setstate(false)}
            className="pop_up_icon_minus"
          />
        </div>
        <div className="Pop_Up_Inputs">
          {condition === "sign in" ? (
            <></>
          ) : (
            <input type="text" placeholder="Enter your yourname" />
          )}

          <input type="text" placeholder="Enter your username" />
          <input type="password" placeholder="Enter your password" />
        </div>
        <div className="pop_up_condition">
          <input type="radio" />
          <p>if you are eligible so click here</p>
        </div>
        {condition === "sign in" ? (
          <p>
            create your account{" "}
            <span
              className="icons_control"
              onClick={() => secondition("sign up")}
            >
              click now
            </span>
          </p>
        ) : (
          <p>
            already you have acoount{" "}
            <span
              className="icons_control"
              onClick={() => secondition("sign in")}
            >
              click now
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Pop_Up;
