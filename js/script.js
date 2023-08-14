const html = {
  getElement(element) {
    return document.querySelector(element);
  },
  getElements(element) {
    return document.querySelectorAll(element);
  },
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