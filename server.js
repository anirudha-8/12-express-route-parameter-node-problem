const express = require("express");

const app = express();

app.get("/greet-user/:username", (req, res) => {
	const username = req.params.username;
	console.log(username);
	res.send(`Hello, ${username}`);
});

const port = 8080;

app.listen(port, () => {
	console.log(`App is running at: http://localhost:${port}`);
});
