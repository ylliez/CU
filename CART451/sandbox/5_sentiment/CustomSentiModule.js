const Sentiment = require('sentiment');
const fs = require('fs');

class CustomSentiModule {

    constructor() {
        console.log("init");
        //make an instance of the module
        this.sentimentInstance = new Sentiment();
        this.test_json_db_file_pos = "./sentimentSentencesPos.json";
        this.test_json_db_file_neg = "./sentimentSentencesNeg.json";
        this.test_json_db_file_neutral = "./sentimentSentencesNeutral.json";
    }

    runAnalysis(phrase) {
        let analysedPhrase = this.sentimentInstance.analyze(phrase);
        return analysedPhrase;
    }

    /** function to add to the file **/
    addReplyToFile(reply) {
        /**** lets get then write ... */
        let filePath = null;
        console.log(reply.score);
        if (parseInt(reply.score) > 0) {
            filePath = this.test_json_db_file_pos;
        }
        else if (parseInt(reply.score) < 0) {
            filePath = this.test_json_db_file_neg;
        }
        else {
            filePath = this.test_json_db_file_neutral;
        }
        let testCompArr = fs.readFileSync(filePath);
        let parsed = JSON.parse(testCompArr);
        parsed.push(reply);
        let newData = JSON.stringify(parsed, null, 2);
        fs.writeFileSync(filePath, newData);
    }
}
module.exports = CustomSentiModule;