import React from "react";
import "./index.css";

const Token = () => {
  return (
    <div className="token" id="watch">
      <div className="token_container">
        <p className="token_title">Tokenomics</p>
        <div className="text_group">
          <div className="card_container">
            <p className="token_sub_title">
              FUSION 0, 042 <span>ETH</span>
            </p>
            <ul>
              <li>66% → jackpot</li>
              <li>14% → Trésorerie Tallyternity</li>
              <li>10% → Marketing</li>
              <li>10% → Team</li>
            </ul>
          </div>
          <div className="card_container">
            <p className="token_sub_title">Royalties 10%</p>
            <ul>
              <li>66,6% → jackpot</li>
              <li>13,3% → Trésorerie Tallyternity</li>
              <li>10% → Marketing</li>
              <li>10% → Team</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Token;
