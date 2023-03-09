const getHomePage = (req, res) => {
  //process data
  //call models

  res.send("Hello World 1!");
};
const getA = (req, res) => {
  res.send("Hello World 2!");
};
const getB = (req, res) => {
  // res.send("<h1>Hello World!</h1>");
  res.render("sample.ejs");
};

module.exports = {
  getHomePage,
  getA,
  getB,
};
