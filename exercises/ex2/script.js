// const portNumber = 4200;
// const app = express();
// const server = require("http").createServer(app);
// server.listen(portNumber, function () { console.log("listening on port:: " + portNumber); });
// app.use(express.static('public'));
const WordCount = require('./wordCount');
const TFIDF = require('./TFIDF');
const natural = require('natural');
let fs = require('fs');

let fileCat = fs.readFileSync('assets/cat.txt', 'utf8');
let fileBib = fs.readFileSync('assets/bible.txt', 'utf8');
let fileQur = fs.readFileSync('assets/quran.txt', 'utf8');
// console.log(fileCat);
// console.log(fileBib);
// console.log(fileQur);

// 1. TOKENIZE
console.log(`================= TOKEN =================`);
// // 1.1 DIY
// console.log(`-----------------  DIY  -----------------`);
// let wordCount = new WordCount();
// wordCount.process(fileCat);
// wordCount.sortByCountUp();
// wordCount.logTheDict();
// // // 1.2 natural
// console.log(`-----------------  NAT  -----------------`);
// let tokenizer = new natural.WordTokenizer();
// let tokensCat = tokenizer.tokenize(fileCat);
// console.log(`total tokens in Cat: ${tokensCat.length}`);
// // DIFFERENT VALUES?

// let testArray = [];
// // 1.1 DIY
// console.log(`-----------------  DIY  -----------------`);
// let wordCount = new WordCount();
// wordCount.process(fileCat, testArray);
// wordCount.sortByCountUp();
// wordCount.logTheDict();
// console.log(`total tokens in Cat: ${testArray.length}`);
// // // 1.2 natural
// console.log(`-----------------  NAT  -----------------`);
// let tokenizer = new natural.WordTokenizer();
// let tokensCat = tokenizer.tokenize(fileCat);
// console.log(`total tokens in Cat: ${tokensCat.length}`);
// console.log(`-------------  COMPARISON  --------------`);
// // for (let i = 0; i < testArray.length; i++) {
// //     if (testArray[i] != tokensCat[i]) {
// //         console.log(testArray[i]);
// //     }
// // }
// console.log(`penultimate token in Cat - DIY: ${testArray[390]}`);
// console.log(`penultimate token in Cat - NAT: ${tokensCat[390]}`);
// console.log(`ultimate token in Cat - DIY: ${testArray[391]}`);
// console.log(`ultimate token in Cat - NAT: ${tokensCat[391]}`);
// // DIY adds final blank token? 


// let tokensCatDIY = wordCount.split(fileCat);
// let tokensBibDIY = wordCount.split(fileBib);
// let tokensQurDIY = wordCount.split(fileQur);
// console.log(`total tokens in soloArray: ${soloArray.length}`);
// console.log(`total tokens in Cat: ${tokensCatDIY.length}`);
// console.log(`total tokens in Bible: ${tokensBibDIY.length}`);
// console.log(`total tokens in Qur'an: ${tokensQurDIY.length}`);
// // 1.2 natural
// console.log(`-----------------  NAT  -----------------`);
let tokenizer = new natural.WordTokenizer();
// let tokens = tokenizer.tokenize("The lazy dog jumped over the high fence.");
let tokensCat = tokenizer.tokenize(fileCat)
let tokensBib = tokenizer.tokenize(fileBib)
let tokensQur = tokenizer.tokenize(fileQur)
console.log(`total tokens in Cat: ${tokensCat.length}`);
console.log(`total tokens in Bible: ${tokensBib.length}`);
console.log(`total tokens in Qur'an: ${tokensQur.length}`);

// WORD FREQUENCIES
console.log(`================= WORD FREQUENCIES =================`);


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

// -------



// // // get word frequency
// let frequency = new natural.FrequencyDistribution(tokens);
// console.log(frequency);


// // 2. get word count
// console.log(frequency.getCount(tokens[3]));

// // natural tf-idf on tokenized words
// let tfidf = new natural.TfIdf();
// tfidf.addFileSync('assets/bible_1M.txt');
// tfidf.addFileSync(`assets/qur'an.txt`);
// tfidf.addFileSync('assets/cat.txt');
// // console.log('God-----------');
// // tfidf.tfidfs('God', function (i, measure) {
// //     console.log('document #' + i + ' is ' + measure);
// // }
// // );
// // console.log('cat-----------');
// // tfidf.tfidfs('cat', function (i, measure) {
// //     console.log('document #' + i + ' is ' + measure);
// // }
// // );
// tfidf.listTerms(2 /*document index*/).forEach(function (item) {
//     console.log(item.term + ': ' + item.tfidf);
// });


// //  get word stem
// console.log(natural.PorterStemmer.stem(tokens[3]));
// // let stemmer = new natural.PorterStemmer();
// // let stemmed = stemmer.stem(tokens[3]);
// console.log(natural.LancasterStemmer.stem(tokens[3]));

// // split sentences
// let sentenceSplitter = new natural.SentenceTokenizer();
// let sentences = sentenceSplitter.tokenize("The lazy dog jumped over the high fence. The dog was very happy.");
// console.log(sentences);

// // n-grams
// let ngrams = natural.NGrams;
// // let ngram = ngrams.ngrams(tokens, 3);
// // console.log(ngram);
// let bigrams = ngrams.ngrams(tokens, 5);
// // let bigrams = ngrams.bigrams(tokens);
// console.log(bigrams);

// // get word similarity
// let similarity = natural.JaroWinklerDistance(tokens[3], tokens[4]);
// console.log(`similarity between ${tokens[3]} and ${tokens[4]} is ${similarity}`);

// // POS tagger
// const language = "EN"
// const defaultCategory = 'N';
// const defaultCategoryCapitalized = 'NNP';
// let lexicon = new natural.Lexicon(language, defaultCategory, defaultCategoryCapitalized);
// let ruleSet = new natural.RuleSet('EN');
// let tagger = new natural.BrillPOSTagger(lexicon, ruleSet);
// console.log(tagger.tag(tokens));

// // WordNet
// let wordnet = new natural.WordNet();
// wordnet.lookup('chair', function (results) {
//     results.forEach(function (result) {
//         console.log('------------------------------------');
//         console.log(result.synsetOffset);
//         console.log(result.pos);
//         console.log(result.lemma);
//         console.log(result.synonyms);
//         console.log(result.gloss);
//     });
// });
