const button = document.getElementsByClassName("nav-btn");
const btn_dn = document.getElementsByClassName("btn-down");
const bg_c = document.getElementsByClassName("bg-c");

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
	navLinks.classList.toggle("active");
});

Array.from(button).forEach((button) => {
	button.addEventListener("mouseover", function () {
		button.style.backgroundColor = "white";
		button.style.color = "orange";
	});

	button.addEventListener("mouseout", function () {
		button.style.backgroundColor = "";
		button.style.color = "";
	});
});

Array.from(btn_dn).forEach((btn_dn) => {
	btn_dn.addEventListener("mouseover", function () {
		btn_dn.style.backgroundColor = "white";
		btn_dn.style.color = "#f63c47";
	});

	btn_dn.addEventListener("mouseout", function () {
		btn_dn.style.backgroundColor = "";
		btn_dn.style.color = "";
	});
});

Array.from(bg_c).forEach((bg_c) => {
	bg_c.addEventListener("mouseover", function () {
		bg_c.style.backgroundColor = "white";
		bg_c.style.color = "orange";
	});

	bg_c.addEventListener("mouseout", function () {
		bg_c.style.backgroundColor = "";
		bg_c.style.color = "";
	});
});
