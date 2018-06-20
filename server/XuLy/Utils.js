module.exports.getMediaPath = (link) => {
    return link.substring(link.indexOf('/')+1)
}