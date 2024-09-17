// query selector
let a=document.querySelector('.product-list');
console.log(a);
console.log(a.innerText);    //only text
console.log(a.innerHTML);  //text with code inside the product-list
console.log(a.textContent);   //only text
console.log(a.outerHTML);  //text/code from product-list
let content=document.querySelector('#product-1');
// console.log(content);

// create new element
let newpara=document.createElement('p');
// console.log(newpara);
content.appendChild(newpara);
// console.log(content);

//add text to the element
newpara.textContent="This is a new paragraph";

// insert adjacentHTML:
// -2 arguments
// -location (beforebegin,afterbegin,after end,before end)
// -text to be inserted
  
content.insertAdjacentElement('beforeEnd',newpara);

// remove child
// content.removeChild(newpara);   
console.log(content);

// CSS STYLING

  let p=document.querySelector('#product-1');
//  1.using .style-write properties in camelcase
  p.style.backgroundColor="orange";
  p.style.color='white';

//   2.using .cssText-write properties in css way
p.style.cssText="background-color:skyblue;color:blue";

// 3.using .setAttribute- write properties in css way 
// p.setAttribute("style","color:lightpink;backgroundColor:red;"); //error because of camelcase 
p.setAttribute("style", "color: black; background-color: lightpink;");

//to find classname
console.log(p.className);

// class-list 
console.log(p.classList);
 console.log(typeof(p.classList));
 // add class
 p.classList.add('product1');
 console.log(p.classList);
 p.classList.add('product1');
//  p.classList.toggle('vini');
//  console.log(p.classList);
//  p.classList.remove('vini');
//  console.log(p.classList);


