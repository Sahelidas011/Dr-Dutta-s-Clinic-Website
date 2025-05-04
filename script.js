document.addEventListener("DOMContentLoaded", function () {

    // Appointment form handling

    const appointmentForm = document.getElementById("appointmentForm");

    const appointmentAlert = document.getElementById("appointmentAlert");

 

    if (appointmentForm) {

        appointmentForm.addEventListener("submit", function (event) {

            event.preventDefault();

            appointmentForm.reset();

            if (appointmentAlert) {

                appointmentAlert.classList.remove("d-none");

            }

        });

    }

 

    // Lab test form handling

    const labTestForm = document.getElementById("labTestForm");

    const labTestAlert = document.getElementById("labTestAlert");

 

    if (labTestForm) {

        labTestForm.addEventListener("submit", function (event) {

            event.preventDefault();

            labTestForm.reset();

            if (labTestAlert) {

                labTestAlert.classList.remove("d-none");

            }

        });

    }

});
