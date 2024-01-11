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
/* harmony import */ var _api_Katalog_getCategories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/api/Katalog/getCategories */ "./src/api/Katalog/getCategories.ts");







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
            categories.value = await (0,_api_Katalog_getCategories__WEBPACK_IMPORTED_MODULE_5__.getCategories)({
                per_page: 100,
                parent: 19,
                order: 'desc',
            });
            choosenCategory.value = categories.value[0];
            initializeSwiper({
                slidesPerView: 'auto',
                spaceBetween: 30,
            });
        });
        const __returned__ = { swiper, swiperContainer, initializeSwiper, categories, choosenCategory, updateChoosenCategory, products, getProducts, ConfigureProduct, GoodItem: _components_GoodItem_vue__WEBPACK_IMPORTED_MODULE_3__["default"] };
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

/***/ "./src/api/Katalog/getCategories.ts":
/*!******************************************!*\
  !*** ./src/api/Katalog/getCategories.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCategories: () => (/* binding */ getCategories)
/* harmony export */ });
/* harmony import */ var _axiosWoocomerce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/axiosWoocomerce */ "./src/axiosWoocomerce.ts");

const getCategories = async (params) => {
    let response = await _axiosWoocomerce__WEBPACK_IMPORTED_MODULE_0__["default"].get('/products/categories', { params: params });
    return response.data;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRzL2pzL3NyY192aWV3c19jb25maWd1cmF0b3JfdnVlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHlIQUF5SCxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyx1Q0FBdUMsb0JBQW9CLDBCQUEwQixnQkFBZ0Isa0JBQWtCLHlCQUF5QixnQ0FBZ0MseUJBQXlCLGtCQUFrQixxQkFBcUIsc0JBQXNCLDhCQUE4QixPQUFPLHNCQUFzQix3QkFBd0IsOEJBQThCLGtDQUFrQyx1QkFBdUIsd0JBQXdCLGtDQUFrQyw2QkFBNkIsT0FBTyxHQUFHLHdCQUF3QixvQkFBb0IsMEJBQTBCLHFDQUFxQyxrQkFB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b29kSXRlbS52dWU/YjhmMSIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvc2VjdGlvbnMvY29uZmlndXJhdG9yL2ZpcnN0LXNlY3Rpb24udnVlPzRiYzgiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL2NvbXBvbmVudHMvQ2FydEJ1dHRvbkVhc2x5LnZ1ZT9mZWY2Iiwid2VicGFjazovL3NyYy8uL3NyYy9jb21wb25lbnRzL0NhcnRCdXR0b25FYXNseS52dWUiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL2NvbXBvbmVudHMvR29vZEl0ZW0udnVlPzA2YzkiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL2NvbXBvbmVudHMvR29vZEl0ZW0udnVlIiwid2VicGFjazovL3NyYy8uL3NyYy9zZWN0aW9ucy9jb25maWd1cmF0b3IvZmlyc3Qtc2VjdGlvbi52dWU/NzhiOCIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvc2VjdGlvbnMvY29uZmlndXJhdG9yL2ZpcnN0LXNlY3Rpb24udnVlIiwid2VicGFjazovL3NyYy8uL3NyYy92aWV3cy9jb25maWd1cmF0b3IudnVlPzkxNDEiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL3ZpZXdzL2NvbmZpZ3VyYXRvci52dWUiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL2NvbXBvbmVudHMvQ2FydEJ1dHRvbkVhc2x5LnZ1ZT82OGFiIiwid2VicGFjazovL3NyYy8uL3NyYy9jb21wb25lbnRzL0dvb2RJdGVtLnZ1ZT8xMmMzIiwid2VicGFjazovL3NyYy8uL3NyYy9zZWN0aW9ucy9jb25maWd1cmF0b3IvZmlyc3Qtc2VjdGlvbi52dWU/ZWZiOCIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvdmlld3MvY29uZmlndXJhdG9yLnZ1ZT83ZDVmIiwid2VicGFjazovL3NyYy8uL3NyYy9hcGkvQXBwL2dldFBhZ2VTZXR0aW5ncy50cyIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvYXBpL0thdGFsb2cvZ2V0Q2F0ZWdvcmllcy50cyIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvaG9va3MvQXBwL3VzZUxvYWQudHMiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL2hvb2tzL0FwcC91c2VQYWdlU2V0dGluZ3MudHMiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL2NvbXBvbmVudHMvQ2FydEJ1dHRvbkVhc2x5LnZ1ZT9mNTY4Iiwid2VicGFjazovL3NyYy8uL3NyYy9jb21wb25lbnRzL0dvb2RJdGVtLnZ1ZT9jMGNmIiwid2VicGFjazovL3NyYy8uL3NyYy9zZWN0aW9ucy9jb25maWd1cmF0b3IvZmlyc3Qtc2VjdGlvbi52dWU/ZmUwYyIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvdmlld3MvY29uZmlndXJhdG9yLnZ1ZT8zYWRjIiwid2VicGFjazovL3NyYy8uL3NyYy9jb21wb25lbnRzL0NhcnRCdXR0b25FYXNseS52dWU/MDcwOCIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvY29tcG9uZW50cy9Hb29kSXRlbS52dWU/NTY4NyIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvc2VjdGlvbnMvY29uZmlndXJhdG9yL2ZpcnN0LXNlY3Rpb24udnVlP2JhMzMiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL3ZpZXdzL2NvbmZpZ3VyYXRvci52dWU/NDMwZCIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvY29tcG9uZW50cy9Hb29kSXRlbS52dWU/MTFjZiIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvc2VjdGlvbnMvY29uZmlndXJhdG9yL2ZpcnN0LXNlY3Rpb24udnVlPzM2YWIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5nb29kLWl0ZW1bZGF0YS12LTFmZGU5Y2MwXSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMzBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDE3cHggMzRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4MTgxODtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmdvb2QtaXRlbV9faW1hZ2VbZGF0YS12LTFmZGU5Y2MwXSB7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogOTAlO1xuICBvYmplY3QtZml0OiBjb250YWluO1xufVxuLmdvb2QtaXRlbV9faW1hZ2UtYm94W2RhdGEtdi0xZmRlOWNjMF0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDEzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmdvb2QtaXRlbS1jb250ZW50W2RhdGEtdi0xZmRlOWNjMF0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMzBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZ29vZC1pdGVtLWNvbnRlbnRfX2Rlc2NyaXB0aW9uW2RhdGEtdi0xZmRlOWNjMF0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEwcHg7XG59XG4uZ29vZC1pdGVtLWNvbnRlbnRfX3RpdGxlW2RhdGEtdi0xZmRlOWNjMF0ge1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uZ29vZC1pdGVtLWNvbnRlbnRfX3NwZWMtYnV0dG9uW2RhdGEtdi0xZmRlOWNjMF0ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xufVxuLmdvb2QtaXRlbS1jb250ZW50X19zcGVjLWJ1dHRvbltkYXRhLXYtMWZkZTljYzBdOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4uZ29vZC1pdGVtLWNvbnRlbnRfX3F1YW50aXR5LWJveFtkYXRhLXYtMWZkZTljYzBdIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxM3B4O1xufVxuLmdvb2QtaXRlbS1jb250ZW50X19zdW1bZGF0YS12LTFmZGU5Y2MwXSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9Hb29kSXRlbS52dWVcIixcIndlYnBhY2s6Ly8uL0dvb2RJdGVtLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDQUo7QURFSTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNBUjtBREdJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUNEUjtBREtBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFFQSxTQUFBO0VBRUEsV0FBQTtBQ0pKO0FETUk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FDSlI7QURPSTtFQUNJLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FDTFI7QURVSTtFQUNJLGVBQUE7RUFFQSxnQ0FBQTtBQ1RSO0FEVVE7RUFDSSwwQkFBQTtBQ1JaO0FEYUk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUNYUjtBRGNJO0VBQ0ksZ0JBQUE7QUNaUlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG4uZ29vZC1pdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAzMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMTdweCAzNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxODE4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuXFxuICAgICZfX2ltYWdlIHtcXG4gICAgICAgIHdpZHRoOiA5MCU7XFxuICAgICAgICBoZWlnaHQ6IDkwJTtcXG4gICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XFxuICAgIH1cXG5cXG4gICAgJl9faW1hZ2UtYm94IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICB3aWR0aDogMjAwcHg7XFxuICAgICAgICBoZWlnaHQ6IDEzMHB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIH1cXG59XFxuXFxuLmdvb2QtaXRlbS1jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcbiAgICBnYXA6IDMwcHg7XFxuXFxuICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICAmX19kZXNjcmlwdGlvbiB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGdhcDogMTBweDtcXG4gICAgfVxcblxcbiAgICAmX190aXRsZSB7XFxuICAgICAgICBmb250LXNpemU6IDE4cHg7XFxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgfVxcblxcbiAgICAmX19wcmljZSB7fVxcblxcbiAgICAmX19zcGVjLWJ1dHRvbiB7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0O1xcbiAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG5cXG4gICAgJl9fcXVhbnRpdHktYm94IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGdhcDogMTNweDtcXG4gICAgfVxcblxcbiAgICAmX19zdW0ge1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgfVxcbn1cXG5cIixcIi5nb29kLWl0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDMwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDE3cHggMzRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODE4MTg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbi5nb29kLWl0ZW1fX2ltYWdlIHtcXG4gIHdpZHRoOiA5MCU7XFxuICBoZWlnaHQ6IDkwJTtcXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XFxufVxcbi5nb29kLWl0ZW1fX2ltYWdlLWJveCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgaGVpZ2h0OiAxMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uZ29vZC1pdGVtLWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IDMwcHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLmdvb2QtaXRlbS1jb250ZW50X19kZXNjcmlwdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG59XFxuLmdvb2QtaXRlbS1jb250ZW50X190aXRsZSB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuLmdvb2QtaXRlbS1jb250ZW50X19zcGVjLWJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG59XFxuLmdvb2QtaXRlbS1jb250ZW50X19zcGVjLWJ1dHRvbjpob3ZlciB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuLmdvb2QtaXRlbS1jb250ZW50X19xdWFudGl0eS1ib3gge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxM3B4O1xcbn1cXG4uZ29vZC1pdGVtLWNvbnRlbnRfX3N1bSB7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5maXJzdC1zZWN0aW9uW2RhdGEtdi0yNmNhYWZiNF0ge1xuICBwYWRkaW5nOiAxMjBweCAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOSwgMTksIDE5KTtcbn1cbi5maXJzdC1zZWN0aW9uX190aXRsZVtkYXRhLXYtMjZjYWFmYjRdIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiA4MHB4O1xufVxuLmZpcnN0LXNlY3Rpb24tc2xpZGVyW2RhdGEtdi0yNmNhYWZiNF0ge1xuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xufVxuLnN3aXBlci1jb250YWluZXJbZGF0YS12LTI2Y2FhZmI0XSB7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cbi5maXJzdC1zZWN0aW9uLXdyYXBwZXJbZGF0YS12LTI2Y2FhZmI0XSB7XG4gIHBhZGRpbmctdG9wOiAxMDBweDtcbn1cbi5zd2lwZXItc2xpZGVbZGF0YS12LTI2Y2FhZmI0XSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbiAgZ2FwOiAxNXB4O1xuICB3aWR0aDogMjUwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNCwgMjQsIDI0KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAxNXB4O1xufVxuLnN3aXBlci1zbGlkZSBpbWdbZGF0YS12LTI2Y2FhZmI0XSB7XG4gIGhlaWdodDogODBweDtcbiAgd2lkdGg6IDgwcHg7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG4uc3dpcGVyLXNsaWRlIHBbZGF0YS12LTI2Y2FhZmI0XSB7XG4gIGhlaWdodDogNDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmZpcnN0LXNlY3Rpb24tcHJvZHVjdHMtY29udGFpbmVyW2RhdGEtdi0yNmNhYWZiNF0ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDVmciAyZnI7XG4gIGdhcDogNDBweDtcbn1cbi5maXJzdC1zZWN0aW9uLWdvb2RzW2RhdGEtdi0yNmNhYWZiNF0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEwcHg7XG59XG4uZmlyc3Qtc2VjdGlvbi1maWx0ZXJzW2RhdGEtdi0yNmNhYWZiNF0ge1xuICBwYWRkaW5nOiAxNXB4IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNCwgMjQsIDI0KTtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDZweDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zZWN0aW9ucy9jb25maWd1cmF0b3IvZmlyc3Qtc2VjdGlvbi52dWVcIixcIndlYnBhY2s6Ly8uL2ZpcnN0LXNlY3Rpb24udnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0VBQ0ksa0JBQUE7RUFDQSxpQ0FBQTtBQ0ZKO0FESUk7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FDRlI7QURNQTtFQUNJLG1CQUFBO0FDSEo7QURNQTtFQUVJLGtCQUFBO0FDSko7QURRQTtFQUNJLGtCQUFBO0FDTEo7QURjQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNYSjtBRGFJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ1hSO0FEY0k7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUNaUjtBRGdCQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFNBQUE7QUNiSjtBRGdCQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUNiSjtBRGdCQTtFQUNJLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFFBQUE7QUNiSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG4uZmlyc3Qtc2VjdGlvbi1jb250YWluZXIge31cXG5cXG4uZmlyc3Qtc2VjdGlvbiB7XFxuICAgIHBhZGRpbmc6IDEyMHB4IDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5LCAxOSwgMTkpO1xcblxcbiAgICAmX190aXRsZSB7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiA4MHB4O1xcbiAgICB9XFxufVxcblxcbi5maXJzdC1zZWN0aW9uLXNsaWRlciB7XFxuICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XFxufVxcblxcbi5zd2lwZXItY29udGFpbmVyIHtcXG5cXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG5cXG4uZmlyc3Qtc2VjdGlvbi13cmFwcGVyIHtcXG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xcbn1cXG5cXG4uc3dpcGVyLXdyYXBwZXIge1xcbiAgICAvLyBkaXNwbGF5OiBmbGV4O1xcbiAgICAvLyBnYXA6IDMwcHg7XFxuICAgIC8vIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uc3dpcGVyLXNsaWRlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0LCAyNCwgMjQpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuXFxuICAgIGltZyB7XFxuICAgICAgICBoZWlnaHQ6IDgwcHg7XFxuICAgICAgICB3aWR0aDogODBweDtcXG4gICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XFxuICAgIH1cXG5cXG4gICAgcCB7XFxuICAgICAgICBoZWlnaHQ6IDQwcHg7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG59XFxuXFxuLmZpcnN0LXNlY3Rpb24tcHJvZHVjdHMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1ZnIgMmZyO1xcbiAgICBnYXA6IDQwcHg7XFxufVxcblxcbi5maXJzdC1zZWN0aW9uLWdvb2RzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uZmlyc3Qtc2VjdGlvbi1maWx0ZXJzIHtcXG4gICAgcGFkZGluZzogMTVweCAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQsIDI0LCAyNCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA2cHg7XFxufVxcblwiLFwiLmZpcnN0LXNlY3Rpb24ge1xcbiAgcGFkZGluZzogMTIwcHggMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5LCAxOSwgMTkpO1xcbn1cXG4uZmlyc3Qtc2VjdGlvbl9fdGl0bGUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogODBweDtcXG59XFxuXFxuLmZpcnN0LXNlY3Rpb24tc2xpZGVyIHtcXG4gIG1hcmdpbi1ib3R0b206IDYwcHg7XFxufVxcblxcbi5zd2lwZXItY29udGFpbmVyIHtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuLmZpcnN0LXNlY3Rpb24td3JhcHBlciB7XFxuICBwYWRkaW5nLXRvcDogMTAwcHg7XFxufVxcblxcbi5zd2lwZXItc2xpZGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBnYXA6IDE1cHg7XFxuICB3aWR0aDogMjUwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0LCAyNCwgMjQpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogMTVweDtcXG59XFxuLnN3aXBlci1zbGlkZSBpbWcge1xcbiAgaGVpZ2h0OiA4MHB4O1xcbiAgd2lkdGg6IDgwcHg7XFxuICBvYmplY3QtZml0OiBjb250YWluO1xcbn1cXG4uc3dpcGVyLXNsaWRlIHAge1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZmlyc3Qtc2VjdGlvbi1wcm9kdWN0cy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNWZyIDJmcjtcXG4gIGdhcDogNDBweDtcXG59XFxuXFxuLmZpcnN0LXNlY3Rpb24tZ29vZHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5maXJzdC1zZWN0aW9uLWZpbHRlcnMge1xcbiAgcGFkZGluZzogMTVweCAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0LCAyNCwgMjQpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDZweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsImltcG9ydCB7IGRlZmluZUNvbXBvbmVudCBhcyBfZGVmaW5lQ29tcG9uZW50IH0gZnJvbSAndnVlJ1xuaW1wb3J0IHsgdXNlQXBwU2V0dGluZ3MgfSBmcm9tICdAL2hvb2tzL0FwcC91c2VBcHBTZXR0aW5ncyc7XG5pbXBvcnQgeyB1c2VQYWdlU2V0dGluZ3MgfSBmcm9tICdAL2hvb2tzL0FwcC91c2VQYWdlU2V0dGluZ3MnO1xuaW1wb3J0IHsgdXNlVnVleCB9IGZyb20gJ0Avc3RvcmUvdXNlVnVleCc7XG5pbXBvcnQgeyBJUHJvZHVjdCB9IGZyb20gJ0AvdHlwZXMvUHJvZHVjdCc7XG5pbXBvcnQgZGVlcEVxdWFsIGZyb20gJ2RlZXAtZXF1YWwnO1xuaW1wb3J0IHsgY29tcHV0ZWQsIHRvUmVmcyB9IGZyb20gJ3Z1ZSc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gICAgcHJvZHVjdDogSVByb2R1Y3RcbiAgICBhZGRpbmdGaWVsZDogb2JqZWN0IHwgbnVsbFxufVxuXG5pbnRlcmZhY2UgRW1pdHMge1xuICAgIChlOiAndXBkYXRlOmFkZGluZ0ZpZWxkJywgdmFsdWU6IG9iamVjdCB8IG51bGwpOiB2b2lkXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgLyojX19QVVJFX18qL19kZWZpbmVDb21wb25lbnQoe1xuICBfX25hbWU6ICdDYXJ0QnV0dG9uRWFzbHknLFxuICBwcm9wczoge1xuICAgIHByb2R1Y3Q6IHsgdHlwZTogT2JqZWN0LCByZXF1aXJlZDogdHJ1ZSB9LFxuICAgIGFkZGluZ0ZpZWxkOiB7IHR5cGU6IFtPYmplY3QsIG51bGxdLCByZXF1aXJlZDogdHJ1ZSB9XG4gIH0sXG4gIGVtaXRzOiBbXCJ1cGRhdGU6YWRkaW5nRmllbGRcIl0sXG4gIHNldHVwKF9fcHJvcHM6IGFueSwgeyBleHBvc2U6IF9fZXhwb3NlLCBlbWl0OiBfX2VtaXQgfSkge1xuICBfX2V4cG9zZSgpO1xuXG5jb25zdCBwcm9wcyA9IF9fcHJvcHNcblxuY29uc3QgeyBhZGRpbmdGaWVsZCwgcHJvZHVjdCB9ID0gdG9SZWZzKHByb3BzKVxuXG5jb25zdCBlbWl0ID0gX19lbWl0XG5cbmNvbnN0IHByb2R1Y3RJbkFkZGluZ0ZpZWxkID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIHJldHVybiBkZWVwRXF1YWwoYWRkaW5nRmllbGQudmFsdWUsIHByb2R1Y3QudmFsdWUpXG59KVxuXG5cbmNvbnN0IG9uQ2xpY2sgPSAoKSA9PiB7XG4gICAgaWYocHJvZHVjdEluQWRkaW5nRmllbGQudmFsdWUpe1xuICAgICAgICByZXR1cm4gZW1pdCgndXBkYXRlOmFkZGluZ0ZpZWxkJywgbnVsbClcbiAgICB9XG5cbiAgICBlbWl0KCd1cGRhdGU6YWRkaW5nRmllbGQnLCBwcm9kdWN0LnZhbHVlKVxufVxuXG5cblxuY29uc3Qgc3RvcmUgPSB1c2VWdWV4KClcblxuY29uc3QgeyBwYWdlIH0gPSB1c2VQYWdlU2V0dGluZ3Moc3RvcmUpXG5cbmNvbnN0IHsgYXBwIH0gPSB1c2VBcHBTZXR0aW5ncyhzdG9yZSlcblxuXG5cbmNvbnN0IF9fcmV0dXJuZWRfXyA9IHsgcHJvcHMsIGFkZGluZ0ZpZWxkLCBwcm9kdWN0LCBlbWl0LCBwcm9kdWN0SW5BZGRpbmdGaWVsZCwgb25DbGljaywgc3RvcmUsIHBhZ2UsIGFwcCB9XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoX19yZXR1cm5lZF9fLCAnX19pc1NjcmlwdFNldHVwJywgeyBlbnVtZXJhYmxlOiBmYWxzZSwgdmFsdWU6IHRydWUgfSlcbnJldHVybiBfX3JldHVybmVkX19cbn1cblxufSkiLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImNhcnQtYnV0dG9uXCI+XG4gICAgICAgIDxidXR0b24gQGNsaWNrPVwib25DbGlja1wiIGNsYXNzPVwiYnV0dG9uIGNhcnQtYnV0dG9uX19idXR0b25cIj57eyBwcm9kdWN0SW5BZGRpbmdGaWVsZCA/ICfQo9Cx0YDQsNGC0YwnIDogJ9CU0L7QsdCw0LLQuNGC0YwnIH19PC9idXR0b24+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgdXNlQXBwU2V0dGluZ3MgfSBmcm9tICdAL2hvb2tzL0FwcC91c2VBcHBTZXR0aW5ncyc7XG5pbXBvcnQgeyB1c2VQYWdlU2V0dGluZ3MgfSBmcm9tICdAL2hvb2tzL0FwcC91c2VQYWdlU2V0dGluZ3MnO1xuaW1wb3J0IHsgdXNlVnVleCB9IGZyb20gJ0Avc3RvcmUvdXNlVnVleCc7XG5pbXBvcnQgeyBJUHJvZHVjdCB9IGZyb20gJ0AvdHlwZXMvUHJvZHVjdCc7XG5pbXBvcnQgZGVlcEVxdWFsIGZyb20gJ2RlZXAtZXF1YWwnO1xuaW1wb3J0IHsgY29tcHV0ZWQsIHRvUmVmcyB9IGZyb20gJ3Z1ZSc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gICAgcHJvZHVjdDogSVByb2R1Y3RcbiAgICBhZGRpbmdGaWVsZDogb2JqZWN0IHwgbnVsbFxufVxuXG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzPFByb3BzPigpXG5cbmNvbnN0IHsgYWRkaW5nRmllbGQsIHByb2R1Y3QgfSA9IHRvUmVmcyhwcm9wcylcblxuaW50ZXJmYWNlIEVtaXRzIHtcbiAgICAoZTogJ3VwZGF0ZTphZGRpbmdGaWVsZCcsIHZhbHVlOiBvYmplY3QgfCBudWxsKTogdm9pZFxufVxuXG5jb25zdCBlbWl0ID0gZGVmaW5lRW1pdHM8RW1pdHM+KClcblxuY29uc3QgcHJvZHVjdEluQWRkaW5nRmllbGQgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgcmV0dXJuIGRlZXBFcXVhbChhZGRpbmdGaWVsZC52YWx1ZSwgcHJvZHVjdC52YWx1ZSlcbn0pXG5cblxuY29uc3Qgb25DbGljayA9ICgpID0+IHtcbiAgICBpZihwcm9kdWN0SW5BZGRpbmdGaWVsZC52YWx1ZSl7XG4gICAgICAgIHJldHVybiBlbWl0KCd1cGRhdGU6YWRkaW5nRmllbGQnLCBudWxsKVxuICAgIH1cblxuICAgIGVtaXQoJ3VwZGF0ZTphZGRpbmdGaWVsZCcsIHByb2R1Y3QudmFsdWUpXG59XG5cblxuXG5jb25zdCBzdG9yZSA9IHVzZVZ1ZXgoKVxuXG5jb25zdCB7IHBhZ2UgfSA9IHVzZVBhZ2VTZXR0aW5ncyhzdG9yZSlcblxuY29uc3QgeyBhcHAgfSA9IHVzZUFwcFNldHRpbmdzKHN0b3JlKVxuXG5cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+PC9zdHlsZT4iLCJpbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgYXMgX2RlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSdcbmltcG9ydCB7IHVzZUFwcFNldHRpbmdzIH0gZnJvbSAnQC9ob29rcy9BcHAvdXNlQXBwU2V0dGluZ3MnO1xuaW1wb3J0IHsgdXNlVnVleCB9IGZyb20gJ0Avc3RvcmUvdXNlVnVleCc7XG5pbXBvcnQgeyBJR3JvdXBwZWRQcm9kdWN0LCBJUHJvZHVjdCB9IGZyb20gJ0AvdHlwZXMvUHJvZHVjdCc7XG5pbXBvcnQgeyB0b1JlZnMsIHdhdGNoIH0gZnJvbSAndnVlJztcbmltcG9ydCBDYXJ0QnV0dG9uRWFzbHkgZnJvbSAnLi9DYXJ0QnV0dG9uRWFzbHkudnVlJztcbmltcG9ydCB7IHVzZVNwZWNEaWFsb2cgfSBmcm9tICdAL2hvb2tzL0FwcC91c2VTcGVjRGlhbG9nJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgICBwcm9kdWN0OiBJUHJvZHVjdFxuICAgIGFkZGluZ0ZpZWxkOiBvYmplY3QgfCBudWxsXG59XG5pbnRlcmZhY2UgRW1pdHMge1xuICAgIChlOiAndXBkYXRlOmFkZGluZ0ZpZWxkJywgdmFsdWU6IG9iamVjdCk6IHZvaWRcbn1cblxuXG5leHBvcnQgZGVmYXVsdCAvKiNfX1BVUkVfXyovX2RlZmluZUNvbXBvbmVudCh7XG4gIF9fbmFtZTogJ0dvb2RJdGVtJyxcbiAgcHJvcHM6IHtcbiAgICBwcm9kdWN0OiB7IHR5cGU6IE9iamVjdCwgcmVxdWlyZWQ6IHRydWUgfSxcbiAgICBhZGRpbmdGaWVsZDogeyB0eXBlOiBbT2JqZWN0LCBudWxsXSwgcmVxdWlyZWQ6IHRydWUgfVxuICB9LFxuICBlbWl0czogW1widXBkYXRlOmFkZGluZ0ZpZWxkXCJdLFxuICBzZXR1cChfX3Byb3BzOiBhbnksIHsgZXhwb3NlOiBfX2V4cG9zZSwgZW1pdDogX19lbWl0IH0pIHtcbiAgX19leHBvc2UoKTtcblxuY29uc3QgcHJvcHMgPSBfX3Byb3BzXG5cbmNvbnN0IHsgYWRkaW5nRmllbGQsIHByb2R1Y3QgfSA9IHRvUmVmcyhwcm9wcylcblxuY29uc3QgZW1pdCA9IF9fZW1pdFxuXG5sZXQgc3RvcmUgPSB1c2VWdWV4KCk7XG5cbmNvbnN0IHsgc3BlY0RpYWxvZyB9ID0gdXNlU3BlY0RpYWxvZyhzdG9yZSlcblxuY29uc3Qgb25DbGljayA9ICgpID0+IHtcbiAgICBzcGVjRGlhbG9nLnZhbHVlLm9wZW4ocHJvZHVjdC52YWx1ZSlcbn1cblxuXG5jb25zdCB7IGFwcCB9ID0gdXNlQXBwU2V0dGluZ3Moc3RvcmUpXG5cblxuY29uc3QgX19yZXR1cm5lZF9fID0geyBwcm9wcywgYWRkaW5nRmllbGQsIHByb2R1Y3QsIGVtaXQsIGdldCBzdG9yZSgpIHsgcmV0dXJuIHN0b3JlIH0sIHNldCBzdG9yZSh2KSB7IHN0b3JlID0gdiB9LCBzcGVjRGlhbG9nLCBvbkNsaWNrLCBhcHAsIENhcnRCdXR0b25FYXNseSB9XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoX19yZXR1cm5lZF9fLCAnX19pc1NjcmlwdFNldHVwJywgeyBlbnVtZXJhYmxlOiBmYWxzZSwgdmFsdWU6IHRydWUgfSlcbnJldHVybiBfX3JldHVybmVkX19cbn1cblxufSkiLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImdvb2QtaXRlbVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ29vZC1pdGVtX19pbWFnZS1ib3hcIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJnb29kLWl0ZW1fX2ltYWdlXCIgOnNyYz1cInByb2R1Y3QuaW1hZ2VzWzBdLnNyY1wiIDphbHQ9XCJwcm9kdWN0Lm5hbWVcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJnb29kLWl0ZW0tY29udGVudFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdvb2QtaXRlbS1jb250ZW50X19kZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZ29vZC1pdGVtLWNvbnRlbnRfX3RpdGxlXCI+e3sgcHJvZHVjdC5uYW1lIH19PC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZ29vZC1pdGVtLWNvbnRlbnRfX3ByaWNlXCI+e3sgcHJvZHVjdC5wcmljZSB9fSDRgNGD0LEgLyDRiNGCPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ29vZC1pdGVtLWNvbnRlbnRfX3F1YW50aXR5LWJveFwiPlxuICAgICAgICAgICAgICAgIDxDYXJ0QnV0dG9uRWFzbHkgOnByb2R1Y3Q9XCJwcm9kdWN0XCIgOmFkZGluZy1maWVsZD1cImFkZGluZ0ZpZWxkXCJcbiAgICAgICAgICAgICAgICAgICAgQHVwZGF0ZTphZGRpbmctZmllbGQ9XCJlbWl0KCd1cGRhdGU6YWRkaW5nRmllbGQnLCAkZXZlbnQpXCIgLz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImdvb2QtaXRlbS1jb250ZW50X19zcGVjLWJ1dHRvblwiIEBjbGljaz1cIm9uQ2xpY2tcIj7Qn9C+0LTRgNC+0LHQvdC10LU8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgdXNlQXBwU2V0dGluZ3MgfSBmcm9tICdAL2hvb2tzL0FwcC91c2VBcHBTZXR0aW5ncyc7XG5pbXBvcnQgeyB1c2VWdWV4IH0gZnJvbSAnQC9zdG9yZS91c2VWdWV4JztcbmltcG9ydCB7IElHcm91cHBlZFByb2R1Y3QsIElQcm9kdWN0IH0gZnJvbSAnQC90eXBlcy9Qcm9kdWN0JztcbmltcG9ydCB7IHRvUmVmcywgd2F0Y2ggfSBmcm9tICd2dWUnO1xuaW1wb3J0IENhcnRCdXR0b25FYXNseSBmcm9tICcuL0NhcnRCdXR0b25FYXNseS52dWUnO1xuaW1wb3J0IHsgdXNlU3BlY0RpYWxvZyB9IGZyb20gJ0AvaG9va3MvQXBwL3VzZVNwZWNEaWFsb2cnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICAgIHByb2R1Y3Q6IElQcm9kdWN0XG4gICAgYWRkaW5nRmllbGQ6IG9iamVjdCB8IG51bGxcbn1cbmNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHM8UHJvcHM+KClcblxuY29uc3QgeyBhZGRpbmdGaWVsZCwgcHJvZHVjdCB9ID0gdG9SZWZzKHByb3BzKVxuXG5pbnRlcmZhY2UgRW1pdHMge1xuICAgIChlOiAndXBkYXRlOmFkZGluZ0ZpZWxkJywgdmFsdWU6IG9iamVjdCk6IHZvaWRcbn1cblxuY29uc3QgZW1pdCA9IGRlZmluZUVtaXRzPEVtaXRzPigpXG5cbmxldCBzdG9yZSA9IHVzZVZ1ZXgoKTtcblxuY29uc3QgeyBzcGVjRGlhbG9nIH0gPSB1c2VTcGVjRGlhbG9nKHN0b3JlKVxuXG5jb25zdCBvbkNsaWNrID0gKCkgPT4ge1xuICAgIHNwZWNEaWFsb2cudmFsdWUub3Blbihwcm9kdWN0LnZhbHVlKVxufVxuXG5cbmNvbnN0IHsgYXBwIH0gPSB1c2VBcHBTZXR0aW5ncyhzdG9yZSlcblxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cbi5nb29kLWl0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDMwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTdweCAzNHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxODE4MTg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuXG4gICAgJl9faW1hZ2Uge1xuICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICBoZWlnaHQ6IDkwJTtcbiAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICB9XG5cbiAgICAmX19pbWFnZS1ib3gge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICBoZWlnaHQ6IDEzMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIH1cbn1cblxuLmdvb2QtaXRlbS1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgZ2FwOiAzMHB4O1xuXG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICAmX19kZXNjcmlwdGlvbiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGdhcDogMTBweDtcbiAgICB9XG5cbiAgICAmX190aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9XG5cbiAgICAmX19wcmljZSB7fVxuXG4gICAgJl9fc3BlYy1idXR0b24ge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluLW91dDtcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgJl9fcXVhbnRpdHktYm94IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiAxM3B4O1xuICAgIH1cblxuICAgICZfX3N1bSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgfVxufVxuPC9zdHlsZT4iLCJpbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgYXMgX2RlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSdcbmltcG9ydCB7IFJlZiwgY29tcHV0ZWQsIG9uTW91bnRlZCwgcmVmLCB3YXRjaCB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgV09PIGZyb20gJ0AvYXhpb3NXb29jb21lcmNlJ1xuaW1wb3J0IHsgSVByb2R1Y3QsIElQcm9kdWN0Q2F0ZWdvcnlSZXNwb25zZSB9IGZyb20gJ0AvdHlwZXMvUHJvZHVjdCc7XG5cbmltcG9ydCBTd2lwZXIgZnJvbSAnc3dpcGVyJztcbmltcG9ydCAnc3dpcGVyL2Nzcyc7XG5pbXBvcnQgR29vZEl0ZW0gZnJvbSAnQC9jb21wb25lbnRzL0dvb2RJdGVtLnZ1ZSc7XG5pbXBvcnQgQ3VzdG9tU2VsZWN0IGZyb20gJ0AvY29tcG9uZW50cy9DdXN0b21TZWxlY3QudnVlJztcbmltcG9ydCB7IHVzZVN3aXBlciB9IGZyb20gJ0AvaG9va3MvTGlicy91c2VTd2lwZXInXG5pbXBvcnQgeyBnZXRDYXRlZ29yaWVzIH0gZnJvbSAnQC9hcGkvS2F0YWxvZy9nZXRDYXRlZ29yaWVzJztcblxuaW50ZXJmYWNlIElDb25maWd1cmVQcm9kdWN0IHtcbiAgICBjcHU6IG9iamVjdCB8IG51bGw7XG4gICAgZ3B1OiBvYmplY3QgfCBudWxsO1xuICAgIHJhbTogb2JqZWN0IHwgbnVsbDtcbiAgICBtb3RoZXJib2FyZDogb2JqZWN0IHwgbnVsbDtcbiAgICBzc2Q6IG9iamVjdCB8IG51bGw7XG4gICAgaGRkOiBvYmplY3QgfCBudWxsO1xuICAgIGNhc2U6IG9iamVjdCB8IG51bGw7XG4gICAgcGI6IG9iamVjdCB8IG51bGw7XG4gICAgcGNfZmFuOiBvYmplY3QgfCBudWxsO1xuICAgIGNwdV9jb29sZXI6IG9iamVjdCB8IG51bGw7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgLyojX19QVVJFX18qL19kZWZpbmVDb21wb25lbnQoe1xuICBfX25hbWU6ICdmaXJzdC1zZWN0aW9uJyxcbiAgc2V0dXAoX19wcm9wcywgeyBleHBvc2U6IF9fZXhwb3NlIH0pIHtcbiAgX19leHBvc2UoKTtcblxuY29uc3QgeyBzd2lwZXIsIHN3aXBlckNvbnRhaW5lciwgaW5pdGlhbGl6ZVN3aXBlciB9ID0gdXNlU3dpcGVyKClcblxuY29uc3QgY2F0ZWdvcmllczogUmVmPEFycmF5PElQcm9kdWN0Q2F0ZWdvcnlSZXNwb25zZT4+ID0gcmVmKFtdKVxuXG5jb25zdCBjaG9vc2VuQ2F0ZWdvcnk6IFJlZjxJUHJvZHVjdENhdGVnb3J5UmVzcG9uc2UgfCBudWxsPiA9IHJlZihudWxsKVxuXG5jb25zdCB1cGRhdGVDaG9vc2VuQ2F0ZWdvcnkgPSAoY2F0ZWdvcnk6IElQcm9kdWN0Q2F0ZWdvcnlSZXNwb25zZSkgPT4ge1xuICAgIGNob29zZW5DYXRlZ29yeS52YWx1ZSA9IGNhdGVnb3J5XG59XG5cblxuY29uc3QgcHJvZHVjdHM6IFJlZjxBcnJheTxJUHJvZHVjdD4+ID0gcmVmKFtdKVxuXG5jb25zdCBnZXRQcm9kdWN0cyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IFdPTy5nZXQoYHByb2R1Y3RzP2NhdGVnb3J5PSR7Y2hvb3NlbkNhdGVnb3J5LnZhbHVlLmlkfWApXG5cbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YVxufVxuXG53YXRjaChjaG9vc2VuQ2F0ZWdvcnksIGFzeW5jICgpID0+IHtcbiAgICBpZiAoY2hvb3NlbkNhdGVnb3J5KSB7XG4gICAgICAgIHByb2R1Y3RzLnZhbHVlID0gYXdhaXQgZ2V0UHJvZHVjdHMoKVxuICAgIH1cbn0sIHsgZGVlcDogdHJ1ZSB9KVxuXG5cbmNvbnN0IENvbmZpZ3VyZVByb2R1Y3Q6IFJlZjxJQ29uZmlndXJlUHJvZHVjdD4gPSByZWYoe1xuICAgIGNwdTogbnVsbCxcbiAgICBncHU6IG51bGwsXG4gICAgcmFtOiBudWxsLFxuICAgIG1vdGhlcmJvYXJkOiBudWxsLFxuICAgIHNzZDogbnVsbCxcbiAgICBoZGQ6IG51bGwsXG4gICAgY2FzZTogbnVsbCxcbiAgICBwYjogbnVsbCxcbiAgICBwY19mYW46IG51bGwsXG4gICAgY3B1X2Nvb2xlcjogbnVsbCxcbn0pXG5cbm9uTW91bnRlZChhc3luYyAoKSA9PiB7XG4gICAgY2F0ZWdvcmllcy52YWx1ZSA9IGF3YWl0IGdldENhdGVnb3JpZXMoe1xuICAgICAgICBwZXJfcGFnZTogMTAwLFxuICAgICAgICBwYXJlbnQ6IDE5LFxuICAgICAgICBvcmRlcjogJ2Rlc2MnLFxuICAgIH0pXG5cbiAgICBjaG9vc2VuQ2F0ZWdvcnkudmFsdWUgPSBjYXRlZ29yaWVzLnZhbHVlWzBdXG5cbiAgICBpbml0aWFsaXplU3dpcGVyKHtcbiAgICAgICAgc2xpZGVzUGVyVmlldzogJ2F1dG8nLFxuICAgICAgICBzcGFjZUJldHdlZW46IDMwLFxuICAgIH0pXG59KVxuXG5cbmNvbnN0IF9fcmV0dXJuZWRfXyA9IHsgc3dpcGVyLCBzd2lwZXJDb250YWluZXIsIGluaXRpYWxpemVTd2lwZXIsIGNhdGVnb3JpZXMsIGNob29zZW5DYXRlZ29yeSwgdXBkYXRlQ2hvb3NlbkNhdGVnb3J5LCBwcm9kdWN0cywgZ2V0UHJvZHVjdHMsIENvbmZpZ3VyZVByb2R1Y3QsIEdvb2RJdGVtIH1cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShfX3JldHVybmVkX18sICdfX2lzU2NyaXB0U2V0dXAnLCB7IGVudW1lcmFibGU6IGZhbHNlLCB2YWx1ZTogdHJ1ZSB9KVxucmV0dXJuIF9fcmV0dXJuZWRfX1xufVxuXG59KSIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwiZmlyc3Qtc2VjdGlvbi13cmFwcGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmaXJzdC1zZWN0aW9uXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlyc3Qtc2VjdGlvbi1jb250YWluZXIgY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzPVwiZmlyc3Qtc2VjdGlvbl9fdGl0bGUgdGl0bGVcIj7QmtC+0L3RhNC40LPRg9GA0LDRgtC+0YA8L2gxPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaXJzdC1zZWN0aW9uLXNsaWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHJlZj1cInN3aXBlckNvbnRhaW5lclwiIGNsYXNzPVwic3dpcGVyLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN3aXBlci13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBAY2xpY2s9XCJ1cGRhdGVDaG9vc2VuQ2F0ZWdvcnkoY2F0ZWdvcnkpXCIgdi1mb3I9XCJjYXRlZ29yeSBpbiBjYXRlZ29yaWVzXCIgOmtleT1cImNhdGVnb3J5LmlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJzd2lwZXItc2xpZGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyB2LWlmPVwiY2F0ZWdvcnkuaW1hZ2VcIiA6c3JjPVwiY2F0ZWdvcnkuaW1hZ2Uuc3JjXCIgOmFsdD1cImNhdGVnb3J5LmltYWdlLm5hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3sgY2F0ZWdvcnkubmFtZSB9fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlyc3Qtc2VjdGlvbi1wcm9kdWN0cy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpcnN0LXNlY3Rpb24tZ29vZHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHb29kSXRlbSB2LWZvcj1cInByb2R1Y3QgaW4gcHJvZHVjdHNcIiA6a2V5PVwicHJvZHVjdC5pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbDphZGRpbmctZmllbGQ9XCJDb25maWd1cmVQcm9kdWN0W2Nob29zZW5DYXRlZ29yeS5zbHVnXVwiIDpwcm9kdWN0PVwicHJvZHVjdFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlyc3Qtc2VjdGlvbi1maWx0ZXJzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIDxDdXN0b21TZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLz4gLS0+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IFJlZiwgY29tcHV0ZWQsIG9uTW91bnRlZCwgcmVmLCB3YXRjaCB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgV09PIGZyb20gJ0AvYXhpb3NXb29jb21lcmNlJ1xuaW1wb3J0IHsgSVByb2R1Y3QsIElQcm9kdWN0Q2F0ZWdvcnlSZXNwb25zZSB9IGZyb20gJ0AvdHlwZXMvUHJvZHVjdCc7XG5cbmltcG9ydCBTd2lwZXIgZnJvbSAnc3dpcGVyJztcbmltcG9ydCAnc3dpcGVyL2Nzcyc7XG5pbXBvcnQgR29vZEl0ZW0gZnJvbSAnQC9jb21wb25lbnRzL0dvb2RJdGVtLnZ1ZSc7XG5pbXBvcnQgQ3VzdG9tU2VsZWN0IGZyb20gJ0AvY29tcG9uZW50cy9DdXN0b21TZWxlY3QudnVlJztcbmltcG9ydCB7IHVzZVN3aXBlciB9IGZyb20gJ0AvaG9va3MvTGlicy91c2VTd2lwZXInXG5pbXBvcnQgeyBnZXRDYXRlZ29yaWVzIH0gZnJvbSAnQC9hcGkvS2F0YWxvZy9nZXRDYXRlZ29yaWVzJztcblxuY29uc3QgeyBzd2lwZXIsIHN3aXBlckNvbnRhaW5lciwgaW5pdGlhbGl6ZVN3aXBlciB9ID0gdXNlU3dpcGVyKClcblxuY29uc3QgY2F0ZWdvcmllczogUmVmPEFycmF5PElQcm9kdWN0Q2F0ZWdvcnlSZXNwb25zZT4+ID0gcmVmKFtdKVxuXG5jb25zdCBjaG9vc2VuQ2F0ZWdvcnk6IFJlZjxJUHJvZHVjdENhdGVnb3J5UmVzcG9uc2UgfCBudWxsPiA9IHJlZihudWxsKVxuXG5jb25zdCB1cGRhdGVDaG9vc2VuQ2F0ZWdvcnkgPSAoY2F0ZWdvcnk6IElQcm9kdWN0Q2F0ZWdvcnlSZXNwb25zZSkgPT4ge1xuICAgIGNob29zZW5DYXRlZ29yeS52YWx1ZSA9IGNhdGVnb3J5XG59XG5cblxuY29uc3QgcHJvZHVjdHM6IFJlZjxBcnJheTxJUHJvZHVjdD4+ID0gcmVmKFtdKVxuXG5jb25zdCBnZXRQcm9kdWN0cyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IFdPTy5nZXQoYHByb2R1Y3RzP2NhdGVnb3J5PSR7Y2hvb3NlbkNhdGVnb3J5LnZhbHVlLmlkfWApXG5cbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YVxufVxuXG53YXRjaChjaG9vc2VuQ2F0ZWdvcnksIGFzeW5jICgpID0+IHtcbiAgICBpZiAoY2hvb3NlbkNhdGVnb3J5KSB7XG4gICAgICAgIHByb2R1Y3RzLnZhbHVlID0gYXdhaXQgZ2V0UHJvZHVjdHMoKVxuICAgIH1cbn0sIHsgZGVlcDogdHJ1ZSB9KVxuXG5cbmludGVyZmFjZSBJQ29uZmlndXJlUHJvZHVjdCB7XG4gICAgY3B1OiBvYmplY3QgfCBudWxsO1xuICAgIGdwdTogb2JqZWN0IHwgbnVsbDtcbiAgICByYW06IG9iamVjdCB8IG51bGw7XG4gICAgbW90aGVyYm9hcmQ6IG9iamVjdCB8IG51bGw7XG4gICAgc3NkOiBvYmplY3QgfCBudWxsO1xuICAgIGhkZDogb2JqZWN0IHwgbnVsbDtcbiAgICBjYXNlOiBvYmplY3QgfCBudWxsO1xuICAgIHBiOiBvYmplY3QgfCBudWxsO1xuICAgIHBjX2Zhbjogb2JqZWN0IHwgbnVsbDtcbiAgICBjcHVfY29vbGVyOiBvYmplY3QgfCBudWxsO1xufVxuXG5jb25zdCBDb25maWd1cmVQcm9kdWN0OiBSZWY8SUNvbmZpZ3VyZVByb2R1Y3Q+ID0gcmVmKHtcbiAgICBjcHU6IG51bGwsXG4gICAgZ3B1OiBudWxsLFxuICAgIHJhbTogbnVsbCxcbiAgICBtb3RoZXJib2FyZDogbnVsbCxcbiAgICBzc2Q6IG51bGwsXG4gICAgaGRkOiBudWxsLFxuICAgIGNhc2U6IG51bGwsXG4gICAgcGI6IG51bGwsXG4gICAgcGNfZmFuOiBudWxsLFxuICAgIGNwdV9jb29sZXI6IG51bGwsXG59KVxuXG5vbk1vdW50ZWQoYXN5bmMgKCkgPT4ge1xuICAgIGNhdGVnb3JpZXMudmFsdWUgPSBhd2FpdCBnZXRDYXRlZ29yaWVzKHtcbiAgICAgICAgcGVyX3BhZ2U6IDEwMCxcbiAgICAgICAgcGFyZW50OiAxOSxcbiAgICAgICAgb3JkZXI6ICdkZXNjJyxcbiAgICB9KVxuXG4gICAgY2hvb3NlbkNhdGVnb3J5LnZhbHVlID0gY2F0ZWdvcmllcy52YWx1ZVswXVxuXG4gICAgaW5pdGlhbGl6ZVN3aXBlcih7XG4gICAgICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcbiAgICB9KVxufSlcblxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cbi5maXJzdC1zZWN0aW9uLWNvbnRhaW5lciB7fVxuXG4uZmlyc3Qtc2VjdGlvbiB7XG4gICAgcGFkZGluZzogMTIwcHggMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOSwgMTksIDE5KTtcblxuICAgICZfX3RpdGxlIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA4MHB4O1xuICAgIH1cbn1cblxuLmZpcnN0LXNlY3Rpb24tc2xpZGVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xufVxuXG4uc3dpcGVyLWNvbnRhaW5lciB7XG5cbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cblxuLmZpcnN0LXNlY3Rpb24td3JhcHBlciB7XG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xufVxuXG4uc3dpcGVyLXdyYXBwZXIge1xuICAgIC8vIGRpc3BsYXk6IGZsZXg7XG4gICAgLy8gZ2FwOiAzMHB4O1xuICAgIC8vIHdpZHRoOiAxMDAlO1xufVxuXG4uc3dpcGVyLXNsaWRlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGdhcDogMTVweDtcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQsIDI0LCAyNCk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDE1cHg7XG5cbiAgICBpbWcge1xuICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgIH1cblxuICAgIHAge1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG59XG5cbi5maXJzdC1zZWN0aW9uLXByb2R1Y3RzLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDVmciAyZnI7XG4gICAgZ2FwOiA0MHB4O1xufVxuXG4uZmlyc3Qtc2VjdGlvbi1nb29kcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTBweDtcbn1cblxuLmZpcnN0LXNlY3Rpb24tZmlsdGVycyB7XG4gICAgcGFkZGluZzogMTVweCAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNCwgMjQsIDI0KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogNnB4O1xufVxuPC9zdHlsZT4iLCJpbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgYXMgX2RlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSdcbmltcG9ydCBGaXJzdFNlY3Rpb24gZnJvbSAnQC9zZWN0aW9ucy9jb25maWd1cmF0b3IvZmlyc3Qtc2VjdGlvbi52dWUnXG5pbXBvcnQgeyBnZXRQYWdlU2V0dGluZ3MgfSBmcm9tICdAL2FwaS9BcHAvZ2V0UGFnZVNldHRpbmdzJztcbmltcG9ydCB7IHVzZUxvYWQgfSBmcm9tICdAL2hvb2tzL0FwcC91c2VMb2FkJztcbmltcG9ydCB7IHVzZVBhZ2VTZXR0aW5ncyB9IGZyb20gJ0AvaG9va3MvQXBwL3VzZVBhZ2VTZXR0aW5ncyc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnQC9zdG9yZSc7XG5pbXBvcnQgeyBvbk1vdW50ZWQsIHJlZiB9IGZyb20gJ3Z1ZSc7XG5cbmRlY2xhcmUgdmFyIHByZWxvYWRlckNsb3NlOiAoKSA9PiB2b2lkO1xuXG5cbmV4cG9ydCBkZWZhdWx0IC8qI19fUFVSRV9fKi9fZGVmaW5lQ29tcG9uZW50KHtcbiAgX19uYW1lOiAnY29uZmlndXJhdG9yJyxcbiAgc2V0dXAoX19wcm9wcywgeyBleHBvc2U6IF9fZXhwb3NlIH0pIHtcbiAgX19leHBvc2UoKTtcblxuY29uc3QgaXNQYWdlRGF0YUxvYWRlZCA9IHJlZihmYWxzZSlcblxubGV0IHsgbG9hZGVyIH0gPSB1c2VMb2FkKDIpXG5cbmxvYWRlci52YWx1ZS5vbkFsbGlzTG9hZGVkID0gKCkgPT4ge1xuICAgIHByZWxvYWRlckNsb3NlKClcbiAgICBsb2FkZXIudmFsdWUucmVzdGFydCgpXG59XG5cblxubGV0IHsgcGFnZSB9ID0gdXNlUGFnZVNldHRpbmdzKHN0b3JlKVxuXG5vbk1vdW50ZWQoYXN5bmMgKCkgPT4ge1xuICAgIHBhZ2UudmFsdWUgPSBhd2FpdCBnZXRQYWdlU2V0dGluZ3MoMzMxKVxuXG4gICAgaXNQYWdlRGF0YUxvYWRlZC52YWx1ZSA9IHRydWVcblxuICAgIHByZWxvYWRlckNsb3NlKClcbn0pXG5cblxuY29uc3QgX19yZXR1cm5lZF9fID0geyBpc1BhZ2VEYXRhTG9hZGVkLCBnZXQgbG9hZGVyKCkgeyByZXR1cm4gbG9hZGVyIH0sIHNldCBsb2FkZXIodikgeyBsb2FkZXIgPSB2IH0sIGdldCBwYWdlKCkgeyByZXR1cm4gcGFnZSB9LCBzZXQgcGFnZSh2KSB7IHBhZ2UgPSB2IH0sIEZpcnN0U2VjdGlvbiB9XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoX19yZXR1cm5lZF9fLCAnX19pc1NjcmlwdFNldHVwJywgeyBlbnVtZXJhYmxlOiBmYWxzZSwgdmFsdWU6IHRydWUgfSlcbnJldHVybiBfX3JldHVybmVkX19cbn1cblxufSkiLCI8dGVtcGxhdGU+XG4gICAgPG1haW4gdi1pZj1cImlzUGFnZURhdGFMb2FkZWRcIj5cbiAgICAgICAgPEZpcnN0U2VjdGlvbi8+XG4gICAgPC9tYWluPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCBGaXJzdFNlY3Rpb24gZnJvbSAnQC9zZWN0aW9ucy9jb25maWd1cmF0b3IvZmlyc3Qtc2VjdGlvbi52dWUnXG5pbXBvcnQgeyBnZXRQYWdlU2V0dGluZ3MgfSBmcm9tICdAL2FwaS9BcHAvZ2V0UGFnZVNldHRpbmdzJztcbmltcG9ydCB7IHVzZUxvYWQgfSBmcm9tICdAL2hvb2tzL0FwcC91c2VMb2FkJztcbmltcG9ydCB7IHVzZVBhZ2VTZXR0aW5ncyB9IGZyb20gJ0AvaG9va3MvQXBwL3VzZVBhZ2VTZXR0aW5ncyc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnQC9zdG9yZSc7XG5pbXBvcnQgeyBvbk1vdW50ZWQsIHJlZiB9IGZyb20gJ3Z1ZSc7XG5cbmNvbnN0IGlzUGFnZURhdGFMb2FkZWQgPSByZWYoZmFsc2UpXG5cbmxldCB7IGxvYWRlciB9ID0gdXNlTG9hZCgyKVxuXG5kZWNsYXJlIHZhciBwcmVsb2FkZXJDbG9zZTogKCkgPT4gdm9pZDtcblxubG9hZGVyLnZhbHVlLm9uQWxsaXNMb2FkZWQgPSAoKSA9PiB7XG4gICAgcHJlbG9hZGVyQ2xvc2UoKVxuICAgIGxvYWRlci52YWx1ZS5yZXN0YXJ0KClcbn1cblxuXG5sZXQgeyBwYWdlIH0gPSB1c2VQYWdlU2V0dGluZ3Moc3RvcmUpXG5cbm9uTW91bnRlZChhc3luYyAoKSA9PiB7XG4gICAgcGFnZS52YWx1ZSA9IGF3YWl0IGdldFBhZ2VTZXR0aW5ncygzMzEpXG5cbiAgICBpc1BhZ2VEYXRhTG9hZGVkLnZhbHVlID0gdHJ1ZVxuXG4gICAgcHJlbG9hZGVyQ2xvc2UoKVxufSlcblxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD48L3N0eWxlPiIsImltcG9ydCB7IHRvRGlzcGxheVN0cmluZyBhcyBfdG9EaXNwbGF5U3RyaW5nLCBjcmVhdGVFbGVtZW50Vk5vZGUgYXMgX2NyZWF0ZUVsZW1lbnRWTm9kZSwgb3BlbkJsb2NrIGFzIF9vcGVuQmxvY2ssIGNyZWF0ZUVsZW1lbnRCbG9jayBhcyBfY3JlYXRlRWxlbWVudEJsb2NrIH0gZnJvbSBcInZ1ZVwiXG5cbmNvbnN0IF9ob2lzdGVkXzEgPSB7IGNsYXNzOiBcImNhcnQtYnV0dG9uXCIgfVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKF9jdHg6IGFueSxfY2FjaGU6IGFueSwkcHJvcHM6IGFueSwkc2V0dXA6IGFueSwkZGF0YTogYW55LCRvcHRpb25zOiBhbnkpIHtcbiAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJkaXZcIiwgX2hvaXN0ZWRfMSwgW1xuICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJidXR0b25cIiwge1xuICAgICAgb25DbGljazogJHNldHVwLm9uQ2xpY2ssXG4gICAgICBjbGFzczogXCJidXR0b24gY2FydC1idXR0b25fX2J1dHRvblwiXG4gICAgfSwgX3RvRGlzcGxheVN0cmluZygkc2V0dXAucHJvZHVjdEluQWRkaW5nRmllbGQgPyAn0KPQsdGA0LDRgtGMJyA6ICfQlNC+0LHQsNCy0LjRgtGMJyksIDEgLyogVEVYVCAqLylcbiAgXSkpXG59IiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudFZOb2RlIGFzIF9jcmVhdGVFbGVtZW50Vk5vZGUsIHRvRGlzcGxheVN0cmluZyBhcyBfdG9EaXNwbGF5U3RyaW5nLCBjcmVhdGVWTm9kZSBhcyBfY3JlYXRlVk5vZGUsIG9wZW5CbG9jayBhcyBfb3BlbkJsb2NrLCBjcmVhdGVFbGVtZW50QmxvY2sgYXMgX2NyZWF0ZUVsZW1lbnRCbG9jaywgcHVzaFNjb3BlSWQgYXMgX3B1c2hTY29wZUlkLCBwb3BTY29wZUlkIGFzIF9wb3BTY29wZUlkIH0gZnJvbSBcInZ1ZVwiXG5cbmNvbnN0IF93aXRoU2NvcGVJZCA9IG4gPT4gKF9wdXNoU2NvcGVJZChcImRhdGEtdi0xZmRlOWNjMFwiKSxuPW4oKSxfcG9wU2NvcGVJZCgpLG4pXG5jb25zdCBfaG9pc3RlZF8xID0geyBjbGFzczogXCJnb29kLWl0ZW1cIiB9XG5jb25zdCBfaG9pc3RlZF8yID0geyBjbGFzczogXCJnb29kLWl0ZW1fX2ltYWdlLWJveFwiIH1cbmNvbnN0IF9ob2lzdGVkXzMgPSBbXCJzcmNcIiwgXCJhbHRcIl1cbmNvbnN0IF9ob2lzdGVkXzQgPSB7IGNsYXNzOiBcImdvb2QtaXRlbS1jb250ZW50XCIgfVxuY29uc3QgX2hvaXN0ZWRfNSA9IHsgY2xhc3M6IFwiZ29vZC1pdGVtLWNvbnRlbnRfX2Rlc2NyaXB0aW9uXCIgfVxuY29uc3QgX2hvaXN0ZWRfNiA9IHsgY2xhc3M6IFwiZ29vZC1pdGVtLWNvbnRlbnRfX3RpdGxlXCIgfVxuY29uc3QgX2hvaXN0ZWRfNyA9IHsgY2xhc3M6IFwiZ29vZC1pdGVtLWNvbnRlbnRfX3ByaWNlXCIgfVxuY29uc3QgX2hvaXN0ZWRfOCA9IHsgY2xhc3M6IFwiZ29vZC1pdGVtLWNvbnRlbnRfX3F1YW50aXR5LWJveFwiIH1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihfY3R4OiBhbnksX2NhY2hlOiBhbnksJHByb3BzOiBhbnksJHNldHVwOiBhbnksJGRhdGE6IGFueSwkb3B0aW9uczogYW55KSB7XG4gIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwiZGl2XCIsIF9ob2lzdGVkXzEsIFtcbiAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzIsIFtcbiAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJpbWdcIiwge1xuICAgICAgICBjbGFzczogXCJnb29kLWl0ZW1fX2ltYWdlXCIsXG4gICAgICAgIHNyYzogJHNldHVwLnByb2R1Y3QuaW1hZ2VzWzBdLnNyYyxcbiAgICAgICAgYWx0OiAkc2V0dXAucHJvZHVjdC5uYW1lXG4gICAgICB9LCBudWxsLCA4IC8qIFBST1BTICovLCBfaG9pc3RlZF8zKVxuICAgIF0pLFxuICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfNCwgW1xuICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF81LCBbXG4gICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJwXCIsIF9ob2lzdGVkXzYsIF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLnByb2R1Y3QubmFtZSksIDEgLyogVEVYVCAqLyksXG4gICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJwXCIsIF9ob2lzdGVkXzcsIF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLnByb2R1Y3QucHJpY2UpICsgXCIg0YDRg9CxIC8g0YjRglwiLCAxIC8qIFRFWFQgKi8pXG4gICAgICBdKSxcbiAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfOCwgW1xuICAgICAgICBfY3JlYXRlVk5vZGUoJHNldHVwW1wiQ2FydEJ1dHRvbkVhc2x5XCJdLCB7XG4gICAgICAgICAgcHJvZHVjdDogJHNldHVwLnByb2R1Y3QsXG4gICAgICAgICAgXCJhZGRpbmctZmllbGRcIjogJHNldHVwLmFkZGluZ0ZpZWxkLFxuICAgICAgICAgIFwib25VcGRhdGU6YWRkaW5nRmllbGRcIjogX2NhY2hlWzBdIHx8IChfY2FjaGVbMF0gPSAoJGV2ZW50OiBhbnkpID0+ICgkc2V0dXAuZW1pdCgndXBkYXRlOmFkZGluZ0ZpZWxkJywgJGV2ZW50KSkpXG4gICAgICAgIH0sIG51bGwsIDggLyogUFJPUFMgKi8sIFtcInByb2R1Y3RcIiwgXCJhZGRpbmctZmllbGRcIl0pLFxuICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwicFwiLCB7XG4gICAgICAgICAgY2xhc3M6IFwiZ29vZC1pdGVtLWNvbnRlbnRfX3NwZWMtYnV0dG9uXCIsXG4gICAgICAgICAgb25DbGljazogJHNldHVwLm9uQ2xpY2tcbiAgICAgICAgfSwgXCLQn9C+0LTRgNC+0LHQvdC10LVcIilcbiAgICAgIF0pXG4gICAgXSlcbiAgXSkpXG59IiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudFZOb2RlIGFzIF9jcmVhdGVFbGVtZW50Vk5vZGUsIHJlbmRlckxpc3QgYXMgX3JlbmRlckxpc3QsIEZyYWdtZW50IGFzIF9GcmFnbWVudCwgb3BlbkJsb2NrIGFzIF9vcGVuQmxvY2ssIGNyZWF0ZUVsZW1lbnRCbG9jayBhcyBfY3JlYXRlRWxlbWVudEJsb2NrLCBjcmVhdGVDb21tZW50Vk5vZGUgYXMgX2NyZWF0ZUNvbW1lbnRWTm9kZSwgdG9EaXNwbGF5U3RyaW5nIGFzIF90b0Rpc3BsYXlTdHJpbmcsIGNyZWF0ZUJsb2NrIGFzIF9jcmVhdGVCbG9jaywgcHVzaFNjb3BlSWQgYXMgX3B1c2hTY29wZUlkLCBwb3BTY29wZUlkIGFzIF9wb3BTY29wZUlkIH0gZnJvbSBcInZ1ZVwiXG5cbmNvbnN0IF93aXRoU2NvcGVJZCA9IG4gPT4gKF9wdXNoU2NvcGVJZChcImRhdGEtdi0yNmNhYWZiNFwiKSxuPW4oKSxfcG9wU2NvcGVJZCgpLG4pXG5jb25zdCBfaG9pc3RlZF8xID0geyBjbGFzczogXCJmaXJzdC1zZWN0aW9uLXdyYXBwZXJcIiB9XG5jb25zdCBfaG9pc3RlZF8yID0geyBjbGFzczogXCJmaXJzdC1zZWN0aW9uXCIgfVxuY29uc3QgX2hvaXN0ZWRfMyA9IHsgY2xhc3M6IFwiZmlyc3Qtc2VjdGlvbi1jb250YWluZXIgY29udGFpbmVyXCIgfVxuY29uc3QgX2hvaXN0ZWRfNCA9IC8qI19fUFVSRV9fKi8gX3dpdGhTY29wZUlkKCgpID0+IC8qI19fUFVSRV9fKi9fY3JlYXRlRWxlbWVudFZOb2RlKFwiaDFcIiwgeyBjbGFzczogXCJmaXJzdC1zZWN0aW9uX190aXRsZSB0aXRsZVwiIH0sIFwi0JrQvtC90YTQuNCz0YPRgNCw0YLQvtGAXCIsIC0xIC8qIEhPSVNURUQgKi8pKVxuY29uc3QgX2hvaXN0ZWRfNSA9IHsgY2xhc3M6IFwiZmlyc3Qtc2VjdGlvbi1zbGlkZXJcIiB9XG5jb25zdCBfaG9pc3RlZF82ID0ge1xuICByZWY6IFwic3dpcGVyQ29udGFpbmVyXCIsXG4gIGNsYXNzOiBcInN3aXBlci1jb250YWluZXJcIlxufVxuY29uc3QgX2hvaXN0ZWRfNyA9IHsgY2xhc3M6IFwic3dpcGVyLXdyYXBwZXJcIiB9XG5jb25zdCBfaG9pc3RlZF84ID0gW1wib25DbGlja1wiXVxuY29uc3QgX2hvaXN0ZWRfOSA9IFtcInNyY1wiLCBcImFsdFwiXVxuY29uc3QgX2hvaXN0ZWRfMTAgPSB7IGNsYXNzOiBcImZpcnN0LXNlY3Rpb24tcHJvZHVjdHMtY29udGFpbmVyXCIgfVxuY29uc3QgX2hvaXN0ZWRfMTEgPSB7IGNsYXNzOiBcImZpcnN0LXNlY3Rpb24tZ29vZHNcIiB9XG5jb25zdCBfaG9pc3RlZF8xMiA9IC8qI19fUFVSRV9fKi8gX3dpdGhTY29wZUlkKCgpID0+IC8qI19fUFVSRV9fKi9fY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIHsgY2xhc3M6IFwiZmlyc3Qtc2VjdGlvbi1maWx0ZXJzXCIgfSwgW1xuICAvKiNfX1BVUkVfXyovX2NyZWF0ZUNvbW1lbnRWTm9kZShcIiA8Q3VzdG9tU2VsZWN0XFxuICAgICAgICAgICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgICAgICAgICAgLz4gXCIpXG5dLCAtMSAvKiBIT0lTVEVEICovKSlcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihfY3R4OiBhbnksX2NhY2hlOiBhbnksJHByb3BzOiBhbnksJHNldHVwOiBhbnksJGRhdGE6IGFueSwkb3B0aW9uczogYW55KSB7XG4gIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwiZGl2XCIsIF9ob2lzdGVkXzEsIFtcbiAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzIsIFtcbiAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfMywgW1xuICAgICAgICBfaG9pc3RlZF80LFxuICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzUsIFtcbiAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzYsIFtcbiAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfNywgW1xuICAgICAgICAgICAgICAoX29wZW5CbG9jayh0cnVlKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhfRnJhZ21lbnQsIG51bGwsIF9yZW5kZXJMaXN0KCRzZXR1cC5jYXRlZ29yaWVzLCAoY2F0ZWdvcnkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrOiAoJGV2ZW50OiBhbnkpID0+ICgkc2V0dXAudXBkYXRlQ2hvb3NlbkNhdGVnb3J5KGNhdGVnb3J5KSksXG4gICAgICAgICAgICAgICAgICBrZXk6IGNhdGVnb3J5LmlkLFxuICAgICAgICAgICAgICAgICAgY2xhc3M6IFwic3dpcGVyLXNsaWRlXCJcbiAgICAgICAgICAgICAgICB9LCBbXG4gICAgICAgICAgICAgICAgICAoY2F0ZWdvcnkuaW1hZ2UpXG4gICAgICAgICAgICAgICAgICAgID8gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM6IGNhdGVnb3J5LmltYWdlLnNyYyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogY2F0ZWdvcnkuaW1hZ2UubmFtZVxuICAgICAgICAgICAgICAgICAgICAgIH0sIG51bGwsIDggLyogUFJPUFMgKi8sIF9ob2lzdGVkXzkpKVxuICAgICAgICAgICAgICAgICAgICA6IF9jcmVhdGVDb21tZW50Vk5vZGUoXCJ2LWlmXCIsIHRydWUpLFxuICAgICAgICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcInBcIiwgbnVsbCwgX3RvRGlzcGxheVN0cmluZyhjYXRlZ29yeS5uYW1lKSwgMSAvKiBURVhUICovKVxuICAgICAgICAgICAgICAgIF0sIDggLyogUFJPUFMgKi8sIF9ob2lzdGVkXzgpKVxuICAgICAgICAgICAgICB9KSwgMTI4IC8qIEtFWUVEX0ZSQUdNRU5UICovKSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSwgNTEyIC8qIE5FRURfUEFUQ0ggKi8pXG4gICAgICAgIF0pLFxuICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzEwLCBbXG4gICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF8xMSwgW1xuICAgICAgICAgICAgKF9vcGVuQmxvY2sodHJ1ZSksIF9jcmVhdGVFbGVtZW50QmxvY2soX0ZyYWdtZW50LCBudWxsLCBfcmVuZGVyTGlzdCgkc2V0dXAucHJvZHVjdHMsIChwcm9kdWN0KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlQmxvY2soJHNldHVwW1wiR29vZEl0ZW1cIl0sIHtcbiAgICAgICAgICAgICAgICBrZXk6IHByb2R1Y3QuaWQsXG4gICAgICAgICAgICAgICAgXCJhZGRpbmctZmllbGRcIjogJHNldHVwLkNvbmZpZ3VyZVByb2R1Y3RbJHNldHVwLmNob29zZW5DYXRlZ29yeS5zbHVnXSxcbiAgICAgICAgICAgICAgICBcIm9uVXBkYXRlOmFkZGluZ0ZpZWxkXCI6IF9jYWNoZVswXSB8fCAoX2NhY2hlWzBdID0gKCRldmVudDogYW55KSA9PiAoKCRzZXR1cC5Db25maWd1cmVQcm9kdWN0WyRzZXR1cC5jaG9vc2VuQ2F0ZWdvcnkuc2x1Z10pID0gJGV2ZW50KSksXG4gICAgICAgICAgICAgICAgcHJvZHVjdDogcHJvZHVjdFxuICAgICAgICAgICAgICB9LCBudWxsLCA4IC8qIFBST1BTICovLCBbXCJhZGRpbmctZmllbGRcIiwgXCJwcm9kdWN0XCJdKSlcbiAgICAgICAgICAgIH0pLCAxMjggLyogS0VZRURfRlJBR01FTlQgKi8pKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF9ob2lzdGVkXzEyXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF0pXG4gIF0pKVxufSIsImltcG9ydCB7IGNyZWF0ZVZOb2RlIGFzIF9jcmVhdGVWTm9kZSwgb3BlbkJsb2NrIGFzIF9vcGVuQmxvY2ssIGNyZWF0ZUVsZW1lbnRCbG9jayBhcyBfY3JlYXRlRWxlbWVudEJsb2NrLCBjcmVhdGVDb21tZW50Vk5vZGUgYXMgX2NyZWF0ZUNvbW1lbnRWTm9kZSB9IGZyb20gXCJ2dWVcIlxuXG5jb25zdCBfaG9pc3RlZF8xID0geyBrZXk6IDAgfVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKF9jdHg6IGFueSxfY2FjaGU6IGFueSwkcHJvcHM6IGFueSwkc2V0dXA6IGFueSwkZGF0YTogYW55LCRvcHRpb25zOiBhbnkpIHtcbiAgcmV0dXJuICgkc2V0dXAuaXNQYWdlRGF0YUxvYWRlZClcbiAgICA/IChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJtYWluXCIsIF9ob2lzdGVkXzEsIFtcbiAgICAgICAgX2NyZWF0ZVZOb2RlKCRzZXR1cFtcIkZpcnN0U2VjdGlvblwiXSlcbiAgICAgIF0pKVxuICAgIDogX2NyZWF0ZUNvbW1lbnRWTm9kZShcInYtaWZcIiwgdHJ1ZSlcbn0iLCJpbXBvcnQgV1AgZnJvbSAnQC9heGlvc1dQJ1xuaW1wb3J0IHsgU2V0dGluZ3MgfSBmcm9tICdAL3R5cGVzL0FwcCdcblxuXG5cbmV4cG9ydCBjb25zdCBnZXRQYWdlU2V0dGluZ3MgPSBhc3luYyAoaWQ6IG51bWJlcik6IFByb21pc2U8U2V0dGluZ3M+ID0+IHtcbiAgICByZXR1cm4gYXdhaXQgV1AuZ2V0KCdwYWdlcy8nICsgaWQpLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuZGF0YSlcbn0iLCJpbXBvcnQgV09PIGZyb20gJ0AvYXhpb3NXb29jb21lcmNlJ1xuXG5leHBvcnQgY29uc3QgZ2V0Q2F0ZWdvcmllcyA9IGFzeW5jIChwYXJhbXM6IG9iamVjdCkgPT4ge1xuICAgIGxldCByZXNwb25zZSA9IGF3YWl0IFdPTy5nZXQoJy9wcm9kdWN0cy9jYXRlZ29yaWVzJywge3BhcmFtczogcGFyYW1zfSk7XG5cbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbn0iLCJpbXBvcnQgeyBSZWYsIGNvbXB1dGVkLCByZWYsIHdhdGNoIH0gZnJvbSBcInZ1ZVwiO1xuXG5jbGFzcyBMb2FkZXIge1xuXG4gICAgcHJpdmF0ZSBsb2FkZWRDb3VudGVyOiBudW1iZXIgPSAwO1xuXG4gICAgcHJpdmF0ZSBjb3VudGVyOiBudW1iZXIgPSAwO1xuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihjb3VudGVyOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5jb3VudGVyID0gY291bnRlcjtcbiAgICB9XG4gICAgcHVibGljIGxvYWQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMubG9hZGVkQ291bnRlcisrO1xuXG4gICAgICAgIHRoaXMuYWZ0ZXJMb2FkKClcbiAgICB9XG4gICAgcHVibGljIHJlc3RhcnQoY291bnQ/OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKGNvdW50KSB7XG4gICAgICAgICAgICB0aGlzLmNvdW50ZXIgPSBjb3VudFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5sb2FkZWRDb3VudGVyID0gMDtcbiAgICB9XG4gICAgcHVibGljIG9uQWxsaXNMb2FkZWQ6IEZ1bmN0aW9uO1xuICAgIHByaXZhdGUgYWZ0ZXJMb2FkKCk6IHZvaWQge1xuXG4gICAgICAgIGlmICh0aGlzLmxvYWRlZENvdW50ZXIgIT0gdGhpcy5jb3VudGVyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5vbkFsbGlzTG9hZGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vbkFsbGlzTG9hZGVkKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuZXhwb3J0IGNvbnN0IHVzZUxvYWQgPSAoY291bnQ6IG51bWJlcikgPT4ge1xuXG4gICAgY29uc3QgbG9hZGVyID0gcmVmKG5ldyBMb2FkZXIoY291bnQpKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGxvYWRlcixcbiAgICB9XG59IiwiaW1wb3J0IFN0b3JlLCB7IE11dGF0aW9ucyB9IGZyb20gJ0Avc3RvcmUnO1xuaW1wb3J0IHsgV3JpdGFibGVDb21wdXRlZFJlZiwgY29tcHV0ZWQgfSBmcm9tICd2dWUnO1xuaW1wb3J0IHsgSUNhdGVnb3J5TWFpblBhZ2UsIFNldHRpbmdzIH0gZnJvbSAnQC90eXBlcy9BcHAnO1xuXG5cbmV4cG9ydCBjb25zdCB1c2VQYWdlU2V0dGluZ3MgPSAoc3RvcmU6IHR5cGVvZiBTdG9yZSkgPT4ge1xuXG4gICAgbGV0IHBhZ2U6IFdyaXRhYmxlQ29tcHV0ZWRSZWY8T2JqZWN0PiA9IGNvbXB1dGVkKHtcbiAgICAgICAgZ2V0OiAoKSA9PiBzdG9yZS5zdGF0ZS5wYWdlLmNmcyxcbiAgICAgICAgc2V0OiAodmFsdWU6IFNldHRpbmdzKSA9PiBzdG9yZS5jb21taXQoTXV0YXRpb25zLlNFVF9QQUdFX1NFVFRJTkdTLCB2YWx1ZSksXG4gICAgfSlcblxuICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VcbiAgICB9XG5cbn0iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9DYXJ0QnV0dG9uRWFzbHkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZkNzRiY2QyJnRzPXRydWVcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9DYXJ0QnV0dG9uRWFzbHkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZzZXR1cD10cnVlJmxhbmc9dHNcIlxuZXhwb3J0ICogZnJvbSBcIi4vQ2FydEJ1dHRvbkVhc2x5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmc2V0dXA9dHJ1ZSZsYW5nPXRzXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19maWxlJyxcInNyYy9jb21wb25lbnRzL0NhcnRCdXR0b25FYXNseS52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiNmQ3NGJjZDJcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCc2ZDc0YmNkMicsIF9fZXhwb3J0c19fKSkge1xuICAgIGFwaS5yZWxvYWQoJzZkNzRiY2QyJywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9DYXJ0QnV0dG9uRWFzbHkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZkNzRiY2QyJnRzPXRydWVcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignNmQ3NGJjZDInLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL0dvb2RJdGVtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xZmRlOWNjMCZzY29wZWQ9dHJ1ZSZ0cz10cnVlXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vR29vZEl0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZzZXR1cD10cnVlJmxhbmc9dHNcIlxuZXhwb3J0ICogZnJvbSBcIi4vR29vZEl0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZzZXR1cD10cnVlJmxhbmc9dHNcIlxuXG5pbXBvcnQgXCIuL0dvb2RJdGVtLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTFmZGU5Y2MwJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZVwiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fc2NvcGVJZCcsXCJkYXRhLXYtMWZkZTljYzBcIl0sWydfX2ZpbGUnLFwic3JjL2NvbXBvbmVudHMvR29vZEl0ZW0udnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcIjFmZGU5Y2MwXCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnMWZkZTljYzAnLCBfX2V4cG9ydHNfXykpIHtcbiAgICBhcGkucmVsb2FkKCcxZmRlOWNjMCcsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vR29vZEl0ZW0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFmZGU5Y2MwJnNjb3BlZD10cnVlJnRzPXRydWVcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignMWZkZTljYzAnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL2ZpcnN0LXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI2Y2FhZmI0JnNjb3BlZD10cnVlJnRzPXRydWVcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9maXJzdC1zZWN0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmc2V0dXA9dHJ1ZSZsYW5nPXRzXCJcbmV4cG9ydCAqIGZyb20gXCIuL2ZpcnN0LXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZzZXR1cD10cnVlJmxhbmc9dHNcIlxuXG5pbXBvcnQgXCIuL2ZpcnN0LXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjZjYWFmYjQmbGFuZz1zY3NzJnNjb3BlZD10cnVlXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19zY29wZUlkJyxcImRhdGEtdi0yNmNhYWZiNFwiXSxbJ19fZmlsZScsXCJzcmMvc2VjdGlvbnMvY29uZmlndXJhdG9yL2ZpcnN0LXNlY3Rpb24udnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcIjI2Y2FhZmI0XCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnMjZjYWFmYjQnLCBfX2V4cG9ydHNfXykpIHtcbiAgICBhcGkucmVsb2FkKCcyNmNhYWZiNCcsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vZmlyc3Qtc2VjdGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjZjYWFmYjQmc2NvcGVkPXRydWUmdHM9dHJ1ZVwiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCcyNmNhYWZiNCcsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vY29uZmlndXJhdG9yLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xNzg2ZTVjZiZ0cz10cnVlXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vY29uZmlndXJhdG9yLnZ1ZT92dWUmdHlwZT1zY3JpcHQmc2V0dXA9dHJ1ZSZsYW5nPXRzXCJcbmV4cG9ydCAqIGZyb20gXCIuL2NvbmZpZ3VyYXRvci52dWU/dnVlJnR5cGU9c2NyaXB0JnNldHVwPXRydWUmbGFuZz10c1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fZmlsZScsXCJzcmMvdmlld3MvY29uZmlndXJhdG9yLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCIxNzg2ZTVjZlwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzE3ODZlNWNmJywgX19leHBvcnRzX18pKSB7XG4gICAgYXBpLnJlbG9hZCgnMTc4NmU1Y2YnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2NvbmZpZ3VyYXRvci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTc4NmU1Y2YmdHM9dHJ1ZVwiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCcxNzg2ZTVjZicsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzEwXS51c2VbMF0hLi9DYXJ0QnV0dG9uRWFzbHkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZzZXR1cD10cnVlJmxhbmc9dHNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMTBdLnVzZVswXSEuL0NhcnRCdXR0b25FYXNseS52dWU/dnVlJnR5cGU9c2NyaXB0JnNldHVwPXRydWUmbGFuZz10c1wiIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzEwXS51c2VbMF0hLi9Hb29kSXRlbS52dWU/dnVlJnR5cGU9c2NyaXB0JnNldHVwPXRydWUmbGFuZz10c1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxMF0udXNlWzBdIS4vR29vZEl0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZzZXR1cD10cnVlJmxhbmc9dHNcIiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxMF0udXNlWzBdIS4vZmlyc3Qtc2VjdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0JnNldHVwPXRydWUmbGFuZz10c1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxMF0udXNlWzBdIS4vZmlyc3Qtc2VjdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0JnNldHVwPXRydWUmbGFuZz10c1wiIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzEwXS51c2VbMF0hLi9jb25maWd1cmF0b3IudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZzZXR1cD10cnVlJmxhbmc9dHNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMTBdLnVzZVswXSEuL2NvbmZpZ3VyYXRvci52dWU/dnVlJnR5cGU9c2NyaXB0JnNldHVwPXRydWUmbGFuZz10c1wiIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzEwXS51c2VbMF0hLi9Hb29kSXRlbS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xZmRlOWNjMCZsYW5nPXNjc3Mmc2NvcGVkPXRydWVcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiMjQwOGRiNzZcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzEwXS51c2VbMF0hLi9Hb29kSXRlbS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xZmRlOWNjMCZsYW5nPXNjc3Mmc2NvcGVkPXRydWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMTBdLnVzZVswXSEuL0dvb2RJdGVtLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTFmZGU5Y2MwJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZVwiKTtcbiAgICAgaWYobmV3Q29udGVudC5fX2VzTW9kdWxlKSBuZXdDb250ZW50ID0gbmV3Q29udGVudC5kZWZhdWx0O1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMTBdLnVzZVswXSEuL2ZpcnN0LXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjZjYWFmYjQmbGFuZz1zY3NzJnNjb3BlZD10cnVlXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcImQ4NzJmNzAyXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxMF0udXNlWzBdIS4vZmlyc3Qtc2VjdGlvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yNmNhYWZiNCZsYW5nPXNjc3Mmc2NvcGVkPXRydWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMTBdLnVzZVswXSEuL2ZpcnN0LXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjZjYWFmYjQmbGFuZz1zY3NzJnNjb3BlZD10cnVlXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==