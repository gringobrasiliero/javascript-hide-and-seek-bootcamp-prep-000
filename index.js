
function getFirstSelector(selector) {
return document.querySelector(selector);
}

function nestedTarget() {
return document.querySelector('#nested .target');
}

function deepestChild() {
   let list = document.getElementById('grand-node').querySelectorAll('div');
   return list[list.length-1];
 }

function increaseRankBy(n) {
var ranks = document.querySelectorAll('ul.ranked-list Li');
for ( var i = 0; i < ranks.length; i++) {
  ranks[i].innerHTML = parseInt(ranks[i].innerHTML) + n;
}
}
