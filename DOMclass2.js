// BROWSER EVENTS 
// monitorEvents(document); -write this command on console and click on the html file
// to turnoff-unmonitorEvents();
//  EventTarget-interface implemented by object that can receive events and may have listeners for them
// 1.addEventlistener()
// 2.removeEventListener()
// 3.dispatchEvent()

// PSEUDO CODE 
/* <EventTarget>.addEventlistener(eventtolisten for,function to run when event happened) */

// 1.event target-doc,div,p,article,vedio
// 2.event type-click,scroll,double click
// 3.function -what to do when event happened

// ADD EVENT LISTENER 
//  document.addEventListener('click', function () {
//     console.log("i clicked on it");
// });
// console.log(a);

let content = document.querySelector('h1');
content.addEventListener('click', function () {
    content.style.cssText = "background-color:royalblue;color:skyblue;";
});

let content2 = document.querySelectorAll('h2');
content2.forEach(function (h2) {
    h2.addEventListener('click', function () {
        content2.forEach(function (ele) {
            ele.style.cssText = "background-color:aqua; color:blue";
        });
    });

});

let content3 = document.querySelector('#event-box');
content3.addEventListener('click', function () {
    content3.style.cssText = "background-color:aquamarine;";
});

// let content4=document.querySelector('p');
// content4.addEventListener('click',function(){
//     content4.style.backgroundColor="pink";
//     content4.style.color="hotpink";
// });


// REMOVE EVENT LISTENER- same type,same event target,same function
let content4=document.querySelector('p');
function print(){
    content4.style.backgroundColor="pink";
    content4.style.color="hotpink";
}
content4.addEventListener('click',print);
content4.removeEventListener('click',print);

// DISPATCH EVENT 
     // Select the button element
     const button = document.getElementById('myButton');

     // Create a custom event
     const myEvent = new Event('myCustomEvent');

     // Add an event listener for the custom event
     button.addEventListener('myCustomEvent', () => {
         alert('Custom event has been triggered!');
     });

     // Trigger custom event when button is clicked
     button.addEventListener('click', () => {
         button.dispatchEvent(myEvent); // Dispatches the custom event
     });


// PHASES OF AN EVENT 
// 1.CAPTURING PHASE
// 2.AT TARGET PHASE
// 3.BUBBLING PHASE


// the event object 
let c=document.querySelector('#other-events-section');
 c.addEventListener('click',function(event){
    console.log(event);
 });

//  the default action
//   1.prevent default 

let inputs=document.querySelectorAll
('input');
console.log(inputs);
thirdinput=inputs[2];
console.log(thirdinput);
thirdinput.addEventListener('click',function(event){
event.preventDefault();   //camelCase
console.log('GOOD JOB!');
});

let mydiv=document.createElement('div');
// for(let i=0;i<10;i++)
// {
//     let newpara=document.createElement('p');
//     newpara.textContent="This is para "+i;
//     newpara.addEventListener('click',function(event){
//         event.style.color='blue';
//     });
//     mydiv.appendChild(newpara);
// }
// document.body.appendChild(mydiv);
function paraStatus(event){
    event.target.style.color='blue';
    console.log(event.target.textContent);
};
mydiv.addEventListener('click',paraStatus); 
for(let i=0;i<10;i++)
    {
        let newpara=document.createElement('p');
        newpara.textContent="This is para "+i;
        mydiv.appendChild(newpara);
    }
    document.body.appendChild(mydiv);
   
    // let ele=document.querySelector('#input-section');
    // ele.addEventListener('click',function(event){
    //     console.log('span p click'+event.target);
    // }); //output:span p ya heading p ya section p khi bhi click krne p yeh event chl rha h toh usko rokne k liye nodename propety use krni h

    //nodename-elements name in upper case 
    let ele=document.querySelector('#input-section');
    ele.addEventListener('click',function(event){
        if(event.target.nodeName=='SPAN')
        console.log('span p click'+event.target.textContent);
    });    //click on heading written in span tag in input events then only this will be printed since we have used nodename property

    