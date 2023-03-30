const router = require('express').Router()

const userRoute = require('./user_routes');

router.use('/api/v1', userRoute)

module.exports = router;