fetch('https://jsonplaceholder.typicode.com/comments')
.then(res => res.json())
.then(com => comments(com))

function comments(allCommnets) {
    const ul = document.getElementById('li-container')
    for (const element of allCommnets) {
        const li = document.createElement("li")
        li.innerText = element.email
        ul.appendChild(li)
    }
}