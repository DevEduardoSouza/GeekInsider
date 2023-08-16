const html = {
  getElement(element) {
    return document.querySelector(element);
  },
  getElements(element) {
    return document.querySelectorAll(element);
  },
  createElement(element){
    return document.createElement(element);
  },
  addClass(element, nameClass){
    return element.classList.add(nameClass);
  }
}

/*::::::::::-> Add o active <-::::::::::*/
const navbarBtnsCategory = {
  getCategories() {
   return html.getElements('.navbar li');
  },
  createListeners() {
    const categories = this.getCategories();
    categories.forEach(element => {
        element.addEventListener('click', ()=>{
          console.log(element.children[0].classList.add('active'));
          
        })
    });
  }
  
}
console.log(
  navbarBtnsCategory.createListeners()
)

/*::::::::::-> Função do menu para add e remover navbar <-::::::::::*/
const handleMenu = {

  getButtonHamburger() {
    return html.getElement('.btn-hamburger button');
  },
  createListeners() {
    const btn = this.getButtonHamburger();
    btn.addEventListener('click', () => {
      const navbar = html.getElement('nav');
      navbar.classList.toggle('hide');
    });
  }
};
handleMenu.createListeners();