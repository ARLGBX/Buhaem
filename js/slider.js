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

    // Обработчики событий
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });

    // Автопрокрутка слайдера
    setInterval(nextSlide, 5000);

    // Плавное закрытие мобильного меню при клике на ссылку
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbarCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                    toggle: false
                });
                bsCollapse.hide();
            }
        });
    });
});

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
        const prevIndex = this.currentSlide === 0 ? this.slides.length - 1 : this.currentSlide - 1;
        this.showSlide(prevIndex);
    }

    goToSlide(index) {
        this.showSlide(index);
    }
}

class ReviewsSlider {
    constructor() {
        this.currentSlide = 0;
        this.slides = document.querySelectorAll('.reviews-slider__item');
        this.dots = document.querySelectorAll('.reviews-slider__dot');
        this.prevBtn = document.querySelector('.reviews-slider__prev');
        this.nextBtn = document.querySelector('.reviews-slider__next');

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
        const prevIndex = this.currentSlide === 0 ? this.slides.length - 1 : this.currentSlide - 1;
        this.showSlide(prevIndex);
    }

    goToSlide(index) {
        this.showSlide(index);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new BrandsSlider();
    new ReviewsSlider();
});
