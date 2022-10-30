console.log("Hii");

const panel = document.querySelectorAll(".panel");

console.log(panel);

function openPanel() {
  // console.log(panel);
  this.classList.toggle("open");
}

function removeTransition(e) {
  // console.log(e);
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}

panel.forEach((panel) => {
  panel.addEventListener("click", openPanel);
  panel.addEventListener("transitionend", removeTransition);
});
