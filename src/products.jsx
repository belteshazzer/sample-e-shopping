import "./styles.css";
import ProductCont from "./productCont";
import Img from "./imgSrc/shoe1.jpg";
export default function product() {
  return (
    <div className="products">
      <h1>Newly Introduced... </h1>
      <div className="productCont">
        <ProductCont
          className="product"
          imgSrc={Img}
          title="dress1"
          description="lorem epsum dolor sit amet"
          price="50"
        />
        <ProductCont
          className="product"
          imgSrc={Img}
          title="dress2"
          description="lorem epsum dolor sit amet"
          price="50"
        />
        <ProductCont
          className="product"
          imgSrc={Img}
          title="dress3"
          description="lorem epsum dolor sit amet"
          price="50"
        />
        <ProductCont
          className="product"
          imgSrc={Img}
          title="dress4"
          description="lorem epsum dolor sit amet"
          price="50"
        />
        <i class="fa-solid fa-arrow-right fa-2xl"></i>
      </div>
    </div>
  );
}
