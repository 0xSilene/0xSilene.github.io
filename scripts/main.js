// Security
"use strict";
function onResize() {
    if ( screen.availWidth - window.innerWidth === 0 ) {
        document.getElementById("hide_on_resize").style.display = "inline";
    }
    else {
        document.getElementById("hide_on_resize").style.display = "none";
    }
}