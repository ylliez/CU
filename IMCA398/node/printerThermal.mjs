import escpos from 'escpos';
import USB from 'escpos-usb';

// const device = new USB();
const device = new USB(10473, 649);
const thermalPrinter = new escpos.Printer(device);

device.open(function (error) {
    thermalPrinter
        .size(1, 1)
        // .size(0.5, 0.5)
        // .text('an angry hamster eating brie in an impressionist style')
        // .text('anangryhamstereatingbrieinanimpressioniststyle')
        // .text(' ')
        // .text('a painting of a hamster eating a piece of cake, a pop art painting by Arabella Rankin, behance, pop surrealism, furaffinity, art on instagram, 2d game art.')
        // .text('a painting of a hamster eating a piece of cake, a pop art painting by Arabella Rankin, behance, pop surrealism, furaffinity, art on instagram, 2d game art. a painting of a hamster eating a piece of cake, a pop art painting by Arabella Rankin, behance, pop surrealism, furaffinity, art on instagram, 2d game art. a painting of a hamster eating a piece of cake, a pop art painting by Arabella Rankin, behance, pop surrealism, furaffinity, art on instagram, 2d game art')
        .text('a picture of a rat eating a piece of cheese, a silk screen by Art Spiegelman, cgsociety, holography, dye-transfer, airbrush art, childs drawing')
        .feed()
        .feed()
        // .cut()
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