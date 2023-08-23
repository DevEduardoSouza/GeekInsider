/*::::::::::-> Dados para testes<-::::::::::*/
const animeNewsData = [
  {
    id: 1,
    title: 'New Season of "My Hero Academia" Announced',
    content: 'Exciting news for fans of "My Hero Academia" as the anime series has been confirmed to get a new season. Get ready for more action and heroism!',
    category: 'Anime News',
    comments_count: 10,
    views_count: 100,
    author: { name: 'AnimeFan2000' },
    createdAt: 'July 28, 2023',
    imageUrl: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2023/03/my-hero-academia-season-7-image.jpg',
    views: 1500,
    comments: [
      { id: 101, author: 'SuperHero99', content: 'Can\'t wait for the new season!'},
      { id: 102, author: 'FanGirl22', content: 'OMG, best news ever!!!'},
      { id: 103, author: 'AnimeAddict', content: 'My Hero Academia is life <3'}
    ]
  },
  {
    id: 2,
    title: 'Special Event: "Naruto" 20th Anniversary Celebration',
    content: 'Join us in celebrating the 20th anniversary of the beloved anime "Naruto"! We have exciting events, merchandise, and surprises for all Naruto fans.',
    category: 'Anime Events',
    comments_count: 10,
    views_count: 100,
    author: { name: 'NarutoFan2000' },
    createdAt: 'September 10, 2023',
    imageUrl: 'https://naruto-official.com/common/ogp/NTOS_OG-20th.png',
    views: 2500,
    comments: [
      { id: 104, author: 'HiddenLeafNinja', content: 'Can\'t believe it\'s been 20 years already!'},
      { id: 105, author: 'SharinganMaster', content: 'I\'ll be there for sure!'},
      { id: 106, author: 'RamenLover', content: 'I hope they serve ramen at the event!'}
    ]
  },
  {
    id: 3,
    title: 'New Anime Film: "The Legend of The Dragon Swordsman"',
    content: 'Prepare for an epic adventure with "The Legend of The Dragon Swordsman" movie. Join the protagonist as he embarks on a quest to save the mystical land from darkness.',
    category: 'Anime Movies',
    comments_count: 10,
    views_count: 100,
    author: { name: 'NarutoFan2000' },
    createdAt: 'November 5, 2023',
    imageUrl: 'https://pic1.iqiyipic.com/image/20200928/2a/50/v_153455882_m_601_zh-CN_480_270.jpg',
    views: 1800,
    comments: [
      { id: 107, author: 'EpicQuester', content: 'This movie looks amazing!'},
      { id: 108, author: 'FantasyWatcher', content: 'I\'m excited for the magical creatures!'},
      { id: 109, author: 'AnimeCritic', content: 'Hoping for a gripping storyline!'}
    ]
  },
  {
    id: 4,
    title: 'Interview with Voice Actor: Aya Suzuki (Voice of Sakura)',
    content: 'We had a chance to sit down with Aya Suzuki, the talented voice behind Sakura in "Naruto". She shares her experiences and feelings about the iconic character.',
    category: 'Anime Interviews',
    comments_count: 10,
    views_count: 100,
    author: { name: 'MusicMaestro' },
    createdAt: 'December 15, 2023',
    imageUrl: 'https://criticalhits.com.br/wp-content/uploads/2022/02/signo-sakura-naruto.jpg',
    views: 1200,
    comments: [
      { id: 110, author: 'SakuraFan101', content: 'Sakura is my favorite character!'},
      { id: 111, author: 'VoiceActorEnthusiast', content: 'Aya Suzuki is so talented!'},
      { id: 112, author: 'NarutoGeek', content: 'Loved learning about the voice acting process!'}
    ]
  },
  {
      id: 5,
      title: 'New Anime "Beyond the Stars" Premieres on October 1st',
      content: 'Exciting news for all anime fans! A brand new anime titled "Beyond the Stars" will make its debut on October 1st. Get ready for an intergalactic adventure!',
      category: 'Anime News',
      comments_count: 10,
      views_count: 100,
      author: { name: 'MusicMaestro' },
      createdAt: 'September 20, 2023',
      imageUrl: 'https://psverso.com.br/wp-content/uploads/2023/05/Haruka-Beyond-the-Stars.jpg',
      views: 3000,
      comments: [
        { id: 113, author: 'GalacticExplorer', content: 'Counting down the days!'},
        { id: 114, author: 'SpaceOtaku', content: 'This looks out of this world!'},
        { id: 115, author: 'StarGazer', content: 'Hope it lives up to the hype!'}
      ]
    },
    {
      id: 6,
      title: 'AnimeCon 2024: Save the createdAt!',
      content: 'Mark your calendars for AnimeCon 2024! The biggest anime convention of the year is coming on February 15-18. Get ready for cosplays, panels, and amazing guests!',
      category: 'Anime Events',
      comments_count: 10,
      views_count: 100,
      author: { name: 'MusicMaestro' },
      createdAt: 'October 5, 2023',
      imageUrl: 'https://jotaku.net/wp-content/uploads/2021/01/https___blogs-images.forbes.com_laurenorsini_files_2015_07_anime_expo.jpg',
      views: 4000,
      comments: [
        { id: 116, author: 'CosplayFanatic', content: 'Can\'t wait to show off my new cosplay!'},
        { id: 117, author: 'AnimePanelist', content: 'Excited to present my panel at the con!'},
        { id: 118, author: 'GuestSpotlight', content: 'Looking forward to meeting the special guests!'}
      ]
    },
    {
      id: 7,
      title: 'Top 10 Must-Watch Anime of 2023',
      content: 'Check out our list of the top 10 anime series you shouldn\'t miss in 2023. From action to romance, we\'ve got you covered with the best shows of the year!',
      category: 'Anime Recommendations',
      comments_count: 10,
      views_count: 100,
      author: 'AnimeFanaticsReview',
      author: { name: 'MusicMaestro' },
      imageUrl: 'https://animecorner.me/wp-content/uploads/2023/05/top-best-upcoming-summer-2023-anime-releases.png',
      views: 2800,
      comments: [
        { id: 119, author: 'AnimeLover86', content: 'I\'ve seen most of these, and they\'re amazing!'},
        { id: 120, author: 'NewbieAnimeFan', content: 'Adding these to my watchlist right away!'},
        { id: 121, author: 'AnimeCriticX', content: 'Can\'t believe my favorite show made the list!'}
      ]
    },
    {
      id: 8,
      title: 'Behind the Scenes: "The Making of Anime Music"',
      content: 'Discover the secrets behind creating captivating anime music. We interviewed renowned composers and explored the creative process that brings anime soundtracks to life.',
      category: 'Special Features',
      comments_count: 10,
      views_count: 100,
      author: { name: 'MusicMaestro' },
      createdAt: 'December 20, 2023',
      imageUrl: 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/11/music-anime.jpg',
      views: 1800,
      comments: [
        { id: 122, author: 'MusicLover123', content: 'Anime music is so underrated!'},
        { id: 123, author: 'ComposerEnthusiast', content: 'Inspiring to see the composers at work!'},
        { id: 124, author: 'AnimeSoundtrackFan', content: 'I\'m a big fan of anime OSTs!'}
      ]
    },
];



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
      const navbar = html.getElement('.nav-categories');
      navbar.classList.toggle('hide');
    });
  }
};
handleMenu.createListeners();



/*::::::::::-> Mudar tema <-::::::::::*/
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
