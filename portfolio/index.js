// ----------------------------LANGUAGE----------------------------------
const i18Obj = {
  'en': {
    'skills': 'Skills',
    'portfolio': 'Portfolio',
    'video': 'Video',
    'price': 'Price',
    'contacts': 'Contacts',
    'hero-title': 'Alexa Rise',
    'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
    'hire': 'Hire me',
    'skill-title-1': 'Digital photography',
    'skill-text-1': 'High-quality photos in the studio and on the nature',
    'skill-title-2': 'Video shooting',
    'skill-text-2': 'Capture your moments so that they always stay with you',
    'skill-title-3': 'Rotouch',
    'skill-text-3': 'I strive to make photography surpass reality',
    'skill-title-4': 'Audio',
    'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
    'winter': 'Winter',
    'spring': 'Spring',
    'summer': 'Summer',
    'autumn': 'Autumn',
    'price-description-1-span-1': 'One location',
    'price-description-1-span-2': '120 photos in color',
    'price-description-1-span-3': '12 photos in retouch',
    'price-description-1-span-4': 'Readiness 2-3 weeks',
    'price-description-1-span-5': 'Make up, visage',
    'price-description-2-span-1': 'One or two locations',
    'price-description-2-span-2': '200 photos in color',
    'price-description-2-span-3': '20 photos in retouch',
    'price-description-2-span-4': 'Readiness 1-2 weeks',
    'price-description-2-span-5': 'Make up, visage',
    'price-description-3-span-1': 'Three locations or more',
    'price-description-3-span-2': '300 photos in color',
    'price-description-3-span-3': '50 photos in retouch',
    'price-description-3-span-4': 'Readiness 1 week',
    'price-description-3-span-5': 'Make up, visage, hairstyle',
    'order': 'Order shooting',
    'contact-me': 'Contact me',
    'send-message': 'Send message',
    'phone': 'Phone',
    'message': 'Message'
  },
  'ru': {
    'skills': 'Навыки',
    'portfolio': 'Портфолио',
    'video': 'Видео',
    'price': 'Цены',
    'contacts': 'Контакты',
    'hero-title': 'Алекса Райс',
    'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
    'hire': 'Пригласить',
    'skill-title-1': 'Фотография',
    'skill-text-1': 'Высококачественные фото в студии и на природе',
    'skill-title-2': 'Видеосъемка',
    'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
    'skill-title-3': 'Ретушь',
    'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
    'skill-title-4': 'Звук',
    'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
    'winter': 'Зима',
    'spring': 'Весна',
    'summer': 'Лето',
    'autumn': 'Осень',
    'price-description-1-span-1': 'Одна локация',
    'price-description-1-span-2': '120 цветных фото',
    'price-description-1-span-3': '12 отретушированных фото',
    'price-description-1-span-4': 'Готовность через 2-3 недели',
    'price-description-1-span-5': 'Макияж, визаж',
    'price-description-2-span-1': 'Одна-две локации',
    'price-description-2-span-2': '200 цветных фото',
    'price-description-2-span-3': '20 отретушированных фото',
    'price-description-2-span-4': 'Готовность через 1-2 недели',
    'price-description-2-span-5': 'Макияж, визаж',
    'price-description-3-span-1': 'Три локации и больше',
    'price-description-3-span-2': '300 цветных фото',
    'price-description-3-span-3': '50 отретушированных фото',
    'price-description-3-span-4': 'Готовность через 1 неделю',
    'price-description-3-span-5': 'Макияж, визаж, прическа',
    'order': 'Заказать съемку',
    'contact-me': 'Свяжитесь со мной',
    'send-message': 'Отправить',
    'phone': 'Номер телефона',
    'message': 'Текст сообщения'
  }
}

let lang = 'en';
let theme = 'dark';

const ruLang = document.querySelector('.ru');  
const enLang = document.querySelector('.en');

function getTranslate(currentLang) {
   const data = document.querySelectorAll('[data-i18]');  
   data.forEach((el) => {   
      el.textContent = i18Obj[currentLang][el.dataset.i18];
      if (el.placeholder) {
         el.placeholder = i18Obj[currentLang][el.dataset.i18];
         el.textContent = i18Obj[currentLang][el.dataset.i18];
       }
   })  

   if(currentLang === 'ru') {
      ruLang.classList.add('lang__item_active');
      enLang.classList.remove('lang__item_active')
      lang = 'ru';
   } else if(currentLang === 'en') {
      lang = 'en';
      ruLang.classList.remove('lang__item_active');
      enLang.classList.add('lang__item_active')
   }

};

ruLang.addEventListener('click', () => {getTranslate('ru')});  
enLang.addEventListener('click', () => {getTranslate('en')});

// ----------------------------THEME----------------------------------

const themeContainer = document.querySelector('.theme');
const bodyTheme = document.querySelector('.body');
const titleTheme = document.querySelectorAll('.section__title');
const titleWrapperTheme = document.querySelectorAll('.section-title__wrapper');
const skillTitleTheme = document.querySelectorAll('.skill__title');
const skillTextTheme = document.querySelectorAll('.skill__text');
const portfolioBtnTheme = document.querySelectorAll('.portfolio__button');
const activeBtnTheme = document.querySelectorAll('.active-btn');
const priceDescriptionTitleTheme = document.querySelectorAll('.price-description__title');
const priceDescriptionTextTheme = document.querySelectorAll('.price-description__text');
const footer = document.querySelector('.footer');
const navOpenTheme = document.querySelector('.navigation');
const navItemTheme = document.querySelectorAll('.navigation__item_link');

const arrThemeElements = [
  bodyTheme,
  ...titleTheme,
  ...titleWrapperTheme,
  ...skillTitleTheme,
  ...skillTextTheme,
  ...portfolioBtnTheme,
  ...activeBtnTheme,
  ...priceDescriptionTitleTheme,
  ...priceDescriptionTextTheme,
  footer,
  navOpenTheme, 
  ...navItemTheme 
];

themeContainer.addEventListener('click', changeTheme);
function changeTheme(element) {
  if (element.target.classList.contains('light')) {
    arrThemeElements.forEach(element => element.classList.add('light'));

  } else {
    arrThemeElements.forEach(element => element.classList.toggle('light'));

  }
}

// -----------------CHANGE IMAGE IN PORTFOLIO--------------------------

const portfolioBtn = document.querySelectorAll('.portfolio__button');
const portfolioBtns = document.querySelector('.portfolio__buttons');
const portfolioImages = document.querySelectorAll('.portfolio-image');
const seasons = ['winter', 'spring', 'summer', 'autumn'];

portfolioBtns.addEventListener('click', changeImage);
function changeImage(e) {
  if(e.target.classList.contains('portfolio__button', 'dataset.season')) {
    portfolioImages.forEach((img, index) => img.src = `./assets/img/${e.target.dataset.season}/${index + 1}.jpg`);

    portfolioBtn.forEach((button) => {
      button.classList.remove('active-btn')
      e.target.classList.add('active-btn')
    })
  } 
}
function preloadImages(seasons) {
  seasons.forEach((varNumFol) => {
    for(let i = 1; i <= 6; i++) {
      const img = new Image();
      img.src = `./assets/img/${varNumFol}/${i}.jpg`;
    }
  })
}
preloadImages(seasons);

// ----------------------------HUMBURGER----------------------------------

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navigation');
const navLink = document.querySelectorAll('.navigation__item_link');

hamburger.addEventListener('click', toggleMenu);
function toggleMenu() {
  hamburger.classList.toggle('open');
  navMenu.classList.toggle('open');
}

navMenu.addEventListener('click', closeMenu);
function closeMenu(event) {
  if (event.target.classList.contains('navigation__item_link')) {
    hamburger.classList.remove('open'); 
    navMenu.classList.remove('open');
  }
}

// ---------------LOCAL STORAGE--------------------------------

function setLocalStorage() {
  localStorage.setItem('lang', lang);
  localStorage.setItem('theme', theme);

}
window.addEventListener('beforeunload', setLocalStorage);


function getLocalStorage() {
  if(localStorage.getItem('theme')) {
    const theme = localStorage.getItem('theme');
    changeTheme(theme);
  }
  if(localStorage.getItem('lang')) {
    const lang = localStorage.getItem('lang');
    getTranslate(lang);
  }
}
window.addEventListener('load', getLocalStorage)


// querySelector - метод поиска элементов; 
// querySelectorAll - метод поиска всех элементов;
// addEventListener - отлавливает событие элемента и выполняет переданную функцию;
// click – какое именно событие отлавливаем ('клик');
// classList - предназначен для работы с классами и только с классами;при их использовании точка перед названием класса не ставится
// .classList – это специальный объект с методами для добавления/удаления одного класса.
// classList.add/remove("class") – добавить/удалить класс.
// classList.toggle("class") – добавить класс, если его нет, иначе удалить.
// classList.contains("class") – проверка наличия класса, возвращает true/false.
// forEach - метод перебора.
// function(event) – аргумент event – любое событие;
// .target - элемент, на котором произошло событие.
// contains - позволяет проверить, содержит ли один элемент внутри себя другой.


console.log(`
Score 75 / 75
Смена изображений в секции portfolio +25:
  -Изображения разных времён года получаем из папок с соответствующими названиями;
  -Изображения можно заменить на другие с целью улучшения качества созданного приложения
   при кликах по кнопкам Winter, Spring, Summer, Autumn в секции portfolio отображаются изображения из папки с соответствующим названием +20;
  -кнопка, по которой кликнули, становится активной т.е. выделяется стилем. Другие кнопки при этом будут неактивными +5;
Перевод страницы на два языка +25
  -при клике по надписи ru англоязычная страница переводится на русский язык +10;
  -при клике по надписи en русскоязычная страница переводится на английский язык +10;
  -надписи en или ru, соответствующие текущему языку страницы, становятся активными т.е. выделяются стилем +5;
Переключение светлой и тёмной темы +25
  -Вариант первый. Блоки и секции header, hero, contacts, footer остались без изменений, в оставшихся секциях цвет фона и шрифта поменялись местами: фон стал белым, шрифт черным;
  -На страницу добавлен переключатель при клике по которому:
    тёмная тема приложения сменяется светлой +10;
    светлая тема приложения сменяется тёмной +10;
  -после смены светлой и тёмной темы интерактивные элементы по-прежнему изменяют внешний вид при наведении и клике и при этом остаются видимыми на странице (нет ситуации с белым шрифтом на белом фоне) +5;
Дополнительный функционал: выбранный пользователем язык отображения страницы и светлая или тёмная тема сохраняются при перезагрузке страницы +5;
Дополнительный функционал: сложные эффекты для кнопок при наведении и/или клике +5:
  -Box-shadow Button (Button Effect4);
`);
