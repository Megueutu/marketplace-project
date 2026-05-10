import template from "./icon.html?raw";
import { COLOR } from "../../constants/color";

/**
 * Creates an Icon component.
 * @param {String} icon - Icon name
 * @param {String} [label = null] - Tag alt informations
 * @param {String} [color = COLOR["WHITE"]] - Color of the SVG
 * @returns {HTMLIconElement} Returns an <img> configurated.
 */
export function Icon(icon, label = null, color = COLOR["WHITE"]) {
  if (!icon) throw new TypeError("Must tell icon param.");

  const wrapper = document.createElement("div");
  wrapper.innerHTML = template;

  const element = wrapper.querySelector("[data-icon]");
  const icon = getIcon(icon);

  element.src = icon.path;
  if (label != null) element.alt = label;

  return element;
}

/**
 * Return an Icon attributes.
 * @param {String} icon - Icon name
 * @returns {Object} Returns an object with icons attributes.
 */
function getIcon(icon) {
  let path = `./assets/icons/${icon.toLowerCase()}.svg`;

  return {
    path: path,
  };
}
