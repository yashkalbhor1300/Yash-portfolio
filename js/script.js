/* =========================================================
   YASH KALBHOR PORTFOLIO
   DARK PROFESSIONAL THEME
========================================================= */


console.log(
    "Yash Kalbhor Portfolio Loaded"
);


/* =========================================================
   GET ELEMENTS
========================================================= */

const sections =
    document.querySelectorAll("section");


const navLinks =
    document.querySelectorAll(
        ".nav-menu a"
    );


const navbar =
    document.querySelector(".navbar");


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

function updateActiveNavigation() {

    let currentSection = "";


    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 180;


        const sectionHeight =
            section.offsetHeight;


        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach((link) => {

        link.classList.remove("active");


        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNavigation
);


updateActiveNavigation();


/* =========================================================
   NAVBAR SHADOW
========================================================= */

function updateNavbar() {

    if (window.scrollY > 20) {

        navbar.style.boxShadow =
            "0 8px 30px rgba(0, 0, 0, 0.25)";

    } else {

        navbar.style.boxShadow =
            "none";

    }

}


window.addEventListener(
    "scroll",
    updateNavbar
);


updateNavbar();


/* =========================================================
   SMOOTH SCROLL
========================================================= */

const internalLinks =
    document.querySelectorAll(
        'a[href^="#"]'
    );


internalLinks.forEach((link) => {

    link.addEventListener(
        "click",
        function (event) {

            const targetId =
                this.getAttribute("href");


            if (
                targetId === "#" ||
                !targetId
            ) {
                return;
            }


            const target =
                document.querySelector(
                    targetId
                );


            if (target) {

                event.preventDefault();


                const navbarHeight =
                    navbar.offsetHeight;


                const targetPosition =
                    target.offsetTop -
                    navbarHeight;


                window.scrollTo({

                    top:
                        targetPosition,

                    behavior:
                        "smooth"

                });

            }

        }
    );

});


/* =========================================================
   PROJECT CARD INTERACTION
========================================================= */

const projectCards =
    document.querySelectorAll(
        ".project-card"
    );


projectCards.forEach((card) => {

    card.addEventListener(
        "mouseenter",
        () => {

            card.style.transition =
                "transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease";

        }
    );

});


/* =========================================================
   PAGE LOAD
========================================================= */

window.addEventListener(
    "load",
    () => {

        document.body.classList.add(
            "page-loaded"
        );

    }
);