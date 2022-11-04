import { initMessages } from "./messages.js";
import { renderForm } from "./components/form.js";
import { renderHeader } from "./components/header.js";

await initMessages();
renderForm();
renderHeader();