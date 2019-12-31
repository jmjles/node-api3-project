const express = require("express");

const router = express.Router();
const user = require("../users/userDb");
const post = require("../posts/postDb");
//middleware
const valID = require("../middleware/validateUserID");
const valUser = require("../middleware/validateUser");
const valPost = require("../middleware/validatePost");
router.post("/", async (req, res, next) => {
  // do your magic!

  try {
    valUser(req, res, next);
    res.status(201).json(await user.insert(req.body.user));
  } catch {
    res.statusCode = 500;
    next(`{message:"There was a problem creating the user"}`);
  }
});

router.post("/:id/posts", async (req, res, next) => {
  // do your magic!
  try {
    valID(req, res, next);
    valPost(req, res, next);
    const data = {
      ...req.body.post,
      user_id:req.params.id
    }
    res.status(201).json(await post.insert({...data}));
  } catch {
    res.statusCode = 500;
    next(`{message:"There was a problem creating the post"}`);
  }
});

router.get("/", async (req, res, next) => {
  // do your magic!
  try {
    res.status(200).json(await user.get());
  } catch {
    res.statusCode = 500;
    next(`{message:"There was a problem retreaving data!"}`);
  }
});

router.get("/:id", async (req, res, next) => {
  // do your magic!
  try {
    valID(req, res, next);
    res.status(200).json(await user.getById(req.params.id));
  } catch {
    res.statusCode = 500;
    next(`{message:"There was a problem retreaving data!"}`);
  }
});

router.get("/:id/posts", async (req, res, next) => {
  // do your magic!
  try {
    valID(req, res, next);
    res.status(200).json(await user.getUserPosts(req.params.id));
  } catch {
    res.statusCode = 500;
    next(`{message:"There was a problem retreaving data!"}`);
  }
});

router.delete("/:id", async (req, res, next) => {
  // do your magic!
  try {
    valID(req, res, next);
    await user.remove(req.params.id);
    res.status(201).json(await user.get());
  } catch {
    res.statusCode = 500;
    next(`{message: "User Could not be deleted"}`);
  }
});

router.put("/:id", async (req, res, next) => {
  // do your magic!
    try {
      valID(req, res, next);
      valUser(req, res, next);
      const data = {
        ...req.body.user,
      };
      res.status(201).json(await user.update(req.params.id,{ ...data }));
    } catch {
      res.statusCode = 500;
      next(`{message:"There was a problem updating the post"}`);
    }
});

module.exports = router;
