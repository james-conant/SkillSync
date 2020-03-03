DROP DATABASE IF EXISTS skillsync;

CREATE DATABASE skillsync;

USE skillsync;

CREATE TABLE user (
  user_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  password CHAR(64) NOT NULL, --data type for sha256 algorithm
  username VARCHAR(50) NOT NULL,
  location CHAR(5) NOT NULL, -- zip codes for US, outside of US will have zip code 99999
  bio TEXT,
  user_photo TEXT --url of photo if user uploads one
);

CREATE TABLE skill (
  skill_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  categories VARCHAR(200),
  skill VARCHAR(200) NOT NULL
);

CREATE TABLE user_skill (
  user_id INT NOT NULL,
  skill_id INT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES user (user_id),
  FOREIGN KEY (skill_id) REFERENCES skill (skill_id)
);

CREATE TABLE posting (
  posting_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  role ENUM('mentor', 'mentee'),
  skill_id INT NOT NULL, --to get skill name
  user_id INT NOT NULL, --to get poster's location
  creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (skill_id) REFERENCES activity (skill_id),
  FOREIGN KEY (user_id) REFERENCES user (user_id)
)

CREATE TABLE booking (
  booking_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  skill_id INT NOT NULL, --to get skill name
  requester_id INT NOT NULL,
  requestee_id INT NOT NULL,
  FOREIGN KEY (skill_id) REFERENCES skill (skill_id),
  FOREIGN KEY (requester_id) REFERENCES user (user_id),
  FOREIGN KEY (requestee_id) REFERENCES user (user_id)
); 

CREATE TABLE review (
  review_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  rating TINYINT NOT NULL,
  skill_id INT NOT NULL, --to get skill name
  description TEXT,
  reviewer_id INT NOT NULL,
  user_id INT NOT NULL,
  review_date DATETIME DEFAULT CURRENT_TIMESTAMP, --to auto populate the creation date
  FOREIGN KEY (skill_id) REFERENCES skill (skill_id),
  FOREIGN KEY (user_id) REFERENCES user (user_id),
  FOREIGN KEY (reviewer_id) REFERENCES user (user_id)
);

CREATE TABLE message (
  message_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  message_text TEXT,
  message_date DATETIME DEFAULT CURRENT_TIMESTAMP, --to auto populate the creation date
  visited BOOLEAN,
  from_username INT NOT NULL,
  FOREIGN KEY (from_username) REFERENCES user (user_id),
  to_username INT NOT NULL,
  FOREIGN KEY (to_username) REFERENCES user (user_id)
);