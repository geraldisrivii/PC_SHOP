(self["webpackChunksrc"] = self["webpackChunksrc"] || []).push([["src_views_configurator_vue"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/components/GoodItem.vue?vue&type=style&index=0&id=1fde9cc0&lang=scss&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/components/GoodItem.vue?vue&type=style&index=0&id=1fde9cc0&lang=scss&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.good-item[data-v-1fde9cc0] {
  display: flex;
  align-items: center;
  gap: 30px;
  width: 100%;
  padding: 17px 34px;
  background-color: #181818;
  border-radius: 5px;
}
.good-item__image[data-v-1fde9cc0] {
  width: 90%;
  height: 90%;
  object-fit: contain;
}
.good-item__image-box[data-v-1fde9cc0] {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 130px;
  background-color: white;
  border-radius: 5px;
}
.good-item-content[data-v-1fde9cc0] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  width: 100%;
}
.good-item-content__description[data-v-1fde9cc0] {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.good-item-content__title[data-v-1fde9cc0] {
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 500;
}
.good-item-content__quantity-box[data-v-1fde9cc0] {
  display: flex;
  flex-direction: column;
  gap: 13px;
}
.good-item-content__sum[data-v-1fde9cc0] {
  font-weight: 500;
}`, "",{"version":3,"sources":["webpack://./src/components/GoodItem.vue","webpack://./GoodItem.vue"],"names":[],"mappings":"AACA;EACI,aAAA;EACA,mBAAA;EACA,SAAA;EACA,WAAA;EACA,kBAAA;EACA,yBAAA;EACA,kBAAA;ACAJ;ADEI;EACI,UAAA;EACA,WAAA;EACA,mBAAA;ACAR;ADGI;EACI,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,kBAAA;ACDR;ADKA;EACI,aAAA;EACA,mBAAA;EACA,8BAAA;EAEA,SAAA;EAEA,WAAA;ACJJ;ADMI;EACI,aAAA;EACA,sBAAA;EACA,SAAA;ACJR;ADOI;EACI,eAAA;EACA,yBAAA;EACA,gBAAA;ACLR;ADWI;EACI,aAAA;EACA,sBAAA;EACA,SAAA;ACTR;ADYI;EACI,gBAAA;ACVR","sourcesContent":["\n.good-item {\n    display: flex;\n    align-items: center;\n    gap: 30px;\n    width: 100%;\n    padding: 17px 34px;\n    background-color: #181818;\n    border-radius: 5px;\n\n    &__image {\n        width: 90%;\n        height: 90%;\n        object-fit: contain;\n    }\n\n    &__image-box {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        width: 200px;\n        height: 130px;\n        background-color: white;\n        border-radius: 5px;\n    }\n}\n\n.good-item-content {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n\n    gap: 30px;\n\n    width: 100%;\n\n    &__description {\n        display: flex;\n        flex-direction: column;\n        gap: 10px;\n    }\n\n    &__title {\n        font-size: 18px;\n        text-transform: uppercase;\n        font-weight: 500;\n    }\n\n    &__price {}\n\n\n    &__quantity-box {\n        display: flex;\n        flex-direction: column;\n        gap: 13px;\n    }\n\n    &__sum {\n        font-weight: 500;\n    }\n}\n",".good-item {\n  display: flex;\n  align-items: center;\n  gap: 30px;\n  width: 100%;\n  padding: 17px 34px;\n  background-color: #181818;\n  border-radius: 5px;\n}\n.good-item__image {\n  width: 90%;\n  height: 90%;\n  object-fit: contain;\n}\n.good-item__image-box {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 200px;\n  height: 130px;\n  background-color: white;\n  border-radius: 5px;\n}\n\n.good-item-content {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 30px;\n  width: 100%;\n}\n.good-item-content__description {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.good-item-content__title {\n  font-size: 18px;\n  text-transform: uppercase;\n  font-weight: 500;\n}\n.good-item-content__quantity-box {\n  display: flex;\n  flex-direction: column;\n  gap: 13px;\n}\n.good-item-content__sum {\n  font-weight: 500;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/sections/configurator/first-section.vue?vue&type=style&index=0&id=26caafb4&lang=scss&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/sections/configurator/first-section.vue?vue&type=style&index=0&id=26caafb4&lang=scss&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.first-section[data-v-26caafb4] {
  padding: 120px 0px;
  background-color: rgb(19, 19, 19);
}
.first-section__title[data-v-26caafb4] {
  text-align: center;
  margin-bottom: 80px;
}
.first-section-slider[data-v-26caafb4] {
  margin-bottom: 60px;
}
.swiper-container[data-v-26caafb4] {
  overflow-x: hidden;
}
.first-section-wrapper[data-v-26caafb4] {
  padding-top: 100px;
}
.swiper-slide[data-v-26caafb4] {
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 15px;
  width: 250px;
  align-items: center;
  background-color: rgb(24, 24, 24);
  border-radius: 5px;
  padding: 15px;
}
.swiper-slide img[data-v-26caafb4] {
  height: 80px;
  width: 80px;
  object-fit: contain;
}
.swiper-slide p[data-v-26caafb4] {
  height: 40px;
  text-align: center;
}
.first-section-products-container[data-v-26caafb4] {
  display: grid;
  grid-template-columns: 5fr 2fr;
  gap: 40px;
}
.first-section-goods[data-v-26caafb4] {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.first-section-filters[data-v-26caafb4] {
  padding: 15px 20px;
  background-color: rgb(24, 24, 24);
  display: flex;
  border-radius: 5px;
  flex-direction: column;
  gap: 6px;
}`, "",{"version":3,"sources":["webpack://./src/sections/configurator/first-section.vue","webpack://./first-section.vue"],"names":[],"mappings":"AAGA;EACI,kBAAA;EACA,iCAAA;ACFJ;ADII;EACI,kBAAA;EACA,mBAAA;ACFR;ADMA;EACI,mBAAA;ACHJ;ADMA;EAEI,kBAAA;ACJJ;ADQA;EACI,kBAAA;ACLJ;ADaA;EACI,aAAA;EACA,sBAAA;EACA,YAAA;EACA,SAAA;EACA,YAAA;EACA,mBAAA;EACA,iCAAA;EACA,kBAAA;EACA,aAAA;ACVJ;ADYI;EACI,YAAA;EACA,WAAA;EACA,mBAAA;ACVR;ADaI;EACI,YAAA;EACA,kBAAA;ACXR;ADeA;EACI,aAAA;EACA,8BAAA;EACA,SAAA;ACZJ;ADeA;EACI,aAAA;EACA,sBAAA;EACA,SAAA;ACZJ;ADeA;EACI,kBAAA;EACA,iCAAA;EACA,aAAA;EACA,kBAAA;EACA,sBAAA;EACA,QAAA;ACZJ","sourcesContent":["\n.first-section-container {}\n\n.first-section {\n    padding: 120px 0px;\n    background-color: rgb(19, 19, 19);\n\n    &__title {\n        text-align: center;\n        margin-bottom: 80px;\n    }\n}\n\n.first-section-slider {\n    margin-bottom: 60px;\n}\n\n.swiper-container {\n\n    overflow-x: hidden;\n}\n\n\n.first-section-wrapper{\n    padding-top: 100px;\n}\n.swiper-wrapper {\n    // display: flex;\n    // gap: 30px;\n    // width: 100%;\n}\n\n.swiper-slide {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    gap: 15px;\n    width: 250px;\n    align-items: center;\n    background-color: rgb(24, 24, 24);\n    border-radius: 5px;\n    padding: 15px;\n\n    img {\n        height: 80px;\n        width: 80px;\n        object-fit: contain;\n    }\n\n    p {\n        height: 40px;\n        text-align: center;\n    }\n}\n\n.first-section-products-container {\n    display: grid;\n    grid-template-columns: 5fr 2fr;\n    gap: 40px;\n}\n\n.first-section-goods {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.first-section-filters {\n    padding: 15px 20px;\n    background-color: rgb(24, 24, 24);\n    display: flex;\n    border-radius: 5px;\n    flex-direction: column;\n    gap: 6px;\n}\n",".first-section {\n  padding: 120px 0px;\n  background-color: rgb(19, 19, 19);\n}\n.first-section__title {\n  text-align: center;\n  margin-bottom: 80px;\n}\n\n.first-section-slider {\n  margin-bottom: 60px;\n}\n\n.swiper-container {\n  overflow-x: hidden;\n}\n\n.first-section-wrapper {\n  padding-top: 100px;\n}\n\n.swiper-slide {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  gap: 15px;\n  width: 250px;\n  align-items: center;\n  background-color: rgb(24, 24, 24);\n  border-radius: 5px;\n  padding: 15px;\n}\n.swiper-slide img {\n  height: 80px;\n  width: 80px;\n  object-fit: contain;\n}\n.swiper-slide p {\n  height: 40px;\n  text-align: center;\n}\n\n.first-section-products-container {\n  display: grid;\n  grid-template-columns: 5fr 2fr;\n  gap: 40px;\n}\n\n.first-section-goods {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.first-section-filters {\n  padding: 15px 20px;\n  background-color: rgb(24, 24, 24);\n  display: flex;\n  border-radius: 5px;\n  flex-direction: column;\n  gap: 6px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-3!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/components/CartButtonEasly.vue?vue&type=script&setup=true&lang=ts":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-3!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/components/CartButtonEasly.vue?vue&type=script&setup=true&lang=ts ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _hooks_App_useAppSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/hooks/App/useAppSettings */ "./src/hooks/App/useAppSettings.ts");
/* harmony import */ var _hooks_App_usePageSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/hooks/App/usePageSettings */ "./src/hooks/App/usePageSettings.ts");
/* harmony import */ var _store_useVuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store/useVuex */ "./src/store/useVuex.ts");
/* harmony import */ var deep_equal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! deep-equal */ "./node_modules/deep-equal/index.js");
/* harmony import */ var deep_equal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(deep_equal__WEBPACK_IMPORTED_MODULE_4__);






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    __name: 'CartButtonEasly',
    props: {
        product: { type: Object, required: true },
        addingField: { type: [Object, null], required: true }
    },
    emits: ["update:addingField"],
    setup(__props, { expose: __expose, emit: __emit }) {
        __expose();
        const props = __props;
        const { addingField, product } = (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRefs)(props);
        const emit = __emit;
        const productInAddingField = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            return deep_equal__WEBPACK_IMPORTED_MODULE_4___default()(addingField.value, product.value);
        });
        const onClick = () => {
            if (productInAddingField.value) {
                return emit('update:addingField', null);
            }
            emit('update:addingField', product.value);
        };
        const store = (0,_store_useVuex__WEBPACK_IMPORTED_MODULE_3__.useVuex)();
        const { page } = (0,_hooks_App_usePageSettings__WEBPACK_IMPORTED_MODULE_2__.usePageSettings)(store);
        const { app } = (0,_hooks_App_useAppSettings__WEBPACK_IMPORTED_MODULE_1__.useAppSettings)(store);
        const __returned__ = { props, addingField, product, emit, productInAddingField, onClick, store, page, app };
        Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
        return __returned__;
    }
}));


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-3!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/components/GoodItem.vue?vue&type=script&setup=true&lang=ts":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-3!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/components/GoodItem.vue?vue&type=script&setup=true&lang=ts ***!
  \************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _hooks_App_useAppSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/hooks/App/useAppSettings */ "./src/hooks/App/useAppSettings.ts");
/* harmony import */ var _store_useVuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store/useVuex */ "./src/store/useVuex.ts");
/* harmony import */ var _CartButtonEasly_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CartButtonEasly.vue */ "./src/components/CartButtonEasly.vue");
/* harmony import */ var _hooks_App_useSpecDialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/hooks/App/useSpecDialog */ "./src/hooks/App/useSpecDialog.ts");






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    __name: 'GoodItem',
    props: {
        product: { type: Object, required: true },
        addingField: { type: [Object, null], required: true }
    },
    emits: ["update:addingField"],
    setup(__props, { expose: __expose, emit: __emit }) {
        __expose();
        const props = __props;
        const { addingField, product } = (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRefs)(props);
        const emit = __emit;
        let store = (0,_store_useVuex__WEBPACK_IMPORTED_MODULE_2__.useVuex)();
        const { specDialog } = (0,_hooks_App_useSpecDialog__WEBPACK_IMPORTED_MODULE_4__.useSpecDialog)(store);
        const onClick = () => {
            specDialog.value.open(product.value);
        };
        const { app } = (0,_hooks_App_useAppSettings__WEBPACK_IMPORTED_MODULE_1__.useAppSettings)(store);
        const __returned__ = { props, addingField, product, emit, get store() { return store; }, set store(v) { store = v; }, specDialog, onClick, app, CartButtonEasly: _CartButtonEasly_vue__WEBPACK_IMPORTED_MODULE_3__["default"] };
        Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
        return __returned__;
    }
}));


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-3!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/sections/configurator/first-section.vue?vue&type=script&setup=true&lang=ts":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-3!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/sections/configurator/first-section.vue?vue&type=script&setup=true&lang=ts ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _axiosWoocomerce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/axiosWoocomerce */ "./src/axiosWoocomerce.ts");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/css */ "./node_modules/swiper/swiper.css");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_GoodItem_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/GoodItem.vue */ "./src/components/GoodItem.vue");






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    __name: 'first-section',
    setup(__props, { expose: __expose }) {
        __expose();
        let swiper = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
        const swiperContainer = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
        const initializeSwiper = () => {
            swiper.value = new swiper__WEBPACK_IMPORTED_MODULE_2__["default"](swiperContainer.value, {
                slidesPerView: 'auto',
                spaceBetween: 30,
            });
        };
        const swiperPrev = () => {
            swiper.value.slidePrev();
        };
        const swiperNext = () => {
            swiper.value.slideNext();
        };
        const categories = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
        const choosenCategory = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
        const updateChoosenCategory = (category) => {
            choosenCategory.value = category;
        };
        const getCategories = async () => {
            let response = await _axiosWoocomerce__WEBPACK_IMPORTED_MODULE_1__["default"].get('/products/categories', {
                params: {
                    per_page: 100,
                    parent: 19,
                    order: 'desc',
                }
            });
            return response.data;
        };
        const products = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
        const getProducts = async () => {
            const response = await _axiosWoocomerce__WEBPACK_IMPORTED_MODULE_1__["default"].get(`products?category=${choosenCategory.value.id}`);
            return response.data;
        };
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(choosenCategory, async () => {
            if (choosenCategory) {
                products.value = await getProducts();
            }
        }, { deep: true });
        const ConfigureProduct = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({
            cpu: null,
            gpu: null,
            ram: null,
            motherboard: null,
            ssd: null,
            hdd: null,
            case: null,
            pb: null,
            pc_fan: null,
            cpu_cooler: null,
        });
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(async () => {
            categories.value = await getCategories();
            choosenCategory.value = categories.value[0];
            initializeSwiper();
        });
        const __returned__ = { get swiper() { return swiper; }, set swiper(v) { swiper = v; }, swiperContainer, initializeSwiper, swiperPrev, swiperNext, categories, choosenCategory, updateChoosenCategory, getCategories, products, getProducts, ConfigureProduct, GoodItem: _components_GoodItem_vue__WEBPACK_IMPORTED_MODULE_4__["default"] };
        Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
        return __returned__;
    }
}));


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-3!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/views/configurator.vue?vue&type=script&setup=true&lang=ts":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-3!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/views/configurator.vue?vue&type=script&setup=true&lang=ts ***!
  \***********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _sections_configurator_first_section_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/sections/configurator/first-section.vue */ "./src/sections/configurator/first-section.vue");
/* harmony import */ var _api_App_getPageSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/api/App/getPageSettings */ "./src/api/App/getPageSettings.ts");
/* harmony import */ var _hooks_App_useLoad__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/hooks/App/useLoad */ "./src/hooks/App/useLoad.ts");
/* harmony import */ var _hooks_App_usePageSettings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/hooks/App/usePageSettings */ "./src/hooks/App/usePageSettings.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/store */ "./src/store/index.ts");







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    __name: 'configurator',
    setup(__props, { expose: __expose }) {
        __expose();
        const isPageDataLoaded = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
        let { loader } = (0,_hooks_App_useLoad__WEBPACK_IMPORTED_MODULE_3__.useLoad)(2);
        loader.value.onAllisLoaded = () => {
            preloaderClose();
            loader.value.restart();
        };
        let { page } = (0,_hooks_App_usePageSettings__WEBPACK_IMPORTED_MODULE_4__.usePageSettings)(_store__WEBPACK_IMPORTED_MODULE_5__["default"]);
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(async () => {
            page.value = await (0,_api_App_getPageSettings__WEBPACK_IMPORTED_MODULE_2__.getPageSettings)(331);
            isPageDataLoaded.value = true;
            preloaderClose();
        });
        const __returned__ = { isPageDataLoaded, get loader() { return loader; }, set loader(v) { loader = v; }, get page() { return page; }, set page(v) { page = v; }, FirstSection: _sections_configurator_first_section_vue__WEBPACK_IMPORTED_MODULE_1__["default"] };
        Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
        return __returned__;
    }
}));


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-3!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/components/CartButtonEasly.vue?vue&type=template&id=6d74bcd2&ts=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-3!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/components/CartButtonEasly.vue?vue&type=template&id=6d74bcd2&ts=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = { class: "cart-button" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
            onClick: $setup.onClick,
            class: "button cart-button__button"
        }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.productInAddingField ? 'Убрать' : 'Добавить'), 1 /* TEXT */)
    ]));
}


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-3!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/components/GoodItem.vue?vue&type=template&id=1fde9cc0&scoped=true&ts=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-3!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/components/GoodItem.vue?vue&type=template&id=1fde9cc0&scoped=true&ts=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-1fde9cc0"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);
const _hoisted_1 = { class: "good-item" };
const _hoisted_2 = { class: "good-item__image-box" };
const _hoisted_3 = ["src", "alt"];
const _hoisted_4 = { class: "good-item-content" };
const _hoisted_5 = { class: "good-item-content__description" };
const _hoisted_6 = { class: "good-item-content__title" };
const _hoisted_7 = { class: "good-item-content__price" };
const _hoisted_8 = { class: "good-item-content__quantity-box" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
                class: "good-item__image",
                src: $setup.product.images[0].src,
                alt: $setup.product.name
            }, null, 8 /* PROPS */, _hoisted_3)
        ]),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.product.name), 1 /* TEXT */),
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.product.price) + " руб / шт", 1 /* TEXT */)
            ]),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["CartButtonEasly"], {
                    product: $setup.product,
                    "adding-field": $setup.addingField,
                    "onUpdate:addingField": _cache[0] || (_cache[0] = ($event) => ($setup.emit('update:addingField', $event)))
                }, null, 8 /* PROPS */, ["product", "adding-field"])
            ])
        ])
    ]));
}


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-3!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/sections/configurator/first-section.vue?vue&type=template&id=26caafb4&scoped=true&ts=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-3!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/sections/configurator/first-section.vue?vue&type=template&id=26caafb4&scoped=true&ts=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-26caafb4"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);
const _hoisted_1 = { class: "first-section-wrapper" };
const _hoisted_2 = { class: "first-section" };
const _hoisted_3 = { class: "first-section-container container" };
const _hoisted_4 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", { class: "first-section__title title" }, "Конфигуратор", -1 /* HOISTED */));
const _hoisted_5 = { class: "first-section-slider" };
const _hoisted_6 = {
    ref: "swiperContainer",
    class: "swiper-container"
};
const _hoisted_7 = { class: "swiper-wrapper" };
const _hoisted_8 = ["onClick"];
const _hoisted_9 = ["src", "alt"];
const _hoisted_10 = { class: "first-section-products-container" };
const _hoisted_11 = { class: "first-section-goods" };
const _hoisted_12 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", { class: "first-section-filters" }, [
    /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <CustomSelect\n                        \n                        /> ")
], -1 /* HOISTED */));
function render(_ctx, _cache, $props, $setup, $data, $options) {
    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [
                _hoisted_4,
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [
                            ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.categories, (category) => {
                                return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
                                    onClick: ($event) => ($setup.updateChoosenCategory(category)),
                                    key: category.id,
                                    class: "swiper-slide"
                                }, [
                                    (category.image)
                                        ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("img", {
                                            key: 0,
                                            src: category.image.src,
                                            alt: category.image.name
                                        }, null, 8 /* PROPS */, _hoisted_9))
                                        : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
                                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(category.name), 1 /* TEXT */)
                                ], 8 /* PROPS */, _hoisted_8));
                            }), 128 /* KEYED_FRAGMENT */))
                        ])
                    ], 512 /* NEED_PATCH */)
                ]),
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [
                        ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.products, (product) => {
                            return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["GoodItem"], {
                                key: product.id,
                                "adding-field": $setup.ConfigureProduct[$setup.choosenCategory.slug],
                                "onUpdate:addingField": _cache[0] || (_cache[0] = ($event) => (($setup.ConfigureProduct[$setup.choosenCategory.slug]) = $event)),
                                product: product
                            }, null, 8 /* PROPS */, ["adding-field", "product"]));
                        }), 128 /* KEYED_FRAGMENT */))
                    ]),
                    _hoisted_12
                ])
            ])
        ])
    ]));
}


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-3!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/views/configurator.vue?vue&type=template&id=1786e5cf&ts=true":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-3!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/views/configurator.vue?vue&type=template&id=1786e5cf&ts=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _hoisted_1 = { key: 0 };
function render(_ctx, _cache, $props, $setup, $data, $options) {
    return ($setup.isPageDataLoaded)
        ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("main", _hoisted_1, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["FirstSection"])
        ]))
        : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true);
}


/***/ }),

/***/ "./src/api/App/getPageSettings.ts":
/*!****************************************!*\
  !*** ./src/api/App/getPageSettings.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getPageSettings: () => (/* binding */ getPageSettings)
/* harmony export */ });
/* harmony import */ var _axiosWP__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/axiosWP */ "./src/axiosWP.ts");

const getPageSettings = async (id) => {
    return await _axiosWP__WEBPACK_IMPORTED_MODULE_0__["default"].get('pages/' + id).then(response => response.data);
};


/***/ }),

/***/ "./src/hooks/App/useLoad.ts":
/*!**********************************!*\
  !*** ./src/hooks/App/useLoad.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useLoad: () => (/* binding */ useLoad)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

class Loader {
    loadedCounter = 0;
    counter = 0;
    constructor(counter) {
        this.counter = counter;
    }
    load() {
        this.loadedCounter++;
        this.afterLoad();
    }
    restart(count) {
        if (count) {
            this.counter = count;
        }
        this.loadedCounter = 0;
    }
    onAllisLoaded;
    afterLoad() {
        if (this.loadedCounter != this.counter) {
            return;
        }
        if (this.onAllisLoaded) {
            return this.onAllisLoaded();
        }
    }
}
const useLoad = (count) => {
    const loader = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(new Loader(count));
    return {
        loader,
    };
};


/***/ }),

/***/ "./src/hooks/App/usePageSettings.ts":
/*!******************************************!*\
  !*** ./src/hooks/App/usePageSettings.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   usePageSettings: () => (/* binding */ usePageSettings)
/* harmony export */ });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/store */ "./src/store/index.ts");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");


const usePageSettings = (store) => {
    let page = (0,vue__WEBPACK_IMPORTED_MODULE_1__.computed)({
        get: () => store.state.page.cfs,
        set: (value) => store.commit(_store__WEBPACK_IMPORTED_MODULE_0__.Mutations.SET_PAGE_SETTINGS, value),
    });
    return {
        page
    };
};


/***/ }),

/***/ "./src/components/CartButtonEasly.vue":
/*!********************************************!*\
  !*** ./src/components/CartButtonEasly.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CartButtonEasly_vue_vue_type_template_id_6d74bcd2_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CartButtonEasly.vue?vue&type=template&id=6d74bcd2&ts=true */ "./src/components/CartButtonEasly.vue?vue&type=template&id=6d74bcd2&ts=true");
/* harmony import */ var _CartButtonEasly_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CartButtonEasly.vue?vue&type=script&setup=true&lang=ts */ "./src/components/CartButtonEasly.vue?vue&type=script&setup=true&lang=ts");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_CartButtonEasly_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_CartButtonEasly_vue_vue_type_template_id_6d74bcd2_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/components/CartButtonEasly.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/components/GoodItem.vue":
/*!*************************************!*\
  !*** ./src/components/GoodItem.vue ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _GoodItem_vue_vue_type_template_id_1fde9cc0_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GoodItem.vue?vue&type=template&id=1fde9cc0&scoped=true&ts=true */ "./src/components/GoodItem.vue?vue&type=template&id=1fde9cc0&scoped=true&ts=true");
/* harmony import */ var _GoodItem_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GoodItem.vue?vue&type=script&setup=true&lang=ts */ "./src/components/GoodItem.vue?vue&type=script&setup=true&lang=ts");
/* harmony import */ var _GoodItem_vue_vue_type_style_index_0_id_1fde9cc0_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GoodItem.vue?vue&type=style&index=0&id=1fde9cc0&lang=scss&scoped=true */ "./src/components/GoodItem.vue?vue&type=style&index=0&id=1fde9cc0&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_GoodItem_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_GoodItem_vue_vue_type_template_id_1fde9cc0_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-1fde9cc0"],['__file',"src/components/GoodItem.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/sections/configurator/first-section.vue":
/*!*****************************************************!*\
  !*** ./src/sections/configurator/first-section.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _first_section_vue_vue_type_template_id_26caafb4_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./first-section.vue?vue&type=template&id=26caafb4&scoped=true&ts=true */ "./src/sections/configurator/first-section.vue?vue&type=template&id=26caafb4&scoped=true&ts=true");
/* harmony import */ var _first_section_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./first-section.vue?vue&type=script&setup=true&lang=ts */ "./src/sections/configurator/first-section.vue?vue&type=script&setup=true&lang=ts");
/* harmony import */ var _first_section_vue_vue_type_style_index_0_id_26caafb4_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./first-section.vue?vue&type=style&index=0&id=26caafb4&lang=scss&scoped=true */ "./src/sections/configurator/first-section.vue?vue&type=style&index=0&id=26caafb4&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_first_section_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_first_section_vue_vue_type_template_id_26caafb4_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-26caafb4"],['__file',"src/sections/configurator/first-section.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/views/configurator.vue":
/*!************************************!*\
  !*** ./src/views/configurator.vue ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _configurator_vue_vue_type_template_id_1786e5cf_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configurator.vue?vue&type=template&id=1786e5cf&ts=true */ "./src/views/configurator.vue?vue&type=template&id=1786e5cf&ts=true");
/* harmony import */ var _configurator_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./configurator.vue?vue&type=script&setup=true&lang=ts */ "./src/views/configurator.vue?vue&type=script&setup=true&lang=ts");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_configurator_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_configurator_vue_vue_type_template_id_1786e5cf_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/views/configurator.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/components/CartButtonEasly.vue?vue&type=script&setup=true&lang=ts":
/*!*******************************************************************************!*\
  !*** ./src/components/CartButtonEasly.vue?vue&type=script&setup=true&lang=ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_CartButtonEasly_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_CartButtonEasly_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/ts-loader/index.js??clonedRuleSet-3!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./CartButtonEasly.vue?vue&type=script&setup=true&lang=ts */ "./node_modules/ts-loader/index.js??clonedRuleSet-3!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/components/CartButtonEasly.vue?vue&type=script&setup=true&lang=ts");
 

/***/ }),

/***/ "./src/components/GoodItem.vue?vue&type=script&setup=true&lang=ts":
/*!************************************************************************!*\
  !*** ./src/components/GoodItem.vue?vue&type=script&setup=true&lang=ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_GoodItem_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_GoodItem_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/ts-loader/index.js??clonedRuleSet-3!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./GoodItem.vue?vue&type=script&setup=true&lang=ts */ "./node_modules/ts-loader/index.js??clonedRuleSet-3!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/components/GoodItem.vue?vue&type=script&setup=true&lang=ts");
 

/***/ }),

/***/ "./src/sections/configurator/first-section.vue?vue&type=script&setup=true&lang=ts":
/*!****************************************************************************************!*\
  !*** ./src/sections/configurator/first-section.vue?vue&type=script&setup=true&lang=ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_first_section_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_first_section_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/ts-loader/index.js??clonedRuleSet-3!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./first-section.vue?vue&type=script&setup=true&lang=ts */ "./node_modules/ts-loader/index.js??clonedRuleSet-3!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/sections/configurator/first-section.vue?vue&type=script&setup=true&lang=ts");
 

/***/ }),

/***/ "./src/views/configurator.vue?vue&type=script&setup=true&lang=ts":
/*!***********************************************************************!*\
  !*** ./src/views/configurator.vue?vue&type=script&setup=true&lang=ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_configurator_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_configurator_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/ts-loader/index.js??clonedRuleSet-3!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./configurator.vue?vue&type=script&setup=true&lang=ts */ "./node_modules/ts-loader/index.js??clonedRuleSet-3!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/views/configurator.vue?vue&type=script&setup=true&lang=ts");
 

/***/ }),

/***/ "./src/components/CartButtonEasly.vue?vue&type=template&id=6d74bcd2&ts=true":
/*!**********************************************************************************!*\
  !*** ./src/components/CartButtonEasly.vue?vue&type=template&id=6d74bcd2&ts=true ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_3_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_CartButtonEasly_vue_vue_type_template_id_6d74bcd2_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_3_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_CartButtonEasly_vue_vue_type_template_id_6d74bcd2_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/ts-loader/index.js??clonedRuleSet-3!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./CartButtonEasly.vue?vue&type=template&id=6d74bcd2&ts=true */ "./node_modules/ts-loader/index.js??clonedRuleSet-3!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/components/CartButtonEasly.vue?vue&type=template&id=6d74bcd2&ts=true");


/***/ }),

/***/ "./src/components/GoodItem.vue?vue&type=template&id=1fde9cc0&scoped=true&ts=true":
/*!***************************************************************************************!*\
  !*** ./src/components/GoodItem.vue?vue&type=template&id=1fde9cc0&scoped=true&ts=true ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_3_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_GoodItem_vue_vue_type_template_id_1fde9cc0_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_3_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_GoodItem_vue_vue_type_template_id_1fde9cc0_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/ts-loader/index.js??clonedRuleSet-3!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./GoodItem.vue?vue&type=template&id=1fde9cc0&scoped=true&ts=true */ "./node_modules/ts-loader/index.js??clonedRuleSet-3!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/components/GoodItem.vue?vue&type=template&id=1fde9cc0&scoped=true&ts=true");


/***/ }),

/***/ "./src/sections/configurator/first-section.vue?vue&type=template&id=26caafb4&scoped=true&ts=true":
/*!*******************************************************************************************************!*\
  !*** ./src/sections/configurator/first-section.vue?vue&type=template&id=26caafb4&scoped=true&ts=true ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_3_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_first_section_vue_vue_type_template_id_26caafb4_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_3_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_first_section_vue_vue_type_template_id_26caafb4_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/ts-loader/index.js??clonedRuleSet-3!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./first-section.vue?vue&type=template&id=26caafb4&scoped=true&ts=true */ "./node_modules/ts-loader/index.js??clonedRuleSet-3!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/sections/configurator/first-section.vue?vue&type=template&id=26caafb4&scoped=true&ts=true");


/***/ }),

/***/ "./src/views/configurator.vue?vue&type=template&id=1786e5cf&ts=true":
/*!**************************************************************************!*\
  !*** ./src/views/configurator.vue?vue&type=template&id=1786e5cf&ts=true ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_3_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_configurator_vue_vue_type_template_id_1786e5cf_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_3_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_configurator_vue_vue_type_template_id_1786e5cf_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/ts-loader/index.js??clonedRuleSet-3!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./configurator.vue?vue&type=template&id=1786e5cf&ts=true */ "./node_modules/ts-loader/index.js??clonedRuleSet-3!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/views/configurator.vue?vue&type=template&id=1786e5cf&ts=true");


/***/ }),

/***/ "./src/components/GoodItem.vue?vue&type=style&index=0&id=1fde9cc0&lang=scss&scoped=true":
/*!**********************************************************************************************!*\
  !*** ./src/components/GoodItem.vue?vue&type=style&index=0&id=1fde9cc0&lang=scss&scoped=true ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_GoodItem_vue_vue_type_style_index_0_id_1fde9cc0_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./GoodItem.vue?vue&type=style&index=0&id=1fde9cc0&lang=scss&scoped=true */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/components/GoodItem.vue?vue&type=style&index=0&id=1fde9cc0&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_GoodItem_vue_vue_type_style_index_0_id_1fde9cc0_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_GoodItem_vue_vue_type_style_index_0_id_1fde9cc0_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_GoodItem_vue_vue_type_style_index_0_id_1fde9cc0_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_GoodItem_vue_vue_type_style_index_0_id_1fde9cc0_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./src/sections/configurator/first-section.vue?vue&type=style&index=0&id=26caafb4&lang=scss&scoped=true":
/*!**************************************************************************************************************!*\
  !*** ./src/sections/configurator/first-section.vue?vue&type=style&index=0&id=26caafb4&lang=scss&scoped=true ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_first_section_vue_vue_type_style_index_0_id_26caafb4_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader/index.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./first-section.vue?vue&type=style&index=0&id=26caafb4&lang=scss&scoped=true */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/sections/configurator/first-section.vue?vue&type=style&index=0&id=26caafb4&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_first_section_vue_vue_type_style_index_0_id_26caafb4_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_first_section_vue_vue_type_style_index_0_id_26caafb4_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_first_section_vue_vue_type_style_index_0_id_26caafb4_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_first_section_vue_vue_type_style_index_0_id_26caafb4_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/components/GoodItem.vue?vue&type=style&index=0&id=1fde9cc0&lang=scss&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/components/GoodItem.vue?vue&type=style&index=0&id=1fde9cc0&lang=scss&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./GoodItem.vue?vue&type=style&index=0&id=1fde9cc0&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/components/GoodItem.vue?vue&type=style&index=0&id=1fde9cc0&lang=scss&scoped=true");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("2408db76", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/sections/configurator/first-section.vue?vue&type=style&index=0&id=26caafb4&lang=scss&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/sections/configurator/first-section.vue?vue&type=style&index=0&id=26caafb4&lang=scss&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./first-section.vue?vue&type=style&index=0&id=26caafb4&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/sections/configurator/first-section.vue?vue&type=style&index=0&id=26caafb4&lang=scss&scoped=true");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("d872f702", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRzL2pzL3NyY192aWV3c19jb25maWd1cmF0b3JfdnVlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8seUhBQXlILFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsdUNBQXVDLG9CQUFvQiwwQkFBMEIsZ0JBQWdCLGtCQUFrQix5QkFBeUIsZ0NBQWdDLHlCQUF5QixrQkFBa0IscUJBQXFCLHNCQUFzQiw4QkFBOEIsT0FBTyxzQkFBc0Isd0JBQXdCLDhCQUE4QixrQ0FBa0MsdUJBQXVCLHdCQUF3QixrQ0FBa0MsNkJBQTZCLE9BQU8sR0FBRyx3QkFBd0Isb0JBQW9CLDBCQUEwQixxQ0FBcUMsa0JBQWtCLG9CQUFvQix3QkFBd0Isd0JBQXdCLGlDQUFpQyxvQkFBb0IsT0FBTyxrQkFBa0IsMEJBQTBCLG9DQUFvQywyQkFBMkIsT0FBTyxtQkFB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QSxVQUFVLGdLQUFpRjtBQUMzRiwrQ0FBK0M7QUFDL0M7QUFDQSxHQUFHLEtBQVUsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL3NyYy8uL3NyYy9jb21wb25lbnRzL0dvb2RJdGVtLnZ1ZT9iOGYxIiwid2VicGFjazovL3NyYy8uL3NyYy9zZWN0aW9ucy9jb25maWd1cmF0b3IvZmlyc3Qtc2VjdGlvbi52dWU/NGJjOCIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvY29tcG9uZW50cy9DYXJ0QnV0dG9uRWFzbHkudnVlP2ZlZjYiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL2NvbXBvbmVudHMvQ2FydEJ1dHRvbkVhc2x5LnZ1ZSIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvY29tcG9uZW50cy9Hb29kSXRlbS52dWU/MDZjOSIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvY29tcG9uZW50cy9Hb29kSXRlbS52dWUiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL3NlY3Rpb25zL2NvbmZpZ3VyYXRvci9maXJzdC1zZWN0aW9uLnZ1ZT83OGI4Iiwid2VicGFjazovL3NyYy8uL3NyYy9zZWN0aW9ucy9jb25maWd1cmF0b3IvZmlyc3Qtc2VjdGlvbi52dWUiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL3ZpZXdzL2NvbmZpZ3VyYXRvci52dWU/OTE0MSIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvdmlld3MvY29uZmlndXJhdG9yLnZ1ZSIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvY29tcG9uZW50cy9DYXJ0QnV0dG9uRWFzbHkudnVlPzY4YWIiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL2NvbXBvbmVudHMvR29vZEl0ZW0udnVlPzEyYzMiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL3NlY3Rpb25zL2NvbmZpZ3VyYXRvci9maXJzdC1zZWN0aW9uLnZ1ZT9lZmI4Iiwid2VicGFjazovL3NyYy8uL3NyYy92aWV3cy9jb25maWd1cmF0b3IudnVlPzdkNWYiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL2FwaS9BcHAvZ2V0UGFnZVNldHRpbmdzLnRzIiwid2VicGFjazovL3NyYy8uL3NyYy9ob29rcy9BcHAvdXNlTG9hZC50cyIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvaG9va3MvQXBwL3VzZVBhZ2VTZXR0aW5ncy50cyIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvY29tcG9uZW50cy9DYXJ0QnV0dG9uRWFzbHkudnVlP2Y1NjgiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL2NvbXBvbmVudHMvR29vZEl0ZW0udnVlP2MwY2YiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL3NlY3Rpb25zL2NvbmZpZ3VyYXRvci9maXJzdC1zZWN0aW9uLnZ1ZT9mZTBjIiwid2VicGFjazovL3NyYy8uL3NyYy92aWV3cy9jb25maWd1cmF0b3IudnVlPzNhZGMiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL2NvbXBvbmVudHMvQ2FydEJ1dHRvbkVhc2x5LnZ1ZT8wNzA4Iiwid2VicGFjazovL3NyYy8uL3NyYy9jb21wb25lbnRzL0dvb2RJdGVtLnZ1ZT81Njg3Iiwid2VicGFjazovL3NyYy8uL3NyYy9zZWN0aW9ucy9jb25maWd1cmF0b3IvZmlyc3Qtc2VjdGlvbi52dWU/YmEzMyIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvdmlld3MvY29uZmlndXJhdG9yLnZ1ZT80MzBkIiwid2VicGFjazovL3NyYy8uL3NyYy9jb21wb25lbnRzL0dvb2RJdGVtLnZ1ZT8xMWNmIiwid2VicGFjazovL3NyYy8uL3NyYy9zZWN0aW9ucy9jb25maWd1cmF0b3IvZmlyc3Qtc2VjdGlvbi52dWU/MzZhYiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmdvb2QtaXRlbVtkYXRhLXYtMWZkZTljYzBdIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAzMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTdweCAzNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxODE4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uZ29vZC1pdGVtX19pbWFnZVtkYXRhLXYtMWZkZTljYzBdIHtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiA5MCU7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG4uZ29vZC1pdGVtX19pbWFnZS1ib3hbZGF0YS12LTFmZGU5Y2MwXSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMTMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uZ29vZC1pdGVtLWNvbnRlbnRbZGF0YS12LTFmZGU5Y2MwXSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAzMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5nb29kLWl0ZW0tY29udGVudF9fZGVzY3JpcHRpb25bZGF0YS12LTFmZGU5Y2MwXSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTBweDtcbn1cbi5nb29kLWl0ZW0tY29udGVudF9fdGl0bGVbZGF0YS12LTFmZGU5Y2MwXSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5nb29kLWl0ZW0tY29udGVudF9fcXVhbnRpdHktYm94W2RhdGEtdi0xZmRlOWNjMF0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEzcHg7XG59XG4uZ29vZC1pdGVtLWNvbnRlbnRfX3N1bVtkYXRhLXYtMWZkZTljYzBdIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL0dvb2RJdGVtLnZ1ZVwiLFwid2VicGFjazovLy4vR29vZEl0ZW0udnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNBSjtBREVJO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ0FSO0FER0k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQ0RSO0FES0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUVBLFNBQUE7RUFFQSxXQUFBO0FDSko7QURNSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUNKUjtBRE9JO0VBQ0ksZUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUNMUjtBRFdJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQ1RSO0FEWUk7RUFDSSxnQkFBQTtBQ1ZSXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbi5nb29kLWl0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDMwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxN3B4IDM0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxODE4MTg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXG4gICAgJl9faW1hZ2Uge1xcbiAgICAgICAgd2lkdGg6IDkwJTtcXG4gICAgICAgIGhlaWdodDogOTAlO1xcbiAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcXG4gICAgfVxcblxcbiAgICAmX19pbWFnZS1ib3gge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIHdpZHRoOiAyMDBweDtcXG4gICAgICAgIGhlaWdodDogMTMwcHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgfVxcbn1cXG5cXG4uZ29vZC1pdGVtLWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxuICAgIGdhcDogMzBweDtcXG5cXG4gICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgICZfX2Rlc2NyaXB0aW9uIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgZ2FwOiAxMHB4O1xcbiAgICB9XFxuXFxuICAgICZfX3RpdGxlIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICB9XFxuXFxuICAgICZfX3ByaWNlIHt9XFxuXFxuXFxuICAgICZfX3F1YW50aXR5LWJveCB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGdhcDogMTNweDtcXG4gICAgfVxcblxcbiAgICAmX19zdW0ge1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgfVxcbn1cXG5cIixcIi5nb29kLWl0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDMwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDE3cHggMzRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODE4MTg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbi5nb29kLWl0ZW1fX2ltYWdlIHtcXG4gIHdpZHRoOiA5MCU7XFxuICBoZWlnaHQ6IDkwJTtcXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XFxufVxcbi5nb29kLWl0ZW1fX2ltYWdlLWJveCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgaGVpZ2h0OiAxMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uZ29vZC1pdGVtLWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IDMwcHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLmdvb2QtaXRlbS1jb250ZW50X19kZXNjcmlwdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG59XFxuLmdvb2QtaXRlbS1jb250ZW50X190aXRsZSB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuLmdvb2QtaXRlbS1jb250ZW50X19xdWFudGl0eS1ib3gge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEzcHg7XFxufVxcbi5nb29kLWl0ZW0tY29udGVudF9fc3VtIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmZpcnN0LXNlY3Rpb25bZGF0YS12LTI2Y2FhZmI0XSB7XG4gIHBhZGRpbmc6IDEyMHB4IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5LCAxOSwgMTkpO1xufVxuLmZpcnN0LXNlY3Rpb25fX3RpdGxlW2RhdGEtdi0yNmNhYWZiNF0ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDgwcHg7XG59XG4uZmlyc3Qtc2VjdGlvbi1zbGlkZXJbZGF0YS12LTI2Y2FhZmI0XSB7XG4gIG1hcmdpbi1ib3R0b206IDYwcHg7XG59XG4uc3dpcGVyLWNvbnRhaW5lcltkYXRhLXYtMjZjYWFmYjRdIHtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuLmZpcnN0LXNlY3Rpb24td3JhcHBlcltkYXRhLXYtMjZjYWFmYjRdIHtcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xufVxuLnN3aXBlci1zbGlkZVtkYXRhLXYtMjZjYWFmYjRdIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBnYXA6IDE1cHg7XG4gIHdpZHRoOiAyNTBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0LCAyNCwgMjQpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG4uc3dpcGVyLXNsaWRlIGltZ1tkYXRhLXYtMjZjYWFmYjRdIHtcbiAgaGVpZ2h0OiA4MHB4O1xuICB3aWR0aDogODBweDtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cbi5zd2lwZXItc2xpZGUgcFtkYXRhLXYtMjZjYWFmYjRdIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZmlyc3Qtc2VjdGlvbi1wcm9kdWN0cy1jb250YWluZXJbZGF0YS12LTI2Y2FhZmI0XSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNWZyIDJmcjtcbiAgZ2FwOiA0MHB4O1xufVxuLmZpcnN0LXNlY3Rpb24tZ29vZHNbZGF0YS12LTI2Y2FhZmI0XSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTBweDtcbn1cbi5maXJzdC1zZWN0aW9uLWZpbHRlcnNbZGF0YS12LTI2Y2FhZmI0XSB7XG4gIHBhZGRpbmc6IDE1cHggMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0LCAyNCwgMjQpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogNnB4O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3NlY3Rpb25zL2NvbmZpZ3VyYXRvci9maXJzdC1zZWN0aW9uLnZ1ZVwiLFwid2VicGFjazovLy4vZmlyc3Qtc2VjdGlvbi52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7RUFDSSxrQkFBQTtFQUNBLGlDQUFBO0FDRko7QURJSTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUNGUjtBRE1BO0VBQ0ksbUJBQUE7QUNISjtBRE1BO0VBRUksa0JBQUE7QUNKSjtBRFFBO0VBQ0ksa0JBQUE7QUNMSjtBRGFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ1ZKO0FEWUk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDVlI7QURhSTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQ1hSO0FEZUE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxTQUFBO0FDWko7QURlQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUNaSjtBRGVBO0VBQ0ksa0JBQUE7RUFDQSxpQ0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsUUFBQTtBQ1pKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbi5maXJzdC1zZWN0aW9uLWNvbnRhaW5lciB7fVxcblxcbi5maXJzdC1zZWN0aW9uIHtcXG4gICAgcGFkZGluZzogMTIwcHggMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTksIDE5LCAxOSk7XFxuXFxuICAgICZfX3RpdGxlIHtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDgwcHg7XFxuICAgIH1cXG59XFxuXFxuLmZpcnN0LXNlY3Rpb24tc2xpZGVyIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogNjBweDtcXG59XFxuXFxuLnN3aXBlci1jb250YWluZXIge1xcblxcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcblxcbi5maXJzdC1zZWN0aW9uLXdyYXBwZXJ7XFxuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcXG59XFxuLnN3aXBlci13cmFwcGVyIHtcXG4gICAgLy8gZGlzcGxheTogZmxleDtcXG4gICAgLy8gZ2FwOiAzMHB4O1xcbiAgICAvLyB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnN3aXBlci1zbGlkZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNCwgMjQsIDI0KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcblxcbiAgICBpbWcge1xcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xcbiAgICAgICAgd2lkdGg6IDgwcHg7XFxuICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xcbiAgICB9XFxuXFxuICAgIHAge1xcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxufVxcblxcbi5maXJzdC1zZWN0aW9uLXByb2R1Y3RzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNWZyIDJmcjtcXG4gICAgZ2FwOiA0MHB4O1xcbn1cXG5cXG4uZmlyc3Qtc2VjdGlvbi1nb29kcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLmZpcnN0LXNlY3Rpb24tZmlsdGVycyB7XFxuICAgIHBhZGRpbmc6IDE1cHggMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0LCAyNCwgMjQpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNnB4O1xcbn1cXG5cIixcIi5maXJzdC1zZWN0aW9uIHtcXG4gIHBhZGRpbmc6IDEyMHB4IDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOSwgMTksIDE5KTtcXG59XFxuLmZpcnN0LXNlY3Rpb25fX3RpdGxlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDgwcHg7XFxufVxcblxcbi5maXJzdC1zZWN0aW9uLXNsaWRlciB7XFxuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xcbn1cXG5cXG4uc3dpcGVyLWNvbnRhaW5lciB7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbi5maXJzdC1zZWN0aW9uLXdyYXBwZXIge1xcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xcbn1cXG5cXG4uc3dpcGVyLXNsaWRlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZ2FwOiAxNXB4O1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNCwgMjQsIDI0KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDE1cHg7XFxufVxcbi5zd2lwZXItc2xpZGUgaW1nIHtcXG4gIGhlaWdodDogODBweDtcXG4gIHdpZHRoOiA4MHB4O1xcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcXG59XFxuLnN3aXBlci1zbGlkZSBwIHtcXG4gIGhlaWdodDogNDBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmZpcnN0LXNlY3Rpb24tcHJvZHVjdHMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDVmciAyZnI7XFxuICBnYXA6IDQwcHg7XFxufVxcblxcbi5maXJzdC1zZWN0aW9uLWdvb2RzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uZmlyc3Qtc2VjdGlvbi1maWx0ZXJzIHtcXG4gIHBhZGRpbmc6IDE1cHggMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNCwgMjQsIDI0KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA2cHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJpbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgYXMgX2RlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSdcbmltcG9ydCB7IHVzZUFwcFNldHRpbmdzIH0gZnJvbSAnQC9ob29rcy9BcHAvdXNlQXBwU2V0dGluZ3MnO1xuaW1wb3J0IHsgdXNlUGFnZVNldHRpbmdzIH0gZnJvbSAnQC9ob29rcy9BcHAvdXNlUGFnZVNldHRpbmdzJztcbmltcG9ydCB7IHVzZVZ1ZXggfSBmcm9tICdAL3N0b3JlL3VzZVZ1ZXgnO1xuaW1wb3J0IHsgSVByb2R1Y3QgfSBmcm9tICdAL3R5cGVzL1Byb2R1Y3QnO1xuaW1wb3J0IGRlZXBFcXVhbCBmcm9tICdkZWVwLWVxdWFsJztcbmltcG9ydCB7IGNvbXB1dGVkLCB0b1JlZnMgfSBmcm9tICd2dWUnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICAgIHByb2R1Y3Q6IElQcm9kdWN0XG4gICAgYWRkaW5nRmllbGQ6IG9iamVjdCB8IG51bGxcbn1cblxuaW50ZXJmYWNlIEVtaXRzIHtcbiAgICAoZTogJ3VwZGF0ZTphZGRpbmdGaWVsZCcsIHZhbHVlOiBvYmplY3QgfCBudWxsKTogdm9pZFxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IC8qI19fUFVSRV9fKi9fZGVmaW5lQ29tcG9uZW50KHtcbiAgX19uYW1lOiAnQ2FydEJ1dHRvbkVhc2x5JyxcbiAgcHJvcHM6IHtcbiAgICBwcm9kdWN0OiB7IHR5cGU6IE9iamVjdCwgcmVxdWlyZWQ6IHRydWUgfSxcbiAgICBhZGRpbmdGaWVsZDogeyB0eXBlOiBbT2JqZWN0LCBudWxsXSwgcmVxdWlyZWQ6IHRydWUgfVxuICB9LFxuICBlbWl0czogW1widXBkYXRlOmFkZGluZ0ZpZWxkXCJdLFxuICBzZXR1cChfX3Byb3BzOiBhbnksIHsgZXhwb3NlOiBfX2V4cG9zZSwgZW1pdDogX19lbWl0IH0pIHtcbiAgX19leHBvc2UoKTtcblxuY29uc3QgcHJvcHMgPSBfX3Byb3BzXG5cbmNvbnN0IHsgYWRkaW5nRmllbGQsIHByb2R1Y3QgfSA9IHRvUmVmcyhwcm9wcylcblxuY29uc3QgZW1pdCA9IF9fZW1pdFxuXG5jb25zdCBwcm9kdWN0SW5BZGRpbmdGaWVsZCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICByZXR1cm4gZGVlcEVxdWFsKGFkZGluZ0ZpZWxkLnZhbHVlLCBwcm9kdWN0LnZhbHVlKVxufSlcblxuXG5jb25zdCBvbkNsaWNrID0gKCkgPT4ge1xuICAgIGlmKHByb2R1Y3RJbkFkZGluZ0ZpZWxkLnZhbHVlKXtcbiAgICAgICAgcmV0dXJuIGVtaXQoJ3VwZGF0ZTphZGRpbmdGaWVsZCcsIG51bGwpXG4gICAgfVxuXG4gICAgZW1pdCgndXBkYXRlOmFkZGluZ0ZpZWxkJywgcHJvZHVjdC52YWx1ZSlcbn1cblxuXG5cbmNvbnN0IHN0b3JlID0gdXNlVnVleCgpXG5cbmNvbnN0IHsgcGFnZSB9ID0gdXNlUGFnZVNldHRpbmdzKHN0b3JlKVxuXG5jb25zdCB7IGFwcCB9ID0gdXNlQXBwU2V0dGluZ3Moc3RvcmUpXG5cblxuXG5jb25zdCBfX3JldHVybmVkX18gPSB7IHByb3BzLCBhZGRpbmdGaWVsZCwgcHJvZHVjdCwgZW1pdCwgcHJvZHVjdEluQWRkaW5nRmllbGQsIG9uQ2xpY2ssIHN0b3JlLCBwYWdlLCBhcHAgfVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KF9fcmV0dXJuZWRfXywgJ19faXNTY3JpcHRTZXR1cCcsIHsgZW51bWVyYWJsZTogZmFsc2UsIHZhbHVlOiB0cnVlIH0pXG5yZXR1cm4gX19yZXR1cm5lZF9fXG59XG5cbn0pIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJjYXJ0LWJ1dHRvblwiPlxuICAgICAgICA8YnV0dG9uIEBjbGljaz1cIm9uQ2xpY2tcIiBjbGFzcz1cImJ1dHRvbiBjYXJ0LWJ1dHRvbl9fYnV0dG9uXCI+e3sgcHJvZHVjdEluQWRkaW5nRmllbGQgPyAn0KPQsdGA0LDRgtGMJyA6ICfQlNC+0LHQsNCy0LjRgtGMJyB9fTwvYnV0dG9uPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IHVzZUFwcFNldHRpbmdzIH0gZnJvbSAnQC9ob29rcy9BcHAvdXNlQXBwU2V0dGluZ3MnO1xuaW1wb3J0IHsgdXNlUGFnZVNldHRpbmdzIH0gZnJvbSAnQC9ob29rcy9BcHAvdXNlUGFnZVNldHRpbmdzJztcbmltcG9ydCB7IHVzZVZ1ZXggfSBmcm9tICdAL3N0b3JlL3VzZVZ1ZXgnO1xuaW1wb3J0IHsgSVByb2R1Y3QgfSBmcm9tICdAL3R5cGVzL1Byb2R1Y3QnO1xuaW1wb3J0IGRlZXBFcXVhbCBmcm9tICdkZWVwLWVxdWFsJztcbmltcG9ydCB7IGNvbXB1dGVkLCB0b1JlZnMgfSBmcm9tICd2dWUnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICAgIHByb2R1Y3Q6IElQcm9kdWN0XG4gICAgYWRkaW5nRmllbGQ6IG9iamVjdCB8IG51bGxcbn1cblxuY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wczxQcm9wcz4oKVxuXG5jb25zdCB7IGFkZGluZ0ZpZWxkLCBwcm9kdWN0IH0gPSB0b1JlZnMocHJvcHMpXG5cbmludGVyZmFjZSBFbWl0cyB7XG4gICAgKGU6ICd1cGRhdGU6YWRkaW5nRmllbGQnLCB2YWx1ZTogb2JqZWN0IHwgbnVsbCk6IHZvaWRcbn1cblxuY29uc3QgZW1pdCA9IGRlZmluZUVtaXRzPEVtaXRzPigpXG5cbmNvbnN0IHByb2R1Y3RJbkFkZGluZ0ZpZWxkID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIHJldHVybiBkZWVwRXF1YWwoYWRkaW5nRmllbGQudmFsdWUsIHByb2R1Y3QudmFsdWUpXG59KVxuXG5cbmNvbnN0IG9uQ2xpY2sgPSAoKSA9PiB7XG4gICAgaWYocHJvZHVjdEluQWRkaW5nRmllbGQudmFsdWUpe1xuICAgICAgICByZXR1cm4gZW1pdCgndXBkYXRlOmFkZGluZ0ZpZWxkJywgbnVsbClcbiAgICB9XG5cbiAgICBlbWl0KCd1cGRhdGU6YWRkaW5nRmllbGQnLCBwcm9kdWN0LnZhbHVlKVxufVxuXG5cblxuY29uc3Qgc3RvcmUgPSB1c2VWdWV4KClcblxuY29uc3QgeyBwYWdlIH0gPSB1c2VQYWdlU2V0dGluZ3Moc3RvcmUpXG5cbmNvbnN0IHsgYXBwIH0gPSB1c2VBcHBTZXR0aW5ncyhzdG9yZSlcblxuXG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPjwvc3R5bGU+IiwiaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IGFzIF9kZWZpbmVDb21wb25lbnQgfSBmcm9tICd2dWUnXG5pbXBvcnQgeyB1c2VBcHBTZXR0aW5ncyB9IGZyb20gJ0AvaG9va3MvQXBwL3VzZUFwcFNldHRpbmdzJztcbmltcG9ydCB7IHVzZVZ1ZXggfSBmcm9tICdAL3N0b3JlL3VzZVZ1ZXgnO1xuaW1wb3J0IHsgSUdyb3VwcGVkUHJvZHVjdCwgSVByb2R1Y3QgfSBmcm9tICdAL3R5cGVzL1Byb2R1Y3QnO1xuaW1wb3J0IHsgdG9SZWZzLCB3YXRjaCB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgQ2FydEJ1dHRvbkVhc2x5IGZyb20gJy4vQ2FydEJ1dHRvbkVhc2x5LnZ1ZSc7XG5pbXBvcnQgeyB1c2VTcGVjRGlhbG9nIH0gZnJvbSAnQC9ob29rcy9BcHAvdXNlU3BlY0RpYWxvZyc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gICAgcHJvZHVjdDogSVByb2R1Y3RcbiAgICBhZGRpbmdGaWVsZDogb2JqZWN0IHwgbnVsbFxufVxuaW50ZXJmYWNlIEVtaXRze1xuICAgIChlOiAndXBkYXRlOmFkZGluZ0ZpZWxkJywgdmFsdWU6IG9iamVjdCk6IHZvaWRcbn1cblxuXG5leHBvcnQgZGVmYXVsdCAvKiNfX1BVUkVfXyovX2RlZmluZUNvbXBvbmVudCh7XG4gIF9fbmFtZTogJ0dvb2RJdGVtJyxcbiAgcHJvcHM6IHtcbiAgICBwcm9kdWN0OiB7IHR5cGU6IE9iamVjdCwgcmVxdWlyZWQ6IHRydWUgfSxcbiAgICBhZGRpbmdGaWVsZDogeyB0eXBlOiBbT2JqZWN0LCBudWxsXSwgcmVxdWlyZWQ6IHRydWUgfVxuICB9LFxuICBlbWl0czogW1widXBkYXRlOmFkZGluZ0ZpZWxkXCJdLFxuICBzZXR1cChfX3Byb3BzOiBhbnksIHsgZXhwb3NlOiBfX2V4cG9zZSwgZW1pdDogX19lbWl0IH0pIHtcbiAgX19leHBvc2UoKTtcblxuY29uc3QgcHJvcHMgPSBfX3Byb3BzXG5cbmNvbnN0IHsgYWRkaW5nRmllbGQsIHByb2R1Y3QgfSA9IHRvUmVmcyhwcm9wcylcblxuY29uc3QgZW1pdCA9IF9fZW1pdFxuXG5sZXQgc3RvcmUgPSB1c2VWdWV4KCk7XG5cbmNvbnN0IHsgc3BlY0RpYWxvZyB9ID0gdXNlU3BlY0RpYWxvZyhzdG9yZSlcblxuY29uc3Qgb25DbGljayA9ICgpID0+IHtcbiAgICBzcGVjRGlhbG9nLnZhbHVlLm9wZW4ocHJvZHVjdC52YWx1ZSlcbn1cblxuXG5jb25zdCB7IGFwcCB9ID0gdXNlQXBwU2V0dGluZ3Moc3RvcmUpXG5cblxuY29uc3QgX19yZXR1cm5lZF9fID0geyBwcm9wcywgYWRkaW5nRmllbGQsIHByb2R1Y3QsIGVtaXQsIGdldCBzdG9yZSgpIHsgcmV0dXJuIHN0b3JlIH0sIHNldCBzdG9yZSh2KSB7IHN0b3JlID0gdiB9LCBzcGVjRGlhbG9nLCBvbkNsaWNrLCBhcHAsIENhcnRCdXR0b25FYXNseSB9XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoX19yZXR1cm5lZF9fLCAnX19pc1NjcmlwdFNldHVwJywgeyBlbnVtZXJhYmxlOiBmYWxzZSwgdmFsdWU6IHRydWUgfSlcbnJldHVybiBfX3JldHVybmVkX19cbn1cblxufSkiLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImdvb2QtaXRlbVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ29vZC1pdGVtX19pbWFnZS1ib3hcIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJnb29kLWl0ZW1fX2ltYWdlXCIgOnNyYz1cInByb2R1Y3QuaW1hZ2VzWzBdLnNyY1wiIDphbHQ9XCJwcm9kdWN0Lm5hbWVcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJnb29kLWl0ZW0tY29udGVudFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdvb2QtaXRlbS1jb250ZW50X19kZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZ29vZC1pdGVtLWNvbnRlbnRfX3RpdGxlXCI+e3sgcHJvZHVjdC5uYW1lIH19PC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZ29vZC1pdGVtLWNvbnRlbnRfX3ByaWNlXCI+e3sgcHJvZHVjdC5wcmljZSB9fSDRgNGD0LEgLyDRiNGCPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ29vZC1pdGVtLWNvbnRlbnRfX3F1YW50aXR5LWJveFwiPlxuICAgICAgICAgICAgICAgIDxDYXJ0QnV0dG9uRWFzbHlcbiAgICAgICAgICAgICAgICA6cHJvZHVjdD1cInByb2R1Y3RcIlxuICAgICAgICAgICAgICAgIDphZGRpbmctZmllbGQ9XCJhZGRpbmdGaWVsZFwiXG4gICAgICAgICAgICAgICAgQHVwZGF0ZTphZGRpbmctZmllbGQ9XCJlbWl0KCd1cGRhdGU6YWRkaW5nRmllbGQnLCAkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IHVzZUFwcFNldHRpbmdzIH0gZnJvbSAnQC9ob29rcy9BcHAvdXNlQXBwU2V0dGluZ3MnO1xuaW1wb3J0IHsgdXNlVnVleCB9IGZyb20gJ0Avc3RvcmUvdXNlVnVleCc7XG5pbXBvcnQgeyBJR3JvdXBwZWRQcm9kdWN0LCBJUHJvZHVjdCB9IGZyb20gJ0AvdHlwZXMvUHJvZHVjdCc7XG5pbXBvcnQgeyB0b1JlZnMsIHdhdGNoIH0gZnJvbSAndnVlJztcbmltcG9ydCBDYXJ0QnV0dG9uRWFzbHkgZnJvbSAnLi9DYXJ0QnV0dG9uRWFzbHkudnVlJztcbmltcG9ydCB7IHVzZVNwZWNEaWFsb2cgfSBmcm9tICdAL2hvb2tzL0FwcC91c2VTcGVjRGlhbG9nJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgICBwcm9kdWN0OiBJUHJvZHVjdFxuICAgIGFkZGluZ0ZpZWxkOiBvYmplY3QgfCBudWxsXG59XG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzPFByb3BzPigpXG5cbmNvbnN0IHsgYWRkaW5nRmllbGQsIHByb2R1Y3QgfSA9IHRvUmVmcyhwcm9wcylcblxuaW50ZXJmYWNlIEVtaXRze1xuICAgIChlOiAndXBkYXRlOmFkZGluZ0ZpZWxkJywgdmFsdWU6IG9iamVjdCk6IHZvaWRcbn1cblxuY29uc3QgZW1pdCA9IGRlZmluZUVtaXRzPEVtaXRzPigpXG5cbmxldCBzdG9yZSA9IHVzZVZ1ZXgoKTtcblxuY29uc3QgeyBzcGVjRGlhbG9nIH0gPSB1c2VTcGVjRGlhbG9nKHN0b3JlKVxuXG5jb25zdCBvbkNsaWNrID0gKCkgPT4ge1xuICAgIHNwZWNEaWFsb2cudmFsdWUub3Blbihwcm9kdWN0LnZhbHVlKVxufVxuXG5cbmNvbnN0IHsgYXBwIH0gPSB1c2VBcHBTZXR0aW5ncyhzdG9yZSlcblxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cbi5nb29kLWl0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDMwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTdweCAzNHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxODE4MTg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuXG4gICAgJl9faW1hZ2Uge1xuICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICBoZWlnaHQ6IDkwJTtcbiAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICB9XG5cbiAgICAmX19pbWFnZS1ib3gge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICBoZWlnaHQ6IDEzMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIH1cbn1cblxuLmdvb2QtaXRlbS1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgZ2FwOiAzMHB4O1xuXG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICAmX19kZXNjcmlwdGlvbiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGdhcDogMTBweDtcbiAgICB9XG5cbiAgICAmX190aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9XG5cbiAgICAmX19wcmljZSB7fVxuXG5cbiAgICAmX19xdWFudGl0eS1ib3gge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBnYXA6IDEzcHg7XG4gICAgfVxuXG4gICAgJl9fc3VtIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9XG59XG48L3N0eWxlPiIsImltcG9ydCB7IGRlZmluZUNvbXBvbmVudCBhcyBfZGVmaW5lQ29tcG9uZW50IH0gZnJvbSAndnVlJ1xuaW1wb3J0IHsgUmVmLCBjb21wdXRlZCwgb25Nb3VudGVkLCByZWYsIHdhdGNoIH0gZnJvbSAndnVlJztcbmltcG9ydCBXT08gZnJvbSAnQC9heGlvc1dvb2NvbWVyY2UnXG5pbXBvcnQgeyBJUHJvZHVjdCwgSVByb2R1Y3RDYXRlZ29yeVJlc3BvbnNlIH0gZnJvbSAnQC90eXBlcy9Qcm9kdWN0JztcblxuaW1wb3J0IFN3aXBlciBmcm9tICdzd2lwZXInO1xuaW1wb3J0ICdzd2lwZXIvY3NzJztcbmltcG9ydCBHb29kSXRlbSBmcm9tICdAL2NvbXBvbmVudHMvR29vZEl0ZW0udnVlJztcbmltcG9ydCBDdXN0b21TZWxlY3QgZnJvbSAnQC9jb21wb25lbnRzL0N1c3RvbVNlbGVjdC52dWUnO1xuXG5pbnRlcmZhY2UgSUNvbmZpZ3VyZVByb2R1Y3Qge1xuICAgIGNwdTogb2JqZWN0IHwgbnVsbDtcbiAgICBncHU6IG9iamVjdCB8IG51bGw7XG4gICAgcmFtOiBvYmplY3QgfCBudWxsO1xuICAgIG1vdGhlcmJvYXJkOiBvYmplY3QgfCBudWxsO1xuICAgIHNzZDogb2JqZWN0IHwgbnVsbDtcbiAgICBoZGQ6IG9iamVjdCB8IG51bGw7XG4gICAgY2FzZTogb2JqZWN0IHwgbnVsbDtcbiAgICBwYjogb2JqZWN0IHwgbnVsbDtcbiAgICBwY19mYW46IG9iamVjdCB8IG51bGw7XG4gICAgY3B1X2Nvb2xlcjogb2JqZWN0IHwgbnVsbDtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCAvKiNfX1BVUkVfXyovX2RlZmluZUNvbXBvbmVudCh7XG4gIF9fbmFtZTogJ2ZpcnN0LXNlY3Rpb24nLFxuICBzZXR1cChfX3Byb3BzLCB7IGV4cG9zZTogX19leHBvc2UgfSkge1xuICBfX2V4cG9zZSgpO1xuXG5sZXQgc3dpcGVyOiBSZWY8U3dpcGVyIHwgbnVsbD4gPSByZWYobnVsbClcblxuY29uc3Qgc3dpcGVyQ29udGFpbmVyOiBSZWY8SFRNTEVsZW1lbnQgfCBudWxsPiA9IHJlZihudWxsKVxuXG5jb25zdCBpbml0aWFsaXplU3dpcGVyID0gKCkgPT4ge1xuICAgIHN3aXBlci52YWx1ZSA9IG5ldyBTd2lwZXIoc3dpcGVyQ29udGFpbmVyLnZhbHVlLCB7XG4gICAgICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcbiAgICB9KTtcbn1cblxuXG5cbmNvbnN0IHN3aXBlclByZXYgPSAoKSA9PiB7XG4gICAgc3dpcGVyLnZhbHVlLnNsaWRlUHJldigpO1xufVxuY29uc3Qgc3dpcGVyTmV4dCA9ICgpID0+IHtcbiAgICBzd2lwZXIudmFsdWUuc2xpZGVOZXh0KCk7XG59XG5cbmNvbnN0IGNhdGVnb3JpZXM6IFJlZjxBcnJheTxJUHJvZHVjdENhdGVnb3J5UmVzcG9uc2U+PiA9IHJlZihbXSlcblxuY29uc3QgY2hvb3NlbkNhdGVnb3J5OiBSZWY8SVByb2R1Y3RDYXRlZ29yeVJlc3BvbnNlIHwgbnVsbD4gPSByZWYobnVsbClcblxuY29uc3QgdXBkYXRlQ2hvb3NlbkNhdGVnb3J5ID0gKGNhdGVnb3J5OiBJUHJvZHVjdENhdGVnb3J5UmVzcG9uc2UpID0+IHtcbiAgICBjaG9vc2VuQ2F0ZWdvcnkudmFsdWUgPSBjYXRlZ29yeVxufVxuXG5jb25zdCBnZXRDYXRlZ29yaWVzID0gYXN5bmMgKCkgPT4ge1xuICAgIGxldCByZXNwb25zZSA9IGF3YWl0IFdPTy5nZXQoJy9wcm9kdWN0cy9jYXRlZ29yaWVzJywge1xuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgIHBlcl9wYWdlOiAxMDAsXG4gICAgICAgICAgICBwYXJlbnQ6IDE5LFxuICAgICAgICAgICAgb3JkZXI6ICdkZXNjJyxcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbn1cblxuY29uc3QgcHJvZHVjdHM6IFJlZjxBcnJheTxJUHJvZHVjdD4+ID0gcmVmKFtdKVxuXG5jb25zdCBnZXRQcm9kdWN0cyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IFdPTy5nZXQoYHByb2R1Y3RzP2NhdGVnb3J5PSR7Y2hvb3NlbkNhdGVnb3J5LnZhbHVlLmlkfWApXG5cbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YVxufVxuXG53YXRjaChjaG9vc2VuQ2F0ZWdvcnksIGFzeW5jICgpID0+IHtcbiAgICBpZiAoY2hvb3NlbkNhdGVnb3J5KSB7XG4gICAgICAgIHByb2R1Y3RzLnZhbHVlID0gYXdhaXQgZ2V0UHJvZHVjdHMoKVxuICAgIH1cbn0sIHsgZGVlcDogdHJ1ZSB9KVxuXG5cbmNvbnN0IENvbmZpZ3VyZVByb2R1Y3Q6IFJlZjxJQ29uZmlndXJlUHJvZHVjdD4gPSByZWYoe1xuICAgIGNwdTogbnVsbCxcbiAgICBncHU6IG51bGwsXG4gICAgcmFtOiBudWxsLFxuICAgIG1vdGhlcmJvYXJkOiBudWxsLFxuICAgIHNzZDogbnVsbCxcbiAgICBoZGQ6IG51bGwsXG4gICAgY2FzZTogbnVsbCxcbiAgICBwYjogbnVsbCxcbiAgICBwY19mYW46IG51bGwsXG4gICAgY3B1X2Nvb2xlcjogbnVsbCxcbn0pXG5cbm9uTW91bnRlZChhc3luYyAoKSA9PiB7XG4gICAgY2F0ZWdvcmllcy52YWx1ZSA9IGF3YWl0IGdldENhdGVnb3JpZXMoKVxuXG4gICAgY2hvb3NlbkNhdGVnb3J5LnZhbHVlID0gY2F0ZWdvcmllcy52YWx1ZVswXVxuXG4gICAgaW5pdGlhbGl6ZVN3aXBlcigpXG59KVxuXG5cbmNvbnN0IF9fcmV0dXJuZWRfXyA9IHsgZ2V0IHN3aXBlcigpIHsgcmV0dXJuIHN3aXBlciB9LCBzZXQgc3dpcGVyKHYpIHsgc3dpcGVyID0gdiB9LCBzd2lwZXJDb250YWluZXIsIGluaXRpYWxpemVTd2lwZXIsIHN3aXBlclByZXYsIHN3aXBlck5leHQsIGNhdGVnb3JpZXMsIGNob29zZW5DYXRlZ29yeSwgdXBkYXRlQ2hvb3NlbkNhdGVnb3J5LCBnZXRDYXRlZ29yaWVzLCBwcm9kdWN0cywgZ2V0UHJvZHVjdHMsIENvbmZpZ3VyZVByb2R1Y3QsIEdvb2RJdGVtIH1cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShfX3JldHVybmVkX18sICdfX2lzU2NyaXB0U2V0dXAnLCB7IGVudW1lcmFibGU6IGZhbHNlLCB2YWx1ZTogdHJ1ZSB9KVxucmV0dXJuIF9fcmV0dXJuZWRfX1xufVxuXG59KSIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwiZmlyc3Qtc2VjdGlvbi13cmFwcGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmaXJzdC1zZWN0aW9uXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlyc3Qtc2VjdGlvbi1jb250YWluZXIgY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzPVwiZmlyc3Qtc2VjdGlvbl9fdGl0bGUgdGl0bGVcIj7QmtC+0L3RhNC40LPRg9GA0LDRgtC+0YA8L2gxPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaXJzdC1zZWN0aW9uLXNsaWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHJlZj1cInN3aXBlckNvbnRhaW5lclwiIGNsYXNzPVwic3dpcGVyLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN3aXBlci13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBAY2xpY2s9XCJ1cGRhdGVDaG9vc2VuQ2F0ZWdvcnkoY2F0ZWdvcnkpXCIgdi1mb3I9XCJjYXRlZ29yeSBpbiBjYXRlZ29yaWVzXCIgOmtleT1cImNhdGVnb3J5LmlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJzd2lwZXItc2xpZGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyB2LWlmPVwiY2F0ZWdvcnkuaW1hZ2VcIiA6c3JjPVwiY2F0ZWdvcnkuaW1hZ2Uuc3JjXCIgOmFsdD1cImNhdGVnb3J5LmltYWdlLm5hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3sgY2F0ZWdvcnkubmFtZSB9fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlyc3Qtc2VjdGlvbi1wcm9kdWN0cy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpcnN0LXNlY3Rpb24tZ29vZHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHb29kSXRlbSB2LWZvcj1cInByb2R1Y3QgaW4gcHJvZHVjdHNcIiA6a2V5PVwicHJvZHVjdC5pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsOmFkZGluZy1maWVsZD1cIkNvbmZpZ3VyZVByb2R1Y3RbY2hvb3NlbkNhdGVnb3J5LnNsdWddXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpwcm9kdWN0PVwicHJvZHVjdFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlyc3Qtc2VjdGlvbi1maWx0ZXJzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIDxDdXN0b21TZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLz4gLS0+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IFJlZiwgY29tcHV0ZWQsIG9uTW91bnRlZCwgcmVmLCB3YXRjaCB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgV09PIGZyb20gJ0AvYXhpb3NXb29jb21lcmNlJ1xuaW1wb3J0IHsgSVByb2R1Y3QsIElQcm9kdWN0Q2F0ZWdvcnlSZXNwb25zZSB9IGZyb20gJ0AvdHlwZXMvUHJvZHVjdCc7XG5cbmltcG9ydCBTd2lwZXIgZnJvbSAnc3dpcGVyJztcbmltcG9ydCAnc3dpcGVyL2Nzcyc7XG5pbXBvcnQgR29vZEl0ZW0gZnJvbSAnQC9jb21wb25lbnRzL0dvb2RJdGVtLnZ1ZSc7XG5pbXBvcnQgQ3VzdG9tU2VsZWN0IGZyb20gJ0AvY29tcG9uZW50cy9DdXN0b21TZWxlY3QudnVlJztcblxubGV0IHN3aXBlcjogUmVmPFN3aXBlciB8IG51bGw+ID0gcmVmKG51bGwpXG5cbmNvbnN0IHN3aXBlckNvbnRhaW5lcjogUmVmPEhUTUxFbGVtZW50IHwgbnVsbD4gPSByZWYobnVsbClcblxuY29uc3QgaW5pdGlhbGl6ZVN3aXBlciA9ICgpID0+IHtcbiAgICBzd2lwZXIudmFsdWUgPSBuZXcgU3dpcGVyKHN3aXBlckNvbnRhaW5lci52YWx1ZSwge1xuICAgICAgICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMzAsXG4gICAgfSk7XG59XG5cblxuXG5jb25zdCBzd2lwZXJQcmV2ID0gKCkgPT4ge1xuICAgIHN3aXBlci52YWx1ZS5zbGlkZVByZXYoKTtcbn1cbmNvbnN0IHN3aXBlck5leHQgPSAoKSA9PiB7XG4gICAgc3dpcGVyLnZhbHVlLnNsaWRlTmV4dCgpO1xufVxuXG5jb25zdCBjYXRlZ29yaWVzOiBSZWY8QXJyYXk8SVByb2R1Y3RDYXRlZ29yeVJlc3BvbnNlPj4gPSByZWYoW10pXG5cbmNvbnN0IGNob29zZW5DYXRlZ29yeTogUmVmPElQcm9kdWN0Q2F0ZWdvcnlSZXNwb25zZSB8IG51bGw+ID0gcmVmKG51bGwpXG5cbmNvbnN0IHVwZGF0ZUNob29zZW5DYXRlZ29yeSA9IChjYXRlZ29yeTogSVByb2R1Y3RDYXRlZ29yeVJlc3BvbnNlKSA9PiB7XG4gICAgY2hvb3NlbkNhdGVnb3J5LnZhbHVlID0gY2F0ZWdvcnlcbn1cblxuY29uc3QgZ2V0Q2F0ZWdvcmllcyA9IGFzeW5jICgpID0+IHtcbiAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBXT08uZ2V0KCcvcHJvZHVjdHMvY2F0ZWdvcmllcycsIHtcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICBwZXJfcGFnZTogMTAwLFxuICAgICAgICAgICAgcGFyZW50OiAxOSxcbiAgICAgICAgICAgIG9yZGVyOiAnZGVzYycsXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG59XG5cbmNvbnN0IHByb2R1Y3RzOiBSZWY8QXJyYXk8SVByb2R1Y3Q+PiA9IHJlZihbXSlcblxuY29uc3QgZ2V0UHJvZHVjdHMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBXT08uZ2V0KGBwcm9kdWN0cz9jYXRlZ29yeT0ke2Nob29zZW5DYXRlZ29yeS52YWx1ZS5pZH1gKVxuXG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGFcbn1cblxud2F0Y2goY2hvb3NlbkNhdGVnb3J5LCBhc3luYyAoKSA9PiB7XG4gICAgaWYgKGNob29zZW5DYXRlZ29yeSkge1xuICAgICAgICBwcm9kdWN0cy52YWx1ZSA9IGF3YWl0IGdldFByb2R1Y3RzKClcbiAgICB9XG59LCB7IGRlZXA6IHRydWUgfSlcblxuXG5pbnRlcmZhY2UgSUNvbmZpZ3VyZVByb2R1Y3Qge1xuICAgIGNwdTogb2JqZWN0IHwgbnVsbDtcbiAgICBncHU6IG9iamVjdCB8IG51bGw7XG4gICAgcmFtOiBvYmplY3QgfCBudWxsO1xuICAgIG1vdGhlcmJvYXJkOiBvYmplY3QgfCBudWxsO1xuICAgIHNzZDogb2JqZWN0IHwgbnVsbDtcbiAgICBoZGQ6IG9iamVjdCB8IG51bGw7XG4gICAgY2FzZTogb2JqZWN0IHwgbnVsbDtcbiAgICBwYjogb2JqZWN0IHwgbnVsbDtcbiAgICBwY19mYW46IG9iamVjdCB8IG51bGw7XG4gICAgY3B1X2Nvb2xlcjogb2JqZWN0IHwgbnVsbDtcbn1cblxuY29uc3QgQ29uZmlndXJlUHJvZHVjdDogUmVmPElDb25maWd1cmVQcm9kdWN0PiA9IHJlZih7XG4gICAgY3B1OiBudWxsLFxuICAgIGdwdTogbnVsbCxcbiAgICByYW06IG51bGwsXG4gICAgbW90aGVyYm9hcmQ6IG51bGwsXG4gICAgc3NkOiBudWxsLFxuICAgIGhkZDogbnVsbCxcbiAgICBjYXNlOiBudWxsLFxuICAgIHBiOiBudWxsLFxuICAgIHBjX2ZhbjogbnVsbCxcbiAgICBjcHVfY29vbGVyOiBudWxsLFxufSlcblxub25Nb3VudGVkKGFzeW5jICgpID0+IHtcbiAgICBjYXRlZ29yaWVzLnZhbHVlID0gYXdhaXQgZ2V0Q2F0ZWdvcmllcygpXG5cbiAgICBjaG9vc2VuQ2F0ZWdvcnkudmFsdWUgPSBjYXRlZ29yaWVzLnZhbHVlWzBdXG5cbiAgICBpbml0aWFsaXplU3dpcGVyKClcbn0pXG5cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XG4uZmlyc3Qtc2VjdGlvbi1jb250YWluZXIge31cblxuLmZpcnN0LXNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IDEyMHB4IDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTksIDE5LCAxOSk7XG5cbiAgICAmX190aXRsZSB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogODBweDtcbiAgICB9XG59XG5cbi5maXJzdC1zZWN0aW9uLXNsaWRlciB7XG4gICAgbWFyZ2luLWJvdHRvbTogNjBweDtcbn1cblxuLnN3aXBlci1jb250YWluZXIge1xuXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG5cbi5maXJzdC1zZWN0aW9uLXdyYXBwZXJ7XG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xufVxuLnN3aXBlci13cmFwcGVyIHtcbiAgICAvLyBkaXNwbGF5OiBmbGV4O1xuICAgIC8vIGdhcDogMzBweDtcbiAgICAvLyB3aWR0aDogMTAwJTtcbn1cblxuLnN3aXBlci1zbGlkZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBnYXA6IDE1cHg7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0LCAyNCwgMjQpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nOiAxNXB4O1xuXG4gICAgaW1nIHtcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxufVxuXG4uZmlyc3Qtc2VjdGlvbi1wcm9kdWN0cy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1ZnIgMmZyO1xuICAgIGdhcDogNDBweDtcbn1cblxuLmZpcnN0LXNlY3Rpb24tZ29vZHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDEwcHg7XG59XG5cbi5maXJzdC1zZWN0aW9uLWZpbHRlcnMge1xuICAgIHBhZGRpbmc6IDE1cHggMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQsIDI0LCAyNCk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDZweDtcbn1cbjwvc3R5bGU+IiwiaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IGFzIF9kZWZpbmVDb21wb25lbnQgfSBmcm9tICd2dWUnXG5pbXBvcnQgRmlyc3RTZWN0aW9uIGZyb20gJ0Avc2VjdGlvbnMvY29uZmlndXJhdG9yL2ZpcnN0LXNlY3Rpb24udnVlJ1xuaW1wb3J0IHsgZ2V0UGFnZVNldHRpbmdzIH0gZnJvbSAnQC9hcGkvQXBwL2dldFBhZ2VTZXR0aW5ncyc7XG5pbXBvcnQgeyB1c2VMb2FkIH0gZnJvbSAnQC9ob29rcy9BcHAvdXNlTG9hZCc7XG5pbXBvcnQgeyB1c2VQYWdlU2V0dGluZ3MgfSBmcm9tICdAL2hvb2tzL0FwcC91c2VQYWdlU2V0dGluZ3MnO1xuaW1wb3J0IHN0b3JlIGZyb20gJ0Avc3RvcmUnO1xuaW1wb3J0IHsgb25Nb3VudGVkLCByZWYgfSBmcm9tICd2dWUnO1xuXG5kZWNsYXJlIHZhciBwcmVsb2FkZXJDbG9zZTogKCkgPT4gdm9pZDtcblxuXG5leHBvcnQgZGVmYXVsdCAvKiNfX1BVUkVfXyovX2RlZmluZUNvbXBvbmVudCh7XG4gIF9fbmFtZTogJ2NvbmZpZ3VyYXRvcicsXG4gIHNldHVwKF9fcHJvcHMsIHsgZXhwb3NlOiBfX2V4cG9zZSB9KSB7XG4gIF9fZXhwb3NlKCk7XG5cbmNvbnN0IGlzUGFnZURhdGFMb2FkZWQgPSByZWYoZmFsc2UpXG5cbmxldCB7IGxvYWRlciB9ID0gdXNlTG9hZCgyKVxuXG5sb2FkZXIudmFsdWUub25BbGxpc0xvYWRlZCA9ICgpID0+IHtcbiAgICBwcmVsb2FkZXJDbG9zZSgpXG4gICAgbG9hZGVyLnZhbHVlLnJlc3RhcnQoKVxufVxuXG5cbmxldCB7IHBhZ2UgfSA9IHVzZVBhZ2VTZXR0aW5ncyhzdG9yZSlcblxub25Nb3VudGVkKGFzeW5jICgpID0+IHtcbiAgICBwYWdlLnZhbHVlID0gYXdhaXQgZ2V0UGFnZVNldHRpbmdzKDMzMSlcblxuICAgIGlzUGFnZURhdGFMb2FkZWQudmFsdWUgPSB0cnVlXG5cbiAgICBwcmVsb2FkZXJDbG9zZSgpXG59KVxuXG5cbmNvbnN0IF9fcmV0dXJuZWRfXyA9IHsgaXNQYWdlRGF0YUxvYWRlZCwgZ2V0IGxvYWRlcigpIHsgcmV0dXJuIGxvYWRlciB9LCBzZXQgbG9hZGVyKHYpIHsgbG9hZGVyID0gdiB9LCBnZXQgcGFnZSgpIHsgcmV0dXJuIHBhZ2UgfSwgc2V0IHBhZ2UodikgeyBwYWdlID0gdiB9LCBGaXJzdFNlY3Rpb24gfVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KF9fcmV0dXJuZWRfXywgJ19faXNTY3JpcHRTZXR1cCcsIHsgZW51bWVyYWJsZTogZmFsc2UsIHZhbHVlOiB0cnVlIH0pXG5yZXR1cm4gX19yZXR1cm5lZF9fXG59XG5cbn0pIiwiPHRlbXBsYXRlPlxuICAgIDxtYWluIHYtaWY9XCJpc1BhZ2VEYXRhTG9hZGVkXCI+XG4gICAgICAgIDxGaXJzdFNlY3Rpb24vPlxuICAgIDwvbWFpbj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgRmlyc3RTZWN0aW9uIGZyb20gJ0Avc2VjdGlvbnMvY29uZmlndXJhdG9yL2ZpcnN0LXNlY3Rpb24udnVlJ1xuaW1wb3J0IHsgZ2V0UGFnZVNldHRpbmdzIH0gZnJvbSAnQC9hcGkvQXBwL2dldFBhZ2VTZXR0aW5ncyc7XG5pbXBvcnQgeyB1c2VMb2FkIH0gZnJvbSAnQC9ob29rcy9BcHAvdXNlTG9hZCc7XG5pbXBvcnQgeyB1c2VQYWdlU2V0dGluZ3MgfSBmcm9tICdAL2hvb2tzL0FwcC91c2VQYWdlU2V0dGluZ3MnO1xuaW1wb3J0IHN0b3JlIGZyb20gJ0Avc3RvcmUnO1xuaW1wb3J0IHsgb25Nb3VudGVkLCByZWYgfSBmcm9tICd2dWUnO1xuXG5jb25zdCBpc1BhZ2VEYXRhTG9hZGVkID0gcmVmKGZhbHNlKVxuXG5sZXQgeyBsb2FkZXIgfSA9IHVzZUxvYWQoMilcblxuZGVjbGFyZSB2YXIgcHJlbG9hZGVyQ2xvc2U6ICgpID0+IHZvaWQ7XG5cbmxvYWRlci52YWx1ZS5vbkFsbGlzTG9hZGVkID0gKCkgPT4ge1xuICAgIHByZWxvYWRlckNsb3NlKClcbiAgICBsb2FkZXIudmFsdWUucmVzdGFydCgpXG59XG5cblxubGV0IHsgcGFnZSB9ID0gdXNlUGFnZVNldHRpbmdzKHN0b3JlKVxuXG5vbk1vdW50ZWQoYXN5bmMgKCkgPT4ge1xuICAgIHBhZ2UudmFsdWUgPSBhd2FpdCBnZXRQYWdlU2V0dGluZ3MoMzMxKVxuXG4gICAgaXNQYWdlRGF0YUxvYWRlZC52YWx1ZSA9IHRydWVcblxuICAgIHByZWxvYWRlckNsb3NlKClcbn0pXG5cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+PC9zdHlsZT4iLCJpbXBvcnQgeyB0b0Rpc3BsYXlTdHJpbmcgYXMgX3RvRGlzcGxheVN0cmluZywgY3JlYXRlRWxlbWVudFZOb2RlIGFzIF9jcmVhdGVFbGVtZW50Vk5vZGUsIG9wZW5CbG9jayBhcyBfb3BlbkJsb2NrLCBjcmVhdGVFbGVtZW50QmxvY2sgYXMgX2NyZWF0ZUVsZW1lbnRCbG9jayB9IGZyb20gXCJ2dWVcIlxuXG5jb25zdCBfaG9pc3RlZF8xID0geyBjbGFzczogXCJjYXJ0LWJ1dHRvblwiIH1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihfY3R4OiBhbnksX2NhY2hlOiBhbnksJHByb3BzOiBhbnksJHNldHVwOiBhbnksJGRhdGE6IGFueSwkb3B0aW9uczogYW55KSB7XG4gIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwiZGl2XCIsIF9ob2lzdGVkXzEsIFtcbiAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiYnV0dG9uXCIsIHtcbiAgICAgIG9uQ2xpY2s6ICRzZXR1cC5vbkNsaWNrLFxuICAgICAgY2xhc3M6IFwiYnV0dG9uIGNhcnQtYnV0dG9uX19idXR0b25cIlxuICAgIH0sIF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLnByb2R1Y3RJbkFkZGluZ0ZpZWxkID8gJ9Cj0LHRgNCw0YLRjCcgOiAn0JTQvtCx0LDQstC40YLRjCcpLCAxIC8qIFRFWFQgKi8pXG4gIF0pKVxufSIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnRWTm9kZSBhcyBfY3JlYXRlRWxlbWVudFZOb2RlLCB0b0Rpc3BsYXlTdHJpbmcgYXMgX3RvRGlzcGxheVN0cmluZywgY3JlYXRlVk5vZGUgYXMgX2NyZWF0ZVZOb2RlLCBvcGVuQmxvY2sgYXMgX29wZW5CbG9jaywgY3JlYXRlRWxlbWVudEJsb2NrIGFzIF9jcmVhdGVFbGVtZW50QmxvY2ssIHB1c2hTY29wZUlkIGFzIF9wdXNoU2NvcGVJZCwgcG9wU2NvcGVJZCBhcyBfcG9wU2NvcGVJZCB9IGZyb20gXCJ2dWVcIlxuXG5jb25zdCBfd2l0aFNjb3BlSWQgPSBuID0+IChfcHVzaFNjb3BlSWQoXCJkYXRhLXYtMWZkZTljYzBcIiksbj1uKCksX3BvcFNjb3BlSWQoKSxuKVxuY29uc3QgX2hvaXN0ZWRfMSA9IHsgY2xhc3M6IFwiZ29vZC1pdGVtXCIgfVxuY29uc3QgX2hvaXN0ZWRfMiA9IHsgY2xhc3M6IFwiZ29vZC1pdGVtX19pbWFnZS1ib3hcIiB9XG5jb25zdCBfaG9pc3RlZF8zID0gW1wic3JjXCIsIFwiYWx0XCJdXG5jb25zdCBfaG9pc3RlZF80ID0geyBjbGFzczogXCJnb29kLWl0ZW0tY29udGVudFwiIH1cbmNvbnN0IF9ob2lzdGVkXzUgPSB7IGNsYXNzOiBcImdvb2QtaXRlbS1jb250ZW50X19kZXNjcmlwdGlvblwiIH1cbmNvbnN0IF9ob2lzdGVkXzYgPSB7IGNsYXNzOiBcImdvb2QtaXRlbS1jb250ZW50X190aXRsZVwiIH1cbmNvbnN0IF9ob2lzdGVkXzcgPSB7IGNsYXNzOiBcImdvb2QtaXRlbS1jb250ZW50X19wcmljZVwiIH1cbmNvbnN0IF9ob2lzdGVkXzggPSB7IGNsYXNzOiBcImdvb2QtaXRlbS1jb250ZW50X19xdWFudGl0eS1ib3hcIiB9XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eDogYW55LF9jYWNoZTogYW55LCRwcm9wczogYW55LCRzZXR1cDogYW55LCRkYXRhOiBhbnksJG9wdGlvbnM6IGFueSkge1xuICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcImRpdlwiLCBfaG9pc3RlZF8xLCBbXG4gICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF8yLCBbXG4gICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiaW1nXCIsIHtcbiAgICAgICAgY2xhc3M6IFwiZ29vZC1pdGVtX19pbWFnZVwiLFxuICAgICAgICBzcmM6ICRzZXR1cC5wcm9kdWN0LmltYWdlc1swXS5zcmMsXG4gICAgICAgIGFsdDogJHNldHVwLnByb2R1Y3QubmFtZVxuICAgICAgfSwgbnVsbCwgOCAvKiBQUk9QUyAqLywgX2hvaXN0ZWRfMylcbiAgICBdKSxcbiAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzQsIFtcbiAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfNSwgW1xuICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwicFwiLCBfaG9pc3RlZF82LCBfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC5wcm9kdWN0Lm5hbWUpLCAxIC8qIFRFWFQgKi8pLFxuICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwicFwiLCBfaG9pc3RlZF83LCBfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC5wcm9kdWN0LnByaWNlKSArIFwiINGA0YPQsSAvINGI0YJcIiwgMSAvKiBURVhUICovKVxuICAgICAgXSksXG4gICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzgsIFtcbiAgICAgICAgX2NyZWF0ZVZOb2RlKCRzZXR1cFtcIkNhcnRCdXR0b25FYXNseVwiXSwge1xuICAgICAgICAgIHByb2R1Y3Q6ICRzZXR1cC5wcm9kdWN0LFxuICAgICAgICAgIFwiYWRkaW5nLWZpZWxkXCI6ICRzZXR1cC5hZGRpbmdGaWVsZCxcbiAgICAgICAgICBcIm9uVXBkYXRlOmFkZGluZ0ZpZWxkXCI6IF9jYWNoZVswXSB8fCAoX2NhY2hlWzBdID0gKCRldmVudDogYW55KSA9PiAoJHNldHVwLmVtaXQoJ3VwZGF0ZTphZGRpbmdGaWVsZCcsICRldmVudCkpKVxuICAgICAgICB9LCBudWxsLCA4IC8qIFBST1BTICovLCBbXCJwcm9kdWN0XCIsIFwiYWRkaW5nLWZpZWxkXCJdKVxuICAgICAgXSlcbiAgICBdKVxuICBdKSlcbn0iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50Vk5vZGUgYXMgX2NyZWF0ZUVsZW1lbnRWTm9kZSwgcmVuZGVyTGlzdCBhcyBfcmVuZGVyTGlzdCwgRnJhZ21lbnQgYXMgX0ZyYWdtZW50LCBvcGVuQmxvY2sgYXMgX29wZW5CbG9jaywgY3JlYXRlRWxlbWVudEJsb2NrIGFzIF9jcmVhdGVFbGVtZW50QmxvY2ssIGNyZWF0ZUNvbW1lbnRWTm9kZSBhcyBfY3JlYXRlQ29tbWVudFZOb2RlLCB0b0Rpc3BsYXlTdHJpbmcgYXMgX3RvRGlzcGxheVN0cmluZywgY3JlYXRlQmxvY2sgYXMgX2NyZWF0ZUJsb2NrLCBwdXNoU2NvcGVJZCBhcyBfcHVzaFNjb3BlSWQsIHBvcFNjb3BlSWQgYXMgX3BvcFNjb3BlSWQgfSBmcm9tIFwidnVlXCJcblxuY29uc3QgX3dpdGhTY29wZUlkID0gbiA9PiAoX3B1c2hTY29wZUlkKFwiZGF0YS12LTI2Y2FhZmI0XCIpLG49bigpLF9wb3BTY29wZUlkKCksbilcbmNvbnN0IF9ob2lzdGVkXzEgPSB7IGNsYXNzOiBcImZpcnN0LXNlY3Rpb24td3JhcHBlclwiIH1cbmNvbnN0IF9ob2lzdGVkXzIgPSB7IGNsYXNzOiBcImZpcnN0LXNlY3Rpb25cIiB9XG5jb25zdCBfaG9pc3RlZF8zID0geyBjbGFzczogXCJmaXJzdC1zZWN0aW9uLWNvbnRhaW5lciBjb250YWluZXJcIiB9XG5jb25zdCBfaG9pc3RlZF80ID0gLyojX19QVVJFX18qLyBfd2l0aFNjb3BlSWQoKCkgPT4gLyojX19QVVJFX18qL19jcmVhdGVFbGVtZW50Vk5vZGUoXCJoMVwiLCB7IGNsYXNzOiBcImZpcnN0LXNlY3Rpb25fX3RpdGxlIHRpdGxlXCIgfSwgXCLQmtC+0L3RhNC40LPRg9GA0LDRgtC+0YBcIiwgLTEgLyogSE9JU1RFRCAqLykpXG5jb25zdCBfaG9pc3RlZF81ID0geyBjbGFzczogXCJmaXJzdC1zZWN0aW9uLXNsaWRlclwiIH1cbmNvbnN0IF9ob2lzdGVkXzYgPSB7XG4gIHJlZjogXCJzd2lwZXJDb250YWluZXJcIixcbiAgY2xhc3M6IFwic3dpcGVyLWNvbnRhaW5lclwiXG59XG5jb25zdCBfaG9pc3RlZF83ID0geyBjbGFzczogXCJzd2lwZXItd3JhcHBlclwiIH1cbmNvbnN0IF9ob2lzdGVkXzggPSBbXCJvbkNsaWNrXCJdXG5jb25zdCBfaG9pc3RlZF85ID0gW1wic3JjXCIsIFwiYWx0XCJdXG5jb25zdCBfaG9pc3RlZF8xMCA9IHsgY2xhc3M6IFwiZmlyc3Qtc2VjdGlvbi1wcm9kdWN0cy1jb250YWluZXJcIiB9XG5jb25zdCBfaG9pc3RlZF8xMSA9IHsgY2xhc3M6IFwiZmlyc3Qtc2VjdGlvbi1nb29kc1wiIH1cbmNvbnN0IF9ob2lzdGVkXzEyID0gLyojX19QVVJFX18qLyBfd2l0aFNjb3BlSWQoKCkgPT4gLyojX19QVVJFX18qL19jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgeyBjbGFzczogXCJmaXJzdC1zZWN0aW9uLWZpbHRlcnNcIiB9LCBbXG4gIC8qI19fUFVSRV9fKi9fY3JlYXRlQ29tbWVudFZOb2RlKFwiIDxDdXN0b21TZWxlY3RcXG4gICAgICAgICAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgICAgICAgICAvPiBcIilcbl0sIC0xIC8qIEhPSVNURUQgKi8pKVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKF9jdHg6IGFueSxfY2FjaGU6IGFueSwkcHJvcHM6IGFueSwkc2V0dXA6IGFueSwkZGF0YTogYW55LCRvcHRpb25zOiBhbnkpIHtcbiAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJkaXZcIiwgX2hvaXN0ZWRfMSwgW1xuICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfMiwgW1xuICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF8zLCBbXG4gICAgICAgIF9ob2lzdGVkXzQsXG4gICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfNSwgW1xuICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfNiwgW1xuICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF83LCBbXG4gICAgICAgICAgICAgIChfb3BlbkJsb2NrKHRydWUpLCBfY3JlYXRlRWxlbWVudEJsb2NrKF9GcmFnbWVudCwgbnVsbCwgX3JlbmRlckxpc3QoJHNldHVwLmNhdGVnb3JpZXMsIChjYXRlZ29yeSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s6ICgkZXZlbnQ6IGFueSkgPT4gKCRzZXR1cC51cGRhdGVDaG9vc2VuQ2F0ZWdvcnkoY2F0ZWdvcnkpKSxcbiAgICAgICAgICAgICAgICAgIGtleTogY2F0ZWdvcnkuaWQsXG4gICAgICAgICAgICAgICAgICBjbGFzczogXCJzd2lwZXItc2xpZGVcIlxuICAgICAgICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgICAgICAgIChjYXRlZ29yeS5pbWFnZSlcbiAgICAgICAgICAgICAgICAgICAgPyAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogY2F0ZWdvcnkuaW1hZ2Uuc3JjLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiBjYXRlZ29yeS5pbWFnZS5uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgfSwgbnVsbCwgOCAvKiBQUk9QUyAqLywgX2hvaXN0ZWRfOSkpXG4gICAgICAgICAgICAgICAgICAgIDogX2NyZWF0ZUNvbW1lbnRWTm9kZShcInYtaWZcIiwgdHJ1ZSksXG4gICAgICAgICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwicFwiLCBudWxsLCBfdG9EaXNwbGF5U3RyaW5nKGNhdGVnb3J5Lm5hbWUpLCAxIC8qIFRFWFQgKi8pXG4gICAgICAgICAgICAgICAgXSwgOCAvKiBQUk9QUyAqLywgX2hvaXN0ZWRfOCkpXG4gICAgICAgICAgICAgIH0pLCAxMjggLyogS0VZRURfRlJBR01FTlQgKi8pKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdLCA1MTIgLyogTkVFRF9QQVRDSCAqLylcbiAgICAgICAgXSksXG4gICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfMTAsIFtcbiAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzExLCBbXG4gICAgICAgICAgICAoX29wZW5CbG9jayh0cnVlKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhfRnJhZ21lbnQsIG51bGwsIF9yZW5kZXJMaXN0KCRzZXR1cC5wcm9kdWN0cywgKHByb2R1Y3QpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVCbG9jaygkc2V0dXBbXCJHb29kSXRlbVwiXSwge1xuICAgICAgICAgICAgICAgIGtleTogcHJvZHVjdC5pZCxcbiAgICAgICAgICAgICAgICBcImFkZGluZy1maWVsZFwiOiAkc2V0dXAuQ29uZmlndXJlUHJvZHVjdFskc2V0dXAuY2hvb3NlbkNhdGVnb3J5LnNsdWddLFxuICAgICAgICAgICAgICAgIFwib25VcGRhdGU6YWRkaW5nRmllbGRcIjogX2NhY2hlWzBdIHx8IChfY2FjaGVbMF0gPSAoJGV2ZW50OiBhbnkpID0+ICgoJHNldHVwLkNvbmZpZ3VyZVByb2R1Y3RbJHNldHVwLmNob29zZW5DYXRlZ29yeS5zbHVnXSkgPSAkZXZlbnQpKSxcbiAgICAgICAgICAgICAgICBwcm9kdWN0OiBwcm9kdWN0XG4gICAgICAgICAgICAgIH0sIG51bGwsIDggLyogUFJPUFMgKi8sIFtcImFkZGluZy1maWVsZFwiLCBcInByb2R1Y3RcIl0pKVxuICAgICAgICAgICAgfSksIDEyOCAvKiBLRVlFRF9GUkFHTUVOVCAqLykpXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX2hvaXN0ZWRfMTJcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgXSlcbiAgXSkpXG59IiwiaW1wb3J0IHsgY3JlYXRlVk5vZGUgYXMgX2NyZWF0ZVZOb2RlLCBvcGVuQmxvY2sgYXMgX29wZW5CbG9jaywgY3JlYXRlRWxlbWVudEJsb2NrIGFzIF9jcmVhdGVFbGVtZW50QmxvY2ssIGNyZWF0ZUNvbW1lbnRWTm9kZSBhcyBfY3JlYXRlQ29tbWVudFZOb2RlIH0gZnJvbSBcInZ1ZVwiXG5cbmNvbnN0IF9ob2lzdGVkXzEgPSB7IGtleTogMCB9XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eDogYW55LF9jYWNoZTogYW55LCRwcm9wczogYW55LCRzZXR1cDogYW55LCRkYXRhOiBhbnksJG9wdGlvbnM6IGFueSkge1xuICByZXR1cm4gKCRzZXR1cC5pc1BhZ2VEYXRhTG9hZGVkKVxuICAgID8gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcIm1haW5cIiwgX2hvaXN0ZWRfMSwgW1xuICAgICAgICBfY3JlYXRlVk5vZGUoJHNldHVwW1wiRmlyc3RTZWN0aW9uXCJdKVxuICAgICAgXSkpXG4gICAgOiBfY3JlYXRlQ29tbWVudFZOb2RlKFwidi1pZlwiLCB0cnVlKVxufSIsImltcG9ydCBXUCBmcm9tICdAL2F4aW9zV1AnXG5pbXBvcnQgeyBTZXR0aW5ncyB9IGZyb20gJ0AvdHlwZXMvQXBwJ1xuXG5cblxuZXhwb3J0IGNvbnN0IGdldFBhZ2VTZXR0aW5ncyA9IGFzeW5jIChpZDogbnVtYmVyKTogUHJvbWlzZTxTZXR0aW5ncz4gPT4ge1xuICAgIHJldHVybiBhd2FpdCBXUC5nZXQoJ3BhZ2VzLycgKyBpZCkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5kYXRhKVxufSIsImltcG9ydCB7IFJlZiwgY29tcHV0ZWQsIHJlZiwgd2F0Y2ggfSBmcm9tIFwidnVlXCI7XG5cbmNsYXNzIExvYWRlciB7XG5cbiAgICBwcml2YXRlIGxvYWRlZENvdW50ZXI6IG51bWJlciA9IDA7XG5cbiAgICBwcml2YXRlIGNvdW50ZXI6IG51bWJlciA9IDA7XG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGNvdW50ZXI6IG51bWJlcikge1xuICAgICAgICB0aGlzLmNvdW50ZXIgPSBjb3VudGVyO1xuICAgIH1cbiAgICBwdWJsaWMgbG9hZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5sb2FkZWRDb3VudGVyKys7XG5cbiAgICAgICAgdGhpcy5hZnRlckxvYWQoKVxuICAgIH1cbiAgICBwdWJsaWMgcmVzdGFydChjb3VudD86IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAoY291bnQpIHtcbiAgICAgICAgICAgIHRoaXMuY291bnRlciA9IGNvdW50XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxvYWRlZENvdW50ZXIgPSAwO1xuICAgIH1cbiAgICBwdWJsaWMgb25BbGxpc0xvYWRlZDogRnVuY3Rpb247XG4gICAgcHJpdmF0ZSBhZnRlckxvYWQoKTogdm9pZCB7XG5cbiAgICAgICAgaWYgKHRoaXMubG9hZGVkQ291bnRlciAhPSB0aGlzLmNvdW50ZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm9uQWxsaXNMb2FkZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9uQWxsaXNMb2FkZWQoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5leHBvcnQgY29uc3QgdXNlTG9hZCA9IChjb3VudDogbnVtYmVyKSA9PiB7XG5cbiAgICBjb25zdCBsb2FkZXIgPSByZWYobmV3IExvYWRlcihjb3VudCkpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbG9hZGVyLFxuICAgIH1cbn0iLCJpbXBvcnQgU3RvcmUsIHsgTXV0YXRpb25zIH0gZnJvbSAnQC9zdG9yZSc7XG5pbXBvcnQgeyBXcml0YWJsZUNvbXB1dGVkUmVmLCBjb21wdXRlZCB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgeyBJQ2F0ZWdvcnlNYWluUGFnZSwgU2V0dGluZ3MgfSBmcm9tICdAL3R5cGVzL0FwcCc7XG5cblxuZXhwb3J0IGNvbnN0IHVzZVBhZ2VTZXR0aW5ncyA9IChzdG9yZTogdHlwZW9mIFN0b3JlKSA9PiB7XG5cbiAgICBsZXQgcGFnZTogV3JpdGFibGVDb21wdXRlZFJlZjxPYmplY3Q+ID0gY29tcHV0ZWQoe1xuICAgICAgICBnZXQ6ICgpID0+IHN0b3JlLnN0YXRlLnBhZ2UuY2ZzLFxuICAgICAgICBzZXQ6ICh2YWx1ZTogU2V0dGluZ3MpID0+IHN0b3JlLmNvbW1pdChNdXRhdGlvbnMuU0VUX1BBR0VfU0VUVElOR1MsIHZhbHVlKSxcbiAgICB9KVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVxuICAgIH1cblxufSIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL0NhcnRCdXR0b25FYXNseS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmQ3NGJjZDImdHM9dHJ1ZVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0NhcnRCdXR0b25FYXNseS52dWU/dnVlJnR5cGU9c2NyaXB0JnNldHVwPXRydWUmbGFuZz10c1wiXG5leHBvcnQgKiBmcm9tIFwiLi9DYXJ0QnV0dG9uRWFzbHkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZzZXR1cD10cnVlJmxhbmc9dHNcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2V4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl0sWydfX2ZpbGUnLFwic3JjL2NvbXBvbmVudHMvQ2FydEJ1dHRvbkVhc2x5LnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCI2ZDc0YmNkMlwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzZkNzRiY2QyJywgX19leHBvcnRzX18pKSB7XG4gICAgYXBpLnJlbG9hZCgnNmQ3NGJjZDInLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0NhcnRCdXR0b25FYXNseS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmQ3NGJjZDImdHM9dHJ1ZVwiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCc2ZDc0YmNkMicsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vR29vZEl0ZW0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFmZGU5Y2MwJnNjb3BlZD10cnVlJnRzPXRydWVcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Hb29kSXRlbS52dWU/dnVlJnR5cGU9c2NyaXB0JnNldHVwPXRydWUmbGFuZz10c1wiXG5leHBvcnQgKiBmcm9tIFwiLi9Hb29kSXRlbS52dWU/dnVlJnR5cGU9c2NyaXB0JnNldHVwPXRydWUmbGFuZz10c1wiXG5cbmltcG9ydCBcIi4vR29vZEl0ZW0udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MWZkZTljYzAmbGFuZz1zY3NzJnNjb3BlZD10cnVlXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19zY29wZUlkJyxcImRhdGEtdi0xZmRlOWNjMFwiXSxbJ19fZmlsZScsXCJzcmMvY29tcG9uZW50cy9Hb29kSXRlbS52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiMWZkZTljYzBcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCcxZmRlOWNjMCcsIF9fZXhwb3J0c19fKSkge1xuICAgIGFwaS5yZWxvYWQoJzFmZGU5Y2MwJywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Hb29kSXRlbS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWZkZTljYzAmc2NvcGVkPXRydWUmdHM9dHJ1ZVwiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCcxZmRlOWNjMCcsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vZmlyc3Qtc2VjdGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjZjYWFmYjQmc2NvcGVkPXRydWUmdHM9dHJ1ZVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2ZpcnN0LXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZzZXR1cD10cnVlJmxhbmc9dHNcIlxuZXhwb3J0ICogZnJvbSBcIi4vZmlyc3Qtc2VjdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0JnNldHVwPXRydWUmbGFuZz10c1wiXG5cbmltcG9ydCBcIi4vZmlyc3Qtc2VjdGlvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yNmNhYWZiNCZsYW5nPXNjc3Mmc2NvcGVkPXRydWVcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2V4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl0sWydfX3Njb3BlSWQnLFwiZGF0YS12LTI2Y2FhZmI0XCJdLFsnX19maWxlJyxcInNyYy9zZWN0aW9ucy9jb25maWd1cmF0b3IvZmlyc3Qtc2VjdGlvbi52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiMjZjYWFmYjRcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCcyNmNhYWZiNCcsIF9fZXhwb3J0c19fKSkge1xuICAgIGFwaS5yZWxvYWQoJzI2Y2FhZmI0JywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9maXJzdC1zZWN0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yNmNhYWZiNCZzY29wZWQ9dHJ1ZSZ0cz10cnVlXCIsICgpID0+IHtcbiAgICBhcGkucmVyZW5kZXIoJzI2Y2FhZmI0JywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9jb25maWd1cmF0b3IudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE3ODZlNWNmJnRzPXRydWVcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9jb25maWd1cmF0b3IudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZzZXR1cD10cnVlJmxhbmc9dHNcIlxuZXhwb3J0ICogZnJvbSBcIi4vY29uZmlndXJhdG9yLnZ1ZT92dWUmdHlwZT1zY3JpcHQmc2V0dXA9dHJ1ZSZsYW5nPXRzXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19maWxlJyxcInNyYy92aWV3cy9jb25maWd1cmF0b3IudnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcIjE3ODZlNWNmXCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnMTc4NmU1Y2YnLCBfX2V4cG9ydHNfXykpIHtcbiAgICBhcGkucmVsb2FkKCcxNzg2ZTVjZicsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vY29uZmlndXJhdG9yLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xNzg2ZTVjZiZ0cz10cnVlXCIsICgpID0+IHtcbiAgICBhcGkucmVyZW5kZXIoJzE3ODZlNWNmJywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMTBdLnVzZVswXSEuL0NhcnRCdXR0b25FYXNseS52dWU/dnVlJnR5cGU9c2NyaXB0JnNldHVwPXRydWUmbGFuZz10c1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxMF0udXNlWzBdIS4vQ2FydEJ1dHRvbkVhc2x5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmc2V0dXA9dHJ1ZSZsYW5nPXRzXCIiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMTBdLnVzZVswXSEuL0dvb2RJdGVtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmc2V0dXA9dHJ1ZSZsYW5nPXRzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzEwXS51c2VbMF0hLi9Hb29kSXRlbS52dWU/dnVlJnR5cGU9c2NyaXB0JnNldHVwPXRydWUmbGFuZz10c1wiIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzEwXS51c2VbMF0hLi9maXJzdC1zZWN0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmc2V0dXA9dHJ1ZSZsYW5nPXRzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzEwXS51c2VbMF0hLi9maXJzdC1zZWN0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmc2V0dXA9dHJ1ZSZsYW5nPXRzXCIiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMTBdLnVzZVswXSEuL2NvbmZpZ3VyYXRvci52dWU/dnVlJnR5cGU9c2NyaXB0JnNldHVwPXRydWUmbGFuZz10c1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxMF0udXNlWzBdIS4vY29uZmlndXJhdG9yLnZ1ZT92dWUmdHlwZT1zY3JpcHQmc2V0dXA9dHJ1ZSZsYW5nPXRzXCIiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMTBdLnVzZVswXSEuL0dvb2RJdGVtLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTFmZGU5Y2MwJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZVwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIyNDA4ZGI3NlwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMTBdLnVzZVswXSEuL0dvb2RJdGVtLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTFmZGU5Y2MwJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxMF0udXNlWzBdIS4vR29vZEl0ZW0udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MWZkZTljYzAmbGFuZz1zY3NzJnNjb3BlZD10cnVlXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxMF0udXNlWzBdIS4vZmlyc3Qtc2VjdGlvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yNmNhYWZiNCZsYW5nPXNjc3Mmc2NvcGVkPXRydWVcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiZDg3MmY3MDJcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzEwXS51c2VbMF0hLi9maXJzdC1zZWN0aW9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTI2Y2FhZmI0Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxMF0udXNlWzBdIS4vZmlyc3Qtc2VjdGlvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yNmNhYWZiNCZsYW5nPXNjc3Mmc2NvcGVkPXRydWVcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9