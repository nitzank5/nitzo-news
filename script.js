// Dark mode toggle
const toggleBtn = document.getElementById('toggle-dark');
const htmlEl = document.documentElement;

function setTheme(theme) {
    htmlEl.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    toggleBtn.innerText = theme === 'dark' ? '🌙' : '☀️';
}

toggleBtn.addEventListener('click', () => {
    const current = htmlEl.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    setTheme(current);
});

(function initTheme() {
    const saved = localStorage.getItem('theme') || 'light';
    setTheme(saved);
})();

// בעתיד: פונקציית fetch לעדכונים מ-API (דוגמה למבנה)
/*
async function loadNews() {
    const res = await fetch('/api/news');
    const data = await res.json();
    const container = document.getElementById('news-list');
    container.innerHTML = '';
    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'news-card';
        card.innerHTML = `
            <a class="news-link" href="${item.link}" target="_blank" rel="noopener">
                <div class="news-title">${item.title}</div>
                <div class="news-desc">${item.description || ''}</div>
                <div class="news-meta">${item.source} • ${item.date}</div>
            </a>
        `;
        container.appendChild(card);
    });
}
window.onload = loadNews;
*/
