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
  console.log(cardsContainer);

  cardsContainer.scrollBy({
    left: cardWidth * numberOfCardsShowen + 15,
    behavior: "smooth",
  });
}
