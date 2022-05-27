
require('dotenv').config();
const mongoose = require('mongoose');

// Mongo URL and Connection
// let mongoURI = "";
let mongoURI = process.env.DB_URL;
const db = mongoose.connection;

// if (process.env.NODE_ENV === "production") {
// 	mongoURI = process.env.DB_URL;
//   } else {
// 	mongoURI = "mongodb://localhost/8000";
//   }

// Connect to Mongo
mongoose.connect(mongoURI);
// mongoose
//   .connect(mongoURI, { useNewUrlParser: true })
//   .then(instance =>
//     console.log(`Connected to db: ${instance.connections[0].name}`)
//   )
//   .catch(err => console.log("Connection Failed.", err));
// Connection Error/Success - optional but can be helpful
// Define callback functions for various events
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected at: ', mongoURI));
db.on('disconnected', () => console.log('mongo disconnected'));

// Open the Connection
db.on('open', () => {
	console.log('✅ mongo connection made!');
});

module.exports = mongoose;











// //=============================================================================
// // Mongo Atlas Connection
// //=============================================================================
// require('dotenv').config();
// const mongoose = require('mongoose');

// // Mongo URL and Connection
// let mongoURI = "";
// const db = mongoose.connection;

// if (process.env.NODE_ENV === "production") {
// 	mongoURI = process.env.DB_URL;
//   } else {
// 	mongoURI = "mongodb://localhost/4000";
//   }

// // Connect to Mongo
// mongoose.connect(mongoURI);

// // Connection Error/Success - optional but can be helpful
// // Define callback functions for various events
// db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
// db.on('connected', () => console.log('mongo connected at: ', mongoURI));
// db.on('disconnected', () => console.log('mongo disconnected'));

// // Open the Connection
// db.on('open', () => {
// 	console.log('✅ mongo connection made!');
// });

// module.exports = mongoose;