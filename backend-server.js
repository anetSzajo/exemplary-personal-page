var http = require('http');
let posts = [{ nick: 'asd', email: '', message: 'ddd' } ];


http.createServer(function (req, res) { 

    res.setHeader('Access-Control-Allow-Origin', '*');
    let body = [];
    res.setHeader('Content-type', 'application/json')


    if (req.method === 'POST') {
        req.on('error', (err) => {
            console.error(err);
          }).on('data', (chunk) => {
            body.push(chunk);
          }).on('end', () => {
            body = Buffer.concat(body).toString();
            parsed = JSON.parse(body)
            posts.push(parsed);
            console.log(posts)

            // BEGINNING OF NEW STUFF
        
    })
    }
    if (req.method === 'GET') {
        console.log('get processing', posts)
        res.write(JSON.stringify(posts))
        res.statusCode = 400;
    }


    res.end(); //end the response
  }).listen(8080);




//   {

//     "nick": 'Anetka',
//     "email": 'aa@bb.cc',
//     "message": 'tresc message'
//   }