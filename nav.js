// ================================
// CLOEY WIEDERIN - WEBSITE NAVIGATION
// ================================

document.addEventListener("DOMContentLoaded", function () {

    // Create navigation
    const nav = document.createElement("nav");
    nav.className = "main-navigation";

    nav.innerHTML = `
        <div class="nav-container">

            <!-- Logo / Name -->
            <a href="index.html" class="nav-logo">
                <span class="logo-dot"></span>
                Cloey Wiederin
            </a>

            <!-- Navigation Links -->
            <div class="nav-links">
                <a href="index.html">About Me</a>
                <a href="experience.html">Experience</a>
                <a href="skills.html">Skills & Achievements</a>
                <a href="interests.html">Personality & Interests</a>
                <a href="portfolio.html">Portfolio</a>
                <a href="contact.html">Contact</a>
            </div>

        </div>
    `;

    // Add navigation to the top of the page
    document.body.prepend(nav);


    // ================================
    // MOBILE MENU
    // ================================

    const menuButton = document.createElement("button");
    menuButton.className = "mobile-menu";
    menuButton.innerHTML = "☰";
    menuButton.setAttribute("aria-label", "Open navigation menu");

    nav.querySelector(".nav-container").prepend(menuButton);

    menuButton.addEventListener("click", function () {
        nav.querySelector(".nav-links").classList.toggle("show");
    });


    // ================================
    // HIGHLIGHT CURRENT PAGE
    // ================================

    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    const links = nav.querySelectorAll(".nav-links a");

    links.forEach(function (link) {

        const linkPage = link.getAttribute("href");

        if (linkPage === currentPage) {
            link.classList.add("active");
        }

    });

});
