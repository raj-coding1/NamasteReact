// console.log('i am at the js file');
// we know to create a html element using react we need to use
// react.createElement()
let box=React.createElement('div',{'id':"container"},
    React.createElement('h1',{},"i am heading 1")

)
// console.log(box);
let root=ReactDOM.createRoot(document.querySelector("#con"))
root.render(box)
   
