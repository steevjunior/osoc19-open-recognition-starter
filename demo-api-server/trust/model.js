"use strict";

const database = require("../database");
const SQL = require("pg-template-tag").default;
console.log("usertable");
const createTable = () => {
  database.query(`
  CREATE TABLE IF NOT EXISTS
    trust
    (
      id SERIAL PRIMARY KEY,
      userrequesting SERIAL NOT NULL REFERENCES users(id),
      userrecieving SERIAL NOT NULL REFERENCES users(id),
      daterequesting DATE  NOT NULL,
      dateapproving DATE NOT NULL,
      active BOOLEAN NOT NULL,
      datecancelling DATE NOT NULL,
      user1approval BOOLEAN NOT NULL,
      user2approval BOOLEAN NOT NULL
    );
`);
  console.log("trust table created successfully!!!!!");
};

module.exports = createTable;
