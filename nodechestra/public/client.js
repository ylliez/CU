console.log("CLIENT")
const socket = io();

socket.on("connect", () => {
    console.log(socket.id); // x8WIv7-mJelg7on_ALbx
});

// socket.on("disconnect", () => {
//     console.log(socket.id); // undefined
// });

function inputNum(cat, id, val) {
    $.get(
        "/passInputNum",
        { cat, id, val },
        (response) => {
            console.log(response);
        }
    );
}

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

