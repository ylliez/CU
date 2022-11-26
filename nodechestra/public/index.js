
console.log(`nodechestra client page loaded`);

const socket = io();
socket.on("connect", () => {
    console.log(`client ID: ${socket.id}`); // x8WIv7-mJelg7on_ALbx
});

socket.onAny((event, args) => {
    console.log(event, args);
});
// socket.on("disconnect", () => {
//     console.log(socket.id); // undefined
// });

function inputNum(tag) {
    // $.get(
    //     "/passInputNum",
    //     { cat, id, val },
    //     (response) => {
    //         console.log(response);
    //     }
    // );
    socket.emit("inputNum", tag);
}

//     ws.onopen = function () {
//         ws.send(`C2S - Client ID: ${clientID}`);
//         ws.onmessage = function (event) {
//             let S2Cmessage = event.data;
//             console.log(`S2C: ${S2Cmessage}`);
//         };
//     }

//     ws.onclose = function () {
//         console.log("Connection closed");
//     };

//     // let delAmt = document.querySelector("#delAmt")
//     // delAmt.addEventListener("input", () => {
//     //     console.log(delAmt.alt, delAmt.id, delAmt.value);
//     //     // ws.send(`${delAmt.alt} ${delAmt.id} ${delAmt.value}`);
//     // });

//     document.querySelectorAll(".del").forEach((item) => {
//         item.addEventListener("input", () => {
//             console.log(item.class, item.id, item.value);
//             ws.send(`${item.alt} ${item.id} ${item.value}`);
//         })
//     });
// }

// window.onbeforeunload = () => {
//     ws.close();
// }


function inputStr(cat, id, val) {
    $.get(
        "/passInputStr",
        { cat, id, val },
        (response) => {
            console.log(response);
        }
    );
}

function clientInput(cat, id, val) {
    $.get(
        "/passClientInput",
        { cat, id, val },
        (response) => {
            console.log(response);
        }
    );
}

