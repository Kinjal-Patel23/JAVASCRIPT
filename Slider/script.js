document.addEventListener('DOMContentLoaded', function() {
    const nextBtn = document.querySelector(".next");
    const previousBtn = document.querySelector(".previous");
    const bgImages = document.querySelectorAll(".bgImg");
    const dotsContainer = document.querySelector(".dots-container");
    
    let count = 0;
    const totalSlides = bgImages.length;
    const maxCount = (totalSlides - 1) * 100;
    
    // Create dots
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        if (i === 0) dot.classList.add("active");
        dot.addEventListener("click", () => goToSlide(i));
        dotsContainer.appendChild(dot);
    }
    
    const dots = document.querySelectorAll(".dot");
    
    function updateSlider() {
        bgImages.forEach((img, index) => {
            img.style.transform = `translateX(${-count}%)`;
            img.style.transition = "transform 0.5s ease";
        });
        
        // Update dots
        dots.forEach((dot, index) => {
            dot.classList.remove("active");
            if (index === count / 100) {
                dot.classList.add("active");
            }
        });
        
        // Update button states
        previousBtn.disabled = count === 0;
        nextBtn.disabled = count === maxCount;
    }
    
    function goToSlide(slideIndex) {
        count = slideIndex * 100;
        updateSlider();
    }
    
    nextBtn.addEventListener("click", function() {
        if (count < maxCount) {
            count += 100;
            updateSlider();
        }
    });
    
    previousBtn.addEventListener("click", function() {
        if (count > 0) {
            count -= 100;
            updateSlider();
        }
    });
    
    // Initialize button states
    updateSlider();
    
    // Auto-slide functionality (optional)
    let autoSlideInterval = setInterval(() => {
        if (count < maxCount) {
            count += 100;
        } else {
            count = 0;
        }
        updateSlider();
    }, 5000);
    
    // Pause auto-slide on hover
    const slider = document.querySelector(".slider");
    slider.addEventListener("mouseenter", () => {
        clearInterval(autoSlideInterval);
    });
    
    slider.addEventListener("mouseleave", () => {
        autoSlideInterval = setInterval(() => {
            if (count < maxCount) {
                count += 100;
            } else {
                count = 0;
            }
            updateSlider();
        }, 5000);
    });
});