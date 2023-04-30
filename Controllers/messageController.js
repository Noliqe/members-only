const Message = require("../models/messages");
const async = require("async");
const { body, validationResult } = require("express-validator");

// Display list of all Messages
exports.messages_list = async function (req, res, next) {
    try {
      const messages = await Message.find();
      if (!messages) {
        console.log("no messages");
      };
        // Succesfull
        console.log(messages)
        res.render("index", {
            title: "Messages",
            user: req.user,
            messages,
        });
    } catch(err) {
        return next(err);
    }
};

// Create Message POST
exports.create_message_post = [
  // Validate and sanitize fields.
  body("title", "title must be specified")
      .trim()
      .isLength({min: 1})
      .escape(),
  body("text", "text must be specified")
      .trim()
      .isLength({min: 1})
      .escape(),

  // Process request after validation and sanitazation
  async (req, res, next) => {
      // Extract the validation errors from a request.
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
          // There are errors. Render form again with sanitized values and error messages.
            res.render("message-form", {
              title: "Create a message",
              errors: errors,
            });
          return;
        }

      try {
          let today = new Date();
          let dd = String(today.getDate()).padStart(2, '0');
          let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
          let yyyy = today.getFullYear();

          today = mm + '/' + dd + '/' + yyyy;
          // Create a message with escaped and trimmed data.
          const message = await Message.create({
            title: req.body.title,
            timestamp: today,
            text: req.body.text,
            Username: req.user.Username,
          });
          const result = await message.save();
          res.redirect("/");
        } catch(err) {
          return next(err);
        };
  }
  ]