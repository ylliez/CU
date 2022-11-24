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
app.get('/getWC', handleWCData);
app.get('/getTF', handleTFData);
app.get('/getTFIDF', handleTFIDFData);

const WordCount = require('./wordCount');
const TFIDF = require('./TFIDF');
const fs = require('fs');

let textTitle = ['bible', 'quran', 'bgita', 'vedas'];
let textFile = ['bible.txt', 'quran.txt', 'bgita.txt', 'vedas.txt'];
let textRead = [];


// WORD COUNT (total words & total unique words)

// WordCount object
let textWordCount = [];
// total word count
let textTotalWords = [];
// unique word count
let textUniqueWords = [];
// get texts' total & unique word count
for (let i = 0; i < textTitle.length; i++) {
    // read files
    textRead[i] = fs.readFileSync('assets/' + textFile[i], 'utf8');
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

// // tests
// console.log(textTF);
// console.log(textWordCount[0].keys[0])
// console.log(textWordCount[0].dict[textWordCount[0].keys[0]])
// console.log(textTotalWords[0])
// console.log(textWordCount[0].dict[textWordCount[0].keys[0]] / textTotalWords[0])
// console.log(textTFNorm);

// send to visualizer
function handleTFData(req, res) {
    res.send(textTFNorm);
}


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


// search words
let searchTerm = [`pain`, `slave`];
// let searchTerm = [`god`, `love`, `hate`, `happy`, `sad`, `conquer`, `slave`];
let textTermCount = [];
let TF = []

// TF
// // get term count
// for (let j = 0; j < searchTerm.length; j++) {
//     console.log(`-------- search term : ${searchTerm[j]} -----------`);
//     let tc = [];
//     for (let i = 0; i < textTitle.length; i++) {
//         tc[i] = textWordCount[i].getCount(searchTerm[j]);
//         console.log(`total times ${searchTerm[j]} appears in the ${textTitle[i]}: ${tc[i]}`);
//     }
//     textTermCount.push(tc);
// }

// for (let j = 0; j < searchTerm.length; j++) {
//     // console.log(`-------- search term : ${searchTerm[j]} -----------`);
//     let tf = [];
//     for (let i = 0; i < textTitle.length; i++) {
//         tf[i] = textWordCount[i].getCount(searchTerm[j]) / textUniqueWords[i] * 100;
//         // console.log(`${textTitle[i]}: ${tf[i]}`);
//     }
//     TF.push(tf);
// }




// var Analyzer = require('natural').SentimentAnalyzer;
// var stemmer = require('natural').PorterStemmer;
// var analyzer = new Analyzer("English", stemmer, "afinn");
// console.log(analyzer.getSentiment(tokensCat));
// console.log(analyzer.getSentiment(tokensBib));
// console.log(analyzer.getSentiment(tokensQur));
// console.log(analyzer.getSentiment(tokensBag));
// console.log(analyzer.getSentiment(tokensVed));
