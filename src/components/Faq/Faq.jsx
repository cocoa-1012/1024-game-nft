import React from "react";
import dropImg from "../../assets/img/triangle.png";
import "./index.css";

const faqData = [
  {
    id: 0,
    title:
      "Est-ce une collection officiel du Jeu 2048 ? Ou un partenariat avec le jeu ? ",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 1,
    title: "Pourquoi il y a 1032 NFTs dans la collection ?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    title: "D’où viennent les 27ETH du Jackpot ?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    title:
      "Pourquoi la DAO de Tallyternity reçois 13,3% de l’argent générer par la collection ? ",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];
const Faq = () => {
  return (
    <div className="faq" id="faq">
      <div className="faq_container">
        <p className="faq_title">FAQ</p>
        <div className="faq_group">
          {faqData.map((item, index) => (
            <div className="faq_subTitle">
              <img src={dropImg} alt="" width={20} height={25} />
              <p className="faq_subTitle_text">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
