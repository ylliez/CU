// /* OCR test 1: https://www.npmjs.com/package/tesseractocr */
// import recognize from 'tesseractocr'
// const text = await recognize('OCR/OCR4.jpg')
// console.log(text)
/* Result:
Tac aieriir
pe phe Lal

Aske t

Pe ier | §
A AehAl

e gt a hamster ©

in meat

POTet ele tml

« 4 Fes

ahs
a

meals

bers Rien
payee

ae te

on heme 2

DLE Gk Phere Ww

De et

4 bee et
4 igh Waid

a aD

eb ae a 1D

ha da

we & 1 al
bud
*/

/* OCR test 2: https://www.npmjs.com/package/node-tesseract-ocr */
import tesseract from "node-tesseract-ocr"

const config = {
    lang: "eng",
    oem: 1,
    psm: 3,
}

tesseract
    // .recognize("OCR/OCR4.jpg", config)
    .recognize("webcam_testOCR.jpg", config)
    .then((text) => {
        // console.log("Result:", text)
        // console.log("Result:", text.replace(/\n|\r/g, ""))
        console.log("Result:", text.replace(/\n/g, ""))
        // console.log("Result:", text.replace(/\s+/g, " "))
    })
    .catch((error) => {
        console.log(error.message)
    })

/* Result: IDENTICAL
Tac aieriir
pe phe Lal

Aske t

Pe ier | §
A AehAl

e gt a hamster ©

in meat

POTet ele tml

« 4 Fes

ahs
a

meals

bers Rien
payee

ae te

on heme 2

DLE Gk Phere Ww

De et

4 bee et
4 igh Waid

a aD

eb ae a 1D

ha da

we & 1 al
bud
*/