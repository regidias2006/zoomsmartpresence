

var buttons = document.querySelectorAll(".footer-button__button");
var elem = buttons[0]

eventFire(elem, 'click');
$('[class="main-layout"]').css("overflow", "scroll");


var response;
$.ajax({ type: "GET",   
     url: chrome.extension.getURL("cpanel.html"),   
     async: false,
     success : function(text)
     {
         $("#app-visualizer").remove();
         response = text;
     }
});
$('[class="main-layout"]').prepend('<div id="app-visualizer" style = "margin-right: 12px; position: absolute; z-index: 2; background: rgb(24,82,71); background: linear-gradient(180deg, rgba(24,82,71,1) 0%, rgba(22,152,173,0) 84%);">'+response+'</div>');
 function eventFire(el, etype){
    if (el.fireEvent) {
      el.fireEvent('on' + etype);
    } else {
      var evObj = document.createEvent('Events');
      evObj.initEvent(etype, true, false);
      el.dispatchEvent(evObj);
    }
  }



