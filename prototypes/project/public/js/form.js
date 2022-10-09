// window.onload = function () {
//     $("#form").submit((event) => {
//         event.preventDefault();
//         let form = document.getElementById('form');
//         let formData = new FormData(form);
//         // for (let pair of formData.entries()) {
//         //     console.log(pair[0] + ', ' + pair[1]);
//         // }
//         $.ajax({
//             type: "POST",
//             enctype: 'multipart/form-data',
//             url: "/submitForm",
//             data: formData,
//             processData: false,
//             contentType: false,
//             cache: false,
//             timeout: 600000,
//             // success: (response) => { console.log(response); },
//             success: (response) => { window.location.href = response; },
//             error: () => { console.log("error occurred"); }
//         });
//     })
// }