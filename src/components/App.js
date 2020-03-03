import React, { useState, useEffect } from "react";
import axios from "axios";
import useForm from './CustomHooks';

import FrontPage from "./FrontPage.jsx";
import UserProfile from "./UserProfile.jsx";
import LoginPage from "./LoginPage.jsx";

export default function App() {
  
  const submit = () => {
    // alert(`${inputs.worldName} has been saved`)
    var info = inputs;
    axios.post('http://localhost:4321/submit', info)
    .then((res) => {
      // console.log(res);
      done();
    })
    .catch((err) => {
      console.error('--> jeepers: ', err);
    })
  }
  //initializes the custom form hook
  const {inputs, handleInputChange, handleSubmit} = useForm(submit);


  return (
      <div>
        <LoginPage 
          inputs={inputs}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}/>
      </div>
    );
}
