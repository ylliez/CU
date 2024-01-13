/* NodeJS x Arduino - 3-time machine */
import five from 'johnny-five';
let board, button, led;
let unimpressed = true, delighted = true;
let count = 0;

board = new five.Board({ repl: false, debug: false })
board.on("ready", function () {
    button = new five.Button(8);
    led = new five.Led(2);
    led.on();
    button.on("down", function () {
        if (unimpressed) {
            unimpressed = false;
            setTimeout(function () { unimpressed = true; }, 1000);
            if (delighted) {
                led.off();
                delighted = false;
                doTheThing();
            } else {
                sound.play("buzzer.mp3");
                console.log("<buzzer.mp3>")
            }
        }
    });
});

function doTheThing() {
    count++;
    console.log(count)
    led.on();
    delighted = true;
}

// /* NodeJS x Arduino - 3-time machine */
// import five from 'johnny-five';
// let board, button, led;
// let depressed = false;
// let count = 0;
// board = new five.Board({ repl: false, debug: false });
// board.on("ready", function () {
//     button = new five.Button(8);
//     led = new five.Led(2);
//     led.on();
//     button.on("up", function () {
//         //     if (!depressed) {
//         //         depressed = true;
//         //         setTimeout(function () { depressed = false; }, 1000);
//         //         count++
//         //         console.log(count)
//         //     }
//         //     // led.off();
//         //     // count++
//         //     // console.log(count)
//         // });
//         console.log("up")
//     });
//     button.on("down", function () {
//         console.log("down")
//     });
// });

// /* NodeJS x Arduino - 3-time machine */
// import five from 'johnny-five';
// let board, button, led;
// let trigger = 0;
// board = new five.Board({ repl: false, debug: false });
// board.on("ready", function () {
//     button = new five.Button(8);
//     led = new five.Led(2);
//     led.on();
//     button.on("up", function () {
//         led.off();
//         if (trigger < 2) {
//             setTimeout(function () { led.on(); }, 2000);
//             trigger++
//             console.log(trigger)
//         } else {
//             console.log("done playing for today")
//         }
//     });
// });

// /* NodeJS x Arduino - perpetual machine */
// import five from 'johnny-five';
// let board, button, led;
// board = new five.Board({ repl: false, debug: false });
// board.on("ready", function () {
//     button = new five.Button(2);
//     led = new five.Led(8);
//     setTimeout(function () { led.on(); }, 2000);
//     button.on("down", function () {
//         led.off();
//         setTimeout(function () { led.on(); }, 2000);
//     });
// });

// /* NodeJS x Arduino - perpetual machine */
// import five from 'johnny-five';
// let board = new five.Board(), button, led;
// board.on("ready", function () {
//     button = new five.Button(2);
//     led = new five.Led(8);
//     board.repl.inject({ button: button, led: led });
//     setTimeout(function () { led.on(); }, 5000);
//     button.on("down", function () {
//         led.off();
//         setTimeout(function () { led.on(); }, 2000);
//     });
// });

// /* NodeJS x Arduino - button-kill timein-LED */
// import five from 'johnny-five';
// let board, button, led;
// board = new five.Board();
// board.on("ready", function () {
//     button = new five.Button(2);
//     led = new five.Led(8);
//     board.repl.inject({ button: button });
//     setTimeout(function () { led.on(); }, 5000);
//     button.on("down", function () { led.off(); });
//     // button.on("hold", function () { });
//     // button.on("up", function () { led.off(); });
// });

// /* NodeJS x Arduino - button-activated LED */
// import five from 'johnny-five';
// let board, button, led;
// board = new five.Board();
// board.on("ready", function () {
//     button = new five.Button(2);
//     led = new five.Led(8);
//     board.repl.inject({ button: button });
//     button.on("down", function () { led.on(); });
//     button.on("hold", function () { });
//     button.on("up", function () { led.off(); });
// });

// /* NodeJS x Arduino - detect button press */
// import five from 'johnny-five';
// let board, button;
// board = new five.Board();
// board.on("ready", function () {
//     button = new five.Button(2);
//     board.repl.inject({ button: button });
//     button.on("down", function () { console.log("down"); });
//     button.on("hold", function () { console.log("hold"); });
//     button.on("up", function () { console.log("up"); });
// });

// board.on('ready', function () {
//     var led = new five.Led(8);
//     led.blink(3000);
// });

// /* NodeJS x Arduino - blink LED off-board */
// import five from 'johnny-five';
// var board = new five.Board();
// board.on('ready', function () {
//     var led = new five.Led(8);
//     led.blink(3000);
// });

// /* NodeJS x Arduino - blink LED on-board */
// import five from 'johnny-five';
// var board = new five.Board();
// board.on('ready', function () {
//     var led = new five.Led(13);
//     led.blink(3000);
// });