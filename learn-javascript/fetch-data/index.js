const url = 'https://swapi.co/api/people/1'
fetch(url)
    .then(response => {
        console.log(response)
        return response.json() // Convert to JSON.
    })
    .then(data => { // data is a JavaScript object.
        console.log(data); // show url data.
        const {
            name,
            skin_color,
            gender,
            films
        } = data; // films have array.

        let linksFilm = '';
        films.forEach((item, index) => { // item array from film and index start from first array it was 0.
            linksFilm += `<a href="${item}">film ${index+1}</a>`;
        })
        const peopleHTMLString = `
    <div class="col-sm-6 col-md-4"> 
    name: ${name}
    <br>
    skin color: ${skin_color}
    <br>
    gender: ${gender}
    <br>
    films: ${linksFilm}
    </div>`
        document.getElementById('starwars').innerHTML = peopleHTMLString;
    }).catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))