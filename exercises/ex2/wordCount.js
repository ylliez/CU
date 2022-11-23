class WordCount {
  constructor() {
    //going to keep track of which words were found and how many
    this.tokens = [];
    this.dict = {};
    this.keys = [];
  }

  // Process new text
  process(data) {
    this.tokens = this.split(data);
    // For every token
    for (let i = 0; i < this.tokens.length; i++) {
      // Lowercase everything to ignore case
      let token = this.tokens[i].toLowerCase();
      //is it a valid word?
      if (this.validate(token) === true) {
        // if new add token to  dictionary, else increment the dict count
        this.addToDict(token);
      }
    }
  }

  // Splitting up the text
  split(text) {
    // Split into array of tokens (\W	= nonalphanumeric character)
    return text.split(/\W+/);
  }

  // Validate a token (i.e. remove single letter words)
  validate(token) {
    //is it a word of 2 or more chars
    return /\w{2,}/.test(token);
  }

  // Add word to dictionary or increment the count for a word
  addToDict(word) {
    // Is this a new word?
    if (!this.dict[word]) {
      this.dict[word] = 1;
      // keeing track of the keys...
      this.keys.push(word);
      // Otherwise just increment its count
    } else {
      this.dict[word]++;
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

  logTheDict() {
    for (let i = 0; i < this.keys.length; i++) {
      console.log(this.keys[i] + ': ' + this.dict[this.keys[i]]);
    }
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