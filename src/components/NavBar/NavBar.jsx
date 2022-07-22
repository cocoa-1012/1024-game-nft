import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const NavBar = () => {
  return (
    <div className="navbar">
      <AnchorLink href="#buynow" offset="100">
        <p>Acceuil</p>
      </AnchorLink>
      <AnchorLink href="#watch" offset="100">
        <p>About&nbsp;Us</p>
      </AnchorLink>
      <AnchorLink href="#howtobuy" offset="100">
        <p>Fusionner</p>
      </AnchorLink>
      <AnchorLink href="#faq" offset="100">
        <p>Jackpot/Price&nbsp;Pool</p>
      </AnchorLink>
      <AnchorLink href="#aboutus" offset="100">
        <p>FAQ</p>
      </AnchorLink>
    </div>
  );
};

export default NavBar;
