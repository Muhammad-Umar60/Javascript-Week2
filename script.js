
// SEARCH FILTER
const searchInput = document.getElementById("searchInput");
const features = document.querySelectorAll(".feature-item");

searchInput.addEventListener("keyup", function () {
    const searchValue = searchInput.value.toLowerCase();
    
    features.forEach(function(feature) {
        const heading = feature.querySelector("h3").textContent.toLowerCase();
        console.log("headinng ",heading)
        if (heading.includes(searchValue)) {
            feature.style.display = "block";
        } else {
            feature.style.display = "none";
        }
    });
});


// FORM VALIDATION
const form = document.querySelector("form");

form.addEventListener("submit", function(e) {
    
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if ( name === "" ||email === "" || message === "") {
        alert("All fields are required!");
        e.preventDefault();
        return;
    }
    if(name.length < 3){
        alert("Name must be at least 3 characters.");
        e.preventDefault();
        return;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        e.preventDefault();
    }

});
