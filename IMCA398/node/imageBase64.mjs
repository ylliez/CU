// import FileReader from 'filereader'
import fs from 'fs'

// const reader = new FileReader()
// // reader.readAsDataURL(`HotW_test/1681775447217/1-3.png`)
// reader.readAsDataURL(`RIPA_logo_cut.jpg`)
// console.log(reader.result)

console.log("data:image/gif;base64," + fs.readFileSync("HotW_test/1681775447217/1-3.png", 'base64'));