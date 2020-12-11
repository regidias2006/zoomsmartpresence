document.addEventListener("DOMContentLoaded", () => {


    // var button = document.getElementById("init-monitor")
   
    // button.addEventListener("click", (e) => {
    //   console.log(e)
    // })

   })


   function AddJquery() {
    chrome.tabs.executeScript( { file: "/assets/js/lib/jquery.js" })
   }

   function AddJqueryUi() {
    chrome.tabs.executeScript( { file: "/assets/js/lib/jquery-ui.js" })
   }

   function AddVue() {
    chrome.tabs.executeScript( { file: "/assets/js/lib/vue.js" })
   }

   function ExecuteApp() {
    chrome.tabs.executeScript( { file: "/assets/js/app/app.js" })
   }
   
   function PrepareConstructor() {
    chrome.tabs.executeScript( { file: "/assets/js/app/prepare.js" })
   }



//    chrome.tabs.executeScript(null, { 
//      code: "document.body.appendChild(document.createElement('script')).src='" + 
//        chrome.extension.getURL("popup.html") +"';" 
//    }, null);

   function MonitorConstructor() {
    chrome.tabs.executeScript( { file: "/assets/js/app/main.js" })
   }

   function InitEnvironment() {
    chrome.tabs.executeScript( { file: "/assets/js/app/environment.js" })
   }




// window.onload=function(){
    console.log("page load!");

  
// }