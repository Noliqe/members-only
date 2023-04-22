var express = require('express');
var router = express.Router();
const user_controller = require("../Controllers/userController");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET sign up page */
router.get("/sign-up", (req, res) => res.render("sign-up-form"));

/* POST sign up page */
router.post("/sign-up", user_controller.user_sign_up_post);

module.exports = router;
