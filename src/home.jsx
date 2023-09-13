import React from "react";
import "./styles.css";
import Header from "./header";
import Body from "./body";
import Footer from "./footer";

export default function Home() {
  return (
    <div className="homepage">
      <Header />
      <div id="root2">
        <Body />
      </div>
      <Footer />
    </div>
  );
}
