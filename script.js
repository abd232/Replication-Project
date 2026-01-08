const header = document.getElementById("siteHeader");
const spacer = document.getElementById("headerSpacer");

const disableButton = true;

function showDetailsPage() {
  const detailDiv = document.querySelector(".dettail-page");
  const allCardsContainer = document.querySelectorAll(".cards-container");
  allCardsContainer.forEach((cardsContainer) => {
    cardsContainer.classList.add("hidden");
  });

  detailDiv.classList.remove("hidden");
}

function showMainPage() {
  const detailDiv = document.querySelector(".dettail-page");
  const allCardsContainer = document.querySelectorAll(".cards-container");
  allCardsContainer.forEach((cardsContainer) => {
    cardsContainer.classList.remove("hidden");
  });

  detailDiv.classList.add("hidden");
}

function syncHeader() {
  const isCollapsed = window.scrollY > 0;
  header.classList.toggle("is-collapsed", isCollapsed);
  spacer.classList.toggle("is-collapsed", isCollapsed);
}

window.addEventListener("scroll", syncHeader);
syncHeader();

const themeToggle = document.getElementById("themeToggle");
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    themeToggle.textContent = isDark ? "Light" : "Dark";
  });
}

const hostButton = document.getElementById("hostButton");
const hostModal = document.getElementById("hostModal");
const hostModalClose = document.getElementById("hostModalClose");

function openHostModal() {
  if (!hostModal) return;
  hostModal.classList.remove("hidden");
  hostModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeHostModal() {
  if (!hostModal) return;
  hostModal.classList.add("hidden");
  hostModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

if (hostButton && hostModal) {
  hostButton.addEventListener("click", openHostModal);
}

if (hostModalClose) {
  hostModalClose.addEventListener("click", closeHostModal);
}

if (hostModal) {
  hostModal.addEventListener("click", (event) => {
    if (event.target === hostModal) {
      closeHostModal();
    }
  });
}

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && hostModal && !hostModal.classList.contains("hidden")) {
    closeHostModal();
  }
});

function isAtEnd(cardsContainer) {
  return (
    cardsContainer.scrollLeft + cardsContainer.clientWidth + 100 >=
    cardsContainer.scrollWidth
  );
}

function isAtStart(cardsContainer) {
  return cardsContainer.scrollLeft <= 100;
}

function leftArrowClicked(btn) {
  const cardsContainer =
    btn.parentElement.parentElement.parentElement.querySelector(
      ".cards-container-body"
    );
  const viewportWidth = window.innerWidth;
  const cardWidth = document.querySelector(".card").offsetWidth;
  const numberOfCardsShowen = parseInt(viewportWidth / cardWidth);
  const rightArrowBtn = btn.parentElement.querySelectorAll("button")[1];

  cardsContainer.scrollBy({
    left: -(cardWidth * numberOfCardsShowen + numberOfCardsShowen * 15),
    behavior: "smooth",
  });
  rightArrowBtn.disabled = false;
  btn.disabled = isAtStart(cardsContainer);
}

function rightArrowClicked(btn) {
  const cardsContainer =
    btn.parentElement.parentElement.parentElement.querySelector(
      ".cards-container-body"
    );
  const viewportWidth = window.innerWidth;
  const cardWidth = document.querySelector(".card").offsetWidth;
  const numberOfCardsShowen = parseInt(viewportWidth / cardWidth);
  const rightArrowBtn = btn.parentElement.querySelectorAll("button")[0];

  cardsContainer.scrollBy({
    left: cardWidth * numberOfCardsShowen + numberOfCardsShowen * 15,
    behavior: "smooth",
  });
  rightArrowBtn.disabled = false;
  btn.disabled = isAtEnd(cardsContainer);
}

// Footer tabs + privacy underline
function changeTab(tabId, contentId) {
  document
    .querySelectorAll(".tab-item")
    .forEach((t) => t.classList.remove("active-tab"));
  document
    .querySelectorAll(".tab-content")
    .forEach((c) => (c.style.display = "none"));
  document.getElementById(tabId).classList.add("active-tab");
  document.getElementById(contentId).style.display = "grid";
}

function showLine() {
  document.getElementById("privacy-text").style.textDecoration =
    "underline 2px";
}

function hideLine() {
  document.getElementById("privacy-text").style.textDecoration = "none";
}
