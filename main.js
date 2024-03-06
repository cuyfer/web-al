 AOS.init();
document.addEventListener('DOMContentLoaded', function() {
const text = "Al Gozali";
const textElement = document.getElementById('text-ketik');
const cursorElement = document.getElementById('cursor');
let index = 0;
function type() {
if (index < text.length) {
textElement.textContent += text.charAt(index);
index++;
setTimeout(type, 150);
} else {
cursorElement.style.display = 'none';
}
moveCursor();
}
function moveCursor() {
const textLength = textElement.textContent.length;
const textWidth = textElement.offsetWidth;
const fontSize = parseInt(window.getComputedStyle(textElement).fontSize);
const letterSpacing = parseFloat(window.getComputedStyle(textElement).letterSpacing);
const cursorPositionX = (textWidth + letterSpacing) / textLength * index;
cursorElement.style.left = cursorPositionX + 'px';
}
type();
});
document.querySelector('.klik').addEventListener('click', function(){
window.open('https://wa.me/6283139792956?text= the last kid is cute / anak terakhir itu lucu😁😁', '_blank');
});