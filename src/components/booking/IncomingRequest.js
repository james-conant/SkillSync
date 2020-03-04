import React, { useState, useEffect } from "react";
import axios from "axios";

export default function IncomingRequest(props) {
  return (
    <div>
      <img
        style={{ height: "30%", width: "30%" }}
        src={props.incomingRequestPhoto}
      ></img>
      <option value="some-text"></option>
      {props.incomingRequestText.map(text => {
        return <option value={text}>{text}</option>;
      })}
      <button>X</button>
    </div>
  );
}
