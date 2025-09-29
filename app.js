const messageWindow = document.querySelector('.message-window');
const messageInput = document.querySelector('.message-input');

// two functions: create and display user text, and create and display "bot" text
// bot function: take message itself and length of it, and multiply that length by a certain number for setTimeout function

const botMessageRender = (userText, userTextLength) => {
    setTimeout(() => {
        const botMessageHTML = `
        <div class="bot-message-container message-container">
            <div class="bot-message">${userText}</div>
        </div>
        `
        messageWindow.innerHTML += botMessageHTML;
    }, userTextLength * 50)
}

const userInputRender = (userText, eventKey) => {
    if (eventKey == 'Enter'){
        const userMessageHTML = `
        <div class="user-message-container message-container">
            <div class="user-message">${userText.value}</div>
        </div>
        `
        const userMessage = userText.value;
        messageWindow.innerHTML += userMessageHTML;
        messageInput.value = '';
        botMessageRender(userMessage, userMessage.length);
    }
}

messageInput.addEventListener('keydown', () => {
    userInputRender(messageInput, event.key)
});