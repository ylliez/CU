// //single images
//class Boot extends Phaser.Scene {
//
//   constructor() {
//     super({
//       key: `boot`
//     });
//   }
//
//   // NOTE: we add the preload() method to tell Phaser 3 we want to preload
//   // asset files here
//   preload() {
//     // NOTE: we use special loading methods to load files into our program
//     // Here we're using the special "load" property of the scene to load
//     // a simple image. The parameters are
//     // - The "key" we will use to refer to this asset later
//     // - The path to the image asset
//     // EXAMPLE: https://phaser.io/examples/v3/view/loader/image/load-image
//     this.load.image(`wall`, `assets/images/wall.png`);
//
//     // NOTE: now that we're loading an actual file, we need to wait until everything
//     // loads before switching to the next scene. We use the "complete" event listener
//     // of the loader to do this.
//     // Note the use of an ARROW FUNCTION so that we can still use "this" correctly
//     // inside the event handler!
//     // EXAMPLE: https://phaser.io/examples/v3/view/loader/loader-events/load-progress
//     this.load.on(`complete`, () => {
//       // Switch to the Play scene
//       this.scene.start(`play`);
//     });
//   }
//
//   create() {
//     let loadingTextStyle = {
//       fontFamily: `sans-serif`,
//       fontSize: `40px`,
//       fill: `#ffffff`,
//       align: `center`
//     };
//     let loadingString = `Loading...`;
//     this.loadingText = this.add.text(100, 100, loadingString, loadingTextStyle);
//
//     // NOTE: We removed the scene switching instruction here and moved it up
//     // into our loading completion handler because that's when we really want
//     // to switch to the next scene.
//   }
//
//   update() {
//
//   }
// }

class Boot extends Phaser.Scene {

  constructor() {
    super({
      key: `boot`
    });
  }

  preload() {
    this.load.image(`wall`, `assets/images/wall.png`);

    // NOTE: Here's how to load a simple sprite sheet using the loader's
    // .spritesheet() method.
    // The parameters are
    // - The key we will use to refer to this sprite sheet
    // - The image file containing the sprite sheet
    // - A configuration object specifying at least
    //   - the dimensions of an individual frame of the animation via
    //     frameWidth and frameHeight properties
    //   - the final frame number (counting from 0) so the loader knows
    //     how many frames are in the image
    // EXAMPLE: https://phaser.io/examples/v3/view/loader/sprite-sheet/load-sprite-sheet
    this.load.spritesheet(`avatar`, `assets/images/avatar.png`, {
      // Our animation uses 32x32 pixel frames
      frameWidth: 32,
      frameHeight: 32,
      // Our animation has 4 frames, so the final frame number is 3, counting from 0
      endFrame: 3
    });

    this.load.on('complete', () => {
      this.scene.start(`play`);
    });
  }

  create() {
    let loadingTextStyle = {
      fontFamily: "sans-serif",
      fontSize: "40px",
      fill: "#ffffff",
      align: "center"
    };
    let loadingString = `Loading...`;
    this.loadingText = this.add.text(100, 100, loadingString, loadingTextStyle);
  }

  update() {

  }
}
