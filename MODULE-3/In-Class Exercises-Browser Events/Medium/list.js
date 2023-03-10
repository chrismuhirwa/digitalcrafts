const form = document.getElementById('newItem')
const list = document.getElementById('shoppingList')
const input = document.getElementById('item')

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const newItem = document.createElement('li')
    newItem.innerText = item.value;
    list.append(newItem);
    form.reset();
})