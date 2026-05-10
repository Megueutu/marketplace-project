import template from "./login-form.html?raw";

export function loginForm() {
  const form = document.createElement("form");
  form.innerHTML = template;

  form.querySelector("app-input[data-index='1']").replaceWith(Input("email-icon", "Email"));
  form.querySelector("app-input[data-index='2']").replaceWith(Input("password-icon", "Password"));

  form.setAttribute("method", "post");
  form.setAttribute("action", "/login");
  return form;
}
