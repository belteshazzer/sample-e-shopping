import "./styles.css";
import ProductCont from "./productCont";
import Img from "./imgSrc/shoe1.jpg";
export default function product() {
  return (
    <div className="products">
      <h1>explore our products... </h1>
      <div className="productCont">
        <ProductCont
          className="product"
          imgSrc={Img}
          title="shoe1"
          description="lorem epsum dolor sit amet"
          price="50"
        />
        <ProductCont
          className="product"
          imgSrc={Img}
          title="shoe1"
          description="lorem epsum dolor sit amet"
          price="50"
        />
        <ProductCont
          className="product"
          imgSrc={Img}
          title="shoe1"
          description="lorem epsum dolor sit amet"
          price="50"
        />
      </div>
    </div>
  );
}
