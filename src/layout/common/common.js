import { equipment } from "../blocks/equipment/equipment";
import { hamburger } from "../blocks/hamburger/hamburger";
import { header } from "../blocks/header/header";

document.addEventListener("DOMContentLoaded", function (event) {
	header();
	hamburger();
	equipment();
});

window.addEventListener('resize', function (e) {
	header();
}, true);

