const xml = require('xmldom')
const domParser = xml.DOMParser
const fs = require('fs')
let doc = new domParser()
const utils = require('./XuLy/Utils')
let Exam = require('./DoiTuong/Exam')
let Question = require('./DoiTuong/Question')
const path = require('path')
const pathMedia = path.join(__dirname, '../Media')
const pathData = path.join(__dirname,'../Data')

// fs.readFile('./Data/Thongtin/thongtin.xml','utf-8',(err,data)=>{
//     if(err) console.log(err)
//     let xml = doc.parseFromString(data,'text/xml')
//     console.log(xml.getElementsByTagName('ThongTin')[0].getAttribute('A'))
// })

// let a = Array.from(Array(100).keys())
// let b = []
// a.forEach(e=>{
//     let id = utils.createID()
//     console.log(id)
//     b.push(id)
// })

// console.log(b.length)

// let c = Array.from(new Set(b))
// console.log(c.length)

// fs.readFile('./Data/Dethi/dethi1.xml','utf-8',(err,data)=>{
//     if(err) console.log(err)
//     let xml = doc.parseFromString(data,'text/xml')
//     let info = xml.getElementsByTagName('DeThi')[0]
//     let list = xml.getElementsByTagName('CauHoi')
//     let exam = new Exam()
//     exam.Id = info.getAttribute('ma_so')
//     exam.Name = info.getAttribute('ten')
//     exam.Time = info.getAttribute('thoi_gian')
//     for (let i=0;i<list.length;++i) {
//         let e = list[i]
//         let ques = new Question()
//         ques.content = e.getElementsByTagName('NoiDung')[0].textContent
//         let answers = e.getElementsByTagName('DapAn')
//         for(let i=0;i<answers.length;++i){
//             let answer = answers[i]
//             let data = {}
//             data.text = answer.textContent
//             data.correct=answer.getAttribute('dung')=='1'
//             //console.log(data)
//             ques.addResult(data)
//         }
//         exam.addQuestion(ques)
//     }
//   })

let a = "dethi1"
let b = utils.encodeb64(a)
console.log(b)
let c = utils.decodeb64(b)
console.log(c)