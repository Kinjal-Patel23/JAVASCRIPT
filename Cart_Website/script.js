window.addEventListener('load', function () {
    setTimeout(() => {
        const spinner = document.querySelector(".spinner");
        if (spinner) {
            spinner.style.opacity = "0";
            setTimeout(() => {
                spinner.style.display = "none";
            }, 1000);
        }
    }, 3000);
});

document.addEventListener('DOMContentLoaded', function () {
    const searchIcon = document.getElementById("searchIcon");
    const searchInput = document.getElementById("searchInput");

    if (searchIcon && searchInput) {
        searchIcon.addEventListener("click", function (e) {
            if (searchInput.style.width === "0px" || searchInput.style.width === "") {
                searchInput.style.width = "200px";
                searchInput.style.opacity = "1";
                searchInput.style.padding = "10px";
            } else {
                searchInput.style.width = "0px";
                searchInput.style.opacity = "0"
                searchInput.style.padding = "0px";
            }
        });
    }

    const swiperContainer = document.querySelector("swiper-container");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    if (swiperContainer && prevBtn && nextBtn) {
        prevBtn.addEventListener("click", function () {
            swiperContainer.swiper.slidePrev();
        });
        nextBtn.addEventListener("click", function () {
            swiperContainer.swiper.slideNext();
        });
    }

    const products = [
        { img: 'Assets/large_1.jpg', title: 'Carhart, white hipster backpack', price: '$259.00' },
        { img: 'Assets/large_2.jpg', title: 'Chanel, the cheetah', price: '$270.00' },
        { img: 'Assets/large_7.jpg', title: 'Collette, alligator clutch', price: '$200.00' },
        { img: 'Assets/large_4.jpg', title: 'Coco Lee, Jam2', price: '$150.00' },
        { img: 'Assets/large_5.jpg', title: 'Coco Lee, Kumis brown leather bag', price: '$250.00' },
        { img: 'Assets/large_6.jpg', title: 'Coco Lee, sweet chill sauce', price: '$200.00' },
        { img: 'Assets/large_3.jpg', title: 'Coco Lee, gladiator bag', price: '$80.00' },
        { img: 'Assets/large_8.jpg', title: 'Combat poverty approach cause engage', price: '$100.00' }
    ];

    function getCartItems() {
        const cartItems = localStorage.getItem('cartItems');
        return cartItems ? JSON.parse(cartItems) : [];
    }

    function saveCartItems(cartItems) {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }

    function addToCart(product) {
        const cartItems = getCartItems();
        cartItems.push(product);
        saveCartItems(cartItems);
        showCartCount();
        alert(`${product.title} added to cart!`);
    }

    function showCartCount() {
        const cartItems = getCartItems();
        const countElement = document.querySelector('.cart span');
        if (countElement) {
            countElement.textContent = cartItems.length;
        }
    }

    function createCard(product) {
        const card = document.createElement('div');
        card.className = 'w-[270px] h-[270px] cursor-pointer bg-[url(\'' + product.img + '\')] bg-no-repeat bg-cover bg-center flex items-end justify-end relative group overflow-hidden';
        card.innerHTML = `
            <div class="absolute inset-0 bg-[#fff] opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div class="hoverDiv w-[230px] h-[150px]">
                    <p class="text-[20px] font-semibold text-center pt-[10px]">${product.title}</p>
                    <div class="subHoverDiv w-[230px] h-[40px] mt-[30px] flex justify-between">
                        <div class="buyNow w-[140px] h-[40px] bg-[#fff] hover:bg-[#000] duration-300 text-[#000] hover:text-[#fff] cursor-pointer flex items-center justify-center gap-[10px]" data-product='${JSON.stringify(product)}'>
                            <i class="ri-shopping-basket-fill"></i>
                            <p class="text-[14px] font-bold uppercase">buy now</p>
                        </div>
                        <div class="search w-[40px] h-[40px] bg-[#000] cursor-pointer hover:bg-[#fff] text-[#fff] hover:text-[#000] duration-300 flex items-center justify-center">
                            <i class="ri-search-line"></i>
                        </div>
                        <div class="wishlist w-[40px] h-[40px] bg-[#000] cursor-pointer hover:bg-[#fff] text-[#fff] hover:text-[#000] duration-300 flex items-center justify-center">
                            <i class="ri-heart-fill"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sliderPrice w-[83px] h-[30px] bg-white mr-[30px] mb-[30px] flex items-center justify-center relative z-10 transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-2">
                <p class="text-[12px] text-[#000] font-semibold">${product.price}</p>
            </div>
        `;

        const buyNowBtn = card.querySelector('.buyNow');
        if (buyNowBtn) {
            buyNowBtn.addEventListener('click', function (e) {
                e.stopPropagation();
                addToCart(product);
            });
        }

        return card;
    }

    function mainCards() {
        const mainContainer = document.querySelector('.newArrivalsCont');

        if (!mainContainer) {
            console.error("newArrivalsCont element not found!");
            return;
        }

        mainContainer.innerHTML = '';

        products.forEach(product => {
            const card = createCard(product);
            mainContainer.appendChild(card);
        });

        console.log("Cards added to mainContainer");
    }

    const featureProducts = [
        { img: 'Assets/large_2.jpg', title: 'Chanel, the cheetah', price: '$130.00' },
        { img: 'Assets/large_5.jpg', title: 'Coco Lee, Kumis brown leather bag', price: '$220.00' },
        { img: 'Assets/large_8.jpg', title: 'Combat poverty approach cause engage', price: '$250.00' },
        { img: 'Assets/large_3.jpg', title: 'Coco Lee, gladiator bag', price: '$259.00' },
        { img: 'Assets/large_4.jpg', title: 'Coco Lee, Jam 2', price: '$200.00' },
        { img: 'Assets/large_6.jpg', title: 'Coco Lee, sweet chill sauce', price: '$249.00' }
    ];

    function createFeatureCard(product) {
        const card = document.createElement('div');
        card.className = 'w-[380px] h-[300px] cursor-pointer bg-[url(\'' + product.img + '\')] bg-no-repeat bg-cover bg-center flex items-end justify-end relative group overflow-hidden';
        card.innerHTML = `
            <div class="absolute inset-0 bg-[#fff] opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div class="hoverDiv w-[230px] h-[150px]">
                    <p class="text-[20px] font-semibold text-center pt-[10px]">${product.title}</p>
                    <div class="subHoverDiv w-[230px] h-[40px] mt-[30px] flex justify-between">
                        <div class="buyNow w-[140px] h-[40px] bg-[#fff] hover:bg-[#000] duration-300 text-[#000] hover:text-[#fff] cursor-pointer flex items-center justify-center gap-[10px]" data-product='${JSON.stringify(product)}'>
                            <i class="ri-shopping-basket-fill"></i>
                            <p class="text-[14px] font-bold uppercase">buy now</p>
                        </div>
                        <div class="search w-[40px] h-[40px] bg-[#000] cursor-pointer hover:bg-[#fff] text-[#fff] hover:text-[#000] duration-300 flex items-center justify-center">
                            <i class="ri-search-line"></i>
                        </div>
                        <div class="wishlist w-[40px] h-[40px] bg-[#000] cursor-pointer hover:bg-[#fff] text-[#fff] hover:text-[#000] duration-300 flex items-center justify-center">
                            <i class="ri-heart-fill"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sliderPrice w-[83px] h-[30px] bg-white mr-[30px] mb-[30px] flex items-center justify-center relative z-10 transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-2">
                <p class="text-[12px] text-[#000] font-semibold">${product.price}</p>
            </div>
        `;

        const buyNowBtn = card.querySelector('.buyNow');
        if (buyNowBtn) {
            buyNowBtn.addEventListener('click', function (e) {
                e.stopPropagation();
                addToCart(product);
            });
        }

        return card;
    }

    function featureMainCards() {
        const featureContainer = document.querySelector(".featuredProCont");

        if (!featureContainer) {
            console.error("featuredProCont element not found!");
            return;
        }

        featureContainer.innerHTML = '';


        featureProducts.forEach(product => {
            const card = createFeatureCard(product);
            featureContainer.appendChild(card);
        });

        console.log("Feature cards added to featureContainer");
    }

    showCartCount();

    mainCards();
    featureMainCards();

    const scrollToTopButton = document.getElementById('scrollToTop');
    if (scrollToTopButton) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 200) {
                scrollToTopButton.classList.add('show');
            } else {
                scrollToTopButton.classList.remove('show');
            }
        });

        scrollToTopButton.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

$(document).ready(function () {
    $(".dropnav").hide();
    $(".hamburger").click(function () {
        $(".dropnav").slideToggle();
    });
});