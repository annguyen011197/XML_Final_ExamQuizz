const data = require('./XuLyLuuTru')
const utils = require('./Utils')

module.exports.getMedia = (link) => {
    return new Promise((resolve, reject) => {
        data.ReadMedia(utils.getMediaPath(link))
            .then(image => resolve(image))
            .catch(err => reject(err))
    });
}

module.exports.getInfo = ()=>{
    return new Promise((resolve, reject) => {
      data.ReadInfo()
      .then(data=>resolve(data))
      .catch(err=>reject(err))
    })
    
}

module.exports.getExam = (id)=>{
    return new Promise((resolve, reject) => {
      data.ReadExam(id)
      .then(exam=>{
          resolve(exam)
      })
      .catch(err=>reject(err))
    })
    
}

module.exports.compareAnswer = (traloi,dapandung)=>{
    let correct  = {}
    let wrong = {}
    for (const key in dapandung) {
        if (dapandung.hasOwnProperty(key)) {
            if(traloi[key]){
                if(traloi[key]==dapandung[key]){
                    correct[key] = traloi[key]
                }else{
                    wrong[key] = dapandung[key]
                }
            }else{
                wrong[key] = dapandung[key]
            }
            
        }
    }
    return {
        correct: correct,
        wrong : wrong
    }
}