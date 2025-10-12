document.addEventListener('DOMContentLoaded', () => {
    const contentArea = document.getElementById('content-area');
    
    // Add a symbol representing the challenge
    const challengeSymbol = document.createElement('h2');
    challengeSymbol.textContent = "🔒"; // Lock emoji
    challengeSymbol.style.fontSize = '4em';
    challengeSymbol.style.margin = '0.2em 0';
    
    const challengeText = document.createElement('p');
    challengeText.textContent = "Attempt to change the unchangeable.";
    
    contentArea.appendChild(challengeSymbol);
    contentArea.appendChild(challengeText);
});

