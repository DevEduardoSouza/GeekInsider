export const html = {
  getElement(element) {
    return document.querySelector(element);
  },
  getElements(element) {
    return document.querySelectorAll(element);
  },
  createElement(element) {
    return document.createElement(element);
  },
  addClass(element, nameClass) {
    return element.classList.add(nameClass);
  },
};
