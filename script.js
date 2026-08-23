        /* =========================================================
           MOBILE NAVIGATION
        ========================================================= */

        const menu = document.getElementById("menu");
        const links = document.getElementById("links");

        menu.addEventListener("click", () => {
            const isOpen = links.classList.toggle("open");

            menu.setAttribute(
                "aria-expanded",
                isOpen
            );
        });

        links.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                links.classList.remove("open");

                menu.setAttribute(
                    "aria-expanded",
                    "false"
                );
            });
        });


        /* =========================================================
           SCROLL REVEAL ANIMATION
        ========================================================= */

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {

                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                    }

                });
            },
            {
                threshold: 0.12
            }
        );

        document
            .querySelectorAll(".reveal")
            .forEach((element) => {
                observer.observe(element);
            });


        /* =========================================================
           CONTACT FORM DEMO
        ========================================================= */

        const form = document.getElementById("form");
        const message = document.getElementById("msg");

        form.addEventListener("submit", (event) => {

            event.preventDefault();

            message.textContent =
                "Enquiry captured in the design prototype. Connect the form to Jovicvana’s real email or backend before production.";

            form.reset();

        });