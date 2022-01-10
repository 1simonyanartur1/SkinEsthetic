import { hamburger } from "../blocks/hamburger/hamburger";
import { header } from "../blocks/header/header";

document.addEventListener("DOMContentLoaded", function (event) {
	header();
	hamburger();
});

window.addEventListener('resize', function (e) {
	header();
}, true);