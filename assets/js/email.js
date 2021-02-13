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
            toggleModal(); 
        },
        function(error) {
            console.log("FAILED", error);
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

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);