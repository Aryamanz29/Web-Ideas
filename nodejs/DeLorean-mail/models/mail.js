import mongoose from "mongoose";

const mailSchema = mongoose.Schema({
    subject: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    deliverDate: {
        type: String,
        required: true
    }
})

const mail = mongoose.model('mail', mailSchema);

export default mail;