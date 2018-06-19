'use strict';

var item = document.querySelectorAll('.theme');
var itemLen = item.length;

for (var itemCount = 0; itemCount < itemLen; itemCount++) {
    item[itemCount].addEventListener('mouseover', slideOn, false);
    item[itemCount].addEventListener('mouseleave', slideOff, false);
}

function slideOn() {
    $(this).addClass('active');
}

function slideOff() {
    $(this).removeClass('active');
}
//# sourceMappingURL=all.js.map
