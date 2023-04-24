var express = require('express');
var router = express.Router();
const user_controller = require("../Controllers/userController");
const passport = require("passport");

const app = express();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { user: req.user });
});

/* GET sign up page */
router.get("/sign-up", (req, res) => res.render("sign-up-form"));

/* POST sign up page */
router.post("/sign-up", user_controller.user_sign_up_post);

router.get("/membership", (req, res) => res.render("join-the-club", { user: req.user }));

router.post("/membership", user_controller.membership_form_post);

router.post(
  '/log-in',
  passport.authenticate('local', {
    // session: false,
    failureRedirect: '/',
    successRedirect: '/membership',
  })
);

router.get("/log-out", (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});




module.exports = router;
