import { initMessages } from "./messages.js";
import { renderh1 } from "./components/h1.js";
import { renderCategoryCreationForm } from "./components/categoryCreationForm.js";
import { renderHeader } from "./components/header.js";

await initMessages();
renderh1();
renderCategoryCreationForm();
renderHeader();