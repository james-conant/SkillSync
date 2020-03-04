import React, { useState, useEffect } from "react";
import NotificationDot from "./NotificationDot.jsx";

export default function NavBar({dot, inputs, handleInputChange, handleSubmit}) {
  //will take in a boolean that determines whether notification dot component will be visible

  //should use handleSubmit with custom route for search

  //NAVBARICON IN SEARCH BAR WILL SHOW NAVDRAWER ON PRESS

  return (
    <div className="topBar">
      {/* SEARCH BAR */}
      <div className="searchBarContainer">
        <img className="navClosed" src="imgs/logos/navBarClosed.png" width="35px"/>
        {dot ? <NotificationDot/> : <></>}
        
        <form onSubmit={handleSubmit}>
        <input
          className="inputText" 
          name="searchQuery"
          placeholder="search skills"
          onChange={handleInputChange}
          value={inputs.searchQuery}
          ></input>
        <button className="searchButton"><img src="imgs/logos/searchButton.png" width="44px"/></button>
        </form>

      </div>
      {/* NAVIGATION DRAWER */}
      <div className="navDrawer">

      </div>
    </div>

  );

}