import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="discriptionbox-nav-box">Description</div>
        <div className="discriptionbox-nav-box fade">Reviews(122)</div>
      </div>
      <div className="discriptionbox-description">
        <p>
          An e-commercewebsite is an online platform that facilitates the buying
          and selling of product or services over the internet. it serves as a
          virtual marketplace whare busnisses and individuals can showcase their
          product, intract with customrs,and conduct transactions,without the
          need for a physical presence ,E-commerece website have goined immense
          popularity due to their. convenience,accessibility, and the global
          reach they offer.
        </p>
        <p>
          E-commerece,and website typically display products or services along
          with detailed descriptions,images,price,and any available
          variations(e.g,sizes,colors).Each product usually has its own
          dedicated page with relevant informations.{" "}
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
