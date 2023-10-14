(function card() {
  async function getDataLatestNews() {
    const reponse = await fetch("data/latestNews.json");
    const data = await reponse.json();
    return data;
  }
  async function getDataMostViewed() {
    const reponse = await fetch("data/mostViewed.json");
    const data = await reponse.json();
    return data;
  }


  const htmlCard = {
    getElement(element) {
      return document.querySelector(element);
    },
    getElements(element) {
      return document.querySelectorAll(element);
    },
    createElementAndClass(element, ...classes) {
      if (element) {
        const genericElement = document.createElement(element);
        if (classes.length > 0) {
          genericElement.classList.add(...classes);
        }
        return genericElement;
      }
      return;
    },
  };

  const createPost = {
    container(data, element) {
      const postContainer = htmlCard.createElementAndClass(
        "div",
        "post",
        `post-data-${data.id}`
      );

      postContainer.innerHTML = `
        <div class="container-img-latest">
          <a href="#">
            <img
              class="img-post"
              src="${data.imageUrl}"
              alt="${data.title}"
            />
          </a>
        </div>
  
        <div class="content-post">
          <span class="category-post category-post-ln">${data.category}</span>
          <a href="#">
            <span class="title-post">${data.title}</span>
          </a>
          <span class="preview-description">${data.content}</span>
          <div class="post-details">
            <div class="author-details">
              <i class="bi bi-person-square"></i>
              <span>${data.author.name}</span>
            </div>
            <div class="statistic-post">
              <span class="post-date">
                <span class="value">${data.createdAt}</span>
              </span>
            </div>
          </div>
        </div>
      
      `;

      element.appendChild(postContainer);
    },
  };

  const containerLatestNews = htmlCard.getElement(".content-latest-news");
  const containerMostViewed = htmlCard.getElement(".container-aside-ln");

  async function init() {
    const dataLatestNews = await getDataLatestNews();
    const dataMostViewed = await getDataMostViewed();

    dataLatestNews.map((data) => {
      createPost.container(data, containerLatestNews);
    });

    dataMostViewed.map((data) => {
      createPost.container(data, containerMostViewed);
    });
  }

  init();
})();
