let books = [
    {
        Title: "One Flew Over the Cuckoo's Nest",
        Author: "Ken Kesey",
        Genre: "Psychological Fiction",
        Edition_Years: ["1983", "1998", "2008", "2014"],
        Book_Image: "Kesey_1963_Cuckoo.jpeg",
        Detail: {
            Publisher: "Berkley; Reprint edition",
            Publication_Year: 1963,
            ISBN: "0451163966",
            Language: "English",
            Pages: 272
        },
    },
    {
        Title: "A Clockwork Orange",
        Author: "Anthony Burgess",
        Genre: "Psychological Fiction",
        Edition_Years: ["2008", "2014"], //nums and strings
        Book_Image: "Burgess_1962_Clockwork.png",
        Detail: {
            Publisher: "Penguin Modern Classics; Later Printing Edition",
            Publication_Year: 2000,
            ISBN: "0141182601",
            Language: "English",
            Pages: 176
        }
    },
    {
        Title: "Eloquent JavaScript",
        Author: "Marijn Haverbeke",
        Genre: "Programming Languages",
        Book_Image: "banana.jpg"
    }
]


$(document).ready(function () {
    console.log("loaded");
    let resultContainer = $("#result-container");
    for(let i = 0; i< books.length;i++ ){
        displaySingle(books[i],resultContainer);
      }
});

function displaySingle(book, parentContainer) {

    //equivalent jquery function:
    console.log("JQUERY")
    //make the book container and append to parent
    let singleBookContainer = $("<article>").addClass("single-book").appendTo(parentContainer);
    $.each(book, function (index, value) {

        if (index === "Detail") {
            let detailContainer = $("<div>").addClass("detail-container").appendTo(singleBookContainer);
            $.each(value, function (indexDetail, valueDetail) {
                // console.log(`${indexDetail} : ${valueDetail}`);
                let detailProperty = $("<p>").addClass("detail-prop");
                detailProperty.html(`${indexDetail} : ${valueDetail}`);
                $(detailProperty).appendTo(detailContainer);
            });
        }

        else if (index === "Edition_Years") {
            let editionYearsPara = $("<p>").addClass("single-book-para").appendTo(singleBookContainer);
            let label = $("<span>").addClass("single-year-test").appendTo(editionYearsPara);
            label.text("Editions:");
            theContentArray = value;

            for (let i = 0; i < theContentArray.length; i++) {
                let singleYear = $("<span>").addClass("single-year-test").appendTo(editionYearsPara);
                singleYear.text(` ${theContentArray[i]},`);
            }
        }

        else if (index === "Book_Image") {
            let detailImage = $("<img>").addClass("single-book-image").appendTo(singleBookContainer);
            $(detailImage).attr("src", `resources/${value}`)
        }

        else {
            let bookPropertyPara = $("<p>").addClass("single-book-para").appendTo(singleBookContainer);
            bookPropertyPara.html(`${index} : ${value}`);
        }
    });

}


