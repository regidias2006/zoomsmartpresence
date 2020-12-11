


$("#wc-container-left").empty();
$("#wc-container-left").css("overflow", "scroll");

 $("#wc-container-left").load(chrome.extension.getURL("cpanel.html"));





// var iFrame  = document.createElement ("iframe");
// iFrame.src  = chrome.extension.getURL("test.html");


// document.body.insertBefore(iFrame, document.body.firstChild);

// var vuetest = "\
// <div id='app-4'>\
//   <ol>\
//     <li v-for='todo in todos'>\
//       {{ todo.text }}\
//     </li>\
//   </ol>\
// </div>\
// <script>\
// var app4 = new Vue({\
//     el: '#app-4',\
//     data: {\
//       todos: [\
//         { text: 'Learn JavaScript' },\
//         { text: 'Learn Vue' },\
//         { text: 'Build something awesome' }\
//       ]\
//     }\
//   })\
//   </script>";

// var xhr = new XMLHttpRequest();
// // xhr.onreadystatechange = handleStateChange; // Implemented elsewhere
// fetch(chrome.extension.getURL('test.html'))
//     .then(response => response.text())
//     .then(data => {
//         document.getElementById('#wc-container-left').innerHTML = data;
//         // other code
//         // eg update injected elements,
//         // add event listeners or logic to connect to other parts of the app
//     }).catch(err => {
//         // handle error
//     });




