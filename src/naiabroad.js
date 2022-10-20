function viajar() {
  let name = prompt("What is you name?");
  alert("Welcome " + name + "! ");
  name = name.toLowerCase().trim();
}
let viajarButton = document.querySelector("button");
viajarButton.addEventListener("click", viajar);
