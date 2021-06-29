<script>
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function brakechain() {
var a;
a = document.getElementById("div1");
a.innerHTML = "&#xf0c1;";
setTimeout(function () {
  a.innerHTML = "&#xf127;";
}, 1000);
}
brakechain();
setInterval(brakechain, 2000);

</script>
