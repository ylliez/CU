// // POC
// class Boot extends Phaser.Scene {
//
//   constructor() {
//     super({
//       // NOTE: We need to use an appropriate and different key!
//       key: `boot`
//     });
//   }
//
//   create() {
//
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

  create() {
    // NOTE: Adding a loading message to the scene on creation
    let loadingTextStyle = {
      fontFamily: "sans-serif",
      fontSize: "40px",
      fill: "#ffffff",
      align: "center"
    };
    let loadingString = `Loading...`;
    this.loadingText = this.add.text(100, 100, loadingString, loadingTextStyle);
    
    // NOTE: Switch to the scene with the key of "play"
    // EXAMPLE: https://phaser.io/examples/v3/view/scenes/change-scene-from-create
    this.scene.start(`play`);
  }

  update() {

  }
}
