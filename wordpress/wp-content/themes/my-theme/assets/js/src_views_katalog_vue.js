(self["webpackChunksrc"] = self["webpackChunksrc"] || []).push([["src_views_katalog_vue"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/components/CustomSelect.vue?vue&type=style&index=0&id=04350d06&lang=scss&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/components/CustomSelect.vue?vue&type=style&index=0&id=04350d06&lang=scss&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.select[data-v-04350d06] {
  width: 100%;
}
.select__panel[data-v-04350d06] {
  width: 100%;
  padding: 16px 18px;
  background-color: #0C0C0C;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
}
.select__title[data-v-04350d06] {
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 400;
  color: #FFF;
}
.select__list[data-v-04350d06] {
  padding: 10px;
  background-color: #121212;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.select__item[data-v-04350d06] {
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  background-color: #141414;
}
.select__item button[data-v-04350d06] {
  width: 100%;
  height: 100%;
  color: #FFF;
  font-size: 16px;
  font-weight: 500;
  text-transform: uppercase;
}
.select__item--active[data-v-04350d06] {
  background-color: #343434;
}
.select__wrapper[data-v-04350d06] {
  height: 0px;
  width: 100%;
  transition: all 0.3s;
  overflow: hidden;
  opacity: 0;
}
.select__wrapper--open[data-v-04350d06] {
  padding-top: 10px;
  padding-bottom: 10px;
  opacity: 1;
  height: unset;
}`, "",{"version":3,"sources":["webpack://./src/components/CustomSelect.vue","webpack://./CustomSelect.vue"],"names":[],"mappings":"AACA;EACI,WAAA;ACAJ;ADEI;EACI,WAAA;EACA,kBAAA;EACA,yBAAA;EACA,aAAA;EACA,mBAAA;EACA,8BAAA;EAEA,kBAAA;ACDR;ADII;EACI,yBAAA;EACA,eAAA;EACA,gBAAA;EACA,WAAA;ACFR;ADKI;EACI,aAAA;EACA,yBAAA;EACA,kBAAA;EAEA,aAAA;EACA,sBAAA;EACA,SAAA;ACJR;ADOI;EACI,kBAAA;EACA,aAAA;EACA,kBAAA;EACA,yBAAA;ACLR;ADOQ;EACI,WAAA;EACA,YAAA;EACA,WAAA;EACA,eAAA;EACA,gBAAA;EACA,yBAAA;ACLZ;ADSQ;EACI,yBAAA;ACPZ;ADWI;EACI,WAAA;EACA,WAAA;EACA,oBAAA;EAEA,gBAAA;EAEA,UAAA;ACXR;ADaQ;EAEI,iBAAA;EACA,oBAAA;EAEA,UAAA;EAEA,aAAA;ACdZ","sourcesContent":["\n.select {\n    width: 100%;\n\n    &__panel {\n        width: 100%;\n        padding: 16px 18px;\n        background-color: #0C0C0C;\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n\n        border-radius: 5px;\n    }\n\n    &__title {\n        text-transform: uppercase;\n        font-size: 16px;\n        font-weight: 400;\n        color: #FFF;\n    }\n\n    &__list {\n        padding: 10px;\n        background-color: #121212;\n        border-radius: 5px;\n\n        display: flex;\n        flex-direction: column;\n        gap: 10px;\n    }\n\n    &__item {\n        border-radius: 5px;\n        padding: 10px;\n        text-align: center;\n        background-color: #141414;\n\n        button {\n            width: 100%;\n            height: 100%;\n            color: #FFF;\n            font-size: 16px;\n            font-weight: 500;\n            text-transform: uppercase;\n        }\n\n\n        &--active {\n            background-color: #343434;\n        }\n    }\n\n    &__wrapper {\n        height: 0px;\n        width: 100%;\n        transition: all 0.3s;\n\n        overflow: hidden;\n\n        opacity: 0;\n\n        &--open {\n\n            padding-top: 10px;\n            padding-bottom: 10px;\n\n            opacity: 1;\n\n            height: unset;\n        }\n    }\n}\n",".select {\n  width: 100%;\n}\n.select__panel {\n  width: 100%;\n  padding: 16px 18px;\n  background-color: #0C0C0C;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-radius: 5px;\n}\n.select__title {\n  text-transform: uppercase;\n  font-size: 16px;\n  font-weight: 400;\n  color: #FFF;\n}\n.select__list {\n  padding: 10px;\n  background-color: #121212;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.select__item {\n  border-radius: 5px;\n  padding: 10px;\n  text-align: center;\n  background-color: #141414;\n}\n.select__item button {\n  width: 100%;\n  height: 100%;\n  color: #FFF;\n  font-size: 16px;\n  font-weight: 500;\n  text-transform: uppercase;\n}\n.select__item--active {\n  background-color: #343434;\n}\n.select__wrapper {\n  height: 0px;\n  width: 100%;\n  transition: all 0.3s;\n  overflow: hidden;\n  opacity: 0;\n}\n.select__wrapper--open {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  opacity: 1;\n  height: unset;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/components/Product.vue?vue&type=style&index=0&id=3cf4ef6f&lang=scss&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/components/Product.vue?vue&type=style&index=0&id=3cf4ef6f&lang=scss&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.product[data-v-3cf4ef6f] {
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding-top: 15px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 25px;
  background-color: #141414;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  transition: all 0.3s;
}
.product[data-v-3cf4ef6f]:hover {
  cursor: pointer;
  box-shadow: 0 0 10px #ffffff;
}
.product__image[data-v-3cf4ef6f] {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.product__price[data-v-3cf4ef6f] {
  font-size: 18px;
  font-weight: 500px;
  text-transform: uppercase;
}
.product-description[data-v-3cf4ef6f] {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.product-description__name[data-v-3cf4ef6f] {
  text-transform: uppercase;
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 20px;
}
.product-description-specs[data-v-3cf4ef6f] {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 10px;
  margin-bottom: 5px;
}
.spec[data-v-3cf4ef6f] {
  border-bottom: 2px dashed rgb(51, 51, 51);
  width: 80%;
  text-align: center;
  padding-bottom: 5px;
  font-weight: 300;
  color: rgb(214, 213, 213);
}`, "",{"version":3,"sources":["webpack://./src/components/Product.vue","webpack://./Product.vue"],"names":[],"mappings":"AACA;EACI,+CAAA;EACA,iBAAA;EACA,kBAAA;EACA,mBAAA;EACA,oBAAA;EAEA,yBAAA;EAEA,kBAAA;EAEA,aAAA;EACA,sBAAA;EACA,mBAAA;EAEA,SAAA;EAEA,oBAAA;ACLJ;ADOI;EACI,eAAA;EACA,4BAAA;ACLR;ADQI;EACI,WAAA;EACA,YAAA;EACA,mBAAA;ACNR;ADSI;EACI,eAAA;EACA,kBAAA;EACA,yBAAA;ACPR;ADWA;EAGI,aAAA;EACA,sBAAA;EACA,mBAAA;EAEA,WAAA;ACXJ;ADaI;EACI,yBAAA;EACA,eAAA;EACA,gBAAA;EACA,mBAAA;ACXR;ADeA;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,WAAA;EACA,SAAA;EACA,kBAAA;ACZJ;ADeA;EACI,yCAAA;EACA,UAAA;EACA,kBAAA;EACA,mBAAA;EAEA,gBAAA;EACA,yBAAA;ACbJ","sourcesContent":["\n.product {\n    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);\n    padding-top: 15px;\n    padding-left: 10px;\n    padding-right: 10px;\n    padding-bottom: 25px;\n\n    background-color: #141414;\n\n    border-radius: 5px;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    gap: 20px;\n\n    transition: all 0.3s;\n\n    &:hover {\n        cursor: pointer;\n        box-shadow: 0 0 10px #ffffff;\n    }\n\n    &__image {\n        width: 100%;\n        height: 100%;\n        object-fit: contain;\n    }\n\n    &__price {\n        font-size: 18px;\n        font-weight: 500px;\n        text-transform: uppercase;\n    }\n}\n\n.product-description {\n\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    width: 100%;\n\n    &__name {\n        text-transform: uppercase;\n        font-size: 22px;\n        font-weight: 600;\n        margin-bottom: 20px;\n    }\n}\n\n.product-description-specs {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n    gap: 10px;\n    margin-bottom: 5px;\n}\n\n.spec {\n    border-bottom: 2px dashed rgb(51, 51, 51);\n    width: 80%;\n    text-align: center;\n    padding-bottom: 5px;\n\n    font-weight: 300;\n    color: rgb(214, 213, 213);\n}\n",".product {\n  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);\n  padding-top: 15px;\n  padding-left: 10px;\n  padding-right: 10px;\n  padding-bottom: 25px;\n  background-color: #141414;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n  transition: all 0.3s;\n}\n.product:hover {\n  cursor: pointer;\n  box-shadow: 0 0 10px #ffffff;\n}\n.product__image {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n.product__price {\n  font-size: 18px;\n  font-weight: 500px;\n  text-transform: uppercase;\n}\n\n.product-description {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n}\n.product-description__name {\n  text-transform: uppercase;\n  font-size: 22px;\n  font-weight: 600;\n  margin-bottom: 20px;\n}\n\n.product-description-specs {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  gap: 10px;\n  margin-bottom: 5px;\n}\n\n.spec {\n  border-bottom: 2px dashed rgb(51, 51, 51);\n  width: 80%;\n  text-align: center;\n  padding-bottom: 5px;\n  font-weight: 300;\n  color: rgb(214, 213, 213);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/sections/katalog/first-section.vue?vue&type=style&index=0&id=6822fdd2&lang=scss&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/sections/katalog/first-section.vue?vue&type=style&index=0&id=6822fdd2&lang=scss&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.title[data-v-6822fdd2] {
  color: #FFF;
  font-family: Rubik;
  font-size: 4rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 1.6px;
  text-transform: uppercase;
  margin-bottom: 21px;
}
.first-section[data-v-6822fdd2] {
  overflow: hidden;
}
.first-section-container[data-v-6822fdd2] {
  padding-top: 150px;
  display: grid;
  grid-template-columns: 8fr 6fr;
  gap: 80px;
}
@media screen and (max-width: 900px) {
.first-section-container[data-v-6822fdd2] {
    grid-template-columns: 1fr;
    padding-top: 90px;
    gap: 0px;
}
}
.image-box[data-v-6822fdd2] {
  position: relative;
  top: 10px;
  width: 100%;
}
@media screen and (max-width: 900px) {
.image-box[data-v-6822fdd2] {
    top: 15px;
}
}
.image-box img[data-v-6822fdd2] {
  width: 100%;
}
.description-box[data-v-6822fdd2] {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
@media screen and (max-width: 900px) {
.description-box[data-v-6822fdd2] {
    margin-bottom: 40px;
    background-color: rgb(15, 15, 15);
    padding: 10px;
    padding-top: 30px;
    border-radius: 5px;
    z-index: 1;
}
}
.description-box__title[data-v-6822fdd2] {
  margin-bottom: 35px;
}`, "",{"version":3,"sources":["webpack://./src/scss/base/typography.scss","webpack://./first-section.vue","webpack://./src/sections/katalog/first-section.vue","webpack://./src/scss/base/mixins.scss"],"names":[],"mappings":"AAAA;EACI,WAAA;EACA,kBAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;EACA,qBAAA;EACA,yBAAA;EACA,mBAAA;ACCJ;ACNA;EACI,gBAAA;ADSJ;ACNA;EAII,kBAAA;EAEA,aAAA;EACA,8BAAA;EAQA,SAAA;ADFJ;AERI;ADLJ;IAUQ,0BAAA;IACA,iBAAA;IACA,QAAA;ADON;AACF;ACFA;EACI,kBAAA;EACA,SAAA;EACA,WAAA;ADKJ;AErBI;ADaJ;IAMQ,SAAA;ADMN;AACF;ACJI;EACI,WAAA;ADMR;ACDA;EAEI,aAAA;EACA,sBAAA;EACA,uBAAA;ADGJ;AEnCI;AD4BJ;IAOQ,mBAAA;IACA,iCAAA;IACA,aAAA;IACA,iBAAA;IACA,kBAAA;IACA,UAAA;ADIN;AACF;ACFI;EACI,mBAAA;ADIR","sourcesContent":[".title {\n    color: #FFF;\n    font-family: Rubik;\n    font-size: 4rem;\n    font-style: normal;\n    font-weight: 600;\n    line-height: normal;\n    letter-spacing: 1.6px;\n    text-transform: uppercase;\n    margin-bottom: 21px;\n}",".title {\n  color: #FFF;\n  font-family: Rubik;\n  font-size: 4rem;\n  font-style: normal;\n  font-weight: 600;\n  line-height: normal;\n  letter-spacing: 1.6px;\n  text-transform: uppercase;\n  margin-bottom: 21px;\n}\n\n.first-section {\n  overflow: hidden;\n}\n\n.first-section-container {\n  padding-top: 150px;\n  display: grid;\n  grid-template-columns: 8fr 6fr;\n  gap: 80px;\n}\n@media screen and (max-width: 900px) {\n  .first-section-container {\n    grid-template-columns: 1fr;\n    padding-top: 90px;\n    gap: 0px;\n  }\n}\n\n.image-box {\n  position: relative;\n  top: 10px;\n  width: 100%;\n}\n@media screen and (max-width: 900px) {\n  .image-box {\n    top: 15px;\n  }\n}\n.image-box img {\n  width: 100%;\n}\n\n.description-box {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n@media screen and (max-width: 900px) {\n  .description-box {\n    margin-bottom: 40px;\n    background-color: rgb(15, 15, 15);\n    padding: 10px;\n    padding-top: 30px;\n    border-radius: 5px;\n    z-index: 1;\n  }\n}\n.description-box__title {\n  margin-bottom: 35px;\n}","\n@import '@/scss/base/mixins.scss';\n@import '@/scss/base/typography.scss';\n\n.first-section {\n    overflow: hidden;\n}\n\n.first-section-container {\n    // max-width: 1600px;\n    // margin: 0 auto;\n    // padding: 0 40px;\n    padding-top: 150px;\n\n    display: grid;\n    grid-template-columns: 8fr 6fr;\n\n    @include table {\n        grid-template-columns: 1fr;\n        padding-top: 90px;\n        gap: 0px;\n    }\n\n    gap: 80px;\n}\n\n.image-box {\n    position: relative;\n    top: 10px;\n    width: 100%;\n\n    @include table {\n        top: 15px;\n    }\n\n    img {\n        width: 100%;\n\n    }\n}\n\n.description-box {\n\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n\n    @include table {\n        margin-bottom: 40px;\n        background-color: rgb(15, 15, 15);\n        padding: 10px;\n        padding-top: 30px;\n        border-radius: 5px;\n        z-index: 1;\n    }\n\n    &__title {\n        margin-bottom: 35px;\n    }\n\n    &__text {}\n}\n","@mixin phone {\n    @media screen and (max-width: 480px) {\n        @content;\n    }\n}\n\n@mixin min-table {\n    @media screen and (max-width: 768px) {\n        @content;\n    }\n}\n\n@mixin table {\n    @media screen and (max-width: 900px) {\n        @content;\n    }\n}\n\n@mixin laptop {\n    @media screen and (max-width: 1100px) {\n        @content;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/sections/katalog/second-section.vue?vue&type=style&index=0&id=014f62f2&lang=scss&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/sections/katalog/second-section.vue?vue&type=style&index=0&id=014f62f2&lang=scss&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.title[data-v-014f62f2] {
  color: #FFF;
  font-family: Rubik;
  font-size: 4rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 1.6px;
  text-transform: uppercase;
  margin-bottom: 21px;
}
.second-section[data-v-014f62f2] {
  display: grid;
  grid-template-columns: 380px 1fr;
  gap: 30px;
  padding-top: 56px;
  padding-bottom: 68px;
  padding-left: 20px;
  padding-right: 20px;
  max-width: 1420px;
  margin: 0 auto;
}
.filters-box[data-v-014f62f2] {
  background-color: #141414;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 15px;
  gap: 10px;
}
.products-box[data-v-014f62f2] {
  display: grid;
  grid-template-columns: repeat(auto-fit, 310px);
  gap: 20px;
}`, "",{"version":3,"sources":["webpack://./src/scss/base/typography.scss","webpack://./second-section.vue","webpack://./src/sections/katalog/second-section.vue"],"names":[],"mappings":"AAAA;EACI,WAAA;EACA,kBAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;EACA,qBAAA;EACA,yBAAA;EACA,mBAAA;ACCJ;ACNA;EACI,aAAA;EACA,gCAAA;EACA,SAAA;EACA,iBAAA;EACA,oBAAA;EACA,kBAAA;EACA,mBAAA;EACA,iBAAA;EACA,cAAA;ADSJ;ACNA;EACI,yBAAA;EACA,+CAAA;EACA,kBAAA;EAEA,aAAA;EACA,sBAAA;EACA,aAAA;EACA,SAAA;ADQJ;ACLA;EACI,aAAA;EACA,8CAAA;EACA,SAAA;ADQJ","sourcesContent":[".title {\n    color: #FFF;\n    font-family: Rubik;\n    font-size: 4rem;\n    font-style: normal;\n    font-weight: 600;\n    line-height: normal;\n    letter-spacing: 1.6px;\n    text-transform: uppercase;\n    margin-bottom: 21px;\n}",".title {\n  color: #FFF;\n  font-family: Rubik;\n  font-size: 4rem;\n  font-style: normal;\n  font-weight: 600;\n  line-height: normal;\n  letter-spacing: 1.6px;\n  text-transform: uppercase;\n  margin-bottom: 21px;\n}\n\n.second-section {\n  display: grid;\n  grid-template-columns: 380px 1fr;\n  gap: 30px;\n  padding-top: 56px;\n  padding-bottom: 68px;\n  padding-left: 20px;\n  padding-right: 20px;\n  max-width: 1420px;\n  margin: 0 auto;\n}\n\n.filters-box {\n  background-color: #141414;\n  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n  padding: 15px;\n  gap: 10px;\n}\n\n.products-box {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 310px);\n  gap: 20px;\n}","\n@import '@/scss/base/mixins.scss';\n@import '@/scss/base/typography.scss';\n\n.second-section {\n    display: grid;\n    grid-template-columns: 380px 1fr;\n    gap: 30px;\n    padding-top: 56px;\n    padding-bottom: 68px;\n    padding-left: 20px;\n    padding-right: 20px;\n    max-width: 1420px;\n    margin: 0 auto;\n}\n\n.filters-box {\n    background-color: #141414;\n    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);\n    border-radius: 5px;\n\n    display: flex;\n    flex-direction: column;\n    padding: 15px;\n    gap: 10px;\n}\n\n.products-box {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, 310px);\n    gap: 20px;\n\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-3!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/components/CustomSelect.vue?vue&type=script&setup=true&lang=ts":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-3!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/components/CustomSelect.vue?vue&type=script&setup=true&lang=ts ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _hooks_App_useAppSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/hooks/App/useAppSettings */ "./src/hooks/App/useAppSettings.ts");
/* harmony import */ var _store_useVuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store/useVuex */ "./src/store/useVuex.ts");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    __name: 'CustomSelect',
    props: {
        title: { type: String, required: true },
        list: { type: Array, required: true },
        multiple: { type: Boolean, required: false },
        labelName: { type: String, required: false },
        valueName: { type: String, required: false },
        chosen: { type: Array, required: true },
        matchingRules: { type: Array, required: false }
    },
    emits: ["update:chosen-add", "update:chosen-delete"],
    setup(__props, { expose: __expose, emit: __emit }) {
        __expose();
        const store = (0,_store_useVuex__WEBPACK_IMPORTED_MODULE_2__.useVuex)();
        const { app } = (0,_hooks_App_useAppSettings__WEBPACK_IMPORTED_MODULE_1__.useAppSettings)(store);
        const { title, list, multiple, labelName, valueName, chosen, matchingRules } = __props;
        const matchedList = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            if (!matchingRules) {
                return list;
            }
            return list.filter(item => {
                let matchingCount = 0;
                for (const rule of matchingRules) {
                    if (rule.value.length == 0) {
                        matchingCount++;
                    }
                    let result = rule.value.find(obj => obj[rule.compareKey] == item[rule.key]);
                    if (rule.type == 'matching' ? result : !result) {
                        matchingCount++;
                    }
                }
                if (matchingCount == matchingRules.length) {
                    return true;
                }
                return false;
            });
        });
        if (matchingRules) {
            console.log(matchingRules);
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(matchedList, () => {
                for (const choice of chosen) {
                    if (!matchedList.value.includes(choice)) {
                        emit('update:chosen-delete', choice);
                    }
                }
            }, { deep: true });
        }
        let isPanelOpen = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
        const emit = __emit;
        const choice = (item) => {
            if (chosen.includes(item)) {
                console.log(item);
                emit('update:chosen-delete', item);
                return;
            }
            emit('update:chosen-add', item);
        };
        const __returned__ = { store, app, matchedList, get isPanelOpen() { return isPanelOpen; }, set isPanelOpen(v) { isPanelOpen = v; }, emit, choice };
        Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
        return __returned__;
    }
}));


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-3!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/components/Product.vue?vue&type=script&setup=true&lang=ts":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-3!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/components/Product.vue?vue&type=script&setup=true&lang=ts ***!
  \***********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    __name: 'Product',
    props: {
        imageSrc: { type: String, required: true },
        name: { type: String, required: true },
        grouped_products: { type: Array, required: true },
        price: { type: [String, Number], required: true }
    },
    setup(__props, { expose: __expose }) {
        __expose();
        const props = __props;
        const necessarySpecsSlugs = [
            'cpu', 'gpu', 'ram'
        ];
        const grouppedProductNames = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            let filteredArray = props.grouped_products.filter(item => item.categories.find(category => necessarySpecsSlugs.includes(category.slug)));
            return filteredArray;
        });
        const productCpu = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => grouppedProductNames.value.find(item => item.categories.find(category => category.slug == 'cpu')));
        const productGpu = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => grouppedProductNames.value.find(item => item.categories.find(category => category.slug == 'gpu')));
        const productRam = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => grouppedProductNames.value.find(item => item.categories.find(category => category.slug == 'ram')));
        const __returned__ = { props, necessarySpecsSlugs, grouppedProductNames, productCpu, productGpu, productRam };
        Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
        return __returned__;
    }
}));


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-3!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/sections/katalog/first-section.vue?vue&type=script&setup=true&lang=ts":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-3!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/sections/katalog/first-section.vue?vue&type=script&setup=true&lang=ts ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _hooks_App_useLoad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/hooks/App/useLoad */ "./src/hooks/App/useLoad.ts");
/* harmony import */ var _hooks_App_usePageSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/hooks/App/usePageSettings */ "./src/hooks/App/usePageSettings.ts");
/* harmony import */ var _store_useVuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store/useVuex */ "./src/store/useVuex.ts");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.mjs");
/* harmony import */ var imagesloaded__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! imagesloaded */ "./node_modules/imagesloaded/imagesloaded.js");
/* harmony import */ var imagesloaded__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(imagesloaded__WEBPACK_IMPORTED_MODULE_4__);







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    __name: 'first-section',
    emits: ["load"],
    setup(__props, { expose: __expose, emit: __emit }) {
        __expose();
        const emit = __emit;
        const route = (0,vue_router__WEBPACK_IMPORTED_MODULE_5__.useRoute)();
        const store = (0,_store_useVuex__WEBPACK_IMPORTED_MODULE_3__.useVuex)();
        let { page } = (0,_hooks_App_usePageSettings__WEBPACK_IMPORTED_MODULE_2__.usePageSettings)(store);
        const settings = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(page.value['first-section-settings']);
        const currentSettings = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => settings.value.find(item => item.category[0].slug == route.params.category));
        // refs
        const box = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
        const image = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
        let { loader } = (0,_hooks_App_useLoad__WEBPACK_IMPORTED_MODULE_1__.useLoad)(1);
        loader.value.onAllisLoaded = () => {
            emit('load');
            loader.value.restart();
        };
        const updateImages = () => {
            imagesloaded__WEBPACK_IMPORTED_MODULE_4___default()(box.value, () => {
                loader.value.load();
            });
        };
        const __returned__ = { emit, route, store, get page() { return page; }, set page(v) { page = v; }, settings, currentSettings, box, image, get loader() { return loader; }, set loader(v) { loader = v; }, updateImages };
        Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
        return __returned__;
    }
}));


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-3!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/sections/katalog/second-section.vue?vue&type=script&setup=true&lang=ts":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-3!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/sections/katalog/second-section.vue?vue&type=script&setup=true&lang=ts ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _components_Product_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Product.vue */ "./src/components/Product.vue");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.mjs");
/* harmony import */ var _components_CustomSelect_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/CustomSelect.vue */ "./src/components/CustomSelect.vue");
/* harmony import */ var _api_Katalog_getProducts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/api/Katalog/getProducts */ "./src/api/Katalog/getProducts.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/helpers */ "./src/helpers.ts");







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    __name: 'second-section',
    setup(__props, { expose: __expose }) {
        __expose();
        const chosenFilters = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({
            producer_cpu: [],
            model_cpu: [],
        });
        const filters = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({
            producer_cpu: [
                {
                    name: 'AMD',
                    label: 'компания AMD'
                },
                {
                    name: 'INTEL',
                    label: 'компания INTEL'
                },
            ],
            model_cpu: [
                {
                    name: 'i5 1155G7',
                    label: 'i5 1155G7',
                    producer: 'INTEL',
                },
                {
                    name: 'i7 1165G7',
                    label: 'i7 1165G7',
                    producer: 'INTEL',
                },
                {
                    name: 'ryzen 5 5600G',
                    label: 'ryzen 5 5600G',
                    producer: 'AMD',
                }
            ],
        });
        const route = (0,vue_router__WEBPACK_IMPORTED_MODULE_5__.useRoute)();
        let isDataLoaded = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
        let products = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeMount)(async () => {
            products.value = await (0,_api_Katalog_getProducts__WEBPACK_IMPORTED_MODULE_3__.getProducts)(4, 16);
            console.log(products.value);
            isDataLoaded.value = true;
        });
        const __returned__ = { chosenFilters, filters, route, get isDataLoaded() { return isDataLoaded; }, set isDataLoaded(v) { isDataLoaded = v; }, get products() { return products; }, set products(v) { products = v; }, Product: _components_Product_vue__WEBPACK_IMPORTED_MODULE_1__["default"], CustomSelect: _components_CustomSelect_vue__WEBPACK_IMPORTED_MODULE_2__["default"], get eliminate() { return _helpers__WEBPACK_IMPORTED_MODULE_4__.eliminate; } };
        Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
        return __returned__;
    }
}));


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-3!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/views/katalog.vue?vue&type=script&setup=true&lang=ts":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-3!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/views/katalog.vue?vue&type=script&setup=true&lang=ts ***!
  \******************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _api_App_getPageSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api/App/getPageSettings */ "./src/api/App/getPageSettings.ts");
/* harmony import */ var _hooks_App_useLoad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/hooks/App/useLoad */ "./src/hooks/App/useLoad.ts");
/* harmony import */ var _hooks_App_usePageSettings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/hooks/App/usePageSettings */ "./src/hooks/App/usePageSettings.ts");
/* harmony import */ var _sections_katalog_first_section_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/sections/katalog/first-section.vue */ "./src/sections/katalog/first-section.vue");
/* harmony import */ var _sections_katalog_second_section_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/sections/katalog/second-section.vue */ "./src/sections/katalog/second-section.vue");
/* harmony import */ var _store_useVuex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/store/useVuex */ "./src/store/useVuex.ts");








/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    __name: 'katalog',
    setup(__props, { expose: __expose }) {
        __expose();
        let isPageDataLoaded = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
        const store = (0,_store_useVuex__WEBPACK_IMPORTED_MODULE_6__.useVuex)();
        let { loader } = (0,_hooks_App_useLoad__WEBPACK_IMPORTED_MODULE_2__.useLoad)(1);
        loader.value.onAllisLoaded = () => {
            preloaderClose();
            loader.value.restart();
        };
        let { page } = (0,_hooks_App_usePageSettings__WEBPACK_IMPORTED_MODULE_3__.usePageSettings)(store);
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(async () => {
            page.value = await (0,_api_App_getPageSettings__WEBPACK_IMPORTED_MODULE_1__.getPageSettings)(190); // katalog post id
            isPageDataLoaded.value = true;
            // preloaderClose();
        });
        const __returned__ = { get isPageDataLoaded() { return isPageDataLoaded; }, set isPageDataLoaded(v) { isPageDataLoaded = v; }, store, get loader() { return loader; }, set loader(v) { loader = v; }, get page() { return page; }, set page(v) { page = v; }, FirstSection: _sections_katalog_first_section_vue__WEBPACK_IMPORTED_MODULE_4__["default"], SecondSection: _sections_katalog_second_section_vue__WEBPACK_IMPORTED_MODULE_5__["default"] };
        Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
        return __returned__;
    }
}));


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-3!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/components/CustomSelect.vue?vue&type=template&id=04350d06&scoped=true&ts=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-3!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/components/CustomSelect.vue?vue&type=template&id=04350d06&scoped=true&ts=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-04350d06"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);
const _hoisted_1 = { class: "select" };
const _hoisted_2 = { class: "select__title" };
const _hoisted_3 = ["src"];
const _hoisted_4 = { class: "select__list" };
const _hoisted_5 = ["onClick"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
            onClick: _cache[0] || (_cache[0] = ($event) => ($setup.isPanelOpen = !$setup.isPanelOpen)),
            class: "select__panel"
        }, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.title), 1 /* TEXT */),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
                src: $setup.app['general_select-icon'],
                alt: "select-icon"
            }, null, 8 /* PROPS */, _hoisted_3)
        ]),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
            class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["select__wrapper", { 'select__wrapper--open': $setup.isPanelOpen }])
        }, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_4, [
                ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.matchedList, (item, index) => {
                    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
                        key: index,
                        class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["select__item", { 'select__item--active': $props.chosen.includes(item) }])
                    }, [
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
                            onClick: ($event) => ($setup.choice(item))
                        }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.labelName ? item[$props.labelName] : item['label']), 9 /* TEXT, PROPS */, _hoisted_5)
                    ], 2 /* CLASS */));
                }), 128 /* KEYED_FRAGMENT */))
            ])
        ], 2 /* CLASS */)
    ]));
}


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-3!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/components/Product.vue?vue&type=template&id=3cf4ef6f&scoped=true&ts=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-3!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/components/Product.vue?vue&type=template&id=3cf4ef6f&scoped=true&ts=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-3cf4ef6f"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);
const _hoisted_1 = { class: "product" };
const _hoisted_2 = ["src", "alt"];
const _hoisted_3 = { class: "product-description" };
const _hoisted_4 = { class: "product-description__name" };
const _hoisted_5 = { class: "product-description-specs" };
const _hoisted_6 = { class: "spec" };
const _hoisted_7 = { class: "spec" };
const _hoisted_8 = { class: "spec" };
const _hoisted_9 = { class: "product__price" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
            class: "product__image",
            src: $props.imageSrc,
            alt: $props.name
        }, null, 8 /* PROPS */, _hoisted_2),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.name), 1 /* TEXT */),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.productCpu ? $setup.productCpu.cfs.shortly_name : 'отсутсвует'), 1 /* TEXT */)
                ]),
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.productGpu ? $setup.productGpu.cfs.shortly_name : 'отсуствует'), 1 /* TEXT */)
                ]),
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.productRam ? $setup.productRam.cfs.shortly_name : 'отсуствует'), 1 /* TEXT */)
                ])
            ])
        ]),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.price) + " RUB", 1 /* TEXT */)
    ]));
}


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-3!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/sections/katalog/first-section.vue?vue&type=template&id=6822fdd2&scoped=true&ts=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-3!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/sections/katalog/first-section.vue?vue&type=template&id=6822fdd2&scoped=true&ts=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-6822fdd2"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);
const _hoisted_1 = { class: "first-section-container container" };
const _hoisted_2 = { class: "image-box" };
const _hoisted_3 = ["src", "alt"];
const _hoisted_4 = { class: "description-box" };
const _hoisted_5 = { class: "description-box__title title" };
const _hoisted_6 = { class: "description-box__text" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
        ref: "box",
        class: "first-section",
        style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({ background: `url('${$setup.currentSettings.background}'), no-repeat center / cover` })
    }, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
                    onLoad: $setup.updateImages,
                    ref: "image",
                    src: $setup.currentSettings.image,
                    alt: $setup.currentSettings.title
                }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_3)
            ]),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.currentSettings.title), 1 /* TEXT */),
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.currentSettings.text), 1 /* TEXT */)
            ])
        ])
    ], 4 /* STYLE */));
}


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-3!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/sections/katalog/second-section.vue?vue&type=template&id=014f62f2&scoped=true&ts=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-3!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/sections/katalog/second-section.vue?vue&type=template&id=014f62f2&scoped=true&ts=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

const _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-014f62f2"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);
const _hoisted_1 = { class: "second-section" };
const _hoisted_2 = { class: "filters-box" };
const _hoisted_3 = { class: "products-box" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["CustomSelect"], {
                "onUpdate:chosenDelete": _cache[0] || (_cache[0] = ($event) => ($setup.eliminate($setup.chosenFilters.producer_cpu, $event))),
                "onUpdate:chosenAdd": _cache[1] || (_cache[1] = ($event) => ($setup.chosenFilters.producer_cpu.push($event))),
                title: 'Производитель процессора',
                list: $setup.filters.producer_cpu,
                chosen: $setup.chosenFilters.producer_cpu
            }, null, 8 /* PROPS */, ["list", "chosen"]),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["CustomSelect"], {
                "onUpdate:chosenDelete": _cache[2] || (_cache[2] = ($event) => ($setup.eliminate($setup.chosenFilters.model_cpu, $event))),
                "onUpdate:chosenAdd": _cache[3] || (_cache[3] = ($event) => ($setup.chosenFilters.model_cpu.push($event))),
                title: 'Модель процессора',
                "matching-rules": [{ key: 'producer', type: 'matching', value: $setup.chosenFilters.producer_cpu, compareKey: 'name' }],
                list: $setup.filters.model_cpu,
                chosen: $setup.chosenFilters.model_cpu
            }, null, 8 /* PROPS */, ["matching-rules", "list", "chosen"])
        ]),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [
            ($setup.isDataLoaded)
                ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, { key: 0 }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.products, (product) => {
                    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["Product"], {
                        key: product.id,
                        "image-src": product.images[0].src,
                        name: product.name,
                        grouped_products: product.grouped_products,
                        price: product.price
                    }, null, 8 /* PROPS */, ["image-src", "name", "grouped_products", "price"]));
                }), 128 /* KEYED_FRAGMENT */))
                : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
        ])
    ]));
}


/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-3!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/views/katalog.vue?vue&type=template&id=d49a1f12&ts=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-3!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/views/katalog.vue?vue&type=template&id=d49a1f12&ts=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
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
            ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["FirstSection"], {
                key: 1,
                onLoad: _cache[0] || (_cache[0] = ($event) => ($setup.loader.load()))
            })),
            ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["SecondSection"], { key: 2 }))
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

/***/ "./src/api/Katalog/getProducts.ts":
/*!****************************************!*\
  !*** ./src/api/Katalog/getProducts.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getProducts: () => (/* binding */ getProducts)
/* harmony export */ });
/* harmony import */ var _axiosWoocomerce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/axiosWoocomerce */ "./src/axiosWoocomerce.ts");

const getProducts = async (per_page, category_id) => {
    let products = [];
    let page = 0;
    while (true) {
        page++;
        if (products.length >= per_page) {
            break;
        }
        let fetchedProducts = await _axiosWoocomerce__WEBPACK_IMPORTED_MODULE_0__["default"].get('products', {
            params: {
                per_page: per_page,
                category: category_id,
                page: page
            }
        });
        if (page > Number(fetchedProducts.headers['x-wp-totalpages'])) {
            break;
        }
        products.push(...fetchedProducts.data);
    }
    return products;
};


/***/ }),

/***/ "./src/axiosWoocomerce.ts":
/*!********************************!*\
  !*** ./src/axiosWoocomerce.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");

const instance = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
    baseURL: 'http://localhost/wp-json/wc/v3/',
    headers: { 'Authorization': 'Basic Y2tfY2EzMjdkNjY1NGUyNjUwOTljNjI3ODYyOWE3ODFmMzQ5ZmIwYmNlYTpjc19hNDQ0NDQyOTZiOTI1ODA2ZjhmMWMzM2I5N2RmNjJiMTA0NzhlM2Q2' }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (instance);


/***/ }),

/***/ "./src/helpers.ts":
/*!************************!*\
  !*** ./src/helpers.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   eliminate: () => (/* binding */ eliminate)
/* harmony export */ });
const eliminate = (array, element) => {
    array.splice(array.indexOf(element), 1);
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
        console.log('all loaded');
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

/***/ "./src/components/CustomSelect.vue":
/*!*****************************************!*\
  !*** ./src/components/CustomSelect.vue ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CustomSelect_vue_vue_type_template_id_04350d06_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomSelect.vue?vue&type=template&id=04350d06&scoped=true&ts=true */ "./src/components/CustomSelect.vue?vue&type=template&id=04350d06&scoped=true&ts=true");
/* harmony import */ var _CustomSelect_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomSelect.vue?vue&type=script&setup=true&lang=ts */ "./src/components/CustomSelect.vue?vue&type=script&setup=true&lang=ts");
/* harmony import */ var _CustomSelect_vue_vue_type_style_index_0_id_04350d06_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CustomSelect.vue?vue&type=style&index=0&id=04350d06&lang=scss&scoped=true */ "./src/components/CustomSelect.vue?vue&type=style&index=0&id=04350d06&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_CustomSelect_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_CustomSelect_vue_vue_type_template_id_04350d06_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-04350d06"],['__file',"src/components/CustomSelect.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/components/Product.vue":
/*!************************************!*\
  !*** ./src/components/Product.vue ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Product_vue_vue_type_template_id_3cf4ef6f_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Product.vue?vue&type=template&id=3cf4ef6f&scoped=true&ts=true */ "./src/components/Product.vue?vue&type=template&id=3cf4ef6f&scoped=true&ts=true");
/* harmony import */ var _Product_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Product.vue?vue&type=script&setup=true&lang=ts */ "./src/components/Product.vue?vue&type=script&setup=true&lang=ts");
/* harmony import */ var _Product_vue_vue_type_style_index_0_id_3cf4ef6f_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Product.vue?vue&type=style&index=0&id=3cf4ef6f&lang=scss&scoped=true */ "./src/components/Product.vue?vue&type=style&index=0&id=3cf4ef6f&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Product_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Product_vue_vue_type_template_id_3cf4ef6f_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-3cf4ef6f"],['__file',"src/components/Product.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/sections/katalog/first-section.vue":
/*!************************************************!*\
  !*** ./src/sections/katalog/first-section.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _first_section_vue_vue_type_template_id_6822fdd2_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./first-section.vue?vue&type=template&id=6822fdd2&scoped=true&ts=true */ "./src/sections/katalog/first-section.vue?vue&type=template&id=6822fdd2&scoped=true&ts=true");
/* harmony import */ var _first_section_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./first-section.vue?vue&type=script&setup=true&lang=ts */ "./src/sections/katalog/first-section.vue?vue&type=script&setup=true&lang=ts");
/* harmony import */ var _first_section_vue_vue_type_style_index_0_id_6822fdd2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./first-section.vue?vue&type=style&index=0&id=6822fdd2&lang=scss&scoped=true */ "./src/sections/katalog/first-section.vue?vue&type=style&index=0&id=6822fdd2&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_first_section_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_first_section_vue_vue_type_template_id_6822fdd2_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-6822fdd2"],['__file',"src/sections/katalog/first-section.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/sections/katalog/second-section.vue":
/*!*************************************************!*\
  !*** ./src/sections/katalog/second-section.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _second_section_vue_vue_type_template_id_014f62f2_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./second-section.vue?vue&type=template&id=014f62f2&scoped=true&ts=true */ "./src/sections/katalog/second-section.vue?vue&type=template&id=014f62f2&scoped=true&ts=true");
/* harmony import */ var _second_section_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./second-section.vue?vue&type=script&setup=true&lang=ts */ "./src/sections/katalog/second-section.vue?vue&type=script&setup=true&lang=ts");
/* harmony import */ var _second_section_vue_vue_type_style_index_0_id_014f62f2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./second-section.vue?vue&type=style&index=0&id=014f62f2&lang=scss&scoped=true */ "./src/sections/katalog/second-section.vue?vue&type=style&index=0&id=014f62f2&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_second_section_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_second_section_vue_vue_type_template_id_014f62f2_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-014f62f2"],['__file',"src/sections/katalog/second-section.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/views/katalog.vue":
/*!*******************************!*\
  !*** ./src/views/katalog.vue ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _katalog_vue_vue_type_template_id_d49a1f12_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./katalog.vue?vue&type=template&id=d49a1f12&ts=true */ "./src/views/katalog.vue?vue&type=template&id=d49a1f12&ts=true");
/* harmony import */ var _katalog_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./katalog.vue?vue&type=script&setup=true&lang=ts */ "./src/views/katalog.vue?vue&type=script&setup=true&lang=ts");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_katalog_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_katalog_vue_vue_type_template_id_d49a1f12_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/views/katalog.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/components/CustomSelect.vue?vue&type=script&setup=true&lang=ts":
/*!****************************************************************************!*\
  !*** ./src/components/CustomSelect.vue?vue&type=script&setup=true&lang=ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_CustomSelect_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_CustomSelect_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/ts-loader/index.js??clonedRuleSet-3!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./CustomSelect.vue?vue&type=script&setup=true&lang=ts */ "./node_modules/ts-loader/index.js??clonedRuleSet-3!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/components/CustomSelect.vue?vue&type=script&setup=true&lang=ts");
 

/***/ }),

/***/ "./src/components/Product.vue?vue&type=script&setup=true&lang=ts":
/*!***********************************************************************!*\
  !*** ./src/components/Product.vue?vue&type=script&setup=true&lang=ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_Product_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_Product_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/ts-loader/index.js??clonedRuleSet-3!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./Product.vue?vue&type=script&setup=true&lang=ts */ "./node_modules/ts-loader/index.js??clonedRuleSet-3!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/components/Product.vue?vue&type=script&setup=true&lang=ts");
 

/***/ }),

/***/ "./src/sections/katalog/first-section.vue?vue&type=script&setup=true&lang=ts":
/*!***********************************************************************************!*\
  !*** ./src/sections/katalog/first-section.vue?vue&type=script&setup=true&lang=ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_first_section_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_first_section_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/ts-loader/index.js??clonedRuleSet-3!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./first-section.vue?vue&type=script&setup=true&lang=ts */ "./node_modules/ts-loader/index.js??clonedRuleSet-3!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/sections/katalog/first-section.vue?vue&type=script&setup=true&lang=ts");
 

/***/ }),

/***/ "./src/sections/katalog/second-section.vue?vue&type=script&setup=true&lang=ts":
/*!************************************************************************************!*\
  !*** ./src/sections/katalog/second-section.vue?vue&type=script&setup=true&lang=ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_second_section_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_second_section_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/ts-loader/index.js??clonedRuleSet-3!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./second-section.vue?vue&type=script&setup=true&lang=ts */ "./node_modules/ts-loader/index.js??clonedRuleSet-3!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/sections/katalog/second-section.vue?vue&type=script&setup=true&lang=ts");
 

/***/ }),

/***/ "./src/views/katalog.vue?vue&type=script&setup=true&lang=ts":
/*!******************************************************************!*\
  !*** ./src/views/katalog.vue?vue&type=script&setup=true&lang=ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_katalog_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_3_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_katalog_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/ts-loader/index.js??clonedRuleSet-3!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./katalog.vue?vue&type=script&setup=true&lang=ts */ "./node_modules/ts-loader/index.js??clonedRuleSet-3!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/views/katalog.vue?vue&type=script&setup=true&lang=ts");
 

/***/ }),

/***/ "./src/components/CustomSelect.vue?vue&type=template&id=04350d06&scoped=true&ts=true":
/*!*******************************************************************************************!*\
  !*** ./src/components/CustomSelect.vue?vue&type=template&id=04350d06&scoped=true&ts=true ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_3_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_CustomSelect_vue_vue_type_template_id_04350d06_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_3_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_CustomSelect_vue_vue_type_template_id_04350d06_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/ts-loader/index.js??clonedRuleSet-3!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./CustomSelect.vue?vue&type=template&id=04350d06&scoped=true&ts=true */ "./node_modules/ts-loader/index.js??clonedRuleSet-3!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/components/CustomSelect.vue?vue&type=template&id=04350d06&scoped=true&ts=true");


/***/ }),

/***/ "./src/components/Product.vue?vue&type=template&id=3cf4ef6f&scoped=true&ts=true":
/*!**************************************************************************************!*\
  !*** ./src/components/Product.vue?vue&type=template&id=3cf4ef6f&scoped=true&ts=true ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_3_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_Product_vue_vue_type_template_id_3cf4ef6f_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_3_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_Product_vue_vue_type_template_id_3cf4ef6f_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/ts-loader/index.js??clonedRuleSet-3!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./Product.vue?vue&type=template&id=3cf4ef6f&scoped=true&ts=true */ "./node_modules/ts-loader/index.js??clonedRuleSet-3!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/components/Product.vue?vue&type=template&id=3cf4ef6f&scoped=true&ts=true");


/***/ }),

/***/ "./src/sections/katalog/first-section.vue?vue&type=template&id=6822fdd2&scoped=true&ts=true":
/*!**************************************************************************************************!*\
  !*** ./src/sections/katalog/first-section.vue?vue&type=template&id=6822fdd2&scoped=true&ts=true ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_3_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_first_section_vue_vue_type_template_id_6822fdd2_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_3_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_first_section_vue_vue_type_template_id_6822fdd2_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/ts-loader/index.js??clonedRuleSet-3!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./first-section.vue?vue&type=template&id=6822fdd2&scoped=true&ts=true */ "./node_modules/ts-loader/index.js??clonedRuleSet-3!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/sections/katalog/first-section.vue?vue&type=template&id=6822fdd2&scoped=true&ts=true");


/***/ }),

/***/ "./src/sections/katalog/second-section.vue?vue&type=template&id=014f62f2&scoped=true&ts=true":
/*!***************************************************************************************************!*\
  !*** ./src/sections/katalog/second-section.vue?vue&type=template&id=014f62f2&scoped=true&ts=true ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_3_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_second_section_vue_vue_type_template_id_014f62f2_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_3_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_second_section_vue_vue_type_template_id_014f62f2_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/ts-loader/index.js??clonedRuleSet-3!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./second-section.vue?vue&type=template&id=014f62f2&scoped=true&ts=true */ "./node_modules/ts-loader/index.js??clonedRuleSet-3!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/sections/katalog/second-section.vue?vue&type=template&id=014f62f2&scoped=true&ts=true");


/***/ }),

/***/ "./src/views/katalog.vue?vue&type=template&id=d49a1f12&ts=true":
/*!*********************************************************************!*\
  !*** ./src/views/katalog.vue?vue&type=template&id=d49a1f12&ts=true ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_3_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_katalog_vue_vue_type_template_id_d49a1f12_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_3_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_katalog_vue_vue_type_template_id_d49a1f12_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/ts-loader/index.js??clonedRuleSet-3!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./katalog.vue?vue&type=template&id=d49a1f12&ts=true */ "./node_modules/ts-loader/index.js??clonedRuleSet-3!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/views/katalog.vue?vue&type=template&id=d49a1f12&ts=true");


/***/ }),

/***/ "./src/components/CustomSelect.vue?vue&type=style&index=0&id=04350d06&lang=scss&scoped=true":
/*!**************************************************************************************************!*\
  !*** ./src/components/CustomSelect.vue?vue&type=style&index=0&id=04350d06&lang=scss&scoped=true ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_CustomSelect_vue_vue_type_style_index_0_id_04350d06_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./CustomSelect.vue?vue&type=style&index=0&id=04350d06&lang=scss&scoped=true */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/components/CustomSelect.vue?vue&type=style&index=0&id=04350d06&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_CustomSelect_vue_vue_type_style_index_0_id_04350d06_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_CustomSelect_vue_vue_type_style_index_0_id_04350d06_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_CustomSelect_vue_vue_type_style_index_0_id_04350d06_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_CustomSelect_vue_vue_type_style_index_0_id_04350d06_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./src/components/Product.vue?vue&type=style&index=0&id=3cf4ef6f&lang=scss&scoped=true":
/*!*********************************************************************************************!*\
  !*** ./src/components/Product.vue?vue&type=style&index=0&id=3cf4ef6f&lang=scss&scoped=true ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_Product_vue_vue_type_style_index_0_id_3cf4ef6f_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./Product.vue?vue&type=style&index=0&id=3cf4ef6f&lang=scss&scoped=true */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/components/Product.vue?vue&type=style&index=0&id=3cf4ef6f&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_Product_vue_vue_type_style_index_0_id_3cf4ef6f_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_Product_vue_vue_type_style_index_0_id_3cf4ef6f_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_Product_vue_vue_type_style_index_0_id_3cf4ef6f_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_Product_vue_vue_type_style_index_0_id_3cf4ef6f_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./src/sections/katalog/first-section.vue?vue&type=style&index=0&id=6822fdd2&lang=scss&scoped=true":
/*!*********************************************************************************************************!*\
  !*** ./src/sections/katalog/first-section.vue?vue&type=style&index=0&id=6822fdd2&lang=scss&scoped=true ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_first_section_vue_vue_type_style_index_0_id_6822fdd2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader/index.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./first-section.vue?vue&type=style&index=0&id=6822fdd2&lang=scss&scoped=true */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/sections/katalog/first-section.vue?vue&type=style&index=0&id=6822fdd2&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_first_section_vue_vue_type_style_index_0_id_6822fdd2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_first_section_vue_vue_type_style_index_0_id_6822fdd2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_first_section_vue_vue_type_style_index_0_id_6822fdd2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_first_section_vue_vue_type_style_index_0_id_6822fdd2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./src/sections/katalog/second-section.vue?vue&type=style&index=0&id=014f62f2&lang=scss&scoped=true":
/*!**********************************************************************************************************!*\
  !*** ./src/sections/katalog/second-section.vue?vue&type=style&index=0&id=014f62f2&lang=scss&scoped=true ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_second_section_vue_vue_type_style_index_0_id_014f62f2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader/index.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./second-section.vue?vue&type=style&index=0&id=014f62f2&lang=scss&scoped=true */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/sections/katalog/second-section.vue?vue&type=style&index=0&id=014f62f2&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_second_section_vue_vue_type_style_index_0_id_014f62f2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_second_section_vue_vue_type_style_index_0_id_014f62f2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_second_section_vue_vue_type_style_index_0_id_014f62f2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_second_section_vue_vue_type_style_index_0_id_014f62f2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/components/CustomSelect.vue?vue&type=style&index=0&id=04350d06&lang=scss&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/components/CustomSelect.vue?vue&type=style&index=0&id=04350d06&lang=scss&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./CustomSelect.vue?vue&type=style&index=0&id=04350d06&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/components/CustomSelect.vue?vue&type=style&index=0&id=04350d06&lang=scss&scoped=true");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("9719c290", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/components/Product.vue?vue&type=style&index=0&id=3cf4ef6f&lang=scss&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/components/Product.vue?vue&type=style&index=0&id=3cf4ef6f&lang=scss&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./Product.vue?vue&type=style&index=0&id=3cf4ef6f&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/components/Product.vue?vue&type=style&index=0&id=3cf4ef6f&lang=scss&scoped=true");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("79db6373", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/sections/katalog/first-section.vue?vue&type=style&index=0&id=6822fdd2&lang=scss&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/sections/katalog/first-section.vue?vue&type=style&index=0&id=6822fdd2&lang=scss&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./first-section.vue?vue&type=style&index=0&id=6822fdd2&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/sections/katalog/first-section.vue?vue&type=style&index=0&id=6822fdd2&lang=scss&scoped=true");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("1a1fb778", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/sections/katalog/second-section.vue?vue&type=style&index=0&id=014f62f2&lang=scss&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/sections/katalog/second-section.vue?vue&type=style&index=0&id=014f62f2&lang=scss&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./second-section.vue?vue&type=style&index=0&id=014f62f2&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/sections/katalog/second-section.vue?vue&type=style&index=0&id=014f62f2&lang=scss&scoped=true");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("286b26fd", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGdLQUFpRjtBQUMzRiwrQ0FBK0M7QUFDL0M7QUFDQSxHQUFHLEtBQVUsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL3NyYy8uL3NyYy9jb21wb25lbnRzL0N1c3RvbVNlbGVjdC52dWU/YjVkZSIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0LnZ1ZT9iMTlhIiwid2VicGFjazovL3NyYy8uL3NyYy9zZWN0aW9ucy9rYXRhbG9nL2ZpcnN0LXNlY3Rpb24udnVlPzNkODAiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL3NlY3Rpb25zL2thdGFsb2cvc2Vjb25kLXNlY3Rpb24udnVlP2Q1ODgiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL2NvbXBvbmVudHMvQ3VzdG9tU2VsZWN0LnZ1ZT9hZDg5Iiwid2VicGFjazovL3NyYy8uL3NyYy9jb21wb25lbnRzL0N1c3RvbVNlbGVjdC52dWUiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdC52dWU/MzYzOSIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0LnZ1ZSIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvc2VjdGlvbnMva2F0YWxvZy9maXJzdC1zZWN0aW9uLnZ1ZT80MTUwIiwid2VicGFjazovL3NyYy8uL3NyYy9zZWN0aW9ucy9rYXRhbG9nL2ZpcnN0LXNlY3Rpb24udnVlIiwid2VicGFjazovL3NyYy8uL3NyYy9zZWN0aW9ucy9rYXRhbG9nL3NlY29uZC1zZWN0aW9uLnZ1ZT85NWVjIiwid2VicGFjazovL3NyYy8uL3NyYy9zZWN0aW9ucy9rYXRhbG9nL3NlY29uZC1zZWN0aW9uLnZ1ZSIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvdmlld3Mva2F0YWxvZy52dWU/ZDM2YyIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvdmlld3Mva2F0YWxvZy52dWUiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL2NvbXBvbmVudHMvQ3VzdG9tU2VsZWN0LnZ1ZT9hNzFiIiwid2VicGFjazovL3NyYy8uL3NyYy9jb21wb25lbnRzL1Byb2R1Y3QudnVlPzU3ZmYiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL3NlY3Rpb25zL2thdGFsb2cvZmlyc3Qtc2VjdGlvbi52dWU/MjY4ZSIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvc2VjdGlvbnMva2F0YWxvZy9zZWNvbmQtc2VjdGlvbi52dWU/Mzk4MCIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvdmlld3Mva2F0YWxvZy52dWU/NDRhNCIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvYXBpL0FwcC9nZXRQYWdlU2V0dGluZ3MudHMiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL2FwaS9LYXRhbG9nL2dldFByb2R1Y3RzLnRzIiwid2VicGFjazovL3NyYy8uL3NyYy9heGlvc1dvb2NvbWVyY2UudHMiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL2hvb2tzL0FwcC91c2VMb2FkLnRzIiwid2VicGFjazovL3NyYy8uL3NyYy9ob29rcy9BcHAvdXNlUGFnZVNldHRpbmdzLnRzIiwid2VicGFjazovL3NyYy8uL3NyYy9jb21wb25lbnRzL0N1c3RvbVNlbGVjdC52dWU/ZmExNCIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0LnZ1ZT9jZWZiIiwid2VicGFjazovL3NyYy8uL3NyYy9zZWN0aW9ucy9rYXRhbG9nL2ZpcnN0LXNlY3Rpb24udnVlPzUwYmYiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL3NlY3Rpb25zL2thdGFsb2cvc2Vjb25kLXNlY3Rpb24udnVlPzJjZWUiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL3ZpZXdzL2thdGFsb2cudnVlPzk1MjgiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL2NvbXBvbmVudHMvQ3VzdG9tU2VsZWN0LnZ1ZT9lMzVjIiwid2VicGFjazovL3NyYy8uL3NyYy9jb21wb25lbnRzL1Byb2R1Y3QudnVlP2MzM2MiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL3NlY3Rpb25zL2thdGFsb2cvZmlyc3Qtc2VjdGlvbi52dWU/YzRiYSIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvc2VjdGlvbnMva2F0YWxvZy9zZWNvbmQtc2VjdGlvbi52dWU/NDg3ZCIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvdmlld3Mva2F0YWxvZy52dWU/N2Q0NyIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvY29tcG9uZW50cy9DdXN0b21TZWxlY3QudnVlPzE4YTciLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdC52dWU/ZTVlYyIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvc2VjdGlvbnMva2F0YWxvZy9maXJzdC1zZWN0aW9uLnZ1ZT9iNTZhIiwid2VicGFjazovL3NyYy8uL3NyYy9zZWN0aW9ucy9rYXRhbG9nL3NlY29uZC1zZWN0aW9uLnZ1ZT9mMzZiIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuc2VsZWN0W2RhdGEtdi0wNDM1MGQwNl0ge1xuICB3aWR0aDogMTAwJTtcbn1cbi5zZWxlY3RfX3BhbmVsW2RhdGEtdi0wNDM1MGQwNl0ge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTZweCAxOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEMwQzBDO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5zZWxlY3RfX3RpdGxlW2RhdGEtdi0wNDM1MGQwNl0ge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjRkZGO1xufVxuLnNlbGVjdF9fbGlzdFtkYXRhLXYtMDQzNTBkMDZdIHtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEwcHg7XG59XG4uc2VsZWN0X19pdGVtW2RhdGEtdi0wNDM1MGQwNl0ge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE0MTQxNDtcbn1cbi5zZWxlY3RfX2l0ZW0gYnV0dG9uW2RhdGEtdi0wNDM1MGQwNl0ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBjb2xvcjogI0ZGRjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLnNlbGVjdF9faXRlbS0tYWN0aXZlW2RhdGEtdi0wNDM1MGQwNl0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzNDM0O1xufVxuLnNlbGVjdF9fd3JhcHBlcltkYXRhLXYtMDQzNTBkMDZdIHtcbiAgaGVpZ2h0OiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgb3BhY2l0eTogMDtcbn1cbi5zZWxlY3RfX3dyYXBwZXItLW9wZW5bZGF0YS12LTA0MzUwZDA2XSB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgb3BhY2l0eTogMTtcbiAgaGVpZ2h0OiB1bnNldDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL0N1c3RvbVNlbGVjdC52dWVcIixcIndlYnBhY2s6Ly8uL0N1c3RvbVNlbGVjdC52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7RUFDSSxXQUFBO0FDQUo7QURFSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFFQSxrQkFBQTtBQ0RSO0FESUk7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNGUjtBREtJO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFFQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FDSlI7QURPSTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUNMUjtBRE9RO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUNMWjtBRFNRO0VBQ0kseUJBQUE7QUNQWjtBRFdJO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUVBLGdCQUFBO0VBRUEsVUFBQTtBQ1hSO0FEYVE7RUFFSSxpQkFBQTtFQUNBLG9CQUFBO0VBRUEsVUFBQTtFQUVBLGFBQUE7QUNkWlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG4uc2VsZWN0IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgICZfX3BhbmVsIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgcGFkZGluZzogMTZweCAxOHB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzBDMEMwQztcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB9XFxuXFxuICAgICZfX3RpdGxlIHtcXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICAgICAgY29sb3I6ICNGRkY7XFxuICAgIH1cXG5cXG4gICAgJl9fbGlzdCB7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgZ2FwOiAxMHB4O1xcbiAgICB9XFxuXFxuICAgICZfX2l0ZW0ge1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxNDE0MTQ7XFxuXFxuICAgICAgICBidXR0b24ge1xcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgICAgICBjb2xvcjogI0ZGRjtcXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICAgICAgfVxcblxcblxcbiAgICAgICAgJi0tYWN0aXZlIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzNDM0O1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICZfX3dyYXBwZXIge1xcbiAgICAgICAgaGVpZ2h0OiAwcHg7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcblxcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG5cXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuXFxuICAgICAgICAmLS1vcGVuIHtcXG5cXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG5cXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xcblxcbiAgICAgICAgICAgIGhlaWdodDogdW5zZXQ7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXCIsXCIuc2VsZWN0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4uc2VsZWN0X19wYW5lbCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDE2cHggMThweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwQzBDMEM7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuLnNlbGVjdF9fdGl0bGUge1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBjb2xvcjogI0ZGRjtcXG59XFxuLnNlbGVjdF9fbGlzdCB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG4uc2VsZWN0X19pdGVtIHtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQxNDE0O1xcbn1cXG4uc2VsZWN0X19pdGVtIGJ1dHRvbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGNvbG9yOiAjRkZGO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcbi5zZWxlY3RfX2l0ZW0tLWFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzNDM0O1xcbn1cXG4uc2VsZWN0X193cmFwcGVyIHtcXG4gIGhlaWdodDogMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBvcGFjaXR5OiAwO1xcbn1cXG4uc2VsZWN0X193cmFwcGVyLS1vcGVuIHtcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICBvcGFjaXR5OiAxO1xcbiAgaGVpZ2h0OiB1bnNldDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAucHJvZHVjdFtkYXRhLXYtM2NmNGVmNmZdIHtcbiAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQxNDE0O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMjBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG4ucHJvZHVjdFtkYXRhLXYtM2NmNGVmNmZdOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCAjZmZmZmZmO1xufVxuLnByb2R1Y3RfX2ltYWdlW2RhdGEtdi0zY2Y0ZWY2Zl0ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb250YWluO1xufVxuLnByb2R1Y3RfX3ByaWNlW2RhdGEtdi0zY2Y0ZWY2Zl0ge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5wcm9kdWN0LWRlc2NyaXB0aW9uW2RhdGEtdi0zY2Y0ZWY2Zl0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cbi5wcm9kdWN0LWRlc2NyaXB0aW9uX19uYW1lW2RhdGEtdi0zY2Y0ZWY2Zl0ge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4ucHJvZHVjdC1kZXNjcmlwdGlvbi1zcGVjc1tkYXRhLXYtM2NmNGVmNmZdIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGdhcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLnNwZWNbZGF0YS12LTNjZjRlZjZmXSB7XG4gIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgcmdiKDUxLCA1MSwgNTEpO1xuICB3aWR0aDogODAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiByZ2IoMjE0LCAyMTMsIDIxMyk7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0LnZ1ZVwiLFwid2VicGFjazovLy4vUHJvZHVjdC52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7RUFDSSwrQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBRUEseUJBQUE7RUFFQSxrQkFBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBRUEsU0FBQTtFQUVBLG9CQUFBO0FDTEo7QURPSTtFQUNJLGVBQUE7RUFDQSw0QkFBQTtBQ0xSO0FEUUk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDTlI7QURTSTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FDUFI7QURXQTtFQUdJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBRUEsV0FBQTtBQ1hKO0FEYUk7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDWFI7QURlQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQ1pKO0FEZUE7RUFDSSx5Q0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBRUEsZ0JBQUE7RUFDQSx5QkFBQTtBQ2JKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbi5wcm9kdWN0IHtcXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAyNXB4O1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQxNDE0O1xcblxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGdhcDogMjBweDtcXG5cXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxuXFxuICAgICY6aG92ZXIge1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggI2ZmZmZmZjtcXG4gICAgfVxcblxcbiAgICAmX19pbWFnZSB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XFxuICAgIH1cXG5cXG4gICAgJl9fcHJpY2Uge1xcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMHB4O1xcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgfVxcbn1cXG5cXG4ucHJvZHVjdC1kZXNjcmlwdGlvbiB7XFxuXFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICAmX19uYW1lIHtcXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgICAgICBmb250LXNpemU6IDIycHg7XFxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgfVxcbn1cXG5cXG4ucHJvZHVjdC1kZXNjcmlwdGlvbi1zcGVjcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuXFxuLnNwZWMge1xcbiAgICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkIHJnYig1MSwgNTEsIDUxKTtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcblxcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBjb2xvcjogcmdiKDIxNCwgMjEzLCAyMTMpO1xcbn1cXG5cIixcIi5wcm9kdWN0IHtcXG4gIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbiAgcGFkZGluZy10b3A6IDE1cHg7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDI1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQxNDE0O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxufVxcbi5wcm9kdWN0OmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4ICNmZmZmZmY7XFxufVxcbi5wcm9kdWN0X19pbWFnZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XFxufVxcbi5wcm9kdWN0X19wcmljZSB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LXdlaWdodDogNTAwcHg7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG5cXG4ucHJvZHVjdC1kZXNjcmlwdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLnByb2R1Y3QtZGVzY3JpcHRpb25fX25hbWUge1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4ucHJvZHVjdC1kZXNjcmlwdGlvbi1zcGVjcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGdhcDogMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuXFxuLnNwZWMge1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCByZ2IoNTEsIDUxLCA1MSk7XFxuICB3aWR0aDogODAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZy1ib3R0b206IDVweDtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBjb2xvcjogcmdiKDIxNCwgMjEzLCAyMTMpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC50aXRsZVtkYXRhLXYtNjgyMmZkZDJdIHtcbiAgY29sb3I6ICNGRkY7XG4gIGZvbnQtZmFtaWx5OiBSdWJpaztcbiAgZm9udC1zaXplOiA0cmVtO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiAxLjZweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luLWJvdHRvbTogMjFweDtcbn1cbi5maXJzdC1zZWN0aW9uW2RhdGEtdi02ODIyZmRkMl0ge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmZpcnN0LXNlY3Rpb24tY29udGFpbmVyW2RhdGEtdi02ODIyZmRkMl0ge1xuICBwYWRkaW5nLXRvcDogMTUwcHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogOGZyIDZmcjtcbiAgZ2FwOiA4MHB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcbi5maXJzdC1zZWN0aW9uLWNvbnRhaW5lcltkYXRhLXYtNjgyMmZkZDJdIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBwYWRkaW5nLXRvcDogOTBweDtcbiAgICBnYXA6IDBweDtcbn1cbn1cbi5pbWFnZS1ib3hbZGF0YS12LTY4MjJmZGQyXSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4uaW1hZ2UtYm94W2RhdGEtdi02ODIyZmRkMl0ge1xuICAgIHRvcDogMTVweDtcbn1cbn1cbi5pbWFnZS1ib3ggaW1nW2RhdGEtdi02ODIyZmRkMl0ge1xuICB3aWR0aDogMTAwJTtcbn1cbi5kZXNjcmlwdGlvbi1ib3hbZGF0YS12LTY4MjJmZGQyXSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcbi5kZXNjcmlwdGlvbi1ib3hbZGF0YS12LTY4MjJmZGQyXSB7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUsIDE1LCAxNSk7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgei1pbmRleDogMTtcbn1cbn1cbi5kZXNjcmlwdGlvbi1ib3hfX3RpdGxlW2RhdGEtdi02ODIyZmRkMl0ge1xuICBtYXJnaW4tYm90dG9tOiAzNXB4O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Njc3MvYmFzZS90eXBvZ3JhcGh5LnNjc3NcIixcIndlYnBhY2s6Ly8uL2ZpcnN0LXNlY3Rpb24udnVlXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2VjdGlvbnMva2F0YWxvZy9maXJzdC1zZWN0aW9uLnZ1ZVwiLFwid2VicGFjazovLy4vc3JjL3Njc3MvYmFzZS9taXhpbnMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUNDSjtBQ05BO0VBQ0ksZ0JBQUE7QURTSjtBQ05BO0VBSUksa0JBQUE7RUFFQSxhQUFBO0VBQ0EsOEJBQUE7RUFRQSxTQUFBO0FERko7QUVSSTtBRExKO0lBVVEsMEJBQUE7SUFDQSxpQkFBQTtJQUNBLFFBQUE7QURPTjtBQUNGO0FDRkE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FES0o7QUVyQkk7QURhSjtJQU1RLFNBQUE7QURNTjtBQUNGO0FDSkk7RUFDSSxXQUFBO0FETVI7QUNEQTtFQUVJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FER0o7QUVuQ0k7QUQ0Qko7SUFPUSxtQkFBQTtJQUNBLGlDQUFBO0lBQ0EsYUFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxVQUFBO0FESU47QUFDRjtBQ0ZJO0VBQ0ksbUJBQUE7QURJUlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIudGl0bGUge1xcbiAgICBjb2xvcjogI0ZGRjtcXG4gICAgZm9udC1mYW1pbHk6IFJ1YmlrO1xcbiAgICBmb250LXNpemU6IDRyZW07XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuNnB4O1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMXB4O1xcbn1cIixcIi50aXRsZSB7XFxuICBjb2xvcjogI0ZGRjtcXG4gIGZvbnQtZmFtaWx5OiBSdWJpaztcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNnB4O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIG1hcmdpbi1ib3R0b206IDIxcHg7XFxufVxcblxcbi5maXJzdC1zZWN0aW9uIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5maXJzdC1zZWN0aW9uLWNvbnRhaW5lciB7XFxuICBwYWRkaW5nLXRvcDogMTUwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA4ZnIgNmZyO1xcbiAgZ2FwOiA4MHB4O1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xcbiAgLmZpcnN0LXNlY3Rpb24tY29udGFpbmVyIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIHBhZGRpbmctdG9wOiA5MHB4O1xcbiAgICBnYXA6IDBweDtcXG4gIH1cXG59XFxuXFxuLmltYWdlLWJveCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDEwcHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcXG4gIC5pbWFnZS1ib3gge1xcbiAgICB0b3A6IDE1cHg7XFxuICB9XFxufVxcbi5pbWFnZS1ib3ggaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24tYm94IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XFxuICAuZGVzY3JpcHRpb24tYm94IHtcXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1LCAxNSwgMTUpO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB6LWluZGV4OiAxO1xcbiAgfVxcbn1cXG4uZGVzY3JpcHRpb24tYm94X190aXRsZSB7XFxuICBtYXJnaW4tYm90dG9tOiAzNXB4O1xcbn1cIixcIlxcbkBpbXBvcnQgJ0Avc2Nzcy9iYXNlL21peGlucy5zY3NzJztcXG5AaW1wb3J0ICdAL3Njc3MvYmFzZS90eXBvZ3JhcGh5LnNjc3MnO1xcblxcbi5maXJzdC1zZWN0aW9uIHtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmZpcnN0LXNlY3Rpb24tY29udGFpbmVyIHtcXG4gICAgLy8gbWF4LXdpZHRoOiAxNjAwcHg7XFxuICAgIC8vIG1hcmdpbjogMCBhdXRvO1xcbiAgICAvLyBwYWRkaW5nOiAwIDQwcHg7XFxuICAgIHBhZGRpbmctdG9wOiAxNTBweDtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA4ZnIgNmZyO1xcblxcbiAgICBAaW5jbHVkZSB0YWJsZSB7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgICAgIHBhZGRpbmctdG9wOiA5MHB4O1xcbiAgICAgICAgZ2FwOiAwcHg7XFxuICAgIH1cXG5cXG4gICAgZ2FwOiA4MHB4O1xcbn1cXG5cXG4uaW1hZ2UtYm94IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDEwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICBAaW5jbHVkZSB0YWJsZSB7XFxuICAgICAgICB0b3A6IDE1cHg7XFxuICAgIH1cXG5cXG4gICAgaW1nIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICB9XFxufVxcblxcbi5kZXNjcmlwdGlvbi1ib3gge1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG5cXG4gICAgQGluY2x1ZGUgdGFibGUge1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNSwgMTUsIDE1KTtcXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgICAgICBwYWRkaW5nLXRvcDogMzBweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgIHotaW5kZXg6IDE7XFxuICAgIH1cXG5cXG4gICAgJl9fdGl0bGUge1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzVweDtcXG4gICAgfVxcblxcbiAgICAmX190ZXh0IHt9XFxufVxcblwiLFwiQG1peGluIHBob25lIHtcXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcXG4gICAgICAgIEBjb250ZW50O1xcbiAgICB9XFxufVxcblxcbkBtaXhpbiBtaW4tdGFibGUge1xcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgICAgICAgQGNvbnRlbnQ7XFxuICAgIH1cXG59XFxuXFxuQG1peGluIHRhYmxlIHtcXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcXG4gICAgICAgIEBjb250ZW50O1xcbiAgICB9XFxufVxcblxcbkBtaXhpbiBsYXB0b3Age1xcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTAwcHgpIHtcXG4gICAgICAgIEBjb250ZW50O1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnRpdGxlW2RhdGEtdi0wMTRmNjJmMl0ge1xuICBjb2xvcjogI0ZGRjtcbiAgZm9udC1mYW1pbHk6IFJ1YmlrO1xuICBmb250LXNpemU6IDRyZW07XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW4tYm90dG9tOiAyMXB4O1xufVxuLnNlY29uZC1zZWN0aW9uW2RhdGEtdi0wMTRmNjJmMl0ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDM4MHB4IDFmcjtcbiAgZ2FwOiAzMHB4O1xuICBwYWRkaW5nLXRvcDogNTZweDtcbiAgcGFkZGluZy1ib3R0b206IDY4cHg7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgbWF4LXdpZHRoOiAxNDIwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLmZpbHRlcnMtYm94W2RhdGEtdi0wMTRmNjJmMl0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQxNDE0O1xuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAxNXB4O1xuICBnYXA6IDEwcHg7XG59XG4ucHJvZHVjdHMtYm94W2RhdGEtdi0wMTRmNjJmMl0ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgMzEwcHgpO1xuICBnYXA6IDIwcHg7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9iYXNlL3R5cG9ncmFwaHkuc2Nzc1wiLFwid2VicGFjazovLy4vc2Vjb25kLXNlY3Rpb24udnVlXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2VjdGlvbnMva2F0YWxvZy9zZWNvbmQtc2VjdGlvbi52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FDQ0o7QUNOQTtFQUNJLGFBQUE7RUFDQSxnQ0FBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBRFNKO0FDTkE7RUFDSSx5QkFBQTtFQUNBLCtDQUFBO0VBQ0Esa0JBQUE7RUFFQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtBRFFKO0FDTEE7RUFDSSxhQUFBO0VBQ0EsOENBQUE7RUFDQSxTQUFBO0FEUUpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnRpdGxlIHtcXG4gICAgY29sb3I6ICNGRkY7XFxuICAgIGZvbnQtZmFtaWx5OiBSdWJpaztcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxLjZweDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjFweDtcXG59XCIsXCIudGl0bGUge1xcbiAgY29sb3I6ICNGRkY7XFxuICBmb250LWZhbWlseTogUnViaWs7XFxuICBmb250LXNpemU6IDRyZW07XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG4gIGxldHRlci1zcGFjaW5nOiAxLjZweDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBtYXJnaW4tYm90dG9tOiAyMXB4O1xcbn1cXG5cXG4uc2Vjb25kLXNlY3Rpb24ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzgwcHggMWZyO1xcbiAgZ2FwOiAzMHB4O1xcbiAgcGFkZGluZy10b3A6IDU2cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogNjhweDtcXG4gIHBhZGRpbmctbGVmdDogMjBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxuICBtYXgtd2lkdGg6IDE0MjBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4uZmlsdGVycy1ib3gge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE0MTQxNDtcXG4gIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ucHJvZHVjdHMtYm94IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgMzEwcHgpO1xcbiAgZ2FwOiAyMHB4O1xcbn1cIixcIlxcbkBpbXBvcnQgJ0Avc2Nzcy9iYXNlL21peGlucy5zY3NzJztcXG5AaW1wb3J0ICdAL3Njc3MvYmFzZS90eXBvZ3JhcGh5LnNjc3MnO1xcblxcbi5zZWNvbmQtc2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzgwcHggMWZyO1xcbiAgICBnYXA6IDMwcHg7XFxuICAgIHBhZGRpbmctdG9wOiA1NnB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNjhweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbiAgICBtYXgtd2lkdGg6IDE0MjBweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi5maWx0ZXJzLWJveCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNDE0MTQ7XFxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLnByb2R1Y3RzLWJveCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCAzMTBweCk7XFxuICAgIGdhcDogMjBweDtcXG5cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsImltcG9ydCB7IGRlZmluZUNvbXBvbmVudCBhcyBfZGVmaW5lQ29tcG9uZW50IH0gZnJvbSAndnVlJ1xuaW1wb3J0IHsgdXNlQXBwU2V0dGluZ3MgfSBmcm9tICdAL2hvb2tzL0FwcC91c2VBcHBTZXR0aW5ncyc7XG5pbXBvcnQgeyB1c2VWdWV4IH0gZnJvbSAnQC9zdG9yZS91c2VWdWV4JztcbmltcG9ydCB7IElNYXRjaGluZ1J1bGUsIFR5cGVNYXRjaGluZyB9IGZyb20gJ0AvdHlwZXMvS2F0YWxvZyc7XG5pbXBvcnQgeyBSZWYsIGNvbXB1dGVkLCByZWYsIHdhdGNoIH0gZnJvbSAndnVlJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIGxpc3Q6IEFycmF5PE9iamVjdD47XG4gICAgbXVsdGlwbGU/OiBib29sZWFuO1xuICAgIGxhYmVsTmFtZT86IHN0cmluZztcbiAgICB2YWx1ZU5hbWU/OiBzdHJpbmc7XG4gICAgY2hvc2VuOiBBcnJheTxPYmplY3Q+O1xuICAgIG1hdGNoaW5nUnVsZXM/OiBBcnJheTxJTWF0Y2hpbmdSdWxlPlxufVxuXG5pbnRlcmZhY2UgRW1pdHMge1xuICAgIChlOiAndXBkYXRlOmNob3Nlbi1hZGQnLCBpdGVtOiBvYmplY3QpOiB2b2lkXG4gICAgKGU6ICd1cGRhdGU6Y2hvc2VuLWRlbGV0ZScsIGl0ZW06IG9iamVjdCk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgLyojX19QVVJFX18qL19kZWZpbmVDb21wb25lbnQoe1xuICBfX25hbWU6ICdDdXN0b21TZWxlY3QnLFxuICBwcm9wczoge1xuICAgIHRpdGxlOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcbiAgICBsaXN0OiB7IHR5cGU6IEFycmF5LCByZXF1aXJlZDogdHJ1ZSB9LFxuICAgIG11bHRpcGxlOiB7IHR5cGU6IEJvb2xlYW4sIHJlcXVpcmVkOiBmYWxzZSB9LFxuICAgIGxhYmVsTmFtZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiBmYWxzZSB9LFxuICAgIHZhbHVlTmFtZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiBmYWxzZSB9LFxuICAgIGNob3NlbjogeyB0eXBlOiBBcnJheSwgcmVxdWlyZWQ6IHRydWUgfSxcbiAgICBtYXRjaGluZ1J1bGVzOiB7IHR5cGU6IEFycmF5LCByZXF1aXJlZDogZmFsc2UgfVxuICB9LFxuICBlbWl0czogW1widXBkYXRlOmNob3Nlbi1hZGRcIiwgXCJ1cGRhdGU6Y2hvc2VuLWRlbGV0ZVwiXSxcbiAgc2V0dXAoX19wcm9wczogYW55LCB7IGV4cG9zZTogX19leHBvc2UsIGVtaXQ6IF9fZW1pdCB9KSB7XG4gIF9fZXhwb3NlKCk7XG5cbmNvbnN0IHN0b3JlID0gdXNlVnVleCgpXG5cbmNvbnN0IHsgYXBwIH0gPSB1c2VBcHBTZXR0aW5ncyhzdG9yZSlcblxuY29uc3QgeyB0aXRsZSwgbGlzdCwgbXVsdGlwbGUsIGxhYmVsTmFtZSwgdmFsdWVOYW1lLCBjaG9zZW4sIG1hdGNoaW5nUnVsZXMgfSA9IF9fcHJvcHNcblxuY29uc3QgbWF0Y2hlZExpc3QgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgaWYgKCFtYXRjaGluZ1J1bGVzKSB7XG4gICAgICAgIHJldHVybiBsaXN0XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpc3QuZmlsdGVyKGl0ZW0gPT4ge1xuICAgICAgICBsZXQgbWF0Y2hpbmdDb3VudCA9IDBcbiAgICAgICAgZm9yIChjb25zdCBydWxlIG9mIG1hdGNoaW5nUnVsZXMpIHtcbiAgICAgICAgICAgIGlmIChydWxlLnZhbHVlLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgbWF0Y2hpbmdDb3VudCsrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gcnVsZS52YWx1ZS5maW5kKG9iaiA9PiBvYmpbcnVsZS5jb21wYXJlS2V5XSA9PSBpdGVtW3J1bGUua2V5XSlcbiAgICAgICAgICAgIGlmIChydWxlLnR5cGUgPT0gJ21hdGNoaW5nJyA/IHJlc3VsdCA6ICFyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBtYXRjaGluZ0NvdW50Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1hdGNoaW5nQ291bnQgPT0gbWF0Y2hpbmdSdWxlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSlcbn0pXG5cblxuaWYgKG1hdGNoaW5nUnVsZXMpIHtcbiAgICBjb25zb2xlLmxvZyhtYXRjaGluZ1J1bGVzKVxuICAgIHdhdGNoKG1hdGNoZWRMaXN0LCAoKSA9PiB7XG4gICAgICAgIGZvciAoY29uc3QgY2hvaWNlIG9mIGNob3Nlbikge1xuICAgICAgICAgICAgaWYgKCFtYXRjaGVkTGlzdC52YWx1ZS5pbmNsdWRlcyhjaG9pY2UpKSB7XG4gICAgICAgICAgICAgICAgZW1pdCgndXBkYXRlOmNob3Nlbi1kZWxldGUnLCBjaG9pY2UpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7IGRlZXA6IHRydWUgfSlcbn1cblxuXG5cblxubGV0IGlzUGFuZWxPcGVuOiBSZWY8Ym9vbGVhbj4gPSByZWYoZmFsc2UpXG5cblxuY29uc3QgZW1pdCA9IF9fZW1pdFxuXG5jb25zdCBjaG9pY2UgPSAoaXRlbTogb2JqZWN0KSA9PiB7XG4gICAgaWYgKGNob3Nlbi5pbmNsdWRlcyhpdGVtKSkge1xuICAgICAgICBjb25zb2xlLmxvZyhpdGVtKVxuICAgICAgICBlbWl0KCd1cGRhdGU6Y2hvc2VuLWRlbGV0ZScsIGl0ZW0pXG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZW1pdCgndXBkYXRlOmNob3Nlbi1hZGQnLCBpdGVtKVxufVxuXG5cbmNvbnN0IF9fcmV0dXJuZWRfXyA9IHsgc3RvcmUsIGFwcCwgbWF0Y2hlZExpc3QsIGdldCBpc1BhbmVsT3BlbigpIHsgcmV0dXJuIGlzUGFuZWxPcGVuIH0sIHNldCBpc1BhbmVsT3Blbih2KSB7IGlzUGFuZWxPcGVuID0gdiB9LCBlbWl0LCBjaG9pY2UgfVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KF9fcmV0dXJuZWRfXywgJ19faXNTY3JpcHRTZXR1cCcsIHsgZW51bWVyYWJsZTogZmFsc2UsIHZhbHVlOiB0cnVlIH0pXG5yZXR1cm4gX19yZXR1cm5lZF9fXG59XG5cbn0pIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJzZWxlY3RcIj5cbiAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJpc1BhbmVsT3BlbiA9ICFpc1BhbmVsT3BlblwiIGNsYXNzPVwic2VsZWN0X19wYW5lbFwiPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJzZWxlY3RfX3RpdGxlXCI+e3sgdGl0bGUgfX08L3A+XG4gICAgICAgICAgICA8aW1nIDpzcmM9XCJhcHBbJ2dlbmVyYWxfc2VsZWN0LWljb24nXVwiIGFsdD1cInNlbGVjdC1pY29uXCI+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8ZGl2IGNsYXNzPVwic2VsZWN0X193cmFwcGVyXCIgOmNsYXNzPVwieyAnc2VsZWN0X193cmFwcGVyLS1vcGVuJzogaXNQYW5lbE9wZW4gfVwiPlxuICAgICAgICAgICAgPHVsIGNsYXNzPVwic2VsZWN0X19saXN0XCI+XG4gICAgICAgICAgICAgICAgPGxpIHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBtYXRjaGVkTGlzdFwiIDprZXk9XCJpbmRleFwiIGNsYXNzPVwic2VsZWN0X19pdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieyAnc2VsZWN0X19pdGVtLS1hY3RpdmUnOiBjaG9zZW4uaW5jbHVkZXMoaXRlbSkgfVwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIEBjbGljaz1cImNob2ljZShpdGVtKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3sgbGFiZWxOYW1lID8gaXRlbVtsYWJlbE5hbWVdIDogaXRlbVsnbGFiZWwnXSB9fVxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgdXNlQXBwU2V0dGluZ3MgfSBmcm9tICdAL2hvb2tzL0FwcC91c2VBcHBTZXR0aW5ncyc7XG5pbXBvcnQgeyB1c2VWdWV4IH0gZnJvbSAnQC9zdG9yZS91c2VWdWV4JztcbmltcG9ydCB7IElNYXRjaGluZ1J1bGUsIFR5cGVNYXRjaGluZyB9IGZyb20gJ0AvdHlwZXMvS2F0YWxvZyc7XG5pbXBvcnQgeyBSZWYsIGNvbXB1dGVkLCByZWYsIHdhdGNoIH0gZnJvbSAndnVlJztcblxuY29uc3Qgc3RvcmUgPSB1c2VWdWV4KClcblxuY29uc3QgeyBhcHAgfSA9IHVzZUFwcFNldHRpbmdzKHN0b3JlKVxuXG5pbnRlcmZhY2UgUHJvcHMge1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgbGlzdDogQXJyYXk8T2JqZWN0PjtcbiAgICBtdWx0aXBsZT86IGJvb2xlYW47XG4gICAgbGFiZWxOYW1lPzogc3RyaW5nO1xuICAgIHZhbHVlTmFtZT86IHN0cmluZztcbiAgICBjaG9zZW46IEFycmF5PE9iamVjdD47XG4gICAgbWF0Y2hpbmdSdWxlcz86IEFycmF5PElNYXRjaGluZ1J1bGU+XG59XG5cbmNvbnN0IHsgdGl0bGUsIGxpc3QsIG11bHRpcGxlLCBsYWJlbE5hbWUsIHZhbHVlTmFtZSwgY2hvc2VuLCBtYXRjaGluZ1J1bGVzIH0gPSBkZWZpbmVQcm9wczxQcm9wcz4oKVxuXG5jb25zdCBtYXRjaGVkTGlzdCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBpZiAoIW1hdGNoaW5nUnVsZXMpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RcbiAgICB9XG5cbiAgICByZXR1cm4gbGlzdC5maWx0ZXIoaXRlbSA9PiB7XG4gICAgICAgIGxldCBtYXRjaGluZ0NvdW50ID0gMFxuICAgICAgICBmb3IgKGNvbnN0IHJ1bGUgb2YgbWF0Y2hpbmdSdWxlcykge1xuICAgICAgICAgICAgaWYgKHJ1bGUudmFsdWUubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICBtYXRjaGluZ0NvdW50KytcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBydWxlLnZhbHVlLmZpbmQob2JqID0+IG9ialtydWxlLmNvbXBhcmVLZXldID09IGl0ZW1bcnVsZS5rZXldKVxuICAgICAgICAgICAgaWYgKHJ1bGUudHlwZSA9PSAnbWF0Y2hpbmcnID8gcmVzdWx0IDogIXJlc3VsdCkge1xuICAgICAgICAgICAgICAgIG1hdGNoaW5nQ291bnQrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobWF0Y2hpbmdDb3VudCA9PSBtYXRjaGluZ1J1bGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KVxufSlcblxuXG5pZiAobWF0Y2hpbmdSdWxlcykge1xuICAgIGNvbnNvbGUubG9nKG1hdGNoaW5nUnVsZXMpXG4gICAgd2F0Y2gobWF0Y2hlZExpc3QsICgpID0+IHtcbiAgICAgICAgZm9yIChjb25zdCBjaG9pY2Ugb2YgY2hvc2VuKSB7XG4gICAgICAgICAgICBpZiAoIW1hdGNoZWRMaXN0LnZhbHVlLmluY2x1ZGVzKGNob2ljZSkpIHtcbiAgICAgICAgICAgICAgICBlbWl0KCd1cGRhdGU6Y2hvc2VuLWRlbGV0ZScsIGNob2ljZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHsgZGVlcDogdHJ1ZSB9KVxufVxuXG5cblxuXG5sZXQgaXNQYW5lbE9wZW46IFJlZjxib29sZWFuPiA9IHJlZihmYWxzZSlcblxuXG5pbnRlcmZhY2UgRW1pdHMge1xuICAgIChlOiAndXBkYXRlOmNob3Nlbi1hZGQnLCBpdGVtOiBvYmplY3QpOiB2b2lkXG4gICAgKGU6ICd1cGRhdGU6Y2hvc2VuLWRlbGV0ZScsIGl0ZW06IG9iamVjdCk6IHZvaWRcbn1cbmNvbnN0IGVtaXQgPSBkZWZpbmVFbWl0czxFbWl0cz4oKVxuXG5jb25zdCBjaG9pY2UgPSAoaXRlbTogb2JqZWN0KSA9PiB7XG4gICAgaWYgKGNob3Nlbi5pbmNsdWRlcyhpdGVtKSkge1xuICAgICAgICBjb25zb2xlLmxvZyhpdGVtKVxuICAgICAgICBlbWl0KCd1cGRhdGU6Y2hvc2VuLWRlbGV0ZScsIGl0ZW0pXG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZW1pdCgndXBkYXRlOmNob3Nlbi1hZGQnLCBpdGVtKVxufVxuXG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxuLnNlbGVjdCB7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICAmX19wYW5lbCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiAxNnB4IDE4cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwQzBDMEM7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgfVxuXG4gICAgJl9fdGl0bGUge1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGNvbG9yOiAjRkZGO1xuICAgIH1cblxuICAgICZfX2xpc3Qge1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG5cbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgZ2FwOiAxMHB4O1xuICAgIH1cblxuICAgICZfX2l0ZW0ge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE0MTQxNDtcblxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBjb2xvcjogI0ZGRjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB9XG5cblxuICAgICAgICAmLS1hY3RpdmUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM0MzQzNDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICZfX3dyYXBwZXIge1xuICAgICAgICBoZWlnaHQ6IDBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAgICAgb3BhY2l0eTogMDtcblxuICAgICAgICAmLS1vcGVuIHtcblxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcblxuICAgICAgICAgICAgb3BhY2l0eTogMTtcblxuICAgICAgICAgICAgaGVpZ2h0OiB1bnNldDtcbiAgICAgICAgfVxuICAgIH1cbn1cbjwvc3R5bGU+IiwiaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IGFzIF9kZWZpbmVDb21wb25lbnQgfSBmcm9tICd2dWUnXG5pbXBvcnQgeyBJUHJvZHVjdCB9IGZyb20gJ0AvdHlwZXMvUHJvZHVjdCc7XG5pbXBvcnQgeyBjb21wdXRlZCB9IGZyb20gJ3Z1ZSc7XG5cblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgICBpbWFnZVNyYzogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBncm91cGVkX3Byb2R1Y3RzOiBJUHJvZHVjdFtdO1xuICAgIHByaWNlOiBzdHJpbmcgfCBudW1iZXI7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgLyojX19QVVJFX18qL19kZWZpbmVDb21wb25lbnQoe1xuICBfX25hbWU6ICdQcm9kdWN0JyxcbiAgcHJvcHM6IHtcbiAgICBpbWFnZVNyYzogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG4gICAgbmFtZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG4gICAgZ3JvdXBlZF9wcm9kdWN0czogeyB0eXBlOiBBcnJheSwgcmVxdWlyZWQ6IHRydWUgfSxcbiAgICBwcmljZTogeyB0eXBlOiBbU3RyaW5nLCBOdW1iZXJdLCByZXF1aXJlZDogdHJ1ZSB9XG4gIH0sXG4gIHNldHVwKF9fcHJvcHM6IGFueSwgeyBleHBvc2U6IF9fZXhwb3NlIH0pIHtcbiAgX19leHBvc2UoKTtcblxuY29uc3QgcHJvcHMgPSBfX3Byb3BzXG5cbmNvbnN0IG5lY2Vzc2FyeVNwZWNzU2x1Z3MgPSBbXG4gICAgJ2NwdScsICdncHUnLCAncmFtJ1xuXVxuY29uc3QgZ3JvdXBwZWRQcm9kdWN0TmFtZXMgPSBjb21wdXRlZCgoKSA9PiB7XG5cbiAgICBsZXQgZmlsdGVyZWRBcnJheSA9IHByb3BzLmdyb3VwZWRfcHJvZHVjdHMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5jYXRlZ29yaWVzLmZpbmQoY2F0ZWdvcnkgPT4gbmVjZXNzYXJ5U3BlY3NTbHVncy5pbmNsdWRlcyhjYXRlZ29yeS5zbHVnKSkpXG5cbiAgICByZXR1cm4gZmlsdGVyZWRBcnJheVxufSlcblxuY29uc3QgcHJvZHVjdENwdSA9IGNvbXB1dGVkKCgpID0+IGdyb3VwcGVkUHJvZHVjdE5hbWVzLnZhbHVlLmZpbmQoaXRlbSA9PiBpdGVtLmNhdGVnb3JpZXMuZmluZChjYXRlZ29yeSA9PiBjYXRlZ29yeS5zbHVnID09ICdjcHUnKSkpXG5cbmNvbnN0IHByb2R1Y3RHcHUgPSBjb21wdXRlZCgoKSA9PiBncm91cHBlZFByb2R1Y3ROYW1lcy52YWx1ZS5maW5kKGl0ZW0gPT4gaXRlbS5jYXRlZ29yaWVzLmZpbmQoY2F0ZWdvcnkgPT4gY2F0ZWdvcnkuc2x1ZyA9PSAnZ3B1JykpKVxuXG5jb25zdCBwcm9kdWN0UmFtID0gY29tcHV0ZWQoKCkgPT4gZ3JvdXBwZWRQcm9kdWN0TmFtZXMudmFsdWUuZmluZChpdGVtID0+IGl0ZW0uY2F0ZWdvcmllcy5maW5kKGNhdGVnb3J5ID0+IGNhdGVnb3J5LnNsdWcgPT0gJ3JhbScpKSlcblxuXG5jb25zdCBfX3JldHVybmVkX18gPSB7IHByb3BzLCBuZWNlc3NhcnlTcGVjc1NsdWdzLCBncm91cHBlZFByb2R1Y3ROYW1lcywgcHJvZHVjdENwdSwgcHJvZHVjdEdwdSwgcHJvZHVjdFJhbSB9XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoX19yZXR1cm5lZF9fLCAnX19pc1NjcmlwdFNldHVwJywgeyBlbnVtZXJhYmxlOiBmYWxzZSwgdmFsdWU6IHRydWUgfSlcbnJldHVybiBfX3JldHVybmVkX19cbn1cblxufSkiLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cInByb2R1Y3RcIj5cbiAgICAgICAgPGltZyBjbGFzcz1cInByb2R1Y3RfX2ltYWdlXCIgOnNyYz1cImltYWdlU3JjXCIgOmFsdD1cIm5hbWVcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3QtZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwicHJvZHVjdC1kZXNjcmlwdGlvbl9fbmFtZVwiPnt7IG5hbWUgfX08L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdC1kZXNjcmlwdGlvbi1zcGVjc1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzcGVjXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwPnt7IHByb2R1Y3RDcHUgPyBwcm9kdWN0Q3B1LmNmcy5zaG9ydGx5X25hbWUgOiAn0L7RgtGB0YPRgtGB0LLRg9C10YInIH19PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzcGVjXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwPnt7IHByb2R1Y3RHcHUgPyBwcm9kdWN0R3B1LmNmcy5zaG9ydGx5X25hbWUgOiAn0L7RgtGB0YPRgdGC0LLRg9C10YInIH19PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzcGVjXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwPnt7IHByb2R1Y3RSYW0gPyBwcm9kdWN0UmFtLmNmcy5zaG9ydGx5X25hbWUgOiAn0L7RgtGB0YPRgdGC0LLRg9C10YInIH19PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8cCBjbGFzcz1cInByb2R1Y3RfX3ByaWNlXCI+e3sgcHJpY2UgfX0gUlVCPC9wPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IElQcm9kdWN0IH0gZnJvbSAnQC90eXBlcy9Qcm9kdWN0JztcbmltcG9ydCB7IGNvbXB1dGVkIH0gZnJvbSAndnVlJztcblxuXG5pbnRlcmZhY2UgUHJvcHMge1xuICAgIGltYWdlU3JjOiBzdHJpbmc7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGdyb3VwZWRfcHJvZHVjdHM6IElQcm9kdWN0W107XG4gICAgcHJpY2U6IHN0cmluZyB8IG51bWJlcjtcbn1cblxuY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wczxQcm9wcz4oKVxuXG5jb25zdCBuZWNlc3NhcnlTcGVjc1NsdWdzID0gW1xuICAgICdjcHUnLCAnZ3B1JywgJ3JhbSdcbl1cbmNvbnN0IGdyb3VwcGVkUHJvZHVjdE5hbWVzID0gY29tcHV0ZWQoKCkgPT4ge1xuXG4gICAgbGV0IGZpbHRlcmVkQXJyYXkgPSBwcm9wcy5ncm91cGVkX3Byb2R1Y3RzLmZpbHRlcihpdGVtID0+IGl0ZW0uY2F0ZWdvcmllcy5maW5kKGNhdGVnb3J5ID0+IG5lY2Vzc2FyeVNwZWNzU2x1Z3MuaW5jbHVkZXMoY2F0ZWdvcnkuc2x1ZykpKVxuXG4gICAgcmV0dXJuIGZpbHRlcmVkQXJyYXlcbn0pXG5cbmNvbnN0IHByb2R1Y3RDcHUgPSBjb21wdXRlZCgoKSA9PiBncm91cHBlZFByb2R1Y3ROYW1lcy52YWx1ZS5maW5kKGl0ZW0gPT4gaXRlbS5jYXRlZ29yaWVzLmZpbmQoY2F0ZWdvcnkgPT4gY2F0ZWdvcnkuc2x1ZyA9PSAnY3B1JykpKVxuXG5jb25zdCBwcm9kdWN0R3B1ID0gY29tcHV0ZWQoKCkgPT4gZ3JvdXBwZWRQcm9kdWN0TmFtZXMudmFsdWUuZmluZChpdGVtID0+IGl0ZW0uY2F0ZWdvcmllcy5maW5kKGNhdGVnb3J5ID0+IGNhdGVnb3J5LnNsdWcgPT0gJ2dwdScpKSlcblxuY29uc3QgcHJvZHVjdFJhbSA9IGNvbXB1dGVkKCgpID0+IGdyb3VwcGVkUHJvZHVjdE5hbWVzLnZhbHVlLmZpbmQoaXRlbSA9PiBpdGVtLmNhdGVnb3JpZXMuZmluZChjYXRlZ29yeSA9PiBjYXRlZ29yeS5zbHVnID09ICdyYW0nKSkpXG5cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XG4ucHJvZHVjdCB7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDI1cHg7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQxNDE0O1xuXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBnYXA6IDIwcHg7XG5cbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcblxuICAgICY6aG92ZXIge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4ICNmZmZmZmY7XG4gICAgfVxuXG4gICAgJl9faW1hZ2Uge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgIH1cblxuICAgICZfX3ByaWNlIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwcHg7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgfVxufVxuXG4ucHJvZHVjdC1kZXNjcmlwdGlvbiB7XG5cblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICAmX19uYW1lIHtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIH1cbn1cblxuLnByb2R1Y3QtZGVzY3JpcHRpb24tc3BlY3Mge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGdhcDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5zcGVjIHtcbiAgICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkIHJnYig1MSwgNTEsIDUxKTtcbiAgICB3aWR0aDogODAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBjb2xvcjogcmdiKDIxNCwgMjEzLCAyMTMpO1xufVxuPC9zdHlsZT4iLCJpbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgYXMgX2RlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSdcbmltcG9ydCB7IHVzZUxvYWQgfSBmcm9tICdAL2hvb2tzL0FwcC91c2VMb2FkJztcbmltcG9ydCB7IHVzZVBhZ2VTZXR0aW5ncyB9IGZyb20gJ0AvaG9va3MvQXBwL3VzZVBhZ2VTZXR0aW5ncyc7XG5pbXBvcnQgeyB1c2VWdWV4IH0gZnJvbSAnQC9zdG9yZS91c2VWdWV4JztcbmltcG9ydCB7IElGaXJzdFNlY3Rpb25TZXR0aW5ncyB9IGZyb20gJ0AvdHlwZXMvS2F0YWxvZyc7XG5pbXBvcnQgeyBSZWYsIGNvbXB1dGVkLCBvblVwZGF0ZWQsIHJlZiwgd2F0Y2ggfSBmcm9tICd2dWUnO1xuaW1wb3J0IHsgdXNlUm91dGUgfSBmcm9tICd2dWUtcm91dGVyJztcbmltcG9ydCBpbWFnZXNMb2FkZWQgZnJvbSAnaW1hZ2VzbG9hZGVkJztcblxuXG5leHBvcnQgZGVmYXVsdCAvKiNfX1BVUkVfXyovX2RlZmluZUNvbXBvbmVudCh7XG4gIF9fbmFtZTogJ2ZpcnN0LXNlY3Rpb24nLFxuICBlbWl0czogW1wibG9hZFwiXSxcbiAgc2V0dXAoX19wcm9wcywgeyBleHBvc2U6IF9fZXhwb3NlLCBlbWl0OiBfX2VtaXQgfSkge1xuICBfX2V4cG9zZSgpO1xuXG5cbmNvbnN0IGVtaXQgPSBfX2VtaXRcblxuY29uc3Qgcm91dGUgPSB1c2VSb3V0ZSgpO1xuXG5jb25zdCBzdG9yZSA9IHVzZVZ1ZXgoKVxuXG5sZXQgeyBwYWdlIH0gPSB1c2VQYWdlU2V0dGluZ3Moc3RvcmUpXG5cbmNvbnN0IHNldHRpbmdzID0gcmVmKHBhZ2UudmFsdWVbJ2ZpcnN0LXNlY3Rpb24tc2V0dGluZ3MnXSkgYXMgUmVmPElGaXJzdFNlY3Rpb25TZXR0aW5nc1tdPlxuXG5jb25zdCBjdXJyZW50U2V0dGluZ3MgPSBjb21wdXRlZCgoKSA9PiBzZXR0aW5ncy52YWx1ZS5maW5kKGl0ZW0gPT4gaXRlbS5jYXRlZ29yeVswXS5zbHVnID09IHJvdXRlLnBhcmFtcy5jYXRlZ29yeSkpXG5cblxuXG5cbi8vIHJlZnNcbmNvbnN0IGJveDogUmVmPEhUTUxFbGVtZW50IHwgbnVsbD4gPSByZWYobnVsbClcbmNvbnN0IGltYWdlOiBSZWY8SFRNTEVsZW1lbnQgfCBudWxsPiA9IHJlZihudWxsKVxuXG5sZXQgeyBsb2FkZXIgfSA9IHVzZUxvYWQoMSlcblxuXG5cbmxvYWRlci52YWx1ZS5vbkFsbGlzTG9hZGVkID0gKCkgPT4ge1xuICAgIGVtaXQoJ2xvYWQnKVxuICAgIGxvYWRlci52YWx1ZS5yZXN0YXJ0KClcbn1cblxuY29uc3QgdXBkYXRlSW1hZ2VzID0gKCkgPT4ge1xuICAgIGltYWdlc0xvYWRlZChib3gudmFsdWUsICgpID0+IHtcbiAgICAgICAgbG9hZGVyLnZhbHVlLmxvYWQoKVxuICAgIH0pXG59XG5cblxuY29uc3QgX19yZXR1cm5lZF9fID0geyBlbWl0LCByb3V0ZSwgc3RvcmUsIGdldCBwYWdlKCkgeyByZXR1cm4gcGFnZSB9LCBzZXQgcGFnZSh2KSB7IHBhZ2UgPSB2IH0sIHNldHRpbmdzLCBjdXJyZW50U2V0dGluZ3MsIGJveCwgaW1hZ2UsIGdldCBsb2FkZXIoKSB7IHJldHVybiBsb2FkZXIgfSwgc2V0IGxvYWRlcih2KSB7IGxvYWRlciA9IHYgfSwgdXBkYXRlSW1hZ2VzIH1cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShfX3JldHVybmVkX18sICdfX2lzU2NyaXB0U2V0dXAnLCB7IGVudW1lcmFibGU6IGZhbHNlLCB2YWx1ZTogdHJ1ZSB9KVxucmV0dXJuIF9fcmV0dXJuZWRfX1xufVxuXG59KSIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IHJlZj1cImJveFwiIGNsYXNzPVwiZmlyc3Qtc2VjdGlvblwiXG4gICAgICAgIDpzdHlsZT1cInsgYmFja2dyb3VuZDogYHVybCgnJHtjdXJyZW50U2V0dGluZ3MuYmFja2dyb3VuZH0nKSwgbm8tcmVwZWF0IGNlbnRlciAvIGNvdmVyYCB9XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmaXJzdC1zZWN0aW9uLWNvbnRhaW5lciBjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbWFnZS1ib3hcIj5cbiAgICAgICAgICAgICAgICA8aW1nIEBsb2FkPVwidXBkYXRlSW1hZ2VzXCIgcmVmPVwiaW1hZ2VcIiA6c3JjPVwiY3VycmVudFNldHRpbmdzLmltYWdlXCIgOmFsdD1cImN1cnJlbnRTZXR0aW5ncy50aXRsZVwiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVzY3JpcHRpb24tYm94XCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJkZXNjcmlwdGlvbi1ib3hfX3RpdGxlIHRpdGxlXCI+e3sgY3VycmVudFNldHRpbmdzLnRpdGxlIH19PC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZGVzY3JpcHRpb24tYm94X190ZXh0XCI+e3sgY3VycmVudFNldHRpbmdzLnRleHQgfX08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuXG5pbXBvcnQgeyB1c2VMb2FkIH0gZnJvbSAnQC9ob29rcy9BcHAvdXNlTG9hZCc7XG5pbXBvcnQgeyB1c2VQYWdlU2V0dGluZ3MgfSBmcm9tICdAL2hvb2tzL0FwcC91c2VQYWdlU2V0dGluZ3MnO1xuaW1wb3J0IHsgdXNlVnVleCB9IGZyb20gJ0Avc3RvcmUvdXNlVnVleCc7XG5pbXBvcnQgeyBJRmlyc3RTZWN0aW9uU2V0dGluZ3MgfSBmcm9tICdAL3R5cGVzL0thdGFsb2cnO1xuaW1wb3J0IHsgUmVmLCBjb21wdXRlZCwgb25VcGRhdGVkLCByZWYsIHdhdGNoIH0gZnJvbSAndnVlJztcbmltcG9ydCB7IHVzZVJvdXRlIH0gZnJvbSAndnVlLXJvdXRlcic7XG5pbXBvcnQgaW1hZ2VzTG9hZGVkIGZyb20gJ2ltYWdlc2xvYWRlZCc7XG5cbmNvbnN0IGVtaXQgPSBkZWZpbmVFbWl0czx7XG4gICAgKGU6ICdsb2FkJyk6IHZvaWRcbn0+KClcblxuY29uc3Qgcm91dGUgPSB1c2VSb3V0ZSgpO1xuXG5jb25zdCBzdG9yZSA9IHVzZVZ1ZXgoKVxuXG5sZXQgeyBwYWdlIH0gPSB1c2VQYWdlU2V0dGluZ3Moc3RvcmUpXG5cbmNvbnN0IHNldHRpbmdzID0gcmVmKHBhZ2UudmFsdWVbJ2ZpcnN0LXNlY3Rpb24tc2V0dGluZ3MnXSkgYXMgUmVmPElGaXJzdFNlY3Rpb25TZXR0aW5nc1tdPlxuXG5jb25zdCBjdXJyZW50U2V0dGluZ3MgPSBjb21wdXRlZCgoKSA9PiBzZXR0aW5ncy52YWx1ZS5maW5kKGl0ZW0gPT4gaXRlbS5jYXRlZ29yeVswXS5zbHVnID09IHJvdXRlLnBhcmFtcy5jYXRlZ29yeSkpXG5cblxuXG5cbi8vIHJlZnNcbmNvbnN0IGJveDogUmVmPEhUTUxFbGVtZW50IHwgbnVsbD4gPSByZWYobnVsbClcbmNvbnN0IGltYWdlOiBSZWY8SFRNTEVsZW1lbnQgfCBudWxsPiA9IHJlZihudWxsKVxuXG5sZXQgeyBsb2FkZXIgfSA9IHVzZUxvYWQoMSlcblxuXG5cbmxvYWRlci52YWx1ZS5vbkFsbGlzTG9hZGVkID0gKCkgPT4ge1xuICAgIGVtaXQoJ2xvYWQnKVxuICAgIGxvYWRlci52YWx1ZS5yZXN0YXJ0KClcbn1cblxuY29uc3QgdXBkYXRlSW1hZ2VzID0gKCkgPT4ge1xuICAgIGltYWdlc0xvYWRlZChib3gudmFsdWUsICgpID0+IHtcbiAgICAgICAgbG9hZGVyLnZhbHVlLmxvYWQoKVxuICAgIH0pXG59XG5cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XG5AaW1wb3J0ICdAL3Njc3MvYmFzZS9taXhpbnMuc2Nzcyc7XG5AaW1wb3J0ICdAL3Njc3MvYmFzZS90eXBvZ3JhcGh5LnNjc3MnO1xuXG4uZmlyc3Qtc2VjdGlvbiB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmZpcnN0LXNlY3Rpb24tY29udGFpbmVyIHtcbiAgICAvLyBtYXgtd2lkdGg6IDE2MDBweDtcbiAgICAvLyBtYXJnaW46IDAgYXV0bztcbiAgICAvLyBwYWRkaW5nOiAwIDQwcHg7XG4gICAgcGFkZGluZy10b3A6IDE1MHB4O1xuXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDhmciA2ZnI7XG5cbiAgICBAaW5jbHVkZSB0YWJsZSB7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgICAgICBwYWRkaW5nLXRvcDogOTBweDtcbiAgICAgICAgZ2FwOiAwcHg7XG4gICAgfVxuXG4gICAgZ2FwOiA4MHB4O1xufVxuXG4uaW1hZ2UtYm94IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAxMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgQGluY2x1ZGUgdGFibGUge1xuICAgICAgICB0b3A6IDE1cHg7XG4gICAgfVxuXG4gICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICB9XG59XG5cbi5kZXNjcmlwdGlvbi1ib3gge1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXG4gICAgQGluY2x1ZGUgdGFibGUge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUsIDE1LCAxNSk7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgfVxuXG4gICAgJl9fdGl0bGUge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzNXB4O1xuICAgIH1cblxuICAgICZfX3RleHQge31cbn1cbjwvc3R5bGU+IiwiaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IGFzIF9kZWZpbmVDb21wb25lbnQgfSBmcm9tICd2dWUnXG5pbXBvcnQgUHJvZHVjdCBmcm9tICdAL2NvbXBvbmVudHMvUHJvZHVjdC52dWUnO1xuaW1wb3J0IFdPTyBmcm9tICdAL2F4aW9zV29vY29tZXJjZSdcbmltcG9ydCB7IFJlZiwgb25CZWZvcmVNb3VudCwgb25Nb3VudGVkLCByZWYgfSBmcm9tICd2dWUnO1xuaW1wb3J0IHsgSUdyb3VwcGVkUHJvZHVjdCB9IGZyb20gJ0AvdHlwZXMvUHJvZHVjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZSB9IGZyb20gJ3Z1ZS1yb3V0ZXInO1xuaW1wb3J0IEN1c3RvbVNlbGVjdCBmcm9tICdAL2NvbXBvbmVudHMvQ3VzdG9tU2VsZWN0LnZ1ZSc7XG5pbXBvcnQgeyBnZXRQcm9kdWN0cyB9IGZyb20gJ0AvYXBpL0thdGFsb2cvZ2V0UHJvZHVjdHMnO1xuXG5pbXBvcnQgeyBlbGltaW5hdGUgfSBmcm9tICdAL2hlbHBlcnMnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IC8qI19fUFVSRV9fKi9fZGVmaW5lQ29tcG9uZW50KHtcbiAgX19uYW1lOiAnc2Vjb25kLXNlY3Rpb24nLFxuICBzZXR1cChfX3Byb3BzLCB7IGV4cG9zZTogX19leHBvc2UgfSkge1xuICBfX2V4cG9zZSgpO1xuXG5jb25zdCBjaG9zZW5GaWx0ZXJzID0gcmVmKHtcbiAgICBwcm9kdWNlcl9jcHU6IFtdLFxuICAgIG1vZGVsX2NwdTogW10sXG59KVxuXG5jb25zdCBmaWx0ZXJzID0gcmVmKHtcbiAgICBwcm9kdWNlcl9jcHU6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ0FNRCcsXG4gICAgICAgICAgICBsYWJlbDogJ9C60L7QvNC/0LDQvdC40Y8gQU1EJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnSU5URUwnLFxuICAgICAgICAgICAgbGFiZWw6ICfQutC+0LzQv9Cw0L3QuNGPIElOVEVMJ1xuICAgICAgICB9LFxuICAgIF0sXG4gICAgbW9kZWxfY3B1OiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdpNSAxMTU1RzcnLFxuICAgICAgICAgICAgbGFiZWw6ICdpNSAxMTU1RzcnLFxuICAgICAgICAgICAgcHJvZHVjZXI6ICdJTlRFTCcsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdpNyAxMTY1RzcnLFxuICAgICAgICAgICAgbGFiZWw6ICdpNyAxMTY1RzcnLFxuICAgICAgICAgICAgcHJvZHVjZXI6ICdJTlRFTCcsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdyeXplbiA1IDU2MDBHJyxcbiAgICAgICAgICAgIGxhYmVsOiAncnl6ZW4gNSA1NjAwRycsXG4gICAgICAgICAgICBwcm9kdWNlcjogJ0FNRCcsXG4gICAgICAgIH1cbiAgICBdLFxufSlcblxuXG5jb25zdCByb3V0ZSA9IHVzZVJvdXRlKCk7XG5cbmxldCBpc0RhdGFMb2FkZWQ6IFJlZjxib29sZWFuPiA9IHJlZihmYWxzZSlcblxubGV0IHByb2R1Y3RzOiBSZWY8QXJyYXk8SUdyb3VwcGVkUHJvZHVjdD4+ID0gcmVmKFtdKVxuXG5vbkJlZm9yZU1vdW50KGFzeW5jICgpID0+IHtcbiAgICBwcm9kdWN0cy52YWx1ZSA9IGF3YWl0IGdldFByb2R1Y3RzKDQsIDE2KVxuXG4gICAgY29uc29sZS5sb2cocHJvZHVjdHMudmFsdWUpXG5cbiAgICBpc0RhdGFMb2FkZWQudmFsdWUgPSB0cnVlXG59KVxuXG5cbmNvbnN0IF9fcmV0dXJuZWRfXyA9IHsgY2hvc2VuRmlsdGVycywgZmlsdGVycywgcm91dGUsIGdldCBpc0RhdGFMb2FkZWQoKSB7IHJldHVybiBpc0RhdGFMb2FkZWQgfSwgc2V0IGlzRGF0YUxvYWRlZCh2KSB7IGlzRGF0YUxvYWRlZCA9IHYgfSwgZ2V0IHByb2R1Y3RzKCkgeyByZXR1cm4gcHJvZHVjdHMgfSwgc2V0IHByb2R1Y3RzKHYpIHsgcHJvZHVjdHMgPSB2IH0sIFByb2R1Y3QsIEN1c3RvbVNlbGVjdCwgZ2V0IGVsaW1pbmF0ZSgpIHsgcmV0dXJuIGVsaW1pbmF0ZSB9IH1cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShfX3JldHVybmVkX18sICdfX2lzU2NyaXB0U2V0dXAnLCB7IGVudW1lcmFibGU6IGZhbHNlLCB2YWx1ZTogdHJ1ZSB9KVxucmV0dXJuIF9fcmV0dXJuZWRfX1xufVxuXG59KSIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwic2Vjb25kLXNlY3Rpb25cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZpbHRlcnMtYm94XCI+XG4gICAgICAgICAgICA8Q3VzdG9tU2VsZWN0IEB1cGRhdGU6Y2hvc2VuLWRlbGV0ZT1cImVsaW1pbmF0ZShjaG9zZW5GaWx0ZXJzLnByb2R1Y2VyX2NwdSwgJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgQHVwZGF0ZTpjaG9zZW4tYWRkPVwiY2hvc2VuRmlsdGVycy5wcm9kdWNlcl9jcHUucHVzaCgkZXZlbnQpXCIgOnRpdGxlPVwiJ9Cf0YDQvtC40LfQstC+0LTQuNGC0LXQu9GMINC/0YDQvtGG0LXRgdGB0L7RgNCwJ1wiXG4gICAgICAgICAgICAgICAgOmxpc3Q9XCJmaWx0ZXJzLnByb2R1Y2VyX2NwdVwiIDpjaG9zZW49XCJjaG9zZW5GaWx0ZXJzLnByb2R1Y2VyX2NwdVwiIC8+XG4gICAgICAgICAgICA8Q3VzdG9tU2VsZWN0IEB1cGRhdGU6Y2hvc2VuLWRlbGV0ZT1cImVsaW1pbmF0ZShjaG9zZW5GaWx0ZXJzLm1vZGVsX2NwdSwgJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgQHVwZGF0ZTpjaG9zZW4tYWRkPVwiY2hvc2VuRmlsdGVycy5tb2RlbF9jcHUucHVzaCgkZXZlbnQpXCIgOnRpdGxlPVwiJ9Cc0L7QtNC10LvRjCDQv9GA0L7RhtC10YHRgdC+0YDQsCdcIlxuICAgICAgICAgICAgICAgIDptYXRjaGluZy1ydWxlcz1cIlt7IGtleTogJ3Byb2R1Y2VyJywgdHlwZTogJ21hdGNoaW5nJywgdmFsdWU6IGNob3NlbkZpbHRlcnMucHJvZHVjZXJfY3B1LCBjb21wYXJlS2V5OiAnbmFtZScgfV1cIlxuICAgICAgICAgICAgICAgIDpsaXN0PVwiZmlsdGVycy5tb2RlbF9jcHVcIiA6Y2hvc2VuPVwiY2hvc2VuRmlsdGVycy5tb2RlbF9jcHVcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3RzLWJveFwiPlxuICAgICAgICAgICAgPFByb2R1Y3Qgdi1pZj1cImlzRGF0YUxvYWRlZFwiIHYtZm9yPVwicHJvZHVjdCBpbiBwcm9kdWN0c1wiIDprZXk9XCJwcm9kdWN0LmlkXCIgOmltYWdlLXNyYz1cInByb2R1Y3QuaW1hZ2VzWzBdLnNyY1wiXG4gICAgICAgICAgICAgICAgOm5hbWU9XCJwcm9kdWN0Lm5hbWVcIiA6Z3JvdXBlZF9wcm9kdWN0cz1cInByb2R1Y3QuZ3JvdXBlZF9wcm9kdWN0c1wiIDpwcmljZT1cInByb2R1Y3QucHJpY2VcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgUHJvZHVjdCBmcm9tICdAL2NvbXBvbmVudHMvUHJvZHVjdC52dWUnO1xuaW1wb3J0IFdPTyBmcm9tICdAL2F4aW9zV29vY29tZXJjZSdcbmltcG9ydCB7IFJlZiwgb25CZWZvcmVNb3VudCwgb25Nb3VudGVkLCByZWYgfSBmcm9tICd2dWUnO1xuaW1wb3J0IHsgSUdyb3VwcGVkUHJvZHVjdCB9IGZyb20gJ0AvdHlwZXMvUHJvZHVjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZSB9IGZyb20gJ3Z1ZS1yb3V0ZXInO1xuaW1wb3J0IEN1c3RvbVNlbGVjdCBmcm9tICdAL2NvbXBvbmVudHMvQ3VzdG9tU2VsZWN0LnZ1ZSc7XG5pbXBvcnQgeyBnZXRQcm9kdWN0cyB9IGZyb20gJ0AvYXBpL0thdGFsb2cvZ2V0UHJvZHVjdHMnO1xuXG5pbXBvcnQgeyBlbGltaW5hdGUgfSBmcm9tICdAL2hlbHBlcnMnO1xuXG5jb25zdCBjaG9zZW5GaWx0ZXJzID0gcmVmKHtcbiAgICBwcm9kdWNlcl9jcHU6IFtdLFxuICAgIG1vZGVsX2NwdTogW10sXG59KVxuXG5jb25zdCBmaWx0ZXJzID0gcmVmKHtcbiAgICBwcm9kdWNlcl9jcHU6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ0FNRCcsXG4gICAgICAgICAgICBsYWJlbDogJ9C60L7QvNC/0LDQvdC40Y8gQU1EJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnSU5URUwnLFxuICAgICAgICAgICAgbGFiZWw6ICfQutC+0LzQv9Cw0L3QuNGPIElOVEVMJ1xuICAgICAgICB9LFxuICAgIF0sXG4gICAgbW9kZWxfY3B1OiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdpNSAxMTU1RzcnLFxuICAgICAgICAgICAgbGFiZWw6ICdpNSAxMTU1RzcnLFxuICAgICAgICAgICAgcHJvZHVjZXI6ICdJTlRFTCcsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdpNyAxMTY1RzcnLFxuICAgICAgICAgICAgbGFiZWw6ICdpNyAxMTY1RzcnLFxuICAgICAgICAgICAgcHJvZHVjZXI6ICdJTlRFTCcsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdyeXplbiA1IDU2MDBHJyxcbiAgICAgICAgICAgIGxhYmVsOiAncnl6ZW4gNSA1NjAwRycsXG4gICAgICAgICAgICBwcm9kdWNlcjogJ0FNRCcsXG4gICAgICAgIH1cbiAgICBdLFxufSlcblxuXG5jb25zdCByb3V0ZSA9IHVzZVJvdXRlKCk7XG5cbmxldCBpc0RhdGFMb2FkZWQ6IFJlZjxib29sZWFuPiA9IHJlZihmYWxzZSlcblxubGV0IHByb2R1Y3RzOiBSZWY8QXJyYXk8SUdyb3VwcGVkUHJvZHVjdD4+ID0gcmVmKFtdKVxuXG5vbkJlZm9yZU1vdW50KGFzeW5jICgpID0+IHtcbiAgICBwcm9kdWN0cy52YWx1ZSA9IGF3YWl0IGdldFByb2R1Y3RzKDQsIDE2KVxuXG4gICAgY29uc29sZS5sb2cocHJvZHVjdHMudmFsdWUpXG5cbiAgICBpc0RhdGFMb2FkZWQudmFsdWUgPSB0cnVlXG59KVxuXG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxuQGltcG9ydCAnQC9zY3NzL2Jhc2UvbWl4aW5zLnNjc3MnO1xuQGltcG9ydCAnQC9zY3NzL2Jhc2UvdHlwb2dyYXBoeS5zY3NzJztcblxuLnNlY29uZC1zZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzgwcHggMWZyO1xuICAgIGdhcDogMzBweDtcbiAgICBwYWRkaW5nLXRvcDogNTZweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNjhweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICBtYXgtd2lkdGg6IDE0MjBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmZpbHRlcnMtYm94IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQxNDE0O1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGdhcDogMTBweDtcbn1cblxuLnByb2R1Y3RzLWJveCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgMzEwcHgpO1xuICAgIGdhcDogMjBweDtcblxufVxuPC9zdHlsZT4iLCJpbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgYXMgX2RlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSdcbmltcG9ydCB7IGdldFBhZ2VTZXR0aW5ncyB9IGZyb20gJ0AvYXBpL0FwcC9nZXRQYWdlU2V0dGluZ3MnO1xuaW1wb3J0IHsgdXNlTG9hZCB9IGZyb20gJ0AvaG9va3MvQXBwL3VzZUxvYWQnO1xuaW1wb3J0IHsgdXNlUGFnZVNldHRpbmdzIH0gZnJvbSAnQC9ob29rcy9BcHAvdXNlUGFnZVNldHRpbmdzJztcbmltcG9ydCBGaXJzdFNlY3Rpb24gZnJvbSAnQC9zZWN0aW9ucy9rYXRhbG9nL2ZpcnN0LXNlY3Rpb24udnVlJztcbmltcG9ydCBTZWNvbmRTZWN0aW9uIGZyb20gJ0Avc2VjdGlvbnMva2F0YWxvZy9zZWNvbmQtc2VjdGlvbi52dWUnO1xuaW1wb3J0IHsgdXNlVnVleCB9IGZyb20gJ0Avc3RvcmUvdXNlVnVleCc7XG5pbXBvcnQgeyBSZWYsIG9uTW91bnRlZCwgcmVmIH0gZnJvbSAndnVlJztcblxuZGVjbGFyZSB2YXIgcHJlbG9hZGVyQ2xvc2U6ICgpID0+IHZvaWQ7XG5cblxuZXhwb3J0IGRlZmF1bHQgLyojX19QVVJFX18qL19kZWZpbmVDb21wb25lbnQoe1xuICBfX25hbWU6ICdrYXRhbG9nJyxcbiAgc2V0dXAoX19wcm9wcywgeyBleHBvc2U6IF9fZXhwb3NlIH0pIHtcbiAgX19leHBvc2UoKTtcblxubGV0IGlzUGFnZURhdGFMb2FkZWQ6IFJlZjxib29sZWFuPiA9IHJlZihmYWxzZSlcblxuY29uc3Qgc3RvcmUgPSB1c2VWdWV4KClcblxubGV0IHtsb2FkZXJ9ID0gdXNlTG9hZCgxKVxuXG5sb2FkZXIudmFsdWUub25BbGxpc0xvYWRlZCA9ICgpID0+IHtcbiAgICBwcmVsb2FkZXJDbG9zZSgpO1xuICAgIGxvYWRlci52YWx1ZS5yZXN0YXJ0KClcbn1cblxubGV0IHsgcGFnZSB9ID0gdXNlUGFnZVNldHRpbmdzKHN0b3JlKVxuXG5vbk1vdW50ZWQoYXN5bmMgKCkgPT4ge1xuICAgIHBhZ2UudmFsdWUgPSBhd2FpdCBnZXRQYWdlU2V0dGluZ3MoMTkwKSAvLyBrYXRhbG9nIHBvc3QgaWRcblxuICAgIGlzUGFnZURhdGFMb2FkZWQudmFsdWUgPSB0cnVlXG5cbiAgICAvLyBwcmVsb2FkZXJDbG9zZSgpO1xufSlcblxuXG5jb25zdCBfX3JldHVybmVkX18gPSB7IGdldCBpc1BhZ2VEYXRhTG9hZGVkKCkgeyByZXR1cm4gaXNQYWdlRGF0YUxvYWRlZCB9LCBzZXQgaXNQYWdlRGF0YUxvYWRlZCh2KSB7IGlzUGFnZURhdGFMb2FkZWQgPSB2IH0sIHN0b3JlLCBnZXQgbG9hZGVyKCkgeyByZXR1cm4gbG9hZGVyIH0sIHNldCBsb2FkZXIodikgeyBsb2FkZXIgPSB2IH0sIGdldCBwYWdlKCkgeyByZXR1cm4gcGFnZSB9LCBzZXQgcGFnZSh2KSB7IHBhZ2UgPSB2IH0sIEZpcnN0U2VjdGlvbiwgU2Vjb25kU2VjdGlvbiB9XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoX19yZXR1cm5lZF9fLCAnX19pc1NjcmlwdFNldHVwJywgeyBlbnVtZXJhYmxlOiBmYWxzZSwgdmFsdWU6IHRydWUgfSlcbnJldHVybiBfX3JldHVybmVkX19cbn1cblxufSkiLCJcbjx0ZW1wbGF0ZT5cbiAgICA8bWFpbiB2LWlmPVwiaXNQYWdlRGF0YUxvYWRlZFwiPlxuICAgICAgICA8Rmlyc3RTZWN0aW9uIDprZXk9XCIxXCIgQGxvYWQ9XCJsb2FkZXIubG9hZCgpXCIgLz5cbiAgICAgICAgPFNlY29uZFNlY3Rpb24gOmtleT1cIjJcIiAvPlxuICAgIDwvbWFpbj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBnZXRQYWdlU2V0dGluZ3MgfSBmcm9tICdAL2FwaS9BcHAvZ2V0UGFnZVNldHRpbmdzJztcbmltcG9ydCB7IHVzZUxvYWQgfSBmcm9tICdAL2hvb2tzL0FwcC91c2VMb2FkJztcbmltcG9ydCB7IHVzZVBhZ2VTZXR0aW5ncyB9IGZyb20gJ0AvaG9va3MvQXBwL3VzZVBhZ2VTZXR0aW5ncyc7XG5pbXBvcnQgRmlyc3RTZWN0aW9uIGZyb20gJ0Avc2VjdGlvbnMva2F0YWxvZy9maXJzdC1zZWN0aW9uLnZ1ZSc7XG5pbXBvcnQgU2Vjb25kU2VjdGlvbiBmcm9tICdAL3NlY3Rpb25zL2thdGFsb2cvc2Vjb25kLXNlY3Rpb24udnVlJztcbmltcG9ydCB7IHVzZVZ1ZXggfSBmcm9tICdAL3N0b3JlL3VzZVZ1ZXgnO1xuaW1wb3J0IHsgUmVmLCBvbk1vdW50ZWQsIHJlZiB9IGZyb20gJ3Z1ZSc7XG5cbmxldCBpc1BhZ2VEYXRhTG9hZGVkOiBSZWY8Ym9vbGVhbj4gPSByZWYoZmFsc2UpXG5cbmRlY2xhcmUgdmFyIHByZWxvYWRlckNsb3NlOiAoKSA9PiB2b2lkO1xuXG5jb25zdCBzdG9yZSA9IHVzZVZ1ZXgoKVxuXG5sZXQge2xvYWRlcn0gPSB1c2VMb2FkKDEpXG5cbmxvYWRlci52YWx1ZS5vbkFsbGlzTG9hZGVkID0gKCkgPT4ge1xuICAgIHByZWxvYWRlckNsb3NlKCk7XG4gICAgbG9hZGVyLnZhbHVlLnJlc3RhcnQoKVxufVxuXG5sZXQgeyBwYWdlIH0gPSB1c2VQYWdlU2V0dGluZ3Moc3RvcmUpXG5cbm9uTW91bnRlZChhc3luYyAoKSA9PiB7XG4gICAgcGFnZS52YWx1ZSA9IGF3YWl0IGdldFBhZ2VTZXR0aW5ncygxOTApIC8vIGthdGFsb2cgcG9zdCBpZFxuXG4gICAgaXNQYWdlRGF0YUxvYWRlZC52YWx1ZSA9IHRydWVcblxuICAgIC8vIHByZWxvYWRlckNsb3NlKCk7XG59KVxuXG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPjwvc3R5bGU+IiwiaW1wb3J0IHsgdG9EaXNwbGF5U3RyaW5nIGFzIF90b0Rpc3BsYXlTdHJpbmcsIGNyZWF0ZUVsZW1lbnRWTm9kZSBhcyBfY3JlYXRlRWxlbWVudFZOb2RlLCByZW5kZXJMaXN0IGFzIF9yZW5kZXJMaXN0LCBGcmFnbWVudCBhcyBfRnJhZ21lbnQsIG9wZW5CbG9jayBhcyBfb3BlbkJsb2NrLCBjcmVhdGVFbGVtZW50QmxvY2sgYXMgX2NyZWF0ZUVsZW1lbnRCbG9jaywgbm9ybWFsaXplQ2xhc3MgYXMgX25vcm1hbGl6ZUNsYXNzLCBwdXNoU2NvcGVJZCBhcyBfcHVzaFNjb3BlSWQsIHBvcFNjb3BlSWQgYXMgX3BvcFNjb3BlSWQgfSBmcm9tIFwidnVlXCJcblxuY29uc3QgX3dpdGhTY29wZUlkID0gbiA9PiAoX3B1c2hTY29wZUlkKFwiZGF0YS12LTA0MzUwZDA2XCIpLG49bigpLF9wb3BTY29wZUlkKCksbilcbmNvbnN0IF9ob2lzdGVkXzEgPSB7IGNsYXNzOiBcInNlbGVjdFwiIH1cbmNvbnN0IF9ob2lzdGVkXzIgPSB7IGNsYXNzOiBcInNlbGVjdF9fdGl0bGVcIiB9XG5jb25zdCBfaG9pc3RlZF8zID0gW1wic3JjXCJdXG5jb25zdCBfaG9pc3RlZF80ID0geyBjbGFzczogXCJzZWxlY3RfX2xpc3RcIiB9XG5jb25zdCBfaG9pc3RlZF81ID0gW1wib25DbGlja1wiXVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKF9jdHg6IGFueSxfY2FjaGU6IGFueSwkcHJvcHM6IGFueSwkc2V0dXA6IGFueSwkZGF0YTogYW55LCRvcHRpb25zOiBhbnkpIHtcbiAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJkaXZcIiwgX2hvaXN0ZWRfMSwgW1xuICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJidXR0b25cIiwge1xuICAgICAgb25DbGljazogX2NhY2hlWzBdIHx8IChfY2FjaGVbMF0gPSAoJGV2ZW50OiBhbnkpID0+ICgkc2V0dXAuaXNQYW5lbE9wZW4gPSAhJHNldHVwLmlzUGFuZWxPcGVuKSksXG4gICAgICBjbGFzczogXCJzZWxlY3RfX3BhbmVsXCJcbiAgICB9LCBbXG4gICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwicFwiLCBfaG9pc3RlZF8yLCBfdG9EaXNwbGF5U3RyaW5nKCRwcm9wcy50aXRsZSksIDEgLyogVEVYVCAqLyksXG4gICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiaW1nXCIsIHtcbiAgICAgICAgc3JjOiAkc2V0dXAuYXBwWydnZW5lcmFsX3NlbGVjdC1pY29uJ10sXG4gICAgICAgIGFsdDogXCJzZWxlY3QtaWNvblwiXG4gICAgICB9LCBudWxsLCA4IC8qIFBST1BTICovLCBfaG9pc3RlZF8zKVxuICAgIF0pLFxuICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwge1xuICAgICAgY2xhc3M6IF9ub3JtYWxpemVDbGFzcyhbXCJzZWxlY3RfX3dyYXBwZXJcIiwgeyAnc2VsZWN0X193cmFwcGVyLS1vcGVuJzogJHNldHVwLmlzUGFuZWxPcGVuIH1dKVxuICAgIH0sIFtcbiAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJ1bFwiLCBfaG9pc3RlZF80LCBbXG4gICAgICAgIChfb3BlbkJsb2NrKHRydWUpLCBfY3JlYXRlRWxlbWVudEJsb2NrKF9GcmFnbWVudCwgbnVsbCwgX3JlbmRlckxpc3QoJHNldHVwLm1hdGNoZWRMaXN0LCAoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcImxpXCIsIHtcbiAgICAgICAgICAgIGtleTogaW5kZXgsXG4gICAgICAgICAgICBjbGFzczogX25vcm1hbGl6ZUNsYXNzKFtcInNlbGVjdF9faXRlbVwiLCB7ICdzZWxlY3RfX2l0ZW0tLWFjdGl2ZSc6ICRwcm9wcy5jaG9zZW4uaW5jbHVkZXMoaXRlbSkgfV0pXG4gICAgICAgICAgfSwgW1xuICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgIG9uQ2xpY2s6ICgkZXZlbnQ6IGFueSkgPT4gKCRzZXR1cC5jaG9pY2UoaXRlbSkpXG4gICAgICAgICAgICB9LCBfdG9EaXNwbGF5U3RyaW5nKCRwcm9wcy5sYWJlbE5hbWUgPyBpdGVtWyRwcm9wcy5sYWJlbE5hbWVdIDogaXRlbVsnbGFiZWwnXSksIDkgLyogVEVYVCwgUFJPUFMgKi8sIF9ob2lzdGVkXzUpXG4gICAgICAgICAgXSwgMiAvKiBDTEFTUyAqLykpXG4gICAgICAgIH0pLCAxMjggLyogS0VZRURfRlJBR01FTlQgKi8pKVxuICAgICAgXSlcbiAgICBdLCAyIC8qIENMQVNTICovKVxuICBdKSlcbn0iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50Vk5vZGUgYXMgX2NyZWF0ZUVsZW1lbnRWTm9kZSwgdG9EaXNwbGF5U3RyaW5nIGFzIF90b0Rpc3BsYXlTdHJpbmcsIG9wZW5CbG9jayBhcyBfb3BlbkJsb2NrLCBjcmVhdGVFbGVtZW50QmxvY2sgYXMgX2NyZWF0ZUVsZW1lbnRCbG9jaywgcHVzaFNjb3BlSWQgYXMgX3B1c2hTY29wZUlkLCBwb3BTY29wZUlkIGFzIF9wb3BTY29wZUlkIH0gZnJvbSBcInZ1ZVwiXG5cbmNvbnN0IF93aXRoU2NvcGVJZCA9IG4gPT4gKF9wdXNoU2NvcGVJZChcImRhdGEtdi0zY2Y0ZWY2ZlwiKSxuPW4oKSxfcG9wU2NvcGVJZCgpLG4pXG5jb25zdCBfaG9pc3RlZF8xID0geyBjbGFzczogXCJwcm9kdWN0XCIgfVxuY29uc3QgX2hvaXN0ZWRfMiA9IFtcInNyY1wiLCBcImFsdFwiXVxuY29uc3QgX2hvaXN0ZWRfMyA9IHsgY2xhc3M6IFwicHJvZHVjdC1kZXNjcmlwdGlvblwiIH1cbmNvbnN0IF9ob2lzdGVkXzQgPSB7IGNsYXNzOiBcInByb2R1Y3QtZGVzY3JpcHRpb25fX25hbWVcIiB9XG5jb25zdCBfaG9pc3RlZF81ID0geyBjbGFzczogXCJwcm9kdWN0LWRlc2NyaXB0aW9uLXNwZWNzXCIgfVxuY29uc3QgX2hvaXN0ZWRfNiA9IHsgY2xhc3M6IFwic3BlY1wiIH1cbmNvbnN0IF9ob2lzdGVkXzcgPSB7IGNsYXNzOiBcInNwZWNcIiB9XG5jb25zdCBfaG9pc3RlZF84ID0geyBjbGFzczogXCJzcGVjXCIgfVxuY29uc3QgX2hvaXN0ZWRfOSA9IHsgY2xhc3M6IFwicHJvZHVjdF9fcHJpY2VcIiB9XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eDogYW55LF9jYWNoZTogYW55LCRwcm9wczogYW55LCRzZXR1cDogYW55LCRkYXRhOiBhbnksJG9wdGlvbnM6IGFueSkge1xuICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcImRpdlwiLCBfaG9pc3RlZF8xLCBbXG4gICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImltZ1wiLCB7XG4gICAgICBjbGFzczogXCJwcm9kdWN0X19pbWFnZVwiLFxuICAgICAgc3JjOiAkcHJvcHMuaW1hZ2VTcmMsXG4gICAgICBhbHQ6ICRwcm9wcy5uYW1lXG4gICAgfSwgbnVsbCwgOCAvKiBQUk9QUyAqLywgX2hvaXN0ZWRfMiksXG4gICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF8zLCBbXG4gICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwicFwiLCBfaG9pc3RlZF80LCBfdG9EaXNwbGF5U3RyaW5nKCRwcm9wcy5uYW1lKSwgMSAvKiBURVhUICovKSxcbiAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfNSwgW1xuICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzYsIFtcbiAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwicFwiLCBudWxsLCBfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC5wcm9kdWN0Q3B1ID8gJHNldHVwLnByb2R1Y3RDcHUuY2ZzLnNob3J0bHlfbmFtZSA6ICfQvtGC0YHRg9GC0YHQstGD0LXRgicpLCAxIC8qIFRFWFQgKi8pXG4gICAgICAgIF0pLFxuICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzcsIFtcbiAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwicFwiLCBudWxsLCBfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC5wcm9kdWN0R3B1ID8gJHNldHVwLnByb2R1Y3RHcHUuY2ZzLnNob3J0bHlfbmFtZSA6ICfQvtGC0YHRg9GB0YLQstGD0LXRgicpLCAxIC8qIFRFWFQgKi8pXG4gICAgICAgIF0pLFxuICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzgsIFtcbiAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwicFwiLCBudWxsLCBfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC5wcm9kdWN0UmFtID8gJHNldHVwLnByb2R1Y3RSYW0uY2ZzLnNob3J0bHlfbmFtZSA6ICfQvtGC0YHRg9GB0YLQstGD0LXRgicpLCAxIC8qIFRFWFQgKi8pXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF0pLFxuICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJwXCIsIF9ob2lzdGVkXzksIF90b0Rpc3BsYXlTdHJpbmcoJHByb3BzLnByaWNlKSArIFwiIFJVQlwiLCAxIC8qIFRFWFQgKi8pXG4gIF0pKVxufSIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnRWTm9kZSBhcyBfY3JlYXRlRWxlbWVudFZOb2RlLCB0b0Rpc3BsYXlTdHJpbmcgYXMgX3RvRGlzcGxheVN0cmluZywgbm9ybWFsaXplU3R5bGUgYXMgX25vcm1hbGl6ZVN0eWxlLCBvcGVuQmxvY2sgYXMgX29wZW5CbG9jaywgY3JlYXRlRWxlbWVudEJsb2NrIGFzIF9jcmVhdGVFbGVtZW50QmxvY2ssIHB1c2hTY29wZUlkIGFzIF9wdXNoU2NvcGVJZCwgcG9wU2NvcGVJZCBhcyBfcG9wU2NvcGVJZCB9IGZyb20gXCJ2dWVcIlxuXG5jb25zdCBfd2l0aFNjb3BlSWQgPSBuID0+IChfcHVzaFNjb3BlSWQoXCJkYXRhLXYtNjgyMmZkZDJcIiksbj1uKCksX3BvcFNjb3BlSWQoKSxuKVxuY29uc3QgX2hvaXN0ZWRfMSA9IHsgY2xhc3M6IFwiZmlyc3Qtc2VjdGlvbi1jb250YWluZXIgY29udGFpbmVyXCIgfVxuY29uc3QgX2hvaXN0ZWRfMiA9IHsgY2xhc3M6IFwiaW1hZ2UtYm94XCIgfVxuY29uc3QgX2hvaXN0ZWRfMyA9IFtcInNyY1wiLCBcImFsdFwiXVxuY29uc3QgX2hvaXN0ZWRfNCA9IHsgY2xhc3M6IFwiZGVzY3JpcHRpb24tYm94XCIgfVxuY29uc3QgX2hvaXN0ZWRfNSA9IHsgY2xhc3M6IFwiZGVzY3JpcHRpb24tYm94X190aXRsZSB0aXRsZVwiIH1cbmNvbnN0IF9ob2lzdGVkXzYgPSB7IGNsYXNzOiBcImRlc2NyaXB0aW9uLWJveF9fdGV4dFwiIH1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihfY3R4OiBhbnksX2NhY2hlOiBhbnksJHByb3BzOiBhbnksJHNldHVwOiBhbnksJGRhdGE6IGFueSwkb3B0aW9uczogYW55KSB7XG4gIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwiZGl2XCIsIHtcbiAgICByZWY6IFwiYm94XCIsXG4gICAgY2xhc3M6IFwiZmlyc3Qtc2VjdGlvblwiLFxuICAgIHN0eWxlOiBfbm9ybWFsaXplU3R5bGUoeyBiYWNrZ3JvdW5kOiBgdXJsKCckeyRzZXR1cC5jdXJyZW50U2V0dGluZ3MuYmFja2dyb3VuZH0nKSwgbm8tcmVwZWF0IGNlbnRlciAvIGNvdmVyYCB9KVxuICB9LCBbXG4gICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF8xLCBbXG4gICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzIsIFtcbiAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImltZ1wiLCB7XG4gICAgICAgICAgb25Mb2FkOiAkc2V0dXAudXBkYXRlSW1hZ2VzLFxuICAgICAgICAgIHJlZjogXCJpbWFnZVwiLFxuICAgICAgICAgIHNyYzogJHNldHVwLmN1cnJlbnRTZXR0aW5ncy5pbWFnZSxcbiAgICAgICAgICBhbHQ6ICRzZXR1cC5jdXJyZW50U2V0dGluZ3MudGl0bGVcbiAgICAgICAgfSwgbnVsbCwgNDAgLyogUFJPUFMsIEhZRFJBVEVfRVZFTlRTICovLCBfaG9pc3RlZF8zKVxuICAgICAgXSksXG4gICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzQsIFtcbiAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcInBcIiwgX2hvaXN0ZWRfNSwgX3RvRGlzcGxheVN0cmluZygkc2V0dXAuY3VycmVudFNldHRpbmdzLnRpdGxlKSwgMSAvKiBURVhUICovKSxcbiAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcInBcIiwgX2hvaXN0ZWRfNiwgX3RvRGlzcGxheVN0cmluZygkc2V0dXAuY3VycmVudFNldHRpbmdzLnRleHQpLCAxIC8qIFRFWFQgKi8pXG4gICAgICBdKVxuICAgIF0pXG4gIF0sIDQgLyogU1RZTEUgKi8pKVxufSIsImltcG9ydCB7IGNyZWF0ZVZOb2RlIGFzIF9jcmVhdGVWTm9kZSwgY3JlYXRlRWxlbWVudFZOb2RlIGFzIF9jcmVhdGVFbGVtZW50Vk5vZGUsIHJlbmRlckxpc3QgYXMgX3JlbmRlckxpc3QsIEZyYWdtZW50IGFzIF9GcmFnbWVudCwgb3BlbkJsb2NrIGFzIF9vcGVuQmxvY2ssIGNyZWF0ZUVsZW1lbnRCbG9jayBhcyBfY3JlYXRlRWxlbWVudEJsb2NrLCBjcmVhdGVCbG9jayBhcyBfY3JlYXRlQmxvY2ssIGNyZWF0ZUNvbW1lbnRWTm9kZSBhcyBfY3JlYXRlQ29tbWVudFZOb2RlLCBwdXNoU2NvcGVJZCBhcyBfcHVzaFNjb3BlSWQsIHBvcFNjb3BlSWQgYXMgX3BvcFNjb3BlSWQgfSBmcm9tIFwidnVlXCJcblxuY29uc3QgX3dpdGhTY29wZUlkID0gbiA9PiAoX3B1c2hTY29wZUlkKFwiZGF0YS12LTAxNGY2MmYyXCIpLG49bigpLF9wb3BTY29wZUlkKCksbilcbmNvbnN0IF9ob2lzdGVkXzEgPSB7IGNsYXNzOiBcInNlY29uZC1zZWN0aW9uXCIgfVxuY29uc3QgX2hvaXN0ZWRfMiA9IHsgY2xhc3M6IFwiZmlsdGVycy1ib3hcIiB9XG5jb25zdCBfaG9pc3RlZF8zID0geyBjbGFzczogXCJwcm9kdWN0cy1ib3hcIiB9XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eDogYW55LF9jYWNoZTogYW55LCRwcm9wczogYW55LCRzZXR1cDogYW55LCRkYXRhOiBhbnksJG9wdGlvbnM6IGFueSkge1xuICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcImRpdlwiLCBfaG9pc3RlZF8xLCBbXG4gICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF8yLCBbXG4gICAgICBfY3JlYXRlVk5vZGUoJHNldHVwW1wiQ3VzdG9tU2VsZWN0XCJdLCB7XG4gICAgICAgIFwib25VcGRhdGU6Y2hvc2VuRGVsZXRlXCI6IF9jYWNoZVswXSB8fCAoX2NhY2hlWzBdID0gKCRldmVudDogYW55KSA9PiAoJHNldHVwLmVsaW1pbmF0ZSgkc2V0dXAuY2hvc2VuRmlsdGVycy5wcm9kdWNlcl9jcHUsICRldmVudCkpKSxcbiAgICAgICAgXCJvblVwZGF0ZTpjaG9zZW5BZGRcIjogX2NhY2hlWzFdIHx8IChfY2FjaGVbMV0gPSAoJGV2ZW50OiBhbnkpID0+ICgkc2V0dXAuY2hvc2VuRmlsdGVycy5wcm9kdWNlcl9jcHUucHVzaCgkZXZlbnQpKSksXG4gICAgICAgIHRpdGxlOiAn0J/RgNC+0LjQt9Cy0L7QtNC40YLQtdC70Ywg0L/RgNC+0YbQtdGB0YHQvtGA0LAnLFxuICAgICAgICBsaXN0OiAkc2V0dXAuZmlsdGVycy5wcm9kdWNlcl9jcHUsXG4gICAgICAgIGNob3NlbjogJHNldHVwLmNob3NlbkZpbHRlcnMucHJvZHVjZXJfY3B1XG4gICAgICB9LCBudWxsLCA4IC8qIFBST1BTICovLCBbXCJsaXN0XCIsIFwiY2hvc2VuXCJdKSxcbiAgICAgIF9jcmVhdGVWTm9kZSgkc2V0dXBbXCJDdXN0b21TZWxlY3RcIl0sIHtcbiAgICAgICAgXCJvblVwZGF0ZTpjaG9zZW5EZWxldGVcIjogX2NhY2hlWzJdIHx8IChfY2FjaGVbMl0gPSAoJGV2ZW50OiBhbnkpID0+ICgkc2V0dXAuZWxpbWluYXRlKCRzZXR1cC5jaG9zZW5GaWx0ZXJzLm1vZGVsX2NwdSwgJGV2ZW50KSkpLFxuICAgICAgICBcIm9uVXBkYXRlOmNob3NlbkFkZFwiOiBfY2FjaGVbM10gfHwgKF9jYWNoZVszXSA9ICgkZXZlbnQ6IGFueSkgPT4gKCRzZXR1cC5jaG9zZW5GaWx0ZXJzLm1vZGVsX2NwdS5wdXNoKCRldmVudCkpKSxcbiAgICAgICAgdGl0bGU6ICfQnNC+0LTQtdC70Ywg0L/RgNC+0YbQtdGB0YHQvtGA0LAnLFxuICAgICAgICBcIm1hdGNoaW5nLXJ1bGVzXCI6IFt7IGtleTogJ3Byb2R1Y2VyJywgdHlwZTogJ21hdGNoaW5nJywgdmFsdWU6ICRzZXR1cC5jaG9zZW5GaWx0ZXJzLnByb2R1Y2VyX2NwdSwgY29tcGFyZUtleTogJ25hbWUnIH1dLFxuICAgICAgICBsaXN0OiAkc2V0dXAuZmlsdGVycy5tb2RlbF9jcHUsXG4gICAgICAgIGNob3NlbjogJHNldHVwLmNob3NlbkZpbHRlcnMubW9kZWxfY3B1XG4gICAgICB9LCBudWxsLCA4IC8qIFBST1BTICovLCBbXCJtYXRjaGluZy1ydWxlc1wiLCBcImxpc3RcIiwgXCJjaG9zZW5cIl0pXG4gICAgXSksXG4gICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF8zLCBbXG4gICAgICAoJHNldHVwLmlzRGF0YUxvYWRlZClcbiAgICAgICAgPyAoX29wZW5CbG9jayh0cnVlKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhfRnJhZ21lbnQsIHsga2V5OiAwIH0sIF9yZW5kZXJMaXN0KCRzZXR1cC5wcm9kdWN0cywgKHByb2R1Y3QpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlQmxvY2soJHNldHVwW1wiUHJvZHVjdFwiXSwge1xuICAgICAgICAgICAgICBrZXk6IHByb2R1Y3QuaWQsXG4gICAgICAgICAgICAgIFwiaW1hZ2Utc3JjXCI6IHByb2R1Y3QuaW1hZ2VzWzBdLnNyYyxcbiAgICAgICAgICAgICAgbmFtZTogcHJvZHVjdC5uYW1lLFxuICAgICAgICAgICAgICBncm91cGVkX3Byb2R1Y3RzOiBwcm9kdWN0Lmdyb3VwZWRfcHJvZHVjdHMsXG4gICAgICAgICAgICAgIHByaWNlOiBwcm9kdWN0LnByaWNlXG4gICAgICAgICAgICB9LCBudWxsLCA4IC8qIFBST1BTICovLCBbXCJpbWFnZS1zcmNcIiwgXCJuYW1lXCIsIFwiZ3JvdXBlZF9wcm9kdWN0c1wiLCBcInByaWNlXCJdKSlcbiAgICAgICAgICB9KSwgMTI4IC8qIEtFWUVEX0ZSQUdNRU5UICovKSlcbiAgICAgICAgOiBfY3JlYXRlQ29tbWVudFZOb2RlKFwidi1pZlwiLCB0cnVlKVxuICAgIF0pXG4gIF0pKVxufSIsImltcG9ydCB7IG9wZW5CbG9jayBhcyBfb3BlbkJsb2NrLCBjcmVhdGVCbG9jayBhcyBfY3JlYXRlQmxvY2ssIGNyZWF0ZUVsZW1lbnRCbG9jayBhcyBfY3JlYXRlRWxlbWVudEJsb2NrLCBjcmVhdGVDb21tZW50Vk5vZGUgYXMgX2NyZWF0ZUNvbW1lbnRWTm9kZSB9IGZyb20gXCJ2dWVcIlxuXG5jb25zdCBfaG9pc3RlZF8xID0geyBrZXk6IDAgfVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKF9jdHg6IGFueSxfY2FjaGU6IGFueSwkcHJvcHM6IGFueSwkc2V0dXA6IGFueSwkZGF0YTogYW55LCRvcHRpb25zOiBhbnkpIHtcbiAgcmV0dXJuICgkc2V0dXAuaXNQYWdlRGF0YUxvYWRlZClcbiAgICA/IChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJtYWluXCIsIF9ob2lzdGVkXzEsIFtcbiAgICAgICAgKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUJsb2NrKCRzZXR1cFtcIkZpcnN0U2VjdGlvblwiXSwge1xuICAgICAgICAgIGtleTogMSxcbiAgICAgICAgICBvbkxvYWQ6IF9jYWNoZVswXSB8fCAoX2NhY2hlWzBdID0gKCRldmVudDogYW55KSA9PiAoJHNldHVwLmxvYWRlci5sb2FkKCkpKVxuICAgICAgICB9KSksXG4gICAgICAgIChfb3BlbkJsb2NrKCksIF9jcmVhdGVCbG9jaygkc2V0dXBbXCJTZWNvbmRTZWN0aW9uXCJdLCB7IGtleTogMiB9KSlcbiAgICAgIF0pKVxuICAgIDogX2NyZWF0ZUNvbW1lbnRWTm9kZShcInYtaWZcIiwgdHJ1ZSlcbn0iLCJpbXBvcnQgV1AgZnJvbSAnQC9heGlvc1dQJ1xuaW1wb3J0IHsgU2V0dGluZ3MgfSBmcm9tICdAL3R5cGVzL0FwcCdcblxuXG5cbmV4cG9ydCBjb25zdCBnZXRQYWdlU2V0dGluZ3MgPSBhc3luYyAoaWQ6IG51bWJlcik6IFByb21pc2U8U2V0dGluZ3M+ID0+IHtcbiAgICByZXR1cm4gYXdhaXQgV1AuZ2V0KCdwYWdlcy8nICsgaWQpLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuZGF0YSlcbn0iLCJpbXBvcnQgV09PIGZyb20gJ0AvYXhpb3NXb29jb21lcmNlJ1xuaW1wb3J0IHsgSVByb2R1Y3QgfSBmcm9tICdAL3R5cGVzL1Byb2R1Y3QnO1xuXG5leHBvcnQgY29uc3QgZ2V0UHJvZHVjdHMgPSBhc3luYyAocGVyX3BhZ2U6IG51bWJlciwgY2F0ZWdvcnlfaWQ6IG51bWJlcikgPT4ge1xuICAgIGxldCBwcm9kdWN0cyA9IFtdXG4gICAgbGV0IHBhZ2UgPSAwO1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHBhZ2UrKztcblxuICAgICAgICBpZiAocHJvZHVjdHMubGVuZ3RoID49IHBlcl9wYWdlKSB7XG4gICAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIGxldCBmZXRjaGVkUHJvZHVjdHMgPSBhd2FpdCBXT08uZ2V0KCdwcm9kdWN0cycsIHtcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgIHBlcl9wYWdlOiBwZXJfcGFnZSxcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogY2F0ZWdvcnlfaWQsXG4gICAgICAgICAgICAgICAgcGFnZTogcGFnZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHBhZ2UgPiBOdW1iZXIoZmV0Y2hlZFByb2R1Y3RzLmhlYWRlcnNbJ3gtd3AtdG90YWxwYWdlcyddKSkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBwcm9kdWN0cy5wdXNoKC4uLmZldGNoZWRQcm9kdWN0cy5kYXRhKVxuICAgIH1cbiAgICByZXR1cm4gcHJvZHVjdHM7XG59IiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5jb25zdCBpbnN0YW5jZSA9IGF4aW9zLmNyZWF0ZSh7XG4gICAgYmFzZVVSTDogJ2h0dHA6Ly9sb2NhbGhvc3Qvd3AtanNvbi93Yy92My8nLFxuICAgIGhlYWRlcnM6IHsgJ0F1dGhvcml6YXRpb24nOiAnQmFzaWMgWTJ0ZlkyRXpNamRrTmpZMU5HVXlOalV3T1Rsak5qSTNPRFl5T1dFM09ERm1NelE1Wm1Jd1ltTmxZVHBqYzE5aE5EUTBORFF5T1RaaU9USTFPREEyWmpobU1XTXpNMkk1TjJSbU5qSmlNVEEwTnpobE0yUTInIH1cbn0pO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGluc3RhbmNlXG4iLCJleHBvcnQgY29uc3QgZWxpbWluYXRlID0gKGFycmF5OiBBcnJheTxhbnk+LCBlbGVtZW50OiBhbnkpID0+IHtcbiAgICBhcnJheS5zcGxpY2UoYXJyYXkuaW5kZXhPZihlbGVtZW50KSwgMSlcbn1cbiIsImltcG9ydCB7IFJlZiwgY29tcHV0ZWQsIHJlZiwgd2F0Y2ggfSBmcm9tIFwidnVlXCI7XG5cbmNsYXNzIExvYWRlciB7XG5cbiAgICBwcml2YXRlIGxvYWRlZENvdW50ZXI6IG51bWJlciA9IDA7XG5cbiAgICBwcml2YXRlIGNvdW50ZXI6IG51bWJlciA9IDA7XG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGNvdW50ZXI6IG51bWJlcikge1xuICAgICAgICB0aGlzLmNvdW50ZXIgPSBjb3VudGVyO1xuICAgIH1cbiAgICBwdWJsaWMgbG9hZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5sb2FkZWRDb3VudGVyKys7XG5cbiAgICAgICAgdGhpcy5hZnRlckxvYWQoKVxuICAgIH1cbiAgICBwdWJsaWMgcmVzdGFydChjb3VudD86IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAoY291bnQpIHtcbiAgICAgICAgICAgIHRoaXMuY291bnRlciA9IGNvdW50XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxvYWRlZENvdW50ZXIgPSAwO1xuICAgIH1cbiAgICBwdWJsaWMgb25BbGxpc0xvYWRlZDogRnVuY3Rpb247XG4gICAgcHJpdmF0ZSBhZnRlckxvYWQoKTogdm9pZCB7XG5cbiAgICAgICAgaWYgKHRoaXMubG9hZGVkQ291bnRlciAhPSB0aGlzLmNvdW50ZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm9uQWxsaXNMb2FkZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9uQWxsaXNMb2FkZWQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKCdhbGwgbG9hZGVkJylcbiAgICB9XG59XG5cblxuZXhwb3J0IGNvbnN0IHVzZUxvYWQgPSAoY291bnQ6IG51bWJlcikgPT4ge1xuXG4gICAgY29uc3QgbG9hZGVyID0gcmVmKG5ldyBMb2FkZXIoY291bnQpKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGxvYWRlcixcbiAgICB9XG59IiwiaW1wb3J0IFN0b3JlLCB7IE11dGF0aW9ucyB9IGZyb20gJ0Avc3RvcmUnO1xuaW1wb3J0IHsgV3JpdGFibGVDb21wdXRlZFJlZiwgY29tcHV0ZWQgfSBmcm9tICd2dWUnO1xuaW1wb3J0IHsgSUNhdGVnb3J5TWFpblBhZ2UsIFNldHRpbmdzIH0gZnJvbSAnQC90eXBlcy9BcHAnO1xuXG5cbmV4cG9ydCBjb25zdCB1c2VQYWdlU2V0dGluZ3MgPSAoc3RvcmU6IHR5cGVvZiBTdG9yZSkgPT4ge1xuXG4gICAgbGV0IHBhZ2U6IFdyaXRhYmxlQ29tcHV0ZWRSZWY8T2JqZWN0PiA9IGNvbXB1dGVkKHtcbiAgICAgICAgZ2V0OiAoKSA9PiBzdG9yZS5zdGF0ZS5wYWdlLmNmcyxcbiAgICAgICAgc2V0OiAodmFsdWU6IFNldHRpbmdzKSA9PiBzdG9yZS5jb21taXQoTXV0YXRpb25zLlNFVF9QQUdFX1NFVFRJTkdTLCB2YWx1ZSksXG4gICAgfSlcblxuICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VcbiAgICB9XG5cbn0iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9DdXN0b21TZWxlY3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA0MzUwZDA2JnNjb3BlZD10cnVlJnRzPXRydWVcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9DdXN0b21TZWxlY3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZzZXR1cD10cnVlJmxhbmc9dHNcIlxuZXhwb3J0ICogZnJvbSBcIi4vQ3VzdG9tU2VsZWN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmc2V0dXA9dHJ1ZSZsYW5nPXRzXCJcblxuaW1wb3J0IFwiLi9DdXN0b21TZWxlY3QudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDQzNTBkMDYmbGFuZz1zY3NzJnNjb3BlZD10cnVlXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19zY29wZUlkJyxcImRhdGEtdi0wNDM1MGQwNlwiXSxbJ19fZmlsZScsXCJzcmMvY29tcG9uZW50cy9DdXN0b21TZWxlY3QudnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcIjA0MzUwZDA2XCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnMDQzNTBkMDYnLCBfX2V4cG9ydHNfXykpIHtcbiAgICBhcGkucmVsb2FkKCcwNDM1MGQwNicsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQ3VzdG9tU2VsZWN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wNDM1MGQwNiZzY29wZWQ9dHJ1ZSZ0cz10cnVlXCIsICgpID0+IHtcbiAgICBhcGkucmVyZW5kZXIoJzA0MzUwZDA2JywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9Qcm9kdWN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zY2Y0ZWY2ZiZzY29wZWQ9dHJ1ZSZ0cz10cnVlXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUHJvZHVjdC52dWU/dnVlJnR5cGU9c2NyaXB0JnNldHVwPXRydWUmbGFuZz10c1wiXG5leHBvcnQgKiBmcm9tIFwiLi9Qcm9kdWN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmc2V0dXA9dHJ1ZSZsYW5nPXRzXCJcblxuaW1wb3J0IFwiLi9Qcm9kdWN0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTNjZjRlZjZmJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZVwiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fc2NvcGVJZCcsXCJkYXRhLXYtM2NmNGVmNmZcIl0sWydfX2ZpbGUnLFwic3JjL2NvbXBvbmVudHMvUHJvZHVjdC52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiM2NmNGVmNmZcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCczY2Y0ZWY2ZicsIF9fZXhwb3J0c19fKSkge1xuICAgIGFwaS5yZWxvYWQoJzNjZjRlZjZmJywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Qcm9kdWN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zY2Y0ZWY2ZiZzY29wZWQ9dHJ1ZSZ0cz10cnVlXCIsICgpID0+IHtcbiAgICBhcGkucmVyZW5kZXIoJzNjZjRlZjZmJywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9maXJzdC1zZWN0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02ODIyZmRkMiZzY29wZWQ9dHJ1ZSZ0cz10cnVlXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vZmlyc3Qtc2VjdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0JnNldHVwPXRydWUmbGFuZz10c1wiXG5leHBvcnQgKiBmcm9tIFwiLi9maXJzdC1zZWN0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmc2V0dXA9dHJ1ZSZsYW5nPXRzXCJcblxuaW1wb3J0IFwiLi9maXJzdC1zZWN0aW9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTY4MjJmZGQyJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZVwiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fc2NvcGVJZCcsXCJkYXRhLXYtNjgyMmZkZDJcIl0sWydfX2ZpbGUnLFwic3JjL3NlY3Rpb25zL2thdGFsb2cvZmlyc3Qtc2VjdGlvbi52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiNjgyMmZkZDJcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCc2ODIyZmRkMicsIF9fZXhwb3J0c19fKSkge1xuICAgIGFwaS5yZWxvYWQoJzY4MjJmZGQyJywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9maXJzdC1zZWN0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02ODIyZmRkMiZzY29wZWQ9dHJ1ZSZ0cz10cnVlXCIsICgpID0+IHtcbiAgICBhcGkucmVyZW5kZXIoJzY4MjJmZGQyJywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9zZWNvbmQtc2VjdGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDE0ZjYyZjImc2NvcGVkPXRydWUmdHM9dHJ1ZVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3NlY29uZC1zZWN0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmc2V0dXA9dHJ1ZSZsYW5nPXRzXCJcbmV4cG9ydCAqIGZyb20gXCIuL3NlY29uZC1zZWN0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmc2V0dXA9dHJ1ZSZsYW5nPXRzXCJcblxuaW1wb3J0IFwiLi9zZWNvbmQtc2VjdGlvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wMTRmNjJmMiZsYW5nPXNjc3Mmc2NvcGVkPXRydWVcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2V4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl0sWydfX3Njb3BlSWQnLFwiZGF0YS12LTAxNGY2MmYyXCJdLFsnX19maWxlJyxcInNyYy9zZWN0aW9ucy9rYXRhbG9nL3NlY29uZC1zZWN0aW9uLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCIwMTRmNjJmMlwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzAxNGY2MmYyJywgX19leHBvcnRzX18pKSB7XG4gICAgYXBpLnJlbG9hZCgnMDE0ZjYyZjInLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3NlY29uZC1zZWN0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wMTRmNjJmMiZzY29wZWQ9dHJ1ZSZ0cz10cnVlXCIsICgpID0+IHtcbiAgICBhcGkucmVyZW5kZXIoJzAxNGY2MmYyJywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9rYXRhbG9nLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kNDlhMWYxMiZ0cz10cnVlXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4va2F0YWxvZy52dWU/dnVlJnR5cGU9c2NyaXB0JnNldHVwPXRydWUmbGFuZz10c1wiXG5leHBvcnQgKiBmcm9tIFwiLi9rYXRhbG9nLnZ1ZT92dWUmdHlwZT1zY3JpcHQmc2V0dXA9dHJ1ZSZsYW5nPXRzXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19maWxlJyxcInNyYy92aWV3cy9rYXRhbG9nLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCJkNDlhMWYxMlwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJ2Q0OWExZjEyJywgX19leHBvcnRzX18pKSB7XG4gICAgYXBpLnJlbG9hZCgnZDQ5YTFmMTInLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2thdGFsb2cudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWQ0OWExZjEyJnRzPXRydWVcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignZDQ5YTFmMTInLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxMF0udXNlWzBdIS4vQ3VzdG9tU2VsZWN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmc2V0dXA9dHJ1ZSZsYW5nPXRzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzEwXS51c2VbMF0hLi9DdXN0b21TZWxlY3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZzZXR1cD10cnVlJmxhbmc9dHNcIiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxMF0udXNlWzBdIS4vUHJvZHVjdC52dWU/dnVlJnR5cGU9c2NyaXB0JnNldHVwPXRydWUmbGFuZz10c1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxMF0udXNlWzBdIS4vUHJvZHVjdC52dWU/dnVlJnR5cGU9c2NyaXB0JnNldHVwPXRydWUmbGFuZz10c1wiIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzEwXS51c2VbMF0hLi9maXJzdC1zZWN0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmc2V0dXA9dHJ1ZSZsYW5nPXRzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzEwXS51c2VbMF0hLi9maXJzdC1zZWN0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmc2V0dXA9dHJ1ZSZsYW5nPXRzXCIiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMTBdLnVzZVswXSEuL3NlY29uZC1zZWN0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmc2V0dXA9dHJ1ZSZsYW5nPXRzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzEwXS51c2VbMF0hLi9zZWNvbmQtc2VjdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0JnNldHVwPXRydWUmbGFuZz10c1wiIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzEwXS51c2VbMF0hLi9rYXRhbG9nLnZ1ZT92dWUmdHlwZT1zY3JpcHQmc2V0dXA9dHJ1ZSZsYW5nPXRzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzEwXS51c2VbMF0hLi9rYXRhbG9nLnZ1ZT92dWUmdHlwZT1zY3JpcHQmc2V0dXA9dHJ1ZSZsYW5nPXRzXCIiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMTBdLnVzZVswXSEuL0N1c3RvbVNlbGVjdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wNDM1MGQwNiZsYW5nPXNjc3Mmc2NvcGVkPXRydWVcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiOTcxOWMyOTBcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzEwXS51c2VbMF0hLi9DdXN0b21TZWxlY3QudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDQzNTBkMDYmbGFuZz1zY3NzJnNjb3BlZD10cnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzEwXS51c2VbMF0hLi9DdXN0b21TZWxlY3QudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDQzNTBkMDYmbGFuZz1zY3NzJnNjb3BlZD10cnVlXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxMF0udXNlWzBdIS4vUHJvZHVjdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zY2Y0ZWY2ZiZsYW5nPXNjc3Mmc2NvcGVkPXRydWVcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiNzlkYjYzNzNcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzEwXS51c2VbMF0hLi9Qcm9kdWN0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTNjZjRlZjZmJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxMF0udXNlWzBdIS4vUHJvZHVjdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zY2Y0ZWY2ZiZsYW5nPXNjc3Mmc2NvcGVkPXRydWVcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzEwXS51c2VbMF0hLi9maXJzdC1zZWN0aW9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTY4MjJmZGQyJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZVwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIxYTFmYjc3OFwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMTBdLnVzZVswXSEuL2ZpcnN0LXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NjgyMmZkZDImbGFuZz1zY3NzJnNjb3BlZD10cnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzEwXS51c2VbMF0hLi9maXJzdC1zZWN0aW9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTY4MjJmZGQyJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZVwiKTtcbiAgICAgaWYobmV3Q29udGVudC5fX2VzTW9kdWxlKSBuZXdDb250ZW50ID0gbmV3Q29udGVudC5kZWZhdWx0O1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMTBdLnVzZVswXSEuL3NlY29uZC1zZWN0aW9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTAxNGY2MmYyJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZVwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIyODZiMjZmZFwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMTBdLnVzZVswXSEuL3NlY29uZC1zZWN0aW9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTAxNGY2MmYyJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxMF0udXNlWzBdIS4vc2Vjb25kLXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDE0ZjYyZjImbGFuZz1zY3NzJnNjb3BlZD10cnVlXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==