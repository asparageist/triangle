window.onload = function() {
  document.querySelector("form").onsubmit = function(event) {
    event.preventDefault();
    const side1 = parseInt(document.querySelector("input#side1").value);
    const side2 = parseInt(document.querySelector("input#side2").value);
    const side3 = parseInt(document.querySelector("input#side3").value);
    let triangle;
    if (side1 && side2 && side3) {
      if (side1 + side2 >= side3 && side1 + side3 >= side2 && side2 + side3 >= side1) {
        if (side1 === side2 && side2 === side3) {
          triangle = "equlilateral";
        } else if (side1 === side2 || side2 === side3 || side1 === side3) {
          triangle = "isosceles";
        } else {
          triangle = "scalene";
        }
      } else {
          triangle = "ain't no triangle";
      }
  } else {
      triangle = ("fill the fields");
  }
  document.querySelector("span#isTriangle").innerText = triangle;
};
}