const express = require("express");
const router = express.Router();
const {
  getHomepage,
  getCreatePage,
  postCreateUser,
  getUpdatePage,
  postUpdateUser,
} = require("../controllers/homeController");

// router.method("/route", handler)

router.get("/", getHomepage);

router.get("/create", getCreatePage);

router.get("/update/:id", getUpdatePage);

router.post("/create-user", postCreateUser);

router.post("/update-user", postUpdateUser);

module.exports = router;
