const express = require('express')
const app = express()
const server = require('http').createServer(app)
const port = process.env.PORT || 3000
const io = require('socket.io')(server)
const path = require('path')
const fs = require('fs');

function htmlspecialchars(str) {
// Find another way to do the same thing PHP does.
    var result = str;
 //   result = result.replace(/</g, "&lt;");
  //  result = result.replace(/>/g, "&gt;");
    return result;

}


app.use(express.static(path.join(__dirname + '/public')))




io.sockets.on('connection', function (socket) {
    var address = socket.handshake.address;
    console.log('New connection from ' + address);
    let date_ob = new Date();
    let log_date = ("0" + date_ob.getDate()).slice(-2);
let log_month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
let log_year = date_ob.getFullYear();
let log_hours = date_ob.getHours();
let log_minutes = date_ob.getMinutes();
let log_seconds = date_ob.getSeconds();
let log_dateandtime = log_year + "-" + log_month + "-" + log_date + " " + log_hours + ":" + log_minutes + ":" + log_seconds
let tz = Intl.DateTimeFormat().resolvedOptions().timeZone
     fs.appendFileSync('connections.log', `New connection from ${address}, ${log_dateandtime} ${tz}\r\n`);
  });

io.on('connection', socket => {
    socket.on('chat', message => {
        // Hey haxor. If you're reading this, this is where sender is at.
        message = htmlspecialchars(message);
        message = message.replace(/fuck/gi, "*****");
        message = message.replace(/penis/gi, "arm");
        message = message.replace(/shit/gi, "*****");
        message = message.replace(/retard/gi, "*****");
        message = message.replace(/nigger/gi, "*****");
        message = message.replace(/slut/gi, "*****");
        message = message.replace(/whore/gi, "*****");
        message = message.replace(/porn/gi, "*****");
        message = message.replace(/p0rn/gi, "*****");
        message = message.replace(/wanker/gi, "*****");
        message = message.replace(/nigga/gi, "*****");
        message = message.replace(/cunt/gi, "*****");
        message = message.replace(/dick/gi, "*****");
        message = message.replace(/pornhub.com/gi, "***********");
        message = message.replace(/rule34.xxx/gi, "**********");
        // Insert hyperlinking code.
        message = message.replace(/asshole1881/gi, "<big><big>asshole1881</big></big>");


// IP Logging script for Console
const ip = socket.handshake.address;
// End IP logging script for Console

        defaultUsername = "<b><u>Anonymous:</u></b> ";
        console.log(`"${message} (${ip})"`);
        // omg, help for html special chars?
        // IP Logging script for file
        let date_ob = new Date();
let log_date = ("0" + date_ob.getDate()).slice(-2);
let log_month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
let log_year = date_ob.getFullYear();
let log_hours = date_ob.getHours();
let log_minutes = date_ob.getMinutes();
let log_seconds = date_ob.getSeconds();
let log_dateandtime = log_year + "-" + log_month + "-" + log_date + " " + log_hours + ":" + log_minutes + ":" + log_seconds
let tz = Intl.DateTimeFormat().resolvedOptions().timeZone
// Compile everything together
final = `${log_dateandtime} <b><u>Anonymous:</u></b> ${message}`
        fs.appendFileSync('message.log', `${ip}, ${log_dateandtime} ${tz}, ${final}\r\n`);
        // End IP Logging script for file
        if (message.split("): ")[1] !== "") {
            // console.log('"' + message + '"');
            io.emit('chat', final);
        }
        
    })

})
/*
io.on('connection', socket => {
    socket.on('join', user => {
        io.emit('join', user);
    })
})
io.on('connection', socket => {
    socket.on('leave', user => {
        io.emit('leave', user);
    })
})
*/
// Chat join






app.get('/bmcitofotw', function (req, res) {
    res.type('.html')
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    useragent = req.get('User-Agent');
    let date_ob = new Date();
    let log_date = ("0" + date_ob.getDate()).slice(-2);
    let log_month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let log_year = date_ob.getFullYear();
    let log_hours = date_ob.getHours();
    let log_minutes = date_ob.getMinutes();
    let log_seconds = date_ob.getSeconds();
    let log_dateandtime = log_year + "-" + log_month + "-" + log_date + " " + log_hours + ":" + log_minutes + ":" + log_seconds
    let tz = Intl.DateTimeFormat().resolvedOptions().timeZone
    console.log(`${ip}, ${log_dateandtime} ${tz}, ${useragent}, STATUS: ${res.statusCode} /bmcitofotw`)
    fs.appendFileSync('access.log', `${ip}, ${log_dateandtime} ${tz}, ${useragent}, STATUS: ${res.statusCode} /bmcitofotw\r\n`);
    res.send(`<script>window.alert("blow my cock in the open fields of the world");</script>`);
})

server.listen(port, () => {
    console.log(`Server running on port: ${port}`)
})
