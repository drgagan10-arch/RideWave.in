/* =========================================
   RIDE WAVES JAVASCRIPT
========================================= */


document.addEventListener("DOMContentLoaded", function () {


    /* =====================================
       MOBILE MENU
    ===================================== */

    const menuBtn =
        document.getElementById("menuBtn");

    const navbar =
        document.getElementById("navbar");


    if (menuBtn && navbar) {

        menuBtn.addEventListener("click", function () {

            navbar.classList.toggle("active");

            const icon =
                menuBtn.querySelector("i");


            if (navbar.classList.contains("active")) {

                icon.classList.remove("fa-bars");

                icon.classList.add("fa-xmark");

            } else {

                icon.classList.remove("fa-xmark");

                icon.classList.add("fa-bars");

            }

        });

    }



    /* =====================================
       BOOKING FORM → WHATSAPP
    ===================================== */

    const bookingForm =
        document.getElementById("bookingForm");


    if (bookingForm) {

        bookingForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const name =
                    document
                    .getElementById("customerName")
                    .value
                    .trim();


                const phone =
                    document
                    .getElementById("customerPhone")
                    .value
                    .trim();


                const pickup =
                    document
                    .getElementById("pickup")
                    .value
                    .trim();


                const destination =
                    document
                    .getElementById("destination")
                    .value
                    .trim();


                const date =
                    document
                    .getElementById("travelDate")
                    .value;


                const passengers =
                    document
                    .getElementById("passengers")
                    .value;


                const extraMessage =
                    document
                    .getElementById("customerMessage")
                    .value
                    .trim();



                /* PHONE VALIDATION */

                const cleanPhone =
                    phone.replace(/\D/g, "");


                if (cleanPhone.length !== 10) {

                    alert(
                        "Please enter a valid 10-digit mobile number."
                    );

                    return;

                }



                /* DATE */

                let formattedDate = date;


                if (date) {

                    formattedDate =
                        new Date(
                            date + "T00:00:00"
                        ).toLocaleDateString(
                            "en-IN",
                            {
                                day: "2-digit",
                                month: "long",
                                year: "numeric"
                            }
                        );

                }



                /* WHATSAPP MESSAGE */

                let message =

`🚕 *NEW RIDE WAVES BOOKING*

👤 *Customer Name:* ${name}

📱 *Customer Mobile:* ${cleanPhone}

📍 *Pickup:* ${pickup}

🏁 *Destination:* ${destination}

📅 *Travel Date:* ${formattedDate}

👥 *Passengers:* ${passengers}`;


                if (extraMessage) {

                    message +=

`

📝 *Additional Message:*
${extraMessage}`;

                }


                message +=

`

━━━━━━━━━━━━━━━━
Please contact the customer to confirm the ride.
━━━━━━━━━━━━━━━━`;



                /* WHATSAPP URL */

                const whatsappNumber =
                    "918221826243";


                const whatsappURL =
                    "https://wa.me/" +
                    whatsappNumber +
                    "?text=" +
                    encodeURIComponent(message);



                /* OPEN WHATSAPP */

                window.open(
                    whatsappURL,
                    "_blank"
                );

            }
        );

    }



    /* =====================================
       MINIMUM DATE = TODAY
    ===================================== */

    const dateInput =
        document.getElementById("travelDate");


    if (dateInput) {

        const today =
            new Date()
            .toISOString()
            .split("T")[0];


        dateInput.min = today;

    }



    /* =====================================
       SCROLL HEADER SHADOW
    ===================================== */

    const header =
        document.querySelector(".header");


    if (header) {

        window.addEventListener(
            "scroll",
            function () {

                if (window.scrollY > 40) {

                    header.style.boxShadow =
                        "0 5px 25px rgba(0,0,0,0.10)";

                } else {

                    header.style.boxShadow =
                        "none";

                }

            }
        );

    }



    /* =====================================
       REVEAL ANIMATION
    ===================================== */

    const revealElements =
        document.querySelectorAll(
            ".service-card, " +
            ".large-service-card, " +
            ".route-card, " +
            ".route-large-card, " +
            ".review-card, " +
            ".why-feature, " +
            ".contact-card, " +
            ".contact-big-card"
        );


    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(

                function (entries) {

                    entries.forEach(
                        function (entry) {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.style.opacity =
                                    "1";

                                entry.target.style.transform =
                                    "translateY(0)";

                                observer.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },

                {
                    threshold: 0.1
                }

            );


        revealElements.forEach(
            function (element) {

                element.style.opacity = "0";

                element.style.transform =
                    "translateY(20px)";

                element.style.transition =
                    "opacity 0.6s ease, " +
                    "transform 0.6s ease";

                observer.observe(element);

            }
        );

    }

});
