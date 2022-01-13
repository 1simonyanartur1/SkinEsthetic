import { ba } from "../blocks/ba/ba";
import { contact } from "../blocks/contact/contact";
import { equipment } from "../blocks/equipment/equipment";
import { hamburger } from "../blocks/hamburger/hamburger";
import { header } from "../blocks/header/header";
import { reviews } from "../blocks/reviews/reviews";
import { team } from "../blocks/team/team";

document.addEventListener("DOMContentLoaded", function (event) {
	header();
	hamburger();
	equipment();
	ba();
	team();
	reviews();
	contact();
});

window.addEventListener('resize', function (e) {
	header();
}, true);

