import PDimg1 from "../image/product-1.png";
import PDimg2 from "../image/product-2.png";
import PDimg3 from "../image/product-3.png";
import PDimg4 from "../image/product-4.png";
import PDimg5 from "../image/product-5.png";
import PDimg6 from "../image/product-6.png";
import PDimg7 from "../image/product-7.png";
import PDimg8 from "../image/product-8.png";
import Card from "../Components/Cards/ProductCard";


export default function ProductSection() {
  return (
    <section className="products" id="products">
      <h1 className="heading">
        {" "}
        our <span>products</span>{" "}
      </h1>
      <div className="swiper product-slider">
        <div className="swiper-wrapper">
          <Card image={PDimg1} id="Card1" name="PC 1" price="$4.99/- - 10.99/-" />
          <Card image={PDimg2} id="Card2" name="PC 2" price="$4.99/- - 10.99/-" />
          <Card image={PDimg3} id="Card3" name="PC 3" price="$4.99/- - 10.99/." />
          <Card image={PDimg4} id="Card4" name="PC 4" price="$4.99/- - 10.99/-" />
        </div>
      </div>
      <div className="swiper product-slider">
        <div className="swiper-wrapper">
          <Card image={PDimg5} id="Card1" name="PC 5" price="$4.99/- - 10.99/-" />
          <Card image={PDimg6} id="Card2" name="PC 6" price="$4.99/- - 10.99/-" />
          <Card image={PDimg7} id="Card3" name="PC 7" price="$4.99/- - 10.99/." />
          <Card image={PDimg8} id="Card4" name="PC 8" price="$4.99/- - 10.99/-" />
        </div>
      </div>
    </section>
  );
}
