import { initMessages } from "./Messages.js";
import { renderCategoryForm } from "./components/categoryForm.js";
import { renderHeader } from "./components/header.js";

await initMessages();
renderCategoryForm();
renderHeader();