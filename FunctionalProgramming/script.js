// function x()
// {
//     var a=10;
//     function y()
//     {
//         console.log(a);
//     }
//     return y;
// }
// var a=100;
// var z=x();
// z();
// console.log(c);
// function x()
// {
//     for(var i=1;i<=5;i++)
//     {
//         function close(x)
//         {
//             setTimeout(() => {
//                 console.log(x);
//             },x*1000);
//         }
//          close(i);
//     }
//     console.log("Namaste");
// }
// x();
// function x(a)
// {
//     console.log(a);
// }

// x(function(){
//  console.log("hello");
// });
// function addEventListener()
// {
//     let counter=0;
//     document.getElementById("clickMe").addEventListener("click",function xyz()
//     {
//     console.log("Button Clicked",++counter);
//     });
// }
// addEventListener();

// const arr=[1,8,3,4];
// const output=arr.map((x)=>{return 2*x;});
// console.log(output);

// const max=arr.reduce((acc,curr)=>{
//  if(curr>acc)
//  {
//     acc=curr;
//  }
// return acc;
// },arr[0]);
// console.log(max);
const users=[
{firstname:"Rohit",secondname:"Singhal",age:22},
{firstname:"Puneet",secondname:"Singhal",age:18},
{firstname:"Sumit",secondname:"Yadav",age:16},
{firstname:"Priya",secondname:"Matia",age:21},
];

const output=users.reduce((acc,curr)=>{
if(curr.age>20)
{
    acc.push(curr.firstname);
}
return acc;
},[]);

console.log(output);