import React, { useContext } from "react";
import "./Placeorder.css";
import { ContetStore } from "../../../contactstore/Contextstore";

export const Placeorder = () => {
  const { TotalAmountButton } = useContext(ContetStore);
  return (
    <div className="placeorder">
      <div className="placeorder_container">
        <div className="placeorder_right">
          <h1>plcaeorder</h1>
          <div className="placeorder_input">
            <input type="text" placeholder="name" />
            <input type="text" placeholder="fullname" />
            <input type="email" placeholder=" Enter Email here" />
          </div>
          <div className="placeorder_input">
            <input type="text" placeholder="city" />
            <input type="text" placeholder="zip code" />
          </div>
          <textarea
            name="message"
            rows="2"
            cols="40"
            placeholder="Enter your address"
          />
        </div>

        <div className="Placeorder_left">
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
                <button type="button" class="btn btn-secondary">
                  submit order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
