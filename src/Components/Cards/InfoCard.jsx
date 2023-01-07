export default function Card(props) {
    return (
        <div className="box">
            <img src={props.image} alt="" />
            <h3>{props.message}</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt, earum!</p>
            <a href="/" className="btn">read more</a>
        </div>
    );
}