const pool = require("../sql/connection");
const mysql = require("mysql");

// Customers CRUD
const list = (req, res) => {
  pool.query("Select * FROM customers", (err, rows) => {
    if (err) {
      console.log({ message: "Error occurred: " + err });
      return res.status(500).send("An unexpected error occurred");
    }
    res.json(rows);
  });
};

const show = (req, res) => {
  pool.query(
    `Select * FROM customers WHERE id = ${req.params.id}`,
    (err, row) => {
      if (err) {
        console.log({ message: "Error occurred: " + err });
        return res.status(500).send("An unexpected error occurred");
      }
      res.json(row);
    }
  );
};

const showTradesByCustomer = (req, res) => {
  pool.query(
    // `Select * FROM trades JOIN customers WHERE trades.user_id = ${req.params.id} AND customers.id = ${req.params.id}`,
    `SELECT customers.id, customers.first_name, trades.title FROM trades JOIN customers WHERE trades.user_id = ${req.params.id} AND customers.id = ${req.params.id}`,
    (err, row) => {
      if (err) {
        console.log({ message: "Error occurred: " + err });
        return res.status(500).send("An unexpected error occurred");
      }
      res.json(row);
    }
  );
};

const create = (req, res) => {
  const { first_name, last_name, email } = req.body;
  pool.query(
    `INSERT INTO customers (first_name, last_name, email) VALUES ("${first_name}","${last_name}","${email}")`,
    (err, row) => {
      if (err) {
        console.log({ message: "Error occurred: " + err });
        return res.status(500).send("An unexpected error occurred");
      }
      res.json(row);
    }
  );
};

const update = (req, res) => {
  let sql = "UPDATE ?? SET ? WHERE ?? = ?";
  sql = mysql.format(sql, ["customers", req.body, "id", req.params.id]);
  pool.query(sql, (err, row) => {
    if (err) {
      console.log({ message: "Error occurred: " + err });
      return res.status(500).send("An unexpected error occurred");
    }
    res.json(row);
  });
};

const remove = (req, res) => {
  pool.query(
    `DELETE FROM customers WHERE id = ${req.params.id}`,
    (err, row) => {
      if (err) {
        console.log({ message: "Error occurred: " + err });
        return res.status(500).send("An unexpected error occurred");
      }
      res.json(row);
    }
  );
};

module.exports = {
  list,
  show,
  showTradesByCustomer,
  create,
  update,
  remove,
};

////////////////////////////////////////////////////
/*
  const { customers } = require("../data/data");
  const { v4 } = require("uuid");
  
  const list = (req, res) => {
    res.json(customers);
  };
  
  const show = (req, res) => {
    const user = customers.find((user) => user.id === req.params.id);
    res.json(user);
  };
  
  const create = (req, res) => {
    const { body } = req;
    
    let newUser = {
      id: v4(),
      ...body,
    };
    customers.push(newUser);
    res.json(newUser);
  };
  
  const update = (req, res) => {
    const { body } = req;
    
    const user = customers.find((user) => user.id === req.params.id);
    const userIndex = customers.findIndex((el) => el.id === req.params.id);
    
    let updatedUser = {
      ...user,
      ...body,
    };
    
    customers.splice(userIndex, 1, updatedUser);
    res.json(customers);
  };
  
  const update = (req, res) => {
    const { body } = req;
    
    const user = customers.find((user) => user.id === req.params.id);
    const userIndex = customers.findIndex((el) => el.id === req.params.id);
    
    let updatedUser = {
      ...user,
      ...body,
    };
    
    customers.splice(userIndex, 1, updatedUser);
    res.json(customers);
  };
  
  const remove = (req, res) => {
    const user = customers.find((user) => user.id === req.params.id);
    const userIndex = customers.findIndex((el) => el.id === req.params.id);
    const { body } = req;
    
    customers.splice(userIndex, 1);
    res.json(customers);
  };

  // const update = (req, res) => {
  //   // const { body } = req.body
  //   pool.query(
  //     `UPDATE customers SET ${req.body} WHERE id ${req.params.id}`,
  //     (err, row) => {
  //       if (err) {
  //         console.log({ message: "Error occurred: " + err });
  //         return res.status(500).send("An unexpected error occurred");
  //       }
  //       res.json(row);
  //     }
  //   );
  // };
  */
