// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
window.onscroll = () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};

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
