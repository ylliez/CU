let bookGlobalVar =
{
    Title: "One Flew Over the Cuckoo's Nest",
    Author: "Ken Kesey",
    Genre: "Psychological Fiction",
    Edition_Years: ["1983", "1998", "2008", "2014"], //nums and strings
    Book_Image: "Kesey_1963_Cuckoo.jpeg",
    Detail: {
        Publisher: "Berkley; Reprint edition",
        Publication_Year: 1963,
        ISBN: "0451163966",
        Language: "English",
        Pages: 272
    },
}

$(document).ready(function () {
    console.log("loaded");
    let resultContainer = $("#result-container");
    displaySingle(bookGlobalVar, resultContainer);
});

function displaySingle(book, parentContainer) {

    // //A: access ALL top level properties
    // //1: get all keys as an array :
    // let keys = Object.keys(book);
    // console.log("*** Object KEYS ***")
    // console.log(Object.keys(book));

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

} //displaySingle


