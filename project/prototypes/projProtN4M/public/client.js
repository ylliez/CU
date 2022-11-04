function modUI(id, val) {
    console.log(id);
    console.log(val);
    $.get(
        "/passFrequency",
        { id, val },
        (response) => {
            console.log(response);
        }
    );
}