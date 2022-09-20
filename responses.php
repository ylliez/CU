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
        <!-- https://google-map-generator.com/ -->
        <iframe class="map" src="https://maps.google.com/maps?q=biel&t=k&z=13&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        <iframe class="map" src="https://maps.google.com/maps?q=detroit&t=k&z=12&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        <iframe class="map" src="https://maps.google.com/maps?q=paris&t=k&z=11&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        <iframe class="map" src="https://maps.google.com/maps?q=berlin&t=k&z=12&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        <iframe class="map" src="https://maps.google.com/maps?q=isone&t=k&z=12&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        <iframe class="map" src="https://maps.google.com/maps?q=york,%20uk&t=k&z=12&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
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

    <button type="button" class="collapsible" id="responses_0920">09/20 - Crowdsourcing</button>
    <div class="content">
      <h4>Crowdsourcing, the gig economy and artistic (col)labor(ation)</h4>
      <p><a href="https://www.wired.com/2006/06/crowds/">The Rise of Crowdsourcing<a> provides a compelling retrospective glance into early 21st century impressions of crowdsourcing. In this 2006 article, Jeff Howe, who contributed to coining the term, approaches the phenomenon as a novel strategy mainly adopted by corporations to reduce costs by harnessing parainstitutional actors (i.e. the crowd) to assist in parcellated tasks, whether entry-level or highly specialized. While addressing negative aspects of crowdsourcing, such as a reduced market for traditional industry or professionals, it is generally presented as a neutral zero-sum labor dynamic, with disadvantages for the aforementioned some, and benefits for others - the amateurs, the tinkerers, the masses. Such a perspective evidently predates the massive rise and socioeconomic establishment of what has since come to be known as the gig economy, a corporatized corollary of crowdsourcing fostered by neoindustrial actors having become so commonplace as to attain <a href="https://www.fastcompany.com/3050660/uber-is-a-verb">verbhood</a> (e.g. AirBnB, Uber, etc…). While the gig economy and crowdsourcing are usually mentioned in the same breath, I would posit a nearly antithetical association between the two. But we would digress.</p>
      <p>Ultimately, however, the evolution of the gig economy has shed light on an ambiguity between consumer and producer inherent in crowdsourcing but brought to its logical extreme in the decade and a half since The Rise of Crowdsourcing. <a href="https://www.wired.com/2006/06/look/">Look Who's Crowdsourcing</a>, another article written by Howe the same year, exposes this consumer-producer ambiguity in commercial contexts, from Lego, to Zazzle or Threadless.com, which employ user-generated content as free or cheap creative material to be marketed to the very same user base. </p>
      <p>Parallels can be drawn with crowdsourced art, in which the masses often find themselves roped into producing the very works of art they consume. Examples of this can be found in a wealth of artistic projects, such as Koblin and Kawashima's <a href="http://www.aaronkoblin.com/project/10000-cents/">Ten Thousand Cents</a>, in which individuals were recruited via Amazon's Mechanical Turk to unwittingly collaborate in digitally painting a simulacrum of a $100 bill, Moniker's cursor-tracking interactive music video <a href="https://studiomoniker.com/projects/do-not-touch">Do Not Touch</a>, wherein the viewer is invited to position their cursor according to on-screen injunctions, layering it atop an agglomerate of all previous users' cursors, or perhaps more essentially in a variety of <a href="https://en.wikipedia.org/wiki/Poietic_Generator">Poetic Generators</a>, broadly defined so as to span a range of practices stretching from the surrealists' <a href="https://commons.wikimedia.org/wiki/Category:Cadavre_exquis">cadavres exquis</a> to Josh Wardle's <a href="https://www.reddit.com/r/place/?cx=720&cy=1020&px=199&ts=1649112460185">Place</a>.</p>
      <p>However, as with the aforementioned commercial examples, these pieces can fail to account for or credit the creative input of the consumer-producer. As such, it can be worth questioning which works merely harness the anonymized “wisdom of the crowd” to make art in their own name (parallels can be drawn here with the recent emergence of AI-assisted creations, but again, we would digress), and which recognize, through credit or otherwise, the essential role of the masses as collaborators in their artmaking.</p>
      <p>A striking example of this phenomenon resolved within an artistic piece, elegant in its simplicity, can be found in Blake Fall-Conroy's <a href="https://www.blakefallconroy.com/minimum-wage-machine.html">Minimum Wage Machine</a>, in which a mechanical sculpture serves as a hand-cranked penny dispenser, providing financial retribution at a minimum wage rate as long as the user activates the piece. In his description, Fall-Conroy explicitly addresses the consumer-producer ambiguity, stating that “the minimum wage machine allows anybody to work for minimum wage.” The piece is co-created and consumed through proletarian labor, the epitome of production. </p>
    </div>

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