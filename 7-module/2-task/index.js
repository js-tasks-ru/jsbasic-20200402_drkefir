import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {

    this.render();

    this.elem.addEventListener('click', (event) => this.onClick(event));
    document.addEventListener('keydown', (event) => this.keyDownClose(event));
  }
  render() {
    this.elem = createElement(`
      <div class="modal">
        <!--Прозрачная подложка перекрывающая интерфейс-->
        <div class="modal__overlay"></div>
          <div class="modal__inner">
            <div class="modal__header">
              <!--Кнопка закрытия модального окна-->
              <button type="button" class="modal__close">
              <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
              </button>
              <h3 class="modal__title"></h3>
            </div>
            <div class="modal__body"></div>
          </div>
      </div>`);
  }


  open() {
    document.body.append(this.elem);
    document.body.classList.add('is-modal-open');
  }

  setTitle(title) {
    let modalTitle = this.elem.querySelector(".modal__title");
    modalTitle.innerHTML = title;
  }

  setBody(body) {
    let modalBody = this.elem.querySelector('.modal__body');
    modalBody.append(body);
  }

  close() {
    document.body.classList.remove('is-modal-open');
    this.elem.remove();
  }

  onClick(event) {
    if (event.target.closest('.modal__close')) {
      event.preventDefault();
      this.close();
    }
  }

  keyDownClose(event) {
    if (event.code === 'Escape') {
      event.preventDefault();
      this.close();
    }
  }
}