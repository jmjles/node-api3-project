const validatePost = (req, res, next) => {
  const post = req.body.post;
  post.text ? console.log("Post is Valid") : (res.statusCode = 400,
    next(`{ message: "missing post data" }`),console.log("Post is Invalid"));
};
module.exports = validatePost;
