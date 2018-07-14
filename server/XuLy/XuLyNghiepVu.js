const data = require('./XuLyLuuTru')
const utils = require('./Utils')
const User = require('../DoiTuong/User')
const jwt = require('jsonwebtoken')

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
                    wrong[key] = traloi[key]
                }
            }else{
                wrong[key] = traloi[key]
            }
            
        }
    }
    return {
        correct: correct,
        wrong : wrong,
        answer: dapandung
    }
}

module.exports.createUser = (value)=>{
    let username = value.username
    let password = value.password 
    let accounttype= value.accounttype

    let user = new User()
    user.username = username
    user.hash_password(password)
    user.accountType = accounttype
    return new Promise((resolve, reject) => {
        data.SaveUser(user)
        .then(resolve)
        .catch(reject)
    });
}

module.exports.findUser = (value)=>{
    let username = value.username
    let password = value.password 
    let accounttype= value.accounttype

    let user = new User()
    user.username = username
    //user.hash_password(password)
    user.password = password
    user.accountType = accounttype
    return new Promise((resolve, reject) => {
        data.ReadUser(user)
        .then(res=>{
            console.log(res)
            let token = jwt.sign({
                username: res.username,
                accountType: res.accountType,
                time: +new Date
            },'Annguyen')
            resolve({
                token:token
            })
        })
        .catch(err=>console.log(err))
    });
}

module.exports.verifyJWT = async (token)=>{
    let user = undefined
    await jwt.verify(token,'Annguyen',(err,decode)=>{
        if(err){
            console.log(err)
        }
        user = decode
    })
    return user
}