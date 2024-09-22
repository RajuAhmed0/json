// const url = "https://jsonplaceholder.typicode.com/users";
// fetch(url)
//       .then(response => response.json())
//       .then(json => console.log(json))

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => userInfo(json))


function userInfo(users) {
    const ul = document.getElementById("li-container")

    for (const info of users) {
        console.log(info);
      const li = document.createElement("li");
      li.innerText = info.username;
      ul.appendChild(li)
    }
}