// ===================================
// Mobile Navigation Toggle
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const body = document.body;

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            mobileToggle.classList.toggle('active');
            body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
            
            const spans = mobileToggle.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(7px, 7px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -7px)';
            } else {
                spans[0].style.transform = '';
                spans[1].style.opacity = '';
                spans[2].style.transform = '';
            }
        });

        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    navMenu.classList.remove('active');
                    mobileToggle.classList.remove('active');
                    body.style.overflow = '';
                    
                    const spans = mobileToggle.querySelectorAll('span');
                    spans[0].style.transform = '';
                    spans[1].style.opacity = '';
                    spans[2].style.transform = '';
                }
            });
        });
    }

    // ===================================
    // Smooth Scrolling for Anchor Links
    // ===================================
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // ===================================
    // Header Scroll Effect
    // ===================================
    const header = document.querySelector('.header');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            header.style.boxShadow = '0 4px 20px rgba(25, 108, 242, 0.12)';
        } else {
            header.style.boxShadow = '0 2px 8px rgba(25, 108, 242, 0.08)';
        }

        lastScroll = currentScroll;
    });

    // ===================================
    // Intersection Observer for Animations
    // ===================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.feature-card, .value-card, .info-card, .platform-card, .resource-card, .stat-card, .faq-item, .checklist-item');
    
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });

    // ===================================
    // Counter Animation for Stats
    // ===================================
    const counterElements = document.querySelectorAll('.stat-number, .info-number');
    
    const animateCounter = (element) => {
        const target = element.textContent.trim();
        const isNumber = /^\d+$/.test(target);
        
        if (!isNumber) return;
        
        const value = parseInt(target);
        const duration = 2000;
        const steps = 60;
        const stepValue = value / steps;
        const stepDuration = duration / steps;
        let current = 0;
        
        const counter = setInterval(() => {
            current += stepValue;
            if (current >= value) {
                element.textContent = value + (target.includes('+') ? '+' : '');
                clearInterval(counter);
            } else {
                element.textContent = Math.floor(current).toString();
            }
        }, stepDuration);
    };

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                entry.target.classList.add('counted');
                animateCounter(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counterElements.forEach(el => {
        counterObserver.observe(el);
    });

    // ===================================
    // Form Button Interaction
    // ===================================
    const formButton = document.querySelector('.btn-form-open');
    if (formButton) {
        formButton.addEventListener('click', function() {
            const icon = this.querySelector('.form-icon');
            if (icon) {
                icon.style.animation = 'pulse 0.5s ease';
                setTimeout(() => {
                    icon.style.animation = '';
                }, 500);
            }
        });
    }

    // ===================================
    // Download Button Interaction
    // ===================================
    const downloadButtons = document.querySelectorAll('.btn-download-main, .btn-download');
    downloadButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const icon = this.querySelector('svg');
            if (icon) {
                icon.style.animation = 'fadeInUp 0.5s ease';
                setTimeout(() => {
                    icon.style.animation = '';
                }, 500);
            }
        });
    });

    // ===================================
    // Card Tilt Effect (Optional Enhancement)
    // ===================================
    const cards = document.querySelectorAll('.feature-card, .platform-card, .value-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
        });
        
        card.addEventListener('mouseleave', function() {
            card.style.transform = '';
        });
    });

    // ===================================
    // Add Active Class to Current Page Link
    // ===================================
    const currentLocation = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentLocation) {
            link.classList.add('active');
        }
    });

    // ===================================
    // Loading Animation Complete
    // ===================================
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.3s ease';
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });

    // ===================================
    // Lazy Loading Images (if any are added)
    // ===================================
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });

        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
    }

    // ===================================
    // Console Welcome Message
    // ===================================
    console.log('%cSubtitleEdit', 'font-size: 24px; font-weight: bold; color: #196CF2;');
    console.log('%cProfessional Subtitle Editing Tool', 'font-size: 14px; color: #26272C;');
    console.log('%c🚀 Website loaded successfully!', 'font-size: 12px; color: #5A5A5F;');
});
