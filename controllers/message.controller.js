const messages = require("../data/messages.json");
const cleanData = require("../functions/cleanData");

const getMessages = (req, res) => {
  const cleanedMessages = cleanData(messages);
  res.json(cleanedMessages);
};

module.exports = {
  getMessages,
};
