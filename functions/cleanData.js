const cleanData = (data) => {
  return data.map(item => {
    if (item.message) {
      item.message = item.message.replace(/<script>/gs, ' ');
    }
    return item;
  });
};

module.exports = cleanData;