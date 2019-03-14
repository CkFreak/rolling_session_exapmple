const express = require("express");
const session = require("express-session");
const cors = require("cors");

const app = express();

app.use(cors({
		origin: ["http://localhost:3000"], credentials: true
	}
));

app.use(session({
		secret: "my-super-duper-secret",
		saveUninitialized: false,
		resave: true,
		cookie: {
			maxAge: 604800000,
			secure: false,
		},
		rolling: true,
	})
);

app.all("/", (req, res) => {
	res.status(200).send({message: "Yup I am running"});
});

app.get("/login", (req, res) => {
	req.session.save(err => {
		if (err) throw err;
		console.log("Sending this session ID", req.sessionID);
		res.status(200).send({message: "Success", session: req.sessionID});
	});
});

app.get("/logout", (req, res) => {
	console.log("Session before destroying it", req.sessionID);
	req.session.destroy((err) => {
		if (err) throw err;
		res.status(200).send({message: "Success", session: req.sessionID || "Session is gone"});
		console.log("This session should be undefined", req.sessionID);
	});
});

app.listen(3001, () => {
	console.log("The server is now reachable at: http://localhost:3001");
});
