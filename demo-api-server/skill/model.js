"use strict";

const database = require("../database");
const SQL = require("pg-template-tag").default;
console.log("usertable");
const createTable = () => {
  console.log("inside createtable");
  database.query(`
  CREATE TABLE IF NOT EXISTS
    skill
    (
      id SERIAL PRIMARY KEY,
      name VARCHAR(30) NOT NULL,
      author SERIAL NOT NULL REFERENCES users(id),
      reciever SERIAL  NOT NULL REFERENCES users(id)
    );
`);
  console.log("skill table created successfully!!!!!");
};

module.exports = createTable;
