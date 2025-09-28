const messageWindow = document.querySelector('.message-window');
const messageInput = document.querySelector('.message-input');

// two functions: create and display user text, and create and display "bot" text

const userInputRender = (userText, eventKey) => {
    if (eventKey == 'Enter'){
        const userMessageHTML = `
        <div class="user-message-container message-container">
            <div class="user-message">${userText.value}</div>
        </div>
        `
        messageWindow.innerHTML += userMessageHTML;
        messageInput.value = '';
    }
}

messageInput.addEventListener('keydown', () => {
    userInputRender(messageInput, event.key)
});