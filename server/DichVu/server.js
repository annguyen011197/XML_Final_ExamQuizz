var http = require('http')
var port = 8080
var clientURL = 'http://localhost:3000/'
var url = require('url')
var handle = require('../XuLy/XuLyNghiepVu')
var utils = require('../XuLy/Utils')
var examRouter = require('./examRouter')

const headers = {
    image:{
        'Conent-Type':'image/type'
    },
    text:{
        'Conent-Type':'text/plain'
    },
    json:{
        'Access-Control-Allow-Origin': '*',
        'Conent-Type':'application/json'
    }
}

http.createServer((req, res) => {
    let q = url.parse(req.url, true)
    let path = q.pathname.replace('/', '')
    let queryObj = q.query
    let start = process.hrtime()
    if(path.startsWith('media')){
        handle.getMedia(path)
        .then(image=>{
            let header = headers.image['Conent-Type']
                        .replace('type',utils.getExtension(path))
            res.writeHead(200,header)
            res.end(image,'binary')
        })
        .catch(err=>{
            res.writeHead(404)
            res.end(err+'')
        })
    }else{
        path = path.toLowerCase()
        switch (path) {
            case 'thongtin':
                if(req.method=='GET'){
                    handle.getInfo()
                    .then(data=>{
                        res.writeHead(200,headers.json)
                        res.end(JSON.stringify(data))
                    })
                    .catch(err=>{
                        res.writeHead(404)
                        res.end(err+'')
                    })
                }
                break
            case 'dethi':
                examRouter.router(req,res)
                break
            default:
                res.writeHead(302, {
                    'Location': clientURL
                })
                res.end()
                break
        }
    }
    console.log(`${req.method} :${path}  ${process.hrtime(start)}`)
}).listen(port, () => {
    console.log("Server listen on port " + port);
})
