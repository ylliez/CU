window.onload = function () {
    const video = document.getElementById("video");
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    let width = canvas.width, height = canvas.height;

    let stream = canvas.captureStream();
    // const stream = canvas.captureStream(30);
    const video2 = document.getElementById("video2");
    video2.srcObject = stream;
    console.log('canvas element', canvas, stream);

    const canvas2 = document.getElementById("canvas2");
    const ctx2 = canvas2.getContext("2d");

    let poses = [];
    // let parts = [leftShoulder, rightShoulder, leftHip, rightHip, leftKnee, rightKnee];
    // let partRefs = [5, 6, 11, 12, 13, 14];

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true }).then(function (stream) {
            video.srcObject = stream;
            video.play();
        });
    }

    function drawCameraIntoCanvas() {
        ctx2.drawImage(video, 0, 0, 640, 480);
        // ctx.drawImage(video, 0, 0, 640, 480);
        // ctx.clearRect(0, 0, width, height);
        // canvas.style.backgroundColor = "white"
        // ctx.beginPath();
        ctx.fillStyle = "white"
        ctx.fillRect(0, 0, width, height);
        // ctx.stroke();
        if (poses.length > 0) {
            // drawCoreKeypoints();
            // drawKeypoints();
            // drawSkeleton();
            drawSkeleton2();
        }
        window.requestAnimationFrame(drawCameraIntoCanvas);
    }

    drawCameraIntoCanvas();

    const poseOptions = {
        // flipHorizontal: false,
        detectionType: 'multiple',
    };

    const poseNet = ml5.poseNet(video, modelReady);
    // const poseNet = ml5.poseNet(video, poseOptions, modelReady);
    // const poseNet = ml5.poseNet(video, { detectionType: 'multiple' }, modelReady);
    // const poseNet = ml5.poseNet(video, 'multiple', modelReady);
    // const poseNet = ml5.poseNet(video, poseOptions, 'multiple', modelReady);
    poseNet.on('pose', (results) => {
        poses = results;
    });

    function modelReady() {
        poseNet.multiPose(video);
    }

    function drawCoreKeypoints() {
        // // identify!!
        // console.log(poses[0].pose);
        // // console.log(poses[0].pose.keypoints[5].position.x)
        // let leftShoulder = poses[0].pose.keypoints[5];
        // // console.log(leftShoulder);
        // // console.log(leftShoulder.position.x)
        // ctx.fillStyle = "red";
        // ctx.lineWidth = 5;
        // ctx.beginPath();
        // ctx.arc(leftShoulder.position.x, leftShoulder.position.y, 5, 0, 2 * Math.PI);
        // ctx.fill();

        for (let i = 0; i < poses.length; i++) {
            let leftShoulder = poses[0].pose.keypoints[5];
            let rightShoulder = poses[0].pose.keypoints[6];
            let leftHip = poses[0].pose.keypoints[11];
            let rightHip = poses[0].pose.keypoints[12];
            let leftKnee = poses[0].pose.keypoints[13];
            let rightKnee = poses[0].pose.keypoints[14];
            let leftShoulderX = leftShoulder.position.x;
            let rightShoulderX = rightShoulder.position.x;
            let leftHipX = leftHip.position.x;
            let rightHipX = rightHip.position.x;
            let leftKneeX = leftKnee.position.x;
            let rightKneeX = rightKnee.position.x;
            let leftShoulderY = leftShoulder.position.y;
            let rightShoulderY = rightShoulder.position.y;
            let leftHipY = leftHip.position.y;
            let rightHipY = rightHip.position.y;
            let leftKneeY = leftKnee.position.y;
            let rightKneeY = rightKnee.position.y;
            let shoulderAveX = (leftShoulderX + rightShoulderX) / 2;
            let shoulderAveY = (leftShoulderY + rightShoulderY) / 2;
            let hipAveX = (leftHipX + rightHipX) / 2;
            let hipAveY = (leftHipY + rightHipY) / 2;
            let kneeAveX = (leftKneeX + rightKneeX) / 2;
            let kneeAveY = (leftKneeY + rightKneeY) / 2;


            ctx.fillStyle = "red";
            ctx.lineWidth = 5;
            ctx.beginPath();
            // ctx.arc(leftShoulder.position.x, leftShoulder.position.y, 5, 0, 2 * Math.PI);
            // ctx.arc(leftShoulderX, leftShoulderY, 5, 0, 2 * Math.PI);
            ctx.arc(shoulderAveX, shoulderAveY, 5, 0, 2 * Math.PI);
            ctx.fill();

            ctx.strokeStyle = "blue";
            ctx.beginPath();
            ctx.moveTo(shoulderAveX, shoulderAveY);
            ctx.lineTo(hipAveX, hipAveY);
            ctx.lineTo(kneeAveX, kneeAveY);
            ctx.stroke();

            // for (let j = 0; j < parts.length; j++) {
            //     parts[j] = poses[i].pose.keypoints[5];
        }
    }

    function drawKeypoints() {
        for (let i = 0; i < poses.length; i++) {
            for (let j = 0; j < poses[i].pose.keypoints.length; j += 1) {
                let keypoint = poses[i].pose.keypoints[j];
                if (keypoint.score > 0.2) {
                    ctx.strokeStyle = "red";
                    ctx.lineWidth = 5;
                    ctx.beginPath();
                    ctx.arc(keypoint.position.x, keypoint.position.y, 1, 0, 2 * Math.PI);
                    ctx.stroke();
                }
            }
        }
    }

    function drawSkeleton() {
        for (let i = 0; i < poses.length; i += 1) {
            for (let j = 0; j < poses[i].skeleton.length; j += 1) {
                let partA = poses[i].skeleton[j][0];
                let partB = poses[i].skeleton[j][1];
                ctx.strokeStyle = "black";
                ctx.lineWidth = 5;
                ctx.beginPath();
                ctx.moveTo(partA.position.x, partA.position.y);
                ctx.lineTo(partB.position.x, partB.position.y);
                ctx.stroke();
                ctx2.strokeStyle = "red";
                ctx2.lineWidth = 5;
                ctx2.beginPath();
                ctx2.moveTo(partA.position.x, partA.position.y);
                ctx2.lineTo(partB.position.x, partB.position.y);
                ctx2.stroke();
            }
        }
    }

    function drawSkeleton2() {
        // console.log(poses);
        for (let i = 0; i < poses.length; i += 1) {
            // console.log(poses[0].pose);
            let leftShoulder = poses[i].pose.keypoints[5];
            let rightShoulder = poses[i].pose.keypoints[6];
            let leftElbow = poses[i].pose.keypoints[7];
            let rightElbow = poses[i].pose.keypoints[8];
            let leftWrist = poses[i].pose.keypoints[9];
            let rightWrist = poses[i].pose.keypoints[10];
            // let parts = [leftShoulder, rightShoulder, leftElbow, rightElbow, leftWrist, rightWrist];
            // ctx.strokeStyle = "blue";
            // ctx.beginPath();
            // ctx.moveTo(shoulderAveX, shoulderAveY);
            // ctx.lineTo(hipAveX, hipAveY);
            // ctx.lineTo(kneeAveX, kneeAveY);
            // ctx.stroke();

            // for (let j = 0; j < parts.length; j += 1) {
            ctx.strokeStyle = "black";
            ctx.lineWidth = 5;
            ctx.beginPath();
            ctx.moveTo(leftWrist.position.x, leftWrist.position.y);
            ctx.lineTo(leftElbow.position.x, leftElbow.position.y);
            ctx.lineTo(leftShoulder.position.x, leftShoulder.position.y);
            ctx.lineTo(rightShoulder.position.x, rightShoulder.position.y);
            ctx.lineTo(rightElbow.position.x, rightElbow.position.y);
            ctx.lineTo(rightWrist.position.x, rightWrist.position.y);
            ctx.stroke();
            // ctx2.strokeStyle = "red";
            ctx2.strokeStyle = "#a360f0";
            ctx2.lineWidth = 5;
            ctx2.beginPath();
            ctx2.moveTo(leftWrist.position.x, leftWrist.position.y);
            ctx2.lineTo(leftElbow.position.x, leftElbow.position.y);
            ctx2.lineTo(leftShoulder.position.x, leftShoulder.position.y);
            ctx2.lineTo(rightShoulder.position.x, rightShoulder.position.y);
            ctx2.lineTo(rightElbow.position.x, rightElbow.position.y);
            ctx2.lineTo(rightWrist.position.x, rightWrist.position.y);
            ctx2.stroke();
            // }
        }
    }

    /* IMAGE CLASSIFIER - discrete */
    let classifier;
    let request;
    let button = document.getElementById("buttonGen");
    button.addEventListener("click", generate);
    let formData = new FormData();
    const image1 = document.getElementById("image1");
    const image2 = document.getElementById("image2");

    setup();
    async function setup() { classifier = await ml5.imageClassifier("DoodleNet", onModelReady); }
    function onModelReady() { console.log("ready!"); }
    function generate() { classifier.classify(canvas, gotResult); }

    function gotResult(error, results) {
        // Display error in the console
        if (error) { console.error(error); }
        console.log(results);
        // The results are in an array ordered by confidence.
        result.innerText = results[0].label;
        probability.innerText = results[0].confidence.toFixed(4);
        // getCanvasBlob();
        // sendCanvasToReplicate();
        sendCanvasToReplicate2(results[0].label);

    }

    function sendCanvasToReplicate() {
        let canvasURL = canvas.toDataURL("image/png", 1);
        formData.append("canvasImage", canvasURL);
        // console.log(canvas); // OK
        // console.log(canvasURL); // OK
        // console.log(formData);
        console.log(formData.get("canvasImage"));
        $.ajax({
            type: "POST",
            // enctype: 'multipart/form-data',
            url: "/dataPost",
            data: formData,
            processData: false,
            contentType: false,
            cache: false,
            timeout: 600000,
            success: function (response) {
                console.log(response);
                // // append header to returned image URL
                // let imageURL = `http://hybrid.concordia.ca/i_planch/telomatic/${response}`;
                // // DEBUGGING: output headed image URL to console
                // console.log(imageURL);
            },
            // helper function
            error: function () { console.log("error occurred"); }
        });
    }



    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob
    function getCanvasBlob() {
        canvas.toBlob((blob) => {
            let url = URL.createObjectURL(blob);
            image.src = url;
            // console.log(url);
            console.log(blob);
            $.ajax({
                type: "POST",
                url: "/dataPost",
                enctype: 'multipart/form-data',
                data: blob,
                dataType: 'image/png',
                // data: url,
                // dataType: 'text',
                // data: formData,
                // dataType: "json",
                // data: { name: "ravi", age: "31" },
                // data: ["ravi", "31"],
                // data: 10,
                processData: false,
                contentType: false,
                cache: false,
                timeout: 600000,
                success: function (response) {
                    console.log("sent");
                    // console.log(data);
                    console.log(response);
                },
                error: function (req, err) {
                    console.log("error: ", err);
                    // console.log(errorMessage)
                    // console.error();
                }
            });
        });
    }

    function sendCanvasToReplicate2(label) {
        let mData = new FormData();
        let canvasURL = canvas.toDataURL("image/png", 1);
        mData.append("canvasImage", canvasURL);
        mData.append("canvasLabel", label);
        console.log(mData.get("canvasImage"));
        console.log(mData.get("canvasLabel"));

        $.ajax({
            type: "POST",
            enctype: 'multipart/form-data', // ONLY if we were sending othere data (i.e. files, images, etc ... )
            url: "/dataUpload",
            data: mData,
            processData: false,
            contentType: false,
            cache: false,
            timeout: 600000,
            success: function (response) {
                console.log("we had success!");
                console.log(response);
                image1.src = response[0];
                image2.src = response[1];
                // image2.src = response;
            },
            error: function () {
                console.log("error occurred");
            }

        });
    }

    // $("#formFavs").submit(function (event) {
    //     // event.preventDefault();
    //     // // get the form data ...
    //     // let myForm = document.getElementById('formFavs');
    //     // let mData = new FormData(myForm);
    //     let mData = new FormData();
    //     let canvasURL = canvas.toDataURL("image/png", 1);
    //     mData.append("canvasImage", canvasURL);
    //     console.log(mData.get("canvasImage"));

    //     $.ajax({
    //         type: "POST",
    //         enctype: 'multipart/form-data', // ONLY if we were sending othere data (i.e. files, images, etc ... )
    //         url: "/dataUpload",
    //         data: mData,
    //         processData: false,
    //         contentType: false,
    //         cache: false,
    //         timeout: 600000,
    //         success: function (response) {
    //             console.log("we had success!");
    //             console.log(response);
    //         },
    //         error: function () {
    //             console.log("error occurred");
    //         }
    //     });
    // })

};