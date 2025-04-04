document.addEventListener("DOMContentLoaded", function() {
    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(event) {
            event.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Form Submission (Basic Alert)
    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Your message has been sent!");
        this.reset();
    });
});
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the page from refreshing
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    
    if (name && email && message) {
    document.getElementById("responseMessage").textContent = "Thank you for contacting us!";
    document.getElementById("responseMessage").style.color = "green";
    
    // You can add code here to send form data to a server using fetch() or an API
    } else {
    document.getElementById("responseMessage").textContent = "Please fill out all fields.";
    document.getElementById("responseMessage").style.color = "red";
    }
    });