document.addEventListener('click', e => {
    if (!e.target.closest('.chat-widget')) {
        return;
    }

    const chatWidget = document.querySelector('.chat-widget');

    chatWidget.classList.add('chat-widget_active');

    //закрытие окна чата
    const close = e.target.closest('.task__remove');

    if (close) {
        chatWidget.classList.remove('chat-widget_active');
    }

});

document.addEventListener('keypress', e => {
    if (e.keyCode !== 13) {
        return;
    }
    const div = document.createElement('div'),

        messages = document.querySelector('.chat-widget__messages'),

        innerDivMessage = document.createElement('div'),
        innerDivTime = document.createElement('div'),

        botDiv = document.createElement('div'),
        botDivMessage = document.createElement('div'),
        botDivTime = document.createElement('div');

    div.classList.add('message', 'message_client');
    innerDivMessage.classList.add('message__text');
    innerDivTime.classList.add('message__time');

    botDiv.classList.add("message");
    botDivMessage.classList.add('message__text');
    botDivTime.classList.add('message__time');

    innerDivMessage.innerText = e.target.value;

    // проверка пустого сообщения
    if (innerDivMessage.innerText === '') {
        return;
    }

    messages.appendChild(div);
    div.appendChild(innerDivTime);
    div.appendChild(innerDivMessage);

    e.target.value = '';
    messages.scrollIntoView(false);
    const userTime = new Date();

    innerDivTime.innerText = userTime.toLocaleTimeString(navigator.language, {hour: '2-digit', minute: '2-digit'});

    const arrAnswers = ['Hello', 'How are you', 'London'];

    let i = Math.floor(Math.random() * arrAnswers.length);

    botDivMessage.innerText = arrAnswers[i];

    const botAnswer = setTimeout(function () {
        const botTime = new Date();

        botDivTime.innerText = botTime.toLocaleTimeString(navigator.language, {hour: '2-digit', minute: '2-digit'});

        messages.appendChild(botDiv);
        botDiv.appendChild(botDivMessage);
        botDiv.appendChild(botDivTime);
        //прижать скролл к низу
        messages.scrollIntoView(false);
    }, 1000);


    // AUTO ANSWER
    function autoAnswer() {
        const botDiv = document.createElement('div'),
            botDivMessage = document.createElement('div'),
            botDivTime = document.createElement('div');

        botDiv.classList.add("message");
        botDivMessage.classList.add('message__text');
        botDivTime.classList.add('message__time');

        const arrAutoAnswers = ['Where are you?', 'Answer me!!!', 'Tell me something'];

        let i = Math.floor(Math.random() * arrAutoAnswers.length);

        botDivMessage.innerText = arrAutoAnswers[i];

        const botTime = new Date();

        botDivTime.innerText = botTime.toLocaleTimeString(navigator.language, {hour: '2-digit', minute: '2-digit'});

        messages.appendChild(botDiv);
        botDiv.appendChild(botDivMessage);
        botDiv.appendChild(botDivTime);
        //прижать скролл к низу
        messages.scrollIntoView(false);
    }

    setInterval(function () {
        autoAnswer();

    }, 10000);

});





