const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const currentTheme = localStorage.getItem('theme');
if (currentTheme==='dark') {
    document.documentElement.setAttribute('data-theme','dark');
    themeIcon.textContent='☀️';
}
themeToggleBtn.addEventListener('click',() => {
    let theme = document.documentElement.getAttribute('data-theme');
    if (theme === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        themeIcon.textContent='🌙';
        localStorage.setItem('theme','light');
    } else {
        document.documentElement.setAttribute('data-theme','dark');
        themeIcon.textContent='☀️';
        localStorage.setItem('theme','dark');
    }
});
document.querySelectorAll('a[href^="#').forEach(anchor => {
    anchor.addEventListener('click',function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior:'smooth'
            });
        }
    });
});
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (){
        const btn = this.querySelector('.btn-submit');
        if (btn) {
            btn.textContent = 'sending...';
            btn.style.opacity = '0.7';
        }
    });
}