/* =========================================
   RIDE WAVES
   JAVASCRIPT
========================================= */


document.addEventListener("DOMContentLoaded", function () {


    /* =====================================
       MOBILE MENU
    ===================================== */

    const menuBtn = document.getElementById("menuBtn");
    const navbar = document.getElementById("navbar");

    if (menuBtn && navbar) {

        menuBtn.addEventListener("click", function () {

            navbar.classList.toggle("active");

            const icon = menuBtn.querySelector("i");

            if (navbar.classList.contains("active")) {

                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");

            } else {

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        });


        /* Close menu after clicking a link */

        const navLinks = navbar.querySelectorAll("a");

        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                navbar.classList.remove("active");

                const icon = menuBtn.querySelector("i");

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            });

        });

    }



    /* =====================================
       BOOKING FORM
    ===================================== */

    const bookingForm = document.getElementById("bookingForm");

    if (bookingForm) {

        bookingForm.addEventListener("submit", function (event) {

            event.preventDefault();


            const pickup =
                document.getElementById("pickup").value.trim();

            const destination =
                document.getElementById("destination").value.trim();

            const date =
                document.getElementById("travelDate").value;

            const passengers =
                document.getElementById("passengers").value;


            if (!pickup || !destination || !date) {

                alert("Please fill all booking details.");

                return;

            }


            const formattedDate =
                new Date(date + "T00:00:00")
                    .toLocaleDateString("en-IN", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric"
                    });


            const message =
                `Hello Ride Waves!%0A%0A` +

                `I want to book a ride.%0A%0A` +

                `📍 Pickup: ${pickup}%0A` +

                `🏁 Destination: ${destination}%0A` +

                `📅 Date: ${formattedDate}%0A` +

                `👥 Passengers: ${passengers}%0A%0A` +

                `Please share availability and fare details.`;


            const whatsappURL =
                `https://wa.me/918221826243?text=${message}`;


            window.open(whatsappURL, "_blank");

        });

    }



    /* =====================================
       SET MINIMUM DATE
    ===================================== */

    const dateInput =
        document.getElementById("travelDate");

    if (dateInput) {

        const today =
            new Date().toISOString().split("T")[0];

        dateInput.min = today;

    }



    /* =====================================
       HEADER SCROLL EFFECT
    ===================================== */

    const header =
        document.querySelector(".header");


    window.addEventListener("scroll", function () {

        if (window.scrollY > 50) {

            header.style.boxShadow =
                "0 5px 25px rgba(0,0,0,0.08)";

        } else {

            header.style.boxShadow = "none";

        }

    });



    /* =====================================
       SIMPLE SCROLL REVEAL
    ===================================== */

    const revealElements =
        document.querySelectorAll(
            ".service-card, .route-card, .review-card, .contact-card"
        );


    const observer =
        new IntersectionObserver(

            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.style.opacity = "1";

                        entry.target.style.transform =
                            "translateY(0)";

                        observer.unobserve(entry.target);

                    }

                });

            },

            {
                threshold: 0.12
            }

        );


    revealElements.forEach(function (element) {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(25px)";

        element.style.transition =
            "opacity 0.6s ease, transform 0.6s ease";

        observer.observe(element);

    });



    /* =====================================
       SMOOTH ANCHOR FALLBACK
    ===================================== */

    document.querySelectorAll('a[href^="#"]').forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId =
                this.getAttribute("href");

            if (
                targetId &&
                targetId !== "#" &&
                document.querySelector(targetId)
            ) {

                event.preventDefault();

                document.querySelector(targetId)
                    .scrollIntoView({
                        behavior: "smooth"
                    });

            }

        });

    });


});
