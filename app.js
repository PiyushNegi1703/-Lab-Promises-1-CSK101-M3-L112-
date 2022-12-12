let promiseCall = new Promise((resolve, reject) => {
  resolve(fetch('https://jsonplaceholder.typicode.com/users'));
});

const message = document.getElementById('message');
const h2Text = document.querySelector('h2');
const button = document.getElementById('btnGet');

message.style.display = 'none';
h2Text.style.display = 'none';

promiseCall
  .then((resp) => {
    return resp.json();
  })
  .then((resp) => {
    console.log(resp);
    var player = ``;

    resp.forEach((user) => {
      player += `<div class="player">
          <div class="strength">Name : ${user.name}</div>
          <div>Email   : ${user.email}</div>
          <div>Phone   : ${user.phone}</div>
          <div>Website : ${user.website}</div>
          <div>Company : ${user.company.name}</div>
          <div>City    : ${user.address.city}</div>
          <div>Zipcode : ${user.address.zipcode}</div>
          </div>`;
    });

    message.innerHTML = player;
  });

button.onclick = () => {
  if (message.style.display == 'none') {
    message.style.display = 'grid';
    button.innerText = 'Hide User List';
    h2Text.style.display = 'inherit';
  } else if (message.style.display == 'grid') {
    message.style.display = 'none';
    button.innerText = 'Get User List';
    h2Text.style.display = 'none';
  }
};

promiseCall.catch((error) => {
  console.log('Promise rejected.');
  console.log(error.message);
});
