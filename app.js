const socket = new WebSocket('ws://localhost:3000'); // Replace with your WebSocket server URL

socket.onmessage = (event) => {
  const messages = document.getElementById('messages');
  const li = document.createElement('li');
  li.textContent = event.data;
  messages.appendChild(li);
};

function sendMessage() {
  const messageInput = document.getElementById('messageInput');
  const message = messageInput.value;
  socket.send(message);
  messageInput.value = '';
}
