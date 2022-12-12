// create a function and following the progressions inside the function.

// Progression 1: Create a promise call which fetches data
let promiseCall = new Promise((resolve, reject) => {
  resolve(fetch('https://jsonplaceholder.typicode.com/users'));
});

// Progression 2: Display the fetched data in the form of list
var message = document.getElementById('message');
document.querySelector('h2').style.display = 'none';

document.getElementById('btnGet').onclick = () => {
  document.querySelector('h2').style.display = 'inherit';

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
};
// Progression 3: When the promise call is rejected then throw an error
promiseCall.catch((error) => {
  console.log('Promise rejected.');
  console.log(error.message);
});
