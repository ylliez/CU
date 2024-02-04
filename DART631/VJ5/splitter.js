// Load your PNG image
const image = new Image();
image.src = 'your_image.png';

// Wait for the image to load
image.onload = function () {
    // Create a canvas element with dimensions divided by two
    const canvas = document.createElement('canvas');
    canvas.width = image.width / 2; // Half the original width
    canvas.height = image.height / 2; // Half the original height
    const ctx = canvas.getContext('2d');
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

    // Define the number of rows and columns in the grid, also divided by two
    const rows = 12;
    const columns = 8;

    // Calculate the size of each grid square
    const squareWidth = canvas.width / columns;
    const squareHeight = canvas.height / rows;

    // Create a new canvas for the output image with dimensions divided by two
    const outputCanvas = document.createElement('canvas');
    outputCanvas.width = canvas.width;
    outputCanvas.height = canvas.height;
    const outputCtx = outputCanvas.getContext('2d');

    // Iterate over each square in the grid
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < columns; col++) {
            // Calculate the coordinates of the current square
            const x = col * squareWidth;
            const y = row * squareHeight;

            // Get the pixel data for the current square
            const imageData = ctx.getImageData(x, y, squareWidth, squareHeight);
            const pixels = imageData.data;

            // Initialize variables to store the total color components
            let totalRed = 0;
            let totalGreen = 0;
            let totalBlue = 0;

            // Iterate over the pixels in the square
            for (let i = 0; i < pixels.length; i += 4) {
                // Extract the red, green, and blue components of the pixel
                const red = pixels[i];
                const green = pixels[i + 1];
                const blue = pixels[i + 2];

                // Add the color components to the totals
                totalRed += red;
                totalGreen += green;
                totalBlue += blue;
            }

            // Calculate the average color for the square
            const numPixels = squareWidth * squareHeight;
            const averageRed = totalRed / numPixels;
            const averageGreen = totalGreen / numPixels;
            const averageBlue = totalBlue / numPixels;

            // Set the fill style to the average color
            outputCtx.fillStyle = `rgb(${averageRed.toFixed(0)}, ${averageGreen.toFixed(0)}, ${averageBlue.toFixed(0)})`;

            // Draw a rectangle with the average color
            outputCtx.fillRect(x, y, squareWidth, squareHeight);
        }
    }

    // Convert the output canvas to a data URL
    const outputDataURL = outputCanvas.toDataURL('image/png');

    // Create a new image element to display the output
    const outputImage = new Image();
    outputImage.src = outputDataURL;
    document.body.appendChild(outputImage);
};
