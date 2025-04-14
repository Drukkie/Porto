document.addEventListener("DOMContentLoaded", function() {
            // Initialize Swiper
            var swiper = new Swiper(".swiper-container", {
                slidesPerView: 3, // Show 3 slides at a time
                loop: true, // Enable looping
                spaceBetween: 30, // Add spacing between slides
                grabCursor: true, // Enable grab cursor
                effect: "coverflow", // Use the coverflow effect
                coverflowEffect: {
                    rotate: 0, // No rotation
                    stretch: 0, // No stretching
                    depth: 50, // Depth effect for 3D
                    modifier: 1, // Effect multiplier
                    slideShadows: false, // Disable shadows
                },
                autoplay: {
                    delay: 3000, // Delay between slides in milliseconds (3 seconds)
                    disableOnInteraction: false, // Keep autoplay running even after user interaction
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            });





            // Modal logic
            const modal = document.getElementById("modal");
            const modalBody = document.getElementById("modal-body");
            const closeModal = document.querySelector(".close");

            // Ensure the modal is hidden on page load
            modal.style.display = "none";

            // Define content for each slide
            const slideContents = [{
                    title: "Codekwast",
                    description: "Codekwast is een project dat ik in 10 weken heb uitgevoerd in een groep van drie. De opdracht was om kinderen kunst te laten maken met code. Hiervoor moesten we een workshop voorbereiden en geven aan kinderen tussen de 10 en 14 jaar. We maakten een uitlegboekje, een website en een korte video.Ik heb een groot deel van de huisstijl ontworpen met uitzondering van het poppetjes in het logo, de website gecodeerd én het boekje gemaakt.",
                    image1: "Img/Codekwast1.jpg", // First image for Slide 1
                    image2: "Img/Codekwast2.jpg", // Second image for Slide 1
                    link: "https://codekwast.nl/", // Link for Slide 1
                },
                {
                    title: "Cacoa Catastrofe",
                    description: "De Cacao Catastrofe was een project van vier personen, waarbij we in 10 weken tijd een multimediaal verhaal moesten creëren voor het CBS. We kozen ervoor om het proces van cacao te volgen, met de focus op de situatie van de boeren en de impact van klimaatverandering. Hiervoor hebben we een 2D-omgeving ontwikkeld waar je doorheen kunt scrollen en op verschillende elementen kunt klikken voor extra informatie. Ik heb vooral gewerkt aan het videomateriaal en geluid, maar heb ook meegedacht over designkeuzes en geholpen bij het coderen.",
                    image1: "Img/CacaoFoto1.jpg", // First image for Slide 2
                    image2: "Img/CacaoFoto2.jpg", // Second image for Slide 2
                    link: "https://mia-mms-2425.github.io/team03/", // Link for Slide 2
                },
                {
                    title: "Gen art",
                    description: "Ik had 10 weken de tijd om in mijn eentje generative kunst te maken. Dit moest gedaan worden met een aangwezen artiest waar je verolgens samen mee werkt om met een van hun nummers een visukle kusnt te maken die reageert op muziek. Dit is gedaan met java en proccesing met verchillende gegeven libaries. Dit moest ook werken met een arduino doosje die wij zelf moesten maken met knoppen die de visuals beinvloden zodat je tijden de preformance het kkan beinvloede.",
                    video: "Img/Screen rec.webm", // Video for Slide 3
                },
                // Add more slides as needed
            ];

            // Add click event to each slide
            document.querySelectorAll(".swiper-slide").forEach((slide, index) => {
                        slide.addEventListener("click", () => {
                                    const content = slideContents[index];
                                    if (!content) return; // Ensure content exists before showing the modal
                                    modalBody.innerHTML = `
                <h2>${content.title}</h2>
                <p>${content.description}</p>
                ${
                    content.link
                        ? `<div class="modal-button-container">
                               <a href="${content.link}" target="_blank" class="modal-button">Naar de website</a>
                           </div>`
                        : ""
                }
                ${
                    content.video
                        ? `<div class="modal-video">
                            <video controls style="width: 80%; border-radius: 10px;">
                                <source src="${content.video}" type="video/webm">
                                Your browser does not support the video tag.
                            </video>
                           </div>`
                        : `<div class="modal-images">
                            <img src="${content.image1}" alt="${content.title} Image 1" class="modal-image">
                            <img src="${content.image2}" alt="${content.title} Image 2" class="modal-image">
                           </div>`
                }
            `;
            modal.style.display = "flex"; // Show the modal
            document.body.classList.add("modal-open"); // Disable scrolling on the body
        });
    });

    // Close the modal when the close button is clicked
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
        document.body.classList.remove("modal-open"); // Re-enable scrolling on the body
    });

    // Close the modal when clicking outside the modal content
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
            document.body.classList.remove("modal-open"); // Re-enable scrolling on the body
        }
    });

    // Intersection Observer to make Swiper visible with a bouncy effect
    const swiperContainer = document.querySelector(".swiper-container");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    swiperContainer.classList.remove("hidden");
                    swiperContainer.classList.add("visible");
                } else {
                    swiperContainer.classList.remove("visible");
                    swiperContainer.classList.add("hidden");
                }
            });
        },
        {
            threshold: 0.9, // Trigger when 90% of the Swiper container is visible
        }
    );

    observer.observe(swiperContainer);
});