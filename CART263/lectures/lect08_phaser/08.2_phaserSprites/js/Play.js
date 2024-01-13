// // single image
// class Play extends Phaser.Scene {
//   constructor() {
//     super({
//       key: `play`
//     });
//   }
//
//   create() {
//     // NOTE: This is the standard way to add a sprite to our scene in Phaser.
//     // "this" refers to the CURRENT SCENE (Play). The parameters for adding
//     // the sprite are
//     // - x position
//     // - y position
//     // - key of the image to use
//     // We assign the new sprite into a property of the scene in case we want
//     // to manipulate it later on
//     // EXAMPLE: https://phaser.io/examples/v3/view/loader/image/load-image
//     this.wall = this.add.sprite(100, 100, `wall`);
//
//     // NOTE: Just for fun, let's tint the sprite to a different color (which works well
//     // if we drew it in white)
//     // As you can see, the sprite object has a setTint() method we can use to change its
//     // color by tinting. Note the notation for indicating the color here is
//     // HEXADECIMAL, but it's written with an 0x in front of the color code instead of a #
//     // EXAMPLE: https://phaser.io/examples/v3/view/display/tint/single-color-tint
//     this.wall.setTint(0xdd3333);
//   }
//
//   update() {
//
//   }
// }

// class Play extends Phaser.Scene {
//   constructor() {
//     super({
//       key: `play`
//     });
//   }
//
//   create() {
//     this.wall = this.add.sprite(100, 100, `wall`);
//     this.wall.setTint(`0xdd3333`);
//
//     // NOTE: We add the avatar in exactly the same way
//     // but providing the key of the sprite sheet this time.
//     this.avatar = this.add.sprite(200, 200, `avatar`);
//
//     // NOTE: Here we create an animation we will play when the avatar is
//     // moving in our game. As discussed, we create it using the animation
//     // system of Phaser 3, which is available via this.anims. We use its
//     // .create() method, passing in a configuration object.
//     // EXAMPLE: https://phaser.io/examples/v3/view/loader/sprite-sheet/load-sprite-sheet
//     let movingAnimationConfig = {
//       // The animation key name we'll use when playing it
//       key: `moving`,
//       // A list of the individual frames in the animation. This could be an array of
//       // image names, but here it's wise to use the special .generateFrameNames() helper
//       // method which we can tell the key of a sprite sheet and the frames to use
//       frames: this.anims.generateFrameNumbers(`avatar`, {
//         // For this moving animation we'll play from the first frame
//         start: 0,
//         // to the last frame
//         end: 3
//       }),
//       // The frame rate this animation should play at
//       frameRate: 30,
//       // How many times to repeat the animation
//       // 0 means not to play at all
//       // Any positive number (e.g. 3) means to play that many loops (e.g. three times)
//       // -1 means to loop infinitely
//       repeat: -1
//     };
//     // NOTE: Now we can tell the animation system to create the animation with this configuration
//     this.anims.create(movingAnimationConfig);
//
//     // NOTE: We can tell the avatar sprite to actually play our newly created animation
//     // using its .play() method and providing the animation key
//     this.avatar.play(`moving`);
//   }
//
//   update() {
//
//   }
// }

// class Play extends Phaser.Scene {
//   constructor() {
//     super({
//       key: `play`
//     });
//   }
//
//   create() {
//     this.wall = this.add.sprite(100, 100, `wall`);
//     this.wall.setTint(`0xdd3333`);
//
//     this.avatar = this.add.sprite(200, 200, `avatar`);
//
//     let movingAnimationConfig = {
//       key: `moving`,
//       frames: this.anims.generateFrameNumbers(`avatar`, {
//         start: 0,
//         end: 3
//       }),
//       frameRate: 30,
//       repeat: -1
//     };
//     this.anims.create(movingAnimationConfig);
//
//     // NOTE: Configuring an idle animation
//     let idleAnimationConfig = {
//       // NOTE: We need to use a different animation key of course
//       key: `idle`,
//       frames: this.anims.generateFrameNumbers(`avatar`, {
//         // NOTE: We're only going to use frame 0, so it's starts and ends there
//         start: 0,
//         end: 0
//       }),
//       // NOTE: No need to specify a frame rate for something that doesn't technically animate!
//       // NOTE: We'll repeat 0 times!
//       repeat: 0
//     };
//     this.anims.create(idleAnimationConfig);
//     // NOTE: It makes sense for the avatar to start out "idle"
//     this.avatar.play(`idle`);
//   }
//
//   update() {
//
//   }
// }

// clean up
class Play extends Phaser.Scene {
  constructor() {
    super({
      key: `play`
    });
  }

  create() {
    this.wall = this.add.sprite(100, 100, `wall`);
    this.wall.setTint(`0xdd3333`);

    this.avatar = this.add.sprite(200, 200, `avatar`);

    this.createAnimations();

    this.avatar.play(`idle`);
  }

  createAnimations() {
    let movingAnimationConfig = {
      key: `moving`,
      frames: this.anims.generateFrameNumbers(`avatar`, {
        start: 0,
        end: 3
      }),
      frameRate: 30,
      repeat: -1
    };
    this.anims.create(movingAnimationConfig);

    let idleAnimationConfig = {
      // NOTE: We need to use a different animation key of course
      key: `idle`,
      frames: this.anims.generateFrameNumbers(`avatar`, {
        // NOTE: We're only going to use frame 0, so it's starts and ends there
        start: 0,
        end: 0
      }),
      // NOTE: No need to specify a frame rate for something that doesn't animate!
      // NOTE: We'll repeat 0 times!
      repeat: 0
    };
    this.anims.create(idleAnimationConfig);
  }

  update() {

  }
}
