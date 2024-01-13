/* IPP tests */

// // IPP - find printers on local network
// import mdns from 'mdns'
// const browser = mdns.createBrowser(mdns.tcp('ipp'));
// mdns.Browser.defaultResolverSequence[1] = 'DNSServiceGetAddrInfo' in mdns.dns_sd ? mdns.rst.DNSServiceGetAddrInfo() : mdns.rst.getaddrinfo({ families: [4] });
// browser.on('serviceUp', function (rec) { console.log(rec.name, 'http://' + rec.host + ':' + rec.port + '/' + rec.txtRecord.rp); });
// browser.start();
// // OUTPUT:
// // Photosmart 5510 series[789327] http://HP789327.local.:631/ipp/printer
// // Brother MFC - 7840W http://BRN008077E90263.local.:631/duerqxesz5090 

// // // IPP -  printer information
// import ipp from 'ipp'
// // let uri = "http://HP789327.local.:631/ipp/printer";
// // let uri = "http://BRN008077E90263.local.:631/duerqxesz5090"; // 404 Error
// // let uri = "http://BRN008077E90263.local.:631/ipp/printer"; // 404 Error
// // let uri = "http://brn008077e90263.local./main/main.html"; // OK BUT jumble
// // let uri = "http://brn008077e90263.local."; // ISH BUT "server-error-version-not-supported"
// // let uri = "http://brn008077e90263.local"; // ISH BUT "server-error-version-not-supported"
// // let uri = "http://HP789327.local.";  // 404 Error
// // let uri = "http://HP789327.local";  // 404 Error
// // let uri = "http://brn008077e90263.local./main"; // 404 Error
// // let uri = "http://brn008077e90263.local.:631/main/main.html"; // also OK BUT jumble ??
// // let uri = "http://brn008077e90263.local.:631/ipp/printer"; // 404 Error
// // let uri = "ipp://HP789327.local.:631/ipp/printer";
// let uri = "http://192.168.37.227:631/ipp/port1";
// let data = ipp.serialize({
//     "operation": "Get-Printer-Attributes",
//     "operation-attributes-tag": {
//         "attributes-charset": "utf-8",
//         "attributes-natural-language": "en",
//         "printer-uri": uri
//     }
// });
// ipp.request(uri, data, function (err, res) {
//     if (err) {
//         return console.log(err);
//     }
//     console.log(JSON.stringify(res, null, 2));
// })

// // IPP - test print
// import ipp from 'ipp'
// let printer = ipp.Printer("http://HP789327.local.:631/ipp/printer");
// // let printer = ipp.Printer("http://BRN008077E90263.local.:631/duerqxesz5090");
// let msg = {
//     "operation-attributes-tag": {
//         "requesting-user-name": "William",
//         "job-name": "My Test Job",
//         "document-format": "application/pdf",
//         "document-uri": "http://192.168.20.114:5000/check"
//     }
// };
// printer.execute("Print-URI", msg, function (err, res) {
//     console.log(res);
// });

// // IPP - test print 2
// import ipp from 'ipp'
// let printer = ipp.Printer("http://HP789327.local.:631/ipp/printer");
// // let printer = ipp.Printer("http://BRN008077E90263.local.:631/duerqxesz5090");
// let msg = {
//     "operation-attributes-tag": {
//         "requesting-user-name": "isp",
//         "job-name": "test job",
//         "document-format": "application/pdf",
//         // "document-uri": "http://192.168.20.114:5000/check"
//         // "document-uri": predictionT2I[0]
//         "document-uri": "https://replicate.delivery/pbxt/PPlrwh7eS3yYBydfKjKTmznQfICKlYPkVVeNRlfsLnbw92AEC/out-0.png"
//     }
// };
// printer.execute("Print-URI", msg, function (err, res) {
//     console.log(res);
// });

// // IPP - test print 3
// import ipp from 'ipp'
// import PDFDocument from 'pdfkit'
// let doc = new PDFDocument({ margin: 0 });
// doc.text(".", 0, 780);
// // doc.output(function (pdf) {
// doc.pipe(function (pdf) {
//     let printer = ipp.Printer("http://BRN008077E90263.local.:631/duerqxesz5090");
//     let msg = {
//         "operation-attributes-tag": {
//             "requesting-user-name": "isp",
//             "job-name": "test-print",
//             "document-format": "application/pdf"
//         },
//         data: pdf
//     };
//     printer.execute("Print-Job", msg, function (err, res) {
//         console.log(res);
//     });
// });
// // OUTPUT: statusCode: 'client-error-document-format-not-supported'

// // IPP - test print 4 (adapted from https://github.com/williamkapke/ipp/blob/master/examples/printPDF.js)
// import ipp from 'ipp'
// import PDFDocument from 'pdfkit'
// import concat from 'concat-stream'
// var doc = new PDFDocument({ margin: 0 });
// doc.text(".", 0, 0);
// doc.pipe(concat(function (data) {
//     var printer = ipp.Printer("http://HP789327.local.:631/ipp/printer");
//     // var printer = ipp.Printer("http://BRN008077E90263.local.:631/duerqxesz5090");
//     var msg = {
//         "operation-attributes-tag": {
//             "requesting-user-name": "isp",
//             "job-name": "test.pdf",
//             "document-format": "application/pdf"
//         },
//         // "job-attributes-tag": {
//         //     "media-col": {
//         //         "media-source": "tray-2"
//         //     }
//         // }, 
//         data: data
//     };
//     printer.execute("Print-Job", msg, function (err, res) {
//         console.log(err);
//         console.log(res);
//     });
// }));
// doc.end();
// // OUTPUT: statusCode: 'client-error-document-format-not-supported'

// // IPP - test print 5 (adapted from https://github.com/williamkapke/ipp/blob/master/examples/printPDF.js)
// import ipp from 'ipp'
// import fs from 'fs'
// let img = fs.readFileSync('RIPA_logo_cut.png');
// var printer = ipp.Printer("http://HP789327.local.:631/ipp/printer");
// // var printer = ipp.Printer("http://BRN008077E90263.local.:631/duerqxesz5090");
// var msg = {
//     "operation-attributes-tag": {
//         "requesting-user-name": "isp",
//         "job-name": "test.pdf",
//         "document-format": "image/png"
//     },
//     data: img
// };
// printer.execute("Print-Job", msg, function (err, res) {
//     console.log(err);
//     console.log(res);
// });
// // OUTPUT: statusCode: 'client-error-document-format-not-supported'

// // IPP - test print 6 (adapted from https://stackoverflow.com/questions/16194758/internet-printing-protocol-ipp-for-nodejs)
// import ipp from 'ipp'
// import fs from 'fs'
// fs.readFile('RIPA_logo_cut.png', function (err, data) {
//     if (err)
//         throw err;
//     var printer = ipp.Printer("http://HP789327.local.:631/ipp/printer");
//     var msg = {
//         "operation-attributes-tag": {
//             "requesting-user-name": "KUMA1936",
//             "job-name": "My Test Job",
//             "document-format": "image/png"
//         },
//         data: data
//     };
//     printer.execute("Print-Job", msg, function (err, res) {
//         console.log(res);
//         console.log(err);
//     });
// });
// // OUTPUT: statusCode: 'client-error-document-format-not-supported'

// // IPP - test print 7
// import ipp from 'ipp'
// import fs from 'fs'
// fs.readFileSync('RIPA_logo_cut.png', function (err, data) {
//     if (err)
//         throw err;
//     var printer = ipp.Printer("http://HP789327.local.:631/ipp/printer");
//     var msg = {
//         "operation-attributes-tag": {
//             "requesting-user-name": "KUMA1936",
//             "job-name": "My Test Job",
//             "document-format": "application/octet-stream"
//         },
//         data: data
//     };
//     printer.execute("Print-Job", msg, function (err, res) {
//         console.log(res);
//         console.log(err);
//     });
// });

// import fs from 'fs'
// let data = fs.readFileSync("./RIPA_logo_cut.png");
// console.log(data);
// // OUTPUT: <Buffer 89 50 4e 47 0d 0a 1a 0a 00 00 00 0d 49 48 44 52 00 00 03 c5 00 00 01 a1 08 06 00 00 00 48 c8 16 09 00 00 00 01 73 52 47 42 00 ae ce 1c e9 00 00 00 04 ... 9749 more bytes>

// // IPP - test print 8 (HP/Buffer)
// import ipp from 'ipp'
// import fs from 'fs'
// let imgBuffer = fs.readFileSync('./RIPA_logo_cut.png');
// console.log(imgBuffer);
// var printer = ipp.Printer("http://HP789327.local.:631/ipp/printer");
// // var printer = ipp.Printer("http://BRN008077E90263.local.:631/duerqxesz5090");
// // var printer = ipp.Printer("http://BRN008077E90263.local.:631/ipp/printer");
// // var printer = ipp.Printer("http://brn008077e90263.local./main/main.html"); // getting somewhere...
// // var printer = ipp.Printer("http://brn008077e90263.local.:/main/main.html");
// // var printer = ipp.Printer("http://brn008077e90263.local.:631/main/main.html");
// // var printer = ipp.Printer("http://192.168.037.227:631/ipp/printer");
// var msg = {
//     "operation-attributes-tag": {
//         "requesting-user-name": "isp",
//         "job-name": "test-print",
//         "document-format": "application/octet-stream"
//     },
//     data: imgBuffer
// };
// printer.execute("Print-Job", msg, function (err, res) {
//     console.log(res);
//     console.log(err);
// });

// // Try with brothermfc module
// import brothermfc from 'brothermfc'
// let brother = brothermfc({
//     // hostname: 'BRW008077E90263.lan',
//     // hostname: 'BRW008077E90263.lan',
//     // hostname: 'BRW008077E90263.lan',
//     // hostname: 'BRN008077E90263.local', // 404 Error!
//     // hostname: 'brn008077e90263.local',
//     // hostname: 'brw008077e90263.local', // no address
//     // hostname: 'brn008077e90263.local.:631', // 404 Error!
//     // hostname: 'brn008077e90263.local./main/main.html', // 404 Error!
//     // hostname: '192.168.37.227:631/', // 404 Error!
//     // hostname: '192.168.37.227:631/ipp/port1', // 404 Error!
//     hostname: '192.168.37.227:631/ipp/port1', // 404 Error!
//     protocol: 'http'
// });
// brother.current(function (err, data) { console.log(err || data); });

// // // IPP - printer information - FOUND MFC!! (from https://github.com/williamkapke/ipp/issues/15)
// import ipp from 'ipp'
// // var printer = ipp.Printer("http://HP789327.local.:631/ipp/printer");
// // var printer = ipp.Printer("http://BRN008077E90263.local.");
// var printer = ipp.Printer("http://BRN008077E90263.local.", { version: '1.0' });
// printer.execute("Get-Printer-Attributes", null, function (err, res) { console.log(res); });
// /* OUTPUT: 
//     'printer-uri-supported': [
//       'http://192.168.37.227:631/',
//       'http://192.168.37.227:631/ipp',
//       'http://192.168.37.227:631/ipp/port1',
//       'http://192.168.37.227:631/brn008077e90263',
//       'http://192.168.37.227:631/binary_p1',
//       'http://192.168.37.227:631/text_p1',
//       'http://192.168.37.227:631/postscript_p1',
//       'http://192.168.37.227:631/pcl_p1',
//       'http://192.168.37.227:631/brn008077e90263_at',
//       'http://192.168.37.227:631/ipp/rseuqzdex5001',
//       'http://192.168.37.227:631/rseuqzdex5001',
//       'http://192.168.37.227:631/ipp/duerqxesz5090',
//       'http://192.168.37.227:631/duerqxesz5090'
//     ],
// */

// // IPP - test print 9 (MFC/Buffer)
// import ipp from 'ipp'
// import fs from 'fs'
// let imgBuffer = fs.readFileSync('./RIPA_logo_cut.png');
// console.log(imgBuffer);
// // var printer = ipp.Printer("http://HP789327.local.:631/ipp/printer");
// // var printer = ipp.Printer("http://192.168.37.227:631/", { version: '1.0' });
// // var printer = ipp.Printer("http://192.168.37.227:631/ipp/port1", { version: '1.0' });
// var printer = ipp.Printer("http://192.168.37.227:631/ipp", { version: '1.0' });
// var msg = {
//     "operation-attributes-tag": {
//         "requesting-user-name": "isp",
//         "job-name": "test-print",
//         // "document-format": "application/octet-stream"
//         "document-format": "application/application/vnd.hp-PCL"
//     },
//     data: imgBuffer
// };
// printer.execute("Print-Job", msg, function (err, res) {
//     console.log(res);
//     console.log(err);
// });

// // IPP - test print 10 (HP/JPEG) --> OK?
// import ipp from 'ipp'
// import fs from 'fs'
// // let imgBuffer = fs.readFileSync('./RIPA_logo_cut.png'); // NO
// // let imgBuffer = fs.readFileSync('./testprintpng.png'); // NO
// // let imgBuffer = fs.readFileSync('./RIPA_logo_cut.jpg'); // NO: "is corrupted"
// // let imgBuffer = fs.readFileSync('./testprintjpg.JPG'); // OK
// // let imgBuffer = fs.readFileSync('./imgDL/1.jpg'); // NO: "is corrupted"
// // let imgBuffer = fs.readFileSync('./testprintjpg2.jpg'); // NO: "is corrupted"
// // let imgBuffer = fs.readFileSync('./testprintpng.png'); // +change document format --> not supported
// console.log(imgBuffer);
// var printer = ipp.Printer("http://HP789327.local.:631/ipp/printer");
// var msg = {
//     "operation-attributes-tag": {
//         "requesting-user-name": "isp",
//         "job-name": "test-print",
//         "document-format": "image/jpeg"
//         // "document-format": "image/png"
//     },
//     data: imgBuffer
// };
// printer.execute("Print-Job", msg, function (err, res) {
//     console.log(res);
//     console.log(err);
// });
// // Results: only native jpg works, not png or jpg from other sources

// // IPP - test print 11 (HP/buffer) --> NO: file corrupted!
// import ipp from 'ipp'
// import fs from 'fs'
// import fetch from 'node-fetch';
// var printer = ipp.Printer("http://HP789327.local.:631/ipp/printer");
// let response, blob, arrayBuffer, buffer;

// const getImage = async (url, path) => {
//     response = await fetch(url);
//     blob = await response.blob();
//     arrayBuffer = await blob.arrayBuffer();
//     buffer = Buffer.from(arrayBuffer);
//     console.log(buffer)
//     await fs.writeFile(path, buffer, function (err, result) {
//         if (err) console.log('error', err);
//     });
// }

// const printImage = async (buffer) => {
//     var msg = {
//         "operation-attributes-tag": {
//             "requesting-user-name": "isp",
//             "job-name": "test-print",
//             "document-format": "image/jpeg"
//         },
//         data: buffer
//     };
//     printer.execute("Print-Job", msg, function (err, res) {
//         console.log(res);
//         console.log(err);
//     });
// }

// // await getImage("https://replicate.delivery/pbxt/Ib0vihEn6spRBdzLgoEez8hHo3jFMdCZawEeEaueJb4ekGLCB/out-0.png", "imgDL/test.png")
// await getImage("https://raw.githubusercontent.com/ylliez/CU/main/IMCA398/node/RIPA_logo_cut.jpg", "imgDL/test.png")
// await printImage(buffer)


// // // IPP -  printer information
// import ipp from 'ipp'
// // let uri = "http://HP789327.local.:631/ipp/printer";
// // let uri = "http://BRN008077E90263.local.:631/duerqxesz5090"; // 404 Error
// // let uri = "http://BRN008077E90263.local.:631/ipp/printer"; // 404 Error
// // let uri = "http://brn008077e90263.local./main/main.html"; // OK BUT jumble
// // let uri = "http://brn008077e90263.local."; // ISH BUT "server-error-version-not-supported"
// // let uri = "http://brn008077e90263.local"; // ISH BUT "server-error-version-not-supported"
// // let uri = "http://HP789327.local.";  // 404 Error
// // let uri = "http://HP789327.local";  // 404 Error
// // let uri = "http://brn008077e90263.local./main"; // 404 Error
// // let uri = "http://brn008077e90263.local.:631/main/main.html"; // also OK BUT jumble ??
// // let uri = "http://brn008077e90263.local.:631/ipp/printer"; // 404 Error
// // let uri = "ipp://HP789327.local.:631/ipp/printer";
// let uri = "http://10.115.140.28:631/ipp";
// let data = ipp.serialize({
//     "operation": "Get-Printer-Attributes",
//     "operation-attributes-tag": {
//         "attributes-charset": "utf-8",
//         "attributes-natural-language": "en",
//         "printer-uri": uri
//     }
// });
// ipp.request(uri, data, function (err, res) {
//     if (err) {
//         return console.log(err);
//     }
//     console.log(JSON.stringify(res, null, 2));
// })

// Concordia 7th floor - Versalink c8000
// IP address: 10.115.140.28


// // IPP - test print 10 (HP/JPEG) --> OK?
// import ipp from 'ipp'
// import fs from 'fs'
// import pngToJpeg from 'png-to-jpeg';
// var printer = ipp.Printer("http://10.115.140.28:631/ipp");
// let imgBuffer = fs.readFileSync('./testprintjpg.JPG'); // OK
// console.log(imgBuffer);
// var msg = {
//     "operation-attributes-tag": {
//         "requesting-user-name": "isp",
//         "job-name": "test-print",
//         "document-format": "image/jpeg"
//     },
//     data: imgBuffer
// };
// printer.execute("Print-Job", msg, function (err, res) {
//     console.log(res);
//     console.log(err);
// });

// // IPP - get job attributes
import ipp from 'ipp'
var printer = ipp.Printer("http://HP789327.local.:631/ipp/printer");
var msg = {
    "operation-attributes-tag": {
        // 'job-uri': 'http://HP789327.local.:631/ipp/printer/job-0013'
        'job-uri': 'ipp://hp789327.local./ipp/printer/job-0012'
    }
};
function go() {
    printer.execute("Get-Job-Attributes", msg, function (err, res) {
        console.log(res);
        setTimeout(go, 0);
    });
}
go();


// // Printer Brother
// var brother = require('brothermfc')({
//     // hostname: 'BRW008077E90263.lan',
//     // hostname: 'BRW008077E90263.lan',
//     // hostname: 'BRW008077E90263.lan',
//     // hostname: 'BRN008077E90263.local', // 404 Error!
//     // hostname: 'brn008077e90263.local',
//     // hostname: 'brw008077e90263.local', // no address
//     // hostname: 'brn008077e90263.local.:631', // 404 Error!
//     // hostname: 'brn008077e90263.local./main/main.html', // 404 Error!
//     // hostname: '192.168.37.227:631/', // 404 Error!
//     // hostname: '192.168.37.227:631/ipp/port1', // 404 Error!
//     // hostname: '192.168.37.227', // 404 Error!
//     protocol: 'http'
// });

// brother.current(function (err, data) {
//     console.log(err || data);
// });
