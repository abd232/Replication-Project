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