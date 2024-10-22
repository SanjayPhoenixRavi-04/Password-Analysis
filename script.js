const passwordInput = document.getElementById('password');
const analyzeButton = document.getElementById('analyze');
const resultDiv = document.getElementById('result');

analyzeButton.addEventListener('click', async () => {
    const password = passwordInput.value;
    const response = await fetch('/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
    });
    const data = await response.json();
    resultDiv.innerHTML = `
        <p>Strength: ${data.strength}</p>
        <p>Hashed Password (SHA-256): ${data.hashedPasswordSha256}</p>
        <p>Hashed Password (BCrypt): ${data.hashedPasswordBcrypt}</p>
    `;
});
