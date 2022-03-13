const pr = new Promise((resolve) => {
    let counter = 0;
    setInterval(() => {
        counter += 1;
        console.log("Inside Set Interval of promise", counter);
        resolve(counter);
    }, 1000);
})
    .then((data) => {
        console.log(data);
    });



const ob = rxjs.Observable.create((observer) => {
    let counter = 0;
    let timer=setInterval(() => {
        counter += 1;
        console.log("Inside Set Interval of observable", counter);
        observer.next(counter);
    }, 1000);

    return () => {
        clearInterval(timer);
    }
});
const subscription=ob.subscribe(console.log);

setTimeout(() => {
    subscription.unsubscribe();
}, 5000);
