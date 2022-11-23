class WordCount {
  constructor() {
    //going to keep track of which words were found and how many
    this.tokens = [];
    this.dict = {};
    this.keys = [];
  }

  // Process new text
  process(data, extArray) {
    this.tokens = this.split(data);
    // For every token
    for (let i = 0; i < this.tokens.length; i++) {
      // Lowercase everything to ignore case
      let token = this.tokens[i].toLowerCase();
      //is it a valid word?
      if (this.validate(token) === true) {
        //add token to the dictionary if not already
        //if it is then increment the dict count
        this.addToDict(token);
      }
    }
  }

  //split the text:
  // Splitting up the text
  split(text) {
    //console.log("in splitter")
    // Split into array of tokens
    //\W	A nonalphanumeric character
    return text.split(/\W+/);
  }

  // A function to validate a token
  //don't want single letter words
  validate(token) {
    //is it a word of 2 or more chars
    return /\w{2,}/.test(token);
  }


  // Increment the count for a word
  addToDict(word) {
    // Is this a new word?
    if (!this.dict[word]) {
      this.dict[word] = 1;
      //keeing track of the keys...
      this.keys.push(word);
      // Otherwise just increment its count
    } else {
      this.dict[word]++;
    }
  }

  logTheDict() {
    for (let i = 0; i < this.keys.length; i++) {
      console.log(this.keys[i] + ': ' + this.dict[this.keys[i]]);
    }
  }

  //Sort array of keys by counts - descending
  sortByCountDown() {
    let wordFreq = this;
    this.keys.sort(
      function (a, b) {
        return (wordFreq.getCount(b) - wordFreq.getCount(a));
      });
  }

  // Sort array of keys by counts - ascending
  sortByCountUp() {
    let wordFreq = this;
    this.keys.sort(
      function (a, b) {
        return (wordFreq.getCount(a) - wordFreq.getCount(b));
      });
  }

  // An array of keys
  getKeys() {
    return this.keys;
  }

  // Get the count for a word
  getCount(word) {
    return this.dict[word];
  }


  fillCloudArray() {
    for (let i = 0; i < this.keys.length; i++) {
      array.push(this.dict[this.keys[i]] + ' ' + this.keys[i]);
    }
    return array;
  }

  logDictCloud(array) {
    return this.dict;
  }
}

module.exports = WordCount;