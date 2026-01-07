function focusBox(element) {
    let current = document.querySelector(".active");
    if (current) {
        current.classList.remove("active");
    }

    element.classList.add("active");
}