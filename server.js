const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const app = express();

const connection = mysql.createConnection({
    host: 'localhost',         
    port: 3306,                
    user: 'root',              
    password: '1234',              
    database: 'pwdanalyzer'     
});

app.use(express.static(__dirname));
app.use(express.json());

app.post('/analyze', async (req, res) => {
    const password = req.body.password;
    const strength = analyzePasswordStrength(password);
    const hashedPasswordSha256 = crypto.createHash('sha256').update(password).digest('hex');
    const hashedPasswordBcrypt = await bcrypt.hash(password, 10);

    const query = 'INSERT INTO password_analysis (password, strength, hashed_sha256, hashed_bcrypt) VALUES (?, ?, ?, ?)';
    connection.query(query, [password, strength, hashedPasswordSha256, hashedPasswordBcrypt], (err, result) => {
        if (err) throw err;
        console.log('Password analysis result stored:', result);
    });

    res.json({ strength, hashedPasswordSha256, hashedPasswordBcrypt });
});

function analyzePasswordStrength(password) {
    if (password.length < 8) {
        return 'Weak';
    } else if (password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)) {
        return 'Strong';
    } else {
        return 'Medium';
    }
}

app.listen(4000, () => {
    console.log('Server listening on port 4000');
});
