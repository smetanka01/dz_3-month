const countryName = document.getElementById('country')
const countrySearch = document.getElementById('country__name')
const neighbors = document.getElementById('neighbors')
const btn = document.querySelector('.btn')
const spinner = document.querySelectorAll('.spinner-grow')


btn.onclick = async () => {
    try {
        countryName.innerText = ''
        neighbors.innerText = ''
        spinner.forEach(a => a.style.display = 'block')
        let response = await fetch('https://restcountries.com/v3.1/name/' + countrySearch.value);
        let country = await response.json();
        spinner.forEach(a => a.style.display = 'none')
        country = country[0]

        countryName.innerText = country.name.common
        console.log(country.borders)

        for (key in country.borders) {
            neighbors.innerHTML += `
                <li>${country.borders[key]}</li>
            `
        }
    }
    catch (e) {
        console.log(e)
    }
}
