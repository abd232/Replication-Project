const header = document.getElementById("siteHeader");
const spacer = document.getElementById("headerSpacer");

function syncHeader() {
  const isCollapsed = (window.scrollY) > 0;
  header.classList.toggle("is-collapsed", isCollapsed);
  spacer.classList.toggle("is-collapsed", isCollapsed);
}

window.addEventListener("scroll", syncHeader, { passive: true });
window.addEventListener("resize", syncHeader);
syncHeader();
