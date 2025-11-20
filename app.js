/* ========== SIDEBAR ELEMENTS ========== */
const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon')

/* ========== SIDEBAR ELEMENTS ========== */

menu.addEventListener("click", function(){
    sideBar.classList.remove("close-sidebar")
    sideBar.classList.add("open-sidebar")
});

closeIcon.addEventListener("click", function(){
    sideBar.classList.remove("open-sidebar");
    sideBar.classList.add("close-sidebar");
    
})

/* ========== MAIL FUNCTION ========== */

function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value,
    }

    emailjs.send("service_mmpowlf", "template_9qn3pbp", parms)
    .then(() => {
        Swal.fire({
            title: "Message Sent!",
            text: "Thank you for contacting me 😊",
            icon: "success",
            showClass: {
                popup: `
                  animate__animated
                  animate__fadeInDown
                `
            },
            hideClass: {
                popup: `
                  animate__animated
                  animate__fadeOutUp
                `
            }
        });
        document.getElementById("contact-form").reset();
    });
}