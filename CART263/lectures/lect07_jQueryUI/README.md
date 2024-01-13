# CART263 - Lecture 07 - jQuery UI
jQuery UI is a JavaScript library building on top of jQuery (lib req) to provide access to a number of common user experience features you may want to include when creating a website (e.g. interactions like drag and drop, widgets like dialog boxes, additional animations and transitions).
## Links
[Homepage](https://jqueryui.com/)  
[API](https://api.jqueryui.com/)  
[Demos](https://jqueryui.com/demos/)  
[URL](https://jqueryui.com/download/all/) (e.g. [jquery-ui.zip](https://jqueryui.com/resources/download/jquery-ui-1.13.1.zip))  
[CDN](https://releases.jquery.com/) (e.g. `<script src="https://code.jquery.com/ui/1.13.1/jquery-ui.min.js" integrity="sha256-eTyxS0rkjpLEo16uXTS0uVCS4815lc40K2iVpWDvdSY=" crossorigin="anonymous"></script>` + `<link src="https://code.jquery.com/ui/1.13.1/themes/base/jquery-ui.css"></link>`)  
[Themeroller](https://jqueryui.com/themeroller/)(download .zip file with js library, css stylesheet and images [in css/])

## Interactions
### [Draggable](https://api.jqueryui.com/draggable/)
- default (e.g. ```$(`#id`).draggable();```)  
- directional (e.g. ```$(`#id`).draggable({ axis: `x` });```)  
- contained (e.g. ```$(`#prisoner`).draggable({ containment: `#prison` });```)  
- eventful (e.g. `start`, `drag`, and `stop`)
```
$(`#prisoner`).draggable({
  containment: `#prison`,
  start: function(event, ui) { $(this).css(`color`, `#f00`); },
  stop: function(event, ui) { $(this).css(`color`, `#000`); }
});
```
Events also expressible with regular jQuery:
```
$(`#prisoner`).draggable({ containment: `#prison` });
$(`#prisoner`).on(`dragstart`, function(event, ui) { $(this).css(`text-decoration`, `underline`); });
$(`#prisoner`).on(`dragstop`, function(event, ui) { $(this).css(`text-decoration`, `none`); });
```

### [Droppable](https://api.jqueryui.com/droppable/)

## Effects
### Color
```
$(`#prisoner`).draggable({
  containment: `#prison`,
  start: function(event, ui) { $(this).animate({ "color": `#f00` }, 1000); },
  stop: function(event, ui) { $(this).animate({ "color": `#000` }, 1000); }
});
```
### addClass
Having added feature in stylesheet (```.prisoner-dragging { color: #f00; }```)
```
$(`#prisoner`).draggable({
  containment: `#prison`,
  start: function(event, ui) { $(this).addClass(`prisoner-dragging`, 1000); },
  stop: function(event, ui) { $(this).removeClass(`prisoner-dragging`, 1000); }
});
```
### `.effect()`
- shake: (e.g. ```$(`#prisoner`).effect({ effect: `shake` });```
But interferes with draggable, so need to instantiate draggable after
```
$(`#prisoner`).effect({
  effect: `shake`,
  duration: 1000,
  times: 10,
  distance: 5,
  complete: makePrisonerDraggable
});
```
- blind
```
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
```

## Widgets
### [Dialog](https://jqueryui.com/dialog/)
- default: ```$(`#introduction-dialog`).dialog();```
- modal: ```$(`#introduction-dialog`).dialog({ modal: true });```
### [Button](https://jqueryui.com/button/)
- default: ``` ```
