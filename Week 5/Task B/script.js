document.addEventListener("DOMContentLoaded", () => {
    const profileCard = document.getElementById("profile-card");
    const themeButton = document.getElementById("theme-button");

    // Profile data for dynamic loading
    const profileData = {
        name: "Corey Black",
        role: "Full Stack Developer",
        email: "B01651145@studentmail.uws.ac.uk",
        phone: "07802 680504",
        imgSrc: "imgs/me.jpg"
    };

    // Populate profile details dynamically
    document.getElementById("name").textContent = profileData.name;
    document.getElementById("role").textContent = profileData.role;
    document.getElementById("email").textContent = profileData.email;
    document.getElementById("phone").textContent = profileData.phone;
    document.getElementById("pfp").src = profileData.imgSrc;

    // Flip card on click for any button with the class "flip-button"
    document.querySelectorAll(".flip-button").forEach(button => {
        button.addEventListener("click", () => {
            profileCard.querySelector(".card-inner").classList.toggle("is-flipped");
        });
    });

    // Theme toggle
    themeButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
    });
});
