/* ==================================
   DOM SELECTION – EASY NOTES CODE
================================== */

/*
RULE:
document = poora HTML page
Element nikalne ke liye methods use hote hain
*/

/* ===============================
   1. getElementsByClassName
================================= */

// Same class wale sab elements deta hai
// HTMLCollection return karta hai

const boxes = document.getElementsByClassName("box");
console.log(boxes);

// Index use karke specific element access
if (boxes.length > 2) {
  boxes[2].style.backgroundColor = "red";
}

/*
NOTE:
- Class same ho sakti hai
- Index 0 se start hota hai
*/

/* ===============================
   2. getElementById
================================= */

// Unique ID se element deta hai
// Sirf ONE element

const redBox = document.getElementById("redBox");

if (redBox) {
  redBox.style.backgroundColor = "purple";
}

/*
NOTE:
- ID hamesha unique hoti hai
- Direct element milta hai
*/

/* ===============================
   3. querySelector
================================= */

// First matching element deta hai
// CSS selector use hota hai

const firstBox = document.querySelector(".box");

if (firstBox) {
  firstBox.style.backgroundColor = "green";
}

const para = document.querySelector("p");

if (para) {
  para.style.color = "blue";
}

/*
NOTE:
- Sirf FIRST element milega
- CSS selector jaisa syntax
*/

/* ===============================
   4. querySelectorAll
================================= */

// Saare matching elements deta hai
// NodeList return hoti hai

const allBoxes = document.querySelectorAll(".box");
console.log(allBoxes);

// Sab pe same change karna
allBoxes.forEach(box => {
  box.style.border = "2px solid orange";
});

/*
NOTE:
- forEach directly use hota hai
- Best method for multiple elements
*/

/* ===============================
   5. getElementsByTagName
================================= */

// Tag name se sab elements
// HTMLCollection return hoti hai

const allDivs = document.getElementsByTagName("div");
console.log(allDivs);

/*
NOTE:
- div, p, h1 jaise tags
- Index se access hota hai
*/

/* ==================================
   EASY ADVANCED METHODS
================================== */

/* ---------- matches() ---------- */
// Check karta hai element selector se match karta hai ya nahi

if (redBox) {
  console.log(redBox.matches(".box")); // true / false
}

/*
NOTE:
- Result hamesha true ya false
*/

/* ---------- closest() ---------- */
// Nearest parent dhundhta hai

const box = document.querySelector(".box");

if (box) {
  console.log(box.closest(".container"));
}

/*
NOTE:
- Parent upar ki taraf search hota hai
*/

/* ---------- contains() ---------- */
// Ek element ke andar dusra element hai ya nahi

const container = document.querySelector(".container");

if (container && box) {
  console.log(container.contains(box)); // true
}

/*
NOTE:
- Mostly validation me use hota hai
*/
