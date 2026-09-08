// ===============================
// REUSABLE WEBSITE NAVIGATION
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    // Header + Logo
    const header = document.querySelector("#site-header");

    if (header) {
        header.innerHTML = `
            <div class="site-header">

                <div class="logo">
                    Cloey
                </div>

                <div class="header-info">
                    <p>Marketing • Leadership • Creativity</p>
                </div>

            </div>
        `;
    }


    // Primary Navigation
    const navigation = document.querySelector("#primary-navigation");

    if (navigation) {
        navigation.innerHTML = `
            <nav class="main-nav">

                <ul>

                    <li>
                        <a href="index.html">Home</a>
                    </li>

                    <li>
                        <a href="about.html">About Me</a>
                    </li>

                    <li>
                        <a href="experience.html">Experience</a>
                    </li>

                    <li>
                        <a href="skills.html">Skills & Achievements</a>
                    </li>

                    <li>
                        <a href="interests.html">Interests</a>
                    </li>

                    <li>
                        <a href="contact.html">Contact</a>
                    </li>

                </ul>

            </nav>
        `;
    }


    // Secondary Navigation
    const secondaryNavigation =
        document.querySelector("#secondary-navigation");

    if (secondaryNavigation) {
        secondaryNavigation.innerHTML = `
            <div class="secondary-nav">

                <a href="about.html">About</a>
                <a href="experience.html">Experience</a>
                <a href="skills.html">Skills</a>
                <a href="contact.html">Contact</a>

            </div>
        `;
    }


    // Footer
    const footer = document.querySelector("#site-footer");

    if (footer) {
        footer.innerHTML = `
            <footer class="site-footer">

                <p>
                    © ${new Date().getFullYear()} Cloey Wiederin
                </p>

                <p>
                    <a href="contact.html">Contact</a>
                    &nbsp; | &nbsp;
                    <a href="index.html">Home</a>
                </p>

            </footer>
        `;
    }

});
