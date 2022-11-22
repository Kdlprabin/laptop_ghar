import Navbar from "../Components/Navbar";
import { useState } from "react";

// let searchForm = document.querySelector(".search-form");

// function search() {
//   searchForm.csslassList.add("active");
//   shoppingCart.classList.remove("active");
//   loginForm.classList.remove("active");
//   navbar.ClassList.remove("active");
// }

// let shoppingCart = document.querySelector(".shopping-cart");

// function cart() {
//   shoppingCart.ClassList.add("active");
//   searchForm.ClassList.remove("active");
//   loginForm.ClassList.remove("active");
//   navbar.ClassList.remove("active");
// }

// let loginForm = document.querySelector(".login-form");

// function login() {
//   loginForm.ClassList.add("active");
//   searchForm.ClassList.remove("active");
//   shoppingCart.ClassList.remove("active");
//   navbar.ClassList.remove("active");
// }

// let navbar = document.querySelector(".navbar");

// function menu() {
//   navbar.ClassList.add("active");
//   searchForm.ClassList.remove("active");
//   shoppingCart.ClassList.remove("active");
//   loginForm.ClassList.remove("active");
// }

// window.onscroll = () => {
//   searchForm.ClassList.remove("active");
//   shoppingCart.ClassList.remove("active");
//   loginForm.ClassList.remove("active");
//   navbar.ClassList.remove("active");
// };

export default function Header() {
  const [isLoginActive, setIsLoginActive] = useState(false);

  return (
    <header className="header">
      <a href="/" className="logo">
        {" "}
        <i className="fas fa-laptop"></i> LAPTOP GHAR
      </a>

      <Navbar />

      <div className="icons">
        <div className="fas fa-bars" id="menu-btn" onClick={""}></div>
        <div className="fas fa-search" id="search-btn" onClick={""}></div>
        <div className="fas fa-shopping-cart" id="cart-btn" onClick={""}></div>
        <div
          className="fas fa-user"
          id="login-btn"
          onClick={() => setIsLoginActive(true)}
        ></div>
      </div>
      {isLoginActive && 
        <form action="" className="search-form">
          <input
            type="search"
            id="search-box"
            placeholder="search
                    here..."
          />
          <label for="search-box" className="fas fa-search" />
        </form>
      }

      <div className="shopping-cart">
        <div className="box">
          <i className="fas fa-trash"></i>
          <img src="" alt="" />
          <div className="content">
            <h3>PC 1</h3>
            <span className="price">$4.99/-</span>
            <span className="quantity">qty : 1</span>
          </div>
        </div>
        <div className="box">
          <i className="fas fa-trash"></i>
          <img src={""} alt="" />
          <div className="content">
            <h3>PC 2</h3>
            <span className="price">$4.99/-</span>
            <span className="quantity">qty : 1</span>
          </div>
        </div>
        <div className="box">
          <i className="fas fa-trash"></i>
          <img src={""} alt="" />
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

      {
        <form action="" className="login-form">
          <h3>login now</h3>
          <input type="email" placeholder="your email" className="box" />
          <input type="password" placeholder="your password" className="box" />
          <p>
            forget your password <a href="/">click here</a>
          </p>
          <p>
            don't have an account <a href="/">create now</a>
          </p>
          <input type="submit" value="login now" className="btn" />
        </form>
      }
    </header>
  );
}
