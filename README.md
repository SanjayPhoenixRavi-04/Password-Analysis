# Password Analyzer 🔐

## Overview
The **Password Analyzer** is a web-based application that allows users to evaluate the strength of their passwords and securely hash them using **SHA-256** and **BCrypt** algorithms. This project demonstrates password security best practices by providing instant feedback on password strength and showing how passwords can be securely hashed.

## Features
- **Password Strength Analysis**: Classifies passwords as "Weak", "Medium", or "Strong" based on various factors.
- **SHA-256 Hashing**: Demonstrates hashing with the SHA-256 algorithm.
- **BCrypt Hashing**: Uses BCrypt for secure password hashing with salting.
- **Responsive Design**: Works on mobile, tablet, and desktop devices.

## Technologies Used
- **Node.js**: Backend runtime environment.
- **Express.js**: Web framework for handling HTTP requests.
- **BCrypt**: For secure password hashing.
- **Crypto**: Node.js module for implementing SHA-256 hashing.
- **HTML/CSS/JavaScript**: Frontend technologies for UI and interaction.

## Project Structure
```plaintext
password-analyzer/
├── index.html       # Frontend user interface
├── style.css        # CSS file for styling and responsiveness
├── script.js        # Client-side JavaScript for user interaction
├── server.js        # Node.js backend server using Express.js
├── package.json     # Project dependencies and scripts
└── .gitignore       # Files and directories ignored by Git
