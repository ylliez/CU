"use strict";

// $(`#prisoner`).draggable();

// $(`#prisoner`).draggable();
// $(`#prison`).draggable();

// $(`#prisoner`).draggable({ axis: `x` });

// $(`#prisoner`).draggable({ containment: `#prison` });

// $(`#prisoner`).draggable({
//   containment: `#prison`,
//   start: function(event, ui) { $(this).css(`text-decoration`, `underline`); },
//   stop: function(event, ui) { $(this).css(`text-decoration`, `none`); }
// });

// $(`#prisoner`).draggable({
//   containment: `#prison`,
//   start: function(event, ui) { $(this).css(`color`, `#f00`); },
//   stop: function(event, ui) { $(this).css(`color`, `#000`); }
// });

// // Make the prisoner draggable
// $(`#prisoner`).draggable();
// // But disable dragging after two seconds
// setTimeout(function() {
//   $(`#prisoner`).draggable(`disable`);
// }, 2000);

// // make prisoner draggable
// $(`#prisoner`).draggable({
//   containment: `#prison`,
//   start: function(event, ui) { $(this).css(`color`, `#f00`); },
//   stop: function(event, ui) { $(this).css(`color`, `#000`); }
// });
// //make escape tunnel droppable
// $(`#escape-tunnel`).droppable({
//   drop: function(event, ui) {
//     $(`#prisoner`).remove();
//   }
// });

// // make prisoner draggable
// $(`#prisoner`).draggable({
//   containment: `#prison`,
//   start: function(event, ui) { $(this).css(`color`, `#f00`); },
//   stop: function(event, ui) { $(this).css(`color`, `#000`); }
// });
// //make escape tunnel droppable
// $(`#escape-tunnel`).droppable({
//   drop: function(event, ui) {
//     ui.draggable.remove();
//   }
// });


/* jQuery UI Effects */

// // Prisoner is draggable
// $(`#prisoner`).draggable({
//   // Prisoner cannot be dragged out of the prison
//   containment: `#prison`,
//   // Prisoner gets an underline when dragging starts
//   start: function(event, ui) {
//     $(this).css(`text-decoration`, `underline`);
//     $(this).animate({ "color": `#44f` }, 1000);
//   },
//   // Prisoner loses underline when dragging stops
//   stop: function(event, ui) {
//     $(this).css(`text-decoration`, `none`);
//     $(this).animate({ "color": `#000` }, 1000);
//   }
// });

// // simplified
// $(`#prisoner`).draggable({
//   containment: `#prison`,
//   start: function(event, ui) { $(this).animate({ "color": `#f00` }, 1000); },
//   stop: function(event, ui) { $(this).animate({ "color": `#000` }, 1000); }
// });

// alternatively animate class addition with identical properties & values (set in stylesheet)
// $(`#prisoner`).draggable({
//   containment: `#prison`,
//   start: function(event, ui) { $(this).addClass(`prisoner-dragging`, 1000); },
//   stop: function(event, ui) { $(this).removeClass(`prisoner-dragging`, 1000); }
// });

// Prisoner shakes with rage at the start
// $(`#prisoner`).effect({ effect: `shake` });
// $(`#prisoner`).effect({ effect: `shake`, duration: 2000 });
// $(`#prisoner`).effect({ effect: `shake`, duration: 2000, times: 10, distance: 5 });

// $(`#prisoner`).effect({ effect: `shake`, duration: 1000, times: 10, distance: 5, complete: makePrisonerDraggable });
//
// function makePrisonerDraggable() {
//   $(`#prisoner`).draggable({
//     containment: `#prison`,
//     start: function(event, ui) { $(this).addClass(`prisoner-dragging`, 1000); },
//     stop: function(event, ui) { $(this).removeClass(`prisoner-dragging`, 1000); }
//   });
// }

// $(`#prisoner`).effect({ effect: `shake`, duration: 1000, times: 10, distance: 5, complete: makePrisonerDraggable });
//
// function makePrisonerDraggable() {
//   $(`#prisoner`).draggable({
//     containment: `#prison`,
//     start: function(event, ui) { $(this).addClass(`prisoner-dragging`, 1000); },
//     stop: function(event, ui) { $(this).removeClass(`prisoner-dragging`, 1000); }
//   });
// }
//
// $(`#escape-tunnel`).droppable({
//   drop: function(event, ui) {
//     $(this).hide({ effect: `blind`, duration: 500 });
//     ui.draggable.remove();
//   }
// });


/* jQuery UI Widgets*/

// // dialog
// // $(`#introduction-dialog`).dialog();
// $(`#introduction-dialog`).dialog({ modal: true });
//
// $(`#prisoner`).effect({ effect: `shake`, duration: 1000, times: 10, distance: 5, complete: makePrisonerDraggable });
//
// function makePrisonerDraggable() {
//   $(`#prisoner`).draggable({
//     containment: `#prison`,
//     start: function(event, ui) { $(this).addClass(`prisoner-dragging`, 1000); },
//     stop: function(event, ui) { $(this).removeClass(`prisoner-dragging`, 1000); }
//   });
// }
//
// $(`#escape-tunnel`).droppable({
//   drop: function(event, ui) {
//     $(this).hide({ effect: `blind`, duration: 500 });
//     ui.draggable.remove();
//   }
// });

// // buttons - POC
// $(`#introduction-dialog`).dialog({
//   modal: true,
//   buttons: {
//     "Imagination": function() { $(this).dialog(`close`); },
//     "Escape tunnel": function() { $(this).dialog(`close`); }
//   }});
//
// $(`#prisoner`).effect({ effect: `shake`, duration: 1000, times: 10, distance: 5, complete: makePrisonerDraggable });
//
// function makePrisonerDraggable() {
//   $(`#prisoner`).draggable({
//     containment: `#prison`,
//     start: function(event, ui) { $(this).addClass(`prisoner-dragging`, 1000); },
//     stop: function(event, ui) { $(this).removeClass(`prisoner-dragging`, 1000); }
//   });
// }
//
// $(`#escape-tunnel`).droppable({
//   drop: function(event, ui) {
//     $(this).hide({ effect: `blind`, duration: 500 });
//     ui.draggable.remove();
//   }
// });

// // buttons - application
// $(`#escape-tunnel`).hide();
//
// $(`#introduction-dialog`).dialog({
//   modal: true,
//   buttons: {
//     "Imagination": function() {
//       $(this).dialog(`close`);
//     },
//     "Escape tunnel": function() {
//       $(`#escape-tunnel`).show();
//       $(this).dialog(`close`);
//     }
//   }});
//
// $(`#prisoner`).effect({ effect: `shake`, duration: 1000, times: 10, distance: 5, complete: makePrisonerDraggable });
//
// function makePrisonerDraggable() {
//   $(`#prisoner`).draggable({
//     containment: `#prison`,
//     start: function(event, ui) { $(this).addClass(`prisoner-dragging`, 1000); },
//     stop: function(event, ui) { $(this).removeClass(`prisoner-dragging`, 1000); }
//   });
// }
//
// $(`#escape-tunnel`).droppable({
//   drop: function(event, ui) {
//     $(this).hide({ effect: `blind`, duration: 500 });
//     ui.draggable.remove();
//   }
// });

// buttons - featured
$(`#escape-tunnel`).hide();

$(`#prisoner`).effect({ effect: `shake`, duration: 1000, times: 10, distance: 5, complete: makePrisonerDraggable });

function makePrisonerDraggable() {
  $(`#prisoner`).draggable({
    containment: `#prison`,
    start: function(event, ui) { $(this).addClass(`prisoner-dragging`, 1000); },
    stop: function(event, ui) { $(this).removeClass(`prisoner-dragging`, 1000); }
  });
}

$(`#escape-tunnel`).droppable({
  drop: function(event, ui) {
    $(this).hide({ effect: `blind`, duration: 500 });
    ui.draggable.remove();
  }
});

$(`#introduction-dialog`).dialog({
  modal: true,
  buttons: {
    "Imagination": function() {
      $(`#prisoner`).draggable(`option`,`containment`,`none`);
      $(this).dialog(`close`);
    },
    "Escape tunnel": function() {
      $(`#escape-tunnel`).show();
      $(this).dialog(`close`);
    }
}});
