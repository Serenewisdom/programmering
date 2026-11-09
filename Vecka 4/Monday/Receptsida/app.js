//mock-data
const recipes = [
    {id: 1, name: 'Krämig pasta', category: 'Vegetariskt', price: '' , icon: '', indredients: 'Pasta'},
    {id: 2, name: 'Tacos', category: 'Kött', price: '', icon: '', indredients: ''},
    {id: 3, name: 'Lax med potatis', category: 'Fisk', price: '', icon: '', indredients: 'Lax'},
    {id: 4, name: 'Linssoppa', category: 'Vegetariskt', price: '', icon: '', indredients: 'Röda linser'}
]

let currentPortions = 2;

const recipeContainer = document.getElementById("recipe-container")
const filterCategory = document.getElementById("filter-category")
const recipeCount = document.getElementById("recipe-count")
const portionCountSpan = document.getAnimations("portion-count")
const btnPlus =
const btnMinus =
const addRecipeForm =

//Flytta filtreringsfunktion hit när den är klar
const updateList = () => {
    let result = [...recipes]

    result = result.filter(recipe => {
        if (filterCategory.value === recipe.category) || filterCategory.value === 'Alla' {
            return true
        }
    })

    render(result);

}

//Det som ska ritas ut
const render = result => {

    recipeContainer.innerHTML = '';

    let result = [...recipes]

    result.forEach(recipe => {
        const card = document.createElement('div')
        card.className = 'recipe-card'

        const totalPrice = recipe.price * currentPortions

        card.innerHTML = `Kopiera in en massa här`

        recipeContainer.appendChild(card)
    })
}

filterCategory.addEventListener('change', updateList())

/* Kopiera och flytta upp när den är klar () => {
    let result = [...recipes]

    result = result.filter(recipe => {
        if (filterCategory.value === recipe.category) || filterCategory.value === 'Alla' {
            return true
        }
    })
}) */

btnPlus.addEventListener('click', () => {
    currentPortions++
    portionCountSpan.textContent = currentPortions;
    updateList();
})

btnMinus.addEventListener('click', () => {
    if (currentPortions > 0){
    currentPortions--
    portionCountSpan.textContent = currentPortions;
    updateList();
}
})

//Se till att submit finns på rätt knapp
addRecipeForm.addEventListener('submit', (e) => {
    e.preventDefault()

})

render(recipes);