// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
window.onscroll = () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};

// Counter Animation
const counters = document.querySelectorAll('.counter');
const speed = 200;

const startCounters = () => {
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
};

// Intersection Observer for Counters
const statsSection = document.querySelector('.stats');
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            startCounters();
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

observer.observe(statsSection);

// Simple Market Price Simulator
const tickerItems = document.querySelectorAll('.ticker-item span:last-child');
setInterval(() => {
    tickerItems.forEach(item => {
        const currentVal = parseFloat(item.innerText.replace('%', ''));
        const change = (Math.random() - 0.5) * 0.1;
        const newVal = (currentVal + change).toFixed(2);
        item.innerText = (newVal > 0 ? '+' : '') + newVal + '%';
        item.className = newVal > 0 ? 'up' : 'down';
    });
}, 3000);
