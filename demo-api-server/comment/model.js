"use strict";

const database = require("../database");
const SQL = require("pg-template-tag").default;
console.log("usertable");
const createTable = () => {
  database.query(`
  CREATE TABLE IF NOT EXISTS
    comment
    (
      id SERIAL PRIMARY KEY,
      author SERIAL NOT NULL REFERENCES users(id),
      reciever SERIAL  NOT NULL REFERENCES users(id),
      creationdate DATE  NOT NULL,
      message TEXT NOT NULL
    );
`);
  console.log("comment table table created successfully!!!!!");
};

module.exports = createTable;
