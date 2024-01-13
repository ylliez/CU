let natural = require('natural');
// console.log(natural);

// tokenize words
let tokenizer = new natural.WordTokenizer();
let tokens = tokenizer.tokenize("The lazy dog jumped over the high fence.");
// console.log(tokens);

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

// // get word frequency
// let frequency = new natural.FrequencyDistribution(tokens);
// console.log(frequency);

// // get word count
// console.log(frequency.getCount(tokens[3]));

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

