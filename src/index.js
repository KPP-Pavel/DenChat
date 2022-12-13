let message = ''

const messages = [
    { author: false, message: "Привет. Как дела?" },
    { author: false, message: "Привет. Нормально." },
    { author: true, message: "Что нового?" },
    { author: false, message: "Ничего" }
]

function printMessages() {
    const messager = document.getElementById('messager')
    let html = ''
    for (const itm of messages) {
        html = html + `<div class="${itm.author ? 'sms right' : 'sms'}">
            <p class="smstext">${itm.message}</p>
        </div>`
    }
    messager.innerHTML = html
}

function sendHendler() {
    if (message) {
        messages.push({ author: true, message: message })
        message = ''
        document.getElementById('text').value = ''
        printMessages()
    }
}

function setMessage(value = '') {
    message = value
}
function onKeyPressHander(key) {
    if (key == 'Enter') { sendHendler() }
}

printMessages()