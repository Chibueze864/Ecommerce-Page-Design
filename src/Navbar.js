import React, { useState, useContext } from "react";
import logo from "./logo.svg";
import cart from "./icon-cart.svg";
import avatar from "./image-avatar.png";
import menu from "./icon-menu.svg";
import close from "./icon-close.svg";
import remove from "./icon-delete.svg";
import productOne from "./image-product-1.jpg";
import "./Navbar.css";

function Navbar({ items }) {
  const [mobile, setMobile] = useState(false);
  const [info, setInfo] = useState(false);
  const [cartShow, setCartShow] = useState(false);
  const [counter, setCounter] = useState(0);
  const toggleMobile = () => {
    setMobile(!mobile);
  };
  let number = items;
  const checkOut = () => {
    alert("Thank you for shopping with us 🤗🤗☺☺");
  };
  let isTrue = true;
  const display = () => {
    setInfo(!info);
    if (number > 0) {
      setCartShow(true);
    }
  };

  const deleteCart = () => {
    let isTrue = false;
    if (number > 0) {
      setCartShow(isTrue);
    }
  };

  return (
    <div className="navBar">
      <div className="responsive">
        <img src={menu} onClick={() => toggleMobile()} />
      </div>
      <img src={logo} id="logo" />
      <div className="nav">
        <img src={close} id="close" onClick={() => toggleMobile()} />
        <h1 id="first">Collections</h1>
        <h1>Men</h1>
        <h1>Women</h1>
        <h1>About</h1>
        <h1>Contact</h1>
      </div>
      <div className="checkout">
        <div>
          <img src={cart} id="cart" onClick={() => display()} />
          <div className="cart-info">
            <h3 id="cart-name">Cart {items} </h3>

            {/* {number < 1 && cartShow === true? (
              <h2 id="empty">Cart is empty</h2>
            ) : (
              <div className="display-item">
                <span id="cart-display">
                  <img src={productOne} id="product" />
                  <h2 id="product-description">
                    Autumn Limited Edition...
                    <p>
                      $125.00 * {items} &nbsp; total: ${items * 125.0}
                    </p>
                  </h2>
                  <img src={remove} id="dustbin" onClick={()=> setCartShow(false)} />
                </span>

                <button id="checkout-button" onClick={() => checkOut()}>
                  Checkout
                </button>
              </div>
            )} */}
            <h2 id="empty">Cart is empty</h2>
            <div className="display-item">
              <span id="cart-display">
                <img src={productOne} id="product" />
                <h2 id="product-description">
                  Autumn Limited Edition...
                  <p>
                    $125.00 * {items} &nbsp; total: ${items * 125.0}
                  </p>
                </h2>
                <img src={remove} id="dustbin" onClick={() => deleteCart()} />
              </span>

              <button id="checkout-button" onClick={() => checkOut()}>
                Checkout
              </button>
            </div>
          </div>
        </div>
        <span className="round">
          <img src={avatar} id="avatar" />
        </span>
      </div>

      <style jsx>{`
        .cart-info {
          display: ${info ? "block" : "none"};
          position: absolute;
          width: 33%;
          height: max-content;
          background-color: whitesmoke;
          right: 5%;
          border-radius: 10px;
        }
        @media (max-width: 880px) {
          .navBar .nav {
            display: ${mobile ? "inline-block" : "none"};
            background-color: white;
            color: black;
            flex-wrap: wrap;
            position: absolute;
            top: 0;
            left: 0;
            height: 1000px;
            width: 100%;
            line-height: 3rem;
            font-weight: 700;
            z-index: 5;
            margin-left: 0;
          }
          .nav h1 {
            display: flex;
            font-weight: 700;
            margin-left: auto;
            // margin-right: auto;
          }
          .nav h1:hover {
            border-bottom: none;
            color: hsl(26, 100%, 55%);
          }
          .nav #first {
            margin-top: 3rem;
          }
          #close {
            display: ${mobile ? "inline-block" : "none"};
            margin-left: 5px;
          }
          .cart-info {
            overflow: auto;
            left: 25%;
            top: 20%;
            // bottom: 0;
            right: 0;
            height: fit-content;
            width: 50%;
          }
        }
        #empty {
          display: ${cartShow ? "none" : "visible"};
        }
        .display-item {
          display: ${cartShow ? "visible" : "none"};
        }
      `}</style>
    </div>
  );
}

export default Navbar;
