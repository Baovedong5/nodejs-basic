const express = require("express");
const router = express.Router();
const {
  getHomepage,
  getCreatePage,
  postCreateUser,
  getUpdatePage,
  postUpdateUser,
  postDeleteUser,
  postHandleRemoveUser,
} = require("../controllers/homeController");

// router.method("/route", handler)

router.get("/", getHomepage);

router.get("/create", getCreatePage);

router.get("/update/:id", getUpdatePage);

router.post("/create-user", postCreateUser);

router.post("/update-user", postUpdateUser);

router.post("/delete-user/:id", postDeleteUser);
router.post("/delete-user", postHandleRemoveUser);

module.exports = router;
