export default function Header() {
    return (
        <header className="header">

            <a href="/" className="logo"> <i className="fas fa-desktop"></i> PC STORE
            </a>

            <nav className="navbar">
                <a href="index.html">home</a>
                <a href="products.html">products</a>
                <a href="blog.html">blogs</a>
                <a href="research.html">research</a>
                <a href="contact.html">Contact</a>
            </nav>

            <div className="icons">
                <div className="fas fa-bars" id="menu-btn"></div>
                <div className="fas fa-search" id="search-btn"></div>
                <div className="fas fa-shopping-cart" id="cart-btn"></div>
                <div className="fas fa-user" id="login-btn"></div>
            </div>

            <form action="" className="search-form">
                <input type="search" id="search-box" placeholder="search
                    here..." />
                <label for="search-box" className="fas fa-search"></label>
            </form>

            <div className="shopping-cart">
                <div className="box">
                    <i className="fas fa-trash"></i>
                    <img src="image/cart-img-1.png" alt="" />
                    <div className="content">
                        <h3>PC 1</h3>
                        <span className="price">$4.99/-</span>
                        <span className="quantity">qty : 1</span>
                    </div>
                </div>
                <div className="box">
                    <i className="fas fa-trash"></i>
                    <img src="image/cart-img-2.png" alt="" />
                    <div className="content">
                        <h3>PC 2</h3>
                        <span className="price">$4.99/-</span>
                        <span className="quantity">qty : 1</span>
                    </div>
                </div>
                <div className="box">
                    <i className="fas fa-trash"></i>
                    <img src="image/cart-img-3.png" alt="" />
                    <div className="content">
                        <h3>PC 3</h3>
                        <span className="price">$4.99/-</span>
                        <span className="quantity">qty : 1</span>
                    </div>
                </div>
                <div className="total"> total : $19.69/- </div>
                <a href="#" className="btn">checkout</a>
            </div>

            <form action="" className="login-form">
                <h3>login now</h3>
                <input type="email" placeholder="your email" className="box" />
                <input type="password" placeholder="your password" className="box" />
                <p>forget your password <a href="#">click here</a></p>
                <p>don't have an account <a href="#">create now</a></p>
                <input type="submit" value="login now" className="btn" />
            </form>

        </header>

    );
}