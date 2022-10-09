// window.onload = function () {
//     $("#photo").submit((event) => {
//         event.preventDefault();
//         let myForm = document.getElementById('photo');
//         let mData = new FormData(myForm);
//         $.ajax({
//             type: "POST",
//             enctype: 'multipart/form-data',
//             url: "/submitFoto",
//             data: mData,
//             processData: false,
//             contentType: false,
//             cache: false,
//             timeout: 600000,
//             success: (response) => {
//                 console.log(response);
//             },
//             error: () => {
//                 console.log("error occurred");
//             }
//         });
//     })
// }