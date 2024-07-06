const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "data"
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
    } else {
        console.log('Connected to the database');
    }
});

app.post('/login', (req, res) => {
    const sql = "SELECT * FROM login WHERE username = ? AND password=?";
    db.query(sql, [req.body.username, req.body.password], (err, data) => {
        if (err) {
            return res.status(500).json({ message: "Server error", error: err });
        }
        if (data.length > 0) {
            return res.json({ message: "Dang nhap thanh cong", username: req.body.username });
        } else {
            return res.json({ message: "Dang nhap khong thanh cong" });
        }
    });
});

app.listen(8080, () => {
    console.log("Listening...");
});
