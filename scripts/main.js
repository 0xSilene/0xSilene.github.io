"use strict";

function onResize() {
    if (screen.availWidth - window.innerWidth === 0) {
        document.getElementById("hide_on_resize").style.display = "inline";
    } else {
        document.getElementById("hide_on_resize").style.display = "none";
    }
}

"use strict";

function ifmobile() {
    let x = window.isMobile = /iphone|ipod|ipad|android|blackberry|opera mini|opera mobi|skyfire|maemo|windows phone|palm|iemobile|symbian|symbianos|fennec/i.test(navigator.userAgent.toLowerCase());
    if x {
        var list = document.getElementById("myList");
        while (list.hasChildNodes()) {  
            list.removeChild(list.firstChild);
        }
        document.getElementById("hide_on_resize").style.display = "none";
        document.getElementById("is_mobile").style.display = "inline";
    }
}
