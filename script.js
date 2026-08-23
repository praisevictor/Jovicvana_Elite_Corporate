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
           CONTACT FORM — LIVE SUBMISSION VIA FORMSPREE
        ========================================================= */

        // NOTE: ids fixed to match index.html ("contactForm" / "formMessage")
        const form = document.getElementById("contactForm");
        const message = document.getElementById("formMessage");

        // 1. Go to https://formspree.io and create a free account.
        // 2. Create a new form, verify it with Jovicvana's real email address.
        // 3. Formspree gives you an endpoint like:
        //    https://formspree.io/f/xxxxxxxx
        // 4. Paste that endpoint below, replacing YOUR_FORM_ID.
        const FORMSPREE_ENDPOINT = "https://formspree.io/f/https://formspree.io/f/maewzbrn";

        form.addEventListener("submit", async (event) => {

            event.preventDefault();

            const submitBtn = form.querySelector(".submit-btn");
            const originalBtnText = submitBtn.textContent;

            submitBtn.disabled = true;
            submitBtn.textContent = "SENDING...";
            message.textContent = "Sending your enquiry...";

            try {
                const response = await fetch(FORMSPREE_ENDPOINT, {
                    method: "POST",
                    headers: {
                        Accept: "application/json"
                    },
                    body: new FormData(form)
                });

                if (response.ok) {
                    message.textContent =
                        "Thank you — your enquiry has been sent. Our team will get back to you shortly.";
                    form.reset();
                } else {
                    message.textContent =
                        "Something went wrong sending your enquiry. Please try again or email us directly.";
                }
            } catch (error) {
                message.textContent =
                    "Network error — please check your connection and try again.";
            } finally {
                submitBtn.disabled = false;
                submitBtn.textContent = originalBtnText;
            }

        });
