var express = require('express');
var router = express.Router();
const user_controller = require("../Controllers/userController");
const message_controller = require("../Controllers/messageController");
const passport = require("passport");

const app = express();

/* GET home page. */
router.get("/", message_controller.messages_list);

/* GET sign up page */
router.get("/sign-up", (req, res) => res.render("sign-up-form"));

/* POST sign up page */
router.post("/sign-up", user_controller.user_sign_up_post);

router.get("/membership", (req, res) => res.render("join-the-club", { user: req.user }));

router.post("/membership", user_controller.membership_form_post);

router.get('/messages', function(req, res, next) {
  res.render('message-form', { user: req.user });
});
router.post("/messages", message_controller.create_message_post);

router.post(
  '/log-in',
  passport.authenticate('local', {
    // session: false,
    failureRedirect: '/',
    successRedirect: '/',
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
