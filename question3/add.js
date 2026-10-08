const fs = require('fs');
const path = require('path');

const addFileStuff = (content) => {
    return new Promise((resolve, reject) => {
        const logPath = path.join(process.cwd(), "Logs");

        if (!fs.existsSync(logPath)) {
            fs.mkdirSync(logPath);
        }

        process.chdir(logPath);
        for (let i = 1; i <= 10; i++) {
            const fileName = `file${i}.txt`;
            console.log(fileName);
            fs.writeFileSync(fileName, content);
        }

        resolve("Content added successfully!");
    });
};

addFileStuff("This is a log file.")
    .then(message => {
        console.log(message);
    })
    .catch(error => {
        console.error(error);
    });