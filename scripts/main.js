"use strict";

ifmobile();

function onResize() {
    ifmobile();
    if (screen.availWidth - window.innerWidth === 0) {
        document.getElementById("hide_on_resize").style.display = "inline";
    } else {
        document.getElementById("hide_on_resize").style.display = "none";
    }
}

function ifmobile() {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        document.getElementById("hide_on_mobile").style.display = "none";
        document.getElementById("show_on_mobile").style.display = "block";
        var list = document.getElementById("hide_on_mobile");
        while (list.hasChildNodes()) {  
            list.removeChild(list.firstChild);
        }
        //document.getElementById("is_mobile").style.display = "inline";
        //document.getElementById("hide_on_mobile").style.display = "none";
    }
}
