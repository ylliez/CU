let bookJsonString =
{
    "Title": "One Flew Over the Cuckoo's Nest",
    "Author": "Ken Kesey",
    "Genre": "Psychological Fiction",
    "Edition_Years": ["1983", "1998", "2008", "2014"],
    "Book_Image": "resources/banana.jpg",
    "Detail": {
        "Publisher": "Berkley; Reprint edition",
        "Publication_Year": 1963,
        "ISBN": "0451163966",
        "Language": "English",
        "Pages": 272
    }
}

$(document).ready(function () {
    console.log("ready");
    let resultContainer = $("#result-container");
    accessJSONString_dot(bookJsonString, resultContainer);
});

function accessJSONString_dot(localJSONString,parentContainer){
    let singleBookContainer = $("<article>").addClass("single-book").appendTo(parentContainer);
     
    //A:  Access the author (standard property)
    let bookPropertyPara = $("<p>").addClass("single-book-para").appendTo(singleBookContainer); // creating an element  ** NOT accessing
    bookPropertyPara.html(`Author : ${localJSONString.Author}`);
     
    //B: Access the first element in the array associated with the key Edition_Years ...
    let editionYearsPara =  $("<p>").addClass("single-book-para").appendTo(singleBookContainer);
    let label =  $("<span>").addClass("single-year-test").appendTo(editionYearsPara);
    label.text("Editions: ");
    let singleYear =  $("<span>").addClass("single-year-test").appendTo(editionYearsPara);
    singleYear.text(`*${localJSONString.Edition_Years[0]}*-`);
     
    //C: Access the publisher (object property):
     let publisherPara = $("<p>").addClass("single-book-para").appendTo(singleBookContainer); // creating an element  ** NOT accessing
     publisherPara.html(`Publisher : ${localJSONString.Detail.Publisher}`);

     //D::  we can also still iterate as we did with a javascript object
console.log("** the highest level keys **")
 console.log(Object.keys(bookJsonString))
   $.each(bookJsonString, function( index, value ) {
     console.log("** INSIDE FOR EACH **")
     console.log(`index: ${index}`);
     console.log(`value: ${value}`);
 
     if(index ==='Detail'){
     console.log("Publisher DETAIL: ")
     console.log(value.Publisher)
   }
    });
}