const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Title is required"],
            trim: true
        },

        content: {
            type: String,
            required: [true, "Content is required"]
        }
    },
    {
        timestamps: true
    }
);

noteSchema.index({
    title: "text",
    content: "text"
});

module.exports = mongoose.model(
    "Note",
    noteSchema
);