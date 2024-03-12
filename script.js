// Dummy data for connected services and conversation history
const connectedServices = ['WhatsApp', 'iMessage', 'Telegram', 'Twitter', 'Snapchat', 'LinkedIn', 'Messenger'];
const conversationHistory = {
    'WhatsApp': ['Hi there!', 'How are you?'],
    'iMessage': ['Hello!', 'Good to see you.'],
    'Telegram': ['Hey!', 'What\'s up?'],
    'Twitter': ['Yo Buddy', 'Howdy?'],
    'Snapchat': ['You doing something?', 'nuh uh'],
    'LinkedIn': ['What are you doing?', 'nothing'],
    'Messenger': ['Hi', 'Hi']
};

// Populate connected services list
const serviceList = document.getElementById('serviceList');
connectedServices.forEach(service => {
    const listItem = document.createElement('li');
    listItem.textContent = service;
    listItem.onclick = () => displayConversation(service);
    serviceList.appendChild(listItem);
});

// Initial display of conversation
displayConversation(connectedServices[0]);

// Display conversation history for the selected service
function displayConversation(service) {
    const messages = conversationHistory[service];

    // Clear previous messages
    (document.getElementById('conversationHistory')).innerHTML = '';

    // Display messages
    messages.forEach(message => {
        const messageDiv = document.createElement('div');
        messageDiv.textContent = message;
        (document.getElementById('conversationHistory')).appendChild(messageDiv);
    });
}

// Send a new message
function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const selectedService = document.querySelector('.services-list li:hover');

    if (selectedService) {
        const service = selectedService.textContent;
        const message = messageInput.value;

        // Add the message to the conversation history
        conversationHistory[service].push(message);

        // Update the displayed conversation
        displayConversation(service);

        // Clear the input field
        messageInput.value = '';
    } else {
        alert('Please select a service before sending a message.');
    }
}
