<!DOCTYPE html>
<html>
  <head lang="en">
    <meta charset=“UTF-8”>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>CART451 - Responses</title>
    <link rel="icon" type="image/svg" href="assets/icon_network_fw.svg">
    <link rel="stylesheet" href="style.css">
    <style>
      body { color: #000; background-image: url('assets/bkgd_eldhraun.jpg'); }
      header { margin-bottom: 20px; }
      .collapsible { background-color: #777; color: #fff; cursor: pointer; padding: 15px; width: 100%; border: none; text-align: center; outline: none; font-size: 17px; opacity: 80%; }
      .active, .collapsible:hover { background-color: #555; opacity: 95%; }
      .content { background-color: #f1f1f1; padding: 0 15px; text-align: left; max-height: 0; overflow: hidden; transition: max-height 0.2s ease-out; opacity: 70%; margin-bottom: 10px; }
      .collapsible:after { content: url('assets/telo.ico'); float: right; transform: rotate(90deg); }
      .active:after { content: url('assets/telo.ico'); float: right; transform: rotate(180deg); }
      h4 { font-size: 18px; text-align: left; margin-left: 5%; }
      #maps { width: 100%; }
      iframe { position: relative; width: 32vw; height: 20vw; }
      img { position: relative; margin: 10px; width: 10vw; height: 10vw; }
      #mallgrabButton { float: right; margin-right: 46vw; margin-bottom: 20px; }
    </style>
  </head>

  <body>
    <?php
      $title = 'Responses';
      include('menu.php');
    ?>

    <button type="button" class="collapsible" id="responses_0913">09/13 - Short Bio</button>
    <div class="content">
      <h3>PAST</h3>
      <div id="maps">
        <iframe class="map" src="https://maps.google.com/maps?q=biel&t=k&z=13&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        <iframe class="map" src="https://maps.google.com/maps?q=detroit&t=k&z=12&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        <iframe class="map" src="https://maps.google.com/maps?q=paris&t=k&z=11&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        <iframe class="map" src="https://maps.google.com/maps?q=berlin&t=k&z=12&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        <iframe class="map" src="https://maps.google.com/maps?q=isone&t=k&z=12&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        <iframe class="map" src="https://maps.google.com/maps?q=york&t=k&z=12&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
      </div>
      <div id="logos">
        <img src="assets/bio/gren.png"></img>
        <img src="assets/bio/mcgill.svg"></img>
        <img src="assets/bio/cssdp.png"></img>
        <img src="assets/bio/mps.png"></img>
        <img src="assets/bio/d&b.jpeg"></img>
        <img src="assets/bio/flexxco.svg"></img>
        <img src="assets/bio/vrplanet.png"></img>
        <img src="assets/bio/arsenala.jpeg"></img>
      </div>
      <h3>PRESENT</h3>
      <h4>PROGRAM</h4>
      <p>BFA IMCA/CART</p>
      <h4>INTERESTS</h4>
      <p>
        Tinkering, woodwork, metalwork, textiles<br>
        Electronic lutherie, sound spatialization, psychoacoustics<br>
        Interactive visual art, live visual performance<br>
        Computation arts, network art, text-based ML/AI<br>
        Performance art, body art, durational art<br>
        Neuroart, non-normative experiences, neuro/psycho-divergence<br>
        Linguistics, literature, geography, geopolitics<br>
      </p>
      <h4>DORMANT SKILLS</h4>
      <p>
        Cherry-stem knot-tying<br>
        Pyrotechnics<br>
        Childcare<br>
        Budgeting<br>
      </p>
      <h3>FUTURE</h3>
      <button id="mallgrabButton" onclick="mallgrabPlay()" type="button" style="float:right">Equanimity</button>
      <audio id="mallgrab" src="assets/bio/mallgrab.mp3" type="audio/mp3">
    </div>

    <!-- <button type="button" class="collapsible" id="responses_0920">09/20 - ???</button>
    <div class="content">
      <h4></h4>
      <p></p>
      <h4></h4>
      <p></p>
      <h4></h4>
      <p></p>
    </div> -->

    <script>
    var coll = document.getElementsByClassName("collapsible");
    for (var i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        // if (content.style.display === "block") { content.style.display = "none"; }
        // else { content.style.display = "block"; }
        if (content.style.maxHeight) { content.style.maxHeight = null; }
        else { content.style.maxHeight = content.scrollHeight + "px"; }
      });
    }
    if(self.location.hash=="#responses_0913") { document.getElementById("responses_0913").click(); history.pushState("", document.title, window.location.pathname + window.location.search); }
    if(self.location.hash=="#responses_0920") { document.getElementById("responses_0920").click(); history.pushState("", document.title, window.location.pathname + window.location.search); }
    
    var mallgrab = document.getElementById("mallgrab")
    function mallgrabPlay() { mallgrab.play(); }
    </script>

  </body>

  </html>