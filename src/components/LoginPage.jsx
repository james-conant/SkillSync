import React, { useState, useEffect } from "react";

export default function LoginPage({inputs, handleInputChange, handleSubmit}) {

  return (

    <div className="loginContainer">
      <form onSubmit={handleSubmit}>
      
      <div className="clearBackground">
      <input 
        name="username"
        className="inputText" 
        placeholder="username"
        onChange={handleInputChange}
        value={inputs.username}
        ></input>
      <br /> 
      <input 
        name="password"
        type="password" 
        className="inputText" 
        placeholder="password"
        onChange={handleInputChange}
        value={inputs.password}
        ></input>
      <br /><button>LOG IN</button>
      <br /><button>SIGN UP</button>
      </div>

      </form>
    </div>

  );

}