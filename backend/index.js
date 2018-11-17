var express = require('express');

var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var http = require('http')
var cors = require('cors');
var path = require('path');
var app = express();



app.use(cors());


app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true,
    limit: '100mb'
}));


// app.use('/api', require('./Routers/test_routes.js'));
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});

/**
 * Module dependencies.
 */

var debug = require('debug')('node-rest:server');
var http = require('http');

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort('4002');
app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);
var socket = require('socket.io')(server);


/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port, console.log("mybackend is running on", port));
server.on('error', onError);
server.on('listening', onListening);
//  require('./Routers/adminRoute')(express, app, socket);


app.post('/mailer',function(req , res){

    nodemailer.createTestAccount((err, account) => {
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
                user: 'hemantkashyap1995@gmail.com', // generated ethereal user
                pass: '9690347870vandna' // generated ethereal password
            }
        });
    let mailOptions = {
        from: '"User Query 👻" <hemantkashyap1995@gmail.com>', // sender address
        to: 'hk@yopmail.com', // list of receivers
        subject: 'Hello ✔', // Subject line
        // text: 'Hello world?', // plain text body
        html: "<body><span>Query Detail</sapn><br /><br /> <b>Name :</b>"+req.body.data.name+"<br /> <b>Email :</b>"+req.body.data.email+"<br /> <b>Contact : </b>"+req.body.data.phone+"<br /> <b>Tour Package : </b>"+req.body.data.SP+"<br /><b>Tour Package : </b>"+req.body.data.SB+"<br /><b>No. of Adults :</b>"+req.body.data.adults+"<br /><b>No of Children :</b>"+req.body.data.children+"<br /><b>Travelling Date : </b>"+req.body.data.date+"<br /><b>Message:</b>"+req.body.data.message+"</body>"
    };
    transporter.sendMail(mailOptions, (error, info) => {
        // console.log(error)
        if (error) {
            res.json({
                code : 400,
                message : 'mail not send',
                data : error
            })
        }
        else if(info){
            res.json({
                code : 200,
                message : 'mail send',
                data : info.messageId
            })
        }
        
        // console.log('Message sent: %s', info.messageId);/
        // Preview only available when sending through an Ethereal account
        // console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
});
})
/**
 * Normalize a port into a number, string, or false.
 */
publicDir = process.argv[2] || __dirname + '/public/dist/hemu',

app.use(express.static(publicDir));
app.use(express.static(path.join(__dirname, 'public/')));
app.get('/', function (req, res) {

  res.sendFile(path.join(publicDir, "/index.html"));
});
app.get("/*", function (req, res) {
  res.sendFile(path.join(publicDir, "/index.html"));
});


app.use(function(req, res, next) {
    next(createError(404));
  });
  
  
function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    var bind = typeof port === 'string' ?
        'Pipe ' + port :
        'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string' ?
        'pipe ' + addr :
        'port ' + addr.port;
    debug('Listening on ' + bind);
}

