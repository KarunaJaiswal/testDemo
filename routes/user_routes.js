const router = require('express').Router()
const { addUser } = require("../controller/user_controller")

router.post('/signup', addUser);

module.exports = router;