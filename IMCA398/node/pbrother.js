var brother = require('brothermfc')({
    // hostname: 'BRW008077E90263.lan',
    // hostname: 'BRW008077E90263.lan',
    // hostname: 'BRW008077E90263.lan',
    // hostname: 'BRN008077E90263.local', // 404 Error!
    // hostname: 'brn008077e90263.local',
    // hostname: 'brw008077e90263.local', // no address
    // hostname: 'brn008077e90263.local.:631', // 404 Error!
    // hostname: 'brn008077e90263.local./main/main.html', // 404 Error!
    // hostname: '192.168.37.227:631/', // 404 Error!
    // hostname: '192.168.37.227:631/ipp/port1', // 404 Error!
    // hostname: '192.168.37.227', // 404 Error!
    protocol: 'http'
});

brother.current(function (err, data) {
    console.log(err || data);
});