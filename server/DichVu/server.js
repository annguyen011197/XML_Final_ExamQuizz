var http = require('http')
var port = 8080
var clientURL = 'http://localhost:3000/'
var url = require('url')
var handle = require('../XuLy/XuLyNghiepVu')
var utils = require('../XuLy/Utils')
var examRouter = require('./examRouter')
var answerRouter = require('./answerRouter')
var userRouter = require('./userRouter')
var header = require('../XuLy/GlobalCache').Header

http.createServer(async (req, res) => {
    let q = url.parse(req.url, true)
    let path = q.pathname.replace('/', '')
    let queryObj = q.query
    let start = process.hrtime()
    let user = await handle.verifyJWT(req.headers.authorization)
    req.user = user 
    if(path.startsWith('media')){
        handle.getMedia(path)
        .then(image=>{
            res.writeHead(200,header.image)
            res.end(image,'binary')
        })
        .catch(err=>{
            res.writeHead(404)
            res.end(err+'')
        })
    }else{
        path = utils.getRoute(path.toLowerCase())
        switch (path) {
            case 'thongtin':
                if(req.method=='GET'){
                    handle.getInfo()
                    .then(data=>{
                        res.writeHead(200,header.json)
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
            case 'dapan':
                answerRouter.router(req,res)
            break
            case 'user':
                userRouter.router(req,res)
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
