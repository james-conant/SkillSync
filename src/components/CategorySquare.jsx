import React, { useState, useEffect } from "react";
export default function CategorySquare({name, large}) {
if (large) {
  return(
    <span className="categorySquare">
      <img src={name} width="182px"/>
    </span>
  )
} else {
  return (
    <span className="categorySquare">
      <img src={name} width="138px"/>
    </span>
  );
}

}