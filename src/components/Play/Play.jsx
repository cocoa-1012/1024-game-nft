import React from "react";
import arrowImg from "../../assets/img/arrow-down1.png";
import boardImg from "../../assets/img/board.png";
import fireImg from "../../assets/img/fire.png";
import { Button } from "../Button/Button";
import "./index.css";

const Play = () => {
  return (
    <div className="play" id="howtobuy">
      <div>
        <p className="play_detail">
          Fusionnez les chiffres jusqu’à obtenir le NFT 1024 et remportez le
          Jackpot
        </p>
        <p className="play_detail_add">( 27.048ETH + 2/3 des royalties )</p>
      </div>
      <div className="board_container">
        <div className="play_button">
          <div className="play_button_border">
            <p className="play_text">JOUER</p>
            <img src={arrowImg} alt="" />
          </div>
        </div>
        <div>
          <img src={boardImg} alt="" />
        </div>
      </div>
      <div className="play_right_container">
        <div className="button_group">
          <Button
            submit={() => console.log("connect wallet")}
            title="CONNECT WALLET"
            className="connect_wallet"
          />
          <br />
          <Button
            submit={() => console.log("connect wallet")}
            title="Fusion pour 0.042 ETH"
            className="merge"
          />
        </div>
        <div className="fire_img">
          <img src={fireImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Play;
