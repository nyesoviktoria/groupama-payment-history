import "bootstrap";
import "./scss/main.scss";
import "./scss/variables.scss";

const buttonCollapseElement = document.querySelectorAll(
  'button[data-id="button-collapse"]'
);

buttonCollapseElement.forEach((button) =>
  button.addEventListener("click", () => {
    button.classList.toggle("rotate-180");
  })
);
