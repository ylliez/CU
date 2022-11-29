window.onload = function () {
    // let data = []
    let dropdown = document.getElementById("dropdown")
    dropdown.style.display = "block";
    let bars = document.getElementsByClassName("bars")
    let texts = ['bible', 'quran', 'bgita', 'vedas']
    let highestNum = 1
    let data = [
        {
            searchTerm: 'default',
            bible: 1,
            quran: 1,
            bgita: 1,
            vedas: 1
        },
        {
            searchTerm: 'love',
            bible: 2.4698221092757304,
            quran: 0.5994005994005994,
            bgita: 0.9035738368172622,
            vedas: 1.3210731536984228
        },
        {
            searchTerm: 'hate',
            bible: 0.6909148665819568,
            quran: 0.1332001332001332,
            bgita: 0.06743088334457181,
            vedas: 0.5877902578129547
        },
        {
            searchTerm: 'happy',
            bible: 0.22236340533672172,
            quran: 0.1665001665001665,
            bgita: 0.29669588671611596,
            vedas: 0.5004946749694466
        },
        {
            searchTerm: 'sad',
            bible: 0.08735705209656926,
            quran: 0.0666000666000666,
            bgita: 0,
            vedas: 0.011639411045801082
        },
        {
            searchTerm: 'pain',
            bible: 0.19853875476493013,
            quran: 0,
            bgita: 0.5259608900876601,
            vedas: 0.38992027003433627
        },
        {
            searchTerm: 'delight',
            bible: 0.40501905972045743,
            quran: 0.2664002664002664,
            bgita: 0.26972353337828725,
            vedas: 1.4898446138625385
        },
        {
            searchTerm: 'conquer',
            bible: 0.007941550190597205,
            quran: 0.04995004995004995,
            bgita: 0.053944706675657456,
            vedas: 0.7391026014083688
        },
        {
            searchTerm: 'slave',
            bible: 0.007941550190597205,
            quran: 0.5161505161505162,
            bgita: 0.06743088334457181,
            vedas: 0.017459116568701624
        }
    ]
    dropdown.addEventListener("change", function (w) {
        let word = w.target.value;
        console.log(word);
        for (let i = 0; i < data.length; i++) {
            if (word == data[i].searchTerm) {
                // let highestNum = Math.max(data[i].bible, data[i].quran, data[i].bgita, data[i].vedas);
                // console.log(highestNum);
                // console.log(data[i].bible + ", " + data[i].quran + ", " + data[i].bgita + ", " + data[i].vedas);
                for (let j = 0; j < texts.length; j++) {
                    // console.log(data[i][texts[j]]);
                    document.getElementById(texts[j]).style.height = (data[i][texts[j]] / highestNum) * 100 + "vh";
                }
            }

        }
    });
}

