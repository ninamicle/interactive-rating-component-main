let result = 0;
function getRadioValue() {
  let radio = document.getElementsByName("rate");
  var element = document.getElementById("tanksCard");
  for (i = 0; i < radio.length; i++) {
    if (radio[i].checked) {
      result = radio[i].value;
      document.getElementById(
        "result"
      ).innerHTML = `You selected ${result} out of 5`;
      element.classList.toggle("hide-container");
      document.getElementById("myForm").reset();
    }
  }
}
