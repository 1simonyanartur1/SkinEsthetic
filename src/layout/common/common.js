import { equipment } from "../blocks/equipment/equipment";
import { hamburger } from "../blocks/hamburger/hamburger";
import { header } from "../blocks/header/header";
import { team } from "../blocks/team/team";

document.addEventListener("DOMContentLoaded", function (event) {
	header();
	hamburger();
	equipment();
	team();
});

window.addEventListener('resize', function (e) {
	header();
}, true);

