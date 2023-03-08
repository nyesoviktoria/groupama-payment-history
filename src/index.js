import "bootstrap";
import "./scss/main.scss";
import "./scss/variables.scss";

const buttonCollapseElement = document.querySelectorAll(
  'button[data-id="arrow-to-rotate"]'
);

buttonCollapseElement.forEach((button) =>
  button.addEventListener("click", () => {
    button.classList.toggle("rotate-180");
    button
      .closest('div[data-id="truncate-section"]')
      ?.querySelector("span")
      .classList.toggle("text-truncate");
  })
);
