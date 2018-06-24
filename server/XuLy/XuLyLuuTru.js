const fs = require('fs')
const path = require('path')
const xml = require('xmldom')
const domParser = xml.DOMParser
let doc = new domParser()
let Question = require('../DoiTuong/Question')
let Exam = require('../DoiTuong/Exam')

const pathMedia = path.join(__dirname, '../Media')
const pathData = path.join(__dirname,'../Data')

module.exports.ReadMedia =
    function ReadMedia(filename) {
        return new Promise((resolve, reject) => {
            fs.readFile(path.join(pathMedia, filename), (err, data) => {
                if (err) reject(err)
                resolve(data)
            })
        });
    }

module.exports.ReadInfo = ()=>{
    return new Promise((resolve, reject) => {
        fs.readFile(path.join(pathData,'Thongtin/thongtin.xml'),'utf-8',(err,data)=>{
                if(err) reject(err)
                let xml = doc.parseFromString(data,'text/xml')
                let e = xml.getElementsByTagName('ThongTin')[0]
                let res = {}
                res.name = e.getAttribute("ten")
                res.id = e.getAttribute("ma_so")
                res.logo = e.getAttribute("logo")
                resolve(res)
        })
    });
}

module.exports.ReadExam = (id)=>{
    return new Promise((resolve, reject) => {
      fs.readFile(path.join(pathData,`./Dethi/${id}.xml`),'utf-8',(err,data)=>{
        if(err) reject(err)
        try{
            let xml = doc.parseFromString(data,'text/xml')
            let info = xml.getElementsByTagName('DeThi')[0]
            let list = xml.getElementsByTagName('CauHoi')
            let exam = new Exam()
            exam.id = info.getAttribute('ma_so')
            exam.name = info.getAttribute('ten')
            exam.time = info.getAttribute('thoi_gian')
            for (let i=0;i<list.length;++i) {
                let e = list[i]
                let ques = new Question()
                ques.content = e.getElementsByTagName('NoiDung')[0].textContent
                let answers = e.getElementsByTagName('DapAn')
                for(let i=0;i<answers.length;++i){
                    let answer = answers[i]
                    let data = {}
                    data.text = answer.textContent
                    data.correct=answer.getAttribute('dung')=='1'
                    ques.addResult(data)
                }
                exam.addQuestion(ques)
            }
            resolve(exam)
        }catch(e){
            reject(e)
        }

      })
    })
    
}