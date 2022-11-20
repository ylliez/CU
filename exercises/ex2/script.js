// const portNumber = 4200;
// const app = express();
// const server = require("http").createServer(app);
const WordCount = require('./wordCount');
const TFIDF = require('./TFIDF');
// server.listen(portNumber, function () {
//     console.log("listening on port:: " + portNumber);
//   });
// app.use(express.static('public'));
let fs = require('fs');

// // TF
// // let file = fs.readFileSync('assets/cat.txt', 'utf8');
// let file = fs.readFileSync('assets/bible_1M.txt', 'utf8');
// // console.log(file);
// let wordCount = new WordCount();
// wordCount.process(file);
// wordCount.sortByCountUp();
// wordCount.logTheDict();

// // TF-IDF
// let tfIDF = new TFIDF();
// loadSamples();
// function loadSamples() {
//     let filenames = ['bible_1M.txt', 'cat.txt'];
//     for (let i = 0; i < filenames.length; i++) { getTermFreq(filenames[i]); }
//     for (let i = 0; i < filenames.length; i++) { getDocFreq(filenames[i]); }
//     tfIDF.finish(filenames.length);
//     tfIDF.sortByScore();
//     tfIDF.logTheDict();
// }
// function getDocFreq(filename) {
//     let data = fs.readFileSync('assets/' + filename, 'utf8');
//     tfIDF.docFreq(data);
// }
// function getTermFreq(filename) {
//     let data = fs.readFileSync('assets/' + filename, 'utf8');
//     tfIDF.termFreq(data);
// }

// natural tf-idf on tokenized words
let natural = require('natural');
let tfidf = new natural.TfIdf();
tfidf.addFileSync('assets/bible_1M.txt');
tfidf.addFileSync(`assets/qur'an.txt`);
tfidf.addFileSync('assets/cat.txt');
// console.log('God-----------');
// tfidf.tfidfs('God', function (i, measure) {
//     console.log('document #' + i + ' is ' + measure);
// }
// );
// console.log('cat-----------');
// tfidf.tfidfs('cat', function (i, measure) {
//     console.log('document #' + i + ' is ' + measure);
// }
// );
tfidf.listTerms(2 /*document index*/).forEach(function (item) {
    console.log(item.term + ': ' + item.tfidf);
});
