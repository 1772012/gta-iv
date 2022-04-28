$(document).ready(() => {

	$("#btn-opening-start").on("click", start);

	function start() {

		document.getElementById("btn-opening-start").requestFullscreen();

		var x = document.getElementById("opening");
		x.autoplay = true;
		x.load();

		$("#btn-opening-start").remove();

		$("#gta-iv-logo").fadeOut(0);

		setTimeout(rockstarGamesLogo, 0);
		setTimeout(rockstarNorthLogo, 3500);
		setTimeout(gtaIVLogo, 7000);

		setTimeout(mainMenu, 12000);
	}

	function startGame() {
		$(".loading-screen").removeClass("hidden");
		$(".main-menu").fadeOut("fast");
		$("#main-menu-background").fadeOut("fast");
		$("#loading-screen-char").fadeOut("fast");

		var y = document.getElementById("loading");
		y.autoplay = true;
		y.load();

		$("#loading-screen-char").css("position", "fixed");
		$("#loading-screen-char").css("transform", "translate(-50%, -50%)");
		$("#loading-screen-char").css("top", "70%");

		setTimeout(loadingBackground1, 0);
		setTimeout(loadingBackground2, 11000);
		setTimeout(loadingBackground3, 22000);
		setTimeout(loadingBackground4, 33000);
		setTimeout(loadingBackground5, 44000);
		setTimeout(loadingBackground6, 55000);
	}


	function loadingBackground1() {

		$("#main-menu-background").attr("src", "./assets/images/background-01.jpg");
		$("#main-menu-background").css("zoom", 1);
		$("#main-menu-background").fadeIn("fast").animate({'zoom': 1.05}, 10250).fadeOut("fast");

		$("#loading-screen-char").attr("src", "./assets/images/char-1.png");
		
		$("#loading-screen-char").css("right", "1%");
		$("#loading-screen-char").css("width", "30%");
		$("#loading-screen-char").css("zoom", 1.5);

		$("#loading-screen-char").fadeIn("fast").animate({right: "+=20px", zoom: 1.55}, 10250).fadeOut("fast");
	}

	function loadingBackground2() {

		$("#main-menu-background").attr("src", "./assets/images/background-02.jpg");
		$("#main-menu-background").css("zoom", 1);
		$("#main-menu-background").fadeIn("fast").animate({'zoom': 1.05}, 10250).fadeOut("fast");

		$("#loading-screen-char").attr("src", "./assets/images/char-2.png");

		$("#loading-screen-char").css("right", "40%");
		$("#loading-screen-char").css("width", "50%");
		$("#loading-screen-char").css("zoom", 1.5);

		$("#loading-screen-char").fadeIn("fast").animate({right: "-=20px", zoom: 1.55}, 10250).fadeOut("fast");
	}

	function loadingBackground3() {

		$("#main-menu-background").attr("src", "./assets/images/background-01.jpg");
		$("#main-menu-background").css("zoom", 1);
		$("#main-menu-background").fadeIn("fast").animate({'zoom': 1.05}, 10250).fadeOut("fast");

		$("#loading-screen-char").attr("src", "./assets/images/char-3.png");
		
		$("#loading-screen-char").css("right", "1%");
		$("#loading-screen-char").css("width", "25%");
		$("#loading-screen-char").css("zoom", 1.5);

		$("#loading-screen-char").fadeIn("fast").animate({right: "+=20px", zoom: 1.55}, 10250).fadeOut("fast");
	}

	function loadingBackground4() {

		$("#main-menu-background").attr("src", "./assets/images/background-02.jpg");
		$("#main-menu-background").css("zoom", 1);
		$("#main-menu-background").fadeIn("fast").animate({'zoom': 1.05}, 10250).fadeOut("fast");

		$("#loading-screen-char").attr("src", "./assets/images/char-4.png");

		$("#loading-screen-char").css("right", "35%");
		$("#loading-screen-char").css("width", "45%");
		$("#loading-screen-char").css("zoom", 1.5);

		$("#loading-screen-char").fadeIn("fast").animate({right: "-=20px", zoom: 1.55}, 10250).fadeOut("fast");
	}

	function loadingBackground5() {

		$("#main-menu-background").attr("src", "./assets/images/background-01.jpg");
		$("#main-menu-background").css("zoom", 1);
		$("#main-menu-background").fadeIn("fast").animate({'zoom': 1.05}, 10250).fadeOut("fast");

		$("#loading-screen-char").attr("src", "./assets/images/char-5.png");
		
		$("#loading-screen-char").css("right", "1%");
		$("#loading-screen-char").css("width", "30%");
		$("#loading-screen-char").css("zoom", 1.5);

		$("#loading-screen-char").fadeIn("fast").animate({right: "+=20px", zoom: 1.55}, 10250).fadeOut("fast");
	}

	function loadingBackground6() {

		$("#main-menu-background").attr("src", "./assets/images/background-02.jpg");
		$("#main-menu-background").css("zoom", 1);
		$("#main-menu-background").fadeIn("fast").animate({'zoom': 1.05}, 10250).fadeOut("fast");

		$("#loading-screen-char").attr("src", "./assets/images/char-6.png");

		$("#loading-screen-char").css("right", "40%");
		$("#loading-screen-char").css("width", "35%");
		$("#loading-screen-char").css("zoom", 1.5);

		$("#loading-screen-char").fadeIn("fast").animate({right: "-=20px", zoom: 1.55}, 10250).fadeOut("fast");
	}




	function randomChar() {

		$("#main-menu-background").attr("src", "./assets/images/background-02.jpg");

		setTimeout(() => {

			$("#loading-screen-char").css("zoom", 1);
			$("#loading-screen-char").css("right", "0%");
			$("#loading-screen-char").css("top", "0%");

			// $("#main-menu-background").attr("src", "./assets/images/background-02.jpg");
			$("#main-menu-background").fadeIn("fast");
			$("#main-menu-background").animate({zoom: 1.05}, 10000);
			$("#main-menu-background").fadeOut("fast");

			$("#loading-screen-char").attr("src", "./assets/images/char-1.png");
			$("#loading-screen-char").css("position", "fixed");
			$("#loading-screen-char").css("transform", "translate(-50%, -50%)");
			$("#loading-screen-char").css("right", "5px");
			$("#loading-screen-char").css("top", "70%");
			$("#loading-screen-char").css("width", "25%");
			$("#loading-screen-char").css("zoom", 1.5);
			$("#loading-screen-char").fadeIn("fast").animate({right: "+=30px", zoom: 1.55}, 10000).fadeOut("fast");
		}, 0);

		$("#main-menu-background").attr("src", "./assets/images/background-01.jpg");

		setTimeout(() => {

			$("#loading-screen-char").css("zoom", 1);
			$("#loading-screen-char").css("right", "0%");
			$("#loading-screen-char").css("top", "0%");

			// $("#main-menu-background").attr("src", "./assets/images/background-01.jpg");
			$("#main-menu-background").fadeIn("fast");
			$("#main-menu-background").animate({zoom: 1.05}, 10000);
			$("#main-menu-background").fadeOut("fast");

			$("#loading-screen-char").attr("src", "./assets/images/char-1.png");
			$("#loading-screen-char").css("position", "fixed");
			$("#loading-screen-char").css("transform", "translate(-50%, -50%)");
			$("#loading-screen-char").css("right", "5px");
			$("#loading-screen-char").css("top", "70%");
			$("#loading-screen-char").css("width", "25%");
			$("#loading-screen-char").css("zoom", 1.5);
			$("#loading-screen-char").fadeIn("fast").animate({right: "+=30px", zoom: 1.55}, 10000).fadeOut("fast");
		}, 10000);

		$("#main-menu-background").attr("src", "./assets/images/background-02.jpg");

		setTimeout(() => {

			$("#loading-screen-char").css("zoom", 1);
			$("#loading-screen-char").css("right", "0%");
			$("#loading-screen-char").css("top", "0%");

			// $("#main-menu-background").attr("src", "./assets/images/background-01.jpg");
			$("#main-menu-background").fadeIn("fast");
			$("#main-menu-background").animate({zoom: 1.05}, 10000);
			$("#main-menu-background").fadeOut("fast");

			$("#loading-screen-char").attr("src", "./assets/images/char-1.png");
			$("#loading-screen-char").css("position", "fixed");
			$("#loading-screen-char").css("transform", "translate(-50%, -50%)");
			$("#loading-screen-char").css("right", "5px");
			$("#loading-screen-char").css("top", "70%");
			$("#loading-screen-char").css("width", "25%");
			$("#loading-screen-char").css("zoom", 1.5);
			$("#loading-screen-char").fadeIn("fast").animate({right: "+=30px", zoom: 1.55}, 10000).fadeOut("fast");
		}, 10000);

	}

	function gtaIVLogo() {
		$("#gta-iv-logo").attr("src", "./assets/images/gta-iv-logo.png");
		$("#gta-iv-logo").css("zoom", 1);
		$("#gta-iv-logo").fadeIn("slow").delay(2500).fadeOut("slow");
	}

	function rockstarGamesLogo() {
		$("#gta-iv-logo").attr("src", "./assets/images/rockstar-games-logo.png");
		$("#gta-iv-logo").css("zoom", 0.750);
		$("#gta-iv-logo").fadeIn("fast").animate({'zoom': 0.875}, 3000).fadeOut("fast");
	}

	function rockstarNorthLogo() {
		$("#gta-iv-logo").attr("src", "./assets/images/rockstar-north-logo.png");
		$("#gta-iv-logo").css("zoom", 0.750);
		$("#gta-iv-logo").fadeIn("fast").animate({'zoom': 0.875}, 3000).fadeOut("fast");
	}

	function mainMenu() {
		$(".center-screen").remove();
		$("#main-menu-background").attr("src", "./assets/images/background-01.jpg");
		$("#main-menu-background").css("padding", 0);
		$("#main-menu-background").css("margin", 0);
		$("#main-menu-background").css("width", window.innerWidth);
		$("#main-menu-background").css("height", window.innerHeight - 10);
		$(".main-menu").removeClass("hidden");
		$(".main-menu-opening").remove();

		$("#btn-start").on("click", startGame);
	}
})