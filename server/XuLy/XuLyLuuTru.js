const fs = require('fs')
const path = require('path')
const pathMedia = path.join(__dirname, '../Media')

module.exports.ReadMedia =
    function ReadMedia(filename) {
        return new Promise((resolve, reject) => {
            fs.readFile(path.join(pathMedia, filename), (err, data) => {
                console.log(data)
                if (err) reject(err)
                resolve(data)
            })
        });
    }


