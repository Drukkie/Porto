document.addEventListener("DOMContentLoaded", function() {
    // Initialize Swiper
    var swiper = new Swiper(".swiper-container", {
        slidesPerView: 1,
        loop: true,
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        spaceBetween: -100,
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 800,
            modifier: 1,
            slideShadows: false,
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

    // Define content for each slide
    const slideContents = [{
            title: "Cacoa Catrostrofe",
            description: "This is the content for Slide 1.",
            image: "Img/Porto1.png",
        },
        {
            title: "Cacoa Catrostrofe",
            description: "This is the content for Slide 2.",
            image: "Img/Porto2.png",
        },
        {
            title: "Slide 3",
            description: "This is the content for Slide 3.",
            image: "Img/Porto3.png",
        },
        // Add more slides as needed
    ];

    // Add click event to each slide
    document.querySelectorAll(".swiper-slide").forEach((slide, index) => {
        slide.addEventListener("click", () => {
            const content = slideContents[index];
            modalBody.innerHTML = `
                <h2>${content.title}</h2>
                <img src="${content.image}" alt="${content.title}" style="width: 100%; border-radius: 10px;">
                <p>${content.description}</p>
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
});