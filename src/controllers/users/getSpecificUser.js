const getSpecificUser = (req, res) => {
  console.log(req.params);
  res.send('spec users');
};

module.exports = getSpecificUser;
