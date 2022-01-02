const btn = document.getElementById('btn')
const drinkName = document.getElementById('drink_name')
const container  = document.getElementById('container')
const row = document.getElementById('row')
const popupBg = document.querySelector('.popup__bg')
const popupWindow = document.querySelector('.popup__window')
const popupClose  = document.querySelector('.close__popup')
const popupInner = document.getElementById('popup__inner')
const cocktailName = document.getElementById('cocktail__name')
const instructionText = document.getElementById('instruction__text')
const error = document.querySelector('.error')

btn.onclick = async () => {
    try {
        if (drinkName.value === ''){
            throw SyntaxError()
        }
        error.classList.remove('active')
        row.innerHTML = '';
        const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drinkName.value);
        const drink = await response.json();
        for (let i = 0; i < drink.drinks.length; i++) {
            let cardTitle = document.createElement('h5')
            cardTitle.className = "card-title"
            cardTitle.innerText = drink.drinks[i].strDrink

            let cartBody = document.createElement('div')
            cartBody.className = "card-body"
            cartBody.append(cardTitle)

            let drinkImg = document.createElement('img')
            drinkImg.className = "card-img-top drink_img"
            drinkImg.setAttribute('src', drink.drinks[i].strDrinkThumb)

            let card = document.createElement('div')
            card.className = "card"
            card.append(drinkImg)
            card.append(cartBody)
            card.onclick = () => {
                //Обнуление модального окна
                popupInner.innerHTML = ''

                instructionText.innerHTML = ''

                //Открытие модального окна
                popupBg.classList.add('active')
                popupWindow.classList.add('active')

                //Название коктейля в модальном окне
                cocktailName.innerText = drink.drinks[i].strDrink

                //создаем ингредиент и их количество, потом объединяем
                const ingredientsNumber = Object.keys(drink.drinks[i])
                    .filter(item => item.includes('strMeasure') && drink.drinks[i][item])
                    .map(item => drink.drinks[i][item])

                const ingredient = Object.keys(drink.drinks[i])
                    .filter(item => item.includes('strIngredient') && drink.drinks[i][item])
                    .map(item => drink.drinks[i][item])

                //Добавление полученной инфо. в html
                for (let j = 0; j < ingredient.length; j++) {
                    const popupItem = document.createElement('div')
                    popupItem.className = 'popup__item'

                    const ingredientImg = document.createElement('img')
                    ingredientImg.className = 'ingredient-img'
                    ingredientImg.setAttribute('src', 'https://www.thecocktaildb.com/images/ingredients/' + ingredient[j] + '.png')
                    popupItem.append(ingredientImg)

                    const ingredientName = document.createElement('div')
                    ingredientName.className = 'ingredient-name'
                    ingredientName.innerText = ingredientsNumber[j] + ' ' + ingredient[j]

                    popupItem.append(ingredientName)
                    popupInner.append(popupItem)


                }

                instructionText.innerHTML = drink.drinks[i].strInstructions

            }

            // let col = document.createElement('div')
            // col.className = "col"
            // col.append(card)
            //
            // row.append(col)
            console.log(card)

            row.innerHTML += `
                <div class="col">${card.outerHTML}</div>
            `
        }
    }
    catch (e) {
        row.innerHTML = '';
        error.classList.add('active')
        error.innerHTML = "No drinks found"
    }
}

popupClose.onclick = () => {
    popupBg.classList.remove('active')
    popupWindow.classList.remove('active')
}

document.onclick = (e) => {
    if (e.target === popupBg){
        popupBg.classList.remove('active')
        popupWindow.classList.remove('active')
    }
}
