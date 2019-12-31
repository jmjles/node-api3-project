const validateUser = (req, res, next) => {
  const user = req.body.user;
  console.log(user)
  user ? console.log("User is Valid") : (res.statusCode = 400,
    next(`{ message: "missing user data" }`),
    console.error("Invalid User"));
};
module.exports = validateUser;
