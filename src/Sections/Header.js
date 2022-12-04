import Navbar from "../Components/Navbar";
import { useState } from "react";

import PDimg2 from "../image/product-2.png";
import PDimg3 from "../image/product-3.png";
import PDimg4 from "../image/product-4.png";

//need to import images for cart section//
export default function Header() {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isLoginActive, setIsLoginActive] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isCartActive, setIsCartActive] = useState(false);
  return (
    <>
      <header className="header">
        <a href="/" className="logo">
          {" "}
          <i className="fas fa-laptop"></i> LAPTOP GHAR
        </a>
        <Navbar />
        <div className="icons">
          <div
            className="fas fa-bars"
            id="menu-btn"
            onClick={() => {
              isMenuActive ? setIsMenuActive(false) : setIsMenuActive(true);
            }}
          ></div>
          <div
            className="fas fa-search"
            id="search-btn"
            onClick={() => {
              isSearchActive
                ? setIsSearchActive(false)
                : setIsSearchActive(true);
              setIsCartActive(false);
              setIsLoginActive(false);
            }}
          ></div>
          <div
            className="fas fa-shopping-cart"
            id="cart-btn"
            onClick={() => {
              isCartActive ? setIsCartActive(false) : setIsCartActive(true);
              setIsLoginActive(false);
              setIsSearchActive(false);
            }}
          ></div>
          <div
            className="fas fa-user"
            id="login-btn"
            onClick={() => {
              isLoginActive ? setIsLoginActive(false) : setIsLoginActive(true);
              setIsCartActive(false);
              setIsSearchActive(false);
            }}
          ></div>
        </div>
        {isSearchActive && (
          <form action="" className="search-form">
            <input
              type="search"
              id="search-box"
              placeholder="search
                    here..."
            />
            <label for="search-box" className="fas fa-search" />
          </form>
        )}
        {isCartActive && (
          <div className="shopping-cart">
            <div className="box">
              <i className="fas fa-trash"></i>
              <img src={PDimg4} alt="" />
              <div className="content">
                <h3>PC 1</h3>
                <span className="price">$4.99/-</span>
                <span className="quantity">qty : 1</span>
              </div>
            </div>
            <div className="box">
              <i className="fas fa-trash"></i>
              <img src={PDimg2} alt="" />
              <div className="content">
                <h3>PC 2</h3>
                <span className="price">$4.99/-</span>
                <span className="quantity">qty : 1</span>
              </div>
            </div>
            <div className="box">
              <i className="fas fa-trash"></i>
              <img src={PDimg3} alt="" />
              <div className="content">
                <h3>PC 3</h3>
                <span className="price">$4.99/-</span>
                <span className="quantity">qty : 1</span>
              </div>
            </div>
            <div className="total"> total : $19.69/- </div>
            <a href="/" className="btn">
              checkout
            </a>
          </div>
        )}
        {isLoginActive && (
          <form action="" className="login-form">
            <h3>login now</h3>
            <input type="email" placeholder="your email" className="box" />
            <input
              type="password"
              placeholder="your password"
              className="box"
            />
            <p>
              forget your password <a href="/">click here</a>
            </p>
            <p>
              don't have an account <a href="/">create now</a>
            </p>
            <input type="submit" value="login now" className="btn" />
          </form>
        )}
        {isMenuActive && (
          <div className="nav-toggle">
            <a href="/">Home</a>
            <a href="Products">Products</a>
            <a href="Contact">Contact</a>
          </div>
        )}
      </header>
    </>
  );
}
