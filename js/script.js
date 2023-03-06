const openModalButton = document.querySelector(".exemplo1");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () => {
  [modal, fade].forEach((el) => el.classList.toggle("hide"));
};

[openModalButton, closeModalButton, fade].forEach((el) => {
  if (el === openModalButton) {
    el.addEventListener("click", () => {
      modalTitulo = modal.querySelector(".modal-header h2");
      modalTitulo.innerHTML = "Exemplo 01";
      modal.querySelector(".modal-body p").innerHTML =
        "A propriedade justify-content possui o valor flex-start, o qual faz com que os elementos filhos do container que você está aplicando a propriedade sejam alinhados à esquerda (no start/início).";
      toggleModal();
    });
  } else {
    el.addEventListener("click", () => {
      toggleModal();
    });
  }
});
