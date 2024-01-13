// /* WEBCAM TEST7 - capture USB webcam */
import NodeWebcam from "node-webcam"
NodeWebcam.capture("webcam_test", { device: 'HD USB Camera' }, function (err, data) { });

// // /* WEBCAM TEST6 - capture USB webcam */
// import NodeWebcam from "node-webcam"
// // NodeWebcam.capture("webcam_test", {}, function (err, data) { });
// // NodeWebcam.capture("webcam_test", { device: 'HD USB Camera' }, function (err, data) { });
// NodeWebcam.capture("webcam_test", { device: 'ADVC-100' }, function (err, data) { });

// // /* WEBCAM TEST5 - capture webcam base 64 
// import NodeWebcam from "node-webcam";
// import open from "open"
// NodeWebcam.capture("test_picture", { callbackReturn: "base64" }, function (err, data) {
//     // var image = "<img src='" + data + "'>";
//     console.log(data)
//     // open(data) // NO
// });

// // /* WEBCAM TEST4 - capture webcam (xtra short) */
// import NodeWebcam from "node-webcam"
// NodeWebcam.capture("webcam_test", {}, function (err, data) { });

// /* WEBCAM TEST3 - capture webcam (short) */
// import NodeWebcam from "node-webcam";
// var opts = {
//     width: 1280,
//     height: 720,
//     quality: 100,
//     frames: 60,
//     delay: 0,
//     saveShots: true,
//     output: "jpeg",
//     device: false,
//     callbackReturn: "location",
//     verbose: false
// };
// var Webcam = NodeWebcam.create(opts);
// Webcam.capture("webcam_test", function (err, data) { });

// /* WEBCAM TEST2 - capture webcam */
// import NodeWebcam from "node-webcam";
// var opts = {
//     width: 1280,
//     height: 720,
//     quality: 100,
//     // Number of frames to capture
//     // More the frames, longer it takes to capture
//     // Use higher framerate for quality. Ex: 60
//     frames: 60,
//     //Delay in seconds to take shot
//     delay: 0,
//     //Save shots in memory
//     saveShots: true,
//     // Webcam.OutputTypes: jpeg, png (support varies)
//     output: "jpeg",
//     // false for default device
//     device: false,
//     // Webcam.CallbackReturnTypes: location, buffer, base64
//     callbackReturn: "location",
//     //Logging
//     verbose: false
// };
// //Creates webcam instance
// var Webcam = NodeWebcam.create(opts);
// //Will automatically append location output type
// Webcam.capture("webcam_test", function (err, data) { });

// /* WEBCAM TEST1 - find webcams */
// import NodeWebcam from "node-webcam";
// NodeWebcam.list(function (list) { console.log(list) });

// /* WEBCAM TETS - node-webcam API */
// //Available in nodejs
// var NodeWebcam = require("node-webcam");
// //Default options
// var opts = {
//     //Picture related
//     width: 1280,
//     height: 720,
//     quality: 100,
//     // Number of frames to capture
//     // More the frames, longer it takes to capture
//     // Use higher framerate for quality. Ex: 60
//     frames: 60,
//     //Delay in seconds to take shot
//     //if the platform supports miliseconds
//     //use a float (0.1)
//     //Currently only on windows
//     delay: 0,
//     //Save shots in memory
//     saveShots: true,
//     // [jpeg, png] support varies
//     // Webcam.OutputTypes
//     output: "jpeg",
//     //Which camera to use
//     //Use Webcam.list() for results
//     //false for default device
//     device: false,
//     // [location, buffer, base64]
//     // Webcam.CallbackReturnTypes
//     callbackReturn: "location",
//     //Logging
//     verbose: false
// };
// //Creates webcam instance
// var Webcam = NodeWebcam.create(opts);
// //Will automatically append location output type
// Webcam.capture("test_picture", function (err, data) { });
// //Also available for quick use
// NodeWebcam.capture("test_picture", opts, function (err, data) {
// });
// //Get list of cameras
// Webcam.list(function (list) {
//     //Use another device
//     var anotherCam = NodeWebcam.create({ device: list[0] });
// });
// //Return type with base 64 image
// var opts = {
//     callbackReturn: "base64"
// };
// NodeWebcam.capture("test_picture", opts, function (err, data) {
//     var image = "<img src='" + data + "'>";
// });