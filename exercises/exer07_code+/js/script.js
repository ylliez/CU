"use strict";

const ANIMATION_DURATION = 500;
const SECRET_ANSWER = `Theremin`;

$(`.secret`).each(function() {
  $(this).on(`mouseenter`, function(event) {
    $(this).addClass(`found`, ANIMATION_DURATION);
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
    character.removeClass(`found`, ANIMATION_DURATION);
    character.off(`mouseenter`);
    if($(this).text() === SECRET_ANSWER) { $(`#solved-dialog`).dialog(`open`); }
  }
});

$(`#solved-dialog`).dialog({
  autoOpen: false,
  modal: true,
  buttons: { "I know": function() { $(this).dialog(`close`); }
}});
