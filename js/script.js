const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon")
    document.body.classList.toggle("dark")
})
window.addEventListener("load", () => {
    if (document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else {
        dayNight.querySelector("i").classList.add("fa-moon")
    }
})

// ****
// document.addEventListener("DOMContentLoaded", function () {
//     var navToggle = document.querySelector(".nav-toggle");
//     var navOpen = document.querySelector(".navopen");
//     var navClose = document.querySelector(".naclose");
//     var aside = document.querySelector(".aside");

//     function handleToggle() {
//         var windowWidth = window.innerWidth;
//         if (windowWidth > 1199) {
//             navToggle.classList.add("hidden");
//         } else {
//             navToggle.classList.remove("hidden");
//         }
//     }

//     function handleClick() {
//         navOpen.addEventListener("click", function () {
//             navOpen.classList.add("hidden");
//             navClose.classList.remove("hidden");
//             aside.classList.add("mobo-nav-open");
//         });

//         navClose.addEventListener("click", function () {
//             navClose.classList.add("hidden");
//             navOpen.classList.remove("hidden");
//             aside.classList.remove("mobo-nav-open");
//         });
//     }

//     // Initial setup
//     handleToggle();
//     handleClick();

//     // Handle window resize
//     window.addEventListener("resize", function () {
//         handleToggle();
//     });
// });

// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Function to handle window resize
    function handleResize() {
        var windowWidth = window.innerWidth;

        // Check if window width is above 1199px
        if (windowWidth > 1199) {
            // Add 'hidden' class to nav-toggle
            document.querySelector('.nav-toggle').classList.add('hidden');
        } else {
            // Remove 'hidden' class from nav-toggle
            document.querySelector('.nav-toggle').classList.remove('hidden');
        }
    }

    // Function to handle click on navopen
    function handleNavOpenClick() {
        // Add 'hidden' class to navopen
        document.querySelector('.navopen').classList.add('hidden');

        // Remove 'hidden' class from naclose
        document.querySelector('.naclose').classList.remove('hidden');

        // Add 'mobo-nav-open' class to aside
        document.querySelector('.aside').classList.add('mobo-nav-open');
    }

    // Function to handle click on naclose
    function handleNacloseClick() {
        // Add 'hidden' class to naclose
        document.querySelector('.naclose').classList.add('hidden');

        // Remove 'hidden' class from navopen
        document.querySelector('.navopen').classList.remove('hidden');

        // Remove 'mobo-nav-open' class from aside
        document.querySelector('.aside').classList.remove('mobo-nav-open');
    }

    // Function to handle click on li in the nav
    function handleNavLiClick() {
        // Remove 'mobo-nav-open' class from aside
        document.querySelector('.aside').classList.remove('mobo-nav-open');

        // Remove 'hidden' class from navopen
        document.querySelector('.navopen').classList.remove('hidden');

        // Add 'hidden' class to naclose
        document.querySelector('.naclose').classList.add('hidden');
    }

    // Event listeners
    window.addEventListener('resize', handleResize);
    document.querySelector('.navopen').addEventListener('click', handleNavOpenClick);
    document.querySelector('.naclose').addEventListener('click', handleNacloseClick);

    // Get all li elements in the nav and add click event listener
    var navLiElements = document.querySelectorAll('.nav li');
    navLiElements.forEach(function (li) {
        li.addEventListener('click', handleNavLiClick);
    });

    // Initial resize handling
    handleResize();
});



/**/
document.addEventListener("DOMContentLoaded", function () {
    // Function to handle click on nav links
    function handleNavLinkClick(event) {
        event.preventDefault();

        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: "smooth",
            });
        }
    }

    // Add click event listeners to all nav links
    const navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(function (link) {
        link.addEventListener('click', handleNavLinkClick);
    });
});

/**/
document.addEventListener("DOMContentLoaded", function () {
    // Function to handle click on nav links
    function handleNavLinkClick(event) {
        event.preventDefault();

        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: "smooth",
            });
        }
    }

    // Add click event listener to "Contact Me" button in the Home section
    const contactMeButton = document.querySelector('.home a.btn.hire-me');
    if (contactMeButton) {
        contactMeButton.addEventListener('click', handleNavLinkClick);
    }

    // Add click event listeners to all nav links
    const navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(function (link) {
        link.addEventListener('click', handleNavLinkClick);
    });
});
