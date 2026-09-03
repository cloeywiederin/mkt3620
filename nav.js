// Reusable navigation for Cloey's personal website

document.addEventListener("DOMContentLoaded", function () {

    const navHTML = `
        <nav class="main-nav">
            <div class="nav-container">

                <!-- Name / Logo -->
                <a href="index.html" class="nav-logo">
                    <span class="logo-dot"></span>
                    Cloey Wiederin
                </a>

                <!-- Navigation Links -->
                <div class="nav-links">
                    <a href="about.html">About Me</a>
                    <a href="experience.html">Experience</a>
                    <a href="skills.html">Skills & Achievements</a>
                    <a href="interests.html">Interests</a>
                    <a href="contact.html">Contact</a>
                </div>

            </div>
        </nav>
    `;

    // Place navigation at the top of the page
    document.body.insertAdjacentHTML("afterbegin", navHTML);

});
