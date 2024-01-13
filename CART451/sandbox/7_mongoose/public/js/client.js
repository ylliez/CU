window.onload = function () {
  console.log("page loaded");

  //GET
  document.querySelector("#findData").addEventListener('click', function (event) {

    let searchCrit = document.getElementById("searchCrit").value;
    $.get(
      "/varsToMongo",
      { paramOne: searchCrit },
      // if we get a response from the server .... 
      function (response) {
        console.log(searchCrit + " population: " + response);
        document.getElementById("response").innerHTML = response;
      })
  });//click

  //POST NOTE this is specific for airbnb data set - you change according to your wishes!
  document.querySelector("#sendData").addEventListener('click',
    function (event) {
      event.preventDefault();
      let mData = {
        country: document.querySelector("#country").value,
        area: document.querySelector("#area").value,
        population: document.querySelector("#population").value,
        pop_per_km_sq: document.querySelector("#pop_per_km_sq").value
      };
      console.log("Add-in attempt");
      console.table(mData);

      /*** request ***/
      $.ajax({
        type: "POST",
        data: JSON.stringify(mData),
        url: '/postForm',
        processData: false,
        contentType: "application/json",
        cache: false,
        timeout: 600000,
        success: function (response) {
          //reponse is a STRING
          console.log("Add-in success");
          console.table(response);
        },
        error: function (e) {
          console.log("Add-in failure");
          console.log(e);
        }
      });

    });//click
};
