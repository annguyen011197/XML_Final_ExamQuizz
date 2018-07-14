const fs = require('fs')
const path = require('path')
const xml = require('xmldom')
const domParser = xml.DOMParser
const xmlSerialize = xml.XMLSerializer
let doc = new domParser()
let serializer = new xmlSerialize()
let Question = require('../DoiTuong/Question')
let Exam = require('../DoiTuong/Exam')
const User = require('../DoiTuong/User')

const pathMedia = path.join(__dirname, '../Media')
const pathData = path.join(__dirname, '../Data')

module.exports.ReadMedia =
    function ReadMedia(filename) {
        return new Promise((resolve, reject) => {
            fs.readFile(path.join(pathMedia, filename), (err, data) => {
                if (err) reject(err)
                resolve(data)
            })
        });
    }

module.exports.ReadInfo = () => {
    return new Promise((resolve, reject) => {
        fs.readFile(path.join(pathData, 'Thongtin/thongtin.xml'), 'utf-8', (err, data) => {
            if (err) reject(err)
            let xml = doc.parseFromString(data, 'text/xml')
            let e = xml.getElementsByTagName('ThongTin')[0]
            let res = {}
            res.name = e.getAttribute("ten")
            res.id = e.getAttribute("ma_so")
            res.logo = e.getAttribute("logo")
            resolve(res)
        })
    });
}

module.exports.ReadExam = (id) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path.join(pathData, `./Dethi/${id}.xml`), 'utf-8', (err, data) => {
            if (err) reject(err)
            try {
                let xml = doc.parseFromString(data, 'text/xml')
                let info = xml.getElementsByTagName('DeThi')[0]
                let list = xml.getElementsByTagName('CauHoi')
                let exam = new Exam()
                exam.id = info.getAttribute('ma_so')
                exam.name = info.getAttribute('ten')
                exam.time = info.getAttribute('thoi_gian')
                for (let i = 0; i < list.length; ++i) {
                    let e = list[i]
                    let ques = new Question()
                    ques.content = e.getElementsByTagName('NoiDung')[0].textContent
                    let answers = e.getElementsByTagName('DapAn')
                    for (let i = 0; i < answers.length; ++i) {
                        let answer = answers[i]
                        let data = {}
                        data.text = answer.textContent
                        data.correct = answer.getAttribute('dung') == '1'
                        ques.addResult(data)
                    }
                    exam.addQuestion(ques)
                }
                resolve(exam)
            } catch (e) {
                reject(e)
            }

        })
    })

}

module.exports.SaveUser = (user) => {
    return new Promise((resolve, reject) => {
        if (user.constructor.name == 'User') {
            fs.readFile(path.join(pathData, `./User/User.xml`), 'utf-8', (err, data) => {
                if (err) reject(err)
                try {
                    let xml = doc.parseFromString(data, 'text/xml')
                    if (xml.getElementById(user.username)) {
                        reject(403)
                        return
                    }
                    let userlist = xml.getElementsByTagName('DanhSachUser')[0]
                    let userdom = user.toXML()
                    let usernode = doc.parseFromString(userdom, 'text/xml')
                    userlist.appendChild(usernode)
                    let save = serializer.serializeToString(xml)
                    fs.writeFile(path.join(pathData, `./User/User.xml`), save, 'utf8', (err) => {
                        if (err) reject(err)
                        resolve(100)
                    });
                } catch (err) {
                    reject(err)
                }
            })
        } else {
            reject(null)
        }
    })

}

module.exports.ReadUser = (user) => {
    return new Promise((resolve, reject) => {
        if (user.constructor.name == 'User') {
            fs.readFile(path.join(pathData, `./User/User.xml`), 'utf-8', (err, data) => {
                if (err) reject(err)
                try {
                    let xml = doc.parseFromString(data, 'text/xml')
                    let node = xml.getElementById(user.username)
                    if (node) {
                        let userNode = node.parentNode
                        let passwordE = userNode.getElementsByTagName('Password')[0]
                        let password = passwordE.getAttribute('value')
                        let u = new User()
                        u.username = user.username
                        u.password = password
                        if(u.comparePassword(user.password)){
                            resolve(u)
                        }else{
                            reject(403)
                        }
                    } else {
                        reject(403)
                    }
                } catch (err) {
                    reject(err)
                }
            })
        } else {
            reject(null)
        }
    })

}