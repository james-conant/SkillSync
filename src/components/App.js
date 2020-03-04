import React, { useState, useEffect } from "react";
import axios from "axios";
import DatePick from "./booking/DatePick";
import LeaveReviewInBooking from "./booking/LeaveReviewInBooking";
import RequestingBooking from "./booking/RequestingBooking";
import RequestedBooking from "./booking/RequestedBooking";
import IncomingRequest from "./booking/IncomingRequest";

export default function App() {
  // james
  const [startDate, setStartDate] = useState(new Date());
  const [personalNote, setPersonalNote] = useState("");
  const [individualPost, setIndividualPost] = useState();
  //---

  const [bookingReviewPhoto, setBookingReviewPhoto] = useState(
    "https://cdn2.lamag.com/wp-content/uploads/sites/6/2019/06/keanu-reeves-person-of-the-year-karwai-tang-getty.jpg"
  );
  const [requestingBookingPhoto, setRequestingBookingPhoto] = useState(
    "https://cdn2.lamag.com/wp-content/uploads/sites/6/2019/06/keanu-reeves-person-of-the-year-karwai-tang-getty.jpg"
  );
  const [requestedBookingPhoto, setRequestedBookingPhoto] = useState(
    "https://cdn2.lamag.com/wp-content/uploads/sites/6/2019/06/keanu-reeves-person-of-the-year-karwai-tang-getty.jpg"
  );
  const [incomingRequestPhoto, setIncomingRequestPhoto] = useState(
    "https://cdn2.lamag.com/wp-content/uploads/sites/6/2019/06/keanu-reeves-person-of-the-year-karwai-tang-getty.jpg"
  );
  const [bookingReviewText, setBookingReviewText] = useState([
    "need",
    "bookingReviewText"
  ]);
  const [requestingBookingText, setRequestingBookingText] = useState([
    "need",
    "requestingBookingText"
  ]);
  const [requestedBookingText, setRequestedBookingText] = useState([
    "need",
    "requestedBookingText"
  ]);
  const [incomingRequestText, setIncomingRequestText] = useState([
    "need",
    "incomingRequestText"
  ]);

  //---

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
      {/* INDIVIDUAL POSTING W/ AGATA */}
      {/* onClick button needs db to be finished */}
      {/* <DatePick
        personalNote={personalNote}
        setPersonalNote={setPersonalNote}
        startDate={startDate}
        setStartDate={setStartDate}
      /> */}

      {/* MY BOOKINGS */}
      <LeaveReviewInBooking
        bookingReviewText={bookingReviewText}
        setBookingReviewText={setBookingReviewText}
        bookingReviewPhoto={bookingReviewPhoto}
        setBookingReviewPhoto={setBookingReviewPhoto}
      />
      <RequestedBooking
        requestedBookingText={requestedBookingText}
        setRequestedBookingText={setRequestedBookingText}
        requestedBookingPhoto={requestedBookingPhoto}
        setRequestedBookingPhoto={setRequestedBookingPhoto}
      />
      <RequestingBooking
        requestingBookingText={requestingBookingText}
        setRequestingBookingText={setRequestingBookingText}
        requestingBookingPhoto={requestingBookingPhoto}
        setRequestingBookingPhoto={setRequestingBookingPhoto}
      />
      <IncomingRequest
        incomingRequestText={incomingRequestText}
        setIncomingRequestText={setIncomingRequestText}
        incomingRequestPhoto={incomingRequestPhoto}
        setIncomingRequestText={setIncomingRequestPhoto}
      />
    </div>
  );
}
