
const pr = new Promise((resolve) => {
  console.log("Inside Promise");
  setTimeout(() => {
    resolve("Promise resolved");
  }, 2000);
});

setTimeout(() => {
  pr.then(console.log);
}, 4000);

// Total time taken will be 4sec.

const ob = rxjs.Observable.create(observer => {
    observer.next("Inside");
    observer.next("Observable");
    setTimeout(() => {
        observer.next("Observable running")
    }, 2000);
})
setTimeout(() => {
    ob.subscribe(console.log);
}, 4000);

// Total time taken 6sec.


