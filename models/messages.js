const mongoose  = require("mongoose");

const Schema = mongoose.Schema;

const MessageSchema = new Schema ({
    title: { type: String, required: true, maxLength: 30 },
    timestamp: { type: Date  },
    text: { type: String, required: true, maxLength: 200 },
    User: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

// Export model
module.exports  = mongoose.model("Message", MessageSchema);