import fs from 'fs';
let text = "text to write to test writeTextTest"

fs.writeFile(`writeTextTest.txt`, text, function (err, res) {
    console.log(text);
});