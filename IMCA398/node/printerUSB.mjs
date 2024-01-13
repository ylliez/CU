// /* Test 5 - mjs */
import Printer from 'c410-printer';
import fs from 'fs';

var printer = new Printer('HP_Photosmart_5510_series');
var fileBuffer = fs.readFileSync('app/230301_test4_1.jpg');
var options = { o: ' media=4x6.Photo.FullBleed' };
// var options = { o: ' media=4x6.Photo' };
// var options = { o: ' media=4x6.Photo.WithTab' };
// var options = { o: ' media=5x7.Photo.FullBleed' };
// var options = { o: ' media=Custom.152x102mm' }; // --> NO!
// var options = { o: ' media=120x165mm' }; // --> OK
// var options = { o: ' media=102x152mm' };
// var options = { o: ' media=152x102mm' };
// var options = {
//     o: ' media=102x152mm',
//     'page-top': 0,
//     'page-bottom': 0,
//     'page-left': 0,
//     'page-right': 0,
// };
// var options = { o: ' media=102x152mm page-top=0 page-bottom=0 page-left=0 page-right=0' };
// var options = { o: ' media=112x162mm' };
// var options = { o: ' media=105x164mm' };
// var options = { o: ' media=108x162mm' };
var jobFromBuffer = printer.printBuffer(fileBuffer, options);
jobFromBuffer.once('sent', function () {
    console.log('Job ' + jobFromBuffer.identifier + ' has been sent');
});
jobFromBuffer.on('completed', function () {
    console.log('Job ' + jobFromBuffer.identifier + ' has been printed');
    jobFromBuffer.removeAllListeners();
    printer.destroy();
});
printer.destroy()

// // /* Test 4 - sizing */
// var Printer = require('c410-printer');
// var fs = require('fs');

// var printer = new Printer('HP_Photosmart_5510_series');

// var fileBuffer = fs.readFileSync('app/1679023720029_2.jpg');
// var options = {
//     // n: 2
//     // media: 'Custom.200x600mm',
//     // media: 'na_5x7_5x7in',
//     // media: 'a4',
//     // media: 'iso_a4_210x297mm',
//     // media: 'letter',
//     // media: '5x7.Photo',
//     // PageSize: '5x7.Photo',
//     // o: 'a4'
//     // o: ' media=5x7.Photo'
//     o: ' media=5x7.Photo.FullBleed'
// };
// var jobFromBuffer = printer.printBuffer(fileBuffer, options);

// // var filePath = 'package.json';
// // var jobFromFile = printer.printFile(filePath, options);
// jobFromBuffer.once('sent', function () {
//     console.log('Job ' + jobFromBuffer.identifier + ' has been sent');
// });
// jobFromBuffer.on('completed', function () {
//     console.log('Job ' + jobFromBuffer.identifier + ' has been printed');
//     jobFromBuffer.removeAllListeners();
//     printer.destroy();
// });
// printer.destroy()

// // /* Test 3 - photo */
// // var Printer = require('node-printer');
// var Printer = require('c410-printer');
// // import Printer from 'c410-printer';
// var fs = require('fs');

// var options = {
//     // media: 'Custom.200x600mm',
//     // media: 'na_5x7_5x7in',
//     // n: 3
// };

// // console.log(Printer.list());

// var printer = new Printer('Brother_MFC_7840W_2'); // MFC wired
// // var printer = new Printer('HP_Photosmart_5510_series'); // HP

// // var fileBuffer = fs.readFileSync('printerWiredTestText.txt');
// // var fileBuffer = fs.readFileSync('app/1679023720029_2.jpg');
// var jobFromBuffer = printer.printBuffer(fileBuffer, options);

// // var filePath = 'package.json';
// // var jobFromFile = printer.printFile(filePath, options);

// // // Cancel a job
// // jobFromBuffer.cancel();

// // Listen events from job
// jobFromBuffer.once('sent', function () {
//     console.log('Job ' + jobFromBuffer.identifier + ' has been sent');
// });
// jobFromBuffer.on('completed', function () {
//     console.log('Job ' + jobFromBuffer.identifier + ' has been printed');
//     jobFromBuffer.removeAllListeners();
//     printer.destroy();
// });

// printer.destroy()

// /* Test 2 - text */
// var Printer = require('node-printer');
// var fs = require('fs');

// // console.log(Printer.list());

// // var printer = new Printer('Brother_MFC_7840W'); // MFC wireless
// // var printer = new Printer('Brother_MFC_7840W_2'); // MFC wired
// var printer = new Printer('HP_Photosmart_5510_series');

// // Print from a buffer, file path or text 
// // var fileBuffer = fs.readFileSync('printerWiredTestText.txt');
// var jobFromBuffer = printer.printBuffer(fileBuffer);

// // Listen events from job 
// jobFromBuffer.once('sent', function () {
//     jobFromBuffer.on('completed', function () {
//         console.log('Job ' + jobFromBuffer.identifier + 'has been printed');
//         jobFromBuffer.removeAllListeners();
//     });
// });


// /* Test 1 */
// var Printer = require('node-printer');
// // var Printer = require('zuzel-printer');
// // var Printer = require('c410-printer');
// // import Printer from 'c410-printer';
// var fs = require('fs');

// var options = {
//     media: 'Custom.200x600mm',
//     n: 3
// };
// // Get available printers list
// console.log(Printer.list());

// // // Create a new Pinter from available devices
// // var printer = new Printer('XXX');
// var printer = new Printer('Brother_MFC_7840W');

// // Print from a buffer(could be text), file path
// var fileBuffer = fs.readFileSync('printerWiredTestText.txt');
// var jobFromBuffer = printer.printBuffer(fileBuffer, options); //or without options

// // var filePath = 'package.json';
// // var jobFromFile = printer.printFile(filePath, options);

// // Cancel a job
// jobFromBuffer.cancel();

// // Listen events from job
// jobFromBuffer.once('sent', function () {
//     console.log('Job ' + jobFromBuffer.identifier + ' has been sent');
// });
// jobFromBuffer.on('completed', function () {
//     console.log('Job ' + jobFromBuffer.identifier + ' has been printed');
//     job.removeAllListeners();
//     printer.destroy();
// });

// //destroys all child processes
// printer.destroy()