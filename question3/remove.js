const fs = require('fs');
const path = require('path');

const removesFiles = () => {
    return new Promise((resolve, reject) => {
        try {
            const logPath = path.join(process.cwd(), "Logs");

            if (fs.existsSync(logPath)) {
                const files = fs.readdirSync(logPath);
                

                files.forEach(file => {

                    console.log(`deleting files... ${file}`);
                    const filePath = path.join(logPath, file);
                    fs.unlinkSync(filePath);
                });

                fs.rmdirSync(logPath);
            }

            resolve("Logs deleted successfully");

        } catch (error) {
            reject(error);
        }
    });
};

removesFiles()
    .then(message => {

        console.log(message);

    })

    .catch(error => {

        console.error(error);

    });