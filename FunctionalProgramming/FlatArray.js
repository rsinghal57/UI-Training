const arr=[1,2,[3,4],5,[6,7],8];
//Using Flat
const output1=arr.flat();
//Using Reduce
const output2=arr.reduce((acc,curr)=>{

    acc=acc.concat(curr);
    return acc;
    
},[]);
//Using Reduce
const output3=arr.reduce((acc, curr) => acc.concat(curr), []);

console.log(output1);
console.log(output2);
console.log(output3);


