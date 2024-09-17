// HOISTING-process of moving all the function declaration to the top of the file 
// function declaration  
function run(){
    console.log('running');
}  
run();

// named function assignment
let s=function walk(){
    console.log('walking');
}
// s();
// walk(); error 
let jump=s;
jump();
// anonymous function assignment

let s2=function (){
    console.log('hello');
}
s2(); 

// hoisting can be done only in function declaration i.e we can call function above or below the function declaration whereas in  function assignment we can only call function after declaration 

function sum(a,b){
    return a+b;
}
console.log(sum(6,3)); //9
console.log(sum(3)); //nan
 
// add dynamically
function add(a,b){
    let total=0;
    for(let value of arguments)
        total=total+value;
      return total;
}
console.log(add(2,5,6,7,9));

// rest opertor(...)
function  values(a,b,...args){
    console.log(args);
}
values(3,5,6,12,45,5,3,6);   //value of 3,5 will be stored in a,b.
 
// default parameter 
function interest(p,r=6,t=4 ){
    return p*r*t/100;
}
console.log(interest(100,5))  //5 will override default value of r

let person={
    fname:'vinita', 
    lname:'menaria',
    get fullname(){
        return `${person.fname}   ${person.lname}`;
    },
    set fullname(value){
        let parts=value.split(' ');
        this.fname=parts[0];
        this.lname=parts[1];
    }
};
 person.fullname='Shikha Joshi';
console.log(person.fullname); 

// function fullname(){
//     return `${person.fname}   ${person.lname}`
// }
// console.log(fullname());

// ERROR HANDLING
// let p={
//     fname:'vinita', 
//     lname:'menaria',
//     get fullname(){
//         return `${this.fname}   ${this.lname}`;
//     },
//     set fullname(value){
//         if(typeof value!==String){
//             throw new Error("You have not sent a string");
//         }
//         let parts=value.split(' ');
//         this.fname=parts[0];
//         this.lname=parts[1];
//     }
// };
//  try{
//     p.fullname=true;    //alert will be shown at console
//  }
//  catch(e){
//     alert(e);
//  }
  
// SCOPE:let is used inside the nearest code blocks whereas var is used within the function if not declared inside the function then accesible for whole file 

{
    let x=10;
    console.log(x);    //output:10
}
//   console.log(x);  //error because let keyword is accesible inside the block where variable is defined

{
    var y=20;
    console.log(y)    //output:20
}
console.log(y)    //output:20  since var is accesible in the file

function hello(){
    var z=50;
}
// console.log(z);  //error bcoz if varibale is declared inside the function it cannot be accesed outside the function 

// for(let i=0;i<10;i++)
// {
    
// }
// console.log(i);  //error

for(var i=0;i<10;i++)
    {

    }
    console.log(i); //output:10

    // if(true){
    //     let a=2;
    // }
    // console.log(a);  //error
    
    if(true){
        var a=2;
    }
    console.log(a);  //output:2

    function a(){
        const h=8;
    }
    function b(){
        const h=8;
    }
    
    // REDUCING AN ARRAY 
    //  let arr=[1,2,3,4,5];
    //  let total=0;
    //  for (let value in arr){
    //     total+=value;
    //  }  
    //  console.log(total); //output:001234 because for-in loop is  used 
     let arr1=[1,2,3,4,5];
     let total1=0;
     for (let value of arr1){
        total1+=value;
     }
     console.log(total1);  //output:15 since for-of loop is used for iterables

// REDUCE METHOD 
let totalSum= arr1.reduce((accumulator,currentvalue)=>accumulator+currentvalue,0);
console.log(totalSum);  //output:15


