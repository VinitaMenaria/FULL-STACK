setTimeout(function () {
    console.log('third');
},3000)  //async code
function sync() {
    console.log('first');
}
sync();
console.log('second');

// PROMISES-execute something parallely in background

let mypromise=new Promise(function(resolve,reject){
setTimeout(function(){
    console.log('I m inside promise');
},5000);
// resolve(2334);
// reject(new Error('error aaya h'))
});
console.log('pehla');
//mypromise
 mypromise.then((value)=>{
    console.log(value)
 });
 mypromise.catch((error)=>{
    console.log(" received an Error")
 });
 
  let p1=new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log('set timeout 1 started')
  },2000);
  resolve(true);
  });

  let output=p1.then(()=>{
    let p2= new Promise((resolve, reject) =>{
        setTimeout(()=>{
            console.log('set timeout 2 started')
        },3000);
        resolve('promise 2 resolved');
    }) 
    return p2;
  });
output.then((value)=>{ 
    console.log(value);
}); 

// alternative for then method 
// ASYNC AWAIT -special function used to work with promises

// async function a() {
//     return 4;
// }
// console.log(a()); 
async  function  mausam(){
let delhiMausam= new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Delhi mein garmi")
    }, 3000);
});
let rajMausam= new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("rajasthan mein garmi")
    }, 5000);
});
let dm= await delhiMausam;
let rm= await rajMausam;
return [dm,rm];
}
console.log(mausam());

// FETCH API 
async function a(){
 let content=await  fetch('https://jsonplaceholder.typicode.com/posts');
 let data=await content.json();
 console.log(data);
}
a();
 
//  CLOSURES 
function init(){
   var name='muskan'; //local variable created by init
    function display(){  //inner function that forms the closure
        console.log(name);  //use var declared to the parent function
    }
    return display;
}  
const myfunc=init();
myfunc(); 

function outer() {
    let a = 3;
    console.log(a);  

    function inner1() {
        let a = 6;
        console.log(a);  

        function inner2() {
            let a = 5;
            console.log(a);  

            function inner3() {
                let a = 9;
                console.log(a);  
            }
            inner3(); 
        }
        inner2();  
    }
    inner1(); 
} 
outer();  

