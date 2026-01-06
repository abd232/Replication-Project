// For Footer:
function changeTab(tabId, contentId) {

    document.querySelectorAll('.tab-item').forEach(t => t.classList.remove('active-tab'));

    document.querySelectorAll('.tab-content').forEach(c => c.style.display = 'none');

    document.getElementById(tabId).classList.add('active-tab');

    document.getElementById(contentId).style.display = 'grid';
}


function showLine() {
    document.getElementById("privacy-text").style.textDecoration = "underline 2px";
}
function hideLine() {
    document.getElementById("privacy-text").style.textDecoration = "none";
}

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

// التحقق من وجود ثيم محفوظ مسبقاً
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);