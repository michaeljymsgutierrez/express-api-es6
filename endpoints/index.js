// Endpoint Root

const API = (req, res, next) => {
  res.json({ message: "Hello World" });
};

export default API;
