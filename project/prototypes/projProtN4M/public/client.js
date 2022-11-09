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

