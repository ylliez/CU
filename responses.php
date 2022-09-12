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
    </style>
  </head>

  <body>
    <?php
      $title = 'Responses';
      include('menu.php');
    ?>

    <button type="button" class="collapsible" id="responses_0913">09/13 - Short Bio</button>
    <div class="content">
      <h4>PAST</h4>
      <p></p>
      <h4>PRESENT</h4>
      <p></p>
      <h4>FUTURE</h4>
      <p></p>
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
    </script>

  </body>

  </html>


<!-- Rather: I would like each one of you to provide a short bio. Recall where to put this.... 
- your github repo for the cart 451 class - which I will require you to send me the link)
- inside should be an html file called weekly responses and this is where you append all the responses.
So: the bio - need not be only/just text - it can be an image, animation, audio  ....  it could also be rather abstract i.e. you discuss something, an experience, a place ... that you feels represents you.
You choose how you want to be interpreted. -->