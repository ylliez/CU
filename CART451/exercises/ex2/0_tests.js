// const portNumber = 4200;
// const app = express();
// const server = require("http").createServer(app);
// server.listen(portNumber, function () { console.log("listening on port:: " + portNumber); });
// app.use(express.static('public'));
const WordCount = require('./wordCount');
const TFIDF = require('./TFIDF');
const natural = require('natural');
const fs = require('fs');

let fileCat = fs.readFileSync('assets/cat.txt', 'utf8');
let fileBible = fs.readFileSync('assets/bible.txt', 'utf8');
let fileQuran = fs.readFileSync('assets/quran.txt', 'utf8');
let fileBagGit = fs.readFileSync('assets/bhagavadGita.txt', 'utf8');
let fileVedas = fs.readFileSync('assets/vedas.txt', 'utf8');
// console.log(fileCat);
// console.log(fileBib);
// console.log(fileQur);


// 1. TOKENIZE
// console.log(`================= TOKEN =================`);
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
// // console.log(`-----------------  NAT  -----------------`);
// let tokenizer = new natural.WordTokenizer();
// // let tokens = tokenizer.tokenize("The lazy dog jumped over the high fence.");
// let tokensCat = tokenizer.tokenize(fileCat)
// let tokensBib = tokenizer.tokenize(fileBib)
// let tokensQur = tokenizer.tokenize(fileQur)
// console.log(`total tokens in Cat: ${tokensCat.length}`);
// console.log(`total tokens in Bible: ${tokensBib.length}`);
// console.log(`total tokens in Qur'an: ${tokensQur.length}`);


// // 2. WORD FREQUENCIES
// console.log(`================= WORD FREQUENCIES =================`);
// // Cat Wiki
// console.log(`-----------------  CAT  -----------------`);
// let catCount = new WordCount();
// catCount.process(fileCat);
// console.log(`total tokens in Cat: ${catCount.tokens.length}`);
// // console.log(catCount.tokens);
// console.log(`total distinct words of 2+ chars in Cat: ${catCount.keys.length}`);
// // console.log(catCount.keys);
// // console.log(Object.keys(catCount.dict).length);
// // catCount.sortByCountUp();
// // catCount.logTheDict();
// // console.log(`total times "cat" appears in Cat: ${catCount.getCount("cat")}`);
// // Bible
// console.log(`-----------------  BIBLE  -----------------`);
// let bibCount = new WordCount();
// bibCount.process(fileBible);
// console.log(`total tokens in Bible: ${bibCount.tokens.length}`);
// // console.log(bibCount.tokens);
// console.log(`total distinct words of 2+ chars in Bible: ${bibCount.keys.length}`);
// // console.log(bibCount.keys);
// // console.log(Object.keys(bibCount.dict).length);
// // bibCount.sortByCountUp();
// // bibCount.logTheDict();
// // console.log(`total times "god" appears in Bible: ${bibCount.getCount("god")}`);
// // console.log(`total times "pain" appears in Bible: ${bibCount.getCount("pain")}`);
// console.log(`-----------------  QUR'AN  -----------------`);
// let qurCount = new WordCount();
// qurCount.process(fileQuran);
// console.log(`total tokens in Qur'an: ${qurCount.tokens.length}`);
// // console.log(qurCount.tokens);
// console.log(`total distinct words of 2+ chars in Qur'an: ${qurCount.keys.length}`);
// // console.log(qurCount.keys);
// // console.log(Object.keys(qurCount.dict).length);
// // qurCount.sortByCountUp();
// // qurCount.logTheDict();
// // console.log(`total times "god" appears in Qur'an: ${qurCount.getCount("god")}`);
// // console.log(`total times "pain" appears in Qur'an: ${qurCount.getCount("pain")}`);
// // console.log(`total times "happy" appears in Qur'an: ${qurCount.getCount("happy")}`);
// // console.log(`total times "sad" appears in Qur'an: ${qurCount.getCount("sad")}`);
// console.log(`-----------------  Baghavad Gita  -----------------`);
// let bagCount = new WordCount();
// bagCount.process(fileBagGit);
// // console.log(`total tokens in Baghavad Gita: ${bagCount.tokens.length}`);
// // console.log(bagCount.tokens);
// console.log(`total distinct words of 2+ chars in Baghavad Gita: ${bagCount.keys.length}`);
// // console.log(bagCount.keys);
// // console.log(Object.keys(bagCount.dict).length);
// // bagCount.sortByCountUp();
// // bagCount.logTheDict();
// // console.log(`total times "god" appears in Baghavad Gita: ${bagCount.getCount("god")}`);
// // console.log(`total times "pain" appears in Baghavad Gita: ${bagCount.getCount("pain")}`);
// // console.log(`total times "happy" appears in Baghavad Gita: ${bagCount.getCount("happy")}`);
// // console.log(`total times "sad" appears in Baghavad Gita: ${bagCount.getCount("sad")}`);


// 3. TF-IDF
let tfIDF = new TFIDF();
loadSamples();
function loadSamples() {
    let filenames = ['cat.txt', 'bible.txt', 'quran.txt', 'bhagavadGita.txt', 'vedas.txt'];
    for (let i = 0; i < filenames.length; i++) { getTermFreq(filenames[i]); }
    for (let i = 0; i < filenames.length; i++) { getDocFreq(filenames[i]); }
    tfIDF.finish(filenames.length);
    tfIDF.sortByScore();
    tfIDF.logTheDict();
}
function getDocFreq(filename) {
    let data = fs.readFileSync('assets/' + filename, 'utf8');
    tfIDF.docFreq(data);
}
function getTermFreq(filename) {
    let data = fs.readFileSync('assets/' + filename, 'utf8');
    tfIDF.termFreq(data);
}

// -------

// // natural tf-idf on tokenized words
// let tfidf = new natural.TfIdf();
// tfidf.addFileSync('assets/cat.txt');
// tfidf.addFileSync('assets/bible.txt');
// tfidf.addFileSync(`assets/quran.txt`);
// tfidf.addFileSync(`assets/bhagavadGita.txt`);
// tfidf.addFileSync(`assets/vedas.txt`);
// // console.log('kingdom-----------');
// // tfidf.tfidfs('kingdom', function (i, measure) { console.log('document #' + i + ' is ' + measure); });
// // console.log('pain-----------');
// // tfidf.tfidfs('pain', function (i, measure) { console.log('document #' + i + ' is ' + measure) });
// tfidf.listTerms(0).forEach(function (item) {
//     console.log(item.term + ': ' + item.tfidf);
// });

let tokenizer = new natural.WordTokenizer();
// let tokens = tokenizer.tokenize("The lazy dog jumped over the high fence.");
let tokensCat = tokenizer.tokenize(fileCat)
let tokensBib = tokenizer.tokenize(fileBible)
let tokensQur = tokenizer.tokenize(fileQuran)
let tokensBag = tokenizer.tokenize(fileBagGit)
let tokensVed = tokenizer.tokenize(fileVedas)

var Analyzer = require('natural').SentimentAnalyzer;
var stemmer = require('natural').PorterStemmer;
var analyzer = new Analyzer("English", stemmer, "afinn");
console.log(analyzer.getSentiment(tokensCat));
console.log(analyzer.getSentiment(tokensBib));
console.log(analyzer.getSentiment(tokensQur));
console.log(analyzer.getSentiment(tokensBag));
console.log(analyzer.getSentiment(tokensVed));


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
