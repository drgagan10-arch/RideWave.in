document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       MOBILE MENU
    ========================= */

    const menuToggle = document.getElementById("menuToggle");
    const navbar = document.getElementById("navbar");

    if (menuToggle && navbar) {

        menuToggle.addEventListener("click", function () {

            navbar.classList.toggle("show");

        });

    }


    /* =========================
       BOOKING FORM
    ========================= */

    const bookingForm = document.getElementById("bookingForm");

    if (bookingForm) {

        const dateInput = document.getElementById("date");

        /* Minimum travel date = today */

        if (dateInput) {

            const today = new Date();

            const year = today.getFullYear();

            const month = String(
                today.getMonth() + 1
            ).padStart(2, "0");

            const day = String(
                today.getDate()
            ).padStart(2, "0");

            dateInput.min =
                `${year}-${month}-${day}`;

        }


        bookingForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const name =
                    document.getElementById("name").value.trim();

                const phone =
                    document.getElementById("phone").value.trim();

                const pickup =
                    document.getElementById("pickup").value.trim();

                const destination =
                    document.getElementById("destination").value.trim();

                const date =
                    document.getElementById("date").value;

                const passengers =
                    document.getElementById("passengers").value;

                const extraMessage =
                    document.getElementById("message").value.trim();


                /* Validate phone */

                const cleanPhone =
                    phone.replace(/\D/g, "");

                if (cleanPhone.length !== 10) {

                    alert(
                        "Please enter a valid 10-digit mobile number."
                    );

                    return;

                }


                if (!name ||
                    !pickup ||
                    !destination ||
                    !date ||
                    !passengers) {

                    alert(
                        "Please fill in all required fields."
                    );

                    return;

                }


                /* Format date */

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


                /* WhatsApp booking message */

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


                /* Open WhatsApp */

                window.open(
                    whatsappURL,
                    "_blank"
                );

            }
        );

    }

});
