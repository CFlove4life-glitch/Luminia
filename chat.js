
// Select page elements
const chatForm = document.querySelector('#chatForm'); // form where user types
const chatInput = document.querySelector('#chatInput'); // text input field
const chatWindow = document.querySelector('#chatWindow'); // where messages show

// Listen for form submission
chatForm.addEventListener('submit', async (e) => {
  e.preventDefault(); // prevent page refresh

  const message = chatInput.value.trim();
  if (!message) return;

  // Show user's message in chat
  chatWindow.innerHTML += `<div class="user-message">${message}</div>`;
  chatInput.value = '';

  try {
    // Send message to backend API
    const response = await fetch('/api/sendMessage', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message })
    });

    const data = await response.json();

    // Show AI response
    chatWindow.innerHTML += `<div class="ai-message">${data.reply}</div>`;
  } catch (err) {
    // Show error if API fails
    chatWindow.innerHTML += `<div class="error">Connection error. Try again.</div>`;
    console.error(err);
  }
});