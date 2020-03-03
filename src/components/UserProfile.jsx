import React, { useState, useEffect } from "react";

export default function UserProfile() {
  
  return (
    <div className="profileContainer">
      <div className="profileUserInfo">
        <div className="profileRow1">
          <span className="userPhotoProfile">
            <img src="imgs/userPhotos/hannah.jpeg" width="140"/>
          <br />
            <span className="Rating">
              STAR RATING COMPONENT
            </span>
          </span>
          <span className="userBio">
            <span className="userFullName">USER FULL NAME</span>
            <br /> LOCATION COMPONENT
            <br /> BIO
          </span>
        </div>
      </div>
      <div className="profileContact">
        <button>REQUEST</button>
        <button>MESSAGE</button>
      </div>
      <div className="skillsTeachContainer, clearBackground">
        <div className="profileSectionTitle">
          SKILLS I TEACH
        </div>
        <div className="skills">
          SKILL COMPONENT SKILL COMPONENT SKILL COMPONENT SKILL COMPONENT SKILL COMPONENT 
        </div>
      </div>
      <div className="skillsLearnContainer, clearBackground">
        <div className="profileSectionTitle">
          I WANT TO LEARN
        </div>
        <div className="skills">
          SKILL COMPONENT SKILL COMPONENT SKILL COMPONENT SKILL COMPONENT SKILL COMPONENT 
        </div>
      </div>
      <div className="reviewsContainer">
        <div className="profileSectionTitle">
          REVIEWS
        </div>
        <div className="reviewsContainer">
          REVIEWS LIST COMPONENT
        </div>
        <button>REVIEW</button>
      </div>
    </div>
  );
}