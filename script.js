document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       MOBILE HAMBURGER MENU
    ========================= */

    const menuToggle = document.getElementById("menuToggle");
    const navbar = document.getElementById("navbar");

    if (menuToggle && navbar) {

        menuToggle.addEventListener("click", function (e) {
            e.preventDefault();

            navbar.classList.toggle("show");

            // Change hamburger to X
            if (navbar.classList.contains("show")) {
                menuToggle.innerHTML = "✕";
            } else {
                menuToggle.innerHTML = "☰";
            }
        });


        // Close menu when a navigation link is clicked
        const navLinks = navbar.querySelectorAll("a");

        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                navbar.classList.remove("show");
                menuToggle.innerHTML = "☰";

            });

        });


        // Close menu if user clicks outside it
        document.addEventListener("click", function (e) {

            if (
                !navbar.contains(e.target) &&
                !menuToggle.contains(e.target)
            ) {

                navbar.classList.remove("show");
                menuToggle.innerHTML = "☰";

            }

        });

    }


    /* =========================
       BOOKING FORM
    ========================= */

    const bookingForm =
        document.getElementById("bookingForm");

    if (bookingForm) {

        const dateInput =
            document.getElementById("date");

        // Minimum date = today
        if (dateInput) {

            const today = new Date();

            const year =
                today.getFullYear();

            const month =
                String(today.getMonth() + 1)
                    .padStart(2, "0");

            const day =
                String(today.getDate())
                    .padStart(2, "0");

            dateInput.min =
                `${year}-${month}-${day}`;
        }


        bookingForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();

                const name =
                    document.getElementById("name")
                    .value.trim();

                const phone =
                    document.getElementById("phone")
                    .value.trim();

                const pickup =
                    document.getElementById("pickup")
                    .value.trim();

                const destination =
                    document.getElementById("destination")
                    .value.trim();

                const date =
                    document.getElementById("date")
                    .value;

                const passengers =
                    document.getElementById("passengers")
                    .value;

                const extraMessage =
                    document.getElementById("message")
                    .value.trim();


                const cleanPhone =
                    phone.replace(/\D/g, "");


                if (cleanPhone.length !== 10) {

                    alert(
                        "Please enter a valid 10-digit mobile number."
                    );

                    return;
                }


                if (
                    !name ||
                    !pickup ||
                    !destination ||
                    !date ||
                    !passengers
                ) {

                    alert(
                        "Please fill in all required fields."
                    );

                    return;
                }


                const selectedDate =
                    new Date(date + "T00:00:00");


                const formattedDate =
                    selectedDate.toLocaleDateString(
                        "en-IN",
                        {
                            day: "2-digit",
                            month: "long",
                            year: "numeric"
                        }
                    );


                const message =
`🚕 NEW RIDE WAVES BOOKING

👤 Customer Name: ${name}

📱 Customer Mobile: ${cleanPhone}

📍 Pickup: ${pickup}

🏁 Destination: ${destination}

📅 Travel Date: ${formattedDate}

👥 Passengers: ${passengers}

📝 Additional Message:
${extraMessage || "None"}

━━━━━━━━━━━━━━━━
Please contact the customer to confirm the ride.
━━━━━━━━━━━━━━━━`;


                const whatsappURL =
                    "https://wa.me/918221826243?text=" +
                    encodeURIComponent(message);


                window.open(
                    whatsappURL,
                    "_blank"
                );

            }
        );

    }

});
