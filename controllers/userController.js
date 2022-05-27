// const express = require('express');
// const router = express.Router();
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const User = ("../models/User.js");

// const secret = 'test';

// export const signin = async (req, res) => {
//      const { email, password } = req.body;

//   try {
//     const oldUser = await User.findOne({ email });

//     if (!oldUser) 
//       return res.status(404).json({ 
//         message: "This user doesn't exist" 
//       });

//     const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

//     if (!isPasswordCorrect) 
//       return res.status(400).json({ 
//         message: "Invalid credentials"
//        });

//     const token = jwt.sign({ 
//       email: oldUser.email, id: oldUser._id }, secret, { expiresIn: "1h" 
//     });

//     res.status(200).json({ 
//       result: oldUser, token 
//     });
//   } catch (err) {
//     res.status(500).json({ 
//       message: "Something went wrong" 
//     });
//   }
// };

// export const signup = async (req, res) => {
//     const { email, password, firstName, lastName } = req.body;
  
//     try {
//       const oldUser = await User.findOne({ 
//         email
//        });
  
//       if (oldUser) 
//         return res.status(400).json({ 
//           message: "This user already exists" 
//         });
  
//       const hashedPassword = await bcrypt.hash(password, 12);
//       const result = await User.create({
//          email, password: hashedPassword, name: `${firstName} ${lastName}`
//          });
  
//       const token = jwt.sign({ 
//         email: result.email, id: result._id }, secret, { expiresIn: "1h" 
//       });
  
//       res.status(201).json({ 
//         result, token 
//       });
//     } catch (error) {
//       res.status(500).json({ 
//         message: "Something went wrong"
//       });
      
//       console.log(error);
//     }
//   };

//   module.exports = router;





// // const router = express.Router();
// // const User = require("../models/User");
// // // const bcrypt = require("bcryptjs");
// // const jwt = require("jsonwebtoken");
// // const auth = require("../middleware/middleware");
// // const bcrypt = require("bcrypt");

// // router.get("/register", (req, res) => {
// //   User.find()
// //     .then((users) => res.json(users))
// //     .catch((err) => res.status(400).json("Error: " + err));
// // });
// // router.post("/register", async (req, res) => {
  
// //   if (!req.body.name || !req.body.password || !req.body.email) {
// //     return res.status(400).json({ msg: "Please enter all fields" });
// //   }
// //   if (req.body.name.length > 15) {
// //     return res.status(400).json({ msg: "Name length is 15 characters MAX" });
// //   }
// //   const user = await User.findOne({ email: req.body.email });
// //   if (user) {
// //     return res.status(400).json({ msg: "User already exists" });
// //   }

// //   bcrypt.genSalt(10, function (err, salt) {
// //     bcrypt.hash(req.body.password, salt, function (err, hash) {
      
// //       const newUser = new User({
// //         name: req.body.name,
// //         email: req.body.name,
// //         password: hash,
// //       });
// //       newUser
// //         .save()
// //         .then((user) => res.json(user))
// //         .catch((err) => res.status(400).json("Error: " + err));
// //     });
// //   });
// // });
// // router.get("/profile", auth, async (req, res) => {
// //   const user = await User.findById(req.user._id);
// //   res.json({
// //     id: user._id,
// //     name: user.name
// //   });
// // });
// // router.delete("/profile", auth, (req, res) => {
// //   User.findByIdAndDelete(req.user._id)
// //     .then(() => res.json("User deleted"))
// //     .catch((err) => res.status(400).json("Error: " + err));
// // });
// // router.delete("/:id", (req, res) => {
// //   User.findByIdAndDelete(req.params.id)
// //     .then(() => res.json("User deleted"))
// //     .catch((err) => res.status(400).json("Error: " + err));
// // });
// // router.get("/login", (req, res) => {
// //   res.send("GET Login");
// // });
// // router.post("/login", async (req, res) => {
 
// //   if (!req.body.name || !req.body.password || !req.body.email) {
// //     return res.status(400).json({ msg: "Please enter all fields" });
// //   }
// //   const user = await User.findOne({ email: req.body.email });
// //   if (!user) {
// //     return res.status(400).json({ msg: "User doesnt exist" });
// //   }

// //   bcrypt.compare(req.body.password, user.password, function (err, response) {
// //     if (!response) {
// //       return res.status(400).send({ msg: "Authentication Error" });
// //     } else {
// //       const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
// //       res.json({
// //         token: token,
// //         user: {
// //           id: user._id,
// //           name: user.name,
// //           date: user.date,
// //         },
// //       });
// //     }
// //   });
// // });
// // router.post("/tokenIsValid", async (req, res) => {
// //   try {
// //     const token = req.header("auth-token");
// //     if (!token) {
// //       return res.json("false");
// //     }

// //     const verified = jwt.verify(token, process.env.JWT_SECRET);
// //     if (!verified) {
// //       return res.json("false");
// //     }

// //     const user = await User.findById(verified._id);
// //     if (!user) {
// //       return res.json("false");
// //     }

// //     return res.json(true);
// //   } catch {
// //     res.status(500).json({ msg: err.message });
// //   }
// // });

// // module.exports = router;