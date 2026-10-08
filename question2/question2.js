

const resolvedPromise = () => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("This is Resolved BOYYYY!!");
    }, 500);
    });
}

const rejectedPromise = () => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error("This is Rejected BOYYYY!!"));
    }, 500);
    });
}



resolvedPromise()
    .then(result => console.log(result))
    .catch(error => console.error(error));

rejectedPromise()
    .then(result => console.log(result))
    .catch(error => console.error(error));