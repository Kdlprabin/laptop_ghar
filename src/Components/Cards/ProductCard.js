export default function Card(props) {
    return(
        <div className="swiper-slide box">
                        <img src={props.image} alt="" />
                        <h3>{props.name}</h3>
                        <div className="price"> {props.price} </div>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                        <a href="/" className="btn">add to cart</a>
                    </div>
    );
}