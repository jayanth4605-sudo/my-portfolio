// =====================================
// PORTFOLIO JAVASCRIPT
// =====================================


// ================= MENU =================

function toggleMenu() {

    const nav =
        document.getElementById("navMenu");

    nav.classList.toggle("show");

}


// Close mobile menu after clicking link

document
    .querySelectorAll("#navMenu a")
    .forEach(function(link) {

        link.addEventListener(
            "click",
            function() {

                document
                    .getElementById("navMenu")
                    .classList.remove("show");

            }
        );

    });


// ================= DARK MODE =================

function toggleTheme() {

    document.body.classList.toggle("dark");


    const isDark =
        document.body.classList.contains("dark");


    localStorage.setItem(
        "portfolioTheme",
        isDark ? "dark" : "light"
    );


    updateThemeIcon();

}


// Update theme icon

function updateThemeIcon() {

    const button =
        document.getElementById("themeBtn");


    if (
        document.body.classList.contains("dark")
    ) {

        button.textContent = "☀️";

    } else {

        button.textContent = "🌙";

    }

}


// Load saved theme

const savedTheme =
    localStorage.getItem("portfolioTheme");


if (savedTheme === "dark") {

    document.body.classList.add("dark");

}


updateThemeIcon();


// ================= CONTACT FORM =================

function sendMessage(event) {

    event.preventDefault();


    const name =
        document.getElementById(
            "contactName"
        ).value;


    alert(
        "Thank you, " +
        name +
        "! Your message has been received. 🚀"
    );


    document.querySelector(
        ".contact-form"
    ).reset();

}


// ================= SCROLL ANIMATION =================

const observer =
    new IntersectionObserver(
        function(entries) {

            entries.forEach(function(entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                }

            });

        },
        {
            threshold: 0.1
        }
    );


document
    .querySelectorAll(
        ".project-card, .skill-card, .certificate-card"
    )
    .forEach(function(element) {

        observer.observe(element);

    });