const TFIDF = require('./TFIDF');
const fs = require('fs');

let tfIDF = new TFIDF();

loadSamples();

function loadSamples() {
    let filenames = ['bible.txt', 'quran.txt', 'bhagavadGita.txt', 'vedas.txt'];
    for (let i = 0; i < filenames.length; i++) { getTermFreq(filenames[i]); }
    for (let i = 0; i < filenames.length; i++) { getDocFreq(filenames[i]); }
    tfIDF.finish(filenames.length);
    // tfIDF.sortByScoreAsc();
    tfIDF.sortByScoreDes();
    // console.log(tfIDF.dict);
    tfIDF.logTheDict();
}

function getTermFreq(filename) {
    let data = fs.readFileSync('assets/' + filename, 'utf8');
    tfIDF.termFreq(data);
}


function getDocFreq(filename) {
    let data = fs.readFileSync('assets/' + filename, 'utf8');
    tfIDF.docFreq(data);
}


// console.log(tfIDF.totalwords);
// console.log(tfIDF.getScore(`pain`));
// console.log(tfIDF.getScore(`allah`));

