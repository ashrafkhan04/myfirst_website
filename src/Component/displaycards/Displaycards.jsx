import "./Displaycards.css";
import Displayitems from "../Navbar/Displaymenu/displayitems/Displayitems";
import { useContext } from "react";
import { ContetStore } from "../../contactstore/Contextstore";
export const Displaycards = ({ category }) => {
  const { Items_types } = useContext(ContetStore);
  return (
    <div className="displaycards" id="displaycards">
      <div className="displaycards_content">
        <h1 className="displaycards_heading">our food list</h1>
        <p className="display_paragraph">
          I'm a paragraph. Click here to add your own text and edit me
        </p>
      </div>
      <div className="display_food_items">
        {Items_types.map((item, index) => {
          if (category === "all" || category === item.category) {
            return (
              <div className="display_items_list">
                <Displayitems
                  key={index}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  price={item.price}
                  description={item.description}
                  category={item.category}
                ></Displayitems>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};
