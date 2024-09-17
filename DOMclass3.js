//  performance.now()-returns the current time in milliseconds 
const t1=performance.now();
for(let i=0;i<100;i++){
    let newele=document.createElement('p');
    newele.textContent='This is paragraph'+i; 
    document.body.appendChild(newele);
}
const t2=performance.now();
console.log('time taken'+(t2-t1)+'ms') ;

// reflow-when the layout of the webpage needs to be recalculated.

//repaint-occurs when changes are made to the visual appearance of an element

// DOCUMENT FRAGMENT 
// document fragment is a lightweight version of a document object

let fragment=document.createDocumentFragment();
for(let i=0;i<100;i++){
let ele=document.createElement('p');
ele.textContent='This is paragraph'+i;
fragment.appendChild(ele);                         
}
document.body.appendChild(fragment);

// CALL STACK 
// call stack is a mechanism for an interpreter to keep track of its position in a program's source
//  js is a single threaded language-one command at a time 
function addpara(){
    newpara=document.createElement('p');
    newpara.textContent='This is paragraph';
}   //second
function addelement(){
    para2=document.createElement('p');
    newpara.textContent='This is paragraph';
} //fourth
addpara();  //first
addelement(); //third

//  EVENT LOOP 
// SYNCHRONOUS-occuring at the same time

 document.addEventListener('click',function(){
    console.log('button clicked');
 });   //asynchronous function
//  queue async code ko tb tak execute nhi krwayega jb tk call stack empty nhi ho jaata 
//  async code ko execute krne ke liye event loop ka use hota hai

//  SET TIMEOUT FUNCTION (function,time in ms)

//  setTimeout function is used to execute a function after a specified time period

// setTimeout(function(){
//     console.log("hello everyone");
// },5000);    // this function will execute after 5 sec
 
setTimeout(function(){
    console.log("hello everyone");
},0);   // Even though the delay is set to 0ms, the callback will not execute immediately. Instead, it waits until the current call stack is empty, then gets picked up by the event loop.

 console.log("Hi");
 setTimeout (function(){
    console.log('This is a  set timeout function')
 },5000);
 console.log('The end');

