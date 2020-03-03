import React, { useState, useEffect } from "react";
import NotificationDot from "./NotificationDot.jsx";

export default function NavBar({dot}) {
  //will take in a boolean that determines whether notification dot component will be visible
  return (

    <div className="navDrawer">
      <NotificationDot />
    </div>

  );

}