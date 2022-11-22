const natural = require('natural');
const fs = require('fs');

// read files
let fileCat = fs.readFileSync('assets/cat.txt', 'utf8');
let fileBible = fs.readFileSync('assets/bible.txt', 'utf8');
let fileQuran = fs.readFileSync('assets/quran.txt', 'utf8');
let fileBagGit = fs.readFileSync('assets/bhagavadGita.txt', 'utf8');
let fileVedas = fs.readFileSync('assets/vedas.txt', 'utf8');
// console.log(fileCat);

// tokenize
let tokenizer = new natural.WordTokenizer();
let tokensTest = tokenizer.tokenize("The lazy dog jumped over the high fence.");
let tokensCat = tokenizer.tokenize(fileCat)
let tokensBib = tokenizer.tokenize(fileBible)
let tokensQur = tokenizer.tokenize(fileQuran)
let tokensBag = tokenizer.tokenize(fileBagGit)
let tokensVed = tokenizer.tokenize(fileVedas)
// console.log(tokensCat)

// // tf-idf
// let tfidf = new natural.TfIdf();
// // tfidf.addFileSync('assets/cat.txt');
// // tfidf.addFileSync('assets/bible.txt');
// // tfidf.addFileSync(`assets/quran.txt`);
// // tfidf.addFileSync(`assets/bhagavadGita.txt`);
// // tfidf.addFileSync(`assets/vedas.txt`);
// tfidf.addDocument(fileBible);
// tfidf.addDocument(fileQuran);
// tfidf.addDocument(fileBagGit);
// tfidf.addDocument(fileVedas);
// // console.log('kingdom-----------');
// // tfidf.tfidfs('kingdom', function (i, measure) { console.log('document #' + i + ' is ' + measure); });
// // console.log('pain-----------');
// // tfidf.tfidfs('pain', function (i, measure) { console.log('document #' + i + ' is ' + measure) });
// tfidf.listTerms(0).forEach(function (item) {
//     console.log(item.term + ': ' + item.tfidf);
// });


// stem
let pStemmer = require('natural').PorterStemmer;
let stemTest = pStemmer.stem(tokensTest[3]);
console.log(stemTest);
// console.log(natural.PorterStemmer.stem(tokensTest[3]));
// console.log(natural.LancasterStemmer.stem(tokensTest[3]));

// var Analyzer = require('natural').SentimentAnalyzer;
// var stemmer = require('natural').PorterStemmer;
// var analyzer = new Analyzer("English", stemmer, "afinn");
// console.log(analyzer.getSentiment(tokensCat));
// console.log(analyzer.getSentiment(tokensBib));
// console.log(analyzer.getSentiment(tokensQur));
// console.log(analyzer.getSentiment(tokensBag));
// console.log(analyzer.getSentiment(tokensVed));



// // // split sentences
// // let sentenceSplitter = new natural.SentenceTokenizer();
// // let sentences = sentenceSplitter.tokenize("The lazy dog jumped over the high fence. The dog was very happy.");
// // console.log(sentences);

// // // n-grams
// // let ngrams = natural.NGrams;
// // // let ngram = ngrams.ngrams(tokens, 3);
// // // console.log(ngram);
// // let bigrams = ngrams.ngrams(tokens, 5);
// // // let bigrams = ngrams.bigrams(tokens);
// // console.log(bigrams);

// // // get word similarity
// // let similarity = natural.JaroWinklerDistance(tokens[3], tokens[4]);
// // console.log(`similarity between ${tokens[3]} and ${tokens[4]} is ${similarity}`);

// // // POS tagger
// // const language = "EN"
// // const defaultCategory = 'N';
// // const defaultCategoryCapitalized = 'NNP';
// // let lexicon = new natural.Lexicon(language, defaultCategory, defaultCategoryCapitalized);
// // let ruleSet = new natural.RuleSet('EN');
// // let tagger = new natural.BrillPOSTagger(lexicon, ruleSet);
// // console.log(tagger.tag(tokens));

// // // WordNet
// // let wordnet = new natural.WordNet();
// // wordnet.lookup('chair', function (results) {
// //     results.forEach(function (result) {
// //         console.log('------------------------------------');
// //         console.log(result.synsetOffset);
// //         console.log(result.pos);
// //         console.log(result.lemma);
// //         console.log(result.synonyms);
// //         console.log(result.gloss);
// //     });
// // });