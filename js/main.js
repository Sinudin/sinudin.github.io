/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/_components.js":
/*!*******************************!*\
  !*** ./src/js/_components.js ***!
  \*******************************/
/***/ (() => {

console.log('components');

/***/ }),

/***/ "./src/js/_functions.js":
/*!******************************!*\
  !*** ./src/js/_functions.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_mobile_check__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/mobile-check */ "./src/js/functions/mobile-check.js");
// Данный файл - лишь собрание подключений готовых компонентов.
// Рекомендуется создавать отдельный файл в папке components и подключать все там

// Определение операционной системы на мобильных

console.log((0,_functions_mobile_check__WEBPACK_IMPORTED_MODULE_0__.mobileCheck)());

// Определение ширины экрана
// import { isMobile, isTablet, isDesktop } from './functions/check-viewport';
// if (isDesktop()) {
//   console.log('...')
// }

// Троттлинг функции (для ресайза, ввода в инпут, скролла и т.д.)
// import { throttle } from './functions/throttle';
// let yourFunc = () => { console.log('throttle') };
// let func = throttle(yourFunc);
// window.addEventListener('resize', func);

// Фикс фулскрин-блоков
// import './functions/fix-fullheight';

// Реализация бургер-меню
// import { burger } from './functions/burger';

// Реализация остановки скролла (не забудьте вызвать функцию)
// import { disableScroll } from './functions/disable-scroll';

// Реализация включения скролла (не забудьте вызвать функцию)
// import { enableScroll } from './functions/enable-scroll';

// Реализация модального окна
// import GraphModal from 'graph-modal';
// const modal = new GraphModal();

// Реализация табов
// import GraphTabs from 'graph-tabs';
// const tabs = new GraphTabs('tab');

// Получение высоты шапки сайта (не забудьте вызвать функцию)
// import { getHeaderHeight } from './functions/header-height';

// Подключение плагина кастом-скролла
// import 'simplebar';

// Подключение плагина для позиционирования тултипов
// import { createPopper, right} from '@popperjs/core';
// createPopper(el, tooltip, {
//   placement: 'right'
// });

// Подключение свайпера
// import Swiper, { Navigation, Pagination } from 'swiper';
// Swiper.use([Navigation, Pagination]);
// const swiper = new Swiper(el, {
//   slidesPerView: 'auto',
// });

// Подключение анимаций по скроллу
// import AOS from 'aos';
// AOS.init();

// Подключение параллакса блоков при скролле
// import Rellax from 'rellax';
// const rellax = new Rellax('.rellax');

// Подключение плавной прокрутки к якорям
// import SmoothScroll from 'smooth-scroll';
// const scroll = new SmoothScroll('a[href*="#"]');

// Подключение событий свайпа на мобильных
// import 'swiped-events';
// document.addEventListener('swiped', function(e) {
//   console.log(e.target);
//   console.log(e.detail);
//   console.log(e.detail.dir);
// });

// import { validateForms } from './functions/validate-forms';
// const rules1 = [...];

// const afterForm = () => {
//   console.log('Произошла отправка, тут можно писать любые действия');
// };

// validateForms('.form-1', rules1, afterForm);

/***/ }),

/***/ "./src/js/_vars.js":
/*!*************************!*\
  !*** ./src/js/_vars.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  windowEl: window,
  documentEl: document,
  htmlEl: document.documentElement,
  bodyEl: document.body
});

/***/ }),

/***/ "./src/js/_vendor.js":
/*!***************************!*\
  !*** ./src/js/_vendor.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor_focus_visible_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor/focus-visible.js */ "./src/js/vendor/focus-visible.js");
/* harmony import */ var _vendor_focus_visible_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendor_focus_visible_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vendor_itc_slider_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vendor/itc-slider.js */ "./src/js/vendor/itc-slider.js");
/* harmony import */ var _vendor_itc_slider_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vendor_itc_slider_js__WEBPACK_IMPORTED_MODULE_1__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module './vendor/app.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());




/***/ }),

/***/ "./src/js/functions/mobile-check.js":
/*!******************************************!*\
  !*** ./src/js/functions/mobile-check.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mobileCheck: () => (/* binding */ mobileCheck)
/* harmony export */ });
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_vars */ "./src/js/_vars.js");

const mobileCheck = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  if (/android/i.test(userAgent)) {
    _vars__WEBPACK_IMPORTED_MODULE_0__["default"].htmlEl.classList.add('page--android');
    return "Android";
  }
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    _vars__WEBPACK_IMPORTED_MODULE_0__["default"].htmlEl.classList.add('page--ios');
    return "iOS";
  }
  return "unknown";
};

/***/ }),

/***/ "./src/js/vendor/focus-visible.js":
/*!****************************************!*\
  !*** ./src/js/vendor/focus-visible.js ***!
  \****************************************/
/***/ (() => {

/**
 * Applies the :focus-visible polyfill at the given scope.
 * A scope in this case is either the top-level Document or a Shadow Root.
 *
 * @param {(Document|ShadowRoot)} scope
 * @see https://github.com/WICG/focus-visible
 */
function applyFocusVisiblePolyfill(scope) {
  var hadKeyboardEvent = true;
  var hadFocusVisibleRecently = false;
  var hadFocusVisibleRecentlyTimeout = null;
  var inputTypesAllowlist = {
    text: true,
    search: true,
    url: true,
    tel: true,
    email: true,
    password: true,
    number: true,
    date: true,
    month: true,
    week: true,
    time: true,
    datetime: true,
    'datetime-local': true
  };

  /**
   * Helper function for legacy browsers and iframes which sometimes focus
   * elements like document, body, and non-interactive SVG.
   * @param {Element} el
   */
  function isValidFocusTarget(el) {
    if (el && el !== document && el.nodeName !== 'HTML' && el.nodeName !== 'BODY' && 'classList' in el && 'contains' in el.classList) {
      return true;
    }
    return false;
  }

  /**
   * Computes whether the given element should automatically trigger the
   * `focus-visible` class being added, i.e. whether it should always match
   * `:focus-visible` when focused.
   * @param {Element} el
   * @return {boolean}
   */
  function focusTriggersKeyboardModality(el) {
    var type = el.type;
    var tagName = el.tagName;
    if (tagName === 'INPUT' && inputTypesAllowlist[type] && !el.readOnly) {
      return true;
    }
    if (tagName === 'TEXTAREA' && !el.readOnly) {
      return true;
    }
    if (el.isContentEditable) {
      return true;
    }
    return false;
  }

  /**
   * Add the `focus-visible` class to the given element if it was not added by
   * the author.
   * @param {Element} el
   */
  function addFocusVisibleClass(el) {
    if (el.classList.contains('focus-visible')) {
      return;
    }
    el.classList.add('focus-visible');
    el.setAttribute('data-focus-visible-added', '');
  }

  /**
   * Remove the `focus-visible` class from the given element if it was not
   * originally added by the author.
   * @param {Element} el
   */
  function removeFocusVisibleClass(el) {
    if (!el.hasAttribute('data-focus-visible-added')) {
      return;
    }
    el.classList.remove('focus-visible');
    el.removeAttribute('data-focus-visible-added');
  }

  /**
   * If the most recent user interaction was via the keyboard;
   * and the key press did not include a meta, alt/option, or control key;
   * then the modality is keyboard. Otherwise, the modality is not keyboard.
   * Apply `focus-visible` to any current active element and keep track
   * of our keyboard modality state with `hadKeyboardEvent`.
   * @param {KeyboardEvent} e
   */
  function onKeyDown(e) {
    if (e.metaKey || e.altKey || e.ctrlKey) {
      return;
    }
    if (isValidFocusTarget(scope.activeElement)) {
      addFocusVisibleClass(scope.activeElement);
    }
    hadKeyboardEvent = true;
  }

  /**
   * If at any point a user clicks with a pointing device, ensure that we change
   * the modality away from keyboard.
   * This avoids the situation where a user presses a key on an already focused
   * element, and then clicks on a different element, focusing it with a
   * pointing device, while we still think we're in keyboard modality.
   * @param {Event} e
   */
  function onPointerDown(e) {
    hadKeyboardEvent = false;
  }

  /**
   * On `focus`, add the `focus-visible` class to the target if:
   * - the target received focus as a result of keyboard navigation, or
   * - the event target is an element that will likely require interaction
   *   via the keyboard (e.g. a text box)
   * @param {Event} e
   */
  function onFocus(e) {
    // Prevent IE from focusing the document or HTML element.
    if (!isValidFocusTarget(e.target)) {
      return;
    }
    if (hadKeyboardEvent || focusTriggersKeyboardModality(e.target)) {
      addFocusVisibleClass(e.target);
    }
  }

  /**
   * On `blur`, remove the `focus-visible` class from the target.
   * @param {Event} e
   */
  function onBlur(e) {
    if (!isValidFocusTarget(e.target)) {
      return;
    }
    if (e.target.classList.contains('focus-visible') || e.target.hasAttribute('data-focus-visible-added')) {
      // To detect a tab/window switch, we look for a blur event followed
      // rapidly by a visibility change.
      // If we don't see a visibility change within 100ms, it's probably a
      // regular focus change.
      hadFocusVisibleRecently = true;
      window.clearTimeout(hadFocusVisibleRecentlyTimeout);
      hadFocusVisibleRecentlyTimeout = window.setTimeout(function () {
        hadFocusVisibleRecently = false;
      }, 100);
      removeFocusVisibleClass(e.target);
    }
  }

  /**
   * If the user changes tabs, keep track of whether or not the previously
   * focused element had .focus-visible.
   * @param {Event} e
   */
  function onVisibilityChange(e) {
    if (document.visibilityState === 'hidden') {
      // If the tab becomes active again, the browser will handle calling focus
      // on the element (Safari actually calls it twice).
      // If this tab change caused a blur on an element with focus-visible,
      // re-apply the class when the user switches back to the tab.
      if (hadFocusVisibleRecently) {
        hadKeyboardEvent = true;
      }
      addInitialPointerMoveListeners();
    }
  }

  /**
   * Add a group of listeners to detect usage of any pointing devices.
   * These listeners will be added when the polyfill first loads, and anytime
   * the window is blurred, so that they are active when the window regains
   * focus.
   */
  function addInitialPointerMoveListeners() {
    document.addEventListener('mousemove', onInitialPointerMove);
    document.addEventListener('mousedown', onInitialPointerMove);
    document.addEventListener('mouseup', onInitialPointerMove);
    document.addEventListener('pointermove', onInitialPointerMove);
    document.addEventListener('pointerdown', onInitialPointerMove);
    document.addEventListener('pointerup', onInitialPointerMove);
    document.addEventListener('touchmove', onInitialPointerMove);
    document.addEventListener('touchstart', onInitialPointerMove);
    document.addEventListener('touchend', onInitialPointerMove);
  }
  function removeInitialPointerMoveListeners() {
    document.removeEventListener('mousemove', onInitialPointerMove);
    document.removeEventListener('mousedown', onInitialPointerMove);
    document.removeEventListener('mouseup', onInitialPointerMove);
    document.removeEventListener('pointermove', onInitialPointerMove);
    document.removeEventListener('pointerdown', onInitialPointerMove);
    document.removeEventListener('pointerup', onInitialPointerMove);
    document.removeEventListener('touchmove', onInitialPointerMove);
    document.removeEventListener('touchstart', onInitialPointerMove);
    document.removeEventListener('touchend', onInitialPointerMove);
  }

  /**
   * When the polfyill first loads, assume the user is in keyboard modality.
   * If any event is received from a pointing device (e.g. mouse, pointer,
   * touch), turn off keyboard modality.
   * This accounts for situations where focus enters the page from the URL bar.
   * @param {Event} e
   */
  function onInitialPointerMove(e) {
    // Work around a Safari quirk that fires a mousemove on <html> whenever the
    // window blurs, even if you're tabbing out of the page. ¯\_(ツ)_/¯
    if (e.target.nodeName && e.target.nodeName.toLowerCase() === 'html') {
      return;
    }
    hadKeyboardEvent = false;
    removeInitialPointerMoveListeners();
  }

  // For some kinds of state, we are interested in changes at the global scope
  // only. For example, global pointer input, global key presses and global
  // visibility change should affect the state at every scope:
  document.addEventListener('keydown', onKeyDown, true);
  document.addEventListener('mousedown', onPointerDown, true);
  document.addEventListener('pointerdown', onPointerDown, true);
  document.addEventListener('touchstart', onPointerDown, true);
  document.addEventListener('visibilitychange', onVisibilityChange, true);
  addInitialPointerMoveListeners();

  // For focus and blur, we specifically care about state changes in the local
  // scope. This is because focus / blur events that originate from within a
  // shadow root are not re-dispatched from the host element if it was already
  // the active element in its own scope:
  scope.addEventListener('focus', onFocus, true);
  scope.addEventListener('blur', onBlur, true);

  // We detect that a node is a ShadowRoot by ensuring that it is a
  // DocumentFragment and also has a host property. This check covers native
  // implementation and polyfill implementation transparently. If we only cared
  // about the native implementation, we could just check if the scope was
  // an instance of a ShadowRoot.
  if (scope.nodeType === Node.DOCUMENT_FRAGMENT_NODE && scope.host) {
    // Since a ShadowRoot is a special kind of DocumentFragment, it does not
    // have a root element to add a class to. So, we add this attribute to the
    // host element instead:
    scope.host.setAttribute('data-js-focus-visible', '');
  } else if (scope.nodeType === Node.DOCUMENT_NODE) {
    document.documentElement.classList.add('js-focus-visible');
    document.documentElement.setAttribute('data-js-focus-visible', '');
  }
}

// It is important to wrap all references to global window and document in
// these checks to support server-side rendering use cases
// @see https://github.com/WICG/focus-visible/issues/199
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  // Make the polyfill helper globally available. This can be used as a signal
  // to interested libraries that wish to coordinate with the polyfill for e.g.,
  // applying the polyfill to a shadow root:
  window.applyFocusVisiblePolyfill = applyFocusVisiblePolyfill;

  // Notify interested libraries of the polyfill's presence, in case the
  // polyfill was loaded lazily:
  var event;
  try {
    event = new CustomEvent('focus-visible-polyfill-ready');
  } catch (error) {
    // IE11 does not support using CustomEvent as a constructor directly:
    event = document.createEvent('CustomEvent');
    event.initCustomEvent('focus-visible-polyfill-ready', false, false, {});
  }
  window.dispatchEvent(event);
}
if (typeof document !== 'undefined') {
  // Apply the polyfill to the global document, so that no JavaScript
  // coordination is required to use the polyfill in the top-level document:
  applyFocusVisiblePolyfill(document);
}

/***/ }),

/***/ "./src/js/vendor/itc-slider.js":
/*!*************************************!*\
  !*** ./src/js/vendor/itc-slider.js ***!
  \*************************************/
/***/ (() => {

/**
 * @class ItcSlider
 * @version 1.0.1
 * @author https://github.com/itchief
 * @copyright Alexander Maltsev 2020 - 2023
 * @license MIT (https://github.com/itchief/ui-components/blob/master/LICENSE)
 * @tutorial https://itchief.ru/javascript/slider
 */

class ItcSlider {
  static #EL_WRAPPER = 'wrapper';
  static #EL_ITEMS = 'items';
  static #EL_ITEM = 'item';
  static #EL_ITEM_ACTIVE = 'item-active';
  static #EL_INDICATOR = 'indicator';
  static #EL_INDICATOR_ACTIVE = 'indicator-active';
  static #BTN_PREV = 'btn-prev';
  static #BTN_NEXT = 'btn-next';
  static #BTN_HIDE = 'btn-hide';
  static #TRANSITION_NONE = 'transition-none';
  static #SWIPE_THRESHOLD = 20;
  static #instances = [];
  static checkSupportPassiveEvents() {
    let passiveSupported = false;
    try {
      const options = Object.defineProperty({}, 'passive', {
        get() {
          passiveSupported = true;
        }
      });
      window.addEventListener('testPassiveListener', null, options);
      window.removeEventListener('testPassiveListener', null, options);
    } catch (error) {
      passiveSupported = false;
    }
    return passiveSupported;
  }
  #config;
  #state;

  /**
   * @param {HTMLElement} el
   * @param {Object} config
   * @param {String} prefix
   */
  constructor(el) {
    let config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    let prefix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'itc-slider-';
    this.#state = {
      prefix,
      // префикс для классов
      el,
      // элемент который нужно активировать как ItcSlider
      elWrapper: el.querySelector(`.${prefix}${this.constructor.#EL_WRAPPER}`),
      // элемент с #CLASS_WRAPPER
      elItems: el.querySelector(`.${prefix}${this.constructor.#EL_ITEMS}`),
      // элемент, в котором находятся слайды
      elListItem: el.querySelectorAll(`.${prefix}${this.constructor.#EL_ITEM}`),
      // список элементов, являющиеся слайдами
      btnPrev: el.querySelector(`.${prefix}${this.constructor.#BTN_PREV}`),
      // кнопка, для перехода к предыдущему слайду
      btnNext: el.querySelector(`.${prefix}${this.constructor.#BTN_NEXT}`),
      // кнопка, для перехода к следующему слайду
      btnClassHide: prefix + this.constructor.#BTN_HIDE,
      // класс для скрытия кнопки
      exOrderMin: 0,
      exOrderMax: 0,
      exItemMin: null,
      exItemMax: null,
      exTranslateMin: 0,
      exTranslateMax: 0,
      direction: 'next',
      // направление смены слайдов
      intervalId: null,
      // id таймера
      isSwiping: false,
      swipeX: 0,
      swipeY: 0
    };
    this.#config = {
      loop: true,
      direction: 'next',
      autoplay: false,
      interval: 5000,
      refresh: true,
      swipe: true,
      ...config
    };
    this.#init();
    this.#attachEvents();
  }

  /**
   * Статический метод, который возвращает экземпляр ItcSlider, связанный с DOM-элементом
   * @param {HTMLElement} elSlider
   * @returns {?ItcSlider}
   */
  static getInstance(elSlider) {
    const found = this.#instances.find(el => el.target === elSlider);
    if (found) {
      return found.instance;
    }
    return null;
  }

  /**
   * @param {String|HTMLElement} target
   * @param {Object} config
   * @param {String} prefix
   */
  static getOrCreateInstance(target) {
    let config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    let prefix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'itc-slider-';
    const elSlider = typeof target === 'string' ? document.querySelector(target) : target;
    const result = this.getInstance(elSlider);
    if (result) {
      return result;
    }
    const slider = new this(elSlider, config, prefix);
    this.#instances.push({
      target: elSlider,
      instance: slider
    });
    return slider;
  }

  // статический метод для активирования элементов как ItcSlider на основе data-атрибутов
  static createInstances() {
    document.querySelectorAll('[data-slider="itc-slider"]').forEach(el => {
      const {
        dataset
      } = el;
      const params = {};
      Object.keys(dataset).forEach(key => {
        if (key === 'slider') {
          return;
        }
        let value = dataset[key];
        value = Number.isNaN(Number(value)) ? value : Number(value);
        value = value === 'true' ? true : value;
        value = value === 'false' ? false : value;
        params[key] = value;
      });
      this.getOrCreateInstance(el, params);
    });
  }
  slideNext() {
    this.#state.direction = 'next';
    this.#move();
  }
  slidePrev() {
    this.#state.direction = 'prev';
    this.#move();
  }
  slideTo(index) {
    this.#moveTo(index);
  }
  reset() {
    this.#reset();
  }
  get autoplay() {
    return {
      // Start autoplay
      start: () => {
        this.#config.autoplay = true;
        this.#autoplay();
      },
      // Stop autoplay
      stop: () => {
        this.#autoplay('stop');
        this.#config.autoplay = false;
      }
    };
  }
  dispose() {
    this.#detachEvents();
    const transitionNoneClass = this.#state.prefix + this.constructor.#TRANSITION_NONE;
    const activeClass = this.#state.prefix + this.constructor.#EL_ITEM_ACTIVE;
    this.#autoplay('stop');
    this.#state.elItems.classList.add(transitionNoneClass);
    this.#state.elItems.style.transform = '';
    this.#state.elListItem.forEach(el => {
      el.style.transform = '';
      el.classList.remove(activeClass);
    });
    const selIndicators = `${this.#state.prefix}${this.constructor.#EL_INDICATOR_ACTIVE}`;
    document.querySelectorAll(`.${selIndicators}`).forEach(el => {
      el.classList.remove(selIndicators);
    });
    this.#state.elItems.offsetHeight;
    this.#state.elItems.classList.remove(transitionNoneClass);
    const index = this.constructor.#instances.findIndex(el => el.target === this.#state.el);
    this.constructor.#instances.splice(index, 1);
  }
  #onClick(e) {
    if (this.#state.isMoving) {
      e.preventDefault();
    }
    if (!(e.target.closest('.itc-slider-btn') || e.target.closest('.itc-slider-indicators'))) {
      return;
    }
    const classBtnPrev = this.#state.prefix + this.constructor.#BTN_PREV;
    const classBtnNext = this.#state.prefix + this.constructor.#BTN_NEXT;
    this.#autoplay('stop');
    if (e.target.closest(`.${classBtnPrev}`) || e.target.closest(`.${classBtnNext}`)) {
      this.#state.direction = e.target.closest(`.${classBtnPrev}`) ? 'prev' : 'next';
      this.#move();
    } else if (e.target.dataset.slideTo) {
      const index = parseInt(e.target.dataset.slideTo, 10);
      this.#moveTo(index);
    }
    this.#config.loop ? this.#autoplay() : null;
  }
  #onMouseEnter() {
    this.#autoplay('stop');
  }
  #onMouseLeave() {
    this.#autoplay();
  }
  #onTransitionStart() {
    if (this.#config.loop) {
      if (this.#state.isBalancing) {
        return;
      }
      this.#state.isBalancing = true;
      window.requestAnimationFrame(() => {
        this.#balanceItems(false);
      });
    }
  }
  #onTransitionEnd() {
    if (this.#config.loop) {
      this.#state.isBalancing = false;
    }
  }
  #onDragStart(e) {
    e.preventDefault();
  }
  #onVisibilityChange() {
    if (document.visibilityState === 'hidden') {
      this.#autoplay('stop');
    } else if (document.visibilityState === 'visible' && this.#config.loop) {
      this.#autoplay();
    }
  }
  #touchStart(e) {
    this.#state.isMoving = false;
    this.#autoplay('stop');
    const event = e.type.search('touch') === 0 ? e.touches[0] : e;
    this.#state.swipeX = event.clientX;
    this.#state.swipeY = event.clientY;
    this.#state.isSwiping = true;
    this.#state.isTouchMoving = false;
  }
  #touchEnd(e) {
    if (!this.#state.isSwiping) {
      return;
    }
    const event = e.type.search('touch') === 0 ? e.changedTouches[0] : e;
    const wrapperRect = this.#state.elWrapper.getBoundingClientRect();
    let clientX = event.clientX < wrapperRect.left ? wrapperRect.left : event.clientX;
    clientX = clientX > wrapperRect.right ? wrapperRect.right : clientX;
    let diffPosX = this.#state.swipeX - clientX;
    if (diffPosX === 0) {
      this.#state.isSwiping = false;
      return;
    }
    if (!this.#config.loop) {
      const isNotMoveFirst = this.#state.activeItems[0] === 1 && diffPosX <= 0;
      const isNotMoveLast = this.#state.activeItems[this.#state.activeItems.length - 1] && diffPosX >= 0;
      if (isNotMoveFirst || isNotMoveLast) {
        diffPosX = 0;
      }
    }
    const value = diffPosX / this.#state.width * 100;
    const transitionNoneClass = this.#state.prefix + this.constructor.#TRANSITION_NONE;
    this.#state.elItems.classList.remove(transitionNoneClass);
    if (value > this.constructor.#SWIPE_THRESHOLD) {
      this.#state.direction = 'next';
      let count = 0;
      while (count <= Math.floor(Math.abs(value) - this.constructor.#SWIPE_THRESHOLD) / 100) {
        this.#move();
        count += 1;
      }
    } else if (value < -this.constructor.#SWIPE_THRESHOLD) {
      this.#state.direction = 'prev';
      let count = 0;
      while (count <= Math.floor(Math.abs(value) - this.constructor.#SWIPE_THRESHOLD) / 100) {
        this.#move();
        count += 1;
      }
    } else {
      this.#state.direction = 'none';
      this.#move();
    }
    this.#state.isSwiping = false;
    if (this.#config.loop) {
      this.#autoplay();
    }
    this.#state.isBalancing = false;
  }
  #touchMove(e) {
    if (!this.#state.isSwiping) {
      return;
    }
    this.#state.isMoving = true;
    const event = e.type.search('touch') === 0 ? e.changedTouches[0] : e;
    let diffPosX = this.#state.swipeX - event.clientX;
    const diffPosY = this.#state.swipeY - event.clientY;
    const prevPosX = this.#state.prevPosX ? this.#state.prevPosX : event.clientX;
    const direction = prevPosX > event.clientX ? 'next' : 'prev';
    this.#state.prevPosX = event.clientX;
    if (!this.#state.isTouchMoving) {
      if (Math.abs(diffPosY) > Math.abs(diffPosX) || Math.abs(diffPosX) === 0) {
        this.#state.isSwiping = false;
        return;
      }
      this.#state.isTouchMoving = true;
    }
    e.preventDefault();
    if (!this.#config.loop) {
      const isNotMoveFirst = this.#state.activeItems[0] === 1 && diffPosX <= 0;
      const isNotMoveLast = this.#state.activeItems[this.#state.activeItems.length - 1] && diffPosX >= 0;
      if (isNotMoveFirst || isNotMoveLast) {
        diffPosX /= 4;
      }
    }
    const transitionNoneClass = this.#state.prefix + this.constructor.#TRANSITION_NONE;
    this.#state.elItems.classList.add(transitionNoneClass);
    const translate = this.#state.translate - diffPosX;
    this.#state.elItems.style.transform = `translate3D(${translate}px, 0px, 0.1px)`;
    if (this.#config.loop) {
      this.#state.direction = diffPosX > 0 ? 'next' : 'prev';
      this.#state.direction = direction;
      window.requestAnimationFrame(() => {
        this.#balanceItems(true);
      });
    }
  }
  #attachEvents() {
    this.#state.events = {
      click: [this.#state.el, this.#onClick.bind(this), true],
      mouseenter: [this.#state.el, this.#onMouseEnter.bind(this), true],
      mouseleave: [this.#state.el, this.#onMouseLeave.bind(this), true],
      transitionstart: [this.#state.elItems, this.#onTransitionStart.bind(this), this.#config.loop],
      transitionend: [this.#state.elItems, this.#onTransitionEnd.bind(this), this.#config.loop],
      touchstart: [this.#state.el, this.#touchStart.bind(this), this.#config.swipe],
      mousedown: [this.#state.el, this.#touchStart.bind(this), this.#config.swipe],
      touchend: [document, this.#touchEnd.bind(this), this.#config.swipe],
      mouseup: [document, this.#touchEnd.bind(this), this.#config.swipe],
      touchmove: [this.#state.el, this.#touchMove.bind(this), this.#config.swipe],
      mousemove: [this.#state.el, this.#touchMove.bind(this), this.#config.swipe],
      dragstart: [this.#state.el, this.#onDragStart.bind(this), true],
      visibilitychange: [document, this.#onVisibilityChange.bind(this), true]
    };
    Object.keys(this.#state.events).forEach(type => {
      if (this.#state.events[type][2]) {
        const el = this.#state.events[type][0];
        const fn = this.#state.events[type][1];
        if (type === 'touchstart' || type === 'touchmove') {
          const options = this.constructor.checkSupportPassiveEvents() ? {
            passive: false
          } : false;
          el.addEventListener(type, fn, options);
        } else {
          el.addEventListener(type, fn);
        }
      }
    });
    const resizeObserver = new ResizeObserver(entries => {
      window.requestAnimationFrame(this.#reset.bind(this));
    });
    resizeObserver.observe(this.#state.elWrapper);
  }
  #detachEvents() {
    Object.keys(this.#state.events).forEach(type => {
      if (this.#state.events[type][2]) {
        const el = this.#state.events[type][0];
        const fn = this.#state.events[type][1];
        el.removeEventListener(type, fn);
      }
    });
  }
  #autoplay(action) {
    if (!this.#config.autoplay) {
      return;
    }
    if (action === 'stop') {
      clearInterval(this.#state.intervalId);
      this.#state.intervalId = null;
      return;
    }
    if (this.#state.intervalId === null) {
      this.#state.intervalId = setInterval(() => {
        this.#state.direction = this.#config.direction === 'prev' ? 'prev' : 'next';
        this.#move();
      }, this.#config.interval);
    }
  }
  #balanceItems() {
    let once = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    if (!this.#state.isBalancing && !once) {
      return;
    }
    const wrapperRect = this.#state.elWrapper.getBoundingClientRect();
    const targetWidth = wrapperRect.width / this.#state.countActiveItems / 2;
    const countItems = this.#state.elListItem.length;
    if (this.#state.direction === 'next') {
      const exItemRectRight = this.#state.exItemMin.getBoundingClientRect().right;
      if (exItemRectRight < wrapperRect.left - targetWidth) {
        const elFound = this.#state.els.find(item => item.el === this.#state.exItemMin);
        elFound.order = this.#state.exOrderMin + countItems;
        const translate = this.#state.exTranslateMin + countItems * this.#state.width;
        elFound.translate = translate;
        this.#state.exItemMin.style.transform = `translate3D(${translate}px, 0px, 0.1px)`;
        this.#updateExProperties();
      }
    } else {
      const exItemRectLeft = this.#state.exItemMax.getBoundingClientRect().left;
      if (exItemRectLeft > wrapperRect.right + targetWidth) {
        const elFound = this.#state.els.find(item => item.el === this.#state.exItemMax);
        elFound.order = this.#state.exOrderMax - countItems;
        const translate = this.#state.exTranslateMax - countItems * this.#state.width;
        elFound.translate = translate;
        this.#state.exItemMax.style.transform = `translate3D(${translate}px, 0px, 0.1px)`;
        this.#updateExProperties();
      }
    }
    if (!once) {
      window.requestAnimationFrame(() => {
        this.#balanceItems(false);
      });
    }
  }
  #updateClasses() {
    const activeClass = this.#state.prefix + this.constructor.#EL_ITEM_ACTIVE;
    this.#state.activeItems.forEach((item, index) => {
      if (item) {
        this.#state.elListItem[index].classList.add(activeClass);
      } else {
        this.#state.elListItem[index].classList.remove(activeClass);
      }
      const elListIndicators = this.#state.el.querySelectorAll(`.${this.#state.prefix}${this.constructor.#EL_INDICATOR}`);
      if (elListIndicators.length && item) {
        elListIndicators[index].classList.add(`${this.#state.prefix}${this.constructor.#EL_INDICATOR_ACTIVE}`);
      } else if (elListIndicators.length && !item) {
        elListIndicators[index].classList.remove(`${this.#state.prefix}${this.constructor.#EL_INDICATOR_ACTIVE}`);
      }
    });
  }
  #move() {
    if (this.#state.direction === 'none') {
      const transform = this.#state.translate;
      this.#state.elItems.style.transform = `translate3D(${transform}px, 0px, 0.1px)`;
      return;
    }
    const widthItem = this.#state.direction === 'next' ? -this.#state.width : this.#state.width;
    const transform = this.#state.translate + widthItem;
    if (!this.#config.loop) {
      const limit = this.#state.width * (this.#state.elListItem.length - this.#state.countActiveItems);
      if (transform < -limit || transform > 0) {
        return;
      }
      if (this.#state.btnPrev) {
        this.#state.btnPrev.classList.remove(this.#state.btnClassHide);
        this.#state.btnNext.classList.remove(this.#state.btnClassHide);
      }
      if (this.#state.btnPrev && transform === -limit) {
        this.#state.btnNext.classList.add(this.#state.btnClassHide);
      } else if (this.#state.btnPrev && transform === 0) {
        this.#state.btnPrev.classList.add(this.#state.btnClassHide);
      }
    }
    if (this.#state.direction === 'next') {
      this.#state.activeItems = [...this.#state.activeItems.slice(-1), ...this.#state.activeItems.slice(0, -1)];
    } else {
      this.#state.activeItems = [...this.#state.activeItems.slice(1), ...this.#state.activeItems.slice(0, 1)];
    }
    this.#updateClasses();
    this.#state.translate = transform;
    this.#state.elItems.style.transform = `translate3D(${transform}px, 0px, 0.1px)`;
  }
  #moveTo(index) {
    const delta = this.#state.activeItems.reduce((acc, current, currentIndex) => {
      const diff = current ? index - currentIndex : acc;
      return Math.abs(diff) < Math.abs(acc) ? diff : acc;
    }, this.#state.activeItems.length);
    if (delta !== 0) {
      this.#state.direction = delta > 0 ? 'next' : 'prev';
      for (let i = 0; i < Math.abs(delta); i++) {
        this.#move();
      }
    }
  }

  // приватный метод для выполнения первичной инициализации
  #init() {
    // состояние элементов
    this.#state.els = [];
    // текущее значение translate
    this.#state.translate = 0;
    // позиции активных элементов
    this.#state.activeItems = [];
    // состояние элементов
    this.#state.isBalancing = false;
    // получаем gap между слайдами
    const gap = parseFloat(getComputedStyle(this.#state.elItems).gap) || 0;
    // ширина одного слайда
    this.#state.width = this.#state.elListItem[0].getBoundingClientRect().width + gap;
    // ширина #EL_WRAPPER
    const widthWrapper = this.#state.elWrapper.getBoundingClientRect().width;
    // количество активных элементов
    this.#state.countActiveItems = Math.round(widthWrapper / this.#state.width);
    this.#state.elListItem.forEach((el, index) => {
      el.style.transform = '';
      this.#state.activeItems.push(index < this.#state.countActiveItems ? 1 : 0);
      this.#state.els.push({
        el,
        index,
        order: index,
        translate: 0
      });
    });
    if (this.#config.loop) {
      const lastIndex = this.#state.elListItem.length - 1;
      const translate = -(lastIndex + 1) * this.#state.width;
      this.#state.elListItem[lastIndex].style.transform = `translate3D(${translate}px, 0px, 0.1px)`;
      this.#state.els[lastIndex].order = -1;
      this.#state.els[lastIndex].translate = translate;
      this.#updateExProperties();
    } else if (this.#state.btnPrev) {
      this.#state.btnPrev.classList.add(this.#state.btnClassHide);
    }
    this.#updateClasses();
    this.#autoplay();
  }
  #reset() {
    const transitionNoneClass = this.#state.prefix + this.constructor.#TRANSITION_NONE;
    // получаем gap между слайдами
    const gap = parseFloat(getComputedStyle(this.#state.elItems).gap) || 0;
    // ширина одного слайда
    const widthItem = this.#state.elListItem[0].getBoundingClientRect().width + gap;
    const widthWrapper = this.#state.elWrapper.getBoundingClientRect().width;
    const countActiveEls = Math.round(widthWrapper / widthItem);
    if (widthItem === this.#state.width && countActiveEls === this.#state.countActiveItems) {
      return;
    }
    this.#autoplay('stop');
    this.#state.elItems.classList.add(transitionNoneClass);
    this.#state.elItems.style.transform = 'translate3D(0px, 0px, 0.1px)';
    this.#init();
    window.requestAnimationFrame(() => {
      this.#state.elItems.classList.remove(transitionNoneClass);
    });
  }
  #updateExProperties() {
    const els = this.#state.els.map(item => item.el);
    const orders = this.#state.els.map(item => item.order);
    this.#state.exOrderMin = Math.min(...orders);
    this.#state.exOrderMax = Math.max(...orders);
    const min = orders.indexOf(this.#state.exOrderMin);
    const max = orders.indexOf(this.#state.exOrderMax);
    this.#state.exItemMin = els[min];
    this.#state.exItemMax = els[max];
    this.#state.exTranslateMin = this.#state.els[min].translate;
    this.#state.exTranslateMax = this.#state.els[max].translate;
  }
}
ItcSlider.createInstances();

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_vendor */ "./src/js/_vendor.js");
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_vars */ "./src/js/_vars.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_functions */ "./src/js/_functions.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_components */ "./src/js/_components.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components__WEBPACK_IMPORTED_MODULE_3__);




})();

/******/ })()
;
//# sourceMappingURL=main.js.map