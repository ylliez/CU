// //POC
// class Play extends Phaser.Scene {
//
//   // NOTE: As we know, the constructor is called when an object is created with this class
//   // but in Phaser 3 we don't actually do much with it! We just make sure that we give
//   // the scene a "key" via its parent which we'll need to use to refer to it in our program.
//   constructor() {
//     super({
//       key: `play`
//     });
//   }
//
//   // NOTE: The create() method is called once when the scene is first created,
//   // so we use it to set up all the elements in the current scene
//   create() {
//     // Let's at least print a message for now to know if this is doing anything...
//     console.log("Play scene created!");
//   }
//
//   // NOTE: The update() method is a lot like the p5.js draw() function, it's called once
//   // every animation frame
//   update() {
//     // Let's put in another message...
//     console.log("Play scene updated!");
//   }
// }

class Play extends Phaser.Scene {
  constructor() {
    super({
      key: `play`
    });
  }

  create() {
    // NOTE: Creating and adding a text object to our scene
    // EXAMPLE: https://phaser.io/examples/v3/view/game-objects/text/basic-text
    // Create a style object to define what the text will look like
    let style = {
      // Use font-family in the same way you use it in CSS
      fontFamily: `sans-serif`,
      // And font size too!
      fontSize: `40px`,
      // Set a fill color for the text (white)
      fill: `#ffffff`,
    };
    // Create a string that describes an amazing game experience!
    let gameDescription = `Think of a number... no that's not it.`;
    // Create the text object that will actually add the text into our
    // scene and display it. The parameters here are:
    // - x position
    // - y position
    // - string to display
    // - style configuration
    this.gameText = this.add.text(100, 100, gameDescription, style);
    // Note that it's often a good idea to assign the resulting text object
    // into a property of the scene if you might want to manipulate it
    // at some later point in your program!
  }

  update() {

  }
}
