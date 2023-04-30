const mongoose  = require("mongoose");

const Schema = mongoose.Schema;

const MessageSchema = new Schema ({
    title: { type: String, required: true, maxLength: 30 },
    timestamp: { type: String  },
    text: { type: String, required: true, maxLength: 200 },
    Username: { type: String, required: true },
});

// Export model
module.exports  = mongoose.model("Message", MessageSchema);