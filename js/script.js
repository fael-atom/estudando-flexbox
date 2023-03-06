const openModalExemplo01 = document.querySelector(".exemplo1");
const openModalExemplo02 = document.querySelector(".exemplo2");
const openModalExemplo03 = document.querySelector(".exemplo3");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () => {
  [modal, fade].forEach((el) => el.classList.toggle("hide"));
};

[
  openModalExemplo01,
  openModalExemplo02,
  openModalExemplo03,
  closeModalButton,
  fade,
].forEach((el) => {
  if (el === openModalExemplo01) {
    el.addEventListener("click", () => {
      modalTitulo = modal.querySelector(".modal-header h2");
      modalTitulo.innerHTML = "Exemplo 01";
      modal.querySelector(".modal-body p").innerHTML =
        "A propriedade justify-content possui o valor flex-start, o qual faz com que os elementos filhos do container que você está aplicando a propriedade sejam alinhados à esquerda (no start/início).";
      toggleModal();
    });
  } else if (el === openModalExemplo02) {
    el.addEventListener("click", () => {
      modalTitulo = modal.querySelector(".modal-header h2");
      modalTitulo.innerHTML = "Exemplo 02";
      modal.querySelector(".modal-body p").innerHTML =
        "A propriedade justify-content possui o valor center, o qual faz com que os elementos filhos do container que você está aplicando a propriedade sejam alinhados ao centro.";
      toggleModal();
    });
  } else if (el === openModalExemplo03) {
    el.addEventListener("click", () => {
      modalTitulo = modal.querySelector(".modal-header h2");
      modalTitulo.innerHTML = "Exemplo 03";
      modal.querySelector(".modal-body p").innerHTML =
        "A propriedade justify-content possui o valor flex-end, o qual faz com que os elementos filhos do container que você está aplicando a propriedade sejam alinhados à direita (no end/fim).";
      toggleModal();
    });
  } else {
    el.addEventListener("click", () => {
      toggleModal();
    });
  }
});
