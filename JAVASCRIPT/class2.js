// if any function is used inside an object then it is called method 

// object created
// let rectangle = {
//     length: 1,
//     breadth: 2,
//     draw: function () {
//         console.log('drawing rectangle');
//     }
// };

let x = {};  //empty object

// FACTORY FUNCTION-objects are created and returned in the same function
// function createRectangle(l, b) {
//     let rectangle = {
//         length: l,
//         breadth: b,
//         draw: function () {
//             console.log('drawing rectangle');
//         }
//     };
//     return rectangle;
// }
// let rect_obj = createRectangle(5, 4);
// let rect_obj2 = createRectangle(8, 9);
// let rect_obj3 = createRectangle(13, 15);

// CONSTRUCTOR FUNCTION-used to initialise method/properties
// pascal notation;first letter of every word is capital
// this->current object 
// function Rectangle(){
//     this.length=3;
//     this.breadth=9;
//     this.draw=function(){
//         console.log("draw rectangle");
//     }
// }
// let rectangle_ob=new Rectangle();
// by passing values 

function Rectangle(len, bre) {
    this.length = len;
    this.breadth = bre;
    this.draw = function () {  
        console.log("draw rectangle");
    }
}
let rectangle_ob = new Rectangle(5, 6);
// add using object 
rectangle_ob.color = "aqua";
console.log(rectangle_ob);

// dynamically delete using object
// delete rectangle_ob.color; 

// rectangle_ob.constructor -Rectangle full code 
// Rectangle.constructor-f function():since every function is an object so for Rectangle, function will be its constructor 

// let {objname}=new constructorfunction 
// IMP:fUNCTIONS ARE OBJECTS IN JS 

// difference between primitive and reference: in primitive copy is created whereas in reference type it points to the same memory location

// NOTE:PRIMITVES ARE COPIED BY THEIR VALUES 
// REFERENCES ARE COPIED BY THEIR ADDRESS
let a={value:19}
let b=a;
a.value++;
console.log(a.value); 
console.log(b.value);

let y=24;
function inc(y){
    y++;
}
inc(y);
console.log(y);   //output:24

let z={val:24};
function inc(z){
    z.val++;
}
inc(z);
console.log(z.val);

//  FOR-IN AND FOR-OF LOOPS- used to iterate over different aspects of objects and iterables
let rectangle={
    length:20,
    breadth:45
};
for(key in rectangle)
{
    console.log(key,rectangle[key])
}
 
for(let key of Object.entries(rectangle)){
    console.log(key)
}
// to find if any property exist in the object or not
// if('color' in rectangle){
//     console.log('present');
// }
// else{
//     console.log('Absent');
// }

// OBJECT CLONING -Iteration,assign,spread




