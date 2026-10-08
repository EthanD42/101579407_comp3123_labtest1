

function lowerCaseWords(str) {
    return new Promise((resolve, reject) => {
        
        if (!Array.isArray(str)) {
            reject(new Error("The Input must be an array"));
            return;
        }
        
        str = str.filter(item => typeof item === "string");
        resolve(str.map(item => item.toLowerCase()));
    });
}


lowerCaseWords(["Hello", "PEOPLE", 123, "Test", true, false, "Lebron James", "is", "not", "the", "GOAT"])
.then(result => console.log(result))
.catch(error => console.error(error));