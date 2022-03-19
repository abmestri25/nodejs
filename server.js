const http = require('http');
const fs = require('fs');
const _ = require('lodash');


const server = http.createServer((req,res) => {

    // to get random number
    const num = _.random(0,100);
    console.log(num);

    // to load function only once
    const greet = _.once(() => {
        console.log('Hello There !');
    })

    greet();
    // This will not get called as we have used once() from lodash
    greet();

    // setting header content
    res.setHeader('Content-Type','text/html');
  
    // multiple routes
    let path = './views/';

    switch(req.url){
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-blog':
            res.statusCode = 301;
            res.setHeader('Location','/about');
            break;
        default:
            path += '404.html'
            res.statusCode = 404;
            break;
    }
    // sending html file
    fs.readFile(path,(err,data) => {
        if(err){
            console.log(err);
            res.end()
        }else{
            res.end(data);  
        }
    });
})

server.listen(3000,'localhost', () => {
    console.log('Listening for requests on PORT 3000');
})