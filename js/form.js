function myFunction() {
    // Get the value of the input field with id="numb"
    let x = document.getElementById("mobile").value;
    // If x is Not a Number or less than one or greater than 10
    let text;
    if (isNaN(x) || x < 1000000000 || x > 9999999999) {
      text = "Input not valid";
    } else {
      text = "Input OK";
    }
    document.getElementById("mob").innerHTML = text;
  }