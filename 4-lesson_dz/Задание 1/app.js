let btn = document.getElementById('btn')
let name = document.getElementById('name'),
    region = document.getElementById('region'),
    subregion = document.getElementById('subregion'),
    capital = document.getElementById('capital'),
    flag = document.getElementById('flag')


btn.addEventListener('click', () =>  {
    fetch('https://restcountries.com/v3.1/name/' + document.getElementById('country').value).then((data) => {
        data.json().then(responce => {
            name.innerText = responce[0].name.common;
            region.innerText = responce[0].region;
            subregion.innerText = responce[0].subregion;
            capital.innerText = responce[0].capital;
            flag.setAttribute('src', responce[0].flags.png)
            console.log(responce)
        }).catch(e => {
            console.log(e.message)
        })
    })
})


