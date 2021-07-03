const socket = io();

const chat = document.querySelector('.chat-form');
const Input = document.querySelector('.chat-input');
// const userid = Math.floor(Math.random() * 1000);




/*

This right here is unused.


chat.addEventListener(event, event => {

    event.preventDefault();
    final = '(User' + userid + '): ' + Input.value;
    socket.emit('chat', final);
    Input.value = '';
})
*/

socket.on('chat', message => {
    renderMessage(message)
});

socket.on('join', user => {
    addUser(user)
});

const chatWindow = document.querySelector('.chat-window');
const userList = document.querySelector('.online-section');

const renderMessage = message => {
    const div = document.createElement('p')
    div.classList.add('render-message')
    div.innerHTML = message
    chatWindow.appendChild(div)
    if (document.getElementById("as").checked) {
        document.getElementById("chwin").scrollTop = document.getElementById("chwin").scrollTopMax
    }
}

const addUser = user => {
    const y = document.createElement('p')
    y.classList.add('user')
    y.innerHTML = message
    userlist.appendChild(y)
}