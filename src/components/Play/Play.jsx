import React from "react";
import arrowImg from "../../assets/img/arrow-down1.png";
import boardImg from "../../assets/img/board.png";
import "./index.css";

const Play = ({ setIsbuyinput }) => {
  return (
    <div className="play" id="howtobuy">
      <div>
        <p className="play_detail">
          Fusionnez les chiffres jusqu’à obtenir le NFT 1024 et remportez le
          Jackpot
        </p>
      </div>
      <div>
        <div>
          <p>JOUER</p>
          <img src={arrowImg} alt="" />
        </div>
        <div>
          <img src={boardImg} alt="" />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Play;
