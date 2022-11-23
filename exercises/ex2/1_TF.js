const WordCount = require('./wordCount');
// const WordCloud = require('./wordcloud2');
const fs = require('fs');

// const { createCanvas } = require('canvas')
// const cloud = require('d3-cloud');

// const canvas = createCanvas(200, 200)
// const ctx = canvas.getContext('2d')

// // Write "Awesome!"
// ctx.font = '30px Impact'
// ctx.rotate(0.1)
// ctx.fillText('Awesome!', 50, 100)

// // Draw line under text
// var text = ctx.measureText('Awesome!')
// ctx.strokeStyle = 'rgba(0,0,0,0.5)'
// ctx.beginPath()
// ctx.lineTo(50, 102)
// ctx.lineTo(50 + text.width, 102)
// ctx.stroke()


let fileCat = fs.readFileSync('assets/cat.txt', 'utf8');
let fileBible = fs.readFileSync('assets/bible.txt', 'utf8');
let fileQuran = fs.readFileSync('assets/quran.txt', 'utf8');
let fileBagGit = fs.readFileSync('assets/bhagavadGita.txt', 'utf8');
let fileVedas = fs.readFileSync('assets/vedas.txt', 'utf8');
// console.log(fileCat);
// console.log(fileBib);
// console.log(fileQur);

console.log(`================= TERM FREQUENCIES =================`);

// Cat Wiki
console.log(`--------------------- CAT WIKI ---------------------`);
let catCount = new WordCount();
catCount.process(fileCat);
// console.log(catCount.tokens); // 392
console.log(`total words in Cat Wiki: ${catCount.tokens.length}`);
// console.log(catCount.keys); // 206
// console.log(Object.keys(catCount.dict).length); // 206
console.log(`total distinct words of 2+ chars in Cat Wiki: ${catCount.keys.length}`);
// catCount.sortByCountDown();
// catCount.sortByCountUp(); // to have most frequest last in terminal window
// catCount.logTheDict();
// exploring other tools of wordCount
console.log(`total appearances of "cat" in Cat Wiki: ${catCount.getCount("cat")}`);
// console.log(catCount.getKeys()); // redundant, same as catCount.keys

// Bible
console.log(`----------------------  BIBLE  ---------------------`);
let bibCount = new WordCount();
bibCount.process(fileBible);
// console.log(bibCount.tokens); // 791684
console.log(`total tokens in Bible: ${bibCount.tokens.length}`);
// console.log(bibCount.keys); // 12592
console.log(`total distinct words of 2+ chars in Bible: ${bibCount.keys.length}`);
// bibCount.sortByCountUp();
// bibCount.logTheDict();

console.log(`---------------------  QUR'AN  ---------------------`);
let qurCount = new WordCount();
qurCount.process(fileQuran);
// console.log(qurCount.tokens); // 155543
console.log(`total tokens in Qur'an: ${qurCount.tokens.length}`);
// console.log(qurCount.keys); // 6006
console.log(`total distinct words of 2+ chars in Qur'an: ${qurCount.keys.length}`);
// qurCount.sortByCountUp();
// qurCount.logTheDict();

console.log(`------------------  BHAGAVAD GITA  -----------------`);
let bagCount = new WordCount();
bagCount.process(fileBagGit);
// console.log(bagCount.tokens);
console.log(`total tokens in Baghavad Gita: ${bagCount.tokens.length}`);
// console.log(bagCount.keys);
console.log(`total distinct words of 2+ chars in Baghavad Gita: ${bagCount.keys.length}`);
// bagCount.sortByCountUp();
// bagCount.logTheDict();

console.log(`----------------------  VEDAS  ---------------------`);
let vedCount = new WordCount();
vedCount.process(fileVedas);
// console.log(vedCount.tokens);
console.log(`total tokens in Vedas: ${vedCount.tokens.length}`);
// console.log(vedCount.keys);
console.log(`total distinct words of 2+ chars in Vedas: ${vedCount.keys.length}`);
// vedCount.sortByCountUp();
// vedCount.logTheDict();

console.log(`================== SELECTED TERMS ==================`);

console.log(`================== PAIN ==================`);
console.log(`total times "pain" appears in Bible: ${bibCount.getCount("pain")}`);
console.log(`total times "pain" appears in Qur'an: ${qurCount.getCount("pain")}`);
console.log(`total times "pain" appears in Baghavad Gita: ${bagCount.getCount("pain")}`);
console.log(`total times "pain" appears in the Vedas: ${vedCount.getCount("pain")}`);


console.log(`================== LOVE ==================`);
console.log(`total times "love" appears in Bible: ${bibCount.getCount("love")}`);
console.log(`total times "love" appears in Qur'an: ${qurCount.getCount("love")}`);
console.log(`total times "love" appears in Baghavad Gita: ${bagCount.getCount("love")}`);
console.log(`total times "love" appears in the Vedas: ${vedCount.getCount("love")}`);

console.log(`================== HATE ==================`);
console.log(`total times "hate" appears in Bible: ${bibCount.getCount("hate")}`);
console.log(`total times "hate" appears in Qur'an: ${qurCount.getCount("hate")}`);
console.log(`total times "hate" appears in Baghavad Gita: ${bagCount.getCount("hate")}`);
console.log(`total times "hate" appears in the Vedas: ${vedCount.getCount("hate")}`);

console.log(`================== GOD ==================`);
console.log(`total times "god" appears in Bible: ${bibCount.getCount("god")}`);
console.log(`total times "god" appears in Qur'an: ${qurCount.getCount("god")}`);
console.log(`total times "god" appears in Baghavad Gita: ${bagCount.getCount("god")}`);
console.log(`total times "god" appears in the Vedas: ${vedCount.getCount("god")}`);

console.log(`================== slave ==================`);
console.log(`total times "slave" appears in Bible: ${bibCount.getCount("slave")}`);
console.log(`total times "slave" appears in Qur'an: ${qurCount.getCount("slave")}`);
console.log(`total times "slave" appears in Baghavad Gita: ${bagCount.getCount("slave")}`);
console.log(`total times "slave" appears in the Vedas: ${vedCount.getCount("slave")}`);

console.log(`================== conquer ==================`);
console.log(`total times "conquer" appears in Bible: ${bibCount.getCount("conquer")}`);
console.log(`total times "conquer" appears in Qur'an: ${qurCount.getCount("conquer")}`);
console.log(`total times "conquer" appears in Baghavad Gita: ${bagCount.getCount("conquer")}`);
console.log(`total times "conquer" appears in the Vedas: ${vedCount.getCount("conquer")}`);



// console.log(`total times "god" appears in Bible: ${bibCount.getCount("god")}`);
// console.log(`total times "love" appears in Bible: ${bibCount.getCount("love")}`);
// console.log(`total times "hate" appears in Bible: ${bibCount.getCount("hate")}`);
// console.log(`total times "suffering" appears in Bible: ${bibCount.getCount("suffering")}`);

// console.table(

// console.log(`total times "god" appears in Qur'an: ${qurCount.getCount("god")}`);
// console.log(`total times "happy" appears in Qur'an: ${qurCount.getCount("happy")}`);
// console.log(`total times "sad" appears in Qur'an: ${qurCount.getCount("sad")}`);

// console.log(`total times "god" appears in Baghavad Gita: ${bagCount.getCount("god")}`);
// console.log(`total times "happy" appears in Baghavad Gita: ${bagCount.getCount("happy")}`);
// console.log(`total times "sad" appears in Baghavad Gita: ${bagCount.getCount("sad")}`);


// let cloudArrayCat = [];
// catCount.fillCloudArray(cloudArrayCat);
// // WordCloud(document.getElementById('canvas'), [['foo', 12], ['bar', 6]]);