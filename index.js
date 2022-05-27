const express = require('express');
const app = express();
app.set('port', process.env.PORT || 8000);
const cors = require('cors');

 // Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
 // custom middleware takes incoming get request a
//  nd modifyies it before it reaches route handler
// const middleware = (req,res, next)=>{
// console.log('custom middleware executed!');
// 	next(); };
// app.use(middleware);

// redirect
app.get('/', (req, res) =>{
  res.redirect('/post');
})

const postController = require('./controllers/postController');
app.use('/post', postController)

// err handling
app.use((err, req, res, next) => {
	const statusCode = res.statusCode || 500;
	const message = err.message || 'Internal Server Error';
	res.status(statusCode).send(message);
  });

// start server
app.listen(app.get('port'), () => {
	console.log(`✅ PORT: ${app.get('port')} 🌟`);
});






