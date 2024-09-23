fetch('https://jsonplaceholder.typicode.com/albums')
.then(res => res.json())
.then(album => albums(album))

function albums(albumsInfo) {
    const ul = document.getElementById('li-container')

    for (const element of albumsInfo) {
        const li = document.createElement('li')
        li.innerText = element.title
        ul.appendChild(li)

    }
}