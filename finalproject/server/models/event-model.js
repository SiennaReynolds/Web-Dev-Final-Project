const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Event = new Schema(
    {
        PantherID: { type: String, required: true },
        FirstName: { type: String, required: true },
        LastName: { type: String, required: true },
        Department: { type: String, required: false },
        Level: { type: String, required: false },
        Campus: { type: String, required: false },
        Degree: { type: String, required: false },
        Email: { type: String, required: false },
        College: { type: String, required: false },
        Year: { type: String, required: false },
        checkin: { type: Boolean, required: false },
    },
    { timestamps: true },
)

module.exports = mongoose.model('events', Event)
