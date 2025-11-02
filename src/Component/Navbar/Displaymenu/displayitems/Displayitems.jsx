import { FaPlus } from "react-icons/fa6";
import { useContext } from "react";
import { CiBullhorn } from "react-icons/ci";
// import { FaPlus } from "react-icons/fa";
import "./Displayitems.css";
import { FaMinus } from "react-icons/fa6";
import { IoIosStarHalf } from "react-icons/io";
import { ContetStore } from "../../../../contactstore/Contextstore";
const Displayitems = ({ id, name, image, price, description, category }) => {
  const { addtoCart, CartsItem, removeFromCart } = useContext(ContetStore);
  return (
    <div className="displayitems">
      <div className="display_images">
        <img className="display_img" src={image} alt="" />
        <div className="displayitems_icons_control">
          {!CartsItem[id] ? (
            <FaPlus className="add" onClick={() => addtoCart(id)} />
          ) : (
            <div className="display_items_control">
              <FaMinus className="remove" onClick={() => removeFromCart(id)} />

              <p className="display_number">{CartsItem[id]}</p>
              <FaPlus className="add_action" onClick={() => addtoCart(id)} />
            </div>
          )}
        </div>
      </div>

      <div className="display_items_info">
        <p>{name}</p>
        <div className="star_rating">
          <IoIosStarHalf className="display_star_rating" />
          <span>
            <IoIosStarHalf className="display_star_rating" />
          </span>
          <span>
            <IoIosStarHalf className="display_star_rating" />
          </span>
          <span>
            <IoIosStarHalf className="display_star_rating" />
          </span>
        </div>
      </div>
      <p>{description}</p>
      <p className="display_price">${price}</p>
    </div>
  );
};

export default Displayitems;
