// import Express library & make instance
const express = require("express");
const app = express();
// import HTTP module, set port number & create server
const http = require('http')
const portNumber = 4200;
let server = http.createServer(app);
server.listen(portNumber, function () { console.log("listening on port:: " + portNumber); });
// serve pages from dir
app.use(express.static(__dirname));

app.get('/', function (req, res) { res.sendFile(__dirname + '/index.html') });
app.get('/cloud', function (req, res) { res.sendFile(__dirname + '/5_cloud.html') });
app.get('/passWCData', handleWCData);
app.get('/passCloudList', handleCloudList);


const WordCount = require('./wordCount');
const fs = require('fs');

let text = ['bible', 'quran', 'bgita', 'vedas'];
let textFile = ['bible.txt', 'quran.txt', 'bgita.txt', 'vedas.txt'];
let textRead = [];
let textWordCount = [];
// total word count
let textTotalWords = [];
// unique word count
let textUniqueWords = [];
// search words
let searchTerm = [`pain`, `slave`];
// let searchTerm = [`god`, `love`, `hate`, `happy`, `sad`, `conquer`, `slave`];
let textTermCount = [];
let TF = [];

// WORDCOUNT
for (let i = 0; i < text.length; i++) {
    // read files
    textRead[i] = fs.readFileSync('assets/' + textFile[i], 'utf8');
    // make WordCount object
    textWordCount[i] = new WordCount();
    // process text
    textWordCount[i].process(textRead[i]);
    // get word total
    textTotalWords[i] = textWordCount[i].tokens.length;
    // get unique word total
    textUniqueWords[i] = textWordCount[i].keys.length;
}
// console.log(textRead[0]);
// console.log(textWordCount[0].dict);
// console.log(textTotalWords[0]);
// console.log(textUniqueWords[0]);
// console.log(textUniqueWords);

function handleWCData(req, res) {
    res.send([textTotalWords, textUniqueWords]);
}


// TF
// // get term count
// for (let j = 0; j < searchTerm.length; j++) {
//     console.log(`-------- search term : ${searchTerm[j]} -----------`);
//     let tc = [];
//     for (let i = 0; i < text.length; i++) {
//         tc[i] = textWordCount[i].getCount(searchTerm[j]);
//         console.log(`total times ${searchTerm[j]} appears in the ${text[i]}: ${tc[i]}`);
//     }
//     textTermCount.push(tc);
// }

for (let j = 0; j < searchTerm.length; j++) {
    // console.log(`-------- search term : ${searchTerm[j]} -----------`);
    let tf = [];
    for (let i = 0; i < text.length; i++) {
        tf[i] = textWordCount[i].getCount(searchTerm[j]) / textUniqueWords[i] * 100;
        // console.log(`${text[i]}: ${tf[i]}`);
    }
    TF.push(tf);
}



let fileBible = fs.readFileSync('assets/bible.txt', 'utf8');
let fileQuran = fs.readFileSync('assets/quran.txt', 'utf8');
let fileBagGit = fs.readFileSync('assets/bhagavadGita.txt', 'utf8');
let fileVedas = fs.readFileSync('assets/vedas.txt', 'utf8');

// Bible
let bibCount = new WordCount();
bibCount.process(fileBible);
// Qur'an
let qurCount = new WordCount();
qurCount.process(fileQuran);
// Bhagavad Gita
let bagCount = new WordCount();
bagCount.process(fileBagGit);
// Vedas
let vedCount = new WordCount();
vedCount.process(fileVedas);



const TFIDF = require('./TFIDF');
let tfIDF = new TFIDF();
loadSamples();

function loadSamples() {
    let filenames = ['bible.txt', 'quran.txt', 'bhagavadGita.txt', 'vedas.txt'];
    for (let i = 0; i < textRead.length; i++) { tfIDF.termFreq(textRead[i]); }
    for (let i = 0; i < textRead.length; i++) { tfIDF.docFreq(textRead[i]); }
    tfIDF.finish(textRead.length);
    // tfIDF.sortByScoreAsc();
    tfIDF.sortByScoreDes();
    // console.log(tfIDF.dict);
    tfIDF.logTheDict();
}

// HANDLE CLOUD REQUEST
function handleCloudList(req, res) {
    cloudTfBib = getTfBib();
    cloudTfQur = getTfQur();
    // console.log(cloudTfQur)
    cloudTfBag = getTfBag();
    cloudTfVed = getTfVed();
    cloudTFIDF = getTfidfList();
    cloudTFIDFInv = getTfidfListInv();
    // res.send({ 0: cloudTfBib, 1: cloudTfQur, 2: cloudTfBag, 3: cloudTfVed, 4: cloudTFIDF, 5: cloudTFIDFInv });
    res.send([getTfBib(), cloudTfQur, cloudTfBag, cloudTfVed, cloudTFIDF, cloudTFIDFInv]);

}

// TF CLOUD
function getTfBib() {
    bibDict = bibCount.dict;
    bibKeys = bibCount.keys;
    cloudTFBib = []
    for (var i in bibKeys) {
        cloudTFBib.push([bibKeys[i], bibDict[bibKeys[i]] / 100])
    }
    // console.log(cloudTFBib)
    return (cloudTFBib);
}

function getTfQur() {
    qurDict = qurCount.dict;
    qurKeys = qurCount.keys;
    cloudTFQur = []
    for (var i in qurKeys) {
        cloudTFQur.push([qurKeys[i], qurDict[qurKeys[i]] / 100])
    }
    return (cloudTFQur);
}

function getTfBag() {
    bagDict = bagCount.dict;
    bagKeys = bagCount.keys;
    cloudTFBag = []
    for (var i in bagKeys) {
        cloudTFBag.push([bagKeys[i], bagDict[bagKeys[i]] / 100])
    }
    return (cloudTFBag);
}

function getTfVed() {
    vedDict = vedCount.dict;
    vedKeys = vedCount.keys;
    cloudTFVed = []
    for (var i in vedKeys) {
        cloudTFVed.push([vedKeys[i], vedDict[vedKeys[i]] / 100])
    }
    return (cloudTFVed);
}


// TF-IDF CLOUD
function getTfidfList() {
    tfidfDict = tfIDF.dict;
    // tfidfKeys = tfIDF.keys;
    cloudTFIDF = []
    for (var i in tfIDF.keys) { cloudTFIDF.push([tfIDF.keys[i], tfidfDict[tfIDF.keys[i]].tfidf * 100000]) }
    // console.log(cloudTFIDF);
    return (cloudTFIDF);
}

// TF-IDF INV
function getTfidfListInv() {
    tfidfDict = tfIDF.dict;
    cloudTFIDFInv = []
    for (var i in tfIDF.keys) { cloudTFIDFInv.push([tfIDF.keys[i], 100 - tfidfDict[tfIDF.keys[i]].tfidf * 100000]) }
    // console.log(cloudTFIDF);
    return (cloudTFIDFInv);
}

// var Analyzer = require('natural').SentimentAnalyzer;
// var stemmer = require('natural').PorterStemmer;
// var analyzer = new Analyzer("English", stemmer, "afinn");
// console.log(analyzer.getSentiment(tokensCat));
// console.log(analyzer.getSentiment(tokensBib));
// console.log(analyzer.getSentiment(tokensQur));
// console.log(analyzer.getSentiment(tokensBag));
// console.log(analyzer.getSentiment(tokensVed));
