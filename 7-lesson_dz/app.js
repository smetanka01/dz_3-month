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
        const promises = country.borders.map(code => {
            return fetch(('https://restcountries.com/v3.1/alpha/') + code)
        });

        const countries = await Promise.all(promises);
        for await (let country of countries) {
            const [data] = await country.json()
            neighbors.innerHTML += `
                 <li>${data.name.common}</li>
             `
        }
    }
    catch (e) {
        console.log(e)
    }
}
