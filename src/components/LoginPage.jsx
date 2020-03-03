import React, { useState, useEffect } from "react";

export default function LoginPage() {

  return (

    <div className="loginContainer">
      <div className="clearBackground">
      <input className="inputText" placeholder="username"></input>
      <br /> <input type="password" className="inputText" placeholder="password"></input>
      <br /><button>LOG IN</button>
      <br /><button>SIGN UP</button>
      </div>
    </div>

  );

}