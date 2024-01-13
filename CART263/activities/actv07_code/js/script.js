"use strict";

$(`.secret`).each(function() {
  $(this).on(`mouseenter`, function(event) {
    $(this).addClass(`found`, 500);
  });
});

$(`.secret`).draggable({
  helper: `clone`,
});

$(`#answer`).droppable({
  drop: function(event, ui) {
    let character = ui.draggable;
    $(this).append(character.text());
    character.draggable(`option`,`disable`,true);
    character.removeClass(`found`, 500);
    character.off(`mouseenter`);
    console.log($(this).text());
    if($(this).text() === `Theremin`) { $(`#solved-dialog`).dialog(`open`); }
  }
});

$(`#solved-dialog`).dialog({
  autoOpen: false,
  modal: true,
  buttons: {
    "I know": function() {
      $(`#prisoner`).draggable(`option`,`containment`,`none`);
      $(this).dialog(`close`);
    }
}});
