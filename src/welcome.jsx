import React, { useEffect, useState } from "react";
import myImage from "./imgSrc/shoe1.jpg";
import "./styles.css";

export default function welcome() {
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    setShowWelcome(true); // Trigger animation when component mounts
  }, []);

  return (
    <div className="welcome">
      <div className="welcomeImg">
        <img src={myImage} alt="teda" />
      </div>
      <div className="welcometxt">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          dignissimos odit molestias nisi reprehenderit, porro rerum hic quis!
        </p>
      </div>
    </div>
  );
}
