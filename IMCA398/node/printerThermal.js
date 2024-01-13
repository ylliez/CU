const escpos = require('escpos');
escpos.USB = require('escpos-usb');
const device = new escpos.USB();
// const options = { encoding: "GB18030" /* default */ }
// const printer = new escpos.Printer(device, options);
const printer = new escpos.Printer(device);
// TESTS
// device.open(function (error) {
//     printer
//         .font('a')
//         .align('ct')
//         .style('bu')
//         .size(1, 1)
//         .text('The quick brown fox jumps over the lazy dog')
//         .cut()
//         .close();
// });
// device.open(function (error) {
//     printer
//         // .encode('cp866')
//         .text('Hello World.')
//         .size(1, 1)
//         // .feed()
//         // .feed()
//         .cut()
//         .close();
// });
device.open(function (error) {
    printer
        .text('Hello World.')
        .size(1, 1)
        // .feed()
        // .feed()
        .cut()
        .close();
});

// /* ESC/POS USB Printer - test 2 */
// const escpos = require('escpos');
// escpos.USB = require('escpos-usb');
// const device = new escpos.USB();
// // const device = new escpos.USB(10473, 649);
// // const device = escpos.USB.findPrinter()
// // console.log(device)
// // const device = new escpos.USB(printer);
// // const options = { encoding: "GB18030" /* default */ }
// // const printer = new escpos.Printer(device, options);
// const printer = new escpos.Printer(device);
// device.open(function (error) {
//     printer
//         .font('a')
//         .align('ct')
//         .style('bu')
//         .size(1, 1)
//         .text('The quick brown fox jumps over the lazy dog')
//         .text('敏捷的棕色狐狸跳过懒狗')
//         .barcode('1234567', 'EAN8')
//         .table(["One", "Two", "Three"])
//         .tableCustom(
//             [
//                 { text: "Left", align: "LEFT", width: 0.33, style: 'B' },
//                 { text: "Center", align: "CENTER", width: 0.33 },
//                 { text: "Right", align: "RIGHT", width: 0.33 }
//             ],
//             { encoding: 'cp857', size: [1, 1] } // Optional
//         )
//         .qrimage('https://github.com/song940/node-escpos', function (err) {
//             this.cut();
//             this.close();
//         });
// });

/* ESC/POS USB Printer - test 1 */
// const escpos = require('escpos');
// escpos.USB = require('escpos-usb');
// // Select the adapter based on your printer type
// const device = new escpos.USB();
// // const device  = new escpos.Network('localhost');
// // const device  = new escpos.Serial('/dev/usb/lp0');
// const options = { encoding: "GB18030" /* default */ }
// // encoding is optional
// const printer = new escpos.Printer(device, options);
// device.open(function (error) {
//     printer
//         .font('a')
//         .align('ct')
//         .style('bu')
//         .size(1, 1)
//         .text('The quick brown fox jumps over the lazy dog')
//         .text('敏捷的棕色狐狸跳过懒狗')
//         .barcode('1234567', 'EAN8')
//         .table(["One", "Two", "Three"])
//         .tableCustom(
//             [
//                 { text: "Left", align: "LEFT", width: 0.33, style: 'B' },
//                 { text: "Center", align: "CENTER", width: 0.33 },
//                 { text: "Right", align: "RIGHT", width: 0.33 }
//             ],
//             { encoding: 'cp857', size: [1, 1] } // Optional
//         )
//         .qrimage('https://github.com/song940/node-escpos', function (err) {
//             this.cut();
//             this.close();
//         });
// });