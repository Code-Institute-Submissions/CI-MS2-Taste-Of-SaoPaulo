//Email sent via EmailJS.com
function sendMail(contactForm) {
    emailjs.send("service_a4q9k6q","test",{
        from_name: contactForm.name.value,
        to_name: contactForm.email.value,
        message: contactForm.message.value,
        reply_to: "roberto.oliveira.ti@gmail.com",
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            toggleModal("Thanks! <br>Soon we will get in touch with you offering a very good Sao Paulo attraction suggestion."); 
        },
        function(error) {
            console.log("FAILED", error);
            toggleModal("Failed to attempt to submit your order. Please try again later."); 
        }
    );
    contactForm.name.value = "";
    contactForm.email.value = "";
    contactForm.message.value = "";   
    return false;  // To block from loading a new page
}

/*credit: code from https://sabe.io/tutorials/how-to-create-modal-popup-box*/
var modal = document.querySelector(".modal");
var closeButton = document.querySelector(".close-button");

//the original code was improved to set the modal message text dinamically
function toggleModal(message) {
    modal.classList.toggle("show-modal");
    document.getElementById("model-message").innerHTML = message;
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);