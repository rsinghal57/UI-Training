Array.prototype.myMap = function(callbackFunction) {
    var arr = [];              
    for (var i = 0; i < this.length; i++) { 
      arr.push(callbackFunction(this[i], i, this));
    }
    return arr;
  }

let arr=[1,2,3,4,5];
//Using our own map
let output1=arr.myMap((i)=>{
    return i*2;
})
//Using default map
let output2=arr.map((i)=>{
    return 2*i;
})
console.log(output1);
console.log(output2);