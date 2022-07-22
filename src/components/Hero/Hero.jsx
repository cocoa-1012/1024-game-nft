import React, { useState } from "react";
import downArrow from "../../assets/img/arrow-down.png";
import upArrow from "../../assets/img/arrow-up.png";
import backImg from "../../assets/img/jackpot.png";
import { Button } from "../Button/Button";
import "./index.css";

const Hero = () => {
  const [amountNumber, setAmountNumber] = useState(0);
  return (
    <div className="hero_container" id="buynow">
      <div className="hero_main">
        <p className="p-1">
          1024 GAME <br />
          NFT Collection
        </p>
        <p className="p-2">
          Fusionnez vos NFTs jusqu’au 1024 afin de toucher le Jackpot FREE MINT.
          You are still early !
        </p>
        <div className="button_container">
          <div className="amount_container">
            <img
              src={upArrow}
              alt=""
              onClick={() =>
                amountNumber < 10
                  ? setAmountNumber(amountNumber + 1)
                  : console.log("big than 10")
              }
            />
            <p className="amount_number">{amountNumber}</p>
            <img
              src={downArrow}
              alt=""
              onClick={() =>
                amountNumber > 0
                  ? setAmountNumber(amountNumber - 1)
                  : console.log("No minus")
              }
            />
          </div>
          <Button
            submit={() => console.log("Mint")}
            title="Mint"
            className="mint"
          />
        </div>
        <div className="jackpot">
          <img src={backImg} alt="" />
          <p className="eth_value">
            27.048 <span>ETH</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
