const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

ingredients.forEach(ingredient =>{
const itemEl = document.createElement('li');
itemEl.classList.add('item');
itemEl.textContent = ingredient;
console.log(itemEl);
const ingredientsList = document.querySelector('#ingredients');
ingredientsList.appendChild(itemEl);
}
)

