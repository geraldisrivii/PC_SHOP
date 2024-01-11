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
.good-item-content__spec-button[data-v-1fde9cc0] {
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}
.good-item-content__spec-button[data-v-1fde9cc0]:hover {
  text-decoration: underline;
}
.good-item-content__quantity-box[data-v-1fde9cc0] {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 13px;
}
.good-item-content__sum[data-v-1fde9cc0] {
  font-weight: 500;
}`, "",{"version":3,"sources":["webpack://./src/components/GoodItem.vue","webpack://./GoodItem.vue"],"names":[],"mappings":"AACA;EACI,aAAA;EACA,mBAAA;EACA,SAAA;EACA,WAAA;EACA,kBAAA;EACA,yBAAA;EACA,kBAAA;ACAJ;ADEI;EACI,UAAA;EACA,WAAA;EACA,mBAAA;ACAR;ADGI;EACI,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,kBAAA;ACDR;ADKA;EACI,aAAA;EACA,mBAAA;EACA,8BAAA;EAEA,SAAA;EAEA,WAAA;ACJJ;ADMI;EACI,aAAA;EACA,sBAAA;EACA,SAAA;ACJR;ADOI;EACI,eAAA;EACA,yBAAA;EACA,gBAAA;ACLR;ADUI;EACI,eAAA;EAEA,gCAAA;ACTR;ADUQ;EACI,0BAAA;ACRZ;ADaI;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,SAAA;ACXR;ADcI;EACI,gBAAA;ACZR","sourcesContent":["\n.good-item {\n    display: flex;\n    align-items: center;\n    gap: 30px;\n    width: 100%;\n    padding: 17px 34px;\n    background-color: #181818;\n    border-radius: 5px;\n\n    &__image {\n        width: 90%;\n        height: 90%;\n        object-fit: contain;\n    }\n\n    &__image-box {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        width: 200px;\n        height: 130px;\n        background-color: white;\n        border-radius: 5px;\n    }\n}\n\n.good-item-content {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n\n    gap: 30px;\n\n    width: 100%;\n\n    &__description {\n        display: flex;\n        flex-direction: column;\n        gap: 10px;\n    }\n\n    &__title {\n        font-size: 18px;\n        text-transform: uppercase;\n        font-weight: 500;\n    }\n\n    &__price {}\n\n    &__spec-button {\n        cursor: pointer;\n\n        transition: all .3s ease-in-out;\n        &:hover {\n            text-decoration: underline;\n        }\n    }\n\n\n    &__quantity-box {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 13px;\n    }\n\n    &__sum {\n        font-weight: 500;\n    }\n}\n",".good-item {\n  display: flex;\n  align-items: center;\n  gap: 30px;\n  width: 100%;\n  padding: 17px 34px;\n  background-color: #181818;\n  border-radius: 5px;\n}\n.good-item__image {\n  width: 90%;\n  height: 90%;\n  object-fit: contain;\n}\n.good-item__image-box {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 200px;\n  height: 130px;\n  background-color: white;\n  border-radius: 5px;\n}\n\n.good-item-content {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 30px;\n  width: 100%;\n}\n.good-item-content__description {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.good-item-content__title {\n  font-size: 18px;\n  text-transform: uppercase;\n  font-weight: 500;\n}\n.good-item-content__spec-button {\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n}\n.good-item-content__spec-button:hover {\n  text-decoration: underline;\n}\n.good-item-content__quantity-box {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 13px;\n}\n.good-item-content__sum {\n  font-weight: 500;\n}"],"sourceRoot":""}]);
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
                }, null, 8 /* PROPS */, ["product", "adding-field"]),
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
                    class: "good-item-content__spec-button",
                    onClick: $setup.onClick
                }, "Подробнее")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRzL2pzL3NyY192aWV3c19jb25maWd1cmF0b3JfdnVlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHlIQUF5SCxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyx1Q0FBdUMsb0JBQW9CLDBCQUEwQixnQkFBZ0Isa0JBQWtCLHlCQUF5QixnQ0FBZ0MseUJBQXlCLGtCQUFrQixxQkFBcUIsc0JBQXNCLDhCQUE4QixPQUFPLHNCQUFzQix3QkFBd0IsOEJBQThCLGtDQUFrQyx1QkFBdUIsd0JBQXdCLGtDQUFrQyw2QkFBNkIsT0FBTyxHQUFHLHdCQUF3QixvQkFBb0IsMEJBQTBCLHFDQUFxQyxrQkFB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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FsTjs7QUFFQTtBQUNBLGNBQWMsbUJBQU8sQ0FBQyxpa0JBQStSO0FBQ3JUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSw2SkFBOEU7QUFDeEYsK0NBQStDO0FBQy9DO0FBQ0EsR0FBRyxLQUFVLEVBQUU7Ozs7Ozs7Ozs7QUNYZjs7QUFFQTtBQUNBLGNBQWMsbUJBQU8sQ0FBQyxrbUJBQWdUO0FBQ3RVO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxnS0FBaUY7QUFDM0YsK0NBQStDO0FBQy9DO0FBQ0EsR0FBRyxLQUFVLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcmMvLi9zcmMvY29tcG9uZW50cy9Hb29kSXRlbS52dWU/YjhmMSIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvc2VjdGlvbnMvY29uZmlndXJhdG9yL2ZpcnN0LXNlY3Rpb24udnVlPzRiYzgiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL2NvbXBvbmVudHMvQ2FydEJ1dHRvbkVhc2x5LnZ1ZT9mZWY2Iiwid2VicGFjazovL3NyYy8uL3NyYy9jb21wb25lbnRzL0NhcnRCdXR0b25FYXNseS52dWUiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL2NvbXBvbmVudHMvR29vZEl0ZW0udnVlPzA2YzkiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL2NvbXBvbmVudHMvR29vZEl0ZW0udnVlIiwid2VicGFjazovL3NyYy8uL3NyYy9zZWN0aW9ucy9jb25maWd1cmF0b3IvZmlyc3Qtc2VjdGlvbi52dWU/NzhiOCIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvc2VjdGlvbnMvY29uZmlndXJhdG9yL2ZpcnN0LXNlY3Rpb24udnVlIiwid2VicGFjazovL3NyYy8uL3NyYy92aWV3cy9jb25maWd1cmF0b3IudnVlPzkxNDEiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL3ZpZXdzL2NvbmZpZ3VyYXRvci52dWUiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL2NvbXBvbmVudHMvQ2FydEJ1dHRvbkVhc2x5LnZ1ZT82OGFiIiwid2VicGFjazovL3NyYy8uL3NyYy9jb21wb25lbnRzL0dvb2RJdGVtLnZ1ZT8xMmMzIiwid2VicGFjazovL3NyYy8uL3NyYy9zZWN0aW9ucy9jb25maWd1cmF0b3IvZmlyc3Qtc2VjdGlvbi52dWU/ZWZiOCIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvdmlld3MvY29uZmlndXJhdG9yLnZ1ZT83ZDVmIiwid2VicGFjazovL3NyYy8uL3NyYy9hcGkvQXBwL2dldFBhZ2VTZXR0aW5ncy50cyIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvaG9va3MvQXBwL3VzZUxvYWQudHMiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL2hvb2tzL0FwcC91c2VQYWdlU2V0dGluZ3MudHMiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL2NvbXBvbmVudHMvQ2FydEJ1dHRvbkVhc2x5LnZ1ZT9mNTY4Iiwid2VicGFjazovL3NyYy8uL3NyYy9jb21wb25lbnRzL0dvb2RJdGVtLnZ1ZT9jMGNmIiwid2VicGFjazovL3NyYy8uL3NyYy9zZWN0aW9ucy9jb25maWd1cmF0b3IvZmlyc3Qtc2VjdGlvbi52dWU/ZmUwYyIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvdmlld3MvY29uZmlndXJhdG9yLnZ1ZT8zYWRjIiwid2VicGFjazovL3NyYy8uL3NyYy9jb21wb25lbnRzL0NhcnRCdXR0b25FYXNseS52dWU/MDcwOCIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvY29tcG9uZW50cy9Hb29kSXRlbS52dWU/NTY4NyIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvc2VjdGlvbnMvY29uZmlndXJhdG9yL2ZpcnN0LXNlY3Rpb24udnVlP2JhMzMiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL3ZpZXdzL2NvbmZpZ3VyYXRvci52dWU/NDMwZCIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvY29tcG9uZW50cy9Hb29kSXRlbS52dWU/MTFjZiIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvc2VjdGlvbnMvY29uZmlndXJhdG9yL2ZpcnN0LXNlY3Rpb24udnVlPzM2YWIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5nb29kLWl0ZW1bZGF0YS12LTFmZGU5Y2MwXSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMzBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDE3cHggMzRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4MTgxODtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmdvb2QtaXRlbV9faW1hZ2VbZGF0YS12LTFmZGU5Y2MwXSB7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogOTAlO1xuICBvYmplY3QtZml0OiBjb250YWluO1xufVxuLmdvb2QtaXRlbV9faW1hZ2UtYm94W2RhdGEtdi0xZmRlOWNjMF0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDEzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmdvb2QtaXRlbS1jb250ZW50W2RhdGEtdi0xZmRlOWNjMF0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMzBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZ29vZC1pdGVtLWNvbnRlbnRfX2Rlc2NyaXB0aW9uW2RhdGEtdi0xZmRlOWNjMF0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEwcHg7XG59XG4uZ29vZC1pdGVtLWNvbnRlbnRfX3RpdGxlW2RhdGEtdi0xZmRlOWNjMF0ge1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uZ29vZC1pdGVtLWNvbnRlbnRfX3NwZWMtYnV0dG9uW2RhdGEtdi0xZmRlOWNjMF0ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xufVxuLmdvb2QtaXRlbS1jb250ZW50X19zcGVjLWJ1dHRvbltkYXRhLXYtMWZkZTljYzBdOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4uZ29vZC1pdGVtLWNvbnRlbnRfX3F1YW50aXR5LWJveFtkYXRhLXYtMWZkZTljYzBdIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxM3B4O1xufVxuLmdvb2QtaXRlbS1jb250ZW50X19zdW1bZGF0YS12LTFmZGU5Y2MwXSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9Hb29kSXRlbS52dWVcIixcIndlYnBhY2s6Ly8uL0dvb2RJdGVtLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDQUo7QURFSTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNBUjtBREdJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUNEUjtBREtBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFFQSxTQUFBO0VBRUEsV0FBQTtBQ0pKO0FETUk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FDSlI7QURPSTtFQUNJLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FDTFI7QURVSTtFQUNJLGVBQUE7RUFFQSxnQ0FBQTtBQ1RSO0FEVVE7RUFDSSwwQkFBQTtBQ1JaO0FEYUk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUNYUjtBRGNJO0VBQ0ksZ0JBQUE7QUNaUlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG4uZ29vZC1pdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAzMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMTdweCAzNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxODE4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuXFxuICAgICZfX2ltYWdlIHtcXG4gICAgICAgIHdpZHRoOiA5MCU7XFxuICAgICAgICBoZWlnaHQ6IDkwJTtcXG4gICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XFxuICAgIH1cXG5cXG4gICAgJl9faW1hZ2UtYm94IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICB3aWR0aDogMjAwcHg7XFxuICAgICAgICBoZWlnaHQ6IDEzMHB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIH1cXG59XFxuXFxuLmdvb2QtaXRlbS1jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcbiAgICBnYXA6IDMwcHg7XFxuXFxuICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICAmX19kZXNjcmlwdGlvbiB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGdhcDogMTBweDtcXG4gICAgfVxcblxcbiAgICAmX190aXRsZSB7XFxuICAgICAgICBmb250LXNpemU6IDE4cHg7XFxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgfVxcblxcbiAgICAmX19wcmljZSB7fVxcblxcbiAgICAmX19zcGVjLWJ1dHRvbiB7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0O1xcbiAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG5cXG4gICAgJl9fcXVhbnRpdHktYm94IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGdhcDogMTNweDtcXG4gICAgfVxcblxcbiAgICAmX19zdW0ge1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgfVxcbn1cXG5cIixcIi5nb29kLWl0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDMwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDE3cHggMzRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODE4MTg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbi5nb29kLWl0ZW1fX2ltYWdlIHtcXG4gIHdpZHRoOiA5MCU7XFxuICBoZWlnaHQ6IDkwJTtcXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XFxufVxcbi5nb29kLWl0ZW1fX2ltYWdlLWJveCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgaGVpZ2h0OiAxMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uZ29vZC1pdGVtLWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IDMwcHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLmdvb2QtaXRlbS1jb250ZW50X19kZXNjcmlwdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG59XFxuLmdvb2QtaXRlbS1jb250ZW50X190aXRsZSB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuLmdvb2QtaXRlbS1jb250ZW50X19zcGVjLWJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG59XFxuLmdvb2QtaXRlbS1jb250ZW50X19zcGVjLWJ1dHRvbjpob3ZlciB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuLmdvb2QtaXRlbS1jb250ZW50X19xdWFudGl0eS1ib3gge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxM3B4O1xcbn1cXG4uZ29vZC1pdGVtLWNvbnRlbnRfX3N1bSB7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5maXJzdC1zZWN0aW9uW2RhdGEtdi0yNmNhYWZiNF0ge1xuICBwYWRkaW5nOiAxMjBweCAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOSwgMTksIDE5KTtcbn1cbi5maXJzdC1zZWN0aW9uX190aXRsZVtkYXRhLXYtMjZjYWFmYjRdIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiA4MHB4O1xufVxuLmZpcnN0LXNlY3Rpb24tc2xpZGVyW2RhdGEtdi0yNmNhYWZiNF0ge1xuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xufVxuLnN3aXBlci1jb250YWluZXJbZGF0YS12LTI2Y2FhZmI0XSB7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cbi5maXJzdC1zZWN0aW9uLXdyYXBwZXJbZGF0YS12LTI2Y2FhZmI0XSB7XG4gIHBhZGRpbmctdG9wOiAxMDBweDtcbn1cbi5zd2lwZXItc2xpZGVbZGF0YS12LTI2Y2FhZmI0XSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbiAgZ2FwOiAxNXB4O1xuICB3aWR0aDogMjUwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNCwgMjQsIDI0KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAxNXB4O1xufVxuLnN3aXBlci1zbGlkZSBpbWdbZGF0YS12LTI2Y2FhZmI0XSB7XG4gIGhlaWdodDogODBweDtcbiAgd2lkdGg6IDgwcHg7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG4uc3dpcGVyLXNsaWRlIHBbZGF0YS12LTI2Y2FhZmI0XSB7XG4gIGhlaWdodDogNDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmZpcnN0LXNlY3Rpb24tcHJvZHVjdHMtY29udGFpbmVyW2RhdGEtdi0yNmNhYWZiNF0ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDVmciAyZnI7XG4gIGdhcDogNDBweDtcbn1cbi5maXJzdC1zZWN0aW9uLWdvb2RzW2RhdGEtdi0yNmNhYWZiNF0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEwcHg7XG59XG4uZmlyc3Qtc2VjdGlvbi1maWx0ZXJzW2RhdGEtdi0yNmNhYWZiNF0ge1xuICBwYWRkaW5nOiAxNXB4IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNCwgMjQsIDI0KTtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDZweDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zZWN0aW9ucy9jb25maWd1cmF0b3IvZmlyc3Qtc2VjdGlvbi52dWVcIixcIndlYnBhY2s6Ly8uL2ZpcnN0LXNlY3Rpb24udnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0VBQ0ksa0JBQUE7RUFDQSxpQ0FBQTtBQ0ZKO0FESUk7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FDRlI7QURNQTtFQUNJLG1CQUFBO0FDSEo7QURNQTtFQUVJLGtCQUFBO0FDSko7QURRQTtFQUNJLGtCQUFBO0FDTEo7QURhQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNWSjtBRFlJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ1ZSO0FEYUk7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUNYUjtBRGVBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsU0FBQTtBQ1pKO0FEZUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FDWko7QURlQTtFQUNJLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFFBQUE7QUNaSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG4uZmlyc3Qtc2VjdGlvbi1jb250YWluZXIge31cXG5cXG4uZmlyc3Qtc2VjdGlvbiB7XFxuICAgIHBhZGRpbmc6IDEyMHB4IDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5LCAxOSwgMTkpO1xcblxcbiAgICAmX190aXRsZSB7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiA4MHB4O1xcbiAgICB9XFxufVxcblxcbi5maXJzdC1zZWN0aW9uLXNsaWRlciB7XFxuICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XFxufVxcblxcbi5zd2lwZXItY29udGFpbmVyIHtcXG5cXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG5cXG4uZmlyc3Qtc2VjdGlvbi13cmFwcGVye1xcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XFxufVxcbi5zd2lwZXItd3JhcHBlciB7XFxuICAgIC8vIGRpc3BsYXk6IGZsZXg7XFxuICAgIC8vIGdhcDogMzBweDtcXG4gICAgLy8gd2lkdGg6IDEwMCU7XFxufVxcblxcbi5zd2lwZXItc2xpZGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGdhcDogMTVweDtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQsIDI0LCAyNCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogMTVweDtcXG5cXG4gICAgaW1nIHtcXG4gICAgICAgIGhlaWdodDogODBweDtcXG4gICAgICAgIHdpZHRoOiA4MHB4O1xcbiAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcXG4gICAgfVxcblxcbiAgICBwIHtcXG4gICAgICAgIGhlaWdodDogNDBweDtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgfVxcbn1cXG5cXG4uZmlyc3Qtc2VjdGlvbi1wcm9kdWN0cy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDVmciAyZnI7XFxuICAgIGdhcDogNDBweDtcXG59XFxuXFxuLmZpcnN0LXNlY3Rpb24tZ29vZHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5maXJzdC1zZWN0aW9uLWZpbHRlcnMge1xcbiAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNCwgMjQsIDI0KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDZweDtcXG59XFxuXCIsXCIuZmlyc3Qtc2VjdGlvbiB7XFxuICBwYWRkaW5nOiAxMjBweCAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTksIDE5LCAxOSk7XFxufVxcbi5maXJzdC1zZWN0aW9uX190aXRsZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiA4MHB4O1xcbn1cXG5cXG4uZmlyc3Qtc2VjdGlvbi1zbGlkZXIge1xcbiAgbWFyZ2luLWJvdHRvbTogNjBweDtcXG59XFxuXFxuLnN3aXBlci1jb250YWluZXIge1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG4uZmlyc3Qtc2VjdGlvbi13cmFwcGVyIHtcXG4gIHBhZGRpbmctdG9wOiAxMDBweDtcXG59XFxuXFxuLnN3aXBlci1zbGlkZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGdhcDogMTVweDtcXG4gIHdpZHRoOiAyNTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQsIDI0LCAyNCk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiAxNXB4O1xcbn1cXG4uc3dpcGVyLXNsaWRlIGltZyB7XFxuICBoZWlnaHQ6IDgwcHg7XFxuICB3aWR0aDogODBweDtcXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XFxufVxcbi5zd2lwZXItc2xpZGUgcCB7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5maXJzdC1zZWN0aW9uLXByb2R1Y3RzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1ZnIgMmZyO1xcbiAgZ2FwOiA0MHB4O1xcbn1cXG5cXG4uZmlyc3Qtc2VjdGlvbi1nb29kcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLmZpcnN0LXNlY3Rpb24tZmlsdGVycyB7XFxuICBwYWRkaW5nOiAxNXB4IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQsIDI0LCAyNCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNnB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IGFzIF9kZWZpbmVDb21wb25lbnQgfSBmcm9tICd2dWUnXG5pbXBvcnQgeyB1c2VBcHBTZXR0aW5ncyB9IGZyb20gJ0AvaG9va3MvQXBwL3VzZUFwcFNldHRpbmdzJztcbmltcG9ydCB7IHVzZVBhZ2VTZXR0aW5ncyB9IGZyb20gJ0AvaG9va3MvQXBwL3VzZVBhZ2VTZXR0aW5ncyc7XG5pbXBvcnQgeyB1c2VWdWV4IH0gZnJvbSAnQC9zdG9yZS91c2VWdWV4JztcbmltcG9ydCB7IElQcm9kdWN0IH0gZnJvbSAnQC90eXBlcy9Qcm9kdWN0JztcbmltcG9ydCBkZWVwRXF1YWwgZnJvbSAnZGVlcC1lcXVhbCc7XG5pbXBvcnQgeyBjb21wdXRlZCwgdG9SZWZzIH0gZnJvbSAndnVlJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgICBwcm9kdWN0OiBJUHJvZHVjdFxuICAgIGFkZGluZ0ZpZWxkOiBvYmplY3QgfCBudWxsXG59XG5cbmludGVyZmFjZSBFbWl0cyB7XG4gICAgKGU6ICd1cGRhdGU6YWRkaW5nRmllbGQnLCB2YWx1ZTogb2JqZWN0IHwgbnVsbCk6IHZvaWRcbn1cblxuXG5leHBvcnQgZGVmYXVsdCAvKiNfX1BVUkVfXyovX2RlZmluZUNvbXBvbmVudCh7XG4gIF9fbmFtZTogJ0NhcnRCdXR0b25FYXNseScsXG4gIHByb3BzOiB7XG4gICAgcHJvZHVjdDogeyB0eXBlOiBPYmplY3QsIHJlcXVpcmVkOiB0cnVlIH0sXG4gICAgYWRkaW5nRmllbGQ6IHsgdHlwZTogW09iamVjdCwgbnVsbF0sIHJlcXVpcmVkOiB0cnVlIH1cbiAgfSxcbiAgZW1pdHM6IFtcInVwZGF0ZTphZGRpbmdGaWVsZFwiXSxcbiAgc2V0dXAoX19wcm9wczogYW55LCB7IGV4cG9zZTogX19leHBvc2UsIGVtaXQ6IF9fZW1pdCB9KSB7XG4gIF9fZXhwb3NlKCk7XG5cbmNvbnN0IHByb3BzID0gX19wcm9wc1xuXG5jb25zdCB7IGFkZGluZ0ZpZWxkLCBwcm9kdWN0IH0gPSB0b1JlZnMocHJvcHMpXG5cbmNvbnN0IGVtaXQgPSBfX2VtaXRcblxuY29uc3QgcHJvZHVjdEluQWRkaW5nRmllbGQgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgcmV0dXJuIGRlZXBFcXVhbChhZGRpbmdGaWVsZC52YWx1ZSwgcHJvZHVjdC52YWx1ZSlcbn0pXG5cblxuY29uc3Qgb25DbGljayA9ICgpID0+IHtcbiAgICBpZihwcm9kdWN0SW5BZGRpbmdGaWVsZC52YWx1ZSl7XG4gICAgICAgIHJldHVybiBlbWl0KCd1cGRhdGU6YWRkaW5nRmllbGQnLCBudWxsKVxuICAgIH1cblxuICAgIGVtaXQoJ3VwZGF0ZTphZGRpbmdGaWVsZCcsIHByb2R1Y3QudmFsdWUpXG59XG5cblxuXG5jb25zdCBzdG9yZSA9IHVzZVZ1ZXgoKVxuXG5jb25zdCB7IHBhZ2UgfSA9IHVzZVBhZ2VTZXR0aW5ncyhzdG9yZSlcblxuY29uc3QgeyBhcHAgfSA9IHVzZUFwcFNldHRpbmdzKHN0b3JlKVxuXG5cblxuY29uc3QgX19yZXR1cm5lZF9fID0geyBwcm9wcywgYWRkaW5nRmllbGQsIHByb2R1Y3QsIGVtaXQsIHByb2R1Y3RJbkFkZGluZ0ZpZWxkLCBvbkNsaWNrLCBzdG9yZSwgcGFnZSwgYXBwIH1cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShfX3JldHVybmVkX18sICdfX2lzU2NyaXB0U2V0dXAnLCB7IGVudW1lcmFibGU6IGZhbHNlLCB2YWx1ZTogdHJ1ZSB9KVxucmV0dXJuIF9fcmV0dXJuZWRfX1xufVxuXG59KSIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwiY2FydC1idXR0b25cIj5cbiAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJvbkNsaWNrXCIgY2xhc3M9XCJidXR0b24gY2FydC1idXR0b25fX2J1dHRvblwiPnt7IHByb2R1Y3RJbkFkZGluZ0ZpZWxkID8gJ9Cj0LHRgNCw0YLRjCcgOiAn0JTQvtCx0LDQstC40YLRjCcgfX08L2J1dHRvbj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyB1c2VBcHBTZXR0aW5ncyB9IGZyb20gJ0AvaG9va3MvQXBwL3VzZUFwcFNldHRpbmdzJztcbmltcG9ydCB7IHVzZVBhZ2VTZXR0aW5ncyB9IGZyb20gJ0AvaG9va3MvQXBwL3VzZVBhZ2VTZXR0aW5ncyc7XG5pbXBvcnQgeyB1c2VWdWV4IH0gZnJvbSAnQC9zdG9yZS91c2VWdWV4JztcbmltcG9ydCB7IElQcm9kdWN0IH0gZnJvbSAnQC90eXBlcy9Qcm9kdWN0JztcbmltcG9ydCBkZWVwRXF1YWwgZnJvbSAnZGVlcC1lcXVhbCc7XG5pbXBvcnQgeyBjb21wdXRlZCwgdG9SZWZzIH0gZnJvbSAndnVlJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgICBwcm9kdWN0OiBJUHJvZHVjdFxuICAgIGFkZGluZ0ZpZWxkOiBvYmplY3QgfCBudWxsXG59XG5cbmNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHM8UHJvcHM+KClcblxuY29uc3QgeyBhZGRpbmdGaWVsZCwgcHJvZHVjdCB9ID0gdG9SZWZzKHByb3BzKVxuXG5pbnRlcmZhY2UgRW1pdHMge1xuICAgIChlOiAndXBkYXRlOmFkZGluZ0ZpZWxkJywgdmFsdWU6IG9iamVjdCB8IG51bGwpOiB2b2lkXG59XG5cbmNvbnN0IGVtaXQgPSBkZWZpbmVFbWl0czxFbWl0cz4oKVxuXG5jb25zdCBwcm9kdWN0SW5BZGRpbmdGaWVsZCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICByZXR1cm4gZGVlcEVxdWFsKGFkZGluZ0ZpZWxkLnZhbHVlLCBwcm9kdWN0LnZhbHVlKVxufSlcblxuXG5jb25zdCBvbkNsaWNrID0gKCkgPT4ge1xuICAgIGlmKHByb2R1Y3RJbkFkZGluZ0ZpZWxkLnZhbHVlKXtcbiAgICAgICAgcmV0dXJuIGVtaXQoJ3VwZGF0ZTphZGRpbmdGaWVsZCcsIG51bGwpXG4gICAgfVxuXG4gICAgZW1pdCgndXBkYXRlOmFkZGluZ0ZpZWxkJywgcHJvZHVjdC52YWx1ZSlcbn1cblxuXG5cbmNvbnN0IHN0b3JlID0gdXNlVnVleCgpXG5cbmNvbnN0IHsgcGFnZSB9ID0gdXNlUGFnZVNldHRpbmdzKHN0b3JlKVxuXG5jb25zdCB7IGFwcCB9ID0gdXNlQXBwU2V0dGluZ3Moc3RvcmUpXG5cblxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD48L3N0eWxlPiIsImltcG9ydCB7IGRlZmluZUNvbXBvbmVudCBhcyBfZGVmaW5lQ29tcG9uZW50IH0gZnJvbSAndnVlJ1xuaW1wb3J0IHsgdXNlQXBwU2V0dGluZ3MgfSBmcm9tICdAL2hvb2tzL0FwcC91c2VBcHBTZXR0aW5ncyc7XG5pbXBvcnQgeyB1c2VWdWV4IH0gZnJvbSAnQC9zdG9yZS91c2VWdWV4JztcbmltcG9ydCB7IElHcm91cHBlZFByb2R1Y3QsIElQcm9kdWN0IH0gZnJvbSAnQC90eXBlcy9Qcm9kdWN0JztcbmltcG9ydCB7IHRvUmVmcywgd2F0Y2ggfSBmcm9tICd2dWUnO1xuaW1wb3J0IENhcnRCdXR0b25FYXNseSBmcm9tICcuL0NhcnRCdXR0b25FYXNseS52dWUnO1xuaW1wb3J0IHsgdXNlU3BlY0RpYWxvZyB9IGZyb20gJ0AvaG9va3MvQXBwL3VzZVNwZWNEaWFsb2cnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICAgIHByb2R1Y3Q6IElQcm9kdWN0XG4gICAgYWRkaW5nRmllbGQ6IG9iamVjdCB8IG51bGxcbn1cbmludGVyZmFjZSBFbWl0cyB7XG4gICAgKGU6ICd1cGRhdGU6YWRkaW5nRmllbGQnLCB2YWx1ZTogb2JqZWN0KTogdm9pZFxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IC8qI19fUFVSRV9fKi9fZGVmaW5lQ29tcG9uZW50KHtcbiAgX19uYW1lOiAnR29vZEl0ZW0nLFxuICBwcm9wczoge1xuICAgIHByb2R1Y3Q6IHsgdHlwZTogT2JqZWN0LCByZXF1aXJlZDogdHJ1ZSB9LFxuICAgIGFkZGluZ0ZpZWxkOiB7IHR5cGU6IFtPYmplY3QsIG51bGxdLCByZXF1aXJlZDogdHJ1ZSB9XG4gIH0sXG4gIGVtaXRzOiBbXCJ1cGRhdGU6YWRkaW5nRmllbGRcIl0sXG4gIHNldHVwKF9fcHJvcHM6IGFueSwgeyBleHBvc2U6IF9fZXhwb3NlLCBlbWl0OiBfX2VtaXQgfSkge1xuICBfX2V4cG9zZSgpO1xuXG5jb25zdCBwcm9wcyA9IF9fcHJvcHNcblxuY29uc3QgeyBhZGRpbmdGaWVsZCwgcHJvZHVjdCB9ID0gdG9SZWZzKHByb3BzKVxuXG5jb25zdCBlbWl0ID0gX19lbWl0XG5cbmxldCBzdG9yZSA9IHVzZVZ1ZXgoKTtcblxuY29uc3QgeyBzcGVjRGlhbG9nIH0gPSB1c2VTcGVjRGlhbG9nKHN0b3JlKVxuXG5jb25zdCBvbkNsaWNrID0gKCkgPT4ge1xuICAgIHNwZWNEaWFsb2cudmFsdWUub3Blbihwcm9kdWN0LnZhbHVlKVxufVxuXG5cbmNvbnN0IHsgYXBwIH0gPSB1c2VBcHBTZXR0aW5ncyhzdG9yZSlcblxuXG5jb25zdCBfX3JldHVybmVkX18gPSB7IHByb3BzLCBhZGRpbmdGaWVsZCwgcHJvZHVjdCwgZW1pdCwgZ2V0IHN0b3JlKCkgeyByZXR1cm4gc3RvcmUgfSwgc2V0IHN0b3JlKHYpIHsgc3RvcmUgPSB2IH0sIHNwZWNEaWFsb2csIG9uQ2xpY2ssIGFwcCwgQ2FydEJ1dHRvbkVhc2x5IH1cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShfX3JldHVybmVkX18sICdfX2lzU2NyaXB0U2V0dXAnLCB7IGVudW1lcmFibGU6IGZhbHNlLCB2YWx1ZTogdHJ1ZSB9KVxucmV0dXJuIF9fcmV0dXJuZWRfX1xufVxuXG59KSIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwiZ29vZC1pdGVtXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJnb29kLWl0ZW1fX2ltYWdlLWJveFwiPlxuICAgICAgICAgICAgPGltZyBjbGFzcz1cImdvb2QtaXRlbV9faW1hZ2VcIiA6c3JjPVwicHJvZHVjdC5pbWFnZXNbMF0uc3JjXCIgOmFsdD1cInByb2R1Y3QubmFtZVwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImdvb2QtaXRlbS1jb250ZW50XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ29vZC1pdGVtLWNvbnRlbnRfX2Rlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJnb29kLWl0ZW0tY29udGVudF9fdGl0bGVcIj57eyBwcm9kdWN0Lm5hbWUgfX08L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJnb29kLWl0ZW0tY29udGVudF9fcHJpY2VcIj57eyBwcm9kdWN0LnByaWNlIH19INGA0YPQsSAvINGI0YI8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJnb29kLWl0ZW0tY29udGVudF9fcXVhbnRpdHktYm94XCI+XG4gICAgICAgICAgICAgICAgPENhcnRCdXR0b25FYXNseSA6cHJvZHVjdD1cInByb2R1Y3RcIiA6YWRkaW5nLWZpZWxkPVwiYWRkaW5nRmllbGRcIlxuICAgICAgICAgICAgICAgICAgICBAdXBkYXRlOmFkZGluZy1maWVsZD1cImVtaXQoJ3VwZGF0ZTphZGRpbmdGaWVsZCcsICRldmVudClcIiAvPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZ29vZC1pdGVtLWNvbnRlbnRfX3NwZWMtYnV0dG9uXCIgQGNsaWNrPVwib25DbGlja1wiPtCf0L7QtNGA0L7QsdC90LXQtTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyB1c2VBcHBTZXR0aW5ncyB9IGZyb20gJ0AvaG9va3MvQXBwL3VzZUFwcFNldHRpbmdzJztcbmltcG9ydCB7IHVzZVZ1ZXggfSBmcm9tICdAL3N0b3JlL3VzZVZ1ZXgnO1xuaW1wb3J0IHsgSUdyb3VwcGVkUHJvZHVjdCwgSVByb2R1Y3QgfSBmcm9tICdAL3R5cGVzL1Byb2R1Y3QnO1xuaW1wb3J0IHsgdG9SZWZzLCB3YXRjaCB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgQ2FydEJ1dHRvbkVhc2x5IGZyb20gJy4vQ2FydEJ1dHRvbkVhc2x5LnZ1ZSc7XG5pbXBvcnQgeyB1c2VTcGVjRGlhbG9nIH0gZnJvbSAnQC9ob29rcy9BcHAvdXNlU3BlY0RpYWxvZyc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gICAgcHJvZHVjdDogSVByb2R1Y3RcbiAgICBhZGRpbmdGaWVsZDogb2JqZWN0IHwgbnVsbFxufVxuY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wczxQcm9wcz4oKVxuXG5jb25zdCB7IGFkZGluZ0ZpZWxkLCBwcm9kdWN0IH0gPSB0b1JlZnMocHJvcHMpXG5cbmludGVyZmFjZSBFbWl0cyB7XG4gICAgKGU6ICd1cGRhdGU6YWRkaW5nRmllbGQnLCB2YWx1ZTogb2JqZWN0KTogdm9pZFxufVxuXG5jb25zdCBlbWl0ID0gZGVmaW5lRW1pdHM8RW1pdHM+KClcblxubGV0IHN0b3JlID0gdXNlVnVleCgpO1xuXG5jb25zdCB7IHNwZWNEaWFsb2cgfSA9IHVzZVNwZWNEaWFsb2coc3RvcmUpXG5cbmNvbnN0IG9uQ2xpY2sgPSAoKSA9PiB7XG4gICAgc3BlY0RpYWxvZy52YWx1ZS5vcGVuKHByb2R1Y3QudmFsdWUpXG59XG5cblxuY29uc3QgeyBhcHAgfSA9IHVzZUFwcFNldHRpbmdzKHN0b3JlKVxuXG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxuLmdvb2QtaXRlbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMzBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxN3B4IDM0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE4MTgxODtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG5cbiAgICAmX19pbWFnZSB7XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIGhlaWdodDogOTAlO1xuICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgIH1cblxuICAgICZfX2ltYWdlLWJveCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgIGhlaWdodDogMTMwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgfVxufVxuXG4uZ29vZC1pdGVtLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICBnYXA6IDMwcHg7XG5cbiAgICB3aWR0aDogMTAwJTtcblxuICAgICZfX2Rlc2NyaXB0aW9uIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgZ2FwOiAxMHB4O1xuICAgIH1cblxuICAgICZfX3RpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cblxuICAgICZfX3ByaWNlIHt9XG5cbiAgICAmX19zcGVjLWJ1dHRvbiB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0O1xuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICAmX19xdWFudGl0eS1ib3gge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBnYXA6IDEzcHg7XG4gICAgfVxuXG4gICAgJl9fc3VtIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9XG59XG48L3N0eWxlPiIsImltcG9ydCB7IGRlZmluZUNvbXBvbmVudCBhcyBfZGVmaW5lQ29tcG9uZW50IH0gZnJvbSAndnVlJ1xuaW1wb3J0IHsgUmVmLCBjb21wdXRlZCwgb25Nb3VudGVkLCByZWYsIHdhdGNoIH0gZnJvbSAndnVlJztcbmltcG9ydCBXT08gZnJvbSAnQC9heGlvc1dvb2NvbWVyY2UnXG5pbXBvcnQgeyBJUHJvZHVjdCwgSVByb2R1Y3RDYXRlZ29yeVJlc3BvbnNlIH0gZnJvbSAnQC90eXBlcy9Qcm9kdWN0JztcblxuaW1wb3J0IFN3aXBlciBmcm9tICdzd2lwZXInO1xuaW1wb3J0ICdzd2lwZXIvY3NzJztcbmltcG9ydCBHb29kSXRlbSBmcm9tICdAL2NvbXBvbmVudHMvR29vZEl0ZW0udnVlJztcbmltcG9ydCBDdXN0b21TZWxlY3QgZnJvbSAnQC9jb21wb25lbnRzL0N1c3RvbVNlbGVjdC52dWUnO1xuXG5pbnRlcmZhY2UgSUNvbmZpZ3VyZVByb2R1Y3Qge1xuICAgIGNwdTogb2JqZWN0IHwgbnVsbDtcbiAgICBncHU6IG9iamVjdCB8IG51bGw7XG4gICAgcmFtOiBvYmplY3QgfCBudWxsO1xuICAgIG1vdGhlcmJvYXJkOiBvYmplY3QgfCBudWxsO1xuICAgIHNzZDogb2JqZWN0IHwgbnVsbDtcbiAgICBoZGQ6IG9iamVjdCB8IG51bGw7XG4gICAgY2FzZTogb2JqZWN0IHwgbnVsbDtcbiAgICBwYjogb2JqZWN0IHwgbnVsbDtcbiAgICBwY19mYW46IG9iamVjdCB8IG51bGw7XG4gICAgY3B1X2Nvb2xlcjogb2JqZWN0IHwgbnVsbDtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCAvKiNfX1BVUkVfXyovX2RlZmluZUNvbXBvbmVudCh7XG4gIF9fbmFtZTogJ2ZpcnN0LXNlY3Rpb24nLFxuICBzZXR1cChfX3Byb3BzLCB7IGV4cG9zZTogX19leHBvc2UgfSkge1xuICBfX2V4cG9zZSgpO1xuXG5sZXQgc3dpcGVyOiBSZWY8U3dpcGVyIHwgbnVsbD4gPSByZWYobnVsbClcblxuY29uc3Qgc3dpcGVyQ29udGFpbmVyOiBSZWY8SFRNTEVsZW1lbnQgfCBudWxsPiA9IHJlZihudWxsKVxuXG5jb25zdCBpbml0aWFsaXplU3dpcGVyID0gKCkgPT4ge1xuICAgIHN3aXBlci52YWx1ZSA9IG5ldyBTd2lwZXIoc3dpcGVyQ29udGFpbmVyLnZhbHVlLCB7XG4gICAgICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcbiAgICB9KTtcbn1cblxuY29uc3Qgc3dpcGVyUHJldiA9ICgpID0+IHtcbiAgICBzd2lwZXIudmFsdWUuc2xpZGVQcmV2KCk7XG59XG5jb25zdCBzd2lwZXJOZXh0ID0gKCkgPT4ge1xuICAgIHN3aXBlci52YWx1ZS5zbGlkZU5leHQoKTtcbn1cblxuY29uc3QgY2F0ZWdvcmllczogUmVmPEFycmF5PElQcm9kdWN0Q2F0ZWdvcnlSZXNwb25zZT4+ID0gcmVmKFtdKVxuXG5jb25zdCBjaG9vc2VuQ2F0ZWdvcnk6IFJlZjxJUHJvZHVjdENhdGVnb3J5UmVzcG9uc2UgfCBudWxsPiA9IHJlZihudWxsKVxuXG5jb25zdCB1cGRhdGVDaG9vc2VuQ2F0ZWdvcnkgPSAoY2F0ZWdvcnk6IElQcm9kdWN0Q2F0ZWdvcnlSZXNwb25zZSkgPT4ge1xuICAgIGNob29zZW5DYXRlZ29yeS52YWx1ZSA9IGNhdGVnb3J5XG59XG5cbmNvbnN0IGdldENhdGVnb3JpZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgV09PLmdldCgnL3Byb2R1Y3RzL2NhdGVnb3JpZXMnLCB7XG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgcGVyX3BhZ2U6IDEwMCxcbiAgICAgICAgICAgIHBhcmVudDogMTksXG4gICAgICAgICAgICBvcmRlcjogJ2Rlc2MnLFxuICAgICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xufVxuXG5jb25zdCBwcm9kdWN0czogUmVmPEFycmF5PElQcm9kdWN0Pj4gPSByZWYoW10pXG5cbmNvbnN0IGdldFByb2R1Y3RzID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgV09PLmdldChgcHJvZHVjdHM/Y2F0ZWdvcnk9JHtjaG9vc2VuQ2F0ZWdvcnkudmFsdWUuaWR9YClcblxuICAgIHJldHVybiByZXNwb25zZS5kYXRhXG59XG5cbndhdGNoKGNob29zZW5DYXRlZ29yeSwgYXN5bmMgKCkgPT4ge1xuICAgIGlmIChjaG9vc2VuQ2F0ZWdvcnkpIHtcbiAgICAgICAgcHJvZHVjdHMudmFsdWUgPSBhd2FpdCBnZXRQcm9kdWN0cygpXG4gICAgfVxufSwgeyBkZWVwOiB0cnVlIH0pXG5cblxuY29uc3QgQ29uZmlndXJlUHJvZHVjdDogUmVmPElDb25maWd1cmVQcm9kdWN0PiA9IHJlZih7XG4gICAgY3B1OiBudWxsLFxuICAgIGdwdTogbnVsbCxcbiAgICByYW06IG51bGwsXG4gICAgbW90aGVyYm9hcmQ6IG51bGwsXG4gICAgc3NkOiBudWxsLFxuICAgIGhkZDogbnVsbCxcbiAgICBjYXNlOiBudWxsLFxuICAgIHBiOiBudWxsLFxuICAgIHBjX2ZhbjogbnVsbCxcbiAgICBjcHVfY29vbGVyOiBudWxsLFxufSlcblxub25Nb3VudGVkKGFzeW5jICgpID0+IHtcbiAgICBjYXRlZ29yaWVzLnZhbHVlID0gYXdhaXQgZ2V0Q2F0ZWdvcmllcygpXG5cbiAgICBjaG9vc2VuQ2F0ZWdvcnkudmFsdWUgPSBjYXRlZ29yaWVzLnZhbHVlWzBdXG5cbiAgICBpbml0aWFsaXplU3dpcGVyKClcbn0pXG5cblxuY29uc3QgX19yZXR1cm5lZF9fID0geyBnZXQgc3dpcGVyKCkgeyByZXR1cm4gc3dpcGVyIH0sIHNldCBzd2lwZXIodikgeyBzd2lwZXIgPSB2IH0sIHN3aXBlckNvbnRhaW5lciwgaW5pdGlhbGl6ZVN3aXBlciwgc3dpcGVyUHJldiwgc3dpcGVyTmV4dCwgY2F0ZWdvcmllcywgY2hvb3NlbkNhdGVnb3J5LCB1cGRhdGVDaG9vc2VuQ2F0ZWdvcnksIGdldENhdGVnb3JpZXMsIHByb2R1Y3RzLCBnZXRQcm9kdWN0cywgQ29uZmlndXJlUHJvZHVjdCwgR29vZEl0ZW0gfVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KF9fcmV0dXJuZWRfXywgJ19faXNTY3JpcHRTZXR1cCcsIHsgZW51bWVyYWJsZTogZmFsc2UsIHZhbHVlOiB0cnVlIH0pXG5yZXR1cm4gX19yZXR1cm5lZF9fXG59XG5cbn0pIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJmaXJzdC1zZWN0aW9uLXdyYXBwZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZpcnN0LXNlY3Rpb25cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaXJzdC1zZWN0aW9uLWNvbnRhaW5lciBjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJmaXJzdC1zZWN0aW9uX190aXRsZSB0aXRsZVwiPtCa0L7QvdGE0LjQs9GD0YDQsNGC0L7RgDwvaDE+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpcnN0LXNlY3Rpb24tc2xpZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgcmVmPVwic3dpcGVyQ29udGFpbmVyXCIgY2xhc3M9XCJzd2lwZXItY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3dpcGVyLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IEBjbGljaz1cInVwZGF0ZUNob29zZW5DYXRlZ29yeShjYXRlZ29yeSlcIiB2LWZvcj1cImNhdGVnb3J5IGluIGNhdGVnb3JpZXNcIiA6a2V5PVwiY2F0ZWdvcnkuaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInN3aXBlci1zbGlkZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHYtaWY9XCJjYXRlZ29yeS5pbWFnZVwiIDpzcmM9XCJjYXRlZ29yeS5pbWFnZS5zcmNcIiA6YWx0PVwiY2F0ZWdvcnkuaW1hZ2UubmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57eyBjYXRlZ29yeS5uYW1lIH19PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaXJzdC1zZWN0aW9uLXByb2R1Y3RzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlyc3Qtc2VjdGlvbi1nb29kc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEdvb2RJdGVtIHYtZm9yPVwicHJvZHVjdCBpbiBwcm9kdWN0c1wiIDprZXk9XCJwcm9kdWN0LmlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw6YWRkaW5nLWZpZWxkPVwiQ29uZmlndXJlUHJvZHVjdFtjaG9vc2VuQ2F0ZWdvcnkuc2x1Z11cIlxuICAgICAgICAgICAgICAgICAgICAgICAgOnByb2R1Y3Q9XCJwcm9kdWN0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaXJzdC1zZWN0aW9uLWZpbHRlcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gPEN1c3RvbVNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAvPiAtLT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgUmVmLCBjb21wdXRlZCwgb25Nb3VudGVkLCByZWYsIHdhdGNoIH0gZnJvbSAndnVlJztcbmltcG9ydCBXT08gZnJvbSAnQC9heGlvc1dvb2NvbWVyY2UnXG5pbXBvcnQgeyBJUHJvZHVjdCwgSVByb2R1Y3RDYXRlZ29yeVJlc3BvbnNlIH0gZnJvbSAnQC90eXBlcy9Qcm9kdWN0JztcblxuaW1wb3J0IFN3aXBlciBmcm9tICdzd2lwZXInO1xuaW1wb3J0ICdzd2lwZXIvY3NzJztcbmltcG9ydCBHb29kSXRlbSBmcm9tICdAL2NvbXBvbmVudHMvR29vZEl0ZW0udnVlJztcbmltcG9ydCBDdXN0b21TZWxlY3QgZnJvbSAnQC9jb21wb25lbnRzL0N1c3RvbVNlbGVjdC52dWUnO1xuXG5sZXQgc3dpcGVyOiBSZWY8U3dpcGVyIHwgbnVsbD4gPSByZWYobnVsbClcblxuY29uc3Qgc3dpcGVyQ29udGFpbmVyOiBSZWY8SFRNTEVsZW1lbnQgfCBudWxsPiA9IHJlZihudWxsKVxuXG5jb25zdCBpbml0aWFsaXplU3dpcGVyID0gKCkgPT4ge1xuICAgIHN3aXBlci52YWx1ZSA9IG5ldyBTd2lwZXIoc3dpcGVyQ29udGFpbmVyLnZhbHVlLCB7XG4gICAgICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcbiAgICB9KTtcbn1cblxuY29uc3Qgc3dpcGVyUHJldiA9ICgpID0+IHtcbiAgICBzd2lwZXIudmFsdWUuc2xpZGVQcmV2KCk7XG59XG5jb25zdCBzd2lwZXJOZXh0ID0gKCkgPT4ge1xuICAgIHN3aXBlci52YWx1ZS5zbGlkZU5leHQoKTtcbn1cblxuY29uc3QgY2F0ZWdvcmllczogUmVmPEFycmF5PElQcm9kdWN0Q2F0ZWdvcnlSZXNwb25zZT4+ID0gcmVmKFtdKVxuXG5jb25zdCBjaG9vc2VuQ2F0ZWdvcnk6IFJlZjxJUHJvZHVjdENhdGVnb3J5UmVzcG9uc2UgfCBudWxsPiA9IHJlZihudWxsKVxuXG5jb25zdCB1cGRhdGVDaG9vc2VuQ2F0ZWdvcnkgPSAoY2F0ZWdvcnk6IElQcm9kdWN0Q2F0ZWdvcnlSZXNwb25zZSkgPT4ge1xuICAgIGNob29zZW5DYXRlZ29yeS52YWx1ZSA9IGNhdGVnb3J5XG59XG5cbmNvbnN0IGdldENhdGVnb3JpZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgV09PLmdldCgnL3Byb2R1Y3RzL2NhdGVnb3JpZXMnLCB7XG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgcGVyX3BhZ2U6IDEwMCxcbiAgICAgICAgICAgIHBhcmVudDogMTksXG4gICAgICAgICAgICBvcmRlcjogJ2Rlc2MnLFxuICAgICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xufVxuXG5jb25zdCBwcm9kdWN0czogUmVmPEFycmF5PElQcm9kdWN0Pj4gPSByZWYoW10pXG5cbmNvbnN0IGdldFByb2R1Y3RzID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgV09PLmdldChgcHJvZHVjdHM/Y2F0ZWdvcnk9JHtjaG9vc2VuQ2F0ZWdvcnkudmFsdWUuaWR9YClcblxuICAgIHJldHVybiByZXNwb25zZS5kYXRhXG59XG5cbndhdGNoKGNob29zZW5DYXRlZ29yeSwgYXN5bmMgKCkgPT4ge1xuICAgIGlmIChjaG9vc2VuQ2F0ZWdvcnkpIHtcbiAgICAgICAgcHJvZHVjdHMudmFsdWUgPSBhd2FpdCBnZXRQcm9kdWN0cygpXG4gICAgfVxufSwgeyBkZWVwOiB0cnVlIH0pXG5cblxuaW50ZXJmYWNlIElDb25maWd1cmVQcm9kdWN0IHtcbiAgICBjcHU6IG9iamVjdCB8IG51bGw7XG4gICAgZ3B1OiBvYmplY3QgfCBudWxsO1xuICAgIHJhbTogb2JqZWN0IHwgbnVsbDtcbiAgICBtb3RoZXJib2FyZDogb2JqZWN0IHwgbnVsbDtcbiAgICBzc2Q6IG9iamVjdCB8IG51bGw7XG4gICAgaGRkOiBvYmplY3QgfCBudWxsO1xuICAgIGNhc2U6IG9iamVjdCB8IG51bGw7XG4gICAgcGI6IG9iamVjdCB8IG51bGw7XG4gICAgcGNfZmFuOiBvYmplY3QgfCBudWxsO1xuICAgIGNwdV9jb29sZXI6IG9iamVjdCB8IG51bGw7XG59XG5cbmNvbnN0IENvbmZpZ3VyZVByb2R1Y3Q6IFJlZjxJQ29uZmlndXJlUHJvZHVjdD4gPSByZWYoe1xuICAgIGNwdTogbnVsbCxcbiAgICBncHU6IG51bGwsXG4gICAgcmFtOiBudWxsLFxuICAgIG1vdGhlcmJvYXJkOiBudWxsLFxuICAgIHNzZDogbnVsbCxcbiAgICBoZGQ6IG51bGwsXG4gICAgY2FzZTogbnVsbCxcbiAgICBwYjogbnVsbCxcbiAgICBwY19mYW46IG51bGwsXG4gICAgY3B1X2Nvb2xlcjogbnVsbCxcbn0pXG5cbm9uTW91bnRlZChhc3luYyAoKSA9PiB7XG4gICAgY2F0ZWdvcmllcy52YWx1ZSA9IGF3YWl0IGdldENhdGVnb3JpZXMoKVxuXG4gICAgY2hvb3NlbkNhdGVnb3J5LnZhbHVlID0gY2F0ZWdvcmllcy52YWx1ZVswXVxuXG4gICAgaW5pdGlhbGl6ZVN3aXBlcigpXG59KVxuXG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxuLmZpcnN0LXNlY3Rpb24tY29udGFpbmVyIHt9XG5cbi5maXJzdC1zZWN0aW9uIHtcbiAgICBwYWRkaW5nOiAxMjBweCAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5LCAxOSwgMTkpO1xuXG4gICAgJl9fdGl0bGUge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDgwcHg7XG4gICAgfVxufVxuXG4uZmlyc3Qtc2VjdGlvbi1zbGlkZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XG59XG5cbi5zd2lwZXItY29udGFpbmVyIHtcblxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cblxuXG4uZmlyc3Qtc2VjdGlvbi13cmFwcGVye1xuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcbn1cbi5zd2lwZXItd3JhcHBlciB7XG4gICAgLy8gZGlzcGxheTogZmxleDtcbiAgICAvLyBnYXA6IDMwcHg7XG4gICAgLy8gd2lkdGg6IDEwMCU7XG59XG5cbi5zd2lwZXItc2xpZGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZ2FwOiAxNXB4O1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNCwgMjQsIDI0KTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogMTVweDtcblxuICAgIGltZyB7XG4gICAgICAgIGhlaWdodDogODBweDtcbiAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgfVxuXG4gICAgcCB7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbn1cblxuLmZpcnN0LXNlY3Rpb24tcHJvZHVjdHMtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNWZyIDJmcjtcbiAgICBnYXA6IDQwcHg7XG59XG5cbi5maXJzdC1zZWN0aW9uLWdvb2RzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxMHB4O1xufVxuXG4uZmlyc3Qtc2VjdGlvbi1maWx0ZXJzIHtcbiAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0LCAyNCwgMjQpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiA2cHg7XG59XG48L3N0eWxlPiIsImltcG9ydCB7IGRlZmluZUNvbXBvbmVudCBhcyBfZGVmaW5lQ29tcG9uZW50IH0gZnJvbSAndnVlJ1xuaW1wb3J0IEZpcnN0U2VjdGlvbiBmcm9tICdAL3NlY3Rpb25zL2NvbmZpZ3VyYXRvci9maXJzdC1zZWN0aW9uLnZ1ZSdcbmltcG9ydCB7IGdldFBhZ2VTZXR0aW5ncyB9IGZyb20gJ0AvYXBpL0FwcC9nZXRQYWdlU2V0dGluZ3MnO1xuaW1wb3J0IHsgdXNlTG9hZCB9IGZyb20gJ0AvaG9va3MvQXBwL3VzZUxvYWQnO1xuaW1wb3J0IHsgdXNlUGFnZVNldHRpbmdzIH0gZnJvbSAnQC9ob29rcy9BcHAvdXNlUGFnZVNldHRpbmdzJztcbmltcG9ydCBzdG9yZSBmcm9tICdAL3N0b3JlJztcbmltcG9ydCB7IG9uTW91bnRlZCwgcmVmIH0gZnJvbSAndnVlJztcblxuZGVjbGFyZSB2YXIgcHJlbG9hZGVyQ2xvc2U6ICgpID0+IHZvaWQ7XG5cblxuZXhwb3J0IGRlZmF1bHQgLyojX19QVVJFX18qL19kZWZpbmVDb21wb25lbnQoe1xuICBfX25hbWU6ICdjb25maWd1cmF0b3InLFxuICBzZXR1cChfX3Byb3BzLCB7IGV4cG9zZTogX19leHBvc2UgfSkge1xuICBfX2V4cG9zZSgpO1xuXG5jb25zdCBpc1BhZ2VEYXRhTG9hZGVkID0gcmVmKGZhbHNlKVxuXG5sZXQgeyBsb2FkZXIgfSA9IHVzZUxvYWQoMilcblxubG9hZGVyLnZhbHVlLm9uQWxsaXNMb2FkZWQgPSAoKSA9PiB7XG4gICAgcHJlbG9hZGVyQ2xvc2UoKVxuICAgIGxvYWRlci52YWx1ZS5yZXN0YXJ0KClcbn1cblxuXG5sZXQgeyBwYWdlIH0gPSB1c2VQYWdlU2V0dGluZ3Moc3RvcmUpXG5cbm9uTW91bnRlZChhc3luYyAoKSA9PiB7XG4gICAgcGFnZS52YWx1ZSA9IGF3YWl0IGdldFBhZ2VTZXR0aW5ncygzMzEpXG5cbiAgICBpc1BhZ2VEYXRhTG9hZGVkLnZhbHVlID0gdHJ1ZVxuXG4gICAgcHJlbG9hZGVyQ2xvc2UoKVxufSlcblxuXG5jb25zdCBfX3JldHVybmVkX18gPSB7IGlzUGFnZURhdGFMb2FkZWQsIGdldCBsb2FkZXIoKSB7IHJldHVybiBsb2FkZXIgfSwgc2V0IGxvYWRlcih2KSB7IGxvYWRlciA9IHYgfSwgZ2V0IHBhZ2UoKSB7IHJldHVybiBwYWdlIH0sIHNldCBwYWdlKHYpIHsgcGFnZSA9IHYgfSwgRmlyc3RTZWN0aW9uIH1cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShfX3JldHVybmVkX18sICdfX2lzU2NyaXB0U2V0dXAnLCB7IGVudW1lcmFibGU6IGZhbHNlLCB2YWx1ZTogdHJ1ZSB9KVxucmV0dXJuIF9fcmV0dXJuZWRfX1xufVxuXG59KSIsIjx0ZW1wbGF0ZT5cbiAgICA8bWFpbiB2LWlmPVwiaXNQYWdlRGF0YUxvYWRlZFwiPlxuICAgICAgICA8Rmlyc3RTZWN0aW9uLz5cbiAgICA8L21haW4+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IEZpcnN0U2VjdGlvbiBmcm9tICdAL3NlY3Rpb25zL2NvbmZpZ3VyYXRvci9maXJzdC1zZWN0aW9uLnZ1ZSdcbmltcG9ydCB7IGdldFBhZ2VTZXR0aW5ncyB9IGZyb20gJ0AvYXBpL0FwcC9nZXRQYWdlU2V0dGluZ3MnO1xuaW1wb3J0IHsgdXNlTG9hZCB9IGZyb20gJ0AvaG9va3MvQXBwL3VzZUxvYWQnO1xuaW1wb3J0IHsgdXNlUGFnZVNldHRpbmdzIH0gZnJvbSAnQC9ob29rcy9BcHAvdXNlUGFnZVNldHRpbmdzJztcbmltcG9ydCBzdG9yZSBmcm9tICdAL3N0b3JlJztcbmltcG9ydCB7IG9uTW91bnRlZCwgcmVmIH0gZnJvbSAndnVlJztcblxuY29uc3QgaXNQYWdlRGF0YUxvYWRlZCA9IHJlZihmYWxzZSlcblxubGV0IHsgbG9hZGVyIH0gPSB1c2VMb2FkKDIpXG5cbmRlY2xhcmUgdmFyIHByZWxvYWRlckNsb3NlOiAoKSA9PiB2b2lkO1xuXG5sb2FkZXIudmFsdWUub25BbGxpc0xvYWRlZCA9ICgpID0+IHtcbiAgICBwcmVsb2FkZXJDbG9zZSgpXG4gICAgbG9hZGVyLnZhbHVlLnJlc3RhcnQoKVxufVxuXG5cbmxldCB7IHBhZ2UgfSA9IHVzZVBhZ2VTZXR0aW5ncyhzdG9yZSlcblxub25Nb3VudGVkKGFzeW5jICgpID0+IHtcbiAgICBwYWdlLnZhbHVlID0gYXdhaXQgZ2V0UGFnZVNldHRpbmdzKDMzMSlcblxuICAgIGlzUGFnZURhdGFMb2FkZWQudmFsdWUgPSB0cnVlXG5cbiAgICBwcmVsb2FkZXJDbG9zZSgpXG59KVxuXG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPjwvc3R5bGU+IiwiaW1wb3J0IHsgdG9EaXNwbGF5U3RyaW5nIGFzIF90b0Rpc3BsYXlTdHJpbmcsIGNyZWF0ZUVsZW1lbnRWTm9kZSBhcyBfY3JlYXRlRWxlbWVudFZOb2RlLCBvcGVuQmxvY2sgYXMgX29wZW5CbG9jaywgY3JlYXRlRWxlbWVudEJsb2NrIGFzIF9jcmVhdGVFbGVtZW50QmxvY2sgfSBmcm9tIFwidnVlXCJcblxuY29uc3QgX2hvaXN0ZWRfMSA9IHsgY2xhc3M6IFwiY2FydC1idXR0b25cIiB9XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eDogYW55LF9jYWNoZTogYW55LCRwcm9wczogYW55LCRzZXR1cDogYW55LCRkYXRhOiBhbnksJG9wdGlvbnM6IGFueSkge1xuICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcImRpdlwiLCBfaG9pc3RlZF8xLCBbXG4gICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImJ1dHRvblwiLCB7XG4gICAgICBvbkNsaWNrOiAkc2V0dXAub25DbGljayxcbiAgICAgIGNsYXNzOiBcImJ1dHRvbiBjYXJ0LWJ1dHRvbl9fYnV0dG9uXCJcbiAgICB9LCBfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC5wcm9kdWN0SW5BZGRpbmdGaWVsZCA/ICfQo9Cx0YDQsNGC0YwnIDogJ9CU0L7QsdCw0LLQuNGC0YwnKSwgMSAvKiBURVhUICovKVxuICBdKSlcbn0iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50Vk5vZGUgYXMgX2NyZWF0ZUVsZW1lbnRWTm9kZSwgdG9EaXNwbGF5U3RyaW5nIGFzIF90b0Rpc3BsYXlTdHJpbmcsIGNyZWF0ZVZOb2RlIGFzIF9jcmVhdGVWTm9kZSwgb3BlbkJsb2NrIGFzIF9vcGVuQmxvY2ssIGNyZWF0ZUVsZW1lbnRCbG9jayBhcyBfY3JlYXRlRWxlbWVudEJsb2NrLCBwdXNoU2NvcGVJZCBhcyBfcHVzaFNjb3BlSWQsIHBvcFNjb3BlSWQgYXMgX3BvcFNjb3BlSWQgfSBmcm9tIFwidnVlXCJcblxuY29uc3QgX3dpdGhTY29wZUlkID0gbiA9PiAoX3B1c2hTY29wZUlkKFwiZGF0YS12LTFmZGU5Y2MwXCIpLG49bigpLF9wb3BTY29wZUlkKCksbilcbmNvbnN0IF9ob2lzdGVkXzEgPSB7IGNsYXNzOiBcImdvb2QtaXRlbVwiIH1cbmNvbnN0IF9ob2lzdGVkXzIgPSB7IGNsYXNzOiBcImdvb2QtaXRlbV9faW1hZ2UtYm94XCIgfVxuY29uc3QgX2hvaXN0ZWRfMyA9IFtcInNyY1wiLCBcImFsdFwiXVxuY29uc3QgX2hvaXN0ZWRfNCA9IHsgY2xhc3M6IFwiZ29vZC1pdGVtLWNvbnRlbnRcIiB9XG5jb25zdCBfaG9pc3RlZF81ID0geyBjbGFzczogXCJnb29kLWl0ZW0tY29udGVudF9fZGVzY3JpcHRpb25cIiB9XG5jb25zdCBfaG9pc3RlZF82ID0geyBjbGFzczogXCJnb29kLWl0ZW0tY29udGVudF9fdGl0bGVcIiB9XG5jb25zdCBfaG9pc3RlZF83ID0geyBjbGFzczogXCJnb29kLWl0ZW0tY29udGVudF9fcHJpY2VcIiB9XG5jb25zdCBfaG9pc3RlZF84ID0geyBjbGFzczogXCJnb29kLWl0ZW0tY29udGVudF9fcXVhbnRpdHktYm94XCIgfVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKF9jdHg6IGFueSxfY2FjaGU6IGFueSwkcHJvcHM6IGFueSwkc2V0dXA6IGFueSwkZGF0YTogYW55LCRvcHRpb25zOiBhbnkpIHtcbiAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJkaXZcIiwgX2hvaXN0ZWRfMSwgW1xuICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfMiwgW1xuICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImltZ1wiLCB7XG4gICAgICAgIGNsYXNzOiBcImdvb2QtaXRlbV9faW1hZ2VcIixcbiAgICAgICAgc3JjOiAkc2V0dXAucHJvZHVjdC5pbWFnZXNbMF0uc3JjLFxuICAgICAgICBhbHQ6ICRzZXR1cC5wcm9kdWN0Lm5hbWVcbiAgICAgIH0sIG51bGwsIDggLyogUFJPUFMgKi8sIF9ob2lzdGVkXzMpXG4gICAgXSksXG4gICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF80LCBbXG4gICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzUsIFtcbiAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcInBcIiwgX2hvaXN0ZWRfNiwgX3RvRGlzcGxheVN0cmluZygkc2V0dXAucHJvZHVjdC5uYW1lKSwgMSAvKiBURVhUICovKSxcbiAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcInBcIiwgX2hvaXN0ZWRfNywgX3RvRGlzcGxheVN0cmluZygkc2V0dXAucHJvZHVjdC5wcmljZSkgKyBcIiDRgNGD0LEgLyDRiNGCXCIsIDEgLyogVEVYVCAqLylcbiAgICAgIF0pLFxuICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF84LCBbXG4gICAgICAgIF9jcmVhdGVWTm9kZSgkc2V0dXBbXCJDYXJ0QnV0dG9uRWFzbHlcIl0sIHtcbiAgICAgICAgICBwcm9kdWN0OiAkc2V0dXAucHJvZHVjdCxcbiAgICAgICAgICBcImFkZGluZy1maWVsZFwiOiAkc2V0dXAuYWRkaW5nRmllbGQsXG4gICAgICAgICAgXCJvblVwZGF0ZTphZGRpbmdGaWVsZFwiOiBfY2FjaGVbMF0gfHwgKF9jYWNoZVswXSA9ICgkZXZlbnQ6IGFueSkgPT4gKCRzZXR1cC5lbWl0KCd1cGRhdGU6YWRkaW5nRmllbGQnLCAkZXZlbnQpKSlcbiAgICAgICAgfSwgbnVsbCwgOCAvKiBQUk9QUyAqLywgW1wicHJvZHVjdFwiLCBcImFkZGluZy1maWVsZFwiXSksXG4gICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJwXCIsIHtcbiAgICAgICAgICBjbGFzczogXCJnb29kLWl0ZW0tY29udGVudF9fc3BlYy1idXR0b25cIixcbiAgICAgICAgICBvbkNsaWNrOiAkc2V0dXAub25DbGlja1xuICAgICAgICB9LCBcItCf0L7QtNGA0L7QsdC90LXQtVwiKVxuICAgICAgXSlcbiAgICBdKVxuICBdKSlcbn0iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50Vk5vZGUgYXMgX2NyZWF0ZUVsZW1lbnRWTm9kZSwgcmVuZGVyTGlzdCBhcyBfcmVuZGVyTGlzdCwgRnJhZ21lbnQgYXMgX0ZyYWdtZW50LCBvcGVuQmxvY2sgYXMgX29wZW5CbG9jaywgY3JlYXRlRWxlbWVudEJsb2NrIGFzIF9jcmVhdGVFbGVtZW50QmxvY2ssIGNyZWF0ZUNvbW1lbnRWTm9kZSBhcyBfY3JlYXRlQ29tbWVudFZOb2RlLCB0b0Rpc3BsYXlTdHJpbmcgYXMgX3RvRGlzcGxheVN0cmluZywgY3JlYXRlQmxvY2sgYXMgX2NyZWF0ZUJsb2NrLCBwdXNoU2NvcGVJZCBhcyBfcHVzaFNjb3BlSWQsIHBvcFNjb3BlSWQgYXMgX3BvcFNjb3BlSWQgfSBmcm9tIFwidnVlXCJcblxuY29uc3QgX3dpdGhTY29wZUlkID0gbiA9PiAoX3B1c2hTY29wZUlkKFwiZGF0YS12LTI2Y2FhZmI0XCIpLG49bigpLF9wb3BTY29wZUlkKCksbilcbmNvbnN0IF9ob2lzdGVkXzEgPSB7IGNsYXNzOiBcImZpcnN0LXNlY3Rpb24td3JhcHBlclwiIH1cbmNvbnN0IF9ob2lzdGVkXzIgPSB7IGNsYXNzOiBcImZpcnN0LXNlY3Rpb25cIiB9XG5jb25zdCBfaG9pc3RlZF8zID0geyBjbGFzczogXCJmaXJzdC1zZWN0aW9uLWNvbnRhaW5lciBjb250YWluZXJcIiB9XG5jb25zdCBfaG9pc3RlZF80ID0gLyojX19QVVJFX18qLyBfd2l0aFNjb3BlSWQoKCkgPT4gLyojX19QVVJFX18qL19jcmVhdGVFbGVtZW50Vk5vZGUoXCJoMVwiLCB7IGNsYXNzOiBcImZpcnN0LXNlY3Rpb25fX3RpdGxlIHRpdGxlXCIgfSwgXCLQmtC+0L3RhNC40LPRg9GA0LDRgtC+0YBcIiwgLTEgLyogSE9JU1RFRCAqLykpXG5jb25zdCBfaG9pc3RlZF81ID0geyBjbGFzczogXCJmaXJzdC1zZWN0aW9uLXNsaWRlclwiIH1cbmNvbnN0IF9ob2lzdGVkXzYgPSB7XG4gIHJlZjogXCJzd2lwZXJDb250YWluZXJcIixcbiAgY2xhc3M6IFwic3dpcGVyLWNvbnRhaW5lclwiXG59XG5jb25zdCBfaG9pc3RlZF83ID0geyBjbGFzczogXCJzd2lwZXItd3JhcHBlclwiIH1cbmNvbnN0IF9ob2lzdGVkXzggPSBbXCJvbkNsaWNrXCJdXG5jb25zdCBfaG9pc3RlZF85ID0gW1wic3JjXCIsIFwiYWx0XCJdXG5jb25zdCBfaG9pc3RlZF8xMCA9IHsgY2xhc3M6IFwiZmlyc3Qtc2VjdGlvbi1wcm9kdWN0cy1jb250YWluZXJcIiB9XG5jb25zdCBfaG9pc3RlZF8xMSA9IHsgY2xhc3M6IFwiZmlyc3Qtc2VjdGlvbi1nb29kc1wiIH1cbmNvbnN0IF9ob2lzdGVkXzEyID0gLyojX19QVVJFX18qLyBfd2l0aFNjb3BlSWQoKCkgPT4gLyojX19QVVJFX18qL19jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgeyBjbGFzczogXCJmaXJzdC1zZWN0aW9uLWZpbHRlcnNcIiB9LCBbXG4gIC8qI19fUFVSRV9fKi9fY3JlYXRlQ29tbWVudFZOb2RlKFwiIDxDdXN0b21TZWxlY3RcXG4gICAgICAgICAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgICAgICAgICAvPiBcIilcbl0sIC0xIC8qIEhPSVNURUQgKi8pKVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKF9jdHg6IGFueSxfY2FjaGU6IGFueSwkcHJvcHM6IGFueSwkc2V0dXA6IGFueSwkZGF0YTogYW55LCRvcHRpb25zOiBhbnkpIHtcbiAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJkaXZcIiwgX2hvaXN0ZWRfMSwgW1xuICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfMiwgW1xuICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF8zLCBbXG4gICAgICAgIF9ob2lzdGVkXzQsXG4gICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfNSwgW1xuICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfNiwgW1xuICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF83LCBbXG4gICAgICAgICAgICAgIChfb3BlbkJsb2NrKHRydWUpLCBfY3JlYXRlRWxlbWVudEJsb2NrKF9GcmFnbWVudCwgbnVsbCwgX3JlbmRlckxpc3QoJHNldHVwLmNhdGVnb3JpZXMsIChjYXRlZ29yeSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s6ICgkZXZlbnQ6IGFueSkgPT4gKCRzZXR1cC51cGRhdGVDaG9vc2VuQ2F0ZWdvcnkoY2F0ZWdvcnkpKSxcbiAgICAgICAgICAgICAgICAgIGtleTogY2F0ZWdvcnkuaWQsXG4gICAgICAgICAgICAgICAgICBjbGFzczogXCJzd2lwZXItc2xpZGVcIlxuICAgICAgICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgICAgICAgIChjYXRlZ29yeS5pbWFnZSlcbiAgICAgICAgICAgICAgICAgICAgPyAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogY2F0ZWdvcnkuaW1hZ2Uuc3JjLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiBjYXRlZ29yeS5pbWFnZS5uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgfSwgbnVsbCwgOCAvKiBQUk9QUyAqLywgX2hvaXN0ZWRfOSkpXG4gICAgICAgICAgICAgICAgICAgIDogX2NyZWF0ZUNvbW1lbnRWTm9kZShcInYtaWZcIiwgdHJ1ZSksXG4gICAgICAgICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwicFwiLCBudWxsLCBfdG9EaXNwbGF5U3RyaW5nKGNhdGVnb3J5Lm5hbWUpLCAxIC8qIFRFWFQgKi8pXG4gICAgICAgICAgICAgICAgXSwgOCAvKiBQUk9QUyAqLywgX2hvaXN0ZWRfOCkpXG4gICAgICAgICAgICAgIH0pLCAxMjggLyogS0VZRURfRlJBR01FTlQgKi8pKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdLCA1MTIgLyogTkVFRF9QQVRDSCAqLylcbiAgICAgICAgXSksXG4gICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfMTAsIFtcbiAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzExLCBbXG4gICAgICAgICAgICAoX29wZW5CbG9jayh0cnVlKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhfRnJhZ21lbnQsIG51bGwsIF9yZW5kZXJMaXN0KCRzZXR1cC5wcm9kdWN0cywgKHByb2R1Y3QpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVCbG9jaygkc2V0dXBbXCJHb29kSXRlbVwiXSwge1xuICAgICAgICAgICAgICAgIGtleTogcHJvZHVjdC5pZCxcbiAgICAgICAgICAgICAgICBcImFkZGluZy1maWVsZFwiOiAkc2V0dXAuQ29uZmlndXJlUHJvZHVjdFskc2V0dXAuY2hvb3NlbkNhdGVnb3J5LnNsdWddLFxuICAgICAgICAgICAgICAgIFwib25VcGRhdGU6YWRkaW5nRmllbGRcIjogX2NhY2hlWzBdIHx8IChfY2FjaGVbMF0gPSAoJGV2ZW50OiBhbnkpID0+ICgoJHNldHVwLkNvbmZpZ3VyZVByb2R1Y3RbJHNldHVwLmNob29zZW5DYXRlZ29yeS5zbHVnXSkgPSAkZXZlbnQpKSxcbiAgICAgICAgICAgICAgICBwcm9kdWN0OiBwcm9kdWN0XG4gICAgICAgICAgICAgIH0sIG51bGwsIDggLyogUFJPUFMgKi8sIFtcImFkZGluZy1maWVsZFwiLCBcInByb2R1Y3RcIl0pKVxuICAgICAgICAgICAgfSksIDEyOCAvKiBLRVlFRF9GUkFHTUVOVCAqLykpXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX2hvaXN0ZWRfMTJcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgXSlcbiAgXSkpXG59IiwiaW1wb3J0IHsgY3JlYXRlVk5vZGUgYXMgX2NyZWF0ZVZOb2RlLCBvcGVuQmxvY2sgYXMgX29wZW5CbG9jaywgY3JlYXRlRWxlbWVudEJsb2NrIGFzIF9jcmVhdGVFbGVtZW50QmxvY2ssIGNyZWF0ZUNvbW1lbnRWTm9kZSBhcyBfY3JlYXRlQ29tbWVudFZOb2RlIH0gZnJvbSBcInZ1ZVwiXG5cbmNvbnN0IF9ob2lzdGVkXzEgPSB7IGtleTogMCB9XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eDogYW55LF9jYWNoZTogYW55LCRwcm9wczogYW55LCRzZXR1cDogYW55LCRkYXRhOiBhbnksJG9wdGlvbnM6IGFueSkge1xuICByZXR1cm4gKCRzZXR1cC5pc1BhZ2VEYXRhTG9hZGVkKVxuICAgID8gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcIm1haW5cIiwgX2hvaXN0ZWRfMSwgW1xuICAgICAgICBfY3JlYXRlVk5vZGUoJHNldHVwW1wiRmlyc3RTZWN0aW9uXCJdKVxuICAgICAgXSkpXG4gICAgOiBfY3JlYXRlQ29tbWVudFZOb2RlKFwidi1pZlwiLCB0cnVlKVxufSIsImltcG9ydCBXUCBmcm9tICdAL2F4aW9zV1AnXG5pbXBvcnQgeyBTZXR0aW5ncyB9IGZyb20gJ0AvdHlwZXMvQXBwJ1xuXG5cblxuZXhwb3J0IGNvbnN0IGdldFBhZ2VTZXR0aW5ncyA9IGFzeW5jIChpZDogbnVtYmVyKTogUHJvbWlzZTxTZXR0aW5ncz4gPT4ge1xuICAgIHJldHVybiBhd2FpdCBXUC5nZXQoJ3BhZ2VzLycgKyBpZCkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5kYXRhKVxufSIsImltcG9ydCB7IFJlZiwgY29tcHV0ZWQsIHJlZiwgd2F0Y2ggfSBmcm9tIFwidnVlXCI7XG5cbmNsYXNzIExvYWRlciB7XG5cbiAgICBwcml2YXRlIGxvYWRlZENvdW50ZXI6IG51bWJlciA9IDA7XG5cbiAgICBwcml2YXRlIGNvdW50ZXI6IG51bWJlciA9IDA7XG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGNvdW50ZXI6IG51bWJlcikge1xuICAgICAgICB0aGlzLmNvdW50ZXIgPSBjb3VudGVyO1xuICAgIH1cbiAgICBwdWJsaWMgbG9hZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5sb2FkZWRDb3VudGVyKys7XG5cbiAgICAgICAgdGhpcy5hZnRlckxvYWQoKVxuICAgIH1cbiAgICBwdWJsaWMgcmVzdGFydChjb3VudD86IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAoY291bnQpIHtcbiAgICAgICAgICAgIHRoaXMuY291bnRlciA9IGNvdW50XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxvYWRlZENvdW50ZXIgPSAwO1xuICAgIH1cbiAgICBwdWJsaWMgb25BbGxpc0xvYWRlZDogRnVuY3Rpb247XG4gICAgcHJpdmF0ZSBhZnRlckxvYWQoKTogdm9pZCB7XG5cbiAgICAgICAgaWYgKHRoaXMubG9hZGVkQ291bnRlciAhPSB0aGlzLmNvdW50ZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm9uQWxsaXNMb2FkZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9uQWxsaXNMb2FkZWQoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5leHBvcnQgY29uc3QgdXNlTG9hZCA9IChjb3VudDogbnVtYmVyKSA9PiB7XG5cbiAgICBjb25zdCBsb2FkZXIgPSByZWYobmV3IExvYWRlcihjb3VudCkpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbG9hZGVyLFxuICAgIH1cbn0iLCJpbXBvcnQgU3RvcmUsIHsgTXV0YXRpb25zIH0gZnJvbSAnQC9zdG9yZSc7XG5pbXBvcnQgeyBXcml0YWJsZUNvbXB1dGVkUmVmLCBjb21wdXRlZCB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgeyBJQ2F0ZWdvcnlNYWluUGFnZSwgU2V0dGluZ3MgfSBmcm9tICdAL3R5cGVzL0FwcCc7XG5cblxuZXhwb3J0IGNvbnN0IHVzZVBhZ2VTZXR0aW5ncyA9IChzdG9yZTogdHlwZW9mIFN0b3JlKSA9PiB7XG5cbiAgICBsZXQgcGFnZTogV3JpdGFibGVDb21wdXRlZFJlZjxPYmplY3Q+ID0gY29tcHV0ZWQoe1xuICAgICAgICBnZXQ6ICgpID0+IHN0b3JlLnN0YXRlLnBhZ2UuY2ZzLFxuICAgICAgICBzZXQ6ICh2YWx1ZTogU2V0dGluZ3MpID0+IHN0b3JlLmNvbW1pdChNdXRhdGlvbnMuU0VUX1BBR0VfU0VUVElOR1MsIHZhbHVlKSxcbiAgICB9KVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVxuICAgIH1cblxufSIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL0NhcnRCdXR0b25FYXNseS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmQ3NGJjZDImdHM9dHJ1ZVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0NhcnRCdXR0b25FYXNseS52dWU/dnVlJnR5cGU9c2NyaXB0JnNldHVwPXRydWUmbGFuZz10c1wiXG5leHBvcnQgKiBmcm9tIFwiLi9DYXJ0QnV0dG9uRWFzbHkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZzZXR1cD10cnVlJmxhbmc9dHNcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2V4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl0sWydfX2ZpbGUnLFwic3JjL2NvbXBvbmVudHMvQ2FydEJ1dHRvbkVhc2x5LnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCI2ZDc0YmNkMlwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzZkNzRiY2QyJywgX19leHBvcnRzX18pKSB7XG4gICAgYXBpLnJlbG9hZCgnNmQ3NGJjZDInLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0NhcnRCdXR0b25FYXNseS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmQ3NGJjZDImdHM9dHJ1ZVwiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCc2ZDc0YmNkMicsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vR29vZEl0ZW0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFmZGU5Y2MwJnNjb3BlZD10cnVlJnRzPXRydWVcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Hb29kSXRlbS52dWU/dnVlJnR5cGU9c2NyaXB0JnNldHVwPXRydWUmbGFuZz10c1wiXG5leHBvcnQgKiBmcm9tIFwiLi9Hb29kSXRlbS52dWU/dnVlJnR5cGU9c2NyaXB0JnNldHVwPXRydWUmbGFuZz10c1wiXG5cbmltcG9ydCBcIi4vR29vZEl0ZW0udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MWZkZTljYzAmbGFuZz1zY3NzJnNjb3BlZD10cnVlXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19zY29wZUlkJyxcImRhdGEtdi0xZmRlOWNjMFwiXSxbJ19fZmlsZScsXCJzcmMvY29tcG9uZW50cy9Hb29kSXRlbS52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiMWZkZTljYzBcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCcxZmRlOWNjMCcsIF9fZXhwb3J0c19fKSkge1xuICAgIGFwaS5yZWxvYWQoJzFmZGU5Y2MwJywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Hb29kSXRlbS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWZkZTljYzAmc2NvcGVkPXRydWUmdHM9dHJ1ZVwiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCcxZmRlOWNjMCcsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vZmlyc3Qtc2VjdGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjZjYWFmYjQmc2NvcGVkPXRydWUmdHM9dHJ1ZVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2ZpcnN0LXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZzZXR1cD10cnVlJmxhbmc9dHNcIlxuZXhwb3J0ICogZnJvbSBcIi4vZmlyc3Qtc2VjdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0JnNldHVwPXRydWUmbGFuZz10c1wiXG5cbmltcG9ydCBcIi4vZmlyc3Qtc2VjdGlvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yNmNhYWZiNCZsYW5nPXNjc3Mmc2NvcGVkPXRydWVcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2V4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl0sWydfX3Njb3BlSWQnLFwiZGF0YS12LTI2Y2FhZmI0XCJdLFsnX19maWxlJyxcInNyYy9zZWN0aW9ucy9jb25maWd1cmF0b3IvZmlyc3Qtc2VjdGlvbi52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiMjZjYWFmYjRcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCcyNmNhYWZiNCcsIF9fZXhwb3J0c19fKSkge1xuICAgIGFwaS5yZWxvYWQoJzI2Y2FhZmI0JywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9maXJzdC1zZWN0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yNmNhYWZiNCZzY29wZWQ9dHJ1ZSZ0cz10cnVlXCIsICgpID0+IHtcbiAgICBhcGkucmVyZW5kZXIoJzI2Y2FhZmI0JywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9jb25maWd1cmF0b3IudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE3ODZlNWNmJnRzPXRydWVcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9jb25maWd1cmF0b3IudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZzZXR1cD10cnVlJmxhbmc9dHNcIlxuZXhwb3J0ICogZnJvbSBcIi4vY29uZmlndXJhdG9yLnZ1ZT92dWUmdHlwZT1zY3JpcHQmc2V0dXA9dHJ1ZSZsYW5nPXRzXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19maWxlJyxcInNyYy92aWV3cy9jb25maWd1cmF0b3IudnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcIjE3ODZlNWNmXCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnMTc4NmU1Y2YnLCBfX2V4cG9ydHNfXykpIHtcbiAgICBhcGkucmVsb2FkKCcxNzg2ZTVjZicsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vY29uZmlndXJhdG9yLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xNzg2ZTVjZiZ0cz10cnVlXCIsICgpID0+IHtcbiAgICBhcGkucmVyZW5kZXIoJzE3ODZlNWNmJywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMTBdLnVzZVswXSEuL0NhcnRCdXR0b25FYXNseS52dWU/dnVlJnR5cGU9c2NyaXB0JnNldHVwPXRydWUmbGFuZz10c1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxMF0udXNlWzBdIS4vQ2FydEJ1dHRvbkVhc2x5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmc2V0dXA9dHJ1ZSZsYW5nPXRzXCIiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMTBdLnVzZVswXSEuL0dvb2RJdGVtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmc2V0dXA9dHJ1ZSZsYW5nPXRzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzEwXS51c2VbMF0hLi9Hb29kSXRlbS52dWU/dnVlJnR5cGU9c2NyaXB0JnNldHVwPXRydWUmbGFuZz10c1wiIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzEwXS51c2VbMF0hLi9maXJzdC1zZWN0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmc2V0dXA9dHJ1ZSZsYW5nPXRzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzEwXS51c2VbMF0hLi9maXJzdC1zZWN0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmc2V0dXA9dHJ1ZSZsYW5nPXRzXCIiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMTBdLnVzZVswXSEuL2NvbmZpZ3VyYXRvci52dWU/dnVlJnR5cGU9c2NyaXB0JnNldHVwPXRydWUmbGFuZz10c1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxMF0udXNlWzBdIS4vY29uZmlndXJhdG9yLnZ1ZT92dWUmdHlwZT1zY3JpcHQmc2V0dXA9dHJ1ZSZsYW5nPXRzXCIiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMTBdLnVzZVswXSEuL0dvb2RJdGVtLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTFmZGU5Y2MwJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZVwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIyNDA4ZGI3NlwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMTBdLnVzZVswXSEuL0dvb2RJdGVtLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTFmZGU5Y2MwJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxMF0udXNlWzBdIS4vR29vZEl0ZW0udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MWZkZTljYzAmbGFuZz1zY3NzJnNjb3BlZD10cnVlXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxMF0udXNlWzBdIS4vZmlyc3Qtc2VjdGlvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yNmNhYWZiNCZsYW5nPXNjc3Mmc2NvcGVkPXRydWVcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiZDg3MmY3MDJcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzEwXS51c2VbMF0hLi9maXJzdC1zZWN0aW9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTI2Y2FhZmI0Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxMF0udXNlWzBdIS4vZmlyc3Qtc2VjdGlvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yNmNhYWZiNCZsYW5nPXNjc3Mmc2NvcGVkPXRydWVcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9