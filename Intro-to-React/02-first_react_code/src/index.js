// first React app from Scratch

import React from "react"; // import react

import ReactDOM from "react-dom"; //import react dom

/* 
----------------------  Important Note -----------------------

name of fuction should start with capital letter 

here name of fuction is "App()" which is correct 

but if we name our fuction "app()" then it will generate error

*/


const App = () =>{   // fucntion containing Html code

 return <h1>Hello World !!!!</h1>;

}
ReactDOM.render(<App />, document.getElementById("root")); // display output