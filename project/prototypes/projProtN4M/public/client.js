function modUI(id, val) {
    console.log(id);
    console.log(val);
    $.get(
        "/passVals",
        { id, val },
        (response) => {
            console.log(response);
        }
    );
}