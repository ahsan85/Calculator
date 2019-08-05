// const myArrary=[

// {
//     name:"Ahsan Rasheed",
//     age: 27
// },

// {
//     name:"Imran Hameed",
//     age: 20
// },

// {
//     name:"Muhammad Shaeeq",
//     age: 30
// },

// {
//     name:"Waqas",
//     age: 27
// },

// ];

// const filter= myArrary.filter((item)=>item.name=="Muhammad");
// console.log(filter);
//---------------SPREAD OPR------------------------
// const myArray=[1,2,3,4,5,6];
// myArray.pop(0);
// const ourArray=[... myArray];
// ourArray.push(7,8);
// ourArray.unshift([0,-1]);

// console.log(ourArray);
//---------------REST OPR------------------------
// function multiply(mulitiplier,...arrayArg)
// {
//     return arrayArg.map((element)=>{return mulitiplier*element});

// }
// const arr=multiply(2,1,2,3,4);
// console.log(arr);
//---------------ES6: Use Destructuring Assignment to Assign Variables from Objects-----------------------
// var voxel={x:34.6 , y: 12.34, z: 36.12};
// const{x ,y,z}=voxel;
// console.log(x,"",y,z);\

//---------------ES6: Create Strings using Template Literals-----------------------
// var a=10;
// var b=5;
// // console.log(`result of a+b is ${a+b} not ${2*a+b}.`);
// function tag(strings,...values)
// {
//     console.log(strings);
//     console.log(values);
// return "Am Ahsan";
// }
// tag` Hello ${a+b} Wrold ${a*b}`;



function makeClass() {
    class Vegetable {
      constructor(name){
        this.name = name;
      }
    }
    return Vegetable;
  }
  const Vegetable = makeClass();
  const carrot = new Vegetable('carrot');
  console.log(carrot.name); 