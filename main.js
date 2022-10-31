// Burger

let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.header__link');
let headerLogin = document.querySelector('.header__login');
let headerInner = document.querySelector('.header__inner');

burger.addEventListener('click', function() {
  burger.classList.toggle('header__burger--active');
  menu.classList.toggle('header__nav--active');
  headerLogin.classList.toggle('header__login--active');
  headerInner.classList.toggle('header__inner--active');
});

menuLinks.forEach(function (el) {
  el.addEventListener('click', function() {
    burger.classList.remove('header__burger--active');
    menu.classList.remove('header__nav--active');
    headerInner.classList.remove('header__inner--active');
  })
});

// Header search form

let headerLook = document.querySelector('.header__look');
let headerSearchTablet = document.querySelector('.header__form--tablet');
let headerResetTablet = document.querySelector('.header__reset--tablet');

headerLook.addEventListener('click', function() {
  headerSearchTablet.classList.toggle('form-active');
});

headerResetTablet.addEventListener('click', function() {
  headerSearchTablet.classList.remove('form-active')
});


// Выпадающее меню

document.querySelectorAll(".dropdown__simplebar").forEach(dropdown => {
  new SimpleBar(dropdown, {
  /* чтобы изначально ползунок был виден */
  autoHide: false,
  /* с помощью этого значения вы можете управлять высотой ползунка*/
  scrollbarMaxSize: 25,
});
})


const btns = document.querySelectorAll(".menu-btn");
const dropdowns = document.querySelectorAll(".dropdown");
const activeClassdropdowns = "dropdown__active";
const activeClassbtns = "btn__active";

btns.forEach(item => {
  item.addEventListener("click", function() {
    let DropThis = this.parentElement.querySelector(".dropdown");
    dropdowns.forEach(el => {
      if (el != DropThis) {
        el.classList.remove(activeClassdropdowns)
      }
    });
    btns.forEach(el => {
      if (el != this) {
        el.classList.remove(activeClassbtns)
      }
    });
    DropThis.classList.toggle(activeClassdropdowns);
    this.classList.toggle(activeClassbtns);
  })
})
// Hero swiper

var heroSwiper = new Swiper(".hero__swiper", {
  effect: "fade",
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

// Gallery choices

const element = document.querySelector('#selectCustom');
const choices = new Choices(element, {
  searchEnabled: false,
  position: 'bottom',
});

// Gallery swiper 

var gallerySwiper = new Swiper(".gallery__swiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  slidesPerGroup: 1,
  pagination: {
    el: ".gallery__pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".gallery__next",
    prevEl: ".gallery__prev",
  },
  breakpoints: {
    450: {
      slidesPerView: 2,
      spaceBetween: 40,
      slidesPerGroup: 2,
    },
    800: {
      slidesPerView: 2,
      spaceBetween: 34,
      slidesPerGroup: 3,
    },
    1300: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 3,
    }
  }
});

// Catalogue accordion 

new Accordion('.accordion-container', {
  duration: 500,
});

// Catalogue tabs

document.querySelectorAll('.tabs-nav__btn').forEach(function (tabsBtn) {
  tabsBtn.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;
    document.querySelectorAll('.tabs-nav__btn').forEach(function (btn) {
      btn.classList.remove('tabs-nav__btn--active')
    });
    e.currentTarget.classList.add('tabs-nav__btn--active');

    document.querySelectorAll('.tabs-item').forEach(function (tabsBtn) {
      tabsBtn.classList.remove('tabs-item--active')
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  });
});

// Modal 

const btnsModal = document.querySelectorAll('.gallery__trigger');
const modalOverlay = document.querySelector('.gallery__overlay');
const modals = document.querySelectorAll('.gallery__modal');
const btnsReset = document.querySelectorAll('.gallery__btn--modal');

btnsModal.forEach((el) => {
	el.addEventListener('click', (e) => {
		let path = e.currentTarget.getAttribute('data-path');

		modals.forEach((el) => {
			el.classList.remove('modal--visible');
		});

		document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
		modalOverlay.classList.add('modal-overlay--visible');
	});
});

modalOverlay.addEventListener('click', (e) => {
	console.log(e.target);

	if (e.target == modalOverlay) {
		modalOverlay.classList.remove('modal-overlay--visible');
		modals.forEach((el) => {
			el.classList.remove('modal--visible');
		});
	}
});

btnsReset.forEach(function (el) {
  el.addEventListener('click', function() {
    modalOverlay.classList.remove('modal-overlay--visible');
    modals.forEach((el) => {
			el.classList.remove('modal--visible');
		});
  })
});

// Checkbox 

var inputs = document.querySelectorAll(".gallery__check")
for (var i = 0; i < inputs.length; i++){
 inputs[i].addEventListener('change', changeCheck)
}  
function changeCheck(){
  var checkedInput = this;
for (var i = 0; i < inputs.length; i++){
  inputs[i].checked = false;
}
    checkedInput.checked = true
}


// Events swiper

var eventsSwiper = new Swiper(".events__swiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: '.events__pagination',
    clickable: true,
  },
  navigation: {
    prevEl: ".events__prev",
    nextEl: ".events__next"
  },
  
  breakpoints: {
    // when window width is >= 320px
    576: {
      slidesPerView: 2,
      spaceBetween: 10,
      slidesPerGroup: 2,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 34,
      slidesPerGroup: 2,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 27,
      slidesPerGroup: 3,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1600: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  }
});

// Tippy

tippy('[data-tippy-content]', {
  trigger: 'click',
  arrow: true,
});

tippy();

// Projects swiper

var swiperProjects = new Swiper(".projects__swiper", {
  slidesPerView: 1,
  spaceBetween: 60,
  navigation: {
    nextEl: '.projects__next',
    prevEl: '.projects__prev'
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 34,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 34,
    },

    1024: {
      slidesPerView: 2,
      spaceBetween: 50,
    },

    1366: {
      slidesPerView: 3,
      spaceBetween: 50,
    }
  }
});

// Form validate 

const form = document.querySelector('.location__form');
const telSelector = document.querySelector("input[type='tel']"); // inputmask
const inputMask = new Inputmask("+7 (999) 999-99-99");
inputMask.mask(telSelector); 

const validation = new JustValidate('#form');


validation
  .addField('#name', [
    { 
      rule: 'required',
      errorMessage: 'Вы не ввели имя'
    },
    {
      rule: 'minLength',
      value: 2,
      errorMessage: 'Вы не ввели имя'
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Вы не ввели имя'
    },
  ])
  

  .addField('#tel', [
    { 
      rule: 'function',
      validator: () => {
        const phone = telSelector.inputmask.unmaskedvalue()
        console.log(phone);
        return phone.length === 10;
      },
      errorMessage: 'Вы не ввели телефон',
    },
  ]).onSuccess((event) => {
    console.log('Validation passes and form submitted', event);

    let formData = new FormData(event.target);

    console.log(...formData);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log('Отправлено');
        }
      }
    }

    xhr.open('POST', 'mail.php', true);
    xhr.send(formData);

    event.target.reset();
  });

 
// Yandex Map

// Функция ymaps.ready() будет вызвана, когда
        // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
        ymaps.ready(init);
        function init() {
            // Создание карты.
            var myMap = new ymaps.Map("map", {
                // Координаты центра карты.
                // Порядок по умолчанию: «широта, долгота».
                // Чтобы не определять координаты центра карты вручную,
                // воспользуйтесь инструментом Определение координат.
                center: [55.758468, 37.601088],
                // Уровень масштабирования. Допустимые значения:
                // от 0 (весь мир) до 19.
                zoom: 14
            });

            // Создание геообъекта с типом точка (метка).
            var myGeoObject = new ymaps.GeoObject({
                geometry: {
                    type: "Point", // тип геометрии - точка
                    coordinates: [105.8, 37.8] // координаты точки
                }
            });

            // Размещение геообъекта на карте.
            myMap.geoObjects.add(myGeoObject);

            // Создание собственного геобъекта с картинкой

            var myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
                iconLayout: 'default#image',
                    iconImageHref: '../img/location.svg',
                        iconImageSize: [20, 20],
                            iconImageOffset: [-3, -42]
});


            myMap.geoObjects.add(myPlacemark);

        }


// Soft scroll


const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
      animationTime = 200,
      framesCount = 150;

anchors.forEach(function(item) {

  item.addEventListener('click', function(e) {

    e.preventDefault();
    

    let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;
    
 
    let scroller = setInterval(function() {

      let scrollBy = coordY / framesCount;
      

      if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {

        window.scrollBy(0, scrollBy);
      } else {

        window.scrollTo(0, coordY);
        clearInterval(scroller);
      }

    }, animationTime / framesCount);
  });
});

  


  


  

