module.exports.getMediaPath = (link) => {
    return link.substring(link.indexOf('/')+1)
}

module.exports.getExtension = (link)=>{
    let l = link.substring(link.lastIndexOf('/')+1)
    return l.substring(l.indexOf('.'))
}

module.exports.createID = ()=>{
    function uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
        });
      }
    let now = new Date()
    return uuidv4()+now.getUTCMilliseconds().toString()
}

module.exports.isNumber  = (number)=>{
    let r = new RegExp('^[0-9]+$')
    return r.test(number)
}

module.exports.shuffle =  (array) => {
    var currentIndex = array.length
      , temporaryValue
      , randomIndex
      ;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

module.exports.encodeb64 = (str) => {
    return Buffer.from(str).toString('base64')
}

module.exports.decodeb64 = (str) => {
    return Buffer.from(str,'base64').toString('ascii')
}

module.exports.objToStrMap = (obj) => {
    let strMap = new Map();
    for (let k of Object.keys(obj)) {
        strMap.set(k, obj[k]);
    }
    return strMap;
}