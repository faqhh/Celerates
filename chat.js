const chat = document.getElementById('chat');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', () => {
    const message = userInput.value.trim();
    if (message) {
        appendMessage(`Anda: ${message}`, 'text-right');
        userInput.value = ''; // Clear input field
        // Simulate AI response (replace with actual AI logic)
        setTimeout(() => {
            appendMessage(`AI: Saya tidak bisa menjawab pertanyaan itu.`, 'text-left');
        }, 1000);
    }
});

function appendMessage(message, alignment) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `mb-2 ${alignment}`;
    messageDiv.textContent = message;
    chat.appendChild(messageDiv);
    chat.scrollTop = chat.scrollHeight; // Scroll to bottom
}

userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendButton.click(); // Trigger send button on enter
    }
});