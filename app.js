// global modules and setup
const path = require('path');
const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const jsonParser = bodyParser.json();
const hbs = require("hbs");
app.set('views', __dirname + '/views');
app.set("view engine", "hbs");

// set partials
hbs.registerPartials(__dirname + "/views/partials");

// set static resources
app.use(express.static(path.join(__dirname, 'public')));

// routing 
app.get("/", function(request, response){
	response.render('home.hbs',{
		title: 'UrbanWealth'
	});
});

let gdata = ['aaa','sss','www'];
let data =
{
	keys: ['aaa','sss','www'],
	gradation: [0, 1, 2, 3, 4, 5],
	graphics: [
		{
			name: 'asdasdsa',
			color: '#568723',
			type: 'line',
			points:
			[
				{
					color: '#ff0000',
					value: 0.7
				},
				{
					value: 4.5
				},
				{
					color: '#568723',
					value: 3.3
				}
			]
		},
		{
			name: 'asdasdsa',
			color: '#aa3242',
			type: 'line',
			points:
			[
				{
					value: 4.8
				},
				{
					value: 4.0
				},
				{
					value: 2.3
				}
			]
		},
		{
			name: 'wrwrwrwrw',
			color: '#99ee55',
			type: 'line',
			points:
			[
				{
					value: 3.0
				},
				{
					value: 0.2
				},
				{
					value: 4.5
				}
			]
		},
	]
}

app.get("/district", function(request, response){
	response.render('district.hbs',{
		title: 'UrbanWealth'
	});
});

app.post("/graphic", function(request, response){
	response.json(
{
	keys: ['aaa','sss','www'],
	gradation: [0, 1, 2, 3, 4, 5],
	graphics: [
		{
			name: 'asdasdsa',
			color: '#568723',
			type: 'line',
			points:
			[
				{
					color: '#ff0000',
					value: 0.7
				},
				{
					value: 4.5
				},
				{
					color: '#568723',
					value: 3.3
				}
			]
		},
		{
			name: 'asdasdsa',
			color: '#aa3242',
			type: 'line',
			points:
			[
				{
					value: 4.8
				},
				{
					value: 4.0
				},
				{
					value: 2.3
				}
			]
		},
		{
			name: 'wrwrwrwrw',
			color: '#99ee55',
			type: 'line',
			points:
			[
				{
					value: 3.0
				},
				{
					value: 0.2
				},
				{
					value: 4.5
				}
			]
		},
	]
}
	);
});

app.get("/event", function(request, response){
	response.render('event.hbs',{
		title: 'UrbanWealth'
	});
});

app.post("/problem", function(request, response){
	//todo problem
});

app.post("/solution", function(request, response){
	//todo solution
});

app.post("/review", function(request, response){
	//todo review
});

app.post("/event", function(request, response){
	//todo event
});

app.post("/comment", function(request, response){
	//todo comment
});

app.post("/subcategory", function(request, response){
	//todo subcategory
});

app.get("/stop", function(request, response){
	console.log(`Server stop listening ${server.address().address}:${server.address().port}`);
	console.log('Cause: The server has been shut down by the web request');
	process.exit();
	response.send('Server disabled');
});

var server = app.listen(3000, () => {
	console.log(`Server start listening ${server.address().address}:${server.address().port}`);
});