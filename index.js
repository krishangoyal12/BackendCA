const express = require('express')
const app = express()
const port = 8080

const users = [
    { username: "alice", age: 25, email: "alice@example.com" },
    { username: "bob", age: 30, email: "bob@example.com" },
    { username: "charlie", age: 28, email: "charlie@example.com" }
];

app.get('/user', (req, res) => {
    const { user } = req.query;

    if (!user) {
        return res.status(400).json({ message: "User parameter cannot be empty" });
    }

    const foundUser = users.find(u => u.username.toLowerCase() === user.toLowerCase());

    if (foundUser) {
        return res.json({ message: "User found", data: foundUser });
    } else {
        return res.status(404).json({ message: "User not found" });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});