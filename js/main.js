// console.log("JS file connected meow")

const $bodyTag = document.querySelector('body')

const $newSection = document.createElement('section')
$newSection.id = "groceries"
// this creates a new section + a new id in the html technically within the javascript

$bodyTag.appendChild($newSection)

$newSection.insertAdjacentHTML('afterbegin', `<h2>Groceries</h2>`)
$newSection.insertAdjacentHTML('beforeend', `<ul id="grocery-list"></ul>`)

let $groceryItems = ['apples', 'bananas', 'dog food', 'grawpes', 'milk', 'eggs']
const $groceryUl = document.getElementById('grocery-list')

/* for ($item of $groceryItems){
    $groceryUl.insertAdjacentHTML('beforeend', `<li>${$item}</li>`)
} */

/* $groceryItems.forEach(function ($item){
     $groceryUl.insertAdjacentHTML('beforeend', `<li>${$item}</li>`)
}) */


// $groceryItems.forEach($item => $groceryUl.insertAdjacentHTML('beforeend', `<li>${$item}</li>`))

let $listItems = []
$groceryItems.forEach($item => $listItems.push(`<li>${$item}</li>`))
$groceryUl.insertAdjacentHTML('beforeend', $listItems.join(''))
// create function, get list, then display new items on list
function addItem(item){
    // add item to grocery list array 
    $groceryItems.push(item)

    // display new item on the page
    $groceryUl.insertAdjacentHTML('afterbegin',`<li>${item}</li>`)
}

// add a remove item function that accepts the item to be removed as  parameter
function removeItem(thing){
// filter the array based on the item
   $groceryItems = $groceryItems.filter(item => item !== thing)
//  display the filtered array on the page
// map each item of the $groceryItems array inside $listItems array by adding the HTML template 
    $listItems = $groceryItems.map(item => `<li>${item}</li>`)

    // cleaning the Ul to remove items
    $groceryUl.innerHTML = ''
    $groceryUl.insertAdjacentHTML('beforeend', $listItems.join(''))
    
}


