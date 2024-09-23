fetch('https://jsonplaceholder.typicode.com/todos')
.then(res => res.json())
.then(todos => allTodos(todos))

function allTodos(todosInfo) {
    const ul = document.getElementById("li-container")

    for (const element of todosInfo) {
        const li = document.createElement('li')
        li.innerText = element.completed
        ul.appendChild(li)
    }
}