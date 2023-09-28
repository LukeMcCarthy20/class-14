'use strict';
console.log('Js Working...');


let allPizzas = [];

let pizzaForm = document.getElementById('pizzaform');

let pizzaList = document.getElementById('pizzaList');

console.log(allPizzas, pizzaForm, pizzaList);


function Pizza(pizzaType) {
  this.pizzaType = pizzaType;

  this.render = function () {
    const listItem = document.createElement('li');

    listItem.textContent = this.pizzatype;
    pizzaList.appendChild(listItem);
  },

  allPizzas.push(this);
}

//form handle Pizza event


function handlePizzaSubmit(event){
  event.preventDefault();

  console.log('working submit');
}