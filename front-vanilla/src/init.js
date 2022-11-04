import { initMessages } from "./messages.js";
import { renderh1 } from "./components/h1.js";
import { renderForm } from "./components/form.js";
import { renderHeader } from "./components/header.js";

await initMessages();
renderh1();
renderForm();
renderHeader();