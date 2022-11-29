# CART451_F2022_Ex2_deliverable_illiez
## Corpus
The corpus is composed of religious, spiritual and/or mythological writings sourced from Kaggle, Project Gutenberg & the Internet Archive, preprocessed to remove annotations.
- [Bible](https://www.gutenberg.org/cache/epub/10/pg10.txt)
- [Qur'an](https://archive.org/stream/EnglishTranslationOfTheHolyQuran/trans-quran-web_djvu.txt)
- [Bhagavad Gita](https://www.kaggle.com/datasets/tentotheminus9/religious-and-philosophical-texts)
- [Vedas](https://www.kaggle.com/datasets/tentotheminus9/religious-and-philosophical-texts)
## TF & TF-IDF
### TF
- Load files & process w/ Sabine wordCount class
- Assess total words & total distinct 2+ char words
- Assess frequency of certain select terms/term pairs (e.g. love/hate, pain/pleasure, suffering/joy)
- Visualization
    - [Wordcloud2.js](https://wordcloud2-js.timdream.org/) ([gh](https://github.com/timdream/wordcloud2.js)/[npm](https://www.npmjs.com/package/wordcloud)) → NO
    - [d3-cloud](https://www.jasondavies.com/wordcloud/) ([gh](https://github.com/jasondavies/d3-cloud)/[npm](https://www.npmjs.com/package/d3-cloud)) + [canvas](https://www.npmjs.com/package/canvas)
    - [winkNLP](https://winkjs.org/) ([gh](https://github.com/winkjs)/[npm](https://www.npmjs.com/package/wink-nlp))
    - [d3](https://d3js.org/) ([gh](https://github.com/d3/d3/blob/main/API.md)/[npm](https://www.npmjs.com/package/d3))
    
### TF-IDF
- Load files & process w/ TFIDF class (→ get all TF-IDF scores)
- Sort scores ascending & assess highest TF-IDF scores
```
steed: count: 243 doc Count: 1 tfidf: 0.00008845804148302669  
philistines: count: 254 doc Count: 1 tfidf: 0.00009246231496579744  
12: count: 522 doc Count: 2 tfidf: 0.00009501048900028792  
levites: count: 265 doc Count: 1 tfidf: 0.0000964665884485682  
heroes: count: 538 doc Count: 2 tfidf: 0.00009792268789684847  
muhammad: count: 276 doc Count: 1 tfidf: 0.00010047086193133896  
saith: count: 1334 doc Count: 3 tfidf: 0.00010077300694206783  
car: count: 557 doc Count: 2 tfidf: 0.00010138092408651412  
steeds: count: 559 doc Count: 2 tfidf: 0.00010174494894858419  
hero: count: 566 doc Count: 2 tfidf: 0.00010301903596582943  
brhaspati: count: 284 doc Count: 1 tfidf: 0.0001033830608278995  
christ: count: 572 doc Count: 2 tfidf: 0.00010411111055203963  
babylon: count: 294 doc Count: 1 tfidf: 0.00010702330944860019  
does: count: 608 doc Count: 2 tfidf: 0.00011066355806930086  
mitra: count: 611 doc Count: 2 tfidf: 0.00011120959536240598  
egypt: count: 616 doc Count: 2 tfidf: 0.00011211965751758114  
vrtra: count: 317 doc Count: 1 tfidf: 0.00011539588127621177  
lo: count: 1528 doc Count: 3 tfidf: 0.0001154281518796699  
tabernacle: count: 328 doc Count: 1 tfidf: 0.00011940015475898253  
visnu: count: 340 doc Count: 1 tfidf: 0.00012376845310382333  
maruts: count: 700 doc Count: 2 tfidf: 0.00012740870172452403  
knows: count: 709 doc Count: 2 tfidf: 0.00012904681360383934  
veda: count: 726 doc Count: 2 tfidf: 0.0001321410249314349  
homage: count: 364 doc Count: 1 tfidf: 0.000132505049793505  
prajapati: count: 372 doc Count: 1 tfidf: 0.00013541724869006554  
section: count: 380 doc Count: 1 tfidf: 0.00013832944758662607  
10: count: 810 doc Count: 2 tfidf: 0.00014743006913837782  
says: count: 939 doc Count: 2 tfidf: 0.00017090967274189722  
varuna: count: 973 doc Count: 2 tfidf: 0.00017709809539708839  
brahman: count: 997 doc Count: 2 tfidf: 0.00018146639374192923  
moses: count: 1000 doc Count: 2 tfidf: 0.00018201243103503433  
jesus: count: 1008 doc Count: 2 tfidf: 0.00018346853048331458  
david: count: 1081 doc Count: 2 tfidf: 0.0001967554379488721  
english: count: 558 doc Count: 1 tfidf: 0.0002031258730350983  
keith: count: 559 doc Count: 1 tfidf: 0.00020348989789716838  
yajur: count: 560 doc Count: 1 tfidf: 0.00020385392275923845  
ab: count: 561 doc Count: 1 tfidf: 0.0002042179476213085  
jerusalem: count: 814 doc Count: 1 tfidf: 0.00029631623772503586  
judah: count: 816 doc Count: 1 tfidf: 0.000297044287449176  
hath: count: 4855 doc Count: 3 tfidf: 0.0003667563333611239  
soma: count: 2612 doc Count: 2 tfidf: 0.00047541646986350963  
israel: count: 2620 doc Count: 2 tfidf: 0.00047687256931178997  
agni: count: 3726 doc Count: 2 tfidf: 0.0006781783180365378  
indra: count: 4447 doc Count: 2 tfidf: 0.0008094092808127976  
allah: count: 2913 doc Count: 1 tfidf: 0.00106040442321011  
```
- Sort scores descending & assess lowest TF-IDF scores
```
kingdom: count: 429 doc Count: 4 tfidf: 0
```

Word cloud with most common and least common
Most common → how many times in each
Least common → 

## [Natural](http://naturalnode.github.io/natural/)
- Tokenize
    - Load files & tokenize w/ natural.WordTokenizer() → tokens as array
- Stem
    - .stem() → NO (Porter & Lancaster)
    - natural.PorterStemmer.attach() → NO
    - natural.PorterStemmer.tokenizeAndStem() → OK
- POS
    - Attribute POS tag w/ natural.BrillPOSTagger()

## Other
- Natural
    - [n-grams](http://naturalnode.github.io/natural/n_grams.html)
- spaCy
    - VSC → NO: crash when attempting to load large texts (e.g. Bible → 4138364), in excess of spaCy’s 1M limit
    - Gradient (virtual machine) → NO: crash when attempting to increase spaCy token limit
- W

## Visualization
- [displaCy](https://demos.explosion.ai/displacy)
    - Opening line dependency visualization [[[SAVE FILE OR DISPLAY TO HTML?]]]
- D





Overlap of words (TFIDF)
Frequency of specific words (TF)
Sentiment analysis (natural)
Displacy → how to save to doc?