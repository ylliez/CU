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
app.get('/vis', function (req, res) { res.sendFile(__dirname + '/vis.html') });
app.get('/getWC', handleWCData);
app.get('/getTF', handleTFData);
app.get('/getTFIDF', handleTFIDFData);
app.get('/getSentiment', handleSentimentData);
app.get('/getSingles', handleSinglesData);
app.get('/getSinglesArray', handleSinglesArrayData);

const WordCount = require('./wordCount');
const TFIDF = require('./TFIDF');
const natural = require('natural');
const fs = require('fs');

let textTitle = ['bible', 'quran', 'bgita', 'vedas'];
let textFile = ['bible.txt', 'quran.txt', 'bgita.txt', 'vedas.txt'];
let textRead = [];


// INIT
// read text files
for (let i = 0; i < textFile.length; i++) {
    textRead[i] = fs.readFileSync('assets/' + textFile[i], 'utf8');
}

// WORD COUNT (total words & total unique words)

// WordCount object
let textWordCount = [];
// total word count
let textTotalWords = [];
// unique word count
let textUniqueWords = [];
// get texts' total & unique word count
for (let i = 0; i < textTitle.length; i++) {
    // make WordCount object
    textWordCount[i] = new WordCount();
    // process text
    textWordCount[i].process(textRead[i]);
    // get total word count
    textTotalWords[i] = textWordCount[i].tokens.length;
    // get unique word count
    textUniqueWords[i] = textWordCount[i].keys.length;
}

// // tests
// console.log(textRead[0]);
// console.log(textWordCount[0].dict);
// console.log(textTotalWords[0]);
// console.log(textUniqueWords[0]);
// console.log(textUniqueWords);

// send to visualizer
function handleWCData(req, res) {
    res.send([textTitle, textTotalWords, textUniqueWords]);
}
// console.log([textTitle, textTotalWords, textUniqueWords]);


// TF

// term frequency
let textTF = [];
// normalized term frequency (for word cloud visualization purposes)
let textTFNorm = [];
// get term and normalized term frequencies
for (let i = 0; i < textTitle.length; i++) {
    let tf = [];
    let tfNorm = [];
    for (let j = 0; j < textWordCount[i].keys.length; j++) {
        tf.push([textWordCount[i].keys[j], textWordCount[i].dict[textWordCount[i].keys[j]] / textTotalWords[i]])
        tfNorm.push([textWordCount[i].keys[j], textWordCount[i].dict[textWordCount[i].keys[j]] / textTotalWords[i] * 5000])
    }
    textTF.push(tf);
    textTFNorm.push(tfNorm);
}
// console.log(textTFNorm[0]);
// fs.writeFileSync(`report/data.txt`, JSON.stringify(textTFNorm[0]), 'utf8');
// fs.writeFileSync(`report/data.txt`, JSON.stringify(textTFNorm), 'utf8');

// // tests
// console.log(textTF);
// console.log(textWordCount[0].dict);
// console.log(textWordCount[0].keys[0])
// console.log(textWordCount[0].dict[textWordCount[0].keys[0]])
// console.log(textTotalWords[0])
// console.log(textWordCount[0].dict[textWordCount[0].keys[0]] / textTotalWords[0])
// console.log(textTFNorm);

// send to visualizer
function handleTFData(req, res) {
    res.send(textTFNorm);
}
// const converter = require('convert-array-to-csv');
// const csvFromArrayOfArrays = convertArrayToCSV(textTFNorm)
// console.log(textTFNorm);


// TF-IDF

// term frequency-inverse document frequency
let tfIDF = new TFIDF();
for (let i = 0; i < textRead.length; i++) {
    tfIDF.termFreq(textRead[i]);
}
for (let i = 0; i < textRead.length; i++) {
    tfIDF.docFreq(textRead[i]);
}
tfIDF.finish(textRead.length);
// tfIDF.sortByScoreAsc();
tfIDF.sortByScoreDes();
// console.log(tfIDF.dict);
// tfIDF.logTheDict();

// normalized TF-IDF for visualization
let TFIDFNorm = [];
for (let i in tfIDF.keys) {
    TFIDFNorm.push([tfIDF.keys[i], tfIDF.dict[tfIDF.keys[i]].tfidf * 250000])
}

// TF-IDF for each text
let textTFIDF = [];
let textTFIDFNorm = [];
for (let i = 0; i < textTitle.length; i++) {
    let tfidf = [];
    let tfidfNorm = [];
    for (let j = 0; j < textWordCount[i].keys.length; j++) {
        tfidf.push([textWordCount[i].keys[j], (textWordCount[i].dict[textWordCount[i].keys[j]] / textTotalWords[i]) * (Math.log10(textTitle.length / tfIDF.dict[textWordCount[i].keys[j]].docCount))])
        tfidfNorm.push([textWordCount[i].keys[j], (textWordCount[i].dict[textWordCount[i].keys[j]] / textTotalWords[i]) * (Math.log10(textTitle.length / tfIDF.dict[textWordCount[i].keys[j]].docCount)) * 50000])
    }
    textTFIDF.push(tfidf);
    textTFIDFNorm.push(tfidfNorm);
}

// // tests
// TF-IDF 1 → TF * (docsTot/docsWithTerm)
// TF-IDF 2 → TF * log(docsTot/docsWithTerm)
// TF-IDF 3 → TF/termsTot * log(docsTot/docsWithTerm)
// console.log(textWordCount[0].keys[0]) // 1st word in 1st text
// console.log(textWordCount[0].dict[textWordCount[0].keys[0]]) // count of 1st word in 1st text
// // console.log(textWordCount[1].dict[textWordCount[0].keys[0]]) // count of 1st word in 2nd text
// // console.log(textWordCount[2].dict[textWordCount[0].keys[0]]) // count of 1st word in 3rd text
// // console.log(textWordCount[3].dict[textWordCount[0].keys[0]]) // count of 1st word in 4th text
// console.log(textWordCount[0].dict[textWordCount[0].keys[0]] / textTotalWords[0]) // term frequency of 1st word in 1st text
// console.log(textTitle.length) // count of texts
// console.log(tfIDF.dict[textWordCount[0].keys[0]]) // TFIDF dictionary contents of 1st word in 1st text
// console.log(tfIDF.dict[textWordCount[0].keys[0]].count) // count of 1st word of 1st text in all texts
// console.log(tfIDF.dict[textWordCount[0].keys[0]].docCount) // count of texts containing 1st word of 1st text
// console.log(textTitle.length / tfIDF.dict[textWordCount[0].keys[0]].docCount) // count of texts / count of texts containing 1st word of 1st text (IDF1)
// console.log(Math.log10(textTitle.length / tfIDF.dict[textWordCount[0].keys[0]].docCount)) // log10 of IDF1 (IDF2)
// console.log((textWordCount[0].dict[textWordCount[0].keys[0]] / textTotalWords[0]) * (Math.log10(textTitle.length / tfIDF.dict[textWordCount[0].keys[0]].docCount))) // TF-IDF of 1st word of 1st text
// console.log(textTFIDF[0]);

// inverted TF-IDF
let TFIDFInv = [];
for (let i in tfIDF.keys) {
    TFIDFInv.push([tfIDF.keys[i], 100 - tfIDF.dict[tfIDF.keys[i]].tfidf * 250000])
}

// send to visualizer
function handleTFIDFData(req, res) {
    res.send([TFIDFNorm, textTFIDFNorm[0], textTFIDFNorm[1], textTFIDFNorm[2], textTFIDFNorm[3], TFIDFInv]);
}
// console.log(TFIDFNorm, textTFIDFNorm[0], textTFIDFNorm[1], textTFIDFNorm[2], textTFIDFNorm[3], TFIDFInv)
fs.writeFileSync(`report/TFIDF0.txt`, JSON.stringify(TFIDFNorm), 'utf8');
for (let i = 0; i < textTitle.length; i++) {
    fs.writeFileSync(`report/TFIDF${i + 1}.txt`, JSON.stringify(textTFIDFNorm[i]), 'utf8');
}
fs.writeFileSync(`report/TFIDF5.txt`, JSON.stringify(TFIDFInv), 'utf8');


// NATURAL

// tokenize
let tokenizer = new natural.WordTokenizer();
let textToken = [];
for (let i in textRead) {
    textToken[i] = tokenizer.tokenize(textRead[i]);
}
// let testToken = tokenizer.tokenize("The smart dog jumped over the high fence.");
// console.log(testToken);
// console.log(textToken[0]);

var Analyzer = natural.SentimentAnalyzer;
var stemmer = natural.PorterStemmer;
var analyzer = new Analyzer("English", stemmer, "afinn");
let textSentiment = [];
for (let i in textToken) {
    textSentiment[i] = analyzer.getSentiment(textToken[i])
}
// testSentiment = analyzer.getSentiment(testToken)
// console.log(testSentiment);
// console.log(textSentiment[0]);
// console.log(textSentiment);

// send to visualizer
function handleSentimentData(req, res) {
    res.send(textSentiment);
}

// search words
// let searchTerm = [`pain`, `slave`];
// let searchTerm = [`god`, `love`, `hate`, `happy`, `sad`, `pain`, `delight`, `conquer`, `slave`];
let searchTerm = [`love`, `hate`, `happy`, `sad`, `pain`, `delight`, `conquer`, `slave`];
let textSingleCount = [];
let textSingleFrequency = [];
// let textSingleFrequency = { texts: textTitle };
let textSingleFrequencyArrays = [];

// // TF
// // get single term count
// for (let j = 0; j < searchTerm.length; j++) {
//     console.log(`-------- search term : ${searchTerm[j]} -----------`);
//     let tc = [];
//     for (let i = 0; i < textTitle.length; i++) {
//         tc[i] = textWordCount[i].getCount(searchTerm[j]);
//         console.log(`total times ${searchTerm[j]} appears in the ${textTitle[i]}: ${tc[i]}`);
//         if (tc[i] == undefined) { tc[i] = 0; }
//     }
//     textSingleCount.push(tc);
// }
// console.log(textSingleCount);

for (let j = 0; j < searchTerm.length; j++) {
    // console.log(`-------- search term : ${searchTerm[j]} -----------`);
    // term count
    let tc = [];
    // term frequency
    let tf = { "searchTerm": searchTerm[j], "bible": "0", "quran": "0", "bgita": "0", "vedas": "0" };
    // console.log(tf);
    let tfarray = [];

    // // term frequency normalized
    // let tfNorm = [];
    // for (let i = 0; i < textTitle.length; i++) {
    //     // get term count
    //     tc[i] = textWordCount[i].getCount(searchTerm[j]);
    //     if (tc[i] == undefined) { tc[i] = 0; }
    //     // console.log(`total times ${searchTerm[j]} appears in the ${textTitle[i]}: ${tc[i]}`);
    //     // get term frequency
    //     tf[i] = tc[i] / textUniqueWords[i] * 100;
    //     // console.log(`frequency of ${searchTerm[j]} in the ${textTitle[i]}: ${tf[i]}`);
    // }
    // textSingleCount.push(tc);
    // // textSingleFrequency[searchTerm[j]] = tf;
    // textSingleFrequency.push(tf);

    for (let i = 0; i < textTitle.length; i++) {
        // get term count
        tc[i] = textWordCount[i].getCount(searchTerm[j]);
        if (tc[i] == undefined) { tc[i] = 0; }
        // console.log(`total times ${searchTerm[j]} appears in the ${textTitle[i]}: ${tc[i]}`);
        // get term frequency
        // let textt = textTitle[i]
        // console.log(toString(textTitle[i]))
        tf[textTitle[i]] = tc[i] / textUniqueWords[i] * 100;
        // console.log(`frequency of ${searchTerm[j]} in the ${textTitle[i]}: ${tf[i]}`);
        tfarray.push(tc[i] / textUniqueWords[i] * 100);
    }
    textSingleCount.push(tc);
    // textSingleFrequency[searchTerm[j]] = tf;
    textSingleFrequency.push(tf);
    textSingleFrequencyArrays.push(tfarray);
}

// console.log(textSingleFrequency);

// send to visualizer
function handleSinglesData(req, res) {
    res.send(textSingleFrequency);
}

// send to visualizer
function handleSinglesArrayData(req, res) {
    res.send(textSingleFrequencyArrays);
}
