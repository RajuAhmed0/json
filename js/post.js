fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => postInfo(json))


function postInfo(allpost) {
    const ul = document.getElementById("li-container")

    for (const info of allpost) {
        const li = document.createElement("li");
        li.innerText = info.title
        ul.appendChild(li)
    }
}