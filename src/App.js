// using Dom API  add html element

// create element
let element = document.createElement("h1");
//set attributes
element.setAttribute("someRef");
// add some content.
element.createTextNode("HaHaHaHaaaaaaaaaaaaaaaaaaaaaaaaaa Keep Smiling ");
// Now we need to append this h1 node to root node.
//get root and append
const rootElement  = document.getElementById("root");
rootElement.append(element);
