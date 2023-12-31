const heading = React.createElement("h1", {
    id: "heading", xyz: "abc"
}, "Hello from React");


// const parent = React.createElement("div", {id: "parent"}, React.createElement("div", {id: "child"}, React.createElement("h1", {}, "I'm H1 tag in nested divs")));

const parent = React.createElement("div", {id: "parent"}, 
[React.createElement("div", {id: "child"}, [ 
    React.createElement("h1", {}, "I'm H1 tag in nested divs"),
    React.createElement("h2", {}, "I'm H2 tag in nested divs"),
    React.createElement("h3", {}, "I'm H3 tag in nested divs")
]),
React.createElement("div", {id: "child1"}, [
    React.createElement("h1", {}, "I'm H1 tag in nested divs"),
    React.createElement("h2", {}, "I'm H2 tag in nested divs"),
    React.createElement("h3", {}, "I'm H3 tag in nested divs")
])
]);

// JSX

// console.log(heading);
console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
        
// root.render(heading);
root.render(parent);

