const todosContainer = document.getElementById("todos-container");
const btnCompleted = document.getElementById("completed");
const btnNotCompleted = document.getElementById("not-completed");

let todos = [];
// let xmlHttp = new XMLHttpRequest();
// xmlHttp.open("GET", "https://jsonplaceholder.typicode.com/todos");
// xmlHttp.send()
// xmlHttp.onload = function () {
//     let data = JSON.parse(xmlHttp.responseText);
//     renderElements(data)
// }





// let todosPromise = new Promise(function (resolve, reject){
//     let xmlHttp = new XMLHttpRequest();
//     xmlHttp.open("GET", "https://jsonplaceholder.typicode.com/todos");
//     xmlHttp.send()
//     xmlHttp.onload = function () {
//     let data = JSON.parse(xmlHttp.responseText);
//     resolve(data)
//     reject("error")
// };
// });


// todosPromise.then(res =>{
//     renderElements(res);
// })

// let data = fetch("https://jsonplaceholder.typicode.com/todos")
// data.then((res) =>{
//   return res.json()
// }).then((data) =>{
//     renderElements(data)
// })


async function getTodos() {
    let data = await fetch("https://jsonplaceholder.typicode.com/todos")
    data = await data.json()
    todos = data;
    renderElements(data)
}

getTodos()

renderElements = (data) =>{
    data = data.map(function ({title, completed}){
        return`
        <div class="col-12">
          <div class="card my-3">
            <div class="card-header">${completed ? 'completed' : 'not completed'}</div>
            <div class="card-body">
              <h5 class="card-title">${title}</h5>
            </div>
          </div>
        </div>
        `
    })
    todosContainer.innerHTML = data.join("");
}


btnCompleted.addEventListener("click", () =>{
    let newTodos = todos.filter(element =>{
        return element.completed 
    });
    renderElements(newTodos)
});

btnNotCompleted.addEventListener("click", () =>{
    let newTodos = todos.filter(element =>{
        return !element.completed
    })
    renderElements(newTodos)
})