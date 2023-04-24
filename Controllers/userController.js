const User = require("../models/user");
const async = require("async");
const { body, validationResult, ValidationChain } = require("express-validator");
const bcrypt = require("bcryptjs");


// Handle user sign up on POST
exports.user_sign_up_post = [
    // Validate and sanitize fields.
    body("firstname", "Fist name must be specified")
        .trim()
        .isLength({min: 1})
        .escape(),
    body("lastname", "Last name must be specified")
        .trim()
        .isLength({min: 1})
        .escape(),
    body("username", "Username must be specified")
        .trim()
        .isLength({min: 1})
        .escape(),
    body("password", "Password must be specified")
        .trim()
        .isLength({min: 1})
        .escape(),
    body("confirmpassword", "Password must be specified")
        .trim()
        .isLength({min: 1})
        .escape()
        .custom(async (confirmPassword, {req}) => {
            const password = req.body.password
       
            // If password and confirm password not same
            // don't allow to sign up and throw error
            console.log(password + " confirm " + confirmPassword);
            if(password !== confirmPassword){
              throw new Error('Passwords must be same')
            }  
          }),

    // Process request after validation and sanitazation
    async (req, res, next) => {
        // Extract the validation errors from a request.
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            // There are errors. Render form again with sanitized values and error messages.
              res.render("sign-up-form", {
                title: "Sign up",
                errors: errors,
              });
            return;
          }

        try {
            const hashedPwd = await bcrypt.hash(req.body.password, 10);
            // Create a user with escaped and trimmed data.
            const user = await User.create({
              Firstname: req.body.firstname,
              Lastname: req.body.lastname,
              Username: req.body.username,
              Password: hashedPwd,
            });
            const result = await user.save();
            res.redirect("/");
          } catch(err) {
            return next(err);
          };
    }
    ]

exports.membership_form_post = [
  // Validate and sanitize fields.
  body("secretcode", "Code must be specified")
    .trim()
    .isLength({min: 1})
    .escape()
    .custom(async (value, {req}) => {
      const secretcode = "test123";
 
      // If value and secretcode not same
      // don't update and throw error
      if(value !== secretcode){
        throw new Error('Not correct!')
      }  
    }),
  
  // Proces request after validation and sanitization.
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // There are errors. Render form again with sanitized values and error messages.
        res.render("join-the-club", {
          title: "Membership",
          errors: errors,
        });
      return;
    }
    console.log("succes");
  }
]