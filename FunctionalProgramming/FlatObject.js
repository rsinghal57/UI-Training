const users = {
    "first": "Rohit",
    "second": "Singhal",
    "address": {
        "pin": "140413",
        "city": "Mohali"
    },
    "age": 22
};

function flatObject(x){
    let ans = {};
    for (let i in x) {

        if ((typeof x[i]) === 'object') {
            const temp = flatObject(x[i]);
            for (let j in temp) {
                ans[i+'_'+j] = temp[j];
            }
        }
        else {
            ans[i] = x[i];
        }
    }
    return ans;
};



let ans = flatObject(users);
console.log(ans);
