// // =====Comment Your JavaScript Code===
// //var myVar=10;              (single line)
// /*var myVar1=2;
// var myVar2=12;               (multi-line)
// var myVar3=21;*/


// // =======  Declare JavaScript Variables =====
// var myAge=19;
// console.log(myAge);


// // ===== Add/Sub/Mul/Div Two Numbers with JavaScript ====
// var num1,num2;
// num1=10;
// num2=5;
// console.log(`Addition of ${num1} and ${num2}=${num1+num2}`);
// console.log(`Subtraction of ${num1} and ${num2}=${num1-num2}`);
// console.log(`Multiplication of ${num1} and ${num2}=${num1*num2}`);
// console.log(`Division of ${num1} and ${num2}=${num1/num2}`);


// // ===== Increment/Decrement a Number with JavaScript ====
// var myVar=1;
// console.log(`Before increment ${myVar} `);
// console.log(`After increment ${++myVar} `);
// console.log(`After decrement ${--myVar} `);

// // =====  Declare String Variables ====
// var myString="Hi, i'm Muhammad Ahsan";
// console.log(myString);

// // =====  Escaping Literal Quotes in Strings ====
// var myString="Hi, i'm Muhammad Ahsan and this is \"Free Codecamp\"";
// console.log(myString);

// // =====  Quoting Strings with Single Quotes ====
// var myString="Hi, i'm Muhammad Ahsan and this is \'Free Codecamp\'";
// console.log(myString);


// // =====  Concatenating Strings with Plus Operator====
// var firstName="Muhammad Ahsan";
// var lastName="Rasheed";
// var fullName=firstName+" "+lastName;
// console.log(`Hi, my name is ${fullName}`);

// // ===== Concatenating Strings with the Plus Equals Operator====
// var Name="Muhammad Ahsan";
// Name+=" "+"Rasheed";
// console.log(`Hi, my name is ${Name}`);

// // ===== Find the Length of a String====
// var Name="Muhammad Ahsan";
// Name+=" "+"Rasheed";
// console.log(`Hi, ${Name} the length of your name is ${Name.length}`);

// // ===== Use Bracket Notation to Find the First Character in a String====
// var Name="Muhammad Ahsan";
// Name+=" "+"Rasheed";
// console.log(`Hi, ${Name} the length of your name is ${Name.length} and 7th character of of your name is ${Name[9]}`);

// // ===== Word Blanks====
// function wordblanks(myNoun,myAdj,verb)
// { 
// var ret;
// ret=myNoun+" is very "+myAdj+" and he "+verb+" to school daily";
// return ret;
// }
// var myVar=wordblanks("Ahsan","Beautifull","goes");
// console.log(myVar);

// // ===== Store Multiple Values in one Variable using JavaScript Arrays====
// var myArray=["Ahsan","Imran","Ali","Naveed"];
// for(var i=0; i<4; i++)
// {
//  console.log(myArray[i]);
// }

// // ===== Nest one Array within Another Array====
// var myArray=[["Ahsan",18],["Imran",19],["Ali",12],"Naveed"];
// for(var i=0; i<4; i++)
// {
//  console.log(myArray[i]);
// }


// // ===== Nest one Array within Another Array====
// var myArray=[["Ahsan",18],["Imran",19],["Ali",12],"Naveed"];
// console.log(`before modification :${myArray[0]}`);
// myArray[0]=["Waseem",18];
// console.log(`after modification :${myArray[0]}`);
// for(var i=0; i<4; i++)
// {
//  console.log(`Now whole Array ${myArray[i]}`);
// }


// // ===== Basic JavaScript: Access Multi-Dimensional Arrays With Indexes====
// // in this program we`ll only access name from array
// var myArray=[["Ahsan",18],["Imran",19],["Ali",12]];
// for(var i=0; i<3; i++)
// {
//  console.log(`first[0] value of each 2D array: ${myArray[i][0]}`);
// }



// // ===== Basic JavaScript:Manipulate Arrays With push()====
// // in this program we`ll push number or array inside another array
// var myArray=[["Ahsan",18],["Imran",19],["Ali",12]]; // before push
// myArray.push(9,["Hamza",7]);
// for(var i=0; i<5; i++)
// {
//  console.log(myArray[i]); // after puch (this fucntion is used to push a number in right side of array)
// }


// // ===== Basic JavaScript:Manipulate Arrays With pop()====
// // in this program we`ll pop a number or array inside another array
// var myPopArray=[["Ahsan",18],["Imran",19],["Ali",12]]; // before pop
// myPopArray.pop(["Ali",12]);
// for(var i=0; i<2; i++)
// {
//  console.log(myPopArray[i]); // after pop (this fucntion is used to pop/delete a number from right side of an array)
// }


// // ===== Basic JavaScript:Manipulate Arrays With shift()/unshift()====
// var shiftArray=[["Usman",18],["Hafeez",19],["Umar",12]];
// var unshiftArray=[["Usman",18],["Hafeez",19],["Umar",12]];
// shiftArray.shift(["Usman",18]); // it remove first item from array
// unshiftArray.unshift(10000);
// for(var i=0; i<2; i++)
// {
//   console.log(shiftArray[i]); 
//   console.log(unshiftArray[i]); 
// }


// // ====Passing Values to Functions with Arguments====
// function manipulate(x,y)
// {
//   return x+y;
// }
// console.log(manipulate(5,5));


// // ====Understanding Undefined Value returned from a Function====
// sum=0;
// function undef(a,b)
// {
//  sum=a+b;
// }
// console.log(undef(3,5));

// // ====Write a function nextInLine which takes an array (arr) and a number (item) as arguments.====
// function nextInLine(arr,item)
// {
// arr.push(item);
// arr.shift(arr[0]);
// return arr;
// }
// myTestArr=[1,2,3,4,5];
// var res=nextInLine(myTestArr,6);
// console.log(res);

// // ====Write a function nextInLine which takes an array (arr) and a number (item) as arguments.====
// function test(num)
// {
//   if (num>10)
//   {
//     return true;
//   }
//   return false;
// }
// console.log(test(40));


// // ====Basic JavaScript: Comparison with the Strict Equality Operator====
// function  stricEquality (str1,str2)
// {
//   if (str1.length===str2.length)
//   {
//     return true;
//   }
//   return false;
// }
// console.log(stricEquality("Ahsan","12345"));


// // ====Basic JavaScript: Selecting from Many Options with Switch Statements====
// function vowel(alpha) {
//   var alphabet = alpha;
//   switch (alphabet) {
//     case 'A':
//     case 'a':
//       {
//         console.log("An alphabet u hv enter is vowel");
//         break;
//       }
//     case 'E':
//     case 'e':
//       {
//         console.log("An alphabet u hv enter is vowel");
//         break;
//       }
//     case 'I':
//     case 'i':
//       {
//         console.log("An alphabet u hv enter is vowel");
//         break;
//       }
//     case 'O':
//     case 'o':
//       {
//         console.log("An alphabet u hv enter is vowel");
//         break;
//       }
//     case 'U':
//     case 'u':
//       {
//         console.log("An alphabet u hv enter is vowel");
//         break;
//       }
//     default:
//       {
//         console.log("An alphabet u hv enter is Consonant"); 
//       }
//   }
// }

// vowel("b");

// // ====Basic JavaScript: PassedReplacing If Else Chains with Switch====
// function  ifElseInSwitch(n,n2) {
//   var number = n;
//   switch (number) {
//     case 10:
//       {
//            if(number>n2)
//            {
//              return number*n2;
//            }
//            else{
//              console.log(" 2nd paramemter is greaer than first");
//            }
//         break;
//       }
//    default:
//      {
//        console.log("first parameter is not = 10");
//        break;
//      }

//   }
// }

// console.log(ifElseInSwitch(10,12));


// // ====Basic JavaScript:Build JavaScript Objects====

// var myObj={
//  firstName:"Ahsan",
//  lastName:"Rasheed",
//  age:17,
//  class:"BSCS",
//  contact:["Address,MC","ph:308-6106787"]
// };

// console.log(myObj["contact"][0]);// by bracket notation
// myObj.class=14; // update
// console.log(myObj.class);
// myObj.gender="male";  // adding new property
// console.log(myObj);
// delete myObj.age;    // delete property
// console.log(myObj);


// const myArray = [
//     {
//         name: "Ahsan",
//         rollNumber: 7137,
//         subject: [
//              "Comp", "Phy", "Chem"
//         ]
//     },

//     {
//         name: "Ali",
//         rollNumber: 7132,
//         subject: [
//              "Comp", "Phy", "Bio"
//         ]
//     },

//     {
//         name: "Hamza",
//         rollNumber: 12,
//         subject: [
//             "Eng", "Urdu", "Islamiyat"
//         ]
//     }

// ]


//    console.log( [...new Set(myArray.map(function(item){ return item.subject; }).flatMap(function(item){return item;}))]);



//    // Array Sorting
//    var unSortArr=["Imran","Ali","Shahid","Ahsan","Bilal",3,2,1];
//    console.log(unSortArr.sort());

//    // Sort Array of objects
//    var homes = [
//     {
//         h_id: "1",
//         city: "Dallas",
//         state: "TX",
//         zip: "75201",
//         price: 319250
//     }, {
//         h_id: "2",
//         city: "Bevery Hills",
//         state: "CA",
//         zip: "90210",
//         price: 162500 
//     }, {
//         h_id: "3",
//         city: "New York",
//         state: "NY",
//         zip: "00010",
//         price: 962500
//     }
// ];



// function mycomparator(next,prev) {
//   //console.log(next,prev);
//   //  console.log(b);
//    return parseInt(next.price, 10) - parseInt(prev.price, 10);
//   }
//  // homes.sort(mycomparator)
//   console.log(homes.sort(mycomparator));

  // Array Methods

