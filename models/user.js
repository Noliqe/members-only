const mongoose  = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema ({
    Firstname: { type: String, required: true, maxLength: 20 },
    Lastname: { type: String, required: true, maxLength: 20 },
    Username: { type: String, required: true, maxLength: 20 },
    Password: { type: String, required: true },
    Membership: {type: Boolean, default: false }
});

// Virtual for user URL
UserSchema.virtual("url").get(function () {
    return `/${this._id}`;
})

// Export model
module.exports  = mongoose.model("User", UserSchema);