<!DOCTYPE html>
<html>
  <head lang="en">
    <meta charset="UTF-8">
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
      <p><a href="https://www.wired.com/2006/06/crowds/">The Rise of Crowdsourcing</a> provides a compelling retrospective glance into early 21st century impressions of crowdsourcing. In this 2006 article, Jeff Howe, who contributed to coining the term, approaches the phenomenon as a novel strategy mainly adopted by corporations to reduce costs by harnessing parainstitutional actors (i.e. the crowd) to assist in parcellated tasks, whether entry-level or highly specialized. While addressing negative aspects of crowdsourcing, such as a reduced market for traditional industry or professionals, it is generally presented as a neutral zero-sum labor dynamic, with disadvantages for the aforementioned some, and benefits for others - the amateurs, the tinkerers, the masses. Such a perspective evidently predates the massive rise and socioeconomic establishment of what has since come to be known as the gig economy, a corporatized corollary of crowdsourcing fostered by neoindustrial actors having become so commonplace as to attain <a href="https://www.fastcompany.com/3050660/uber-is-a-verb">verbhood</a> (e.g. AirBnB, Uber, etc…). While the gig economy and crowdsourcing are usually mentioned in the same breath, I would posit a nearly antithetical association between the two. But we would digress.</p>
      <p>Ultimately, however, the evolution of the gig economy has shed light on an ambiguity between consumer and producer inherent in crowdsourcing but brought to its logical extreme in the decade and a half since The Rise of Crowdsourcing. <a href="https://www.wired.com/2006/06/look/">Look Who's Crowdsourcing</a>, another article written by Howe the same year, exposes this consumer-producer ambiguity in commercial contexts, from Lego, to Zazzle or Threadless.com, which employ user-generated content as free or cheap creative material to be marketed to the very same user base. </p>
      <p>Parallels can be drawn with crowdsourced art, in which the masses often find themselves roped into producing the very works of art they consume. Examples of this can be found in a wealth of artistic projects, such as Koblin and Kawashima's <a href="http://www.aaronkoblin.com/project/10000-cents/">Ten Thousand Cents</a>, in which individuals were recruited via Amazon's Mechanical Turk to unwittingly collaborate in digitally painting a simulacrum of a $100 bill, Moniker's cursor-tracking interactive music video <a href="https://studiomoniker.com/projects/do-not-touch">Do Not Touch</a>, wherein the viewer is invited to position their cursor according to on-screen injunctions, layering it atop an agglomerate of all previous users' cursors, or perhaps more essentially in a variety of <a href="https://en.wikipedia.org/wiki/Poietic_Generator">Poetic Generators</a>, broadly defined so as to span a range of practices stretching from the surrealists' <a href="https://commons.wikimedia.org/wiki/Category:Cadavre_exquis">cadavres exquis</a> to Josh Wardle's <a href="https://www.reddit.com/r/place/?cx=720&cy=1020&px=199&ts=1649112460185">Place</a>.</p>
      <p>However, as with the aforementioned commercial examples, these pieces can fail to account for or credit the creative input of the consumer-producer. As such, it can be worth questioning which works merely harness the anonymized "wisdom of the crowd" to make art in their own name (parallels can be drawn here with the recent emergence of AI-assisted creations, but again, we would digress), and which recognize, through credit or otherwise, the essential role of the masses as collaborators in their artmaking.</p>
      <p>A striking example of this phenomenon resolved within an artistic piece, elegant in its simplicity, can be found in Blake Fall-Conroy's <a href="https://www.blakefallconroy.com/minimum-wage-machine.html">Minimum Wage Machine</a>, in which a mechanical sculpture serves as a hand-cranked penny dispenser, providing financial retribution at a minimum wage rate as long as the user activates the piece. In his description, Fall-Conroy explicitly addresses the consumer-producer ambiguity, stating that "the minimum wage machine allows anybody to work for minimum wage." The piece is co-created and consumed through proletarian labor, the epitome of production. </p>
    </div>

<button type="button" class="collapsible" id="responses_0927">09/27 - Proposal</button>
<div class="content">
  <h4><a href="/i_planch/CART451/project/proposal/CART451_proposal.pdf">Project Proposal</a></h4>
</div>

<button type="button" class="collapsible" id="responses_1004">10/04 - Queries</button>
<div class="content">
  <h4><a href="https://github.com/ylliez/CART451/tree/main/sandbox/7.1_dbArbres/dbArbres">Mongoose Queries</a></h4>
</div>

<button type="button" class="collapsible" id="responses_1018">10/18 - Visualization</button>
<div class="content">
  <h4>Experiential Data Visualization</h4>
  <p>In <i><a href="http://www.wefeelfine.org/wefeelfine.pdf">We Feel Fine and Searching the Emotional Web</a></i>, Sepandar Kamvar and Jonathan Harris describe their eponymous project, a techno-artistic exploration of alternative data visualization epistemologies. The authors specifically propose a class of data visualizations called <i>Experiential Data Visualization</i>, which focus on non-verbal illustration of data-based insights targeting viewer affect through more immediate and immersive interaction with data.</p>
  <p>This categorization of data visualizations brought to mind a project from the Center for Spatial Research at Columbia University described by Juan Francisco Saldarriaga, Laura Kurgan and Dare Brawley in <i><a href="https://c4sr.columbia.edu/sites/default/files/publication_pdfs/SaldarriagaKurganBrawley_VisualizingConflict_2017_UrbanPlanningVol2.pdf">Visualizing Conflict: Possibilities for Urban Research</a></i>. In this article, the authors investigate <i>conflict urbanism</i>, a term they use to describe "conflict as a structuring principle of cities intrinsically, as a way of inhabiting and creating urban space." Their methodology in doing so hews closely to Kamvar and Harris' understanding of Experiential Data Visualization, inasmuch as it provides statistical macro but also emotionally-salient micro visual frameworks for experiencing data associated with examples of conflict urbanism.</p>
 <p>We will focus here on <i><a href="https://conflicturbanismcolombia.com/applications/map.html#6/4.565/-72.488">Conflict Urbanism: Colombia</a></i>, one of the two projects described in <i>Visualizing Conflict</i>. This project considers the civilian ramifications of the Colombian conflict, especially in terms of internal displacement, and its consequences on urban ecosystems. The dataset used is the Registro Único de Víctimas, a nationwide governmental database of conflict victims over the past 50 years, which, although incomplete, provides self-reported data about crime and displacement having affected nearly 8 million Colombian citizens, incentivized by the prospect of reparations.</p>
 <p>The data was first used to generate a <a href="https://conflicturbanismcolombia.com/applications/map.html#6.5/5.093/-72.841">macro scale map</a> of all self-reported conflict-related internal movements in Colombia from 1985 to 2015, graphically represented as variably weighted lines with a colour gradient from origin to destination. While this already provides a striking impression of the phenomenon, the authors also present an <a href="https://conflicturbanismcolombia.com/applications/animation.html">animated version</a> of the aforementioned displacement data where each line represents a single movement, approaching a finer-grained scope. Yet where the project is especially congruent with the concept of Experiential Data Visualization is in the third graphic representation of the dataset. Indeed, the authors created an <a href="https://conflicturbanismcolombia.com/applications/interactiveViz.html">interactive visualization</a> of a random sample of 200,000 victims of the conflict. Here, each data point represents an individual conflict event, providing information about the date, type of event, perpetrator and victim when hovered over. The data can further be symbolized as well as ordered by each of these parameters (e.g. order by event date and symbolize by perpetrator, giving an insight so as to the evolution of left-wing guerrilla versus right-wing paramilitary factional activity over time).</p>
 <p>We can find many similarities between <i>Conflict Urbanism: Colombia</i> and <i>We Feel Fine</i>, including in conceptual approach, user interface and design elements, to name but three.<br>Conceptually, both projects explicitly seek to humanize the individuals behind the data. While the initial goal of the Center for Spatial Research was to understand the impact of the conflict on urban development, the authors rapidly come to understand that while the macro scale map "conveys the complexities of the war as a whole, it does not show the stories of individual displacement events or speak to the number of displacements that have occurred from the country side to the cities or within small and medium-sized municipalities." The associated article progresses to the animated version as a potential solution to this issue, enabling a dynamic understanding of individual trajectories of displacement and an even closer look at localized events. However, I would propose that the most poignant element of humanization is conveyed in the third element of visualization, not addressed in the article. This step powerfully demonstrates the passage from what Kamvar and Harris term macro-level summarization to micro-level browsing.</p>
 <p>In this context, we can consider the user interface. Both projects display easily browsable interfaces, which Kamvar and Harris theorize in their fifth design consideration as permitting "qualitative exploration of a population". This also addresses points three and four, where the artists clarify a stance of de-emphasizing ranking to allow for alternative organizing principles. In <i>Conflict Urbanism: Colombia</i>, little would be gained by ranking the phenomena addressed, pushing the authors to develop a similar "faceted search interface."</p>
 <p>Finally, another similarity can be found in specific design elements. Indeed, both projects choose to represent individual data points, i.e. humans, as dynamic particles, harnessing the affective nature of anthropomorphization. This is in keeping with Kamvar and Harris' seventh point of design considerations (“Visualizations that reflect the data”), wherein the artists seek to “[craft] the elements of the visualization to have human qualities to reflect the people they represent,” and is especially pertinent to a project exploring geographic displacement. Due to the incompleteness - and one would imagine, sensitive - nature of information reported in the Registro Único de Víctimas, there are no associated photographs, as in We Feel Fine, yet the humanity of individual events is conveyed in the information box containing the aforementioned event details.</p>
 <p>Differences between the two projects can mainly be elaborated at a pragmatic level of analysis which would consider their motivations and applications. Indeed, despite certain psychosocial flourishes, We Feel Fine remains a fundamentally artistic project, while Conflict Urbanism: Colombia is steeped in sociopolitical academia. One outcome this might influence is a more extremist approach to data visualization in the former, heavily stressing qualitative methodologies and goals over a quantitative approach. Such a dichotomy appears to be less salient in the latter, which might consequently better embody the micro-macro shift. In terms of their applications, it is difficult to consider Kamvar and Harris' piece outside of contemporary technocultural frameworks such as the data narcissism stemming from social media prosumerism and quantified life, or to a lesser extent metamodernist New Sincerity. Nonetheless, we can quote Saldarriaga and his colleagues in saying that "both projects strive to responsibly produce and work with multiple new forms of data."</p>
</div>

<!-- <button type="button" class="collapsible" id="responses_1025">10/25 - ?</button>
<div class="content">
  <h4>?</h4>
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
    if(self.location.hash=="#responses_0927") { document.getElementById("responses_0927").click(); history.pushState("", document.title, window.location.pathname + window.location.search); }
    if(self.location.hash=="#responses_1004") { document.getElementById("responses_1004").click(); history.pushState("", document.title, window.location.pathname + window.location.search); }

    var mallgrab = document.getElementById("mallgrab")
    function mallgrabPlay() { mallgrab.play(); }
    </script>

  </body>

  </html>
