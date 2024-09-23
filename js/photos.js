
fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(json => photos(json))


    function photos(allPhtotos) {
        const photoContainer = document.getElementById("photo-container");

        for (const element of allPhtotos) {
            const div = document.createElement('div')
            div.innerHTML = `
            <img src="${element.url}" alt="" >
            `
            photoContainer.appendChild(div)
        }
    }