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