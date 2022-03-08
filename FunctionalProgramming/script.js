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
// const users=[
// {firstname:"Rohit",secondname:"Singhal",age:22},
// {firstname:"Puneet",secondname:"Singhal",age:18},
// {firstname:"Sumit",secondname:"Yadav",age:16},
// {firstname:"Priya",secondname:"Matia",age:21},
// ];

// const output=users.reduce((acc,curr)=>{
// if(curr.age>20)
// {
//     acc.push(curr.firstname);
// }
// return acc;
// },[]);

// console.log(output);

// Promises

// let order=(time,work,flag)=>{
//     return new Promise((resolve,reject)=>{
//         if(flag)
//         {
//            setTimeout(()=>{
//                resolve(work());
//            },time);
//         }
//         else
//         {
//           reject(console.log("Sorry!"));
//         }
//     })
// }

// order(2000,()=>console.log("First task"),false)
// // .catch(()=>{
// //     console.log("Error in First task");
// // })

// .then(()=>{
//     return order(3000,()=>console.log(`Second task and flag is ${flag}`),true)
//     // .catch(()=>{
//     //     console.log("Error in second task");
//     // })
// })

// .then(()=>{
//     return order(1000,()=>console.log("Third Task"),true)
    
// })

// .catch(()=>{
//     console.log("Something went wrong");
// });

// Async Await
let isAvailable=true;
let time=(x)=>{
    return new Promise((resolve,reject)=>{
        if(isAvailable)
        {
            setTimeout(resolve,x);
        }
        else
        {
            reject(console.log("something went wrong"));
        }
    })
}

async function driver()
{
    try {
        await time(7000);
        console.log("First Task");
        
        await time(2000);
        console.log("Second Task");
    } catch (error) {
        console.log("Error",error);
    }
}

driver();
console.log("outside1");
console.log("outside2");