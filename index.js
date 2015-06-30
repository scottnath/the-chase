var express = require('express'),
  path = require('path'),
  fs = require('fs'),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  exec = require('child_process').exec;
var app = express();
var runnersFile = path.join(__dirname,'public/runners.json');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname,'/public/index.html'));
});

app.use('/public', express.static('public'));
app.use('/node_modules', express.static('node_modules'));

// app.use('/game/:id', function (req, res, next) {
//   console.log('Request Type:', req.params);

//   next();
// });

app.post('/game/:hostname', function(req, res){
  var gamefilename = req.params.hostname;
  console.log('body: ' + JSON.stringify(req.params));
  console.log('gameid: ' + gamefilename);
  gameKicker(gamefilename);
  try {
    var runners = JSON.parse(fs.readFileSync(runnersFile));
  } catch (err) {
    console.error(err);
  }
  console.log(runners);
  var obj = runners.filter(function ( obj ) {
    return obj.hostname === 'runnerpi3';
  })[0];
  console.log(obj);
  res.send(req.body);
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('The Chase listening at goddamn http://%s:%s', host, port);

});

function gameKicker(gamefilename){
  // exec('/opt/retropie/emulators/retroarch/bin/retroarch -L /opt/retropie/libretrocores/lr-imame4all/libretro.so /home/pi/RetroPie/roms/mame-mame4all/' + gamefilename + '.zip --config /opt/retropie/configs/all/retroarch.cfg', function(error, stdout, stderr) {
  //   if (!error) {
  //     console.log('// things worked!');
  //   } else {
  //     console.log('// things failed :(');
  //   }
  // });
  console.log(gameKicker);
  return "good job!";
}
