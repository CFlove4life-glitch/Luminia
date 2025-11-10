
// 1️⃣ Select elements from the page
const form = document.querySelector('#chatForm'); // the message form
const input = document.querySelector('#messageInput'); // text input
const chat = document.querySelector('#chatWindow'); // area where messages show

// 2️⃣ Handle sending a message
form.addEventListener('submit', async (e) => {
    e.preventDefault(); // prevent page reload

    const message = input.value;
    if (!message) return;

    // Add user message to chat
    chat.innerHTML += `<div class="user-message">${message}</div>`;

    input.value = ''; // clear input

    try {
        // 3️⃣ Send message to backend
        const response = await fetch('/api/sendMessage', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message })
        });

        const data = await response.json();

        // 4️⃣ Show AI response
        chat.innerHTML += `<div class="ai-message">${data.reply}</div>`;
    } catch (error) {
        chat.innerHTML += `<div class="error">Connection error. Try again.</div>`;
        console.error(error);
    }
});