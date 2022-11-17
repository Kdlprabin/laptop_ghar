import PaymentImg from "../image/payment.png";

export default function Footer() {
    return (
        <section className="footer">

            <div className="box-container">

                <div className="box">
                    <h3> LAPTOP GHAR <i className="fas fa-laptop"></i> </h3>
                    <p>You demand We fulfill</p>
                    <div className="share">
                        <a href="/" className="fab fa-facebook-f"> </a>
                        <a href="/" className="fab fa-twitter"> </a>
                        <a href="/" className="fab fa-instagram"> </a>
                        <a href="/" className="fab fa-linkedin"> </a>
                    </div>
                </div>

                <div className="box">
                    <h3>contact info</h3>
                    <a href="/" className="links"> <i className="fas fa-phone"></i>
                        +123-456-7890 </a>
                    <a href="/" className="links"> <i className="fas fa-phone"></i>
                        +111-222-3333 </a>
                    <a href="/" className="links"> <i className="fas fa-envelope"></i>
                        example@gmail.com </a>
                    <a href="/" className="links"> <i className="fas fa-map-marker-alt"></i>
                        kathmandu, Nepal - 44066 </a>
                </div>

                <div className="box">
                    <h3>quick links</h3>
                    <a href="/" className="links"> <i className="fas fa-arrow-right"></i>home </a>
                    <a href="/" className="links"> <i className="fas fa-arrow-right"></i>products </a>
                    <a href="/" className="links"> <i className="fas fa-arrow-right"></i>Contact </a>
                </div>

                <div className="box">
                    <h3>newsletter</h3>
                    <p>subscribe for latest updates</p>
                    <input type="email" placeholder="your email" className="email" />
                    <input type="submit" value="subscribe" className="btn" />
                    <img src={PaymentImg} className="payment-img" alt="" />
                </div>

            </div>

            <div className="credit"> created by <span> Mr. Susan Chaudary </span> | all
                rights reserved </div>

        </section>

    );
}