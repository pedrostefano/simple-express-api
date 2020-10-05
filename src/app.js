const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
var express = require('express');
const basicAuth = require('express-basic-auth')

var app = express();
const port = 5000;

app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }));
app.use(cookieParser());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});

this.router = express.Router();

app.use(basicAuth({
    users: { 'admin': 'supersecret' }
}));

// this.router
//     .get('/api/device/list', function (req, res) {
//         var vo = {
//             "pageData": [
//                 {
//                     "id": 222,
//                     "serialDevice": "11540536047120978",
//                     "deviceName": "TRAFO_PLUS_11540536047120978",
//                     "deviceTypeName": "TRAFO_PLUS",
//                     "lastComunication": 1523304331,
//                     "isDeviceConnected": 1,
//                     "deviceLat": -25.4469983333,
//                     "deviceLon": -49.2425483333,
//                     "deviceLocation": "LACTEC > REGIONAL > SE 01 > ALIM > UTD"
//                 }
//             ],
//             "totalRecords": 1
//         }
//     return res.json(vo);
// });


this.router
    .get('/api/device/list', function (req, res) {
        //empty array response
        var vo = {};
    return res.json(vo);
});
    



    
this.router
    .get('/api/hub/:id', function (req, res) {
        var vo = {
            "deviceId": 183,
            "hubEvent": {
                "id": 1,
                "eventDate": 1523304331,
                "voltageBT": 127.5,
                "neutralCurrent": 0.0,
                "neutralAngle": 0.0
            },
            "phases": [
                {
                    "id": 1,
                    "phase": 1,
                    "device": {
                        "id": 182,
                        "deviceName": "SENSOR_318838487"
                        }
                },
                {
                    "id": 3,
                    "phase": 2,
                    "device": {
                        "id": 188,
                        "deviceName": "SENSOR_35894783"
                        }
                }
            ]
        }
    return res.json(vo);
});

this.router
    .get('/api/sensor/', function (req, res) {
        var vo = {
            "deviceId": 182,
            "sensorEvent": {
                "id": req.query.id,
                // "eventDate": 182,
                "eventDate": 1523304331,
                "eventType": 20,
                "vlCurrent": 10.0,
                "vlVoltageRms": 13.8,
                "vlVoltageSuperCap": 1.8,
                "vlVoltagePainel": 5.8,
                "vlAngle": 30.1,
                "vlFlux": 0,
                "vlTemperature": 40.2
            }
        }
    return res.json(vo);
});


this.router
    .get('/api/trafo/:id', (req, res) => {
            var vo = {
                "deviceId": 222,
                "trafoEvent": {
                    "id": 2263,
                    "vlVoltageRmsA": 124.17,
                    "vlVoltageRmsB": 124.21,
                    "vlVoltageRmsC": 124.54,
                    "vlCurrentRmsA": 199.2,
                    "vlCurrentRmsB": 199.8,
                    "vlCurrentRmsC": 198.8,
                    "vlNeutralRms": 281.6,
                    "vlTempInternal": 28.25,
                    "vlTempExternal": 131.43,
                    "vlTempTank": 217.99,
                    "eventDate": 1523304331,
                    "switchStateType": {
                        "code": 0,
                        "name": "Fechado"
                    }
                }
            }
    return res.json(vo);
});

this.router
    .get('/api/coelba/:id', (req, res) => {
        var vo = {
            "pageData": [
                {
                    "id": 222,
                    "serialDevice": "11540536047120978",
                    "deviceName": "TRAFO_PLUS_11540536047120978",
                    "deviceTypeName": "TRAFO_PLUS",
                    "lastComunication": 1523304331,
                    "isDeviceConnected": 1,
                    "deviceLat": -25.4469983333,
                    "deviceLon": -49.2425483333,
                    "deviceLocation": "LACTEC > REGIONAL > SE 01 > ALIM > UTD"
                }
            ],
            "totalRecords": 1
        }
        
    return res.json(vo);    
});


this.router
    .get('/api/coelba2/:id', (req, res) => {
        var vo = {
            "pageData": [
                {
                    "id": 222,
                    "serialDevice": "11540536047120978",
                    "deviceName": "TRAFO_PLUS_11540536047120978",
                    "deviceTypeName": "TRAFO_PLUS",
                    "lastComunication": 1523304331,
                    "isDeviceConnected": 1,
                    "deviceLat": -25.4469983333,
                    "deviceLon": -49.2425483333,
                    "deviceLocation": "LACTEC > REGIONAL > SE 01 > ALIM > UTD"
                }
            ],
            "totalRecords": 1
        }
        
    return res.json(vo);    
});


this.router
    .get('/api/ceron/:id', (req, res) => {
        var vo = [
            {
                "id": req.params.id,
                "equipe": "ETM0010051",
                "latitude": "-20.480126",
                "longitude": "-54.604357",
                "gravacao": "2017-01-01T13:25:59.000Z" 
            },
            {
                "id": +req.params.id + 1,
                "equipe": "EMG0010001",
                "latitude": "-21.480126",
                "longitude": "-53.604357",
                "gravacao": "2018-02-02T12:22:52.000Z" 
            } 
        ]
        if (+req.params.id == 2) {
            return res.json([]);
        }
        return res.json(vo);
});

this.router
    .get('/api/ceron2/:id', (req, res) => {
        var vo = [
            {
                "id": req.params.id,
                "equipe": "11111ETM0010051",
                "latitude": "-20.480126",
                "longitude": "-54.604357",
                "gravacao": "2017-01-01T13:25:59.000Z" 
            },
            {
                "id": +req.params.id + 1,
                "equipe": "11111EMG0010001",
                "latitude": "-21.480126",
                "longitude": "-53.604357",
                "gravacao": "2018-02-02T12:22:52.000Z" 
            } 
        ]
        if (+req.params.id === 2) {
            return res.json(vo);
        }
        return res.json([]);
});

app.use(this.router);

app.listen(port);

console.log('API is running on port: ' + port);
module.exports = app;