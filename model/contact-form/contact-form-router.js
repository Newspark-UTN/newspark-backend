const controller = require('./contact-form-controller');
const Router = require('express').Router;
const router = new Router();

router.route('/')
  .post((...args) => controller.sendMail(...args));

module.exports = router;
