const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: { type: String, required:  true, maxlength: 15 },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    id: { type: String },

})

const User = mongoose.model('User', userSchema);
module.exports = User;
