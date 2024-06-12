//Author : hoàng đây rồi
const topMenu = document.querySelector("#cs-top-menu");
const toggleTopMenu = document.querySelector("#cs-toggle-top-menu-icon");

document.addEventListener("click", (e) => {
	if (toggleTopMenu.contains(e.target)) {
		//click to toggel top menu icon
		topMenu.classList.toggle("cs-menu-expanded");
		topMenu.classList.toggle("hidden");
	} else {
		//click outside form toggel top menu icon
		if (topMenu.classList.contains("cs-menu-expanded")) {
			topMenu.classList.remove("cs-menu-expanded");
			topMenu.classList.add("hidden");
		}
	}
});
