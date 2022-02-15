// map vs forEach

const arr = [2,5,3,4,7];

const mapResult = arr.map((ar)=>{
    return ar + 2;
});

const forEachResult = arr.forEach((ar,i)=>{
    arr[i]= ar + 5;
});

console.log(mapResult);
console.log(arr);

// null vs undefined

console.log(typeof(null));
console.log(typeof(undefined));

console.log(null==undefined);
console.log(null===undefined);

//event delegation

document.querySelector('#products').addEventListener('click',(event)=>{
   console.log(event);

   if (event.target.tagName==='LI'){
       window.location.href += '#'+ event.target.id;
   }
})

// flatten the array

let farr = [
    [1,2],
    [3,4],
    [5,6,7,8,9],
    [10,11,12]
]

let flattened = [].concat(...farr);

console.log(flattened);

console.log(farr.flat());

// let vs var vs const

// setTimeout

function a(){
    for (let i=0;i<3;i++){
        setTimeout(function log(){
            console.log(i);
        },i*1000)
    }
}

a();

// call apply bind

var person = {
    name:"Abhishek",
    hello: function (thing){
        console.log(this.name + " says hello " + thing);
    }
}

var nick = {
    name:"Abhi",
};

person.hello.call(nick ,"world")