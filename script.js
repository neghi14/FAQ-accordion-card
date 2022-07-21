//Order of code steps
//1. Grab our items
const items = [...document.querySelectorAll('li.faq__faq-item')]
//2. Add event listeners to our items that handle an item click.
//3. handleItemClick function -> 
//3.1 Grab the clicked item
//3.2 Grab the itemDetail as we need to add maxHeight
//3.3 Check if item has .active class
//3.4 If it does, remove the maxHeight and remove the .active class
//3.5 If it doesn't, add the maxHeight and add the .active class

const clearItem = (itemDetail) => {
    itemDetail.style.maxHeight = null
}

const activateItem = (itemDetail) => {
    const scrollHeight = itemDetail.scrollHeight
    itemDetail.style.maxHeight = `${scrollHeight}px`
}

const handleItemClick = (e) => {
    const clickedItem = e.target.closest('li')
    const itemDetail = clickedItem.querySelector('.faq-item__detail')
    const clickedItemActive = clickedItem.classList.contains('active')
    clickedItem.classList.toggle('active')
    if (clickedItemActive) {
        clearItem(itemDetail)
    } else {
        activateItem(itemDetail)
    }
};

const addListenersToItems = (array, callback) => {
    array.forEach(item => {
        item.addEventListener('click', (e) => {
            callback(e)
        })
    })
};


addListenersToItems(items, handleItemClick)

items[0].click()






//Order of code steps
//1. Grab our items
// const items = [...document.querySelectorAll('li.faq__faq-item')]
//2. Add event listeners to our items that handle an item click.
//3. handleItemClick function -> 
//3.1 Grab the clicked item
//3.2 Grab the itemDetail as we need to add maxHeight
//3.3 Check if item has .active class
//3.4 If it does, remove the maxHeight and remove the .active class
//3.5 If it doesn't, add the maxHeight and add the .active class

// items.forEach(item => {
//     item.addEventListener('click', (e) => {
//         const clickedItem = e.target.closest('li')
//         const itemDetail = clickedItem.querySelector('.faq-item__detail')
//         const clickedItemActive = clickedItem.classList.contains('active')
//         clickedItem.classList.toggle('active')
//         if (clickedItemActive) {
//             itemDetail.style.maxHeight = null
//         } else {
//             const scrollHeight = itemDetail.scrollHeight
//             itemDetail.style.maxHeight = `${scrollHeight}px`
//         }
//     })
// })