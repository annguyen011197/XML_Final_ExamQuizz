const handle = require('../XuLy/XuLyNghiepVu')
var url = require('url')
const utils = require('../XuLy/Utils')
let map = require('../XuLy/GlobalCache')
const qs  = require('querystring')
module.exports.router = (req, res) => {
    switch (req.method) {
        case 'POST':
        try {
            var body = '';
            req.on('data', function (data) {
                body += data;
                if (body.length > 1e6) { 
                    req.connection.destroy();
                }
            });
            req.on('end', function () {
            let data = JSON.parse(body)
            let id = data.id 
            let answer = map.Answer.get(id)
            res.writeHeader(200, {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            })
            res.end(JSON.stringify(handle.compareAnswer(data.answer,answer)))
            });
        } catch (error) {
            console.log(error)
        }

            // let q = url.parse(req.url, true).query
            // console.log(q)
            // console.log(map.Answer)
            // console.log(map.Answer.get(q.id))
            break
    }
}