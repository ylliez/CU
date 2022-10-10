window.onload = function () {
    const queryParams = window.location.search;
    const urlParams = new URLSearchParams(queryParams);
    const profileID = urlParams.get('ID');
    $.get(
        "/profileQuery",
        { queryID: profileID },
        (response) => {
            document.getElementById("name").innerHTML = response.Name;
            document.getElementById("age").innerHTML = response.Age;
            document.getElementById("gender").innerHTML = response.Gender;
            document.getElementById("country").innerHTML = response.Nationality;
            document.getElementById("number").innerHTML = response.Telephone;
            document.getElementById("address").innerHTML = response.Address;
            document.getElementById("cohabitants").innerHTML = response.Cohabitants;
            document.getElementById("professional").innerHTML = response.Professional;
            document.getElementById("marital").innerHTML = response.Marital;
            document.getElementById("belief").innerHTML = response.Belief;
            document.getElementById("profilePhoto").src = 'data:' + response.Photo.mimeType + ';base64,' + response.Photo.encodedImg;
            // document.getElementById("profilePhoto").src = 'data:' + response.Photo.mimeType + ';base64,' + response.Photo.encodedImg;
        })
}