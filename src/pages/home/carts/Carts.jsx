import { IoIosClose } from "react-icons/io";
import "./Carts.css";
import { useContext } from "react";
import { ContetStore } from "../../../contactstore/Contextstore";
import { useNavigate } from "react-router-dom";

export const Carts = () => {
  const { CartsItem, Items_types, removeFromCart, TotalAmountButton } =
    useContext(ContetStore);
  const Navigate = useNavigate();
  return (
    <div className="carts">
      <div className="carts_items">
        <div className="carts_items_titles">
          <p>item</p>
          <p>title</p>
          <p>price</p>
          <p>quauntity</p>
          <p>total</p>
          <p>remove</p>
        </div>
        {Items_types.map((item, index) => {
          if (CartsItem[item.id] > 0) {
            return (
              <div className="carts_items_titles">
                <img src={item.image} alt="" className="carts_items_img" />
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>{CartsItem[item.id]}</p>
                <p>{item.price * CartsItem[item.id]}</p>
                <p>
                  <IoIosClose
                    className="icons_delete_value"
                    onClick={() => removeFromCart(item.id)}
                  />
                </p>
              </div>
            );
          }
        })}
      </div>
      <hr />

      <div className="carts_botton">
        <h1>total amount</h1>
        <div className="carts_botton_container">
          <div className="carts_total_amounts">
            <p>subtotal amount</p>
            <p>${TotalAmountButton()}</p>
          </div>
          <div className="carts_total_amounts">
            <p>delivery fees</p>
            <p>${2}</p>
          </div>
          <div className="carts_total_amounts">
            <p>Final Amount</p>
            <p>${TotalAmountButton() + 2}</p>
            <button
              onClick={() => Navigate("/order")}
              type="button"
              class="btn btn-secondary"
            >
              submit order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
