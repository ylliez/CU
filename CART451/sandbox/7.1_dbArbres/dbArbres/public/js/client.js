window.onload = function () {
  console.log("we are loaded");

  // // USER QUERY BY NEIGHBOURHOOD
  // document.querySelector("#findData").addEventListener('click', function (event) {
  //   let arrondNom = document.getElementById("arrond_nom").value;
  //   $.get(
  //     "/varsToMongo",
  //     { paramArrondNom: arrondNom },
  //     // if we get a response from the server .... 
  //     function (response) {
  //       console.table(response);
  //     })
  // });

  // USER QUERY BY COORDINATES
  document.querySelector("#geoSearch").addEventListener('click', function (event) {
    let geoResponseDiv = document.getElementById("geoResponse");
    geoResponseDiv.replaceChildren();
    let longitude = document.getElementById("longitude").value;
    let latitude = document.getElementById("latitude").value;
    let distance = document.getElementById("distance").value;
    $.get(
      "/geoVarsToMongo",
      { paramLong: longitude, paramLati: latitude, paramDist: distance },
      // if we get a response from the server .... 
      function (response) {
        // console.log(response);
        for (let i = 0; i < response.length; i++) {
          let essence = response[i].ESSENCE_ANG;
          let number = response[i].No_civique;
          let street = response[i].Rue;
          let resLong = response[i].Longitude;
          let resLati = response[i].Latitude;
          console.log(essence + " at " + number + " " + street + " (coordinates: " + resLati + " " + resLong + ")");
          let para = document.createElement("p");
          let node = document.createTextNode(essence + " at " + number + " " + street + " (coordinates: " + resLati + " " + resLong + ")");
          para.appendChild(node);
          geoResponseDiv.appendChild(para);
        }
      })
  });

};
