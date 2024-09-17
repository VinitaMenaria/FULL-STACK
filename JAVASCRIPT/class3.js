let lastName='Menaria';
lastName.length //'.' operator works as  an object

let firstName=new String('vinita');
console.log(typeof(lastName))
console.log(typeof(firstName))
console.log(lastName.length)
console.log(lastName[2])
console.log(lastName.includes('ri'))
console.log(lastName.startsWith('ria'))
console.log(lastName.startsWith('Men'))
console.log(lastName.endsWith('ria'))
// indexof,touppercase,tolowercase,trim,replace etc..

//SPLIT
let message='This is my first line';
let words=message.split(' ');
console.log(words)
 //replace
console.log(message.replace('This is my first line','This is my first message'))
 
// TEMPLATE-LITERAL -Use backtick(``)
let message2=`Hello everyone 
welcome to the
 vs code`;
 console.log(message2)

 //using variable(use $ sign and {}) and backtick 
let firstname='vinita';
 let message3=`Hello ${firstname}
welcome to the
 vs code`;
 console.log(message3)

//  DATE 
let date=new Date();
console.log(date);

let date2=new Date('4 OCT 2004 7:15 PM' );
// date2.setFullYear(1950);
console.log(date2)
console.log(date2.getMonth())  //OCT-9
console.log(date2.getDate()) 
console.log(date2.getDay())  //MON-1

// ARRAYS
// inserting elements 
let ele=[1,4,5,6];
// console.log(ele);
ele.push(24);   //add element at the end
console.log(ele);
ele.unshift(8); //add element at the start
console.log(ele);
ele.splice(2,3,'a','b');   // add elemnts in the middle(index,countele_remove,addelements)
console.log(ele);

// searching on primitives
console.log(ele.indexOf('b'));
console.log(ele.indexOf(10));  //no element= -1

//if num exist in array or not
console.log(ele.includes('b'));  //output:true
console.log(ele.includes(98));    //output:false
console.log(ele.indexOf('a',3));
console.log(ele.indexOf('a',1 ));    //(elementto search,index form where searching starts)

// searching on references
let courses=[
    {no:1,name:'vinita'},
    {no:2,name:'shikha'}
];
//  console.log( courses);
//  console.log(courses.indexOf( {no:1,name:'vinita'}))  //output:-1  since this methods can be used only for primitives

//  for searching of objects in references we use callback functions and find method
// syntax:  arrayname.find(callbackfunction/predicate function)
let c =courses.find(function(c){
return c.name=='vinita';
})
   console.log(c)  

//    ARROW FUNCTION
let c1=courses.find(c1=>c1.name=='shikha');
console.log(c1)

// removing element
let arr=[1,2,3,4,5,6,7,8];
console.log(arr);
arr.pop(); //removing from end
console.log(arr); 
arr.shift()    //removing from beginning
console.log(arr); 
arr.splice(2,2);   //splice(index,no.of ele to delete)
console.log(arr); //removing from middle

// EMPTYING AN ARRAY 
// method1:num=[] does not delete all array consisiting of num
// mehtod2:num.length=0
// method3:num.splice(0,num.length)

let num=[1,2,3,4,5,57,87,6,546,45,5,65,7];
let num2=num;
// num=[];
 num.length=0;  //num2 array is deleted
console.log(num);
console.log(num2); //not deleted since object copy addresses not values

let n1=[1,2,4,5,6];
let n2=n1;
 n1.splice(0,n1.length); // n1 and n2 both are deleted
console.log(n1);
console.log(n2);

//   COMBINING AND SLICING ARRAY  on primitves

// METHOD1:concat
let a=[1,2,3];
let b=[4,5,6];
let combine=a.concat(b);
console.log(combine);
 let slicing=combine.slice(0,3); //last index is excluded  slice(startindex,endindex)
 let sliced=combine.slice(1);  //all values will be printed from given index
 
 console.log(slicing);
 console.log(sliced );
 

//  METHOD2:spreadoperator(...)
let d=['a','b','c'];
let e=['d','e','f'];
let combined=[...d,1,...e,45];
console.log(combined);
//to create copy
let another=[...combined];
console.log(another);

 let arr1=[10,20,30,40,50];
//  for(let value of arr1 )   //for-of loop
//  {
//     console.log(value);
//  }
//  arr1.forEach(function(n){
//     console.log(n);             //for each loop
//  }); 
 arr1.forEach(n=>console.log(n))
 
//  JOINING ARRAY
let m=[10,20,30];
// const  joined=m.join(',') ; 
// console.log(joined);

// split method
let m1='This is a para';
let parts=m1.split(' ');
console.log(parts);
let joined =parts.join(' ');
console.log(joined);

let m2=[3,5,7,2,1,98,54];  //sorting alphabetically
let sorted=m2.sort();
console.log(sorted);
 
// FILTERING ARRAY 
let m3=[1,4,6,-3,-5,-7];
let positive=m3.filter(n=>n>0);
console.log(positive);
let negative=m3.filter(m=>m<0);
console.log(negative);

// MAPPING-MAPS EACH ELEMENT OF ARRAY TO SOMETHING ELSE
let m4=[1,2,3,4];
let maps=m4.map(n=>'student_id '+n);
console.log(maps);

// MAPPING WITH OBJECTS
let values=[1,2,3,-4,56,-76,-7];
let  filtered=values.filter(val=>val>0);
let items=filtered.map(n=>({val:n}));
console.log(items);

