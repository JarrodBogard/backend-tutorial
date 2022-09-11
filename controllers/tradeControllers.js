const pool = require("../sql/connection");
const mysql = require("mysql");

// Trades CRUD
const list = (req, res) => {
  pool.query(`SELECT * FROM trades`, (err, rows) => {
    if (err) {
      console.log({ message: "Error occurred: " + err });
      return res.status(500).send("An error has occurred");
    }
    res.json(rows);
  });
};

const show = (req, res) => {
  pool.query(`SELECT * FROM trades WHERE id = ${req.params.id}`, (err, row) => {
    if (err) {
      console.log({ message: "Error occurred: " + err });
      return res.status(500).send("An error has occurred");
    }
    res.json(row);
  });
};

const create = (req, res) => {
  const { title, retail_price, user_id } = req.body;
  pool.query(
    `INSERT INTO trades (title, retail_price, user_id) VALUE ("${title}","${retail_price}","${user_id}")`,
    (err, row) => {
      if (err) {
        console.log({ message: "Error occurred: " + err });
        return res.status(500).send("An error has occurred");
      }
      res.json(row);
    }
  );
};

const update = (req, res) => {
  let sql = `UPDATE ?? SET ? WHERE ?? = ?`;
  sql = mysql.format(sql, ["trades", req.body, "id", req.params.id]);
  pool.query(sql, (err, row) => {
    if (err) {
      console.log({ message: "Error occurred: " + err });
      return res.status(500).send("An error has occurred");
    }
    res.json(row);
  });
};

const remove = (req, res) => {
  pool.query(`DELETE FROM trades WHERE id = ${req.params.id}`, (err, row) => {
    if (err) {
      console.log({ message: "Error occurred: " + err });
      return res.status(500).send("An error has occurred");
    }
    res.json(row);
  });
};

module.exports = {
  list,
  show,
  create,
  update,
  remove,
};
