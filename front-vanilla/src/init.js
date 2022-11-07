import { initMessages } from "./messages.js";
import { renderCategoryMain } from "./components/categoryMain.js";
import { renderHeader } from "./components/header.js";

await initMessages();
renderCategoryMain();
renderHeader();