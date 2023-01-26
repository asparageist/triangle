function hideError() {
  document.getElementById("sorry").setAttribute("class", "hidden");
}
window.onload = function() {
  document.querySelector("form").onsubmit = function(event) {
    event.preventDefault();
    hideError();
    const side1 = parseInt(document.querySelector("input#side1").value);
    const side2 = parseInt(document.querySelector("input#side2").value);
    const side3 = parseInt(document.querySelector("input#side3").value);
    if (side1 && side2 && side3) {
      if (side1 + side2 >= side3 || side1 + side3 >= side2 || side2 + side3 >= side1) {
      } else if (side1 === side2 === side3) {
        console.log("equilateral");
      } else if (side1 === side2 || side2 === side3 || side1 === side3) {
        console.log("isosceles");
      } else {
        console.log("scalene");
      }
  } else {
    document.getElementById("sorry").removeAttribute("class");
  }
};
}