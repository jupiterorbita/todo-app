console.log('%c todo app ', 'background: #222; color: #bada55')
// --------------------------------------------------------------
const todos = [{
    text: 'order cat food',
    completed: false
}, {
    text: 'clean kitchen',
    completed: true
}, {
    text: 'buy food',
    completed: true
}, {
    text: 'do work',
    completed: false
}, {
    text: 'excersise',
    completed: true
}]
console.log(' --- todos ---\n', JSON.stringify(todos))

// how many todos do i have?
const incompleteTodos = todos.filter(function (todo) {
    return !todo.completed
}) 
const summary = document.createElement('h2')
summary.textContent = `You have ${incompleteTodos.length} todos left`
document.querySelector('body').appendChild(summary)

// add a p for each todo above 
todos.forEach(function (todo, index) {
    const p = document.createElement('p')
    p.textContent = todo.text;
    document.querySelector('body').appendChild(p)
})

// button - listen for new todo creation
document.querySelector('button#add-todo').addEventListener('click', function (e) {
    console.log('button clicked - Add a new todo')
})


// // ALT myWAY: You have 2 todos left (p element)
// let count = 0;
// todos.forEach(function(todo, index) {
//     if (!todo.completed) {
//         count++
//     } 
//     // return count;
// })
// console.log(`You have ${count} todos left`)
// const newTodoP = document.createElement('p')
// newTodoP.textContent = `You have ${count} todos left`
// document.querySelector('body').appendChild(newTodoP)

// const paragraphs = document.querySelectorAll('p')
// console.log(paragraphs)
// paragraphs.forEach(function(paragraph, index) {
//     console.log(paragraph)
//     if (paragraph.textContent.toLowerCase().includes('the')) {
//         paragraph.remove()
//     }
// })
