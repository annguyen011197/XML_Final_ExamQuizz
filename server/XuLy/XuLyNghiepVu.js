const data = require('./XuLyLuuTru')
const utils = require('./Utils')

module.exports.getMedia = (link) => {
    return new Promise((resolve, reject) => {
        data.ReadMedia(utils.getMediaPath(link))
        .then(image=>resolve(image))
        .catch(err=>reject(err))
    });
}