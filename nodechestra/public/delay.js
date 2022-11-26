console.log(`nodechestra delay page loaded`);

const socketDelay = io("/delay");
socketDelay.on("connect", () => {
    console.log(`client ID: ${socketDelay.id}`);
});