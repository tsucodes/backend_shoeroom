const mongoose = require('../db/connection');

const PostSchema = new mongoose.Schema({
    name: String, 
    brand: String,
    size: String,
    condition: String,
    // convert images into string using redux64
    image: String,
 
});


const ShoePost = mongoose.model('Post', PostSchema);
module.exports = ShoePost;
