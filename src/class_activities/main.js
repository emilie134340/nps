import {getRecipes} from "./recipe.mjs";
const cookieData = getRecipes();

console.log(cookieData);

function setCookieInfo(data){
    console.log(data);
    const container = document.querySelector('.recipes');
    // multiple items in an array to loop through all of them we use the .map() method.
    // you can only use .map() when you're going through an array
    const html = data.map(recipeTemplate);
    container.innerHTML = html.join(''); // this just gets rid of the comma
}

function recipeTemplate(info) {
    return `
    <div class="recipe">
    <h2>${info.recipe_name}</h2>
    <img src="${info.image}" alt="${info.notes}"/>
    `
}

function getType(data) {
   const tradContainer = document.querySelector('.traditional');
   const trad = data.find((data)=> data.type === 'traditional');
   tradContainer.innerHTML = trad.recipe_name;
}

setCookieInfo(cookieData);
getType(cookieData);