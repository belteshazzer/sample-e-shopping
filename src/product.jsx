import React from 'react'
import ProductCont from "./productCont";
import Img from "./imgSrc/shoe1.jpg";

export default function product() {
    return (
        <div>
            <div className='product-catagories'>
                <ul>
                    <li>
                        <a href="">for all</a>
                    </li>
                    <li><a href="">gonderian</a></li>
                    <li><a href="">sidama</a></li>
                    <li><a href="">harari</a></li>
                    <li><a href="">somalia</a></li>
                    <li><a href="">guragie</a></li>
                    <li><a href="">gumuz</a></li>
                    <li><a href="">tigray</a></li>
                </ul>
            </div>

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
            </div>
        </div>
    )
}
