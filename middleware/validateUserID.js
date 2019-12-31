const db = require('../users/userDb')
const validateUserID = async (req,res,next) => {
    const id = req.params.id
    await db.getById(id) ? console.log("ID is valid") : (res.statusCode = 400,next(`{ message: "invalid user id" }`),console.error("ID is invalid")); 
};
module.exports = validateUserID;
