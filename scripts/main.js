"use strict";

function onResize() {
    if (screen.availWidth - window.innerWidth === 0) {
        document.getElementById("hide_on_resize").style.display = "inline";
    } else {
        document.getElementById("hide_on_resize").style.display = "none";
    }
}

function ifmobile() {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        var list = document.getElementById("hide_on_mobile");
        while (list.hasChildNodes()) {  
            list.removeChild(list.firstChild);
        }
        document.getElementById("is_mobile").style.display = "none";
    }
}
