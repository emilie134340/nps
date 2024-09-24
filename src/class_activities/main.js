import {getRecipes} from "./recipe.mjs";
const cookieData = getRecipes();

console.log(cookieData);

function setCookieInfo(data){
    console.log(data);
    const container = document.querySelector('.recipes');
    // multiple items in an array to loop through all of them we use the .map() method.
    // you can only use .map() when you're going through an array
    const html = data.recipes.map(recipeTemplate);
    container.innerHTML = html.join('');
}

function recipeTemplate(info) {
    return `
    <div class="recipe">
    <h2>${info.recipe_name}</h2>
    <img src="${info.image}" alt="${info.notes}"/>
    `
}

setCookieInfo(cookieData);

// function getType(data) {
//    const tradContainer = document.querySelector('.traditional');
//    const trad = data.recipes.find((data)=> data.type === 'traditional');
//    tradContainer.innerHTML = trad.type;
// }

// getType(cookieData);