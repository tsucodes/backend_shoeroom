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

// // edit post by id
router.put('/:id', async (req, res, next) => {
	try {
		const ShoepostToUpdate = await PostShoe.findByIdAndUpdate(
			req.params.id,
			req.body,
			{
				new: true,
			}
		);
		if (ShoepostToUpdate) {
			res.redirect(303, '/');
		} else {
			res.sendStatus(404);
		}
	} catch (error) {
		next(error);
	}
});

// this does not work beacue it need auth
// router.patch('/:id', async (req, res) => {
//     const { id } = req.params;
//     const { name, 
//             brand, 
//             size, 
//             condition, 
//             image} = req.body;
//     if (!mongoose.Types.ObjectId.isValid(id)) 
//     return res.status(404).send(`Post not found, id: ${id}`);
//     const updatedPost = { name, brand, size, condition, image, _id: id };
//     await PostShoe.findByIdAndUpdate(id, updatedPost, { new: true });

//     res.json(updatedPost);
// })
// delete 
 router.delete('/:id', async (request, response, next) => {
	try {
	const ShoepostToDelete = await PostShoe.findByIdAndDelete(request.params.id);
	if (ShoepostToDelete) {
		response.redirect(303, '/');
	}else{
		response.sendStatus(404);
	}
}catch(error) {
	next(error);
}
})
// router.delete('/:id', async (req, res) => {
//     const { id } = req.params;
//     if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
//     await PostShoe.findByIdAndDelete(id);
//     res.json({ message: "Sold , Traded, Trashed!" });
// })

module.exports = router;
