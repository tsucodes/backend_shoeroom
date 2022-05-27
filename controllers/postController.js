const express = require('express');
const router = express.Router();
const PostShoe = require('../models/Post.js');


// get all post
// This route works
router.get('/', (req, res, next) => {
	PostShoe.find({})
		.then((posts) => res.json(posts))
		.catch(next);
});
// this route does not work
// router.get('/', async ( res) => { 
//   try {
//      const shoeCard = await PostShoe.find();         
//  res.status(200).json(shoeCard);
// } catch (error) {
//  res.status(404).json({ message: error.message });
// }
// });

// // get all post by ID
router.get('/:id',async (req, res) => { 
    const { id } = req.params;
    try {
        const post = await PostShoe.findById(id);
        
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

// create new post
// this route works
// router.post('/', async (req, res, next) => {
// 	try {
// 		const newpost = await PostShoe.create(req.body);
//         //Use this line if we don't want to redirect
// 		res.redirect(303, '/');
// 	} catch (err) {
// 		next(err);
// 	}
// });
// this route works
router.post('/', async (req, res) => {
  const { name, 
          brand, 
          size, 
          condition, 
          image } = req.body;
  const newShoePost = new PostShoe({ name, brand, size, condition, image})
  try {
      await newShoePost.save();
      res.status(201).json(newShoePost );
  } catch (error) {
      res.status(409).json({ message: error.message });
  }
});

// // edit post
// this does not work beacue it need auth
router.patch('/:id', async (req, res) => {
    const { id } = req.params;
    const { name, 
            brand, 
            size, 
            condition, 
            image} = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) 
    return res.status(404).send(`Post not found, id: ${id}`);
    const updatedPost = { name, brand, size, condition, image, _id: id };
    await PostShoe.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
})


 // delete post
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    await PostShoe.findByIdAndDelete(id);
    res.json({ message: "Sold , Traded, Trashed!" });
})

module.exports = router;




// const express = require('express');
// const router = express.Router();
// const Post = require("../models/Post");
// const auth = require("../middleware/middleware");

// // get post
// router.get("/", (req, res) => {
//   Post.find()
//     .then((posts) => res.json(posts))
//     .catch((err) => res.status(400).json("Error: " + err));
// });

// // get by id
// router.get("/:id", (req, res) => {
//   Post.findById(req.params.id)
//     .then((posts) => res.json(posts))
//     .catch((err) => res.json("Error: +err"));
// });

// // convert images into string using redux64

// router.post("/", auth, (req, res) => {
//   const newPost = new Post({
//     name: req.body.name,
//     brand: req.body.brand,
//     size: req.body.size,
//     condition: req.body.condition,
//     image: req.body.image,
//   });

//   newPost
//     .save()
//     .then((posts) => res.json("New Post Added"))
//     .catch((err) => res.status(400).json("Error: " + err));
// });

// router.delete("/:id", auth, (req, res) => {
//   Post.findByIdAndDelete(req.params.id)
//     .then(() => res.json("Post deleted"))
//     .catch((err) => res.status(400).json("Error: " + err));
// });

// router.put("/:id", auth, (req, res) => {
//   Post.findByIdAndUpdate(req.params.id, { $set: req.body })
//     .then(() => res.json("Post updated"))
//     .catch((err) => res.status(400).json("Error: " + err));
// });

// module.exports = router;