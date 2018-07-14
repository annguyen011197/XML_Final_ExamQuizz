const handle = require('../XuLy/XuLyNghiepVu')
var url = require('url')
const utils = require('../XuLy/Utils')
let map = require('../XuLy/GlobalCache')
module.exports.router = (req, res) => {
    switch (req.method) {
        case 'GET':
            let q = url.parse(req.url, true).query
            handle.getExam(utils.decodeb64(q.id))
                .then(exam => {
                    if (exam.constructor.name == 'Exam') {
                        res.writeHeader(200, {
                            'Access-Control-Allow-Origin': '*',
                            'Content-Type': 'application/json'
                        })
                        let e = exam.toJSON()
                        let tempID = utils.createID()
                        let data = {
                            info: e.info,
                            questions: e.questions
                        }
                        data.info.id = tempID
                        map.Answer.set(tempID,e.answers)
                        res.end(JSON.stringify(data))
                    }
                }).catch(err => {
                    res.writeHeader(404)
                    res.end(err + "")
                })
            break
    }
}