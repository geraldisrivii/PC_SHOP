(self["webpackChunksrc"] = self["webpackChunksrc"] || []).push([["src_views_configurator_vue-data_application_font-woff_charset_utf-8_base64_d09GRgABAAAAAAZgAB-72eda1"],{

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
}`, "",{"version":3,"sources":["webpack://./src/sections/configurator/first-section.vue","webpack://./first-section.vue"],"names":[],"mappings":"AAGA;EACI,kBAAA;EACA,iCAAA;ACFJ;ADII;EACI,kBAAA;EACA,mBAAA;ACFR;ADMA;EACI,mBAAA;ACHJ;ADMA;EAEI,kBAAA;ACJJ;ADQA;EACI,kBAAA;ACLJ;ADcA;EACI,aAAA;EACA,sBAAA;EACA,YAAA;EACA,SAAA;EACA,YAAA;EACA,mBAAA;EACA,iCAAA;EACA,kBAAA;EACA,aAAA;ACXJ;ADaI;EACI,YAAA;EACA,WAAA;EACA,mBAAA;ACXR;ADcI;EACI,YAAA;EACA,kBAAA;ACZR;ADgBA;EACI,aAAA;EACA,8BAAA;EACA,SAAA;ACbJ;ADgBA;EACI,aAAA;EACA,sBAAA;EACA,SAAA;ACbJ;ADgBA;EACI,kBAAA;EACA,iCAAA;EACA,aAAA;EACA,kBAAA;EACA,sBAAA;EACA,QAAA;ACbJ","sourcesContent":["\n.first-section-container {}\n\n.first-section {\n    padding: 120px 0px;\n    background-color: rgb(19, 19, 19);\n\n    &__title {\n        text-align: center;\n        margin-bottom: 80px;\n    }\n}\n\n.first-section-slider {\n    margin-bottom: 60px;\n}\n\n.swiper-container {\n\n    overflow-x: hidden;\n}\n\n\n.first-section-wrapper {\n    padding-top: 100px;\n}\n\n.swiper-wrapper {\n    // display: flex;\n    // gap: 30px;\n    // width: 100%;\n}\n\n.swiper-slide {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    gap: 15px;\n    width: 250px;\n    align-items: center;\n    background-color: rgb(24, 24, 24);\n    border-radius: 5px;\n    padding: 15px;\n\n    img {\n        height: 80px;\n        width: 80px;\n        object-fit: contain;\n    }\n\n    p {\n        height: 40px;\n        text-align: center;\n    }\n}\n\n.first-section-products-container {\n    display: grid;\n    grid-template-columns: 5fr 2fr;\n    gap: 40px;\n}\n\n.first-section-goods {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.first-section-filters {\n    padding: 15px 20px;\n    background-color: rgb(24, 24, 24);\n    display: flex;\n    border-radius: 5px;\n    flex-direction: column;\n    gap: 6px;\n}\n",".first-section {\n  padding: 120px 0px;\n  background-color: rgb(19, 19, 19);\n}\n.first-section__title {\n  text-align: center;\n  margin-bottom: 80px;\n}\n\n.first-section-slider {\n  margin-bottom: 60px;\n}\n\n.swiper-container {\n  overflow-x: hidden;\n}\n\n.first-section-wrapper {\n  padding-top: 100px;\n}\n\n.swiper-slide {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  gap: 15px;\n  width: 250px;\n  align-items: center;\n  background-color: rgb(24, 24, 24);\n  border-radius: 5px;\n  padding: 15px;\n}\n.swiper-slide img {\n  height: 80px;\n  width: 80px;\n  object-fit: contain;\n}\n.swiper-slide p {\n  height: 40px;\n  text-align: center;\n}\n\n.first-section-products-container {\n  display: grid;\n  grid-template-columns: 5fr 2fr;\n  gap: 40px;\n}\n\n.first-section-goods {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.first-section-filters {\n  padding: 15px 20px;\n  background-color: rgb(24, 24, 24);\n  display: flex;\n  border-radius: 5px;\n  flex-direction: column;\n  gap: 6px;\n}"],"sourceRoot":""}]);
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
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/css */ "./node_modules/swiper/swiper.css");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_GoodItem_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/GoodItem.vue */ "./src/components/GoodItem.vue");
/* harmony import */ var _hooks_Libs_useSwiper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/hooks/Libs/useSwiper */ "./src/hooks/Libs/useSwiper.ts");






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    __name: 'first-section',
    setup(__props, { expose: __expose }) {
        __expose();
        const { swiper, swiperContainer, initializeSwiper } = (0,_hooks_Libs_useSwiper__WEBPACK_IMPORTED_MODULE_4__.useSwiper)();
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
            initializeSwiper({
                slidesPerView: 'auto',
                spaceBetween: 30,
            });
        });
        const __returned__ = { swiper, swiperContainer, initializeSwiper, categories, choosenCategory, updateChoosenCategory, getCategories, products, getProducts, ConfigureProduct, GoodItem: _components_GoodItem_vue__WEBPACK_IMPORTED_MODULE_3__["default"] };
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

/***/ "./src/hooks/Libs/useSwiper.ts":
/*!*************************************!*\
  !*** ./src/hooks/Libs/useSwiper.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useSwiper: () => (/* binding */ useSwiper)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/css */ "./node_modules/swiper/swiper.css");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");



const useSwiper = () => {
    let swiper = (0,vue__WEBPACK_IMPORTED_MODULE_2__.ref)(null);
    const swiperContainer = (0,vue__WEBPACK_IMPORTED_MODULE_2__.ref)(null);
    const initializeSwiper = (config) => {
        swiper.value = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](swiperContainer.value, {
            ...config
        });
    };
    const swiperPrev = () => {
        swiper.value.slidePrev();
    };
    const swiperNext = () => {
        swiper.value.slideNext();
    };
    return {
        swiper,
        swiperContainer,
        initializeSwiper,
        swiperPrev,
        swiperNext
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

/***/ }),

/***/ "data:application/font-woff;charset=utf-8;base64, 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":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:application/font-woff;charset=utf-8;base64, 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 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:application/font-woff;charset=utf-8;base64, d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRzL2pzL3NyY192aWV3c19jb25maWd1cmF0b3JfdnVlLWRhdGFfYXBwbGljYXRpb25fZm9udC13b2ZmX2NoYXJzZXRfdXRmLThfYmFzZTY0X2QwOUdSZ0FCQUFBQUFBWmdBQi03MmVkYTEuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8seUhBQXlILFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLHVDQUF1QyxvQkFBb0IsMEJBQTBCLGdCQUFnQixrQkFBa0IseUJBQXlCLGdDQUFnQyx5QkFBeUIsa0JBQWtCLHFCQUFxQixzQkFBc0IsOEJBQThCLE9BQU8sc0JBQXNCLHdCQUF3Qiw4QkFBOEIsa0NB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RXJFLENBQWdGO0FBQ2hGLGlDQUFpQyx5RkFBZSxDQUFDLDRGQUFNLGFBQWEsMkZBQU07QUFDMUU7QUFDQSxJQUFJLEtBQVUsRUFBRSxFQVlmOzs7QUFHRCxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCc007Ozs7Ozs7Ozs7Ozs7Ozs7QUNBUDs7Ozs7Ozs7Ozs7Ozs7OztBQ0FXOzs7Ozs7Ozs7Ozs7Ozs7O0FDQVA7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FsTjs7QUFFQTtBQUNBLGNBQWMsbUJBQU8sQ0FBQyxpa0JBQStSO0FBQ3JUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSw2SkFBOEU7QUFDeEYsK0NBQStDO0FBQy9DO0FBQ0EsR0FBRyxLQUFVLEVBQUU7Ozs7Ozs7Ozs7QUNYZjs7QUFFQTtBQUNBLGNBQWMsbUJBQU8sQ0FBQyxrbUJBQWdUO0FBQ3RVO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxnS0FBaUY7QUFDM0YsK0NBQStDO0FBQy9DO0FBQ0EsR0FBRyxLQUFVLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcmMvLi9zcmMvY29tcG9uZW50cy9Hb29kSXRlbS52dWU/YjhmMSIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvc2VjdGlvbnMvY29uZmlndXJhdG9yL2ZpcnN0LXNlY3Rpb24udnVlPzRiYzgiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL2NvbXBvbmVudHMvQ2FydEJ1dHRvbkVhc2x5LnZ1ZT9mZWY2Iiwid2VicGFjazovL3NyYy8uL3NyYy9jb21wb25lbnRzL0NhcnRCdXR0b25FYXNseS52dWUiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL2NvbXBvbmVudHMvR29vZEl0ZW0udnVlPzA2YzkiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL2NvbXBvbmVudHMvR29vZEl0ZW0udnVlIiwid2VicGFjazovL3NyYy8uL3NyYy9zZWN0aW9ucy9jb25maWd1cmF0b3IvZmlyc3Qtc2VjdGlvbi52dWU/NzhiOCIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvc2VjdGlvbnMvY29uZmlndXJhdG9yL2ZpcnN0LXNlY3Rpb24udnVlIiwid2VicGFjazovL3NyYy8uL3NyYy92aWV3cy9jb25maWd1cmF0b3IudnVlPzkxNDEiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL3ZpZXdzL2NvbmZpZ3VyYXRvci52dWUiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL2NvbXBvbmVudHMvQ2FydEJ1dHRvbkVhc2x5LnZ1ZT82OGFiIiwid2VicGFjazovL3NyYy8uL3NyYy9jb21wb25lbnRzL0dvb2RJdGVtLnZ1ZT8xMmMzIiwid2VicGFjazovL3NyYy8uL3NyYy9zZWN0aW9ucy9jb25maWd1cmF0b3IvZmlyc3Qtc2VjdGlvbi52dWU/ZWZiOCIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvdmlld3MvY29uZmlndXJhdG9yLnZ1ZT83ZDVmIiwid2VicGFjazovL3NyYy8uL3NyYy9hcGkvQXBwL2dldFBhZ2VTZXR0aW5ncy50cyIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvaG9va3MvQXBwL3VzZUxvYWQudHMiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL2hvb2tzL0FwcC91c2VQYWdlU2V0dGluZ3MudHMiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL2hvb2tzL0xpYnMvdXNlU3dpcGVyLnRzIiwid2VicGFjazovL3NyYy8uL3NyYy9jb21wb25lbnRzL0NhcnRCdXR0b25FYXNseS52dWU/ZjU2OCIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvY29tcG9uZW50cy9Hb29kSXRlbS52dWU/YzBjZiIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvc2VjdGlvbnMvY29uZmlndXJhdG9yL2ZpcnN0LXNlY3Rpb24udnVlP2ZlMGMiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL3ZpZXdzL2NvbmZpZ3VyYXRvci52dWU/M2FkYyIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvY29tcG9uZW50cy9DYXJ0QnV0dG9uRWFzbHkudnVlPzA3MDgiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL2NvbXBvbmVudHMvR29vZEl0ZW0udnVlPzU2ODciLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL3NlY3Rpb25zL2NvbmZpZ3VyYXRvci9maXJzdC1zZWN0aW9uLnZ1ZT9iYTMzIiwid2VicGFjazovL3NyYy8uL3NyYy92aWV3cy9jb25maWd1cmF0b3IudnVlPzQzMGQiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL2NvbXBvbmVudHMvR29vZEl0ZW0udnVlPzExY2YiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL3NlY3Rpb25zL2NvbmZpZ3VyYXRvci9maXJzdC1zZWN0aW9uLnZ1ZT8zNmFiIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuZ29vZC1pdGVtW2RhdGEtdi0xZmRlOWNjMF0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDMwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxN3B4IDM0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxODE4MTg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5nb29kLWl0ZW1fX2ltYWdlW2RhdGEtdi0xZmRlOWNjMF0ge1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDkwJTtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cbi5nb29kLWl0ZW1fX2ltYWdlLWJveFtkYXRhLXYtMWZkZTljYzBdIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAxMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5nb29kLWl0ZW0tY29udGVudFtkYXRhLXYtMWZkZTljYzBdIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDMwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmdvb2QtaXRlbS1jb250ZW50X19kZXNjcmlwdGlvbltkYXRhLXYtMWZkZTljYzBdIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMHB4O1xufVxuLmdvb2QtaXRlbS1jb250ZW50X190aXRsZVtkYXRhLXYtMWZkZTljYzBdIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmdvb2QtaXRlbS1jb250ZW50X19zcGVjLWJ1dHRvbltkYXRhLXYtMWZkZTljYzBdIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbn1cbi5nb29kLWl0ZW0tY29udGVudF9fc3BlYy1idXR0b25bZGF0YS12LTFmZGU5Y2MwXTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuLmdvb2QtaXRlbS1jb250ZW50X19xdWFudGl0eS1ib3hbZGF0YS12LTFmZGU5Y2MwXSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTNweDtcbn1cbi5nb29kLWl0ZW0tY29udGVudF9fc3VtW2RhdGEtdi0xZmRlOWNjMF0ge1xuICBmb250LXdlaWdodDogNTAwO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvR29vZEl0ZW0udnVlXCIsXCJ3ZWJwYWNrOi8vLi9Hb29kSXRlbS52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ0FKO0FERUk7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDQVI7QURHSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FDRFI7QURLQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBRUEsU0FBQTtFQUVBLFdBQUE7QUNKSjtBRE1JO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQ0pSO0FET0k7RUFDSSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQ0xSO0FEVUk7RUFDSSxlQUFBO0VBRUEsZ0NBQUE7QUNUUjtBRFVRO0VBQ0ksMEJBQUE7QUNSWjtBRGFJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FDWFI7QURjSTtFQUNJLGdCQUFBO0FDWlJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuLmdvb2QtaXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMzBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDE3cHggMzRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE4MTgxODtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcblxcbiAgICAmX19pbWFnZSB7XFxuICAgICAgICB3aWR0aDogOTAlO1xcbiAgICAgICAgaGVpZ2h0OiA5MCU7XFxuICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xcbiAgICB9XFxuXFxuICAgICZfX2ltYWdlLWJveCB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xcbiAgICAgICAgaGVpZ2h0OiAxMzBweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB9XFxufVxcblxcbi5nb29kLWl0ZW0tY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG4gICAgZ2FwOiAzMHB4O1xcblxcbiAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgJl9fZGVzY3JpcHRpb24ge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBnYXA6IDEwcHg7XFxuICAgIH1cXG5cXG4gICAgJl9fdGl0bGUge1xcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIH1cXG5cXG4gICAgJl9fcHJpY2Uge31cXG5cXG4gICAgJl9fc3BlYy1idXR0b24ge1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluLW91dDtcXG4gICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuXFxuICAgICZfX3F1YW50aXR5LWJveCB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBnYXA6IDEzcHg7XFxuICAgIH1cXG5cXG4gICAgJl9fc3VtIHtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIH1cXG59XFxuXCIsXCIuZ29vZC1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAzMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxN3B4IDM0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxODE4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG4uZ29vZC1pdGVtX19pbWFnZSB7XFxuICB3aWR0aDogOTAlO1xcbiAgaGVpZ2h0OiA5MCU7XFxuICBvYmplY3QtZml0OiBjb250YWluO1xcbn1cXG4uZ29vZC1pdGVtX19pbWFnZS1ib3gge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGhlaWdodDogMTMwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmdvb2QtaXRlbS1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZ2FwOiAzMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5nb29kLWl0ZW0tY29udGVudF9fZGVzY3JpcHRpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxufVxcbi5nb29kLWl0ZW0tY29udGVudF9fdGl0bGUge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcbi5nb29kLWl0ZW0tY29udGVudF9fc3BlYy1idXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcbi5nb29kLWl0ZW0tY29udGVudF9fc3BlYy1idXR0b246aG92ZXIge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcbi5nb29kLWl0ZW0tY29udGVudF9fcXVhbnRpdHktYm94IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTNweDtcXG59XFxuLmdvb2QtaXRlbS1jb250ZW50X19zdW0ge1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuZmlyc3Qtc2VjdGlvbltkYXRhLXYtMjZjYWFmYjRdIHtcbiAgcGFkZGluZzogMTIwcHggMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTksIDE5LCAxOSk7XG59XG4uZmlyc3Qtc2VjdGlvbl9fdGl0bGVbZGF0YS12LTI2Y2FhZmI0XSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogODBweDtcbn1cbi5maXJzdC1zZWN0aW9uLXNsaWRlcltkYXRhLXYtMjZjYWFmYjRdIHtcbiAgbWFyZ2luLWJvdHRvbTogNjBweDtcbn1cbi5zd2lwZXItY29udGFpbmVyW2RhdGEtdi0yNmNhYWZiNF0ge1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG4uZmlyc3Qtc2VjdGlvbi13cmFwcGVyW2RhdGEtdi0yNmNhYWZiNF0ge1xuICBwYWRkaW5nLXRvcDogMTAwcHg7XG59XG4uc3dpcGVyLXNsaWRlW2RhdGEtdi0yNmNhYWZiNF0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGdhcDogMTVweDtcbiAgd2lkdGg6IDI1MHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQsIDI0LCAyNCk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMTVweDtcbn1cbi5zd2lwZXItc2xpZGUgaW1nW2RhdGEtdi0yNmNhYWZiNF0ge1xuICBoZWlnaHQ6IDgwcHg7XG4gIHdpZHRoOiA4MHB4O1xuICBvYmplY3QtZml0OiBjb250YWluO1xufVxuLnN3aXBlci1zbGlkZSBwW2RhdGEtdi0yNmNhYWZiNF0ge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5maXJzdC1zZWN0aW9uLXByb2R1Y3RzLWNvbnRhaW5lcltkYXRhLXYtMjZjYWFmYjRdIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1ZnIgMmZyO1xuICBnYXA6IDQwcHg7XG59XG4uZmlyc3Qtc2VjdGlvbi1nb29kc1tkYXRhLXYtMjZjYWFmYjRdIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMHB4O1xufVxuLmZpcnN0LXNlY3Rpb24tZmlsdGVyc1tkYXRhLXYtMjZjYWFmYjRdIHtcbiAgcGFkZGluZzogMTVweCAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQsIDI0LCAyNCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA2cHg7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2VjdGlvbnMvY29uZmlndXJhdG9yL2ZpcnN0LXNlY3Rpb24udnVlXCIsXCJ3ZWJwYWNrOi8vLi9maXJzdC1zZWN0aW9uLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHQTtFQUNJLGtCQUFBO0VBQ0EsaUNBQUE7QUNGSjtBRElJO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQ0ZSO0FETUE7RUFDSSxtQkFBQTtBQ0hKO0FETUE7RUFFSSxrQkFBQTtBQ0pKO0FEUUE7RUFDSSxrQkFBQTtBQ0xKO0FEY0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDWEo7QURhSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNYUjtBRGNJO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FDWlI7QURnQkE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxTQUFBO0FDYko7QURnQkE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FDYko7QURnQkE7RUFDSSxrQkFBQTtFQUNBLGlDQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxRQUFBO0FDYkpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuLmZpcnN0LXNlY3Rpb24tY29udGFpbmVyIHt9XFxuXFxuLmZpcnN0LXNlY3Rpb24ge1xcbiAgICBwYWRkaW5nOiAxMjBweCAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOSwgMTksIDE5KTtcXG5cXG4gICAgJl9fdGl0bGUge1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogODBweDtcXG4gICAgfVxcbn1cXG5cXG4uZmlyc3Qtc2VjdGlvbi1zbGlkZXIge1xcbiAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xcbn1cXG5cXG4uc3dpcGVyLWNvbnRhaW5lciB7XFxuXFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuXFxuLmZpcnN0LXNlY3Rpb24td3JhcHBlciB7XFxuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcXG59XFxuXFxuLnN3aXBlci13cmFwcGVyIHtcXG4gICAgLy8gZGlzcGxheTogZmxleDtcXG4gICAgLy8gZ2FwOiAzMHB4O1xcbiAgICAvLyB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnN3aXBlci1zbGlkZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNCwgMjQsIDI0KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcblxcbiAgICBpbWcge1xcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xcbiAgICAgICAgd2lkdGg6IDgwcHg7XFxuICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xcbiAgICB9XFxuXFxuICAgIHAge1xcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxufVxcblxcbi5maXJzdC1zZWN0aW9uLXByb2R1Y3RzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNWZyIDJmcjtcXG4gICAgZ2FwOiA0MHB4O1xcbn1cXG5cXG4uZmlyc3Qtc2VjdGlvbi1nb29kcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLmZpcnN0LXNlY3Rpb24tZmlsdGVycyB7XFxuICAgIHBhZGRpbmc6IDE1cHggMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0LCAyNCwgMjQpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNnB4O1xcbn1cXG5cIixcIi5maXJzdC1zZWN0aW9uIHtcXG4gIHBhZGRpbmc6IDEyMHB4IDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOSwgMTksIDE5KTtcXG59XFxuLmZpcnN0LXNlY3Rpb25fX3RpdGxlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDgwcHg7XFxufVxcblxcbi5maXJzdC1zZWN0aW9uLXNsaWRlciB7XFxuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xcbn1cXG5cXG4uc3dpcGVyLWNvbnRhaW5lciB7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbi5maXJzdC1zZWN0aW9uLXdyYXBwZXIge1xcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xcbn1cXG5cXG4uc3dpcGVyLXNsaWRlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZ2FwOiAxNXB4O1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNCwgMjQsIDI0KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDE1cHg7XFxufVxcbi5zd2lwZXItc2xpZGUgaW1nIHtcXG4gIGhlaWdodDogODBweDtcXG4gIHdpZHRoOiA4MHB4O1xcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcXG59XFxuLnN3aXBlci1zbGlkZSBwIHtcXG4gIGhlaWdodDogNDBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmZpcnN0LXNlY3Rpb24tcHJvZHVjdHMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDVmciAyZnI7XFxuICBnYXA6IDQwcHg7XFxufVxcblxcbi5maXJzdC1zZWN0aW9uLWdvb2RzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uZmlyc3Qtc2VjdGlvbi1maWx0ZXJzIHtcXG4gIHBhZGRpbmc6IDE1cHggMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNCwgMjQsIDI0KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA2cHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJpbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgYXMgX2RlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSdcbmltcG9ydCB7IHVzZUFwcFNldHRpbmdzIH0gZnJvbSAnQC9ob29rcy9BcHAvdXNlQXBwU2V0dGluZ3MnO1xuaW1wb3J0IHsgdXNlUGFnZVNldHRpbmdzIH0gZnJvbSAnQC9ob29rcy9BcHAvdXNlUGFnZVNldHRpbmdzJztcbmltcG9ydCB7IHVzZVZ1ZXggfSBmcm9tICdAL3N0b3JlL3VzZVZ1ZXgnO1xuaW1wb3J0IHsgSVByb2R1Y3QgfSBmcm9tICdAL3R5cGVzL1Byb2R1Y3QnO1xuaW1wb3J0IGRlZXBFcXVhbCBmcm9tICdkZWVwLWVxdWFsJztcbmltcG9ydCB7IGNvbXB1dGVkLCB0b1JlZnMgfSBmcm9tICd2dWUnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICAgIHByb2R1Y3Q6IElQcm9kdWN0XG4gICAgYWRkaW5nRmllbGQ6IG9iamVjdCB8IG51bGxcbn1cblxuaW50ZXJmYWNlIEVtaXRzIHtcbiAgICAoZTogJ3VwZGF0ZTphZGRpbmdGaWVsZCcsIHZhbHVlOiBvYmplY3QgfCBudWxsKTogdm9pZFxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IC8qI19fUFVSRV9fKi9fZGVmaW5lQ29tcG9uZW50KHtcbiAgX19uYW1lOiAnQ2FydEJ1dHRvbkVhc2x5JyxcbiAgcHJvcHM6IHtcbiAgICBwcm9kdWN0OiB7IHR5cGU6IE9iamVjdCwgcmVxdWlyZWQ6IHRydWUgfSxcbiAgICBhZGRpbmdGaWVsZDogeyB0eXBlOiBbT2JqZWN0LCBudWxsXSwgcmVxdWlyZWQ6IHRydWUgfVxuICB9LFxuICBlbWl0czogW1widXBkYXRlOmFkZGluZ0ZpZWxkXCJdLFxuICBzZXR1cChfX3Byb3BzOiBhbnksIHsgZXhwb3NlOiBfX2V4cG9zZSwgZW1pdDogX19lbWl0IH0pIHtcbiAgX19leHBvc2UoKTtcblxuY29uc3QgcHJvcHMgPSBfX3Byb3BzXG5cbmNvbnN0IHsgYWRkaW5nRmllbGQsIHByb2R1Y3QgfSA9IHRvUmVmcyhwcm9wcylcblxuY29uc3QgZW1pdCA9IF9fZW1pdFxuXG5jb25zdCBwcm9kdWN0SW5BZGRpbmdGaWVsZCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICByZXR1cm4gZGVlcEVxdWFsKGFkZGluZ0ZpZWxkLnZhbHVlLCBwcm9kdWN0LnZhbHVlKVxufSlcblxuXG5jb25zdCBvbkNsaWNrID0gKCkgPT4ge1xuICAgIGlmKHByb2R1Y3RJbkFkZGluZ0ZpZWxkLnZhbHVlKXtcbiAgICAgICAgcmV0dXJuIGVtaXQoJ3VwZGF0ZTphZGRpbmdGaWVsZCcsIG51bGwpXG4gICAgfVxuXG4gICAgZW1pdCgndXBkYXRlOmFkZGluZ0ZpZWxkJywgcHJvZHVjdC52YWx1ZSlcbn1cblxuXG5cbmNvbnN0IHN0b3JlID0gdXNlVnVleCgpXG5cbmNvbnN0IHsgcGFnZSB9ID0gdXNlUGFnZVNldHRpbmdzKHN0b3JlKVxuXG5jb25zdCB7IGFwcCB9ID0gdXNlQXBwU2V0dGluZ3Moc3RvcmUpXG5cblxuXG5jb25zdCBfX3JldHVybmVkX18gPSB7IHByb3BzLCBhZGRpbmdGaWVsZCwgcHJvZHVjdCwgZW1pdCwgcHJvZHVjdEluQWRkaW5nRmllbGQsIG9uQ2xpY2ssIHN0b3JlLCBwYWdlLCBhcHAgfVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KF9fcmV0dXJuZWRfXywgJ19faXNTY3JpcHRTZXR1cCcsIHsgZW51bWVyYWJsZTogZmFsc2UsIHZhbHVlOiB0cnVlIH0pXG5yZXR1cm4gX19yZXR1cm5lZF9fXG59XG5cbn0pIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJjYXJ0LWJ1dHRvblwiPlxuICAgICAgICA8YnV0dG9uIEBjbGljaz1cIm9uQ2xpY2tcIiBjbGFzcz1cImJ1dHRvbiBjYXJ0LWJ1dHRvbl9fYnV0dG9uXCI+e3sgcHJvZHVjdEluQWRkaW5nRmllbGQgPyAn0KPQsdGA0LDRgtGMJyA6ICfQlNC+0LHQsNCy0LjRgtGMJyB9fTwvYnV0dG9uPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IHVzZUFwcFNldHRpbmdzIH0gZnJvbSAnQC9ob29rcy9BcHAvdXNlQXBwU2V0dGluZ3MnO1xuaW1wb3J0IHsgdXNlUGFnZVNldHRpbmdzIH0gZnJvbSAnQC9ob29rcy9BcHAvdXNlUGFnZVNldHRpbmdzJztcbmltcG9ydCB7IHVzZVZ1ZXggfSBmcm9tICdAL3N0b3JlL3VzZVZ1ZXgnO1xuaW1wb3J0IHsgSVByb2R1Y3QgfSBmcm9tICdAL3R5cGVzL1Byb2R1Y3QnO1xuaW1wb3J0IGRlZXBFcXVhbCBmcm9tICdkZWVwLWVxdWFsJztcbmltcG9ydCB7IGNvbXB1dGVkLCB0b1JlZnMgfSBmcm9tICd2dWUnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICAgIHByb2R1Y3Q6IElQcm9kdWN0XG4gICAgYWRkaW5nRmllbGQ6IG9iamVjdCB8IG51bGxcbn1cblxuY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wczxQcm9wcz4oKVxuXG5jb25zdCB7IGFkZGluZ0ZpZWxkLCBwcm9kdWN0IH0gPSB0b1JlZnMocHJvcHMpXG5cbmludGVyZmFjZSBFbWl0cyB7XG4gICAgKGU6ICd1cGRhdGU6YWRkaW5nRmllbGQnLCB2YWx1ZTogb2JqZWN0IHwgbnVsbCk6IHZvaWRcbn1cblxuY29uc3QgZW1pdCA9IGRlZmluZUVtaXRzPEVtaXRzPigpXG5cbmNvbnN0IHByb2R1Y3RJbkFkZGluZ0ZpZWxkID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIHJldHVybiBkZWVwRXF1YWwoYWRkaW5nRmllbGQudmFsdWUsIHByb2R1Y3QudmFsdWUpXG59KVxuXG5cbmNvbnN0IG9uQ2xpY2sgPSAoKSA9PiB7XG4gICAgaWYocHJvZHVjdEluQWRkaW5nRmllbGQudmFsdWUpe1xuICAgICAgICByZXR1cm4gZW1pdCgndXBkYXRlOmFkZGluZ0ZpZWxkJywgbnVsbClcbiAgICB9XG5cbiAgICBlbWl0KCd1cGRhdGU6YWRkaW5nRmllbGQnLCBwcm9kdWN0LnZhbHVlKVxufVxuXG5cblxuY29uc3Qgc3RvcmUgPSB1c2VWdWV4KClcblxuY29uc3QgeyBwYWdlIH0gPSB1c2VQYWdlU2V0dGluZ3Moc3RvcmUpXG5cbmNvbnN0IHsgYXBwIH0gPSB1c2VBcHBTZXR0aW5ncyhzdG9yZSlcblxuXG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPjwvc3R5bGU+IiwiaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IGFzIF9kZWZpbmVDb21wb25lbnQgfSBmcm9tICd2dWUnXG5pbXBvcnQgeyB1c2VBcHBTZXR0aW5ncyB9IGZyb20gJ0AvaG9va3MvQXBwL3VzZUFwcFNldHRpbmdzJztcbmltcG9ydCB7IHVzZVZ1ZXggfSBmcm9tICdAL3N0b3JlL3VzZVZ1ZXgnO1xuaW1wb3J0IHsgSUdyb3VwcGVkUHJvZHVjdCwgSVByb2R1Y3QgfSBmcm9tICdAL3R5cGVzL1Byb2R1Y3QnO1xuaW1wb3J0IHsgdG9SZWZzLCB3YXRjaCB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgQ2FydEJ1dHRvbkVhc2x5IGZyb20gJy4vQ2FydEJ1dHRvbkVhc2x5LnZ1ZSc7XG5pbXBvcnQgeyB1c2VTcGVjRGlhbG9nIH0gZnJvbSAnQC9ob29rcy9BcHAvdXNlU3BlY0RpYWxvZyc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gICAgcHJvZHVjdDogSVByb2R1Y3RcbiAgICBhZGRpbmdGaWVsZDogb2JqZWN0IHwgbnVsbFxufVxuaW50ZXJmYWNlIEVtaXRzIHtcbiAgICAoZTogJ3VwZGF0ZTphZGRpbmdGaWVsZCcsIHZhbHVlOiBvYmplY3QpOiB2b2lkXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgLyojX19QVVJFX18qL19kZWZpbmVDb21wb25lbnQoe1xuICBfX25hbWU6ICdHb29kSXRlbScsXG4gIHByb3BzOiB7XG4gICAgcHJvZHVjdDogeyB0eXBlOiBPYmplY3QsIHJlcXVpcmVkOiB0cnVlIH0sXG4gICAgYWRkaW5nRmllbGQ6IHsgdHlwZTogW09iamVjdCwgbnVsbF0sIHJlcXVpcmVkOiB0cnVlIH1cbiAgfSxcbiAgZW1pdHM6IFtcInVwZGF0ZTphZGRpbmdGaWVsZFwiXSxcbiAgc2V0dXAoX19wcm9wczogYW55LCB7IGV4cG9zZTogX19leHBvc2UsIGVtaXQ6IF9fZW1pdCB9KSB7XG4gIF9fZXhwb3NlKCk7XG5cbmNvbnN0IHByb3BzID0gX19wcm9wc1xuXG5jb25zdCB7IGFkZGluZ0ZpZWxkLCBwcm9kdWN0IH0gPSB0b1JlZnMocHJvcHMpXG5cbmNvbnN0IGVtaXQgPSBfX2VtaXRcblxubGV0IHN0b3JlID0gdXNlVnVleCgpO1xuXG5jb25zdCB7IHNwZWNEaWFsb2cgfSA9IHVzZVNwZWNEaWFsb2coc3RvcmUpXG5cbmNvbnN0IG9uQ2xpY2sgPSAoKSA9PiB7XG4gICAgc3BlY0RpYWxvZy52YWx1ZS5vcGVuKHByb2R1Y3QudmFsdWUpXG59XG5cblxuY29uc3QgeyBhcHAgfSA9IHVzZUFwcFNldHRpbmdzKHN0b3JlKVxuXG5cbmNvbnN0IF9fcmV0dXJuZWRfXyA9IHsgcHJvcHMsIGFkZGluZ0ZpZWxkLCBwcm9kdWN0LCBlbWl0LCBnZXQgc3RvcmUoKSB7IHJldHVybiBzdG9yZSB9LCBzZXQgc3RvcmUodikgeyBzdG9yZSA9IHYgfSwgc3BlY0RpYWxvZywgb25DbGljaywgYXBwLCBDYXJ0QnV0dG9uRWFzbHkgfVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KF9fcmV0dXJuZWRfXywgJ19faXNTY3JpcHRTZXR1cCcsIHsgZW51bWVyYWJsZTogZmFsc2UsIHZhbHVlOiB0cnVlIH0pXG5yZXR1cm4gX19yZXR1cm5lZF9fXG59XG5cbn0pIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJnb29kLWl0ZW1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImdvb2QtaXRlbV9faW1hZ2UtYm94XCI+XG4gICAgICAgICAgICA8aW1nIGNsYXNzPVwiZ29vZC1pdGVtX19pbWFnZVwiIDpzcmM9XCJwcm9kdWN0LmltYWdlc1swXS5zcmNcIiA6YWx0PVwicHJvZHVjdC5uYW1lXCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ29vZC1pdGVtLWNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJnb29kLWl0ZW0tY29udGVudF9fZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImdvb2QtaXRlbS1jb250ZW50X190aXRsZVwiPnt7IHByb2R1Y3QubmFtZSB9fTwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImdvb2QtaXRlbS1jb250ZW50X19wcmljZVwiPnt7IHByb2R1Y3QucHJpY2UgfX0g0YDRg9CxIC8g0YjRgjwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdvb2QtaXRlbS1jb250ZW50X19xdWFudGl0eS1ib3hcIj5cbiAgICAgICAgICAgICAgICA8Q2FydEJ1dHRvbkVhc2x5IDpwcm9kdWN0PVwicHJvZHVjdFwiIDphZGRpbmctZmllbGQ9XCJhZGRpbmdGaWVsZFwiXG4gICAgICAgICAgICAgICAgICAgIEB1cGRhdGU6YWRkaW5nLWZpZWxkPVwiZW1pdCgndXBkYXRlOmFkZGluZ0ZpZWxkJywgJGV2ZW50KVwiIC8+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJnb29kLWl0ZW0tY29udGVudF9fc3BlYy1idXR0b25cIiBAY2xpY2s9XCJvbkNsaWNrXCI+0J/QvtC00YDQvtCx0L3QtdC1PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IHVzZUFwcFNldHRpbmdzIH0gZnJvbSAnQC9ob29rcy9BcHAvdXNlQXBwU2V0dGluZ3MnO1xuaW1wb3J0IHsgdXNlVnVleCB9IGZyb20gJ0Avc3RvcmUvdXNlVnVleCc7XG5pbXBvcnQgeyBJR3JvdXBwZWRQcm9kdWN0LCBJUHJvZHVjdCB9IGZyb20gJ0AvdHlwZXMvUHJvZHVjdCc7XG5pbXBvcnQgeyB0b1JlZnMsIHdhdGNoIH0gZnJvbSAndnVlJztcbmltcG9ydCBDYXJ0QnV0dG9uRWFzbHkgZnJvbSAnLi9DYXJ0QnV0dG9uRWFzbHkudnVlJztcbmltcG9ydCB7IHVzZVNwZWNEaWFsb2cgfSBmcm9tICdAL2hvb2tzL0FwcC91c2VTcGVjRGlhbG9nJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgICBwcm9kdWN0OiBJUHJvZHVjdFxuICAgIGFkZGluZ0ZpZWxkOiBvYmplY3QgfCBudWxsXG59XG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzPFByb3BzPigpXG5cbmNvbnN0IHsgYWRkaW5nRmllbGQsIHByb2R1Y3QgfSA9IHRvUmVmcyhwcm9wcylcblxuaW50ZXJmYWNlIEVtaXRzIHtcbiAgICAoZTogJ3VwZGF0ZTphZGRpbmdGaWVsZCcsIHZhbHVlOiBvYmplY3QpOiB2b2lkXG59XG5cbmNvbnN0IGVtaXQgPSBkZWZpbmVFbWl0czxFbWl0cz4oKVxuXG5sZXQgc3RvcmUgPSB1c2VWdWV4KCk7XG5cbmNvbnN0IHsgc3BlY0RpYWxvZyB9ID0gdXNlU3BlY0RpYWxvZyhzdG9yZSlcblxuY29uc3Qgb25DbGljayA9ICgpID0+IHtcbiAgICBzcGVjRGlhbG9nLnZhbHVlLm9wZW4ocHJvZHVjdC52YWx1ZSlcbn1cblxuXG5jb25zdCB7IGFwcCB9ID0gdXNlQXBwU2V0dGluZ3Moc3RvcmUpXG5cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XG4uZ29vZC1pdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAzMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDE3cHggMzRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxODE4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcblxuICAgICZfX2ltYWdlIHtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgaGVpZ2h0OiA5MCU7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgfVxuXG4gICAgJl9faW1hZ2UtYm94IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgaGVpZ2h0OiAxMzBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB9XG59XG5cbi5nb29kLWl0ZW0tY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgIGdhcDogMzBweDtcblxuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgJl9fZGVzY3JpcHRpb24ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBnYXA6IDEwcHg7XG4gICAgfVxuXG4gICAgJl9fdGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgfVxuXG4gICAgJl9fcHJpY2Uge31cblxuICAgICZfX3NwZWMtYnV0dG9uIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgICZfX3F1YW50aXR5LWJveCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGdhcDogMTNweDtcbiAgICB9XG5cbiAgICAmX19zdW0ge1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cbn1cbjwvc3R5bGU+IiwiaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IGFzIF9kZWZpbmVDb21wb25lbnQgfSBmcm9tICd2dWUnXG5pbXBvcnQgeyBSZWYsIGNvbXB1dGVkLCBvbk1vdW50ZWQsIHJlZiwgd2F0Y2ggfSBmcm9tICd2dWUnO1xuaW1wb3J0IFdPTyBmcm9tICdAL2F4aW9zV29vY29tZXJjZSdcbmltcG9ydCB7IElQcm9kdWN0LCBJUHJvZHVjdENhdGVnb3J5UmVzcG9uc2UgfSBmcm9tICdAL3R5cGVzL1Byb2R1Y3QnO1xuXG5pbXBvcnQgU3dpcGVyIGZyb20gJ3N3aXBlcic7XG5pbXBvcnQgJ3N3aXBlci9jc3MnO1xuaW1wb3J0IEdvb2RJdGVtIGZyb20gJ0AvY29tcG9uZW50cy9Hb29kSXRlbS52dWUnO1xuaW1wb3J0IEN1c3RvbVNlbGVjdCBmcm9tICdAL2NvbXBvbmVudHMvQ3VzdG9tU2VsZWN0LnZ1ZSc7XG5pbXBvcnQgeyB1c2VTd2lwZXIgfSBmcm9tICdAL2hvb2tzL0xpYnMvdXNlU3dpcGVyJ1xuXG5pbnRlcmZhY2UgSUNvbmZpZ3VyZVByb2R1Y3Qge1xuICAgIGNwdTogb2JqZWN0IHwgbnVsbDtcbiAgICBncHU6IG9iamVjdCB8IG51bGw7XG4gICAgcmFtOiBvYmplY3QgfCBudWxsO1xuICAgIG1vdGhlcmJvYXJkOiBvYmplY3QgfCBudWxsO1xuICAgIHNzZDogb2JqZWN0IHwgbnVsbDtcbiAgICBoZGQ6IG9iamVjdCB8IG51bGw7XG4gICAgY2FzZTogb2JqZWN0IHwgbnVsbDtcbiAgICBwYjogb2JqZWN0IHwgbnVsbDtcbiAgICBwY19mYW46IG9iamVjdCB8IG51bGw7XG4gICAgY3B1X2Nvb2xlcjogb2JqZWN0IHwgbnVsbDtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCAvKiNfX1BVUkVfXyovX2RlZmluZUNvbXBvbmVudCh7XG4gIF9fbmFtZTogJ2ZpcnN0LXNlY3Rpb24nLFxuICBzZXR1cChfX3Byb3BzLCB7IGV4cG9zZTogX19leHBvc2UgfSkge1xuICBfX2V4cG9zZSgpO1xuXG5jb25zdCB7IHN3aXBlciwgc3dpcGVyQ29udGFpbmVyLCBpbml0aWFsaXplU3dpcGVyIH0gPSB1c2VTd2lwZXIoKVxuXG5jb25zdCBjYXRlZ29yaWVzOiBSZWY8QXJyYXk8SVByb2R1Y3RDYXRlZ29yeVJlc3BvbnNlPj4gPSByZWYoW10pXG5cbmNvbnN0IGNob29zZW5DYXRlZ29yeTogUmVmPElQcm9kdWN0Q2F0ZWdvcnlSZXNwb25zZSB8IG51bGw+ID0gcmVmKG51bGwpXG5cbmNvbnN0IHVwZGF0ZUNob29zZW5DYXRlZ29yeSA9IChjYXRlZ29yeTogSVByb2R1Y3RDYXRlZ29yeVJlc3BvbnNlKSA9PiB7XG4gICAgY2hvb3NlbkNhdGVnb3J5LnZhbHVlID0gY2F0ZWdvcnlcbn1cblxuY29uc3QgZ2V0Q2F0ZWdvcmllcyA9IGFzeW5jICgpID0+IHtcbiAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBXT08uZ2V0KCcvcHJvZHVjdHMvY2F0ZWdvcmllcycsIHtcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICBwZXJfcGFnZTogMTAwLFxuICAgICAgICAgICAgcGFyZW50OiAxOSxcbiAgICAgICAgICAgIG9yZGVyOiAnZGVzYycsXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG59XG5cbmNvbnN0IHByb2R1Y3RzOiBSZWY8QXJyYXk8SVByb2R1Y3Q+PiA9IHJlZihbXSlcblxuY29uc3QgZ2V0UHJvZHVjdHMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBXT08uZ2V0KGBwcm9kdWN0cz9jYXRlZ29yeT0ke2Nob29zZW5DYXRlZ29yeS52YWx1ZS5pZH1gKVxuXG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGFcbn1cblxud2F0Y2goY2hvb3NlbkNhdGVnb3J5LCBhc3luYyAoKSA9PiB7XG4gICAgaWYgKGNob29zZW5DYXRlZ29yeSkge1xuICAgICAgICBwcm9kdWN0cy52YWx1ZSA9IGF3YWl0IGdldFByb2R1Y3RzKClcbiAgICB9XG59LCB7IGRlZXA6IHRydWUgfSlcblxuXG5jb25zdCBDb25maWd1cmVQcm9kdWN0OiBSZWY8SUNvbmZpZ3VyZVByb2R1Y3Q+ID0gcmVmKHtcbiAgICBjcHU6IG51bGwsXG4gICAgZ3B1OiBudWxsLFxuICAgIHJhbTogbnVsbCxcbiAgICBtb3RoZXJib2FyZDogbnVsbCxcbiAgICBzc2Q6IG51bGwsXG4gICAgaGRkOiBudWxsLFxuICAgIGNhc2U6IG51bGwsXG4gICAgcGI6IG51bGwsXG4gICAgcGNfZmFuOiBudWxsLFxuICAgIGNwdV9jb29sZXI6IG51bGwsXG59KVxuXG5vbk1vdW50ZWQoYXN5bmMgKCkgPT4ge1xuICAgIGNhdGVnb3JpZXMudmFsdWUgPSBhd2FpdCBnZXRDYXRlZ29yaWVzKClcblxuICAgIGNob29zZW5DYXRlZ29yeS52YWx1ZSA9IGNhdGVnb3JpZXMudmFsdWVbMF1cblxuICAgIGluaXRpYWxpemVTd2lwZXIoe1xuICAgICAgICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMzAsXG4gICAgfSlcbn0pXG5cblxuY29uc3QgX19yZXR1cm5lZF9fID0geyBzd2lwZXIsIHN3aXBlckNvbnRhaW5lciwgaW5pdGlhbGl6ZVN3aXBlciwgY2F0ZWdvcmllcywgY2hvb3NlbkNhdGVnb3J5LCB1cGRhdGVDaG9vc2VuQ2F0ZWdvcnksIGdldENhdGVnb3JpZXMsIHByb2R1Y3RzLCBnZXRQcm9kdWN0cywgQ29uZmlndXJlUHJvZHVjdCwgR29vZEl0ZW0gfVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KF9fcmV0dXJuZWRfXywgJ19faXNTY3JpcHRTZXR1cCcsIHsgZW51bWVyYWJsZTogZmFsc2UsIHZhbHVlOiB0cnVlIH0pXG5yZXR1cm4gX19yZXR1cm5lZF9fXG59XG5cbn0pIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJmaXJzdC1zZWN0aW9uLXdyYXBwZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZpcnN0LXNlY3Rpb25cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaXJzdC1zZWN0aW9uLWNvbnRhaW5lciBjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJmaXJzdC1zZWN0aW9uX190aXRsZSB0aXRsZVwiPtCa0L7QvdGE0LjQs9GD0YDQsNGC0L7RgDwvaDE+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpcnN0LXNlY3Rpb24tc2xpZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgcmVmPVwic3dpcGVyQ29udGFpbmVyXCIgY2xhc3M9XCJzd2lwZXItY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3dpcGVyLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IEBjbGljaz1cInVwZGF0ZUNob29zZW5DYXRlZ29yeShjYXRlZ29yeSlcIiB2LWZvcj1cImNhdGVnb3J5IGluIGNhdGVnb3JpZXNcIiA6a2V5PVwiY2F0ZWdvcnkuaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInN3aXBlci1zbGlkZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHYtaWY9XCJjYXRlZ29yeS5pbWFnZVwiIDpzcmM9XCJjYXRlZ29yeS5pbWFnZS5zcmNcIiA6YWx0PVwiY2F0ZWdvcnkuaW1hZ2UubmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57eyBjYXRlZ29yeS5uYW1lIH19PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaXJzdC1zZWN0aW9uLXByb2R1Y3RzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlyc3Qtc2VjdGlvbi1nb29kc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEdvb2RJdGVtIHYtZm9yPVwicHJvZHVjdCBpbiBwcm9kdWN0c1wiIDprZXk9XCJwcm9kdWN0LmlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsOmFkZGluZy1maWVsZD1cIkNvbmZpZ3VyZVByb2R1Y3RbY2hvb3NlbkNhdGVnb3J5LnNsdWddXCIgOnByb2R1Y3Q9XCJwcm9kdWN0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaXJzdC1zZWN0aW9uLWZpbHRlcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gPEN1c3RvbVNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAvPiAtLT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgUmVmLCBjb21wdXRlZCwgb25Nb3VudGVkLCByZWYsIHdhdGNoIH0gZnJvbSAndnVlJztcbmltcG9ydCBXT08gZnJvbSAnQC9heGlvc1dvb2NvbWVyY2UnXG5pbXBvcnQgeyBJUHJvZHVjdCwgSVByb2R1Y3RDYXRlZ29yeVJlc3BvbnNlIH0gZnJvbSAnQC90eXBlcy9Qcm9kdWN0JztcblxuaW1wb3J0IFN3aXBlciBmcm9tICdzd2lwZXInO1xuaW1wb3J0ICdzd2lwZXIvY3NzJztcbmltcG9ydCBHb29kSXRlbSBmcm9tICdAL2NvbXBvbmVudHMvR29vZEl0ZW0udnVlJztcbmltcG9ydCBDdXN0b21TZWxlY3QgZnJvbSAnQC9jb21wb25lbnRzL0N1c3RvbVNlbGVjdC52dWUnO1xuaW1wb3J0IHsgdXNlU3dpcGVyIH0gZnJvbSAnQC9ob29rcy9MaWJzL3VzZVN3aXBlcidcblxuY29uc3QgeyBzd2lwZXIsIHN3aXBlckNvbnRhaW5lciwgaW5pdGlhbGl6ZVN3aXBlciB9ID0gdXNlU3dpcGVyKClcblxuY29uc3QgY2F0ZWdvcmllczogUmVmPEFycmF5PElQcm9kdWN0Q2F0ZWdvcnlSZXNwb25zZT4+ID0gcmVmKFtdKVxuXG5jb25zdCBjaG9vc2VuQ2F0ZWdvcnk6IFJlZjxJUHJvZHVjdENhdGVnb3J5UmVzcG9uc2UgfCBudWxsPiA9IHJlZihudWxsKVxuXG5jb25zdCB1cGRhdGVDaG9vc2VuQ2F0ZWdvcnkgPSAoY2F0ZWdvcnk6IElQcm9kdWN0Q2F0ZWdvcnlSZXNwb25zZSkgPT4ge1xuICAgIGNob29zZW5DYXRlZ29yeS52YWx1ZSA9IGNhdGVnb3J5XG59XG5cbmNvbnN0IGdldENhdGVnb3JpZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgV09PLmdldCgnL3Byb2R1Y3RzL2NhdGVnb3JpZXMnLCB7XG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgcGVyX3BhZ2U6IDEwMCxcbiAgICAgICAgICAgIHBhcmVudDogMTksXG4gICAgICAgICAgICBvcmRlcjogJ2Rlc2MnLFxuICAgICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xufVxuXG5jb25zdCBwcm9kdWN0czogUmVmPEFycmF5PElQcm9kdWN0Pj4gPSByZWYoW10pXG5cbmNvbnN0IGdldFByb2R1Y3RzID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgV09PLmdldChgcHJvZHVjdHM/Y2F0ZWdvcnk9JHtjaG9vc2VuQ2F0ZWdvcnkudmFsdWUuaWR9YClcblxuICAgIHJldHVybiByZXNwb25zZS5kYXRhXG59XG5cbndhdGNoKGNob29zZW5DYXRlZ29yeSwgYXN5bmMgKCkgPT4ge1xuICAgIGlmIChjaG9vc2VuQ2F0ZWdvcnkpIHtcbiAgICAgICAgcHJvZHVjdHMudmFsdWUgPSBhd2FpdCBnZXRQcm9kdWN0cygpXG4gICAgfVxufSwgeyBkZWVwOiB0cnVlIH0pXG5cblxuaW50ZXJmYWNlIElDb25maWd1cmVQcm9kdWN0IHtcbiAgICBjcHU6IG9iamVjdCB8IG51bGw7XG4gICAgZ3B1OiBvYmplY3QgfCBudWxsO1xuICAgIHJhbTogb2JqZWN0IHwgbnVsbDtcbiAgICBtb3RoZXJib2FyZDogb2JqZWN0IHwgbnVsbDtcbiAgICBzc2Q6IG9iamVjdCB8IG51bGw7XG4gICAgaGRkOiBvYmplY3QgfCBudWxsO1xuICAgIGNhc2U6IG9iamVjdCB8IG51bGw7XG4gICAgcGI6IG9iamVjdCB8IG51bGw7XG4gICAgcGNfZmFuOiBvYmplY3QgfCBudWxsO1xuICAgIGNwdV9jb29sZXI6IG9iamVjdCB8IG51bGw7XG59XG5cbmNvbnN0IENvbmZpZ3VyZVByb2R1Y3Q6IFJlZjxJQ29uZmlndXJlUHJvZHVjdD4gPSByZWYoe1xuICAgIGNwdTogbnVsbCxcbiAgICBncHU6IG51bGwsXG4gICAgcmFtOiBudWxsLFxuICAgIG1vdGhlcmJvYXJkOiBudWxsLFxuICAgIHNzZDogbnVsbCxcbiAgICBoZGQ6IG51bGwsXG4gICAgY2FzZTogbnVsbCxcbiAgICBwYjogbnVsbCxcbiAgICBwY19mYW46IG51bGwsXG4gICAgY3B1X2Nvb2xlcjogbnVsbCxcbn0pXG5cbm9uTW91bnRlZChhc3luYyAoKSA9PiB7XG4gICAgY2F0ZWdvcmllcy52YWx1ZSA9IGF3YWl0IGdldENhdGVnb3JpZXMoKVxuXG4gICAgY2hvb3NlbkNhdGVnb3J5LnZhbHVlID0gY2F0ZWdvcmllcy52YWx1ZVswXVxuXG4gICAgaW5pdGlhbGl6ZVN3aXBlcih7XG4gICAgICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcbiAgICB9KVxufSlcblxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cbi5maXJzdC1zZWN0aW9uLWNvbnRhaW5lciB7fVxuXG4uZmlyc3Qtc2VjdGlvbiB7XG4gICAgcGFkZGluZzogMTIwcHggMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOSwgMTksIDE5KTtcblxuICAgICZfX3RpdGxlIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA4MHB4O1xuICAgIH1cbn1cblxuLmZpcnN0LXNlY3Rpb24tc2xpZGVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xufVxuXG4uc3dpcGVyLWNvbnRhaW5lciB7XG5cbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cblxuLmZpcnN0LXNlY3Rpb24td3JhcHBlciB7XG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xufVxuXG4uc3dpcGVyLXdyYXBwZXIge1xuICAgIC8vIGRpc3BsYXk6IGZsZXg7XG4gICAgLy8gZ2FwOiAzMHB4O1xuICAgIC8vIHdpZHRoOiAxMDAlO1xufVxuXG4uc3dpcGVyLXNsaWRlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGdhcDogMTVweDtcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQsIDI0LCAyNCk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDE1cHg7XG5cbiAgICBpbWcge1xuICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgIH1cblxuICAgIHAge1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG59XG5cbi5maXJzdC1zZWN0aW9uLXByb2R1Y3RzLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDVmciAyZnI7XG4gICAgZ2FwOiA0MHB4O1xufVxuXG4uZmlyc3Qtc2VjdGlvbi1nb29kcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTBweDtcbn1cblxuLmZpcnN0LXNlY3Rpb24tZmlsdGVycyB7XG4gICAgcGFkZGluZzogMTVweCAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNCwgMjQsIDI0KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogNnB4O1xufVxuPC9zdHlsZT4iLCJpbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgYXMgX2RlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSdcbmltcG9ydCBGaXJzdFNlY3Rpb24gZnJvbSAnQC9zZWN0aW9ucy9jb25maWd1cmF0b3IvZmlyc3Qtc2VjdGlvbi52dWUnXG5pbXBvcnQgeyBnZXRQYWdlU2V0dGluZ3MgfSBmcm9tICdAL2FwaS9BcHAvZ2V0UGFnZVNldHRpbmdzJztcbmltcG9ydCB7IHVzZUxvYWQgfSBmcm9tICdAL2hvb2tzL0FwcC91c2VMb2FkJztcbmltcG9ydCB7IHVzZVBhZ2VTZXR0aW5ncyB9IGZyb20gJ0AvaG9va3MvQXBwL3VzZVBhZ2VTZXR0aW5ncyc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnQC9zdG9yZSc7XG5pbXBvcnQgeyBvbk1vdW50ZWQsIHJlZiB9IGZyb20gJ3Z1ZSc7XG5cbmRlY2xhcmUgdmFyIHByZWxvYWRlckNsb3NlOiAoKSA9PiB2b2lkO1xuXG5cbmV4cG9ydCBkZWZhdWx0IC8qI19fUFVSRV9fKi9fZGVmaW5lQ29tcG9uZW50KHtcbiAgX19uYW1lOiAnY29uZmlndXJhdG9yJyxcbiAgc2V0dXAoX19wcm9wcywgeyBleHBvc2U6IF9fZXhwb3NlIH0pIHtcbiAgX19leHBvc2UoKTtcblxuY29uc3QgaXNQYWdlRGF0YUxvYWRlZCA9IHJlZihmYWxzZSlcblxubGV0IHsgbG9hZGVyIH0gPSB1c2VMb2FkKDIpXG5cbmxvYWRlci52YWx1ZS5vbkFsbGlzTG9hZGVkID0gKCkgPT4ge1xuICAgIHByZWxvYWRlckNsb3NlKClcbiAgICBsb2FkZXIudmFsdWUucmVzdGFydCgpXG59XG5cblxubGV0IHsgcGFnZSB9ID0gdXNlUGFnZVNldHRpbmdzKHN0b3JlKVxuXG5vbk1vdW50ZWQoYXN5bmMgKCkgPT4ge1xuICAgIHBhZ2UudmFsdWUgPSBhd2FpdCBnZXRQYWdlU2V0dGluZ3MoMzMxKVxuXG4gICAgaXNQYWdlRGF0YUxvYWRlZC52YWx1ZSA9IHRydWVcblxuICAgIHByZWxvYWRlckNsb3NlKClcbn0pXG5cblxuY29uc3QgX19yZXR1cm5lZF9fID0geyBpc1BhZ2VEYXRhTG9hZGVkLCBnZXQgbG9hZGVyKCkgeyByZXR1cm4gbG9hZGVyIH0sIHNldCBsb2FkZXIodikgeyBsb2FkZXIgPSB2IH0sIGdldCBwYWdlKCkgeyByZXR1cm4gcGFnZSB9LCBzZXQgcGFnZSh2KSB7IHBhZ2UgPSB2IH0sIEZpcnN0U2VjdGlvbiB9XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoX19yZXR1cm5lZF9fLCAnX19pc1NjcmlwdFNldHVwJywgeyBlbnVtZXJhYmxlOiBmYWxzZSwgdmFsdWU6IHRydWUgfSlcbnJldHVybiBfX3JldHVybmVkX19cbn1cblxufSkiLCI8dGVtcGxhdGU+XG4gICAgPG1haW4gdi1pZj1cImlzUGFnZURhdGFMb2FkZWRcIj5cbiAgICAgICAgPEZpcnN0U2VjdGlvbi8+XG4gICAgPC9tYWluPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCBGaXJzdFNlY3Rpb24gZnJvbSAnQC9zZWN0aW9ucy9jb25maWd1cmF0b3IvZmlyc3Qtc2VjdGlvbi52dWUnXG5pbXBvcnQgeyBnZXRQYWdlU2V0dGluZ3MgfSBmcm9tICdAL2FwaS9BcHAvZ2V0UGFnZVNldHRpbmdzJztcbmltcG9ydCB7IHVzZUxvYWQgfSBmcm9tICdAL2hvb2tzL0FwcC91c2VMb2FkJztcbmltcG9ydCB7IHVzZVBhZ2VTZXR0aW5ncyB9IGZyb20gJ0AvaG9va3MvQXBwL3VzZVBhZ2VTZXR0aW5ncyc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnQC9zdG9yZSc7XG5pbXBvcnQgeyBvbk1vdW50ZWQsIHJlZiB9IGZyb20gJ3Z1ZSc7XG5cbmNvbnN0IGlzUGFnZURhdGFMb2FkZWQgPSByZWYoZmFsc2UpXG5cbmxldCB7IGxvYWRlciB9ID0gdXNlTG9hZCgyKVxuXG5kZWNsYXJlIHZhciBwcmVsb2FkZXJDbG9zZTogKCkgPT4gdm9pZDtcblxubG9hZGVyLnZhbHVlLm9uQWxsaXNMb2FkZWQgPSAoKSA9PiB7XG4gICAgcHJlbG9hZGVyQ2xvc2UoKVxuICAgIGxvYWRlci52YWx1ZS5yZXN0YXJ0KClcbn1cblxuXG5sZXQgeyBwYWdlIH0gPSB1c2VQYWdlU2V0dGluZ3Moc3RvcmUpXG5cbm9uTW91bnRlZChhc3luYyAoKSA9PiB7XG4gICAgcGFnZS52YWx1ZSA9IGF3YWl0IGdldFBhZ2VTZXR0aW5ncygzMzEpXG5cbiAgICBpc1BhZ2VEYXRhTG9hZGVkLnZhbHVlID0gdHJ1ZVxuXG4gICAgcHJlbG9hZGVyQ2xvc2UoKVxufSlcblxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD48L3N0eWxlPiIsImltcG9ydCB7IHRvRGlzcGxheVN0cmluZyBhcyBfdG9EaXNwbGF5U3RyaW5nLCBjcmVhdGVFbGVtZW50Vk5vZGUgYXMgX2NyZWF0ZUVsZW1lbnRWTm9kZSwgb3BlbkJsb2NrIGFzIF9vcGVuQmxvY2ssIGNyZWF0ZUVsZW1lbnRCbG9jayBhcyBfY3JlYXRlRWxlbWVudEJsb2NrIH0gZnJvbSBcInZ1ZVwiXG5cbmNvbnN0IF9ob2lzdGVkXzEgPSB7IGNsYXNzOiBcImNhcnQtYnV0dG9uXCIgfVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKF9jdHg6IGFueSxfY2FjaGU6IGFueSwkcHJvcHM6IGFueSwkc2V0dXA6IGFueSwkZGF0YTogYW55LCRvcHRpb25zOiBhbnkpIHtcbiAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJkaXZcIiwgX2hvaXN0ZWRfMSwgW1xuICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJidXR0b25cIiwge1xuICAgICAgb25DbGljazogJHNldHVwLm9uQ2xpY2ssXG4gICAgICBjbGFzczogXCJidXR0b24gY2FydC1idXR0b25fX2J1dHRvblwiXG4gICAgfSwgX3RvRGlzcGxheVN0cmluZygkc2V0dXAucHJvZHVjdEluQWRkaW5nRmllbGQgPyAn0KPQsdGA0LDRgtGMJyA6ICfQlNC+0LHQsNCy0LjRgtGMJyksIDEgLyogVEVYVCAqLylcbiAgXSkpXG59IiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudFZOb2RlIGFzIF9jcmVhdGVFbGVtZW50Vk5vZGUsIHRvRGlzcGxheVN0cmluZyBhcyBfdG9EaXNwbGF5U3RyaW5nLCBjcmVhdGVWTm9kZSBhcyBfY3JlYXRlVk5vZGUsIG9wZW5CbG9jayBhcyBfb3BlbkJsb2NrLCBjcmVhdGVFbGVtZW50QmxvY2sgYXMgX2NyZWF0ZUVsZW1lbnRCbG9jaywgcHVzaFNjb3BlSWQgYXMgX3B1c2hTY29wZUlkLCBwb3BTY29wZUlkIGFzIF9wb3BTY29wZUlkIH0gZnJvbSBcInZ1ZVwiXG5cbmNvbnN0IF93aXRoU2NvcGVJZCA9IG4gPT4gKF9wdXNoU2NvcGVJZChcImRhdGEtdi0xZmRlOWNjMFwiKSxuPW4oKSxfcG9wU2NvcGVJZCgpLG4pXG5jb25zdCBfaG9pc3RlZF8xID0geyBjbGFzczogXCJnb29kLWl0ZW1cIiB9XG5jb25zdCBfaG9pc3RlZF8yID0geyBjbGFzczogXCJnb29kLWl0ZW1fX2ltYWdlLWJveFwiIH1cbmNvbnN0IF9ob2lzdGVkXzMgPSBbXCJzcmNcIiwgXCJhbHRcIl1cbmNvbnN0IF9ob2lzdGVkXzQgPSB7IGNsYXNzOiBcImdvb2QtaXRlbS1jb250ZW50XCIgfVxuY29uc3QgX2hvaXN0ZWRfNSA9IHsgY2xhc3M6IFwiZ29vZC1pdGVtLWNvbnRlbnRfX2Rlc2NyaXB0aW9uXCIgfVxuY29uc3QgX2hvaXN0ZWRfNiA9IHsgY2xhc3M6IFwiZ29vZC1pdGVtLWNvbnRlbnRfX3RpdGxlXCIgfVxuY29uc3QgX2hvaXN0ZWRfNyA9IHsgY2xhc3M6IFwiZ29vZC1pdGVtLWNvbnRlbnRfX3ByaWNlXCIgfVxuY29uc3QgX2hvaXN0ZWRfOCA9IHsgY2xhc3M6IFwiZ29vZC1pdGVtLWNvbnRlbnRfX3F1YW50aXR5LWJveFwiIH1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihfY3R4OiBhbnksX2NhY2hlOiBhbnksJHByb3BzOiBhbnksJHNldHVwOiBhbnksJGRhdGE6IGFueSwkb3B0aW9uczogYW55KSB7XG4gIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwiZGl2XCIsIF9ob2lzdGVkXzEsIFtcbiAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzIsIFtcbiAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJpbWdcIiwge1xuICAgICAgICBjbGFzczogXCJnb29kLWl0ZW1fX2ltYWdlXCIsXG4gICAgICAgIHNyYzogJHNldHVwLnByb2R1Y3QuaW1hZ2VzWzBdLnNyYyxcbiAgICAgICAgYWx0OiAkc2V0dXAucHJvZHVjdC5uYW1lXG4gICAgICB9LCBudWxsLCA4IC8qIFBST1BTICovLCBfaG9pc3RlZF8zKVxuICAgIF0pLFxuICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfNCwgW1xuICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF81LCBbXG4gICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJwXCIsIF9ob2lzdGVkXzYsIF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLnByb2R1Y3QubmFtZSksIDEgLyogVEVYVCAqLyksXG4gICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJwXCIsIF9ob2lzdGVkXzcsIF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLnByb2R1Y3QucHJpY2UpICsgXCIg0YDRg9CxIC8g0YjRglwiLCAxIC8qIFRFWFQgKi8pXG4gICAgICBdKSxcbiAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfOCwgW1xuICAgICAgICBfY3JlYXRlVk5vZGUoJHNldHVwW1wiQ2FydEJ1dHRvbkVhc2x5XCJdLCB7XG4gICAgICAgICAgcHJvZHVjdDogJHNldHVwLnByb2R1Y3QsXG4gICAgICAgICAgXCJhZGRpbmctZmllbGRcIjogJHNldHVwLmFkZGluZ0ZpZWxkLFxuICAgICAgICAgIFwib25VcGRhdGU6YWRkaW5nRmllbGRcIjogX2NhY2hlWzBdIHx8IChfY2FjaGVbMF0gPSAoJGV2ZW50OiBhbnkpID0+ICgkc2V0dXAuZW1pdCgndXBkYXRlOmFkZGluZ0ZpZWxkJywgJGV2ZW50KSkpXG4gICAgICAgIH0sIG51bGwsIDggLyogUFJPUFMgKi8sIFtcInByb2R1Y3RcIiwgXCJhZGRpbmctZmllbGRcIl0pLFxuICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwicFwiLCB7XG4gICAgICAgICAgY2xhc3M6IFwiZ29vZC1pdGVtLWNvbnRlbnRfX3NwZWMtYnV0dG9uXCIsXG4gICAgICAgICAgb25DbGljazogJHNldHVwLm9uQ2xpY2tcbiAgICAgICAgfSwgXCLQn9C+0LTRgNC+0LHQvdC10LVcIilcbiAgICAgIF0pXG4gICAgXSlcbiAgXSkpXG59IiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudFZOb2RlIGFzIF9jcmVhdGVFbGVtZW50Vk5vZGUsIHJlbmRlckxpc3QgYXMgX3JlbmRlckxpc3QsIEZyYWdtZW50IGFzIF9GcmFnbWVudCwgb3BlbkJsb2NrIGFzIF9vcGVuQmxvY2ssIGNyZWF0ZUVsZW1lbnRCbG9jayBhcyBfY3JlYXRlRWxlbWVudEJsb2NrLCBjcmVhdGVDb21tZW50Vk5vZGUgYXMgX2NyZWF0ZUNvbW1lbnRWTm9kZSwgdG9EaXNwbGF5U3RyaW5nIGFzIF90b0Rpc3BsYXlTdHJpbmcsIGNyZWF0ZUJsb2NrIGFzIF9jcmVhdGVCbG9jaywgcHVzaFNjb3BlSWQgYXMgX3B1c2hTY29wZUlkLCBwb3BTY29wZUlkIGFzIF9wb3BTY29wZUlkIH0gZnJvbSBcInZ1ZVwiXG5cbmNvbnN0IF93aXRoU2NvcGVJZCA9IG4gPT4gKF9wdXNoU2NvcGVJZChcImRhdGEtdi0yNmNhYWZiNFwiKSxuPW4oKSxfcG9wU2NvcGVJZCgpLG4pXG5jb25zdCBfaG9pc3RlZF8xID0geyBjbGFzczogXCJmaXJzdC1zZWN0aW9uLXdyYXBwZXJcIiB9XG5jb25zdCBfaG9pc3RlZF8yID0geyBjbGFzczogXCJmaXJzdC1zZWN0aW9uXCIgfVxuY29uc3QgX2hvaXN0ZWRfMyA9IHsgY2xhc3M6IFwiZmlyc3Qtc2VjdGlvbi1jb250YWluZXIgY29udGFpbmVyXCIgfVxuY29uc3QgX2hvaXN0ZWRfNCA9IC8qI19fUFVSRV9fKi8gX3dpdGhTY29wZUlkKCgpID0+IC8qI19fUFVSRV9fKi9fY3JlYXRlRWxlbWVudFZOb2RlKFwiaDFcIiwgeyBjbGFzczogXCJmaXJzdC1zZWN0aW9uX190aXRsZSB0aXRsZVwiIH0sIFwi0JrQvtC90YTQuNCz0YPRgNCw0YLQvtGAXCIsIC0xIC8qIEhPSVNURUQgKi8pKVxuY29uc3QgX2hvaXN0ZWRfNSA9IHsgY2xhc3M6IFwiZmlyc3Qtc2VjdGlvbi1zbGlkZXJcIiB9XG5jb25zdCBfaG9pc3RlZF82ID0ge1xuICByZWY6IFwic3dpcGVyQ29udGFpbmVyXCIsXG4gIGNsYXNzOiBcInN3aXBlci1jb250YWluZXJcIlxufVxuY29uc3QgX2hvaXN0ZWRfNyA9IHsgY2xhc3M6IFwic3dpcGVyLXdyYXBwZXJcIiB9XG5jb25zdCBfaG9pc3RlZF84ID0gW1wib25DbGlja1wiXVxuY29uc3QgX2hvaXN0ZWRfOSA9IFtcInNyY1wiLCBcImFsdFwiXVxuY29uc3QgX2hvaXN0ZWRfMTAgPSB7IGNsYXNzOiBcImZpcnN0LXNlY3Rpb24tcHJvZHVjdHMtY29udGFpbmVyXCIgfVxuY29uc3QgX2hvaXN0ZWRfMTEgPSB7IGNsYXNzOiBcImZpcnN0LXNlY3Rpb24tZ29vZHNcIiB9XG5jb25zdCBfaG9pc3RlZF8xMiA9IC8qI19fUFVSRV9fKi8gX3dpdGhTY29wZUlkKCgpID0+IC8qI19fUFVSRV9fKi9fY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIHsgY2xhc3M6IFwiZmlyc3Qtc2VjdGlvbi1maWx0ZXJzXCIgfSwgW1xuICAvKiNfX1BVUkVfXyovX2NyZWF0ZUNvbW1lbnRWTm9kZShcIiA8Q3VzdG9tU2VsZWN0XFxuICAgICAgICAgICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgICAgICAgICAgLz4gXCIpXG5dLCAtMSAvKiBIT0lTVEVEICovKSlcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihfY3R4OiBhbnksX2NhY2hlOiBhbnksJHByb3BzOiBhbnksJHNldHVwOiBhbnksJGRhdGE6IGFueSwkb3B0aW9uczogYW55KSB7XG4gIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwiZGl2XCIsIF9ob2lzdGVkXzEsIFtcbiAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzIsIFtcbiAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfMywgW1xuICAgICAgICBfaG9pc3RlZF80LFxuICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzUsIFtcbiAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzYsIFtcbiAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfNywgW1xuICAgICAgICAgICAgICAoX29wZW5CbG9jayh0cnVlKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhfRnJhZ21lbnQsIG51bGwsIF9yZW5kZXJMaXN0KCRzZXR1cC5jYXRlZ29yaWVzLCAoY2F0ZWdvcnkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrOiAoJGV2ZW50OiBhbnkpID0+ICgkc2V0dXAudXBkYXRlQ2hvb3NlbkNhdGVnb3J5KGNhdGVnb3J5KSksXG4gICAgICAgICAgICAgICAgICBrZXk6IGNhdGVnb3J5LmlkLFxuICAgICAgICAgICAgICAgICAgY2xhc3M6IFwic3dpcGVyLXNsaWRlXCJcbiAgICAgICAgICAgICAgICB9LCBbXG4gICAgICAgICAgICAgICAgICAoY2F0ZWdvcnkuaW1hZ2UpXG4gICAgICAgICAgICAgICAgICAgID8gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM6IGNhdGVnb3J5LmltYWdlLnNyYyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogY2F0ZWdvcnkuaW1hZ2UubmFtZVxuICAgICAgICAgICAgICAgICAgICAgIH0sIG51bGwsIDggLyogUFJPUFMgKi8sIF9ob2lzdGVkXzkpKVxuICAgICAgICAgICAgICAgICAgICA6IF9jcmVhdGVDb21tZW50Vk5vZGUoXCJ2LWlmXCIsIHRydWUpLFxuICAgICAgICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcInBcIiwgbnVsbCwgX3RvRGlzcGxheVN0cmluZyhjYXRlZ29yeS5uYW1lKSwgMSAvKiBURVhUICovKVxuICAgICAgICAgICAgICAgIF0sIDggLyogUFJPUFMgKi8sIF9ob2lzdGVkXzgpKVxuICAgICAgICAgICAgICB9KSwgMTI4IC8qIEtFWUVEX0ZSQUdNRU5UICovKSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSwgNTEyIC8qIE5FRURfUEFUQ0ggKi8pXG4gICAgICAgIF0pLFxuICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzEwLCBbXG4gICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF8xMSwgW1xuICAgICAgICAgICAgKF9vcGVuQmxvY2sodHJ1ZSksIF9jcmVhdGVFbGVtZW50QmxvY2soX0ZyYWdtZW50LCBudWxsLCBfcmVuZGVyTGlzdCgkc2V0dXAucHJvZHVjdHMsIChwcm9kdWN0KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlQmxvY2soJHNldHVwW1wiR29vZEl0ZW1cIl0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IHByb2R1Y3QuaWQsXG4gICAgICAgICAgICAgICAgXCJhZGRpbmctZmllbGRcIjogJHNldHVwLkNvbmZpZ3VyZVByb2R1Y3RbJHNldHVwLmNob29zZW5DYXRlZ29yeS5zbHVnXSxcbiAgICAgICAgICAgICAgICBcIm9uVXBkYXRlOmFkZGluZ0ZpZWxkXCI6IF9jYWNoZVswXSB8fCAoX2NhY2hlWzBdID0gKCRldmVudDogYW55KSA9PiAoKCRzZXR1cC5Db25maWd1cmVQcm9kdWN0WyRzZXR1cC5jaG9vc2VuQ2F0ZWdvcnkuc2x1Z10pID0gJGV2ZW50KSksXG4gICAgICAgICAgICAgICAgcHJvZHVjdDogcHJvZHVjdFxuICAgICAgICAgICAgICB9LCBudWxsLCA4IC8qIFBST1BTICovLCBbXCJhZGRpbmctZmllbGRcIiwgXCJwcm9kdWN0XCJdKSlcbiAgICAgICAgICAgIH0pLCAxMjggLyogS0VZRURfRlJBR01FTlQgKi8pKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF9ob2lzdGVkXzEyXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF0pXG4gIF0pKVxufSIsImltcG9ydCB7IGNyZWF0ZVZOb2RlIGFzIF9jcmVhdGVWTm9kZSwgb3BlbkJsb2NrIGFzIF9vcGVuQmxvY2ssIGNyZWF0ZUVsZW1lbnRCbG9jayBhcyBfY3JlYXRlRWxlbWVudEJsb2NrLCBjcmVhdGVDb21tZW50Vk5vZGUgYXMgX2NyZWF0ZUNvbW1lbnRWTm9kZSB9IGZyb20gXCJ2dWVcIlxuXG5jb25zdCBfaG9pc3RlZF8xID0geyBrZXk6IDAgfVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKF9jdHg6IGFueSxfY2FjaGU6IGFueSwkcHJvcHM6IGFueSwkc2V0dXA6IGFueSwkZGF0YTogYW55LCRvcHRpb25zOiBhbnkpIHtcbiAgcmV0dXJuICgkc2V0dXAuaXNQYWdlRGF0YUxvYWRlZClcbiAgICA/IChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJtYWluXCIsIF9ob2lzdGVkXzEsIFtcbiAgICAgICAgX2NyZWF0ZVZOb2RlKCRzZXR1cFtcIkZpcnN0U2VjdGlvblwiXSlcbiAgICAgIF0pKVxuICAgIDogX2NyZWF0ZUNvbW1lbnRWTm9kZShcInYtaWZcIiwgdHJ1ZSlcbn0iLCJpbXBvcnQgV1AgZnJvbSAnQC9heGlvc1dQJ1xuaW1wb3J0IHsgU2V0dGluZ3MgfSBmcm9tICdAL3R5cGVzL0FwcCdcblxuXG5cbmV4cG9ydCBjb25zdCBnZXRQYWdlU2V0dGluZ3MgPSBhc3luYyAoaWQ6IG51bWJlcik6IFByb21pc2U8U2V0dGluZ3M+ID0+IHtcbiAgICByZXR1cm4gYXdhaXQgV1AuZ2V0KCdwYWdlcy8nICsgaWQpLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuZGF0YSlcbn0iLCJpbXBvcnQgeyBSZWYsIGNvbXB1dGVkLCByZWYsIHdhdGNoIH0gZnJvbSBcInZ1ZVwiO1xuXG5jbGFzcyBMb2FkZXIge1xuXG4gICAgcHJpdmF0ZSBsb2FkZWRDb3VudGVyOiBudW1iZXIgPSAwO1xuXG4gICAgcHJpdmF0ZSBjb3VudGVyOiBudW1iZXIgPSAwO1xuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihjb3VudGVyOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5jb3VudGVyID0gY291bnRlcjtcbiAgICB9XG4gICAgcHVibGljIGxvYWQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMubG9hZGVkQ291bnRlcisrO1xuXG4gICAgICAgIHRoaXMuYWZ0ZXJMb2FkKClcbiAgICB9XG4gICAgcHVibGljIHJlc3RhcnQoY291bnQ/OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKGNvdW50KSB7XG4gICAgICAgICAgICB0aGlzLmNvdW50ZXIgPSBjb3VudFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5sb2FkZWRDb3VudGVyID0gMDtcbiAgICB9XG4gICAgcHVibGljIG9uQWxsaXNMb2FkZWQ6IEZ1bmN0aW9uO1xuICAgIHByaXZhdGUgYWZ0ZXJMb2FkKCk6IHZvaWQge1xuXG4gICAgICAgIGlmICh0aGlzLmxvYWRlZENvdW50ZXIgIT0gdGhpcy5jb3VudGVyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5vbkFsbGlzTG9hZGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vbkFsbGlzTG9hZGVkKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuZXhwb3J0IGNvbnN0IHVzZUxvYWQgPSAoY291bnQ6IG51bWJlcikgPT4ge1xuXG4gICAgY29uc3QgbG9hZGVyID0gcmVmKG5ldyBMb2FkZXIoY291bnQpKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGxvYWRlcixcbiAgICB9XG59IiwiaW1wb3J0IFN0b3JlLCB7IE11dGF0aW9ucyB9IGZyb20gJ0Avc3RvcmUnO1xuaW1wb3J0IHsgV3JpdGFibGVDb21wdXRlZFJlZiwgY29tcHV0ZWQgfSBmcm9tICd2dWUnO1xuaW1wb3J0IHsgSUNhdGVnb3J5TWFpblBhZ2UsIFNldHRpbmdzIH0gZnJvbSAnQC90eXBlcy9BcHAnO1xuXG5cbmV4cG9ydCBjb25zdCB1c2VQYWdlU2V0dGluZ3MgPSAoc3RvcmU6IHR5cGVvZiBTdG9yZSkgPT4ge1xuXG4gICAgbGV0IHBhZ2U6IFdyaXRhYmxlQ29tcHV0ZWRSZWY8T2JqZWN0PiA9IGNvbXB1dGVkKHtcbiAgICAgICAgZ2V0OiAoKSA9PiBzdG9yZS5zdGF0ZS5wYWdlLmNmcyxcbiAgICAgICAgc2V0OiAodmFsdWU6IFNldHRpbmdzKSA9PiBzdG9yZS5jb21taXQoTXV0YXRpb25zLlNFVF9QQUdFX1NFVFRJTkdTLCB2YWx1ZSksXG4gICAgfSlcblxuICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VcbiAgICB9XG5cbn0iLCJpbXBvcnQgU3dpcGVyIGZyb20gJ3N3aXBlcic7XG5pbXBvcnQgJ3N3aXBlci9jc3MnO1xuaW1wb3J0IHsgU3dpcGVyT3B0aW9ucyB9IGZyb20gJ3N3aXBlci90eXBlcy9zd2lwZXItb3B0aW9ucyc7XG5pbXBvcnQgeyBSZWYsIHJlZiB9IGZyb20gJ3Z1ZSc7XG5cbmV4cG9ydCBjb25zdCB1c2VTd2lwZXIgPSAoKSA9PiB7XG5cbiAgICBsZXQgc3dpcGVyOiBSZWY8U3dpcGVyIHwgbnVsbD4gPSByZWYobnVsbClcblxuICAgIGNvbnN0IHN3aXBlckNvbnRhaW5lcjogUmVmPEhUTUxFbGVtZW50IHwgbnVsbD4gPSByZWYobnVsbClcblxuICAgIGNvbnN0IGluaXRpYWxpemVTd2lwZXIgPSAoY29uZmlnOiBTd2lwZXJPcHRpb25zKSA9PiB7XG4gICAgICAgIHN3aXBlci52YWx1ZSA9IG5ldyBTd2lwZXIoc3dpcGVyQ29udGFpbmVyLnZhbHVlLCB7XG4gICAgICAgICAgICAuLi5jb25maWdcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3Qgc3dpcGVyUHJldiA9ICgpID0+IHtcbiAgICAgICAgc3dpcGVyLnZhbHVlLnNsaWRlUHJldigpO1xuICAgIH1cbiAgICBjb25zdCBzd2lwZXJOZXh0ID0gKCkgPT4ge1xuICAgICAgICBzd2lwZXIudmFsdWUuc2xpZGVOZXh0KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc3dpcGVyLFxuICAgICAgICBzd2lwZXJDb250YWluZXIsXG4gICAgICAgIGluaXRpYWxpemVTd2lwZXIsXG4gICAgICAgIHN3aXBlclByZXYsXG4gICAgICAgIHN3aXBlck5leHRcbiAgICB9XG5cbn0iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9DYXJ0QnV0dG9uRWFzbHkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZkNzRiY2QyJnRzPXRydWVcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9DYXJ0QnV0dG9uRWFzbHkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZzZXR1cD10cnVlJmxhbmc9dHNcIlxuZXhwb3J0ICogZnJvbSBcIi4vQ2FydEJ1dHRvbkVhc2x5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmc2V0dXA9dHJ1ZSZsYW5nPXRzXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19maWxlJyxcInNyYy9jb21wb25lbnRzL0NhcnRCdXR0b25FYXNseS52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiNmQ3NGJjZDJcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCc2ZDc0YmNkMicsIF9fZXhwb3J0c19fKSkge1xuICAgIGFwaS5yZWxvYWQoJzZkNzRiY2QyJywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9DYXJ0QnV0dG9uRWFzbHkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZkNzRiY2QyJnRzPXRydWVcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignNmQ3NGJjZDInLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL0dvb2RJdGVtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xZmRlOWNjMCZzY29wZWQ9dHJ1ZSZ0cz10cnVlXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vR29vZEl0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZzZXR1cD10cnVlJmxhbmc9dHNcIlxuZXhwb3J0ICogZnJvbSBcIi4vR29vZEl0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZzZXR1cD10cnVlJmxhbmc9dHNcIlxuXG5pbXBvcnQgXCIuL0dvb2RJdGVtLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTFmZGU5Y2MwJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZVwiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fc2NvcGVJZCcsXCJkYXRhLXYtMWZkZTljYzBcIl0sWydfX2ZpbGUnLFwic3JjL2NvbXBvbmVudHMvR29vZEl0ZW0udnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcIjFmZGU5Y2MwXCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnMWZkZTljYzAnLCBfX2V4cG9ydHNfXykpIHtcbiAgICBhcGkucmVsb2FkKCcxZmRlOWNjMCcsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vR29vZEl0ZW0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFmZGU5Y2MwJnNjb3BlZD10cnVlJnRzPXRydWVcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignMWZkZTljYzAnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL2ZpcnN0LXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI2Y2FhZmI0JnNjb3BlZD10cnVlJnRzPXRydWVcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9maXJzdC1zZWN0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmc2V0dXA9dHJ1ZSZsYW5nPXRzXCJcbmV4cG9ydCAqIGZyb20gXCIuL2ZpcnN0LXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZzZXR1cD10cnVlJmxhbmc9dHNcIlxuXG5pbXBvcnQgXCIuL2ZpcnN0LXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjZjYWFmYjQmbGFuZz1zY3NzJnNjb3BlZD10cnVlXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19zY29wZUlkJyxcImRhdGEtdi0yNmNhYWZiNFwiXSxbJ19fZmlsZScsXCJzcmMvc2VjdGlvbnMvY29uZmlndXJhdG9yL2ZpcnN0LXNlY3Rpb24udnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcIjI2Y2FhZmI0XCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnMjZjYWFmYjQnLCBfX2V4cG9ydHNfXykpIHtcbiAgICBhcGkucmVsb2FkKCcyNmNhYWZiNCcsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vZmlyc3Qtc2VjdGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjZjYWFmYjQmc2NvcGVkPXRydWUmdHM9dHJ1ZVwiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCcyNmNhYWZiNCcsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vY29uZmlndXJhdG9yLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xNzg2ZTVjZiZ0cz10cnVlXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vY29uZmlndXJhdG9yLnZ1ZT92dWUmdHlwZT1zY3JpcHQmc2V0dXA9dHJ1ZSZsYW5nPXRzXCJcbmV4cG9ydCAqIGZyb20gXCIuL2NvbmZpZ3VyYXRvci52dWU/dnVlJnR5cGU9c2NyaXB0JnNldHVwPXRydWUmbGFuZz10c1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fZmlsZScsXCJzcmMvdmlld3MvY29uZmlndXJhdG9yLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCIxNzg2ZTVjZlwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzE3ODZlNWNmJywgX19leHBvcnRzX18pKSB7XG4gICAgYXBpLnJlbG9hZCgnMTc4NmU1Y2YnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2NvbmZpZ3VyYXRvci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTc4NmU1Y2YmdHM9dHJ1ZVwiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCcxNzg2ZTVjZicsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzEwXS51c2VbMF0hLi9DYXJ0QnV0dG9uRWFzbHkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZzZXR1cD10cnVlJmxhbmc9dHNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMTBdLnVzZVswXSEuL0NhcnRCdXR0b25FYXNseS52dWU/dnVlJnR5cGU9c2NyaXB0JnNldHVwPXRydWUmbGFuZz10c1wiIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzEwXS51c2VbMF0hLi9Hb29kSXRlbS52dWU/dnVlJnR5cGU9c2NyaXB0JnNldHVwPXRydWUmbGFuZz10c1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxMF0udXNlWzBdIS4vR29vZEl0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZzZXR1cD10cnVlJmxhbmc9dHNcIiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxMF0udXNlWzBdIS4vZmlyc3Qtc2VjdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0JnNldHVwPXRydWUmbGFuZz10c1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxMF0udXNlWzBdIS4vZmlyc3Qtc2VjdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0JnNldHVwPXRydWUmbGFuZz10c1wiIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzEwXS51c2VbMF0hLi9jb25maWd1cmF0b3IudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZzZXR1cD10cnVlJmxhbmc9dHNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMTBdLnVzZVswXSEuL2NvbmZpZ3VyYXRvci52dWU/dnVlJnR5cGU9c2NyaXB0JnNldHVwPXRydWUmbGFuZz10c1wiIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzEwXS51c2VbMF0hLi9Hb29kSXRlbS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xZmRlOWNjMCZsYW5nPXNjc3Mmc2NvcGVkPXRydWVcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiMjQwOGRiNzZcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzEwXS51c2VbMF0hLi9Hb29kSXRlbS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xZmRlOWNjMCZsYW5nPXNjc3Mmc2NvcGVkPXRydWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMTBdLnVzZVswXSEuL0dvb2RJdGVtLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTFmZGU5Y2MwJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZVwiKTtcbiAgICAgaWYobmV3Q29udGVudC5fX2VzTW9kdWxlKSBuZXdDb250ZW50ID0gbmV3Q29udGVudC5kZWZhdWx0O1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMTBdLnVzZVswXSEuL2ZpcnN0LXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjZjYWFmYjQmbGFuZz1zY3NzJnNjb3BlZD10cnVlXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcImQ4NzJmNzAyXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxMF0udXNlWzBdIS4vZmlyc3Qtc2VjdGlvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yNmNhYWZiNCZsYW5nPXNjc3Mmc2NvcGVkPXRydWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMTBdLnVzZVswXSEuL2ZpcnN0LXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjZjYWFmYjQmbGFuZz1zY3NzJnNjb3BlZD10cnVlXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==