let bookJsonStringAndArray = [
    {
        "Title": "A Clockwork Orange",
        "Author": "Anthony Burgess",
        "Genre": "Psychological Fiction",
        "Edition_Years": ["2008", "2014"],
        "Book_Image": "Burgess_1962_Clockwork.png",
        "Detail": {
            "Publisher": "Penguin Modern Classics; Later Printing Edition",
            "Publication_Year": 2000,
            "ISBN": "0141182601",
            "Language": "English",
            "Pages": 176
        }

    },
    {
        "Title": "One Flew Over the Cuckoo's Nest",
        "Author": "Ken Kesey",
        "Genre": "Psychological Fiction",
        "Edition_Years": [1983, "1998", "2008", "2014"],
        "Book_Image": "Kesey_1963_Cuckoo.jpeg",
        "Detail": {
            "Publisher": "Berkley; Reprint edition",
            "Publication_Year": 1963,
            "ISBN": "0451163966",
            "Language": "English",
            "Pages": 272
        }
    }
]

$(document).ready(function () {
    console.log("ready");
    let resultContainer = $("#result-container");
    for (let i = 0; i < bookJsonStringAndArray.length; i++) {
        accessJSONString_bracket(bookJsonStringAndArray[i], resultContainer);
    }

});

function accessJSONString_bracket(localJSONString, parentContainer) {
    console.log(localJSONString);
    let singleBookContainer = $("<article>").addClass("single-book").appendTo(parentContainer);

    //A:  Access the author (standard property)
    let bookPropertyPara = $("<p>").addClass("single-book-para").appendTo(singleBookContainer); // creating an element  ** NOT accessing
    bookPropertyPara.html(`Author : ${localJSONString['Author']}`);

    //B: Access the first element in the array associated with the key Edition_Years ...
    let editionYearsPara = $("<p>").addClass("single-book-para").appendTo(singleBookContainer);
    let label = $("<span>").addClass("single-year-test").appendTo(editionYearsPara);
    label.text("Editions: ");
    let singleYear = $("<span>").addClass("single-year-test").appendTo(editionYearsPara);
    singleYear.text(`*${localJSONString['Edition_Years'][0]}*-`);


    //C: Access the publisher (object property):
    let publisherPara = $("<p>").addClass("single-book-para").appendTo(singleBookContainer); // creating an element  ** NOT accessing
    publisherPara.html(`Publisher : ${localJSONString['Detail']['Publisher']}`);

    //F::  we can also still iterate as we did with a javascript object
 for(let i =0; i<bookJsonStringAndArray.length;i++){
    let tempObject = bookJsonStringAndArray[i];
    console.log("** the highest level keys **")
     console.log(Object.keys(tempObject));
       $.each(tempObject, function( index, value ) {
         console.log("** INSIDE FOR EACH **")
         console.log(`index:${index}`);
         console.log(`value:${value}`);
    
         if(index ==='Detail'){
         console.log("Publisher DETAIL::")
         console.log(value['Publisher']);
       }
     });
    }
}