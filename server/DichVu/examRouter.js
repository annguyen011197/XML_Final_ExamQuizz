const handle = require('../XuLy/XuLyNghiepVu')
var url = require('url')
const utils = require('../XuLy/Utils')
let map = new Map()
module.exports.router = (req,res)=>{
    switch(req.method){
        case 'GET':
            let q = url.parse(req.url, true).query
            handle.getExam(utils.decodeb64(q.id))
            .then(exam=>{ 
                if(exam.constructor.name == 'Exam'){
                    res.writeHeader(200,{
                    'Access-Control-Allow-Origin': '*',
                    'Conent-Type':'application/json'
                    })
                    let e = exam.toJSON()
                    map.set()
                    res.end(JSON.stringify(exam.toJSON()))
                }
            }).catch(err=>{
                res.writeHeader(404)
                res.end(err+"")
            })
        break
    }
}