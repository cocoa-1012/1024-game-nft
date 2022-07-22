import React from "react";
import numGroupImg from "../../assets/img/number-group.png";
import "./index.css";

export const WhatIs = () => {
  return (
    <div className="what_is" id="watch">
      <div className="text_container">
        <p className="sub_title">What is 1024</p>
        <p className="sub_text">
          1024 est une collection de 1032 NFTs, qui constituent un jeu
          stratégique avec un seul gagnant celui qui arrivera à créer le NFT
          1024.
        </p>
      </div>
      <div>
        <img src={numGroupImg} alt="" />
      </div>
    </div>
  );
};

export default WhatIs;
