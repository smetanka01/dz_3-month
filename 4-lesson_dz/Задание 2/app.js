let table = document.getElementById('table')

let allCountry = () => {
    fetch('https://restcountries.com/v3.1/all').then((data) => {
        data.json().then(responce => {
            for (let i = 0; i < responce.length; i++) {
                let code = document.createElement('td')
                code.className = 'code'
                code.innerText = responce[i].altSpellings[0]

                let flag = document.createElement('td')
                flag.className = 'flag'
                let flagImg = document.createElement('img')
                flagImg.setAttribute('src', responce[i].flags.png)
                flag.append(flagImg)

                let name = document.createElement('td')
                name.className = 'name'
                name.innerText = responce[i].name.common

                let capital = document.createElement('td')
                capital.className = 'capital'
                capital.innerText = responce[i].capital

                let population = document.createElement('td')
                population.className = population
                population.innerText = responce[i].population.toLocaleString()

                let tr = document.createElement('tr')
                tr.className = 'string'
                tr.append(code)
                tr.append(flag)
                tr.append(name)
                tr.append(capital)
                tr.append(population)
                console.log(tr)
                table.append(tr)
                console.log(responce)
            }
        })
    })
}

allCountry()