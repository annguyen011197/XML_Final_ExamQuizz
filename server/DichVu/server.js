var http = require('http')
var port = 8080
var clientURL = 'http://localhost:3000/'
var url = require('url')
var handle = require('../XuLy/XuLyNghiepVu')

const headers = {
    image:{
        'Conent-Type':'image/jpg'
    },
    text:{
        'Conent-Type':'text/plain'
    }
}

http.createServer((req, res) => {
    let q = url.parse(req.url, true);
    let path = q.pathname.replace('/', '')
    console.log(`${req.method} :${path}`)
    if(path.startsWith('media')){
        handle.getMedia(path)
        .then(image=>{
            res.writeHead(200,headers.image)
            res.end(image,'binary')
        })
        .catch(err=>{
            res.writeHead(404)
            res.end(err+'')
        })

    }else{
        switch (path) {
        
            default:
                res.writeHead(302, {
                    'Location': clientURL
                })
                res.end()
                break
        }
    }
}).listen(port, () => {
    console.log("Server listen on port " + port);
})
