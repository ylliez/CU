// // animistic
// class Play extends Phaser.Scene {
//   constructor() {
//     super({
//       key: `play`
//     });
//   }
//
//   create() {
//     // NOTE: Instead of using this.add.sprite() we use this.physics.add.sprite()
//     // That's it! Doing this means we're asking the physics system in this.physics
//     // to create our sprite and add all the properties and methods it needs to do
//     // physics things!
//     // EXAMPLE: https://phaser.io/examples/v3/view/physics/arcade/simple-body
//     this.wall = this.physics.add.sprite(100, 100, `wall`);
//     this.wall.setTint(`0xdd3333`);
//
//     // NOTE: Same again here. Just create the sprite in the same way but via the
//     // physics system in this.physics
//     this.avatar = this.physics.add.sprite(200, 200, `avatar`);
//
//     this.createAnimations();
//
//     // NOTE: We now have access to physics methods such as .setVelocityX()
//     // (and .setVelocityY() of course) that can make our physics sprite move!
//     // The parameter specifies the number of pixels per second the avatar
//     // should move at
//     // EXAMPLE: https://phaser.io/examples/v3/view/physics/arcade/simple-body
//     this.avatar.setVelocityX(100);
//     // NOTE: Since the sprite now starts out moving, it makes sense to play its
//     // moving animation instead of its idle animation
//     this.avatar.play(`moving`);
//   }
//
//   createAnimations() {
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
//     let idleAnimationConfig = {
//       // NOTE: We need to use a different animation key of course
//       key: `idle`,
//       frames: this.anims.generateFrameNumbers(`avatar`, {
//         // NOTE: We're only going to use frame 0, so it's starts and ends there
//         start: 0,
//         end: 0
//       }),
//       // NOTE: No need to specify a frame rate for something that doesn't animate!
//       // NOTE: We'll repeat 0 times!
//       repeat: 0
//     };
//     this.anims.create(idleAnimationConfig);
//   }
//
//   update() {
//
//   }
// }

// arrow keys
class Play extends Phaser.Scene {
  constructor() {
    super({
      key: `play`
    });
  }

  create() {
    this.wall = this.physics.add.sprite(100, 100, `wall`);
    this.wall.setTint(`0xdd3333`);

    this.avatar = this.physics.add.sprite(200, 200, `avatar`);

    this.createAnimations();

    // NOTE: The avatar isn't moving to begin with any more
    this.avatar.play(`idle`);

    // NOTE: We can create an easy way to access the arrow keys and space bar
    // using the keyboard input system's .createCursorKeys() method!
    // EXAMPLE: https://phaser.io/examples/v3/view/input/keyboard/cursor-keys
    this.cursors = this.input.keyboard.createCursorKeys();
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
    this.handleInput();
  }

  handleInput() {
    // NOTE: We can now check which keys are pressed and set the velocity of our
    // avatar sprite accordingly.
    // EXAMPLE: https://phaser.io/examples/v3/view/input/keyboard/cursor-keys
    if (this.cursors.left.isDown) {
      this.avatar.setVelocityX(-100);
    }
    else if (this.cursors.right.isDown) {
      this.avatar.setVelocityX(100);
    }
    else {
      // If neither left or right are pressed, stop moving on x
      this.avatar.setVelocityX(0);
    }

    if (this.cursors.up.isDown) {
      this.avatar.setVelocityY(-100);
    }
    else if (this.cursors.down.isDown) {
      this.avatar.setVelocityY(100);
    }
    else {
      // If neither up or down are pressed, stop moving on y
      this.avatar.setVelocityY(0);
    }

    // NOTE: Now that the avatar might be moving or idle, we should
    // check its current velocity to figure out which animation to play!
    // Notice that to check the current velocity we need to access the
    // "body" property of our avatar (which represents it in relation to the physics
    // engine) and then the "velocity" property of that body.

    // If either x or y velocity isn't zero, that the avatar is moving
    if (this.avatar.body.velocity.x !== 0 || this.avatar.body.velocity.y !== 0) {
      // NOTE: That we include a second argument of "true" to tell the animation system
      // to ignore this instruction if the animation is already playing. This avoids
      // having the animation get constantly interrupted as the player moves
      // DOCS: https://newdocs.phaser.io/docs/3.53.1/Phaser.GameObjects.Sprite#play
      this.avatar.play(`moving`, true);
    }
    // Otherwise it's not moving
    else {
      this.avatar.play(`idle`, true);
    }
  }
}
