// // collide
// class Play extends Phaser.Scene {
//   constructor() {
//     super({
//       key: `play`
//     });
//   }
//
//   create() {
//     this.wall = this.physics.add.sprite(100, 100, `wall`);
//     this.wall.setTint(`0xdd3333`);
//
//     // NOTE: We tell the physics engine that the wall cannot move
//     // which will be important if something bumps into it!
//     // EXAMPLE: https://phaser.io/examples/v3/view/physics/arcade/sprite-vs-immovable
//     this.wall.setImmovable(true);
//
//     this.avatar = this.physics.add.sprite(200, 200, `avatar`);
//
//     // NOTE: The simplest way to enable collisions between the avatar and the wall
//     // is to add an event listener to the physics engine in this.physics as follows
//     // EXAMPLE: https://phaser.io/examples/v3/view/physics/arcade/collider-1
//     this.physics.add.collider(this.avatar, this.wall);
//
//     this.createAnimations();
//
//     this.avatar.play(`idle`);
//
//     this.cursors = this.input.keyboard.createCursorKeys();
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
//     this.handleInput();
//   }
//
//   handleInput() {
//     // NOTE: We can now check which keys are pressed and set the velocity of our
//     // avatar sprite accordingly.
//     // EXAMPLE: https://phaser.io/examples/v3/view/input/keyboard/cursor-keys
//     if (this.cursors.left.isDown) {
//       this.avatar.setVelocityX(-100);
//     }
//     else if (this.cursors.right.isDown) {
//       this.avatar.setVelocityX(100);
//     }
//     else {
//       // If neither left or right are pressed, stop moving on x
//       this.avatar.setVelocityX(0);
//     }
//
//     if (this.cursors.up.isDown) {
//       this.avatar.setVelocityY(-100);
//     }
//     else if (this.cursors.down.isDown) {
//       this.avatar.setVelocityY(100);
//     }
//     else {
//       // If neither up or down are pressed, stop moving on y
//       this.avatar.setVelocityY(0);
//     }
//
//     // NOTE: Now that the avatar might be moving or idle, we should
//     // check its current velocity to figure out which animation to play!
//     // Notice that to check the current velocity we need to access the
//     // "body" property of our avatar (which represents it in relation to the physics
//     // engine) and then the "velocity" property of that body.
//
//     // If either x or y velocity isn't zero, that the avatar is moving
//     if (this.avatar.body.velocity.x !== 0 || this.avatar.body.velocity.y !== 0) {
//       // NOTE: That we include a second argument of "true" to tell the animation system
//       // to ignore this instruction if the animation is already playing. This avoids
//       // having the animation get constantly interrupted as the player moves
//       // DOCS: https://newdocs.phaser.io/docs/3.53.1/Phaser.GameObjects.Sprite#play
//       this.avatar.play(`moving`, true);
//     }
//     // Otherwise it's not moving
//     else {
//       this.avatar.play(`idle`, true);
//     }
//   }
// }

// // collect
// class Play extends Phaser.Scene {
//   constructor() {
//     super({
//       key: `play`
//     });
//   }
//
//   create() {
//     this.wall = this.physics.add.sprite(100, 100, `wall`);
//     this.wall.setTint(`0xdd3333`);
//
//     // NOTE: We're adding another physics sprite with the same image as the wall!
//     this.collectable = this.physics.add.sprite(300, 300, `wall`);
//     // NOTE: We'll tint it a different color so we can tell the difference
//     this.collectable.setTint(`0x3333dd`);
//
//     this.avatar = this.physics.add.sprite(200, 200, `avatar`);
//
//     this.physics.add.collider(this.avatar, this.wall);
//
//     // NOTE: To check for overlaps we do the same kind of thing as above
//     // BUT we'll add extra arguments so we can call our own method to respond
//     // to the overlap! The arguments here are:
//     // - The first thing that can overlap (the avatar)
//     // - The second thing that can overlap (the collectable)
//     // - The function or method to call when it happens (collectItem())
//     // - A function or method to replace how Arcade Physics handles the event (null!)
//     // - The "context" to use when calling our handler(s) ("this", so that we can
//     //   still use the properties and methods of this class)
//     // DOCS: https://photonstorm.github.io/phaser3-docs/Phaser.Physics.Arcade.Factory.html#overlap__anchor
//     this.physics.add.overlap(this.avatar, this.collectable, this.collectItem, null, this);
//
//     this.createAnimations();
//
//     this.avatar.play(`idle`);
//
//     this.cursors = this.input.keyboard.createCursorKeys();
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
//     this.handleInput();
//   }
//
//   // NOTE: This method is called when the avatar overlaps the collectable
//   // It receives two parameters by default, which are the first and second object
//   // that overlapped (the avatar and the collectable item in that order in this case!)
//   collectItem(avatar, item) {
//     // NOTE: We'll keep it simple by just removing the collectable from the scene
//     // using its .destroy() method!
//     item.destroy();
//   }
//
//   handleInput() {
//     // NOTE: We can now check which keys are pressed and set the velocity of our
//     // avatar sprite accordingly.
//     // EXAMPLE: https://phaser.io/examples/v3/view/input/keyboard/cursor-keys
//     if (this.cursors.left.isDown) {
//       this.avatar.setVelocityX(-100);
//     }
//     else if (this.cursors.right.isDown) {
//       this.avatar.setVelocityX(100);
//     }
//     else {
//       // If neither left or right are pressed, stop moving on x
//       this.avatar.setVelocityX(0);
//     }
//
//     if (this.cursors.up.isDown) {
//       this.avatar.setVelocityY(-100);
//     }
//     else if (this.cursors.down.isDown) {
//       this.avatar.setVelocityY(100);
//     }
//     else {
//       // If neither up or down are pressed, stop moving on y
//       this.avatar.setVelocityY(0);
//     }
//
//     // NOTE: Now that the avatar might be moving or idle, we should
//     // check its current velocity to figure out which animation to play!
//     // Notice that to check the current velocity we need to access the
//     // "body" property of our avatar (which represents it in relation to the physics
//     // engine) and then the "velocity" property of that body.
//
//     // If either x or y velocity isn't zero, that the avatar is moving
//     if (this.avatar.body.velocity.x !== 0 || this.avatar.body.velocity.y !== 0) {
//       // NOTE: That we include a second argument of "true" to tell the animation system
//       // to ignore this instruction if the animation is already playing. This avoids
//       // having the animation get constantly interrupted as the player moves
//       // DOCS: https://newdocs.phaser.io/docs/3.53.1/Phaser.GameObjects.Sprite#play
//       this.avatar.play(`moving`, true);
//     }
//     // Otherwise it's not moving
//     else {
//       this.avatar.play(`idle`, true);
//     }
//   }
// }

// // multiple
// class Play extends Phaser.Scene {
//   constructor() {
//     super({
//       key: `play`
//     });
//   }
//
//   create() {
//     this.wall = this.physics.add.sprite(100, 100, `wall`);
//     this.wall.setImmovable(true);
//     this.wall.setTint(`0xdd3333`);
//     // NOTE: More walls!
//     this.wall2 = this.physics.add.sprite(132, 100, `wall`);
//     this.wall2.setImmovable(true);
//     this.wall2.setTint(`0xdd3333`);
//     this.wall3 = this.physics.add.sprite(164, 100, `wall`);
//     this.wall3.setImmovable(true);
//     this.wall3.setTint(`0xdd3333`);
//
//     this.collectable = this.physics.add.sprite(300, 300, `wall`);
//     this.collectable.setTint(`0x3333dd`);
//     // NOTE: More collectables!
//     this.collectable2 = this.physics.add.sprite(300, 364, `wall`);
//     this.collectable2.setTint(`0x3333dd`);
//     this.collectable3 = this.physics.add.sprite(300, 428, `wall`);
//     this.collectable3.setTint(`0x3333dd`);
//
//     this.avatar = this.physics.add.sprite(200, 200, `avatar`);
//
//     this.physics.add.collider(this.avatar, this.wall);
//     // NOTE: More colliders!
//     this.physics.add.collider(this.avatar, this.wall2);
//     this.physics.add.collider(this.avatar, this.wall3);
//
//     this.physics.add.overlap(this.avatar, this.collectable, this.collectItem, null, this);
//     // NOTE: More overlaps!
//     this.physics.add.overlap(this.avatar, this.collectable2, this.collectItem, null, this);
//     this.physics.add.overlap(this.avatar, this.collectable3, this.collectItem, null, this);
//
//     this.createAnimations();
//
//     this.avatar.play(`idle`);
//
//     this.cursors = this.input.keyboard.createCursorKeys();
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
//     this.handleInput();
//   }
//
//   // NOTE: This method is called when the avatar overlaps the collectable
//   // It receives two parameters by default, which are the first and second object
//   // that overlapped (the avatar and the collectable item in that order in this case!)
//   collectItem(avatar, item) {
//     // NOTE: We'll keep it simple by just removing the collectable from the scene
//     // using its .destroy() method!
//     item.destroy();
//   }
//
//   handleInput() {
//     // NOTE: We can now check which keys are pressed and set the velocity of our
//     // avatar sprite accordingly.
//     // EXAMPLE: https://phaser.io/examples/v3/view/input/keyboard/cursor-keys
//     if (this.cursors.left.isDown) {
//       this.avatar.setVelocityX(-100);
//     }
//     else if (this.cursors.right.isDown) {
//       this.avatar.setVelocityX(100);
//     }
//     else {
//       // If neither left or right are pressed, stop moving on x
//       this.avatar.setVelocityX(0);
//     }
//
//     if (this.cursors.up.isDown) {
//       this.avatar.setVelocityY(-100);
//     }
//     else if (this.cursors.down.isDown) {
//       this.avatar.setVelocityY(100);
//     }
//     else {
//       // If neither up or down are pressed, stop moving on y
//       this.avatar.setVelocityY(0);
//     }
//
//     // NOTE: Now that the avatar might be moving or idle, we should
//     // check its current velocity to figure out which animation to play!
//     // Notice that to check the current velocity we need to access the
//     // "body" property of our avatar (which represents it in relation to the physics
//     // engine) and then the "velocity" property of that body.
//
//     // If either x or y velocity isn't zero, that the avatar is moving
//     if (this.avatar.body.velocity.x !== 0 || this.avatar.body.velocity.y !== 0) {
//       // NOTE: That we include a second argument of "true" to tell the animation system
//       // to ignore this instruction if the animation is already playing. This avoids
//       // having the animation get constantly interrupted as the player moves
//       // DOCS: https://newdocs.phaser.io/docs/3.53.1/Phaser.GameObjects.Sprite#play
//       this.avatar.play(`moving`, true);
//     }
//     // Otherwise it's not moving
//     else {
//       this.avatar.play(`idle`, true);
//     }
//   }
//
//   // More methods would be here
// }

// multiple w/ groups
class Play extends Phaser.Scene {
  constructor() {
    super({
      key: `play`
    });
  }

  create() {
    // NOTE: Instead of creating individual walls, we create a group of walls all at once.
    // By adding a group to the physics engine, we can specify some basic details about the
    // image to use, the number to create, and some simple physics properties.
    // We assign the result into a property of the scene so we can deal with the group of walls
    // when we need to.
    // EXAMPLE: https://phaser.io/examples/v3/view/game-objects/group/create-invaders
    this.walls = this.physics.add.group({
      // All walls should use the wall image key
      key: `wall`,
      // Make all the walls created immovable
      immovable: true,
      // Create 16 walls
      quantity: 16,
    });

    // NOTE: Now that we've created all these wall and they're in our group, we need to
    // iterate through them to set them up! Fortunately the group gives us easy access
    // to its children and a method to iterate through them!
    this.walls.children.each(function(wall) {
      // Choose a random position on the canvas
      // NOTE: how the Phaser.Math module gives us access to lots of useful math
      // helper functions!
      // NOTE: we can use this.sys.canvas to find out the dimensions of our game
      // on the canvas!
      let x = Phaser.Math.Between(0, this.sys.canvas.width);
      let y = Phaser.Math.Between(0, this.sys.canvas.height);
      // Set the position of the current wall
      wall.setPosition(x, y);
      // Set the tint of the current wall
      wall.setTint(`0xdd3333`);
      // Note how we pass "this" as the second argument to .each() so that we can use the class'
      // methods and properties if needed
    }, this);

    // NOTE: Do roughly the same thing for the collectables to create randomly positioned
    // collectables
    this.collectables = this.physics.add.group({
      key: 'wall',
      repeat: 9
    });

    this.collectables.children.each(function(collectable) {
      let x = Phaser.Math.Between(0, this.sys.canvas.width);
      let y = Phaser.Math.Between(0, this.sys.canvas.height);
      collectable.setPosition(x, y);
      collectable.setTint(`0x3333dd`);
    }, this);

    this.avatar = this.physics.add.sprite(200, 200, `avatar`);

    // NOTE: We can add a collider between the avatar and the GROUP of walls!
    // It will check the collision between the avatar and all the walls for us!
    this.physics.add.collider(this.avatar, this.walls);

    // NOTE: We can add an overlap check between the avatar and the GROUP of collectables!
    // It will check the overlaps between the avatar and all the collectables for us!
    this.physics.add.overlap(this.avatar, this.collectables, this.collectItem, null, this);

    this.createAnimations();

    this.avatar.play(`idle`);

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
      key: `idle`,
      frames: this.anims.generateFrameNumbers(`avatar`, {
        start: 0,
        end: 0
      }),
      repeat: 0
    };
    this.anims.create(idleAnimationConfig);
  }

  update() {
    this.handleInput();
  }

  collectItem(avatar, item) {
    item.destroy();
  }

  handleInput() {
    if (this.cursors.left.isDown) {
      this.avatar.setVelocityX(-100);
    }
    else if (this.cursors.right.isDown) {
      this.avatar.setVelocityX(100);
    }
    else {
      this.avatar.setVelocityX(0);
    }

    if (this.cursors.up.isDown) {
      this.avatar.setVelocityY(-100);
    }
    else if (this.cursors.down.isDown) {
      this.avatar.setVelocityY(100);
    }
    else {
      this.avatar.setVelocityY(0);
    }

    if (this.avatar.body.velocity.x !== 0 || this.avatar.body.velocity.y !== 0) {
      this.avatar.play(`moving`, true);
    }

    else {
      this.avatar.play(`idle`, true);
    }
  }
}
