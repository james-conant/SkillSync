import React, { useState, useEffect } from "react";
import CategorySquare from "./CategorySquare.jsx";

export default function FrontPage() {

  return (
    <div>
      <div className="searchBarContainer">
        SEARCHBAR
      </div>
      <div className="logoContainer">
        <img src="../../imgs/logos/SkillSync.png" height="100vw"/>
      </div>
      <div className="FrontPageContainer">
        <div className="frontPageRow1">
          <CategorySquare name={"../../imgs/categories/Music.png"} />
          <CategorySquare name={"../../imgs/categories/Language.png"} />
          <br /><CategorySquare name={"../../imgs/categories/Sports.png"} />
          <CategorySquare name={"../../imgs/categories/Outdoors.png"} />
          FEATURED MENTOR COMPONENT
        </div>
        <div className="homeQuoteContainer">
          RANDOM QUOTE COMPONENT
        </div>
        <div className="categoryIconList">
        <CategorySquare name={"../../imgs/categories/Crafts.png"} />
        <CategorySquare name={"../../imgs/categories/VisualArt.png"} />
        <CategorySquare name={"../../imgs/categories/MathScience.png"} />
        <br /><CategorySquare name={"../../imgs/categories/Food.png"} />
        <CategorySquare name={"../../imgs/categories/SocialSciences.png"} />
        <CategorySquare name={"../../imgs/categories/Miscellaneous.png"} />
        </div>
      </div>
    </div>
  );

}