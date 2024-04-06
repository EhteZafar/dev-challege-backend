const users = require("../data/users.json");

const getUsers = (req, res) => {
  res.json(users);
};

module.exports = {
  getUsers,
};
