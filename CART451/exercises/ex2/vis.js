window.onload = function () {
    let data = []
    let dropdown = document.getElementById("dropdown")
    let bars = document.getElementsByClassName("bars")
    let texts = ['bible', 'quran', 'bgita', 'vedas']
    let highestNum = 1
    $.get(
        "/getSingles",
        (res) => {
            console.log(res);
            data = res;
            data.push({
                searchTerm: 'default',
                bible: 1,
                quran: 1,
                bgita: 1,
                vedas: 1
            })
            dropdown.style.display = "block";
            // let bars = document.getElementsByClassName("bar");
            //     for (let i = 0; i < bars.length; i++) {
            //         bars[i].addEventListener("click", function () {
            //         }
        }
    );
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

