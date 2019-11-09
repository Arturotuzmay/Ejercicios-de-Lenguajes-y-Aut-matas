var socket = io.connect('http://localhost:8081', { 'forceNew': true }); 

socket.on('messages', function (data) {
  console.log(data);
  render(data);
})

function render(data) {
  var html = data.map(function (elem, index) {
    let resultados = RegEx(elem.text);
    return (`<div class="container-elements">
                <strong>${elem.author}</strong>:
                <em>${elem.text}</em>
                ${resultados}
            </div> `);

  }).join(" ");

  document.getElementById('messages').innerHTML = html;
}

function addMessage(e) {
  var message = {
    author: document.getElementById('username').value,
    text: document.getElementById('texto').value
  };

  socket.emit('new-message', message);
  return false;
}
