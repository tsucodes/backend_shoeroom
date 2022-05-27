const mongoose = require('../db/connection');

const PostSchema = new mongoose.Schema({
    name: String, 
    brand: String,
    size: String,
    condition: String,
    image: String,
 
});


const ShoePost = mongoose.model('Post', PostSchema);
module.exports = ShoePost;
