// Initialize AOS animations
			AOS.init();

			// Typed.js effect
			new Typed("#typed", {
				strings: [
					"Welcome to Sky Bharat Labs",
					"Empowering Businesses",
					"Innovating the Future"
				],
				typeSpeed: 50,
				backSpeed: 30,
				loop: true
			});

			// Swiper.js for testimonials
			var swiper = new Swiper(".mySwiper", {
				autoplay: { delay: 2500 },
				loop: true
			});

			// Button Click Animation
			document
				.querySelector(".btn-primary")
				.addEventListener("click", () => {
					gsap.fromTo(
						".hero h1",
						{ scale: 1 },
						{ scale: 1.2, duration: 0.5, yoyo: true, repeat: 1 }
					);
				});
//hamburger
          const hamburger = document.getElementById("hamburger");
			const menu = document.getElementById("menu");

			hamburger.addEventListener("click", () => {
				hamburger.classList.toggle("active");
				menu.classList.toggle("show");
			});
//Preventing content from being copied
			document.addEventListener("copy", function (event) {
				event.preventDefault();
				const textToCopy = "Don't copy site content";
				event.clipboardData.setData("text/plain", textToCopy);
			});
			
			
//faq section
const faqs = document.querySelectorAll(".faq");
			faqs.forEach(faq => {
				faq.addEventListener("click", () => {
					faq.classList.toggle("open");
				});
			});
			
//Footer drop down list
const ftrs = document.querySelectorAll(".ftr");
			ftrs.forEach(ftr => {
				ftr.addEventListener("click", () => {
					ftr.classList.toggle("open");
				});
			});