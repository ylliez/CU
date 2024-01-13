/* IPP - find printer & info */

// // IPP - find printers on local network
// import mdns from 'mdns'
// const browser = mdns.createBrowser(mdns.tcp('ipp'));
// mdns.Browser.defaultResolverSequence[1] = 'DNSServiceGetAddrInfo' in mdns.dns_sd ? mdns.rst.DNSServiceGetAddrInfo() : mdns.rst.getaddrinfo({ families: [4] });
// browser.on('serviceUp', function (rec) { console.log(rec.name, 'http://' + rec.host + ':' + rec.port + '/' + rec.txtRecord.rp); });
// browser.start();
// // OUTPUT:
// // 3655:
// // Photosmart 5510 series[789327] http://HP789327.local.:631/ipp/printer
// // Brother MFC - 7840W http://BRN008077E90263.local.:631/duerqxesz5090 
// // CU (ethernet CLAB --> 7th floor):
// // Versalink c8000 http://192.168.37.227:631/ipp/port1


// // IPP -  printer information
// import ipp from 'ipp'
// // let uri = "http://HP789327.local.:631/ipp/printer";
// let uri = "http://BRN008077E90263.local."; // NO
// // let uri = "http://192.168.37.227:631/ipp/port1";
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

// // IPP - printer information - FOUND MFC!! (from https://github.com/williamkapke/ipp/issues/15)
import ipp from 'ipp'
// var printer = ipp.Printer("http://HP789327.local.:631/ipp/printer");
var printer = ipp.Printer("http://BRN008077E90263.local.", { version: '1.0' });
printer.execute("Get-Printer-Attributes", null, function (err, res) { console.log(res); });


