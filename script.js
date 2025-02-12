document.addEventListener("DOMContentLoaded", function () {
    const modal = document.querySelector(".modal");
    const closeButton = document.querySelector(".close-btn");

    function closeModal() {
        modal.classList.remove("show");
        setTimeout(() => {
            modal.style.display = "none";
        }, 300); 
    }


    function openModal() {
        modal.style.display = "flex";
        setTimeout(() => {
            modal.classList.add("show");
        }, 10);
    }

  
    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            closeModal();
        }
    });


    window.addEventListener("scroll", closeModal);


    if (closeButton) {
        closeButton.addEventListener("click", closeModal);
    }

  
    document.querySelector(".newsletter-link").addEventListener("click", function () {
        openModal();
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    const aboutUsSection = document.querySelector(".aboutUs-section");

    window.addEventListener("scroll", function () {
        const aboutUsTop = aboutUsSection.offsetTop;
        const scrollY = window.scrollY;

        if (scrollY >= aboutUsTop - 100) { 
            header.classList.add("navbar-scrolled");
        } else {
            header.classList.remove("navbar-scrolled");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const navList = document.querySelector(".navlist");
    const categoryNav = document.querySelector(".category-nav");
    const categoryList = document.querySelector(".category-list");

    
    menuIcon.addEventListener("click", function () {
        navList.classList.toggle("show");
        categoryList.classList.toggle("show");
    });

    function updateCategoryMenu() {
        if (window.innerWidth <= 768) {
            if (!navList.contains(categoryList)) {
                navList.appendChild(categoryList);
                categoryNav.style.display = "none";
            }
        } else {
            if (!categoryNav.contains(categoryList)) {
                categoryNav.appendChild(categoryList);
                categoryNav.style.display = "block";
            }
        }
    }

    window.addEventListener("resize", updateCategoryMenu);
    updateCategoryMenu(); l
});

