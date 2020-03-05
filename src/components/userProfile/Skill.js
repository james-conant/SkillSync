import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Skill() {
  const [skill, setSkill] = useState("a sample");
//   getSkills() {
//     axios.get(`/skills/${setSkill}`, event => {
      
//     })
  }
  return (
    <div>
      <div className="userProfile-skill">{skill}</div>
    </div>
  );
}
