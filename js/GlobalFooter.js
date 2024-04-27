// WebCompontes está baseado em class

// GlobalFooter traz funcionalidades e proriedades do HTML como addEventListener
class GlobalFooter extends HTMLElement {
  constructor() {
    super();
    this.build();
  }

  // Será responável de juntar todos os elementos
  build() {
    // Criar uma shadow DOM
    const shadow = this.attachShadow({ mode: "open" });

    shadow.appendChild(this.styles());

    const footer = this.createFooter();
    const contentFooter = this.createContentFooter();
    const containerBrand = this.createContainerBrand();
    const categories = this.createCategories();

    contentFooter.appendChild(containerBrand);
    contentFooter.appendChild(categories);

    footer.appendChild(contentFooter);

    shadow.appendChild(footer);
  }

  createFooter() {
    const footer = document.createElement("footer");
    return footer;
  }

  createContentFooter() {
    const contentFooter = document.createElement("div");
    contentFooter.classList.add("content-footer", "container");
    return contentFooter;
  }

  createContainerBrand() {
    const containerBrand = this.createElementAndClass("div", "container-brand");

    //
    const socialMedia = this.createElementAndClass("div", "social-media");
    const ul = this.createElementAndClass("ul", "infos-social-media");

    let listSocialMedia = [
      { link: "#", class: "bi-instagram" },
      { link: "#", class: "bi-facebook" },
      { link: "#", class: "bi-twitter" },
      { link: "#", class: "bi-tiktok" },
    ];

    const list = listSocialMedia.map((element) => {
      const li = this.createElementAndClass("li");

      const linkCategory = this.createElementAndClass("a");
      linkCategory.href = element.link;

      const i = this.createElementAndClass("i", "bi", element.class);

      linkCategory.appendChild(i);
      li.appendChild(linkCategory);
      console.log(li);

      return li;
    });

    list.forEach((li) => {
      ul.appendChild(li);
    });

    socialMedia.appendChild(ul);
    //

    //
    const logo = this.createElementAndClass("div", "logo");
    const logoLink = this.createElementAndClass("a");
    logoLink.href = "index.html";
    logoLink.title = "Home";

    const logoImg = this.createElementAndClass("img");
    const srcImg = "../../imgs/logo-geekInseder-02.png";
    logoImg.src = srcImg;

    logoLink.appendChild(logoImg);

    logo.appendChild(logoLink);
    //

    //
    const ad = this.createElementAndClass("div", "ad");
    const span = this.createElementAndClass("span", "massage-remove-ad");
    span.textContent = "Remova os anúcios"
    ad.appendChild(span);

    const payments = this.createElementAndClass("div", "payments");

    const listPaymentsLogos = [
      "../../imgs/logo-mercado-pago-256.png",
      "../../imgs/logo-pix-256.png",
    ];

    const listPayments = listPaymentsLogos.map((element) => {
      const img = this.createElementAndClass("img");
      img.src = element;

      return img;
    });
    listPayments.forEach((img) => {
      payments.appendChild(img);
    });
    ad.appendChild(payments);
    //

    containerBrand.appendChild(socialMedia);
    containerBrand.appendChild(logo);
    containerBrand.appendChild(ad);

    return containerBrand;
  }

  createCategories() {
    const categories = this.createElementAndClass("div", "categories");

    const nav = this.createElementAndClass("nav");
    categories.appendChild(nav);

    const ul = this.createElementAndClass("ul", "navbar", "navbar-footer");

    let listCategories = [
      { link: "/index.html", name: "Home" },
      { link: "#", name: "Contate-Nós" },
      { link: "#", name: "Políticas de privacidades" },
      { link: "#", name: "Sobre" },
    ];
    const list = listCategories.map((category) => {
      const li = this.createElementAndClass("li");

      const linkCategory = this.createElementAndClass("a");
      linkCategory.href = category.link;

      const span = this.createElementAndClass("span", "name-category");
      span.textContent = category.name;
      linkCategory.appendChild(span);

      li.appendChild(linkCategory);

      return li;
    });

    list.forEach((li) => {
      ul.appendChild(li);
    });

    nav.appendChild(ul);

    categories.appendChild(nav);
    return categories;
  }

  // Função para auxiliar na criação de elementos com class
  createElementAndClass(element, ...classes) {
    if (element) {
      const genericElement = document.createElement(element);
      if (classes.length > 0) {
        genericElement.classList.add(...classes);
      }
      return genericElement;
    }
    return;
  }

  // Estilos
  styles() {
    const style = document.createElement("style");
    style.textContent = `
    footer {
      color: var(--theme-light);
      margin-top: 2rem;
    }
    footer .content-footer.container {
      border: var(--dev-border);
      padding: 1rem 0;
      margin: 0 auto;
      gap: 1.5rem;
      border-top: 1px solid #cccccc88;
      flex-direction: column;
    }
    footer .content-footer .container-brand {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }
    footer .content-footer .container-brand .logo img {
      width: 70px;
      height: 70px;
      margin-left: 80px;
    }
    footer .content-footer .container-brand .ad .payments {
      display: flex;
    }
    footer .content-footer .container-brand .ad .payments img {
      width: 150px;
      width: 100px;
    }
    footer .categories nav {
      width: 100%;
      display: flex;
      gap: 3rem;
    }
    footer .categories nav ul {
      margin: auto;
      display: flex;
      gap: 2rem;
      text-transform: uppercase;
      text-decoration: underline;
      font-size: .8rem;
    }
    
    .light footer{
      background-color: var(--theme-light);
    }
    .light footer, .light footer a{
      color: var(--main-color) ;
    }
    
    
    
    `;
    return style;
  }
}

/** Essa propriedade vai possibilitar a dar nome ao novo Elemento HTML
 * 1° Parâmetro nome da tag nova HTML
 *  formato do nome: Sempre separado por traço (-)
 *  novo-elemento , novo-elemento-html
 * 2° Parâmetro vai o nome da class
 *  TesteHtml
 */
customElements.define("global-footer", GlobalFooter);
