document.addEventListener('DOMContentLoaded', function() {
    // Инициализация слайдера
    const slides = document.querySelectorAll('.slider__item');
    const dots = document.querySelectorAll('.slider__dot');
    const prevBtn = document.querySelector('.slider__prev');
    const nextBtn = document.querySelector('.slider__next');

    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });

        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // Обработчики событий для главного слайдера
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });

    // Автопрокрутка слайдера
    let sliderInterval = setInterval(nextSlide, 5000);

    // Управление бургер-меню и оверлеем
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const navbarOverlay = document.getElementById('navbarOverlay');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    function showOverlay() {
        if (navbarOverlay) {
            navbarOverlay.classList.add('show');
            document.body.classList.add('menu-open');
        }
    }

    function hideOverlay() {
        if (navbarOverlay) {
            navbarOverlay.classList.remove('show');
            document.body.classList.remove('menu-open');
        }
    }

    function closeMenu() {
        if (navbarCollapse && navbarCollapse.classList.contains('show')) {
            if (typeof bootstrap !== 'undefined') {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                    toggle: false
                });
                bsCollapse.hide();
            }
        }
    }

    if (navbarCollapse) {
        navbarCollapse.addEventListener('shown.bs.collapse', function() {
            showOverlay();
        });

        navbarCollapse.addEventListener('hidden.bs.collapse', function() {
            hideOverlay();
        });
    }

    if (navbarOverlay) {
        navbarOverlay.addEventListener('click', function() {
            closeMenu();
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeMenu();
        });
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth > 991) {
            hideOverlay();
        }
    });
});

// Класс для слайдера брендов
class BrandsSlider {
    constructor() {
        this.currentSlide = 0;
        this.slides = document.querySelectorAll('.brands-slider__item');
        this.dots = document.querySelectorAll('.brands-slider__dot');
        this.prevBtn = document.querySelector('.brands-slider__prev');
        this.nextBtn = document.querySelector('.brands-slider__next');

        this.init();
    }

    init() {
        this.prevBtn?.addEventListener('click', () => this.prevSlide());
        this.nextBtn?.addEventListener('click', () => this.nextSlide());

        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.goToSlide(index));
        });
    }

    showSlide(index) {
        this.slides.forEach(slide => slide.classList.remove('active'));
        this.dots.forEach(dot => dot.classList.remove('active'));

        this.slides[index]?.classList.add('active');
        this.dots[index]?.classList.add('active');

        this.currentSlide = index;
    }

    nextSlide() {
        const nextIndex = (this.currentSlide + 1) % this.slides.length;
        this.showSlide(nextIndex);
    }

    prevSlide() {
        const prevIndex = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.showSlide(prevIndex);
    }

    goToSlide(index) {
        this.showSlide(index);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.brands-slider__item')) {
        new BrandsSlider();
    }
});
