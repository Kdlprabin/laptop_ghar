import FTimg1 from "../image/feature-img-1.png";
import FTimg2 from "../image/feature-img-2.png";
import FTimg3 from "../image/feature-img-3.png";
import Card from "../Components/Cards/InfoCard.js";

export default function InformationSection() {
  return (
    //Information Section
    <section className="features" id="features">
      <h1 className="heading">
        {" "}
        our <span>features</span>{" "}
      </h1>

      <div className="box-container">
        <Card image={FTimg1} message="Customize Your PC" />
        <Card image={FTimg2} message="Free Delivery" />
        <Card image={FTimg3} message="Easy Payments" />
      </div>
    </section>
  );
}
