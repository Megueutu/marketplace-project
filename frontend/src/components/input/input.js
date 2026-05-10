import template from "./icon.html?raw";

export function Input(icon, placeholder) {
  if (!icon) throw new TypeError("Must tell icon param.");
  if (!placeholder) throw new TypeError("Must tell placeholder param.");

  const wrapper = document.createElement("div");
  wrapper.innerHTML = template;

  const element = wrapper.querySelector("")
}
