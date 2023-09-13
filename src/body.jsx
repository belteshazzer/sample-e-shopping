import React from "react";
import "./styles.css";
import Welcome from "./welcome";
import Products from "./products";

export default function body() {
  return (
    <div className="homepage">
      <Welcome />
      <Products />
    </div>
  );
}
