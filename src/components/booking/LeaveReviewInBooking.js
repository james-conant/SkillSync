import React, { useState, useEffect } from "react";
import axios from "axios";

export default function LeaveReviewInBooking(props) {
  return (
    <div>
      <img
        style={{ height: "30%", width: "30%" }}
        src={props.bookingReviewPhoto}
      ></img>
      <option value="some-text"></option>
      {props.bookingReviewText.map(text => {
        return <option value={text}>{text}</option>;
      })}
      <button>X</button>
    </div>
  );
}
