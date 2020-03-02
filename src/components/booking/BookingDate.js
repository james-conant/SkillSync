import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";

export default function BookingDate() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
      <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
      <form>
        <div> Give a Brief Description of What Your Looking For:</div>
        <label>
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
