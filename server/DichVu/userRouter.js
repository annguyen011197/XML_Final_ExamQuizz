const handle = require('../XuLy/XuLyNghiepVu')
var url = require('url')
const utils = require('../XuLy/Utils')
let global = require('../XuLy/GlobalCache')
let header = global.Header
var routeMatcher = require('route-matcher').routeMatcher
module.exports.router = (req, res) => {
    let method = routeMatcher("/user/:method").parse(req.url).method
    console.log(req.user)
    let body = ''
    req.on('data',(data)=>{
        body+= data
        if(body.length > 1e6){
            req.connection.destroy()
        }
    }).on('end',()=>{
        let data = utils.parseJSON(body)
        switch(method){
            case 'login':
                login(req,res,data)
                break
            case 'signup':
                signup(req,res,data)
                break
        }
    })
}

function login(req,res,data){
    switch(req.method){
        case 'POST':
            if(data){
                handle.findUser(data).then(result=>{
                    res.writeHeader(200,header.json)
                    res.end(JSON.stringify(result))
                }).catch(err=>{
                    res.writeHeader(404)
                    res.end({messsage: err+''})
                })
            }else{
                res.writeHeader(404)
                res.end()
            }
        break
    }
}

function signup(req,res,data){
    switch(req.method){
        case 'POST':
            if(data){
                handle.createUser(data).then((result) => {
                    res.writeHeader(200,header.json)
                    res.end(JSON.stringify(result))
                }).catch((err) => {
                    res.writeHeader(404)
                    res.end({messsage: err+''})
                });
            }else{
                res.writeHeader(404)
                res.end()
            }
        break
    }
}