import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";

export default function DatePick(props) {
  return (
    <div>
      <form>
        <div> Give a Brief Description of What Your Looking For:</div>
        <DatePicker
          selected={props.startDate}
          onChange={date => props.setStartDate(date)}
        />

        <label>
          <input
            type="text"
            name="name"
            onChange={e => props.setPersonalNote(e.target.value)}
          />
        </label>
        {/* onClick button needs db to be finished */}
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
