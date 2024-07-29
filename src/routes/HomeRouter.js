const express = require("express");
const control = require("../controllers/home.controller");

const router = express.Router();

router.get("/fake-api/product", control.mult);
router.get("/fake-api/product/:id", control.single);
router.post("/store", control.Store);
router.post("/res", control.register);
router.post("/login", control.login);

module.exports = router;
