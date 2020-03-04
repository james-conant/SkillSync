import React, { useState, useEffect } from "react";
import axios from "axios";

export default function RequestingBooking(props) {
  return (
    <div>
      <img
        style={{ height: "30%", width: "30%" }}
        src={props.requestingBookingPhoto}
      ></img>
      <option value="some-text"></option>
      {props.requestingBookingText.map(text => {
        return <option value={text}>{text}</option>;
      })}
      <button>X</button>
    </div>
  );
}
