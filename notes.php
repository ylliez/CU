<!DOCTYPE html>
<html>
  <head lang="en">
    <meta charset=“UTF-8”>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>CART451 - Notes</title>
    <link rel="icon" type="image/svg" href="assets/icon_network_fw.svg">
    <link rel="stylesheet" href="style.css">
    <style>
      body { color: #000; background-image: url('assets/bkgd_thorlkshofn.jpg'); }
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
      $title = 'Notes';
      include('menu.php');
    ?>

    <button type="button" class="collapsible" id="notes_0906">09/06</button>
    <div class="content">
    <h4>Admin</h4>
    <p>Separate repos for class materials & final project</p>
    <p>Concordia hybrid does not support Node hosting → Can show locally BUT better if live</p>
    <h4>Theory - Collective Intelligence</h4>
    <p>
    Networks as concept broader than just the Internet <br>
    Collective intelligence : collect data from groups of indvs & infer patterns → insight (c.f. census) <br>  
    Crowdsourcing (coined by Jeff Howe) : gathering data from people
    </p>
    <h4>Practice - Node.js</h4>
    <p> <a href="https://github.com/ylliez/CART451/blob/main/sandbox/0906/node.md">Node.js - Part 1</a> </p>
    </div>

    <button type="button" class="collapsible" id="notes_0913">09/13</button>
    <div class="content">
    <h4>Readings - Segaran, 2007</h4>
    <p>
    Machine learning is a subfield of artificial intelligence (AI) concerned with algorithms that allow computers to learn. 
    An algorithm is given a set of data and infers information about the properties of the data, allowing it to make predictions about other datasets. 
    This is possible because almost all nonrandom data contains patterns, and these patterns allow the machine to generalize. 
    In order to generalize, it trains a model with what it determines are the important aspects of the data. <br>
    Transparent (e.g. decision trees) vs. black box (neural networks)
    </p>
    <p>
    Examples: Netflix, Google, HSX, eHarmony. <br>
    Also biotechnology (e.g. DNA), financial fraud detection (e.g. credit card companies), machine vision (e.g. independent component analysis), product marketing (e.g. fashion trends), supply chain optimization, stock market analysis, national security
    </p>
    <p>DNA eHarmony, chromatic trends; newer forms of data?</p>
    <h4></h4>
    <p></p>
    </div>

    <script>
        var coll = document.getElementsByClassName("collapsible");
        for (var i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            // if (content.style.display === "block") { content.style.display = "none"; }
            // else { content.style.display = "block"; }
            if (content.style.maxHeight){ content.style.maxHeight = null; }
            else { content.style.maxHeight = content.scrollHeight + "px"; }
        });
        }
        if(self.location.hash=="#notes_0906") { document.getElementById("notes_0906").click(); history.pushState("", document.title, window.location.pathname + window.location.search); }
        if(self.location.hash=="#notes_0913") { document.getElementById("notes_0913").click(); history.pushState("", document.title, window.location.pathname + window.location.search); }
        </script>

  </body>
</html>