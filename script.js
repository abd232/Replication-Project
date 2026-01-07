function leftArrowClicked(btn) {
  const cardsContainer = btn.parentElement.querySelector(
    ".cards-container-body"
  );
  const viewportWidth = window.innerWidth;
  const cardWidth = document.querySelector(".card").offsetWidth;
  const numberOfCardsShowen = parseInt(viewportWidth / cardWidth);
}

function rightArrowClicked(btn) {
  const cardsContainer =
    btn.parentElement.parentElement.parentElement.querySelector(
      ".cards-container-body"
    );
  const viewportWidth = window.innerWidth;
  const cardWidth = document.querySelector(".card").offsetWidth;
  const numberOfCardsShowen = parseInt(viewportWidth / cardWidth);
  console.log(cardWidth);

  cardsContainer.scrollBy({
    left: cardWidth * numberOfCardsShowen + numberOfCardsShowen * 15,
    behavior: "smooth",
  });
}

// Footer tabs + privacy underline
function changeTab(tabId, contentId) {
  document.querySelectorAll(".tab-item").forEach((t) => t.classList.remove("active-tab"));
  document.querySelectorAll(".tab-content").forEach((c) => (c.style.display = "none"));
  document.getElementById(tabId).classList.add("active-tab");
  document.getElementById(contentId).style.display = "grid";
}

function showLine() {
  document.getElementById("privacy-text").style.textDecoration = "underline 2px";
}

function hideLine() {
  document.getElementById("privacy-text").style.textDecoration = "none";
}
