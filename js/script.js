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



/*::::::::::-> Mundar tema <-::::::::::*/
const toggleTheme = {
  toggleLightModel(){
    document.body.classList.toggle('light');
  },
  loadThemeLocalStorage(){
    const lightMode = localStorage.getItem('light');
    if (lightMode) {
      this.toggleLightModel();
    }
  },
  buttonChangeTheme(){
    const btnChangeTheme = html.getElement('#change-theme');
    btnChangeTheme.addEventListener('change', (e)=>{
      this.toggleLightModel();
      
      // Salvar ou remover light mode
      localStorage.removeItem('light');
    
      if(document.body.classList.contains('light')){
        localStorage.setItem('light', 1);
      }
    });
  }
}

function init() {
  toggleTheme.loadThemeLocalStorage();
  toggleTheme.buttonChangeTheme();
}
init();
