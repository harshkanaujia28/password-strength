var pass = document.getElementById("Password");
var msg = document.getElementById("message");
var str = document.getElementById("strength");

pass.addEventListener("input", () => {
  if (pass.Value.length > 0) {
    msg.style.display = "block";
  } 
  else {
    msg.style.display = "none";
  }
});
