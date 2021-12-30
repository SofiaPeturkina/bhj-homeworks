const chatWidget = document.querySelector(".chat-widget");
const messages = document.getElementById("chat-widget__messages");
const inputField = document.getElementById("chat-widget__input");

const chatOpening = () => {
    chatWidget.classList.add("chat-widget_active");
}
chatWidget.addEventListener('click', chatOpening);

const currentTime = () => { 
    return new Date().toLocaleTimeString("ru-Ru", {
        hour: "2-digit",
        minute: "2-digit",
    });
}

const answers = [
    "Здрасьте, забор покрасьте!",
    "Мяу!",
    "Я что для тебя шутка какая-то?!",
    "Кусь!",
    "Не надо ругаться.",
    "Попробуй загуглить.",
    "Не хочу с тобой разговаривать.",
    "Чао!",
];

const messageEntering = (e) => {
    let textOfMessage = inputField.value.trim();
    let index = Math.floor(Math.random() * answers.length);
    if (e.key === 'Enter' && textOfMessage !== '') {
        messages.innerHTML += `
        <div class="message message_client">
            <div class="message__time">${currentTime()}</div>
            <div class="message__text">${textOfMessage}</div>
        </div>
        `;
        inputField.value = '';
        messages.innerHTML += `
        <div class="message">
            <div class="message__time">${currentTime()}</div>
            <div class="message__text">${answers[index]}</div>
        </div>
        `;
    }
}
inputField.addEventListener('keydown', messageEntering);






