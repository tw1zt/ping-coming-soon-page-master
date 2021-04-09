function validate() {
  const form = document.getElementById("form");
  const email = document.getElementById("email").value;
  const success = document.getElementById("success");
  const errorMsg = document.getElementById("errorMsg");
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (email.match(pattern)) {
    success.style.display = "block";
    document.getElementById("email").style.borderColor = "rgb(49, 223, 49)";
    errorMsg.style.display = "none";
    // alert("good job");
  } else {
    success.style.display = "none";
    document.getElementById("email").style.borderColor = "hsl(354, 100%, 66%)";
    errorMsg.style.display = "block";
    //alert("you suck");
  }
  form.addEventListener("submit", validate);

  return true;
}
