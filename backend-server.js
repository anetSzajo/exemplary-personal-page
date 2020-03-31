var http = require('http');

http.createServer(function (req, res) { 

    res.setHeader('Access-Control-Allow-Origin', '*');
    let body = [];

    if (req.method === 'POST') {
        req.on('error', (err) => {
            console.error(err);
          }).on('data', (chunk) => {
            body.push(chunk);
          }).on('end', () => {
            body = Buffer.concat(body).toString();
            parsed = JSON.parse(body)
            
            
            // BEGINNING OF NEW STUFF
        
    })
    }
    console.log(req.url);
    console.log(req.method);


    res.end(); //end the response
  }).listen(8080);




//   {

//     "nick": 'Anetka',
//     "email": 'aa@bb.cc',
//     "message": 'tresc message'
//   }