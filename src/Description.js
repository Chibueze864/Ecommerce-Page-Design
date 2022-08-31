import React, { useState, useContext } from "react";
import one from "./image-product-1-thumbnail.jpg";
import two from "./image-product-2-thumbnail.jpg";
import three from "./image-product-3-thumbnail.jpg";
import four from "./image-product-4-thumbnail.jpg";
import productOne from "./image-product-1.jpg";
import productTwo from "./image-product-2.jpg";
import productThree from "./image-product-3.jpg";
import productFour from "./image-product-4.jpg";
import icon from "./icon-cart.svg";
import plus from "./icon-plus.svg";
import minus from "./icon-minus.svg";
import "./Description.css";
import next from "./icon-next.svg";
import previous from "./icon-previous.svg";
function Description({ setItems }) {
  let index = 0;
  let products = [one, two, three, four];
  let showCase = [productOne, productTwo, productThree, productFour];
  const [picture, setPicture] = useState(showCase[index]);
  const [amount, setAmount] = useState(0);
  const [slide, setSlide] = useState(false);
  const increment = () => {
    setAmount(amount + 1);
  };
  const decrement = () => {
    if (amount < 1) {
      return;
    }
    setAmount(amount - 1);
  };

  const slideShow = () => {
    setSlide(!slide);
  };

  const changePic = (value) => {
    let choice = products.indexOf(value);
    setPicture(showCase[choice]);
  };
  const nextPick = () => {
    let pick = showCase.indexOf(picture);
    if (pick > showCase.length - 2) {
      return;
    }
    setPicture(showCase[pick + 1]);
  };
  const previousPick = () => {
    let pick = showCase.indexOf(picture);
    if (pick < 1) {
      return;
    }
    setPicture(showCase[pick - 1]);
  };
  const addToCart = () => {
    setItems(amount);
    setAmount(0);
  };

  return (
    <div className="description">
      <div className="info">
        <div className="picture">
          <img src={picture} onClick={() => slideShow()} />
          <img
            src={previous}
            className="slide"
            id="previous"
            onClick={() => previousPick()}
          />
          <img
            src={next}
            className="slide"
            id="next"
            onClick={() => nextPick()}
          />
        </div>
        <br></br>
        <span className="text">
          <h4 id="company">Sneaker Company</h4>
          <br></br>
          <h1 id="product">Fall Limited Edition Sneakers</h1>
          <br></br>
          <h3 id="quality">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </h3>
          <br></br>
          <span id="price">
            <h1>
              $125.00 &nbsp;{" "}
              <span id="discount">
                <small>50%</small>
              </span>
            </h1>
            <br></br>
            <h3 id="discount-price">
              <strike>$250.00</strike>
            </h3>
          </span>
          <div className="cart">
            <div id="counter">
              <img src={minus} className="amount" onClick={() => decrement()} />
              <span>{amount}</span>{" "}
              <img src={plus} className="amount" onClick={() => increment()} />
            </div>
            <button id="cart-icon" onClick={() => addToCart()}>
              <img src={icon} /> Add to cart
            </button>
          </div>
        </span>
      </div>
      <div className="showreel">
        {products.map((image, index) => (
          <img key={index} onClick={() => changePic(image)} src={image} />
        ))}
        <style jsx>{`
          @media only screen and (min-width: 769px) {
            .picture {
              // position: ${slide ? "absolute" : "none"};
              cursor: pointer;
            }
            * {
              // background-color: ${slide
                ? "rgba(255,255,255,0.3)"
                : "rgba(255,255,255,1)"};
            }
          }
        `}</style>
      </div>
    </div>
  );
}

export default Description;
