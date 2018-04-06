// EVERYTHING IN EXPRESS IS MIDDLEWARE
// SOME COMPONENT TAKES INCOMING REQUESTS
// COMPONENT THAT SPITS OUT RESPONSES


const cors = require('cors');
var corsOptions = {
	origin: 'http://example.com',
	optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.route('/api/cats').post((req, res) => {
	// (http-status-code, payload)
	res.send(201, req.body);
})



// when you go to /api/cats send a get request
// notice the request and promise in the get method
app.route('/api/cats').get((req, res) => {
// decide what happens when user requests this route
	res.send({
		cats: [{ name: 'lilly' }, { name: 'lucy'}]
	});
});

// expect dynamic cat names
app.route('api/cats/:name').get((req, res) => {
	const requestedCatName = req.params['name'];
	res.send({ name: requestedCatName });
});

app.route('/api/cats/:name').put((req, res) => {
	res.send(200, req.body);
});

// delete method
app.route('/api/cats/:name').delete((req, res) => {
  res.sendStatus(204); // 204 means no content, not sending a payload but request was successful
});


// start up server
app.listen(7999, () => {
	console.log('Server started!');
});
