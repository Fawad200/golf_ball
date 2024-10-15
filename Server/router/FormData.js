const express = require("express");
const FormData = require('../controllers/FormData')

const router = express.Router();

router.post("/add", FormData.create)

router.get('/get', FormData.getAll)

module.exports = router