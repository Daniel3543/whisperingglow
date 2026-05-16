// Css_ին Միացնել;
import "./Products.css";
import React from 'react';
import img_1 from '../images/products/productsOne.png';
import img_2 from '../images/products/productsTwo.png';
import img_3 from '../images/products/productsThree.png';
import img_4 from '../images/products/productsFour.png';
import img_5 from '../images/products/productsFiwe.png';

export default function Products() {
  return (
    <div className="all">
      <div className="products">
        <div className="details">
          <img src={img_1} alt="" />
          <p>Lorem Ipsum</p>
          <p>$35</p>
        </div>
        <div className="details">
          <img src={img_2} alt="" />
          <p>Lorem Ipsum</p>
          <p>$35</p>
        </div>
        <div className="details">
          <img src={img_3} alt="" />
          <p>Lorem Ipsum</p>
          <p>$35</p>
        </div>
        <div className="details">
          <img src={img_4} alt="" />
          <p>Lorem Ipsum</p>
          <p>$35</p>
        </div>
        <div className="details">
          <img src={img_5} alt="" />
          <p>Lorem Ipsum</p>
          <p>$35</p>
        </div>
      </div>
      <div className="line">
        <div className="main"></div>
      </div>
    </div>
  )
}
