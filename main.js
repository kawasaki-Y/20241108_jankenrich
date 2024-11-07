document.addEventListener('DOMContentLoaded', () => {
  const chatForm = document.getElementById('chat-form');
  const chatInput = document.getElementById('chat-input');
  const messagesContainer = document.querySelector('.messages');

  // Character modes
  let currentCharacter = 'default';

  function setCharacter(character) {
    currentCharacter = character;
    const characterMapping = {
      'kind_girl': '優しい女の子',
      'gentleman': 'ヘヴィメタル',
      'punk_rocker': 'ゾンビ'
    };
    alert(`Character mode set to: ${characterMapping[character] || 'Default'}`);
  }

  function appendMessage(text, isUser = true) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.classList.add(isUser ? 'user-message' : 'bot-message');
    messageElement.textContent = text;
    messagesContainer.appendChild(messageElement);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  function getBotResponse(userMessage) {
    switch (currentCharacter) {
      case 'kind_girl':
        return `（優しい声で）${userMessage}について一緒に考えましょう！`;
      case 'gentleman':
        return `（メタルボイスで）${userMessage}！？ パワフルに解決するぜ！`;
      case 'punk_rocker':
        return `（ゾンビ風に）${userMessage}... ブレインズ...`;
      default:
        return `Interesting... Tell me more about ${userMessage}.`;
    }
  }

  chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const userMessage = chatInput.value.trim();

    if (userMessage !== '') {
      appendMessage(userMessage);
      chatInput.value = '';
      setTimeout(() => {
        const botReply = getBotResponse(userMessage);
        appendMessage(botReply, false);
      }, 1000); // Delay for a realistic bot response
    }
  });
});
