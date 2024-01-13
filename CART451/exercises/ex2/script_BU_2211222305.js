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

let texts = ['bible.txt', 'quran.txt', 'bhagavadGita.txt', 'vedas.txt', 'test.txt'];
let textFiles = [];

// READ FILES
for (let i = 0; i < texts.length; i++) {
    textFiles[i] = fs.readFileSync('assets/' + texts[i], 'utf8');
}

let fileBible = fs.readFileSync('assets/bible.txt', 'utf8');
let fileQuran = fs.readFileSync('assets/quran.txt', 'utf8');
let fileBagGit = fs.readFileSync('assets/bhagavadGita.txt', 'utf8');
let fileVedas = fs.readFileSync('assets/vedas.txt', 'utf8');
let fileTest = fs.readFileSync('assets/test.txt', 'utf8');

console.log(fileTest)
// console.log(textFiles[4])
// Bible
let bibCount = new WordCount();
bibCount.process(fileBible);
// // bibCount.sortByCountUp();
// // bibCount.logTheDict();

// Qur'an
let qurCount = new WordCount();
qurCount.process(fileQuran);
// // qurCount.sortByCountUp();
// // qurCount.logTheDict();

// Bhagavad Gita
let bagCount = new WordCount();
bagCount.process(fileBagGit);
// // bagCount.sortByCountUp();
// // bagCount.logTheDict();

// Vedas
let vedCount = new WordCount();
vedCount.process(fileVedas);
// // console.log(vedCount.tokens);
// console.log(`total tokens in Vedas: ${vedCount.tokens.length}`);
// // console.log(vedCount.keys);
// console.log(`total distinct words of 2+ chars in Vedas: ${vedCount.keys.length}`);
// // vedCount.sortByCountUp();
// // vedCount.logTheDict();


// console.log(`================== SELECTED TERMS ==================`);

// // console.log(`total times "god" appears in Bible: ${bibCount.getCount("god")}`);
// console.log(`total times "pain" appears in Bible: ${bibCount.getCount("pain")}`);
// // console.log(`total times "love" appears in Bible: ${bibCount.getCount("love")}`);
// // console.log(`total times "hate" appears in Bible: ${bibCount.getCount("hate")}`);
// // console.log(`total times "suffering" appears in Bible: ${bibCount.getCount("suffering")}`);

// // console.log(`total times "god" appears in Qur'an: ${qurCount.getCount("god")}`);
// console.log(`total times "pain" appears in Qur'an: ${qurCount.getCount("pain")}`);
// // console.log(`total times "happy" appears in Qur'an: ${qurCount.getCount("happy")}`);
// // console.log(`total times "sad" appears in Qur'an: ${qurCount.getCount("sad")}`);

// // console.log(`total times "god" appears in Baghavad Gita: ${bagCount.getCount("god")}`);
// console.log(`total times "pain" appears in Baghavad Gita: ${bagCount.getCount("pain")}`);
// // console.log(`total times "happy" appears in Baghavad Gita: ${bagCount.getCount("happy")}`);
// // console.log(`total times "sad" appears in Baghavad Gita: ${bagCount.getCount("sad")}`);

// console.log(`total times "pain" appears in the Vedas: ${vedCount.getCount("pain")}`);


function handleWCData(req, res) {
    wtBib = bibCount.tokens.length; // 791684
    wtQur = qurCount.tokens.length; // 12592
    wtBag = bagCount.tokens.length; // 155543
    wtVed = vedCount.tokens.length; // 6006
    wdBib = bibCount.keys.length;
    wdQur = qurCount.keys.length;
    wdBag = bagCount.keys.length;
    wdVed = vedCount.keys.length;
    res.send({ 0: wtBib, 1: wtQur, 2: wtBag, 3: wtVed, 4: wdBib, 5: wdQur, 6: wdBag, 7: wdVed });
}

const TFIDF = require('./TFIDF');
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
    // tfIDF.logTheDict();
}

function getTermFreq(filename) {
    let data = fs.readFileSync('assets/' + filename, 'utf8');
    tfIDF.termFreq(data);
}


function getDocFreq(filename) {
    let data = fs.readFileSync('assets/' + filename, 'utf8');
    tfIDF.docFreq(data);
}

// HANDLE CLOUD REQUEST
function handleCloudList(req, res) {
    cloudTfBib = getTfBib();
    cloudTfQur = getTfQur();
    cloudTfBag = getTfBag();
    cloudTfVed = getTfVed();
    cloudTFIDF = getTfidfList();
    cloudTFIDFInv = getTfidfListInv();
    res.send({ 0: cloudTfBib, 1: cloudTfQur, 2: cloudTfBag, 3: cloudTfVed, 4: cloudTFIDF, 5: cloudTFIDFInv });
    // res.send({ 0: cloudTFIDF, 1: cloudTfBib, 2: cloudTfQur, 3: cloudTfBag, 4: cloudTfVed, 5: cloudTFIDFInv });
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

// TF CLOUD
function getTfBib() {
    bibDict = bibCount.dict;
    bibKeys = bibCount.keys;
    cloudTFBib = []
    for (var i in bibKeys) {
        cloudTFBib.push([bibKeys[i], bibDict[bibKeys[i]] / 100])
    }
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


