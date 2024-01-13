import NodeWebcam from "node-webcam";
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

//Also available for quick use
NodeWebcam.capture("webcam_test", {}, function (err, data) { });