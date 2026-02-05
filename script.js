let tttEl = document.getElementById('ttt');
let bg = document.querySelector(".haiku")
let p1 = document.getElementById('one');
let p2 = document.getElementById('two');
let p3 = document.getElementById('three');
let clickCount = 0;

tttEl.addEventListener("click", (e) => {
   if (tttEl.style.color === "teal") {
    tttEl.style.color = "whitesmoke";
    tttEl.style.backgroundColor = "darkslategrey";
   } else {
    tttEl.style.backgroundColor = "#2a2a2a";
    tttEl.style.color = "teal";
   }
});

bg.addEventListener('click', () => {
    clickCount++

   if (clickCount === 1) {
    p1.style.fontSize="12vh"; 
   } else if (clickCount === 2) {
    p2.style.fontSize="12vh";
    p1.style.fontSize="6vh";
    p3.style.fontSize="6vh";
   } else if (clickCount === 3) {
    p3.style.fontSize="12vh";
    p1.style.fontSize="6vh";
    p2.style.fontSize="6vh";
   } else if (clickCount === 4) {
    p1.style.fontSize="6vh";
    p2.style.fontSize="6vh";
    p3.style.fontSize="6vh";

    clickCount = 0
   }
});