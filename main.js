let openModal = document.querySelector(".openModal");
let closeModal = document.querySelector(".closeModal");
let popup = document.querySelector(".popup");

openModal.addEventListener("click", () => {
    popup.classList.add("popup_open");
});

closeModal.addEventListener("click", () => {
    popup.classList.remove("popup_open");
});
