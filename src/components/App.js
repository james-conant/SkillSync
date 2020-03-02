import React, { useState, useEffect } from "react";
import axios from "axios";
import IndividualPosting from "./booking/IndividualPosting";
import MyBookings from "./booking/MyBookings";
import MyBooking from "./booking/MyBooking";

export default function App() {
  useEffect(() => {
    axios
      .get("/test")
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  });
  return (
    <div>
      {/* <IndividualPosting /> */}
      {/* <MyBookings /> */}
      <MyBooking />
    </div>
  );
}
