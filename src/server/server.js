import express from 'express';

const app = express();
const port = 3031;

app.use(express.json());

let users = [
    { username: 'admin', password: 'admin123' },
    { username: 'user', password: 'user123' }
];

app.get('/users', (req, res) => {
    res.json(users);
});

app.post('/user', (req, res) => {
    const newUser = req.body;
    users.push(newUser);
    res.status(201).json(newUser);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});