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
  height: 280px;
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
}`, "",{"version":3,"sources":["webpack://./src/components/Product.vue","webpack://./Product.vue"],"names":[],"mappings":"AACA;EACI,+CAAA;EACA,iBAAA;EACA,kBAAA;EACA,mBAAA;EACA,oBAAA;EAEA,yBAAA;EAEA,kBAAA;EAEA,aAAA;EACA,sBAAA;EACA,mBAAA;EAEA,SAAA;EAEA,oBAAA;ACLJ;ADOI;EACI,eAAA;EACA,4BAAA;ACLR;ADQI;EACI,WAAA;EACA,aAAA;EACA,mBAAA;ACNR;ADSI;EACI,eAAA;EACA,kBAAA;EACA,yBAAA;ACPR;ADWA;EAGI,aAAA;EACA,sBAAA;EACA,mBAAA;EAEA,WAAA;ACXJ;ADaI;EACI,yBAAA;EACA,eAAA;EACA,gBAAA;EACA,mBAAA;ACXR;ADeA;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,WAAA;EACA,SAAA;EACA,kBAAA;ACZJ;ADeA;EACI,yCAAA;EACA,UAAA;EACA,kBAAA;EACA,mBAAA;EAEA,gBAAA;EACA,yBAAA;ACbJ","sourcesContent":["\n.product {\n    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);\n    padding-top: 15px;\n    padding-left: 10px;\n    padding-right: 10px;\n    padding-bottom: 25px;\n\n    background-color: #141414;\n\n    border-radius: 5px;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    gap: 20px;\n\n    transition: all 0.3s;\n\n    &:hover {\n        cursor: pointer;\n        box-shadow: 0 0 10px #ffffff;\n    }\n\n    &__image {\n        width: 100%;\n        height: 280px;\n        object-fit: contain;\n    }\n\n    &__price {\n        font-size: 18px;\n        font-weight: 500px;\n        text-transform: uppercase;\n    }\n}\n\n.product-description {\n\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    width: 100%;\n\n    &__name {\n        text-transform: uppercase;\n        font-size: 22px;\n        font-weight: 600;\n        margin-bottom: 20px;\n    }\n}\n\n.product-description-specs {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n    gap: 10px;\n    margin-bottom: 5px;\n}\n\n.spec {\n    border-bottom: 2px dashed rgb(51, 51, 51);\n    width: 80%;\n    text-align: center;\n    padding-bottom: 5px;\n\n    font-weight: 300;\n    color: rgb(214, 213, 213);\n}\n",".product {\n  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);\n  padding-top: 15px;\n  padding-left: 10px;\n  padding-right: 10px;\n  padding-bottom: 25px;\n  background-color: #141414;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n  transition: all 0.3s;\n}\n.product:hover {\n  cursor: pointer;\n  box-shadow: 0 0 10px #ffffff;\n}\n.product__image {\n  width: 100%;\n  height: 280px;\n  object-fit: contain;\n}\n.product__price {\n  font-size: 18px;\n  font-weight: 500px;\n  text-transform: uppercase;\n}\n\n.product-description {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n}\n.product-description__name {\n  text-transform: uppercase;\n  font-size: 22px;\n  font-weight: 600;\n  margin-bottom: 20px;\n}\n\n.product-description-specs {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  gap: 10px;\n  margin-bottom: 5px;\n}\n\n.spec {\n  border-bottom: 2px dashed rgb(51, 51, 51);\n  width: 80%;\n  text-align: center;\n  padding-bottom: 5px;\n  font-weight: 300;\n  color: rgb(214, 213, 213);\n}"],"sourceRoot":""}]);
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
.paginate[data-v-014f62f2] {
  padding-top: 70px;
  width: fit-content;
  margin: 0 auto;
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
  height: fit-content;
  display: flex;
  flex-direction: column;
  padding: 15px;
  gap: 10px;
}
.products-box[data-v-014f62f2] {
  display: grid;
  grid-template-columns: repeat(auto-fit, 310px);
  gap: 20px;
  align-content: flex-start;
  align-items: flex-start;
}
.list-move[data-v-014f62f2],
.list-enter-active[data-v-014f62f2],
.list-leave-active[data-v-014f62f2] {
  transition: all 0.5s ease;
}
.list-enter-from[data-v-014f62f2],
.list-leave-to[data-v-014f62f2] {
  opacity: 0;
  transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active[data-v-014f62f2] {
  position: absolute;
}`, "",{"version":3,"sources":["webpack://./src/scss/base/typography.scss","webpack://./second-section.vue","webpack://./src/sections/katalog/second-section.vue"],"names":[],"mappings":"AAAA;EACI,WAAA;EACA,kBAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;EACA,qBAAA;EACA,yBAAA;EACA,mBAAA;ACCJ;ACNA;EACI,iBAAA;EACA,kBAAA;EACA,cAAA;ADSJ;ACNA;EACI,aAAA;EACA,gCAAA;EACA,SAAA;EACA,iBAAA;EACA,oBAAA;EACA,kBAAA;EACA,mBAAA;EACA,iBAAA;EACA,cAAA;ADSJ;ACNA;EACI,yBAAA;EACA,+CAAA;EACA,kBAAA;EACA,mBAAA;EAEA,aAAA;EACA,sBAAA;EACA,aAAA;EACA,SAAA;ADQJ;ACLA;EACI,aAAA;EACA,8CAAA;EACA,SAAA;EACA,yBAAA;EACA,uBAAA;ADQJ;ACJA;;;EAII,yBAAA;ADMJ;ACHA;;EAEI,UAAA;EACA,2BAAA;ADMJ;;ACHA;4CAAA;AAEA;EACI,kBAAA;ADMJ","sourcesContent":[".title {\n    color: #FFF;\n    font-family: Rubik;\n    font-size: 4rem;\n    font-style: normal;\n    font-weight: 600;\n    line-height: normal;\n    letter-spacing: 1.6px;\n    text-transform: uppercase;\n    margin-bottom: 21px;\n}",".title {\n  color: #FFF;\n  font-family: Rubik;\n  font-size: 4rem;\n  font-style: normal;\n  font-weight: 600;\n  line-height: normal;\n  letter-spacing: 1.6px;\n  text-transform: uppercase;\n  margin-bottom: 21px;\n}\n\n.paginate {\n  padding-top: 70px;\n  width: fit-content;\n  margin: 0 auto;\n}\n\n.second-section {\n  display: grid;\n  grid-template-columns: 380px 1fr;\n  gap: 30px;\n  padding-top: 56px;\n  padding-bottom: 68px;\n  padding-left: 20px;\n  padding-right: 20px;\n  max-width: 1420px;\n  margin: 0 auto;\n}\n\n.filters-box {\n  background-color: #141414;\n  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);\n  border-radius: 5px;\n  height: fit-content;\n  display: flex;\n  flex-direction: column;\n  padding: 15px;\n  gap: 10px;\n}\n\n.products-box {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 310px);\n  gap: 20px;\n  align-content: flex-start;\n  align-items: flex-start;\n}\n\n.list-move,\n.list-enter-active,\n.list-leave-active {\n  transition: all 0.5s ease;\n}\n\n.list-enter-from,\n.list-leave-to {\n  opacity: 0;\n  transform: translateX(30px);\n}\n\n/* ensure leaving items are taken out of layout flow so that moving\n   animations can be calculated correctly. */\n.list-leave-active {\n  position: absolute;\n}","\n@import '@/scss/base/mixins.scss';\n@import '@/scss/base/typography.scss';\n\n.paginate {\n    padding-top: 70px;\n    width: fit-content;\n    margin: 0 auto;\n}\n\n.second-section {\n    display: grid;\n    grid-template-columns: 380px 1fr;\n    gap: 30px;\n    padding-top: 56px;\n    padding-bottom: 68px;\n    padding-left: 20px;\n    padding-right: 20px;\n    max-width: 1420px;\n    margin: 0 auto;\n}\n\n.filters-box {\n    background-color: #141414;\n    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);\n    border-radius: 5px;\n    height: fit-content;\n\n    display: flex;\n    flex-direction: column;\n    padding: 15px;\n    gap: 10px;\n}\n\n.products-box {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, 310px);\n    gap: 20px;\n    align-content: flex-start;\n    align-items: flex-start;\n}\n\n\n.list-move,\n/* apply transition to moving elements */\n.list-enter-active,\n.list-leave-active {\n    transition: all 0.5s ease;\n}\n\n.list-enter-from,\n.list-leave-to {\n    opacity: 0;\n    transform: translateX(30px);\n}\n\n/* ensure leaving items are taken out of layout flow so that moving\n   animations can be calculated correctly. */\n.list-leave-active {\n    position: absolute;\n}\n"],"sourceRoot":""}]);
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
        labelLevel: { type: Number, required: false },
        chosen: { type: Array, required: true },
        matchingRules: { type: Array, required: false }
    },
    emits: ["update:chosen-add", "update:chosen-delete"],
    setup(__props, { expose: __expose, emit: __emit }) {
        __expose();
        const store = (0,_store_useVuex__WEBPACK_IMPORTED_MODULE_2__.useVuex)();
        const { app } = (0,_hooks_App_useAppSettings__WEBPACK_IMPORTED_MODULE_1__.useAppSettings)(store);
        const { title, list, multiple, labelName, valueName, labelLevel, chosen, matchingRules } = __props;
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
        const emit = __emit;
        if (matchingRules) {
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(matchedList, () => {
                console.log(matchedList.value);
                debugger;
                let forDeleteArray = [];
                chosen.forEach(item => {
                    if (!matchedList.value.includes(item)) {
                        forDeleteArray.push(item);
                    }
                });
                forDeleteArray.forEach(item => {
                    emit('update:chosen-delete', item);
                });
            }, { deep: true });
        }
        let isPanelOpen = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
        const choice = (item) => {
            if (chosen.includes(item)) {
                emit('update:chosen-delete', item);
                return;
            }
            emit('update:chosen-add', item);
        };
        const __returned__ = { store, app, matchedList, emit, get isPanelOpen() { return isPanelOpen; }, set isPanelOpen(v) { isPanelOpen = v; }, choice };
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
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.mjs");
/* harmony import */ var _components_CustomSelect_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/CustomSelect.vue */ "./src/components/CustomSelect.vue");
/* harmony import */ var _api_Katalog_getProducts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/api/Katalog/getProducts */ "./src/api/Katalog/getProducts.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/helpers */ "./src/helpers.ts");
/* harmony import */ var _store_useVuex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/store/useVuex */ "./src/store/useVuex.ts");
/* harmony import */ var _hooks_App_usePageSettings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/hooks/App/usePageSettings */ "./src/hooks/App/usePageSettings.ts");
/* harmony import */ var _hooks_Katalog_UseFilters__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/hooks/Katalog/UseFilters */ "./src/hooks/Katalog/UseFilters.ts");










/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    __name: 'second-section',
    emits: ["load"],
    setup(__props, { expose: __expose, emit: __emit }) {
        __expose();
        const emit = __emit;
        const route = (0,vue_router__WEBPACK_IMPORTED_MODULE_8__.useRoute)();
        const store = (0,_store_useVuex__WEBPACK_IMPORTED_MODULE_5__.useVuex)();
        const { page } = (0,_hooks_App_usePageSettings__WEBPACK_IMPORTED_MODULE_6__.usePageSettings)(store);
        const { filters, chosenFilters, getRequestParams, onMountedAction } = (0,_hooks_Katalog_UseFilters__WEBPACK_IMPORTED_MODULE_7__.UseFilters)(page);
        let isDataLoaded = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
        let products = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(getRequestParams, async () => {
            setTimeout(async () => {
                products.value = await (0,_api_Katalog_getProducts__WEBPACK_IMPORTED_MODULE_3__.getProducts)(20, category_ids[route.params.category], getRequestParams.value);
            }, 100);
        }, { deep: true });
        const category_ids = {
            laptop: 18,
            gaming: 16,
            workstation: 17
        };
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(route, async () => {
            products.value = await (0,_api_Katalog_getProducts__WEBPACK_IMPORTED_MODULE_3__.getProducts)(20, category_ids[route.params.category], getRequestParams.value);
            emit('load');
        }, { deep: true });
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeMount)(async () => {
            onMountedAction();
            products.value = await (0,_api_Katalog_getProducts__WEBPACK_IMPORTED_MODULE_3__.getProducts)(20, category_ids[route.params.category], getRequestParams.value);
            isDataLoaded.value = true;
            emit('load');
        });
        const __returned__ = { emit, route, store, page, filters, chosenFilters, getRequestParams, onMountedAction, get isDataLoaded() { return isDataLoaded; }, set isDataLoaded(v) { isDataLoaded = v; }, get products() { return products; }, set products(v) { products = v; }, category_ids, Product: _components_Product_vue__WEBPACK_IMPORTED_MODULE_1__["default"], CustomSelect: _components_CustomSelect_vue__WEBPACK_IMPORTED_MODULE_2__["default"], get eliminate() { return _helpers__WEBPACK_IMPORTED_MODULE_4__.eliminate; } };
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
        let { loader } = (0,_hooks_App_useLoad__WEBPACK_IMPORTED_MODULE_2__.useLoad)(2);
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
const _hoisted_3 = { class: "products-wrapper" };
const _hoisted_4 = { class: "products-box" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [
            ($setup.isDataLoaded)
                ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, { key: 0 }, [
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["CustomSelect"], {
                        "onUpdate:chosenDelete": _cache[0] || (_cache[0] = ($event) => ($setup.eliminate($setup.chosenFilters.producer_cpu, $event))),
                        "onUpdate:chosenAdd": _cache[1] || (_cache[1] = ($event) => ($setup.chosenFilters.producer_cpu.push($event))),
                        title: 'Производитель процессора',
                        list: $setup.filters.producer_cpu,
                        chosen: $setup.chosenFilters.producer_cpu,
                        labelName: 'name'
                    }, null, 8 /* PROPS */, ["list", "chosen"]),
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["CustomSelect"], {
                        "onUpdate:chosenDelete": _cache[2] || (_cache[2] = ($event) => ($setup.eliminate($setup.chosenFilters.socket_cpu, $event))),
                        "onUpdate:chosenAdd": _cache[3] || (_cache[3] = ($event) => ($setup.chosenFilters.socket_cpu.push($event))),
                        title: 'Сокет процессора',
                        list: $setup.filters.socket_cpu,
                        chosen: $setup.chosenFilters.socket_cpu,
                        labelName: 'name',
                        "matching-rules": [{ key: 'producer', type: 'matching', value: $setup.chosenFilters.producer_cpu, compareKey: 'name' }]
                    }, null, 8 /* PROPS */, ["list", "chosen", "matching-rules"]),
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["CustomSelect"], {
                        "onUpdate:chosenDelete": _cache[4] || (_cache[4] = ($event) => ($setup.eliminate($setup.chosenFilters.model_cpu, $event))),
                        "onUpdate:chosenAdd": _cache[5] || (_cache[5] = ($event) => ($setup.chosenFilters.model_cpu.push($event))),
                        title: 'Модель процессора',
                        "matching-rules": [
                            { key: 'producer', type: 'matching', value: $setup.chosenFilters.producer_cpu, compareKey: 'name' },
                            { key: 'socket', type: 'matching', value: $setup.chosenFilters.socket_cpu, compareKey: 'name' },
                        ],
                        list: $setup.filters.model_cpu,
                        chosen: $setup.chosenFilters.model_cpu
                    }, null, 8 /* PROPS */, ["matching-rules", "list", "chosen"]),
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["CustomSelect"], {
                        "onUpdate:chosenDelete": _cache[6] || (_cache[6] = ($event) => ($setup.eliminate($setup.chosenFilters.producer_gpu, $event))),
                        "onUpdate:chosenAdd": _cache[7] || (_cache[7] = ($event) => ($setup.chosenFilters.producer_gpu.push($event))),
                        title: 'Производитель видеокарты',
                        list: $setup.filters.producer_gpu,
                        chosen: $setup.chosenFilters.producer_gpu,
                        labelName: 'name'
                    }, null, 8 /* PROPS */, ["list", "chosen"]),
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["CustomSelect"], {
                        "onUpdate:chosenDelete": _cache[8] || (_cache[8] = ($event) => ($setup.eliminate($setup.chosenFilters.model_gpu, $event))),
                        "onUpdate:chosenAdd": _cache[9] || (_cache[9] = ($event) => ($setup.chosenFilters.model_gpu.push($event))),
                        title: 'Модель видеокарты',
                        list: $setup.filters.model_gpu,
                        chosen: $setup.chosenFilters.model_gpu,
                        "matching-rules": [{ key: 'producer', type: 'matching', value: $setup.chosenFilters.producer_gpu, compareKey: 'name' }]
                    }, null, 8 /* PROPS */, ["list", "chosen", "matching-rules"])
                ], 64 /* STABLE_FRAGMENT */))
                : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
        ]),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.TransitionGroup, { name: "list" }, {
                    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
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
                    ]),
                    _: 1 /* STABLE */
                })
            ])
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
            ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["SecondSection"], {
                key: 2,
                onLoad: _cache[1] || (_cache[1] = ($event) => ($setup.loader.load()))
            }))
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

const getProducts = async (per_page, category_id, params) => {
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
                category: category_id ?? null,
                page: page,
                ...params
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

/***/ "./src/hooks/Katalog/UseFilters.ts":
/*!*****************************************!*\
  !*** ./src/hooks/Katalog/UseFilters.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UseFilters: () => (/* binding */ UseFilters)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _api_Katalog_getProducts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api/Katalog/getProducts */ "./src/api/Katalog/getProducts.ts");


const UseFilters = (page) => {
    const filters = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({
        producer_cpu: [],
        socket_cpu: [],
        model_cpu: [],
        producer_gpu: [],
        model_gpu: [],
    });
    const chosenFilters = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({
        producer_cpu: [],
        socket_cpu: [],
        model_cpu: [],
        producer_gpu: [],
        model_gpu: [],
    });
    const getRequestParams = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        return {
            cpu_producer: chosenFilters.value.producer_cpu.map(item => item.name),
            cpu_socket: chosenFilters.value.socket_cpu.map(item => item.name),
            cpu_model: chosenFilters.value.model_cpu.map(item => item.id),
            gpu_producer: chosenFilters.value.producer_gpu.map(item => item.name),
            gpu_model: chosenFilters.value.model_gpu.map(item => item.id),
        };
    });
    const onMountedAction = async () => {
        filters.value.producer_cpu = page.value['filters_cpu-producer'];
        filters.value.model_cpu = await (0,_api_Katalog_getProducts__WEBPACK_IMPORTED_MODULE_1__.getProducts)(10, 21);
        filters.value.socket_cpu = page.value['filters_cpu-socket'];
        filters.value.producer_gpu = page.value['filters_gpu-producer'];
        filters.value.model_gpu = await (0,_api_Katalog_getProducts__WEBPACK_IMPORTED_MODULE_1__.getProducts)(10, 20);
        filters.value.model_cpu.forEach(item => {
            item.label = item.cfs.shortly_name;
            item.producer = item.cfs.producer;
            item.socket = item.cfs.properties.find(item => item.key[0].slug = 'cpu_socket')?.value;
        });
        filters.value.model_gpu.forEach(item => {
            item.label = item.cfs.shortly_name;
            item.producer = item.cfs.producer;
        });
    };
    return {
        filters,
        chosenFilters,
        getRequestParams,
        onMountedAction
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMzRiwrQ0FBK0M7QUFDL0M7QUFDQSxHQUFHLEtBQVUsRUFBRTs7Ozs7Ozs7OztBQ1hmOztBQUVBO0FBQ0EsY0FBYyxtQkFBTyxDQUFDLCtsQkFBaVQ7QUFDdlU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLGdLQUFpRjtBQUMzRiwrQ0FBK0M7QUFDL0M7QUFDQSxHQUFHLEtBQVUsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL3NyYy8uL3NyYy9jb21wb25lbnRzL0N1c3RvbVNlbGVjdC52dWU/YjVkZSIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0LnZ1ZT9iMTlhIiwid2VicGFjazovL3NyYy8uL3NyYy9zZWN0aW9ucy9rYXRhbG9nL2ZpcnN0LXNlY3Rpb24udnVlPzNkODAiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL3NlY3Rpb25zL2thdGFsb2cvc2Vjb25kLXNlY3Rpb24udnVlP2Q1ODgiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL2NvbXBvbmVudHMvQ3VzdG9tU2VsZWN0LnZ1ZT9hZDg5Iiwid2VicGFjazovL3NyYy8uL3NyYy9jb21wb25lbnRzL0N1c3RvbVNlbGVjdC52dWUiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdC52dWU/MzYzOSIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0LnZ1ZSIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvc2VjdGlvbnMva2F0YWxvZy9maXJzdC1zZWN0aW9uLnZ1ZT80MTUwIiwid2VicGFjazovL3NyYy8uL3NyYy9zZWN0aW9ucy9rYXRhbG9nL2ZpcnN0LXNlY3Rpb24udnVlIiwid2VicGFjazovL3NyYy8uL3NyYy9zZWN0aW9ucy9rYXRhbG9nL3NlY29uZC1zZWN0aW9uLnZ1ZT85NWVjIiwid2VicGFjazovL3NyYy8uL3NyYy9zZWN0aW9ucy9rYXRhbG9nL3NlY29uZC1zZWN0aW9uLnZ1ZSIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvdmlld3Mva2F0YWxvZy52dWU/ZDM2YyIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvdmlld3Mva2F0YWxvZy52dWUiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL2NvbXBvbmVudHMvQ3VzdG9tU2VsZWN0LnZ1ZT9hNzFiIiwid2VicGFjazovL3NyYy8uL3NyYy9jb21wb25lbnRzL1Byb2R1Y3QudnVlPzU3ZmYiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL3NlY3Rpb25zL2thdGFsb2cvZmlyc3Qtc2VjdGlvbi52dWU/MjY4ZSIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvc2VjdGlvbnMva2F0YWxvZy9zZWNvbmQtc2VjdGlvbi52dWU/Mzk4MCIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvdmlld3Mva2F0YWxvZy52dWU/NDRhNCIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvYXBpL0FwcC9nZXRQYWdlU2V0dGluZ3MudHMiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL2FwaS9LYXRhbG9nL2dldFByb2R1Y3RzLnRzIiwid2VicGFjazovL3NyYy8uL3NyYy9heGlvc1dvb2NvbWVyY2UudHMiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL2hvb2tzL0FwcC91c2VMb2FkLnRzIiwid2VicGFjazovL3NyYy8uL3NyYy9ob29rcy9BcHAvdXNlUGFnZVNldHRpbmdzLnRzIiwid2VicGFjazovL3NyYy8uL3NyYy9ob29rcy9LYXRhbG9nL1VzZUZpbHRlcnMudHMiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL2NvbXBvbmVudHMvQ3VzdG9tU2VsZWN0LnZ1ZT9mYTE0Iiwid2VicGFjazovL3NyYy8uL3NyYy9jb21wb25lbnRzL1Byb2R1Y3QudnVlP2NlZmIiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL3NlY3Rpb25zL2thdGFsb2cvZmlyc3Qtc2VjdGlvbi52dWU/NTBiZiIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvc2VjdGlvbnMva2F0YWxvZy9zZWNvbmQtc2VjdGlvbi52dWU/MmNlZSIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvdmlld3Mva2F0YWxvZy52dWU/OTUyOCIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvY29tcG9uZW50cy9DdXN0b21TZWxlY3QudnVlP2UzNWMiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdC52dWU/YzMzYyIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvc2VjdGlvbnMva2F0YWxvZy9maXJzdC1zZWN0aW9uLnZ1ZT9jNGJhIiwid2VicGFjazovL3NyYy8uL3NyYy9zZWN0aW9ucy9rYXRhbG9nL3NlY29uZC1zZWN0aW9uLnZ1ZT80ODdkIiwid2VicGFjazovL3NyYy8uL3NyYy92aWV3cy9rYXRhbG9nLnZ1ZT83ZDQ3Iiwid2VicGFjazovL3NyYy8uL3NyYy9jb21wb25lbnRzL0N1c3RvbVNlbGVjdC52dWU/MThhNyIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0LnZ1ZT9lNWVjIiwid2VicGFjazovL3NyYy8uL3NyYy9zZWN0aW9ucy9rYXRhbG9nL2ZpcnN0LXNlY3Rpb24udnVlP2I1NmEiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL3NlY3Rpb25zL2thdGFsb2cvc2Vjb25kLXNlY3Rpb24udnVlP2YzNmIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5zZWxlY3RbZGF0YS12LTA0MzUwZDA2XSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnNlbGVjdF9fcGFuZWxbZGF0YS12LTA0MzUwZDA2XSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxNnB4IDE4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwQzBDMEM7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLnNlbGVjdF9fdGl0bGVbZGF0YS12LTA0MzUwZDA2XSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICNGRkY7XG59XG4uc2VsZWN0X19saXN0W2RhdGEtdi0wNDM1MGQwNl0ge1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTBweDtcbn1cbi5zZWxlY3RfX2l0ZW1bZGF0YS12LTA0MzUwZDA2XSB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQxNDE0O1xufVxuLnNlbGVjdF9faXRlbSBidXR0b25bZGF0YS12LTA0MzUwZDA2XSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGNvbG9yOiAjRkZGO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4uc2VsZWN0X19pdGVtLS1hY3RpdmVbZGF0YS12LTA0MzUwZDA2XSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDM0MzQ7XG59XG4uc2VsZWN0X193cmFwcGVyW2RhdGEtdi0wNDM1MGQwNl0ge1xuICBoZWlnaHQ6IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBvcGFjaXR5OiAwO1xufVxuLnNlbGVjdF9fd3JhcHBlci0tb3BlbltkYXRhLXYtMDQzNTBkMDZdIHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBvcGFjaXR5OiAxO1xuICBoZWlnaHQ6IHVuc2V0O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvQ3VzdG9tU2VsZWN0LnZ1ZVwiLFwid2VicGFjazovLy4vQ3VzdG9tU2VsZWN0LnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNJLFdBQUE7QUNBSjtBREVJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUVBLGtCQUFBO0FDRFI7QURJSTtFQUNJLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ0ZSO0FES0k7RUFDSSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUNKUjtBRE9JO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQ0xSO0FET1E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQ0xaO0FEU1E7RUFDSSx5QkFBQTtBQ1BaO0FEV0k7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBRUEsZ0JBQUE7RUFFQSxVQUFBO0FDWFI7QURhUTtFQUVJLGlCQUFBO0VBQ0Esb0JBQUE7RUFFQSxVQUFBO0VBRUEsYUFBQTtBQ2RaXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbi5zZWxlY3Qge1xcbiAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgJl9fcGFuZWwge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBwYWRkaW5nOiAxNnB4IDE4cHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEMwQzBDO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIH1cXG5cXG4gICAgJl9fdGl0bGUge1xcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgICAgICBjb2xvcjogI0ZGRjtcXG4gICAgfVxcblxcbiAgICAmX19saXN0IHtcXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcblxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBnYXA6IDEwcHg7XFxuICAgIH1cXG5cXG4gICAgJl9faXRlbSB7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE0MTQxNDtcXG5cXG4gICAgICAgIGJ1dHRvbiB7XFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgICAgIGNvbG9yOiAjRkZGO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgICAgICB9XFxuXFxuXFxuICAgICAgICAmLS1hY3RpdmUge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDM0MzQ7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJl9fd3JhcHBlciB7XFxuICAgICAgICBoZWlnaHQ6IDBweDtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxuXFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcblxcbiAgICAgICAgb3BhY2l0eTogMDtcXG5cXG4gICAgICAgICYtLW9wZW4ge1xcblxcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcblxcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XFxuXFxuICAgICAgICAgICAgaGVpZ2h0OiB1bnNldDtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cIixcIi5zZWxlY3Qge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5zZWxlY3RfX3BhbmVsIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMTZweCAxOHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBDMEMwQztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG4uc2VsZWN0X190aXRsZSB7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGNvbG9yOiAjRkZGO1xcbn1cXG4uc2VsZWN0X19saXN0IHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxufVxcbi5zZWxlY3RfX2l0ZW0ge1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNDE0MTQ7XFxufVxcbi5zZWxlY3RfX2l0ZW0gYnV0dG9uIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgY29sb3I6ICNGRkY7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuLnNlbGVjdF9faXRlbS0tYWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDM0MzQ7XFxufVxcbi5zZWxlY3RfX3dyYXBwZXIge1xcbiAgaGVpZ2h0OiAwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIG9wYWNpdHk6IDA7XFxufVxcbi5zZWxlY3RfX3dyYXBwZXItLW9wZW4ge1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gIG9wYWNpdHk6IDE7XFxuICBoZWlnaHQ6IHVuc2V0O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5wcm9kdWN0W2RhdGEtdi0zY2Y0ZWY2Zl0ge1xuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDI1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNDE0MTQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAyMHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cbi5wcm9kdWN0W2RhdGEtdi0zY2Y0ZWY2Zl06aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4ICNmZmZmZmY7XG59XG4ucHJvZHVjdF9faW1hZ2VbZGF0YS12LTNjZjRlZjZmXSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDI4MHB4O1xuICBvYmplY3QtZml0OiBjb250YWluO1xufVxuLnByb2R1Y3RfX3ByaWNlW2RhdGEtdi0zY2Y0ZWY2Zl0ge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5wcm9kdWN0LWRlc2NyaXB0aW9uW2RhdGEtdi0zY2Y0ZWY2Zl0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cbi5wcm9kdWN0LWRlc2NyaXB0aW9uX19uYW1lW2RhdGEtdi0zY2Y0ZWY2Zl0ge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4ucHJvZHVjdC1kZXNjcmlwdGlvbi1zcGVjc1tkYXRhLXYtM2NmNGVmNmZdIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGdhcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLnNwZWNbZGF0YS12LTNjZjRlZjZmXSB7XG4gIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgcmdiKDUxLCA1MSwgNTEpO1xuICB3aWR0aDogODAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiByZ2IoMjE0LCAyMTMsIDIxMyk7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0LnZ1ZVwiLFwid2VicGFjazovLy4vUHJvZHVjdC52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7RUFDSSwrQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBRUEseUJBQUE7RUFFQSxrQkFBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBRUEsU0FBQTtFQUVBLG9CQUFBO0FDTEo7QURPSTtFQUNJLGVBQUE7RUFDQSw0QkFBQTtBQ0xSO0FEUUk7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDTlI7QURTSTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FDUFI7QURXQTtFQUdJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBRUEsV0FBQTtBQ1hKO0FEYUk7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDWFI7QURlQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQ1pKO0FEZUE7RUFDSSx5Q0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBRUEsZ0JBQUE7RUFDQSx5QkFBQTtBQ2JKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbi5wcm9kdWN0IHtcXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAyNXB4O1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQxNDE0O1xcblxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGdhcDogMjBweDtcXG5cXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxuXFxuICAgICY6aG92ZXIge1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggI2ZmZmZmZjtcXG4gICAgfVxcblxcbiAgICAmX19pbWFnZSB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogMjgwcHg7XFxuICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xcbiAgICB9XFxuXFxuICAgICZfX3ByaWNlIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDBweDtcXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIH1cXG59XFxuXFxuLnByb2R1Y3QtZGVzY3JpcHRpb24ge1xcblxcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgJl9fbmFtZSB7XFxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIH1cXG59XFxuXFxuLnByb2R1Y3QtZGVzY3JpcHRpb24tc3BlY3Mge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcblxcbi5zcGVjIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCByZ2IoNTEsIDUxLCA1MSk7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcXG5cXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgY29sb3I6IHJnYigyMTQsIDIxMywgMjEzKTtcXG59XFxuXCIsXCIucHJvZHVjdCB7XFxuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gIHBhZGRpbmctYm90dG9tOiAyNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE0MTQxNDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcbn1cXG4ucHJvZHVjdDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3gtc2hhZG93OiAwIDAgMTBweCAjZmZmZmZmO1xcbn1cXG4ucHJvZHVjdF9faW1hZ2Uge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDI4MHB4O1xcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcXG59XFxuLnByb2R1Y3RfX3ByaWNlIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDBweDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcblxcbi5wcm9kdWN0LWRlc2NyaXB0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ucHJvZHVjdC1kZXNjcmlwdGlvbl9fbmFtZSB7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5wcm9kdWN0LWRlc2NyaXB0aW9uLXNwZWNzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZ2FwOiAxMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4uc3BlYyB7XFxuICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkIHJnYig1MSwgNTEsIDUxKTtcXG4gIHdpZHRoOiA4MCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGNvbG9yOiByZ2IoMjE0LCAyMTMsIDIxMyk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnRpdGxlW2RhdGEtdi02ODIyZmRkMl0ge1xuICBjb2xvcjogI0ZGRjtcbiAgZm9udC1mYW1pbHk6IFJ1YmlrO1xuICBmb250LXNpemU6IDRyZW07XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW4tYm90dG9tOiAyMXB4O1xufVxuLmZpcnN0LXNlY3Rpb25bZGF0YS12LTY4MjJmZGQyXSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uZmlyc3Qtc2VjdGlvbi1jb250YWluZXJbZGF0YS12LTY4MjJmZGQyXSB7XG4gIHBhZGRpbmctdG9wOiAxNTBweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA4ZnIgNmZyO1xuICBnYXA6IDgwcHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xuLmZpcnN0LXNlY3Rpb24tY29udGFpbmVyW2RhdGEtdi02ODIyZmRkMl0ge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIHBhZGRpbmctdG9wOiA5MHB4O1xuICAgIGdhcDogMHB4O1xufVxufVxuLmltYWdlLWJveFtkYXRhLXYtNjgyMmZkZDJdIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcbi5pbWFnZS1ib3hbZGF0YS12LTY4MjJmZGQyXSB7XG4gICAgdG9wOiAxNXB4O1xufVxufVxuLmltYWdlLWJveCBpbWdbZGF0YS12LTY4MjJmZGQyXSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmRlc2NyaXB0aW9uLWJveFtkYXRhLXYtNjgyMmZkZDJdIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xuLmRlc2NyaXB0aW9uLWJveFtkYXRhLXYtNjgyMmZkZDJdIHtcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNSwgMTUsIDE1KTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB6LWluZGV4OiAxO1xufVxufVxuLmRlc2NyaXB0aW9uLWJveF9fdGl0bGVbZGF0YS12LTY4MjJmZGQyXSB7XG4gIG1hcmdpbi1ib3R0b206IDM1cHg7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9iYXNlL3R5cG9ncmFwaHkuc2Nzc1wiLFwid2VicGFjazovLy4vZmlyc3Qtc2VjdGlvbi52dWVcIixcIndlYnBhY2s6Ly8uL3NyYy9zZWN0aW9ucy9rYXRhbG9nL2ZpcnN0LXNlY3Rpb24udnVlXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9iYXNlL21peGlucy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQ0NKO0FDTkE7RUFDSSxnQkFBQTtBRFNKO0FDTkE7RUFJSSxrQkFBQTtFQUVBLGFBQUE7RUFDQSw4QkFBQTtFQVFBLFNBQUE7QURGSjtBRVJJO0FETEo7SUFVUSwwQkFBQTtJQUNBLGlCQUFBO0lBQ0EsUUFBQTtBRE9OO0FBQ0Y7QUNGQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QURLSjtBRXJCSTtBRGFKO0lBTVEsU0FBQTtBRE1OO0FBQ0Y7QUNKSTtFQUNJLFdBQUE7QURNUjtBQ0RBO0VBRUksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QURHSjtBRW5DSTtBRDRCSjtJQU9RLG1CQUFBO0lBQ0EsaUNBQUE7SUFDQSxhQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtJQUNBLFVBQUE7QURJTjtBQUNGO0FDRkk7RUFDSSxtQkFBQTtBRElSXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi50aXRsZSB7XFxuICAgIGNvbG9yOiAjRkZGO1xcbiAgICBmb250LWZhbWlseTogUnViaWs7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMS42cHg7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIG1hcmdpbi1ib3R0b206IDIxcHg7XFxufVwiLFwiLnRpdGxlIHtcXG4gIGNvbG9yOiAjRkZGO1xcbiAgZm9udC1mYW1pbHk6IFJ1YmlrO1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxuICBsZXR0ZXItc3BhY2luZzogMS42cHg7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgbWFyZ2luLWJvdHRvbTogMjFweDtcXG59XFxuXFxuLmZpcnN0LXNlY3Rpb24ge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmZpcnN0LXNlY3Rpb24tY29udGFpbmVyIHtcXG4gIHBhZGRpbmctdG9wOiAxNTBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDhmciA2ZnI7XFxuICBnYXA6IDgwcHg7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XFxuICAuZmlyc3Qtc2VjdGlvbi1jb250YWluZXIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgcGFkZGluZy10b3A6IDkwcHg7XFxuICAgIGdhcDogMHB4O1xcbiAgfVxcbn1cXG5cXG4uaW1hZ2UtYm94IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogMTBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xcbiAgLmltYWdlLWJveCB7XFxuICAgIHRvcDogMTVweDtcXG4gIH1cXG59XFxuLmltYWdlLWJveCBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5kZXNjcmlwdGlvbi1ib3gge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcXG4gIC5kZXNjcmlwdGlvbi1ib3gge1xcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUsIDE1LCAxNSk7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHotaW5kZXg6IDE7XFxuICB9XFxufVxcbi5kZXNjcmlwdGlvbi1ib3hfX3RpdGxlIHtcXG4gIG1hcmdpbi1ib3R0b206IDM1cHg7XFxufVwiLFwiXFxuQGltcG9ydCAnQC9zY3NzL2Jhc2UvbWl4aW5zLnNjc3MnO1xcbkBpbXBvcnQgJ0Avc2Nzcy9iYXNlL3R5cG9ncmFwaHkuc2Nzcyc7XFxuXFxuLmZpcnN0LXNlY3Rpb24ge1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uZmlyc3Qtc2VjdGlvbi1jb250YWluZXIge1xcbiAgICAvLyBtYXgtd2lkdGg6IDE2MDBweDtcXG4gICAgLy8gbWFyZ2luOiAwIGF1dG87XFxuICAgIC8vIHBhZGRpbmc6IDAgNDBweDtcXG4gICAgcGFkZGluZy10b3A6IDE1MHB4O1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDhmciA2ZnI7XFxuXFxuICAgIEBpbmNsdWRlIHRhYmxlIHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICAgICAgcGFkZGluZy10b3A6IDkwcHg7XFxuICAgICAgICBnYXA6IDBweDtcXG4gICAgfVxcblxcbiAgICBnYXA6IDgwcHg7XFxufVxcblxcbi5pbWFnZS1ib3gge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogMTBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgIEBpbmNsdWRlIHRhYmxlIHtcXG4gICAgICAgIHRvcDogMTVweDtcXG4gICAgfVxcblxcbiAgICBpbWcge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgIH1cXG59XFxuXFxuLmRlc2NyaXB0aW9uLWJveCB7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcblxcbiAgICBAaW5jbHVkZSB0YWJsZSB7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1LCAxNSwgMTUpO1xcbiAgICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgei1pbmRleDogMTtcXG4gICAgfVxcblxcbiAgICAmX190aXRsZSB7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzNXB4O1xcbiAgICB9XFxuXFxuICAgICZfX3RleHQge31cXG59XFxuXCIsXCJAbWl4aW4gcGhvbmUge1xcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xcbiAgICAgICAgQGNvbnRlbnQ7XFxuICAgIH1cXG59XFxuXFxuQG1peGluIG1pbi10YWJsZSB7XFxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAgICAgICBAY29udGVudDtcXG4gICAgfVxcbn1cXG5cXG5AbWl4aW4gdGFibGUge1xcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xcbiAgICAgICAgQGNvbnRlbnQ7XFxuICAgIH1cXG59XFxuXFxuQG1peGluIGxhcHRvcCB7XFxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMDBweCkge1xcbiAgICAgICAgQGNvbnRlbnQ7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAudGl0bGVbZGF0YS12LTAxNGY2MmYyXSB7XG4gIGNvbG9yOiAjRkZGO1xuICBmb250LWZhbWlseTogUnViaWs7XG4gIGZvbnQtc2l6ZTogNHJlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogMS42cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbi1ib3R0b206IDIxcHg7XG59XG4ucGFnaW5hdGVbZGF0YS12LTAxNGY2MmYyXSB7XG4gIHBhZGRpbmctdG9wOiA3MHB4O1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLnNlY29uZC1zZWN0aW9uW2RhdGEtdi0wMTRmNjJmMl0ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDM4MHB4IDFmcjtcbiAgZ2FwOiAzMHB4O1xuICBwYWRkaW5nLXRvcDogNTZweDtcbiAgcGFkZGluZy1ib3R0b206IDY4cHg7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgbWF4LXdpZHRoOiAxNDIwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLmZpbHRlcnMtYm94W2RhdGEtdi0wMTRmNjJmMl0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQxNDE0O1xuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAxNXB4O1xuICBnYXA6IDEwcHg7XG59XG4ucHJvZHVjdHMtYm94W2RhdGEtdi0wMTRmNjJmMl0ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgMzEwcHgpO1xuICBnYXA6IDIwcHg7XG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuLmxpc3QtbW92ZVtkYXRhLXYtMDE0ZjYyZjJdLFxuLmxpc3QtZW50ZXItYWN0aXZlW2RhdGEtdi0wMTRmNjJmMl0sXG4ubGlzdC1sZWF2ZS1hY3RpdmVbZGF0YS12LTAxNGY2MmYyXSB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XG59XG4ubGlzdC1lbnRlci1mcm9tW2RhdGEtdi0wMTRmNjJmMl0sXG4ubGlzdC1sZWF2ZS10b1tkYXRhLXYtMDE0ZjYyZjJdIHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDMwcHgpO1xufVxuXG4vKiBlbnN1cmUgbGVhdmluZyBpdGVtcyBhcmUgdGFrZW4gb3V0IG9mIGxheW91dCBmbG93IHNvIHRoYXQgbW92aW5nXG4gICBhbmltYXRpb25zIGNhbiBiZSBjYWxjdWxhdGVkIGNvcnJlY3RseS4gKi9cbi5saXN0LWxlYXZlLWFjdGl2ZVtkYXRhLXYtMDE0ZjYyZjJdIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Njc3MvYmFzZS90eXBvZ3JhcGh5LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NlY29uZC1zZWN0aW9uLnZ1ZVwiLFwid2VicGFjazovLy4vc3JjL3NlY3Rpb25zL2thdGFsb2cvc2Vjb25kLXNlY3Rpb24udnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQ0NKO0FDTkE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBRFNKO0FDTkE7RUFDSSxhQUFBO0VBQ0EsZ0NBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QURTSjtBQ05BO0VBQ0kseUJBQUE7RUFDQSwrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFFQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtBRFFKO0FDTEE7RUFDSSxhQUFBO0VBQ0EsOENBQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtBRFFKO0FDSkE7OztFQUlJLHlCQUFBO0FETUo7QUNIQTs7RUFFSSxVQUFBO0VBQ0EsMkJBQUE7QURNSjs7QUNIQTs0Q0FBQTtBQUVBO0VBQ0ksa0JBQUE7QURNSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIudGl0bGUge1xcbiAgICBjb2xvcjogI0ZGRjtcXG4gICAgZm9udC1mYW1pbHk6IFJ1YmlrO1xcbiAgICBmb250LXNpemU6IDRyZW07XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuNnB4O1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMXB4O1xcbn1cIixcIi50aXRsZSB7XFxuICBjb2xvcjogI0ZGRjtcXG4gIGZvbnQtZmFtaWx5OiBSdWJpaztcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNnB4O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIG1hcmdpbi1ib3R0b206IDIxcHg7XFxufVxcblxcbi5wYWdpbmF0ZSB7XFxuICBwYWRkaW5nLXRvcDogNzBweDtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4uc2Vjb25kLXNlY3Rpb24ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzgwcHggMWZyO1xcbiAgZ2FwOiAzMHB4O1xcbiAgcGFkZGluZy10b3A6IDU2cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogNjhweDtcXG4gIHBhZGRpbmctbGVmdDogMjBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxuICBtYXgtd2lkdGg6IDE0MjBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4uZmlsdGVycy1ib3gge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE0MTQxNDtcXG4gIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLnByb2R1Y3RzLWJveCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIDMxMHB4KTtcXG4gIGdhcDogMjBweDtcXG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuLmxpc3QtbW92ZSxcXG4ubGlzdC1lbnRlci1hY3RpdmUsXFxuLmxpc3QtbGVhdmUtYWN0aXZlIHtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XFxufVxcblxcbi5saXN0LWVudGVyLWZyb20sXFxuLmxpc3QtbGVhdmUtdG8ge1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzMHB4KTtcXG59XFxuXFxuLyogZW5zdXJlIGxlYXZpbmcgaXRlbXMgYXJlIHRha2VuIG91dCBvZiBsYXlvdXQgZmxvdyBzbyB0aGF0IG1vdmluZ1xcbiAgIGFuaW1hdGlvbnMgY2FuIGJlIGNhbGN1bGF0ZWQgY29ycmVjdGx5LiAqL1xcbi5saXN0LWxlYXZlLWFjdGl2ZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVwiLFwiXFxuQGltcG9ydCAnQC9zY3NzL2Jhc2UvbWl4aW5zLnNjc3MnO1xcbkBpbXBvcnQgJ0Avc2Nzcy9iYXNlL3R5cG9ncmFwaHkuc2Nzcyc7XFxuXFxuLnBhZ2luYXRlIHtcXG4gICAgcGFkZGluZy10b3A6IDcwcHg7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi5zZWNvbmQtc2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzgwcHggMWZyO1xcbiAgICBnYXA6IDMwcHg7XFxuICAgIHBhZGRpbmctdG9wOiA1NnB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNjhweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbiAgICBtYXgtd2lkdGg6IDE0MjBweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi5maWx0ZXJzLWJveCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNDE0MTQ7XFxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLnByb2R1Y3RzLWJveCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCAzMTBweCk7XFxuICAgIGdhcDogMjBweDtcXG4gICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcblxcbi5saXN0LW1vdmUsXFxuLyogYXBwbHkgdHJhbnNpdGlvbiB0byBtb3ZpbmcgZWxlbWVudHMgKi9cXG4ubGlzdC1lbnRlci1hY3RpdmUsXFxuLmxpc3QtbGVhdmUtYWN0aXZlIHtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcXG59XFxuXFxuLmxpc3QtZW50ZXItZnJvbSxcXG4ubGlzdC1sZWF2ZS10byB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzMHB4KTtcXG59XFxuXFxuLyogZW5zdXJlIGxlYXZpbmcgaXRlbXMgYXJlIHRha2VuIG91dCBvZiBsYXlvdXQgZmxvdyBzbyB0aGF0IG1vdmluZ1xcbiAgIGFuaW1hdGlvbnMgY2FuIGJlIGNhbGN1bGF0ZWQgY29ycmVjdGx5LiAqL1xcbi5saXN0LWxlYXZlLWFjdGl2ZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsImltcG9ydCB7IGRlZmluZUNvbXBvbmVudCBhcyBfZGVmaW5lQ29tcG9uZW50IH0gZnJvbSAndnVlJ1xuaW1wb3J0IHsgdXNlQXBwU2V0dGluZ3MgfSBmcm9tICdAL2hvb2tzL0FwcC91c2VBcHBTZXR0aW5ncyc7XG5pbXBvcnQgeyB1c2VWdWV4IH0gZnJvbSAnQC9zdG9yZS91c2VWdWV4JztcbmltcG9ydCB7IElNYXRjaGluZ1J1bGUsIFR5cGVNYXRjaGluZyB9IGZyb20gJ0AvdHlwZXMvS2F0YWxvZyc7XG5pbXBvcnQgeyBSZWYsIGNvbXB1dGVkLCByZWYsIHdhdGNoIH0gZnJvbSAndnVlJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIGxpc3Q6IEFycmF5PE9iamVjdD47XG4gICAgbXVsdGlwbGU/OiBib29sZWFuO1xuICAgIGxhYmVsTmFtZT86IHN0cmluZztcbiAgICB2YWx1ZU5hbWU/OiBzdHJpbmc7XG4gICAgbGFiZWxMZXZlbD86IG51bWJlcjtcbiAgICBjaG9zZW46IEFycmF5PE9iamVjdD47XG4gICAgbWF0Y2hpbmdSdWxlcz86IEFycmF5PElNYXRjaGluZ1J1bGU+XG59XG5cbmludGVyZmFjZSBFbWl0cyB7XG4gICAgKGU6ICd1cGRhdGU6Y2hvc2VuLWFkZCcsIGl0ZW06IG9iamVjdCk6IHZvaWRcbiAgICAoZTogJ3VwZGF0ZTpjaG9zZW4tZGVsZXRlJywgaXRlbTogb2JqZWN0KTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCAvKiNfX1BVUkVfXyovX2RlZmluZUNvbXBvbmVudCh7XG4gIF9fbmFtZTogJ0N1c3RvbVNlbGVjdCcsXG4gIHByb3BzOiB7XG4gICAgdGl0bGU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICAgIGxpc3Q6IHsgdHlwZTogQXJyYXksIHJlcXVpcmVkOiB0cnVlIH0sXG4gICAgbXVsdGlwbGU6IHsgdHlwZTogQm9vbGVhbiwgcmVxdWlyZWQ6IGZhbHNlIH0sXG4gICAgbGFiZWxOYW1lOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IGZhbHNlIH0sXG4gICAgdmFsdWVOYW1lOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IGZhbHNlIH0sXG4gICAgbGFiZWxMZXZlbDogeyB0eXBlOiBOdW1iZXIsIHJlcXVpcmVkOiBmYWxzZSB9LFxuICAgIGNob3NlbjogeyB0eXBlOiBBcnJheSwgcmVxdWlyZWQ6IHRydWUgfSxcbiAgICBtYXRjaGluZ1J1bGVzOiB7IHR5cGU6IEFycmF5LCByZXF1aXJlZDogZmFsc2UgfVxuICB9LFxuICBlbWl0czogW1widXBkYXRlOmNob3Nlbi1hZGRcIiwgXCJ1cGRhdGU6Y2hvc2VuLWRlbGV0ZVwiXSxcbiAgc2V0dXAoX19wcm9wczogYW55LCB7IGV4cG9zZTogX19leHBvc2UsIGVtaXQ6IF9fZW1pdCB9KSB7XG4gIF9fZXhwb3NlKCk7XG5cbmNvbnN0IHN0b3JlID0gdXNlVnVleCgpXG5cbmNvbnN0IHsgYXBwIH0gPSB1c2VBcHBTZXR0aW5ncyhzdG9yZSlcblxuY29uc3QgeyB0aXRsZSwgbGlzdCwgbXVsdGlwbGUsIGxhYmVsTmFtZSwgdmFsdWVOYW1lLCBsYWJlbExldmVsLCBjaG9zZW4sIG1hdGNoaW5nUnVsZXMgfSA9IF9fcHJvcHNcblxuY29uc3QgbWF0Y2hlZExpc3QgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgaWYgKCFtYXRjaGluZ1J1bGVzKSB7XG4gICAgICAgIHJldHVybiBsaXN0XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpc3QuZmlsdGVyKGl0ZW0gPT4ge1xuICAgICAgICBsZXQgbWF0Y2hpbmdDb3VudCA9IDBcbiAgICAgICAgZm9yIChjb25zdCBydWxlIG9mIG1hdGNoaW5nUnVsZXMpIHtcbiAgICAgICAgICAgIGlmIChydWxlLnZhbHVlLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgbWF0Y2hpbmdDb3VudCsrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gcnVsZS52YWx1ZS5maW5kKG9iaiA9PiBvYmpbcnVsZS5jb21wYXJlS2V5XSA9PSBpdGVtW3J1bGUua2V5XSlcbiAgICAgICAgICAgIGlmIChydWxlLnR5cGUgPT0gJ21hdGNoaW5nJyA/IHJlc3VsdCA6ICFyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBtYXRjaGluZ0NvdW50Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1hdGNoaW5nQ291bnQgPT0gbWF0Y2hpbmdSdWxlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSlcbn0pXG5cbmNvbnN0IGVtaXQgPSBfX2VtaXRcblxuaWYgKG1hdGNoaW5nUnVsZXMpIHtcbiAgICB3YXRjaChtYXRjaGVkTGlzdCwgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhtYXRjaGVkTGlzdC52YWx1ZSlcbiAgICAgICAgZGVidWdnZXJcblxuICAgICAgICBsZXQgZm9yRGVsZXRlQXJyYXkgPSBbXTtcbiAgICAgICAgY2hvc2VuLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBpZiAoIW1hdGNoZWRMaXN0LnZhbHVlLmluY2x1ZGVzKGl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgZm9yRGVsZXRlQXJyYXkucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGZvckRlbGV0ZUFycmF5LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBlbWl0KCd1cGRhdGU6Y2hvc2VuLWRlbGV0ZScsIGl0ZW0pXG4gICAgICAgIH0pXG4gICAgfSwgeyBkZWVwOiB0cnVlIH0pXG59XG5cblxuXG5cbmxldCBpc1BhbmVsT3BlbjogUmVmPGJvb2xlYW4+ID0gcmVmKGZhbHNlKVxuXG5cbmNvbnN0IGNob2ljZSA9IChpdGVtOiBvYmplY3QpID0+IHtcbiAgICBpZiAoY2hvc2VuLmluY2x1ZGVzKGl0ZW0pKSB7XG4gICAgICAgIGVtaXQoJ3VwZGF0ZTpjaG9zZW4tZGVsZXRlJywgaXRlbSlcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlbWl0KCd1cGRhdGU6Y2hvc2VuLWFkZCcsIGl0ZW0pXG59XG5cblxuY29uc3QgX19yZXR1cm5lZF9fID0geyBzdG9yZSwgYXBwLCBtYXRjaGVkTGlzdCwgZW1pdCwgZ2V0IGlzUGFuZWxPcGVuKCkgeyByZXR1cm4gaXNQYW5lbE9wZW4gfSwgc2V0IGlzUGFuZWxPcGVuKHYpIHsgaXNQYW5lbE9wZW4gPSB2IH0sIGNob2ljZSB9XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoX19yZXR1cm5lZF9fLCAnX19pc1NjcmlwdFNldHVwJywgeyBlbnVtZXJhYmxlOiBmYWxzZSwgdmFsdWU6IHRydWUgfSlcbnJldHVybiBfX3JldHVybmVkX19cbn1cblxufSkiLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cInNlbGVjdFwiPlxuICAgICAgICA8YnV0dG9uIEBjbGljaz1cImlzUGFuZWxPcGVuID0gIWlzUGFuZWxPcGVuXCIgY2xhc3M9XCJzZWxlY3RfX3BhbmVsXCI+XG4gICAgICAgICAgICA8cCBjbGFzcz1cInNlbGVjdF9fdGl0bGVcIj57eyB0aXRsZSB9fTwvcD5cbiAgICAgICAgICAgIDxpbWcgOnNyYz1cImFwcFsnZ2VuZXJhbF9zZWxlY3QtaWNvbiddXCIgYWx0PVwic2VsZWN0LWljb25cIj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzZWxlY3RfX3dyYXBwZXJcIiA6Y2xhc3M9XCJ7ICdzZWxlY3RfX3dyYXBwZXItLW9wZW4nOiBpc1BhbmVsT3BlbiB9XCI+XG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJzZWxlY3RfX2xpc3RcIj5cbiAgICAgICAgICAgICAgICA8bGkgdi1mb3I9XCIoaXRlbSwgaW5kZXgpIGluIG1hdGNoZWRMaXN0XCIgOmtleT1cImluZGV4XCIgY2xhc3M9XCJzZWxlY3RfX2l0ZW1cIlxuICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdzZWxlY3RfX2l0ZW0tLWFjdGl2ZSc6IGNob3Nlbi5pbmNsdWRlcyhpdGVtKSB9XCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gQGNsaWNrPVwiY2hvaWNlKGl0ZW0pXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7eyBsYWJlbE5hbWUgPyBpdGVtW2xhYmVsTmFtZV0gOiBpdGVtWydsYWJlbCddIH19XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyB1c2VBcHBTZXR0aW5ncyB9IGZyb20gJ0AvaG9va3MvQXBwL3VzZUFwcFNldHRpbmdzJztcbmltcG9ydCB7IHVzZVZ1ZXggfSBmcm9tICdAL3N0b3JlL3VzZVZ1ZXgnO1xuaW1wb3J0IHsgSU1hdGNoaW5nUnVsZSwgVHlwZU1hdGNoaW5nIH0gZnJvbSAnQC90eXBlcy9LYXRhbG9nJztcbmltcG9ydCB7IFJlZiwgY29tcHV0ZWQsIHJlZiwgd2F0Y2ggfSBmcm9tICd2dWUnO1xuXG5jb25zdCBzdG9yZSA9IHVzZVZ1ZXgoKVxuXG5jb25zdCB7IGFwcCB9ID0gdXNlQXBwU2V0dGluZ3Moc3RvcmUpXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBsaXN0OiBBcnJheTxPYmplY3Q+O1xuICAgIG11bHRpcGxlPzogYm9vbGVhbjtcbiAgICBsYWJlbE5hbWU/OiBzdHJpbmc7XG4gICAgdmFsdWVOYW1lPzogc3RyaW5nO1xuICAgIGxhYmVsTGV2ZWw/OiBudW1iZXI7XG4gICAgY2hvc2VuOiBBcnJheTxPYmplY3Q+O1xuICAgIG1hdGNoaW5nUnVsZXM/OiBBcnJheTxJTWF0Y2hpbmdSdWxlPlxufVxuXG5jb25zdCB7IHRpdGxlLCBsaXN0LCBtdWx0aXBsZSwgbGFiZWxOYW1lLCB2YWx1ZU5hbWUsIGxhYmVsTGV2ZWwsIGNob3NlbiwgbWF0Y2hpbmdSdWxlcyB9ID0gZGVmaW5lUHJvcHM8UHJvcHM+KClcblxuY29uc3QgbWF0Y2hlZExpc3QgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgaWYgKCFtYXRjaGluZ1J1bGVzKSB7XG4gICAgICAgIHJldHVybiBsaXN0XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpc3QuZmlsdGVyKGl0ZW0gPT4ge1xuICAgICAgICBsZXQgbWF0Y2hpbmdDb3VudCA9IDBcbiAgICAgICAgZm9yIChjb25zdCBydWxlIG9mIG1hdGNoaW5nUnVsZXMpIHtcbiAgICAgICAgICAgIGlmIChydWxlLnZhbHVlLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgbWF0Y2hpbmdDb3VudCsrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gcnVsZS52YWx1ZS5maW5kKG9iaiA9PiBvYmpbcnVsZS5jb21wYXJlS2V5XSA9PSBpdGVtW3J1bGUua2V5XSlcbiAgICAgICAgICAgIGlmIChydWxlLnR5cGUgPT0gJ21hdGNoaW5nJyA/IHJlc3VsdCA6ICFyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBtYXRjaGluZ0NvdW50Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1hdGNoaW5nQ291bnQgPT0gbWF0Y2hpbmdSdWxlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSlcbn0pXG5cbmludGVyZmFjZSBFbWl0cyB7XG4gICAgKGU6ICd1cGRhdGU6Y2hvc2VuLWFkZCcsIGl0ZW06IG9iamVjdCk6IHZvaWRcbiAgICAoZTogJ3VwZGF0ZTpjaG9zZW4tZGVsZXRlJywgaXRlbTogb2JqZWN0KTogdm9pZFxufVxuY29uc3QgZW1pdCA9IGRlZmluZUVtaXRzPEVtaXRzPigpXG5cbmlmIChtYXRjaGluZ1J1bGVzKSB7XG4gICAgd2F0Y2gobWF0Y2hlZExpc3QsICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cobWF0Y2hlZExpc3QudmFsdWUpXG4gICAgICAgIGRlYnVnZ2VyXG5cbiAgICAgICAgbGV0IGZvckRlbGV0ZUFycmF5ID0gW107XG4gICAgICAgIGNob3Nlbi5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgaWYgKCFtYXRjaGVkTGlzdC52YWx1ZS5pbmNsdWRlcyhpdGVtKSkge1xuICAgICAgICAgICAgICAgIGZvckRlbGV0ZUFycmF5LnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBmb3JEZWxldGVBcnJheS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgZW1pdCgndXBkYXRlOmNob3Nlbi1kZWxldGUnLCBpdGVtKVxuICAgICAgICB9KVxuICAgIH0sIHsgZGVlcDogdHJ1ZSB9KVxufVxuXG5cblxuXG5sZXQgaXNQYW5lbE9wZW46IFJlZjxib29sZWFuPiA9IHJlZihmYWxzZSlcblxuXG5jb25zdCBjaG9pY2UgPSAoaXRlbTogb2JqZWN0KSA9PiB7XG4gICAgaWYgKGNob3Nlbi5pbmNsdWRlcyhpdGVtKSkge1xuICAgICAgICBlbWl0KCd1cGRhdGU6Y2hvc2VuLWRlbGV0ZScsIGl0ZW0pXG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZW1pdCgndXBkYXRlOmNob3Nlbi1hZGQnLCBpdGVtKVxufVxuXG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxuLnNlbGVjdCB7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICAmX19wYW5lbCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiAxNnB4IDE4cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwQzBDMEM7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgfVxuXG4gICAgJl9fdGl0bGUge1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGNvbG9yOiAjRkZGO1xuICAgIH1cblxuICAgICZfX2xpc3Qge1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG5cbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgZ2FwOiAxMHB4O1xuICAgIH1cblxuICAgICZfX2l0ZW0ge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE0MTQxNDtcblxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBjb2xvcjogI0ZGRjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB9XG5cblxuICAgICAgICAmLS1hY3RpdmUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM0MzQzNDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICZfX3dyYXBwZXIge1xuICAgICAgICBoZWlnaHQ6IDBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAgICAgb3BhY2l0eTogMDtcblxuICAgICAgICAmLS1vcGVuIHtcblxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcblxuICAgICAgICAgICAgb3BhY2l0eTogMTtcblxuICAgICAgICAgICAgaGVpZ2h0OiB1bnNldDtcbiAgICAgICAgfVxuICAgIH1cbn1cbjwvc3R5bGU+IiwiaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IGFzIF9kZWZpbmVDb21wb25lbnQgfSBmcm9tICd2dWUnXG5pbXBvcnQgeyBJUHJvZHVjdCB9IGZyb20gJ0AvdHlwZXMvUHJvZHVjdCc7XG5pbXBvcnQgeyBjb21wdXRlZCB9IGZyb20gJ3Z1ZSc7XG5cblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgICBpbWFnZVNyYzogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBncm91cGVkX3Byb2R1Y3RzOiBJUHJvZHVjdFtdO1xuICAgIHByaWNlOiBzdHJpbmcgfCBudW1iZXI7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgLyojX19QVVJFX18qL19kZWZpbmVDb21wb25lbnQoe1xuICBfX25hbWU6ICdQcm9kdWN0JyxcbiAgcHJvcHM6IHtcbiAgICBpbWFnZVNyYzogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG4gICAgbmFtZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG4gICAgZ3JvdXBlZF9wcm9kdWN0czogeyB0eXBlOiBBcnJheSwgcmVxdWlyZWQ6IHRydWUgfSxcbiAgICBwcmljZTogeyB0eXBlOiBbU3RyaW5nLCBOdW1iZXJdLCByZXF1aXJlZDogdHJ1ZSB9XG4gIH0sXG4gIHNldHVwKF9fcHJvcHM6IGFueSwgeyBleHBvc2U6IF9fZXhwb3NlIH0pIHtcbiAgX19leHBvc2UoKTtcblxuY29uc3QgcHJvcHMgPSBfX3Byb3BzXG5cbmNvbnN0IG5lY2Vzc2FyeVNwZWNzU2x1Z3MgPSBbXG4gICAgJ2NwdScsICdncHUnLCAncmFtJ1xuXVxuY29uc3QgZ3JvdXBwZWRQcm9kdWN0TmFtZXMgPSBjb21wdXRlZCgoKSA9PiB7XG5cbiAgICBsZXQgZmlsdGVyZWRBcnJheSA9IHByb3BzLmdyb3VwZWRfcHJvZHVjdHMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5jYXRlZ29yaWVzLmZpbmQoY2F0ZWdvcnkgPT4gbmVjZXNzYXJ5U3BlY3NTbHVncy5pbmNsdWRlcyhjYXRlZ29yeS5zbHVnKSkpXG5cbiAgICByZXR1cm4gZmlsdGVyZWRBcnJheVxufSlcblxuY29uc3QgcHJvZHVjdENwdSA9IGNvbXB1dGVkKCgpID0+IGdyb3VwcGVkUHJvZHVjdE5hbWVzLnZhbHVlLmZpbmQoaXRlbSA9PiBpdGVtLmNhdGVnb3JpZXMuZmluZChjYXRlZ29yeSA9PiBjYXRlZ29yeS5zbHVnID09ICdjcHUnKSkpXG5cbmNvbnN0IHByb2R1Y3RHcHUgPSBjb21wdXRlZCgoKSA9PiBncm91cHBlZFByb2R1Y3ROYW1lcy52YWx1ZS5maW5kKGl0ZW0gPT4gaXRlbS5jYXRlZ29yaWVzLmZpbmQoY2F0ZWdvcnkgPT4gY2F0ZWdvcnkuc2x1ZyA9PSAnZ3B1JykpKVxuXG5jb25zdCBwcm9kdWN0UmFtID0gY29tcHV0ZWQoKCkgPT4gZ3JvdXBwZWRQcm9kdWN0TmFtZXMudmFsdWUuZmluZChpdGVtID0+IGl0ZW0uY2F0ZWdvcmllcy5maW5kKGNhdGVnb3J5ID0+IGNhdGVnb3J5LnNsdWcgPT0gJ3JhbScpKSlcblxuXG5jb25zdCBfX3JldHVybmVkX18gPSB7IHByb3BzLCBuZWNlc3NhcnlTcGVjc1NsdWdzLCBncm91cHBlZFByb2R1Y3ROYW1lcywgcHJvZHVjdENwdSwgcHJvZHVjdEdwdSwgcHJvZHVjdFJhbSB9XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoX19yZXR1cm5lZF9fLCAnX19pc1NjcmlwdFNldHVwJywgeyBlbnVtZXJhYmxlOiBmYWxzZSwgdmFsdWU6IHRydWUgfSlcbnJldHVybiBfX3JldHVybmVkX19cbn1cblxufSkiLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cInByb2R1Y3RcIj5cbiAgICAgICAgPGltZyBjbGFzcz1cInByb2R1Y3RfX2ltYWdlXCIgOnNyYz1cImltYWdlU3JjXCIgOmFsdD1cIm5hbWVcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3QtZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwicHJvZHVjdC1kZXNjcmlwdGlvbl9fbmFtZVwiPnt7IG5hbWUgfX08L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdC1kZXNjcmlwdGlvbi1zcGVjc1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzcGVjXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwPnt7IHByb2R1Y3RDcHUgPyBwcm9kdWN0Q3B1LmNmcy5zaG9ydGx5X25hbWUgOiAn0L7RgtGB0YPRgtGB0LLRg9C10YInIH19PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzcGVjXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwPnt7IHByb2R1Y3RHcHUgPyBwcm9kdWN0R3B1LmNmcy5zaG9ydGx5X25hbWUgOiAn0L7RgtGB0YPRgdGC0LLRg9C10YInIH19PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzcGVjXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwPnt7IHByb2R1Y3RSYW0gPyBwcm9kdWN0UmFtLmNmcy5zaG9ydGx5X25hbWUgOiAn0L7RgtGB0YPRgdGC0LLRg9C10YInIH19PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8cCBjbGFzcz1cInByb2R1Y3RfX3ByaWNlXCI+e3sgcHJpY2UgfX0gUlVCPC9wPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IElQcm9kdWN0IH0gZnJvbSAnQC90eXBlcy9Qcm9kdWN0JztcbmltcG9ydCB7IGNvbXB1dGVkIH0gZnJvbSAndnVlJztcblxuXG5pbnRlcmZhY2UgUHJvcHMge1xuICAgIGltYWdlU3JjOiBzdHJpbmc7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGdyb3VwZWRfcHJvZHVjdHM6IElQcm9kdWN0W107XG4gICAgcHJpY2U6IHN0cmluZyB8IG51bWJlcjtcbn1cblxuY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wczxQcm9wcz4oKVxuXG5jb25zdCBuZWNlc3NhcnlTcGVjc1NsdWdzID0gW1xuICAgICdjcHUnLCAnZ3B1JywgJ3JhbSdcbl1cbmNvbnN0IGdyb3VwcGVkUHJvZHVjdE5hbWVzID0gY29tcHV0ZWQoKCkgPT4ge1xuXG4gICAgbGV0IGZpbHRlcmVkQXJyYXkgPSBwcm9wcy5ncm91cGVkX3Byb2R1Y3RzLmZpbHRlcihpdGVtID0+IGl0ZW0uY2F0ZWdvcmllcy5maW5kKGNhdGVnb3J5ID0+IG5lY2Vzc2FyeVNwZWNzU2x1Z3MuaW5jbHVkZXMoY2F0ZWdvcnkuc2x1ZykpKVxuXG4gICAgcmV0dXJuIGZpbHRlcmVkQXJyYXlcbn0pXG5cbmNvbnN0IHByb2R1Y3RDcHUgPSBjb21wdXRlZCgoKSA9PiBncm91cHBlZFByb2R1Y3ROYW1lcy52YWx1ZS5maW5kKGl0ZW0gPT4gaXRlbS5jYXRlZ29yaWVzLmZpbmQoY2F0ZWdvcnkgPT4gY2F0ZWdvcnkuc2x1ZyA9PSAnY3B1JykpKVxuXG5jb25zdCBwcm9kdWN0R3B1ID0gY29tcHV0ZWQoKCkgPT4gZ3JvdXBwZWRQcm9kdWN0TmFtZXMudmFsdWUuZmluZChpdGVtID0+IGl0ZW0uY2F0ZWdvcmllcy5maW5kKGNhdGVnb3J5ID0+IGNhdGVnb3J5LnNsdWcgPT0gJ2dwdScpKSlcblxuY29uc3QgcHJvZHVjdFJhbSA9IGNvbXB1dGVkKCgpID0+IGdyb3VwcGVkUHJvZHVjdE5hbWVzLnZhbHVlLmZpbmQoaXRlbSA9PiBpdGVtLmNhdGVnb3JpZXMuZmluZChjYXRlZ29yeSA9PiBjYXRlZ29yeS5zbHVnID09ICdyYW0nKSkpXG5cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XG4ucHJvZHVjdCB7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDI1cHg7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQxNDE0O1xuXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBnYXA6IDIwcHg7XG5cbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcblxuICAgICY6aG92ZXIge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4ICNmZmZmZmY7XG4gICAgfVxuXG4gICAgJl9faW1hZ2Uge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAyODBweDtcbiAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICB9XG5cbiAgICAmX19wcmljZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMHB4O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIH1cbn1cblxuLnByb2R1Y3QtZGVzY3JpcHRpb24ge1xuXG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgJl9fbmFtZSB7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG59XG5cbi5wcm9kdWN0LWRlc2NyaXB0aW9uLXNwZWNzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBnYXA6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4uc3BlYyB7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCByZ2IoNTEsIDUxLCA1MSk7XG4gICAgd2lkdGg6IDgwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcblxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgY29sb3I6IHJnYigyMTQsIDIxMywgMjEzKTtcbn1cbjwvc3R5bGU+IiwiaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IGFzIF9kZWZpbmVDb21wb25lbnQgfSBmcm9tICd2dWUnXG5pbXBvcnQgeyB1c2VMb2FkIH0gZnJvbSAnQC9ob29rcy9BcHAvdXNlTG9hZCc7XG5pbXBvcnQgeyB1c2VQYWdlU2V0dGluZ3MgfSBmcm9tICdAL2hvb2tzL0FwcC91c2VQYWdlU2V0dGluZ3MnO1xuaW1wb3J0IHsgdXNlVnVleCB9IGZyb20gJ0Avc3RvcmUvdXNlVnVleCc7XG5pbXBvcnQgeyBJRmlyc3RTZWN0aW9uU2V0dGluZ3MgfSBmcm9tICdAL3R5cGVzL0thdGFsb2cnO1xuaW1wb3J0IHsgUmVmLCBjb21wdXRlZCwgb25VcGRhdGVkLCByZWYsIHdhdGNoIH0gZnJvbSAndnVlJztcbmltcG9ydCB7IHVzZVJvdXRlIH0gZnJvbSAndnVlLXJvdXRlcic7XG5pbXBvcnQgaW1hZ2VzTG9hZGVkIGZyb20gJ2ltYWdlc2xvYWRlZCc7XG5cblxuZXhwb3J0IGRlZmF1bHQgLyojX19QVVJFX18qL19kZWZpbmVDb21wb25lbnQoe1xuICBfX25hbWU6ICdmaXJzdC1zZWN0aW9uJyxcbiAgZW1pdHM6IFtcImxvYWRcIl0sXG4gIHNldHVwKF9fcHJvcHMsIHsgZXhwb3NlOiBfX2V4cG9zZSwgZW1pdDogX19lbWl0IH0pIHtcbiAgX19leHBvc2UoKTtcblxuXG5jb25zdCBlbWl0ID0gX19lbWl0XG5cbmNvbnN0IHJvdXRlID0gdXNlUm91dGUoKTtcblxuY29uc3Qgc3RvcmUgPSB1c2VWdWV4KClcblxubGV0IHsgcGFnZSB9ID0gdXNlUGFnZVNldHRpbmdzKHN0b3JlKVxuXG5jb25zdCBzZXR0aW5ncyA9IHJlZihwYWdlLnZhbHVlWydmaXJzdC1zZWN0aW9uLXNldHRpbmdzJ10pIGFzIFJlZjxJRmlyc3RTZWN0aW9uU2V0dGluZ3NbXT5cblxuY29uc3QgY3VycmVudFNldHRpbmdzID0gY29tcHV0ZWQoKCkgPT4gc2V0dGluZ3MudmFsdWUuZmluZChpdGVtID0+IGl0ZW0uY2F0ZWdvcnlbMF0uc2x1ZyA9PSByb3V0ZS5wYXJhbXMuY2F0ZWdvcnkpKVxuXG5cblxuXG4vLyByZWZzXG5jb25zdCBib3g6IFJlZjxIVE1MRWxlbWVudCB8IG51bGw+ID0gcmVmKG51bGwpXG5jb25zdCBpbWFnZTogUmVmPEhUTUxFbGVtZW50IHwgbnVsbD4gPSByZWYobnVsbClcblxubGV0IHsgbG9hZGVyIH0gPSB1c2VMb2FkKDEpXG5cblxuXG5sb2FkZXIudmFsdWUub25BbGxpc0xvYWRlZCA9ICgpID0+IHtcbiAgICBlbWl0KCdsb2FkJylcbiAgICBsb2FkZXIudmFsdWUucmVzdGFydCgpXG59XG5cbmNvbnN0IHVwZGF0ZUltYWdlcyA9ICgpID0+IHtcbiAgICBpbWFnZXNMb2FkZWQoYm94LnZhbHVlLCAoKSA9PiB7XG4gICAgICAgIGxvYWRlci52YWx1ZS5sb2FkKClcbiAgICB9KVxufVxuXG5cbmNvbnN0IF9fcmV0dXJuZWRfXyA9IHsgZW1pdCwgcm91dGUsIHN0b3JlLCBnZXQgcGFnZSgpIHsgcmV0dXJuIHBhZ2UgfSwgc2V0IHBhZ2UodikgeyBwYWdlID0gdiB9LCBzZXR0aW5ncywgY3VycmVudFNldHRpbmdzLCBib3gsIGltYWdlLCBnZXQgbG9hZGVyKCkgeyByZXR1cm4gbG9hZGVyIH0sIHNldCBsb2FkZXIodikgeyBsb2FkZXIgPSB2IH0sIHVwZGF0ZUltYWdlcyB9XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoX19yZXR1cm5lZF9fLCAnX19pc1NjcmlwdFNldHVwJywgeyBlbnVtZXJhYmxlOiBmYWxzZSwgdmFsdWU6IHRydWUgfSlcbnJldHVybiBfX3JldHVybmVkX19cbn1cblxufSkiLCI8dGVtcGxhdGU+XG4gICAgPGRpdiByZWY9XCJib3hcIiBjbGFzcz1cImZpcnN0LXNlY3Rpb25cIlxuICAgICAgICA6c3R5bGU9XCJ7IGJhY2tncm91bmQ6IGB1cmwoJyR7Y3VycmVudFNldHRpbmdzLmJhY2tncm91bmR9JyksIG5vLXJlcGVhdCBjZW50ZXIgLyBjb3ZlcmAgfVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmlyc3Qtc2VjdGlvbi1jb250YWluZXIgY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW1hZ2UtYm94XCI+XG4gICAgICAgICAgICAgICAgPGltZyBAbG9hZD1cInVwZGF0ZUltYWdlc1wiIHJlZj1cImltYWdlXCIgOnNyYz1cImN1cnJlbnRTZXR0aW5ncy5pbWFnZVwiIDphbHQ9XCJjdXJyZW50U2V0dGluZ3MudGl0bGVcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlc2NyaXB0aW9uLWJveFwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZGVzY3JpcHRpb24tYm94X190aXRsZSB0aXRsZVwiPnt7IGN1cnJlbnRTZXR0aW5ncy50aXRsZSB9fTwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImRlc2NyaXB0aW9uLWJveF9fdGV4dFwiPnt7IGN1cnJlbnRTZXR0aW5ncy50ZXh0IH19PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cblxuaW1wb3J0IHsgdXNlTG9hZCB9IGZyb20gJ0AvaG9va3MvQXBwL3VzZUxvYWQnO1xuaW1wb3J0IHsgdXNlUGFnZVNldHRpbmdzIH0gZnJvbSAnQC9ob29rcy9BcHAvdXNlUGFnZVNldHRpbmdzJztcbmltcG9ydCB7IHVzZVZ1ZXggfSBmcm9tICdAL3N0b3JlL3VzZVZ1ZXgnO1xuaW1wb3J0IHsgSUZpcnN0U2VjdGlvblNldHRpbmdzIH0gZnJvbSAnQC90eXBlcy9LYXRhbG9nJztcbmltcG9ydCB7IFJlZiwgY29tcHV0ZWQsIG9uVXBkYXRlZCwgcmVmLCB3YXRjaCB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgeyB1c2VSb3V0ZSB9IGZyb20gJ3Z1ZS1yb3V0ZXInO1xuaW1wb3J0IGltYWdlc0xvYWRlZCBmcm9tICdpbWFnZXNsb2FkZWQnO1xuXG5jb25zdCBlbWl0ID0gZGVmaW5lRW1pdHM8e1xuICAgIChlOiAnbG9hZCcpOiB2b2lkXG59PigpXG5cbmNvbnN0IHJvdXRlID0gdXNlUm91dGUoKTtcblxuY29uc3Qgc3RvcmUgPSB1c2VWdWV4KClcblxubGV0IHsgcGFnZSB9ID0gdXNlUGFnZVNldHRpbmdzKHN0b3JlKVxuXG5jb25zdCBzZXR0aW5ncyA9IHJlZihwYWdlLnZhbHVlWydmaXJzdC1zZWN0aW9uLXNldHRpbmdzJ10pIGFzIFJlZjxJRmlyc3RTZWN0aW9uU2V0dGluZ3NbXT5cblxuY29uc3QgY3VycmVudFNldHRpbmdzID0gY29tcHV0ZWQoKCkgPT4gc2V0dGluZ3MudmFsdWUuZmluZChpdGVtID0+IGl0ZW0uY2F0ZWdvcnlbMF0uc2x1ZyA9PSByb3V0ZS5wYXJhbXMuY2F0ZWdvcnkpKVxuXG5cblxuXG4vLyByZWZzXG5jb25zdCBib3g6IFJlZjxIVE1MRWxlbWVudCB8IG51bGw+ID0gcmVmKG51bGwpXG5jb25zdCBpbWFnZTogUmVmPEhUTUxFbGVtZW50IHwgbnVsbD4gPSByZWYobnVsbClcblxubGV0IHsgbG9hZGVyIH0gPSB1c2VMb2FkKDEpXG5cblxuXG5sb2FkZXIudmFsdWUub25BbGxpc0xvYWRlZCA9ICgpID0+IHtcbiAgICBlbWl0KCdsb2FkJylcbiAgICBsb2FkZXIudmFsdWUucmVzdGFydCgpXG59XG5cbmNvbnN0IHVwZGF0ZUltYWdlcyA9ICgpID0+IHtcbiAgICBpbWFnZXNMb2FkZWQoYm94LnZhbHVlLCAoKSA9PiB7XG4gICAgICAgIGxvYWRlci52YWx1ZS5sb2FkKClcbiAgICB9KVxufVxuXG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxuQGltcG9ydCAnQC9zY3NzL2Jhc2UvbWl4aW5zLnNjc3MnO1xuQGltcG9ydCAnQC9zY3NzL2Jhc2UvdHlwb2dyYXBoeS5zY3NzJztcblxuLmZpcnN0LXNlY3Rpb24ge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5maXJzdC1zZWN0aW9uLWNvbnRhaW5lciB7XG4gICAgLy8gbWF4LXdpZHRoOiAxNjAwcHg7XG4gICAgLy8gbWFyZ2luOiAwIGF1dG87XG4gICAgLy8gcGFkZGluZzogMCA0MHB4O1xuICAgIHBhZGRpbmctdG9wOiAxNTBweDtcblxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA4ZnIgNmZyO1xuXG4gICAgQGluY2x1ZGUgdGFibGUge1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICAgICAgcGFkZGluZy10b3A6IDkwcHg7XG4gICAgICAgIGdhcDogMHB4O1xuICAgIH1cblxuICAgIGdhcDogODBweDtcbn1cblxuLmltYWdlLWJveCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMTBweDtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIEBpbmNsdWRlIHRhYmxlIHtcbiAgICAgICAgdG9wOiAxNXB4O1xuICAgIH1cblxuICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgfVxufVxuXG4uZGVzY3JpcHRpb24tYm94IHtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblxuICAgIEBpbmNsdWRlIHRhYmxlIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1LCAxNSwgMTUpO1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgIH1cblxuICAgICZfX3RpdGxlIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzVweDtcbiAgICB9XG5cbiAgICAmX190ZXh0IHt9XG59XG48L3N0eWxlPiIsImltcG9ydCB7IGRlZmluZUNvbXBvbmVudCBhcyBfZGVmaW5lQ29tcG9uZW50IH0gZnJvbSAndnVlJ1xuaW1wb3J0IFByb2R1Y3QgZnJvbSAnQC9jb21wb25lbnRzL1Byb2R1Y3QudnVlJztcbmltcG9ydCBXT08gZnJvbSAnQC9heGlvc1dvb2NvbWVyY2UnXG5pbXBvcnQgeyBSZWYsIGNvbXB1dGVkLCBvbkJlZm9yZU1vdW50LCBvbk1vdW50ZWQsIHJlZiwgd2F0Y2ggfSBmcm9tICd2dWUnO1xuaW1wb3J0IHsgSUdyb3VwcGVkUHJvZHVjdCB9IGZyb20gJ0AvdHlwZXMvUHJvZHVjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZSB9IGZyb20gJ3Z1ZS1yb3V0ZXInO1xuaW1wb3J0IEN1c3RvbVNlbGVjdCBmcm9tICdAL2NvbXBvbmVudHMvQ3VzdG9tU2VsZWN0LnZ1ZSc7XG5pbXBvcnQgeyBJUGFyYW1zLCBnZXRQcm9kdWN0cyB9IGZyb20gJ0AvYXBpL0thdGFsb2cvZ2V0UHJvZHVjdHMnO1xuXG5pbXBvcnQgeyBlbGltaW5hdGUgfSBmcm9tICdAL2hlbHBlcnMnO1xuaW1wb3J0IHsgdXNlQXBwU2V0dGluZ3MgfSBmcm9tICdAL2hvb2tzL0FwcC91c2VBcHBTZXR0aW5ncyc7XG5pbXBvcnQgeyB1c2VWdWV4IH0gZnJvbSAnQC9zdG9yZS91c2VWdWV4JztcbmltcG9ydCB7IHVzZVBhZ2VTZXR0aW5ncyB9IGZyb20gJ0AvaG9va3MvQXBwL3VzZVBhZ2VTZXR0aW5ncyc7XG5pbXBvcnQgeyBVc2VGaWx0ZXJzIH0gZnJvbSAnQC9ob29rcy9LYXRhbG9nL1VzZUZpbHRlcnMnO1xuaW1wb3J0IFBhZ2luYXRlQnV0dG9ucyBmcm9tICdAL2NvbXBvbmVudHMvUGFnaW5hdGVCdXR0b25zLnZ1ZSc7XG5cbmludGVyZmFjZSBFbWl0cyB7XG4gICAgKGU6ICdsb2FkJyk6IHZvaWRcbn1cblxuXG5leHBvcnQgZGVmYXVsdCAvKiNfX1BVUkVfXyovX2RlZmluZUNvbXBvbmVudCh7XG4gIF9fbmFtZTogJ3NlY29uZC1zZWN0aW9uJyxcbiAgZW1pdHM6IFtcImxvYWRcIl0sXG4gIHNldHVwKF9fcHJvcHMsIHsgZXhwb3NlOiBfX2V4cG9zZSwgZW1pdDogX19lbWl0IH0pIHtcbiAgX19leHBvc2UoKTtcblxuY29uc3QgZW1pdCA9IF9fZW1pdFxuXG5jb25zdCByb3V0ZSA9IHVzZVJvdXRlKCk7XG5cbmNvbnN0IHN0b3JlID0gdXNlVnVleCgpO1xuXG5jb25zdCB7IHBhZ2UgfSA9IHVzZVBhZ2VTZXR0aW5ncyhzdG9yZSk7XG5cbmNvbnN0IHsgZmlsdGVycywgY2hvc2VuRmlsdGVycywgZ2V0UmVxdWVzdFBhcmFtcywgb25Nb3VudGVkQWN0aW9uIH0gPSBVc2VGaWx0ZXJzKHBhZ2UpO1xuXG5sZXQgaXNEYXRhTG9hZGVkOiBSZWY8Ym9vbGVhbj4gPSByZWYoZmFsc2UpXG5cbmxldCBwcm9kdWN0czogUmVmPEFycmF5PElHcm91cHBlZFByb2R1Y3Q+PiA9IHJlZihbXSlcblxuXG53YXRjaChnZXRSZXF1ZXN0UGFyYW1zLCBhc3luYyAoKSA9PiB7XG4gICAgc2V0VGltZW91dChhc3luYyAoKSA9PiB7XG4gICAgICAgIHByb2R1Y3RzLnZhbHVlID0gYXdhaXQgZ2V0UHJvZHVjdHMoMjAsIGNhdGVnb3J5X2lkc1tyb3V0ZS5wYXJhbXMuY2F0ZWdvcnkgYXMgc3RyaW5nXSwgZ2V0UmVxdWVzdFBhcmFtcy52YWx1ZSlcbiAgICB9LCAxMDApXG59LCB7IGRlZXA6IHRydWUgfSlcblxuY29uc3QgY2F0ZWdvcnlfaWRzID0ge1xuICAgIGxhcHRvcDogMTgsXG4gICAgZ2FtaW5nOiAxNixcbiAgICB3b3Jrc3RhdGlvbjogMTdcbn1cblxud2F0Y2gocm91dGUsIGFzeW5jICgpID0+IHtcbiAgICBwcm9kdWN0cy52YWx1ZSA9IGF3YWl0IGdldFByb2R1Y3RzKDIwLCBjYXRlZ29yeV9pZHNbcm91dGUucGFyYW1zLmNhdGVnb3J5IGFzIHN0cmluZ10sIGdldFJlcXVlc3RQYXJhbXMudmFsdWUpXG4gICAgZW1pdCgnbG9hZCcpXG59LCB7IGRlZXA6IHRydWUgfSlcblxuXG5vbkJlZm9yZU1vdW50KGFzeW5jICgpID0+IHtcbiAgICBvbk1vdW50ZWRBY3Rpb24oKTtcbiAgICBcbiAgICBwcm9kdWN0cy52YWx1ZSA9IGF3YWl0IGdldFByb2R1Y3RzKDIwLCBjYXRlZ29yeV9pZHNbcm91dGUucGFyYW1zLmNhdGVnb3J5IGFzIHN0cmluZ10sIGdldFJlcXVlc3RQYXJhbXMudmFsdWUpXG5cbiAgICBpc0RhdGFMb2FkZWQudmFsdWUgPSB0cnVlXG5cbiAgICBlbWl0KCdsb2FkJylcblxufSlcblxuXG5jb25zdCBfX3JldHVybmVkX18gPSB7IGVtaXQsIHJvdXRlLCBzdG9yZSwgcGFnZSwgZmlsdGVycywgY2hvc2VuRmlsdGVycywgZ2V0UmVxdWVzdFBhcmFtcywgb25Nb3VudGVkQWN0aW9uLCBnZXQgaXNEYXRhTG9hZGVkKCkgeyByZXR1cm4gaXNEYXRhTG9hZGVkIH0sIHNldCBpc0RhdGFMb2FkZWQodikgeyBpc0RhdGFMb2FkZWQgPSB2IH0sIGdldCBwcm9kdWN0cygpIHsgcmV0dXJuIHByb2R1Y3RzIH0sIHNldCBwcm9kdWN0cyh2KSB7IHByb2R1Y3RzID0gdiB9LCBjYXRlZ29yeV9pZHMsIFByb2R1Y3QsIEN1c3RvbVNlbGVjdCwgZ2V0IGVsaW1pbmF0ZSgpIHsgcmV0dXJuIGVsaW1pbmF0ZSB9IH1cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShfX3JldHVybmVkX18sICdfX2lzU2NyaXB0U2V0dXAnLCB7IGVudW1lcmFibGU6IGZhbHNlLCB2YWx1ZTogdHJ1ZSB9KVxucmV0dXJuIF9fcmV0dXJuZWRfX1xufVxuXG59KSIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwic2Vjb25kLXNlY3Rpb25cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZpbHRlcnMtYm94XCI+XG4gICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cImlzRGF0YUxvYWRlZFwiPlxuICAgICAgICAgICAgICAgIDxDdXN0b21TZWxlY3QgQHVwZGF0ZTpjaG9zZW4tZGVsZXRlPVwiZWxpbWluYXRlKGNob3NlbkZpbHRlcnMucHJvZHVjZXJfY3B1LCAkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgQHVwZGF0ZTpjaG9zZW4tYWRkPVwiY2hvc2VuRmlsdGVycy5wcm9kdWNlcl9jcHUucHVzaCgkZXZlbnQpXCIgOnRpdGxlPVwiJ9Cf0YDQvtC40LfQstC+0LTQuNGC0LXQu9GMINC/0YDQvtGG0LXRgdGB0L7RgNCwJ1wiXG4gICAgICAgICAgICAgICAgICAgIDpsaXN0PVwiZmlsdGVycy5wcm9kdWNlcl9jcHVcIiA6Y2hvc2VuPVwiY2hvc2VuRmlsdGVycy5wcm9kdWNlcl9jcHVcIiA6bGFiZWxOYW1lPVwiJ25hbWUnXCIgLz5cbiAgICAgICAgICAgICAgICA8Q3VzdG9tU2VsZWN0IEB1cGRhdGU6Y2hvc2VuLWRlbGV0ZT1cImVsaW1pbmF0ZShjaG9zZW5GaWx0ZXJzLnNvY2tldF9jcHUsICRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICBAdXBkYXRlOmNob3Nlbi1hZGQ9XCJjaG9zZW5GaWx0ZXJzLnNvY2tldF9jcHUucHVzaCgkZXZlbnQpXCIgOnRpdGxlPVwiJ9Ch0L7QutC10YIg0L/RgNC+0YbQtdGB0YHQvtGA0LAnXCJcbiAgICAgICAgICAgICAgICAgICAgOmxpc3Q9XCJmaWx0ZXJzLnNvY2tldF9jcHVcIiA6Y2hvc2VuPVwiY2hvc2VuRmlsdGVycy5zb2NrZXRfY3B1XCIgOmxhYmVsTmFtZT1cIiduYW1lJ1wiXG4gICAgICAgICAgICAgICAgICAgIDptYXRjaGluZy1ydWxlcz1cIlt7IGtleTogJ3Byb2R1Y2VyJywgdHlwZTogJ21hdGNoaW5nJywgdmFsdWU6IGNob3NlbkZpbHRlcnMucHJvZHVjZXJfY3B1LCBjb21wYXJlS2V5OiAnbmFtZScgfV1cIiAvPlxuICAgICAgICAgICAgICAgIDxDdXN0b21TZWxlY3QgQHVwZGF0ZTpjaG9zZW4tZGVsZXRlPVwiZWxpbWluYXRlKGNob3NlbkZpbHRlcnMubW9kZWxfY3B1LCAkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgQHVwZGF0ZTpjaG9zZW4tYWRkPVwiY2hvc2VuRmlsdGVycy5tb2RlbF9jcHUucHVzaCgkZXZlbnQpXCIgOnRpdGxlPVwiJ9Cc0L7QtNC10LvRjCDQv9GA0L7RhtC10YHRgdC+0YDQsCdcIiA6bWF0Y2hpbmctcnVsZXM9XCJbXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ3Byb2R1Y2VyJywgdHlwZTogJ21hdGNoaW5nJywgdmFsdWU6IGNob3NlbkZpbHRlcnMucHJvZHVjZXJfY3B1LCBjb21wYXJlS2V5OiAnbmFtZScgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnc29ja2V0JywgdHlwZTogJ21hdGNoaW5nJywgdmFsdWU6IGNob3NlbkZpbHRlcnMuc29ja2V0X2NwdSwgY29tcGFyZUtleTogJ25hbWUnIH0sXG4gICAgICAgICAgICAgICAgICAgIF1cIiA6bGlzdD1cImZpbHRlcnMubW9kZWxfY3B1XCIgOmNob3Nlbj1cImNob3NlbkZpbHRlcnMubW9kZWxfY3B1XCIgLz5cblxuICAgICAgICAgICAgICAgIDxDdXN0b21TZWxlY3QgQHVwZGF0ZTpjaG9zZW4tZGVsZXRlPVwiZWxpbWluYXRlKGNob3NlbkZpbHRlcnMucHJvZHVjZXJfZ3B1LCAkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgQHVwZGF0ZTpjaG9zZW4tYWRkPVwiY2hvc2VuRmlsdGVycy5wcm9kdWNlcl9ncHUucHVzaCgkZXZlbnQpXCIgOnRpdGxlPVwiJ9Cf0YDQvtC40LfQstC+0LTQuNGC0LXQu9GMINCy0LjQtNC10L7QutCw0YDRgtGLJ1wiXG4gICAgICAgICAgICAgICAgICAgIDpsaXN0PVwiZmlsdGVycy5wcm9kdWNlcl9ncHVcIiA6Y2hvc2VuPVwiY2hvc2VuRmlsdGVycy5wcm9kdWNlcl9ncHVcIiA6bGFiZWxOYW1lPVwiJ25hbWUnXCIgLz5cblxuICAgICAgICAgICAgICAgIDxDdXN0b21TZWxlY3QgQHVwZGF0ZTpjaG9zZW4tZGVsZXRlPVwiZWxpbWluYXRlKGNob3NlbkZpbHRlcnMubW9kZWxfZ3B1LCAkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgQHVwZGF0ZTpjaG9zZW4tYWRkPVwiY2hvc2VuRmlsdGVycy5tb2RlbF9ncHUucHVzaCgkZXZlbnQpXCIgOnRpdGxlPVwiJ9Cc0L7QtNC10LvRjCDQstC40LTQtdC+0LrQsNGA0YLRiydcIlxuICAgICAgICAgICAgICAgICAgICA6bGlzdD1cImZpbHRlcnMubW9kZWxfZ3B1XCIgOmNob3Nlbj1cImNob3NlbkZpbHRlcnMubW9kZWxfZ3B1XCJcbiAgICAgICAgICAgICAgICAgICAgOm1hdGNoaW5nLXJ1bGVzPVwiW3sga2V5OiAncHJvZHVjZXInLCB0eXBlOiAnbWF0Y2hpbmcnLCB2YWx1ZTogY2hvc2VuRmlsdGVycy5wcm9kdWNlcl9ncHUsIGNvbXBhcmVLZXk6ICduYW1lJyB9XVwiIC8+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3RzLXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0cy1ib3hcIj5cbiAgICAgICAgICAgICAgICA8VHJhbnNpdGlvbkdyb3VwIG5hbWU9XCJsaXN0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0IHYtaWY9XCJpc0RhdGFMb2FkZWRcIiB2LWZvcj1cInByb2R1Y3QgaW4gcHJvZHVjdHNcIiA6a2V5PVwicHJvZHVjdC5pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6aW1hZ2Utc3JjPVwicHJvZHVjdC5pbWFnZXNbMF0uc3JjXCIgOm5hbWU9XCJwcm9kdWN0Lm5hbWVcIiA6Z3JvdXBlZF9wcm9kdWN0cz1cInByb2R1Y3QuZ3JvdXBlZF9wcm9kdWN0c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA6cHJpY2U9XCJwcm9kdWN0LnByaWNlXCIgLz5cbiAgICAgICAgICAgICAgICA8L1RyYW5zaXRpb25Hcm91cD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgUHJvZHVjdCBmcm9tICdAL2NvbXBvbmVudHMvUHJvZHVjdC52dWUnO1xuaW1wb3J0IFdPTyBmcm9tICdAL2F4aW9zV29vY29tZXJjZSdcbmltcG9ydCB7IFJlZiwgY29tcHV0ZWQsIG9uQmVmb3JlTW91bnQsIG9uTW91bnRlZCwgcmVmLCB3YXRjaCB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgeyBJR3JvdXBwZWRQcm9kdWN0IH0gZnJvbSAnQC90eXBlcy9Qcm9kdWN0JztcbmltcG9ydCB7IHVzZVJvdXRlIH0gZnJvbSAndnVlLXJvdXRlcic7XG5pbXBvcnQgQ3VzdG9tU2VsZWN0IGZyb20gJ0AvY29tcG9uZW50cy9DdXN0b21TZWxlY3QudnVlJztcbmltcG9ydCB7IElQYXJhbXMsIGdldFByb2R1Y3RzIH0gZnJvbSAnQC9hcGkvS2F0YWxvZy9nZXRQcm9kdWN0cyc7XG5cbmltcG9ydCB7IGVsaW1pbmF0ZSB9IGZyb20gJ0AvaGVscGVycyc7XG5pbXBvcnQgeyB1c2VBcHBTZXR0aW5ncyB9IGZyb20gJ0AvaG9va3MvQXBwL3VzZUFwcFNldHRpbmdzJztcbmltcG9ydCB7IHVzZVZ1ZXggfSBmcm9tICdAL3N0b3JlL3VzZVZ1ZXgnO1xuaW1wb3J0IHsgdXNlUGFnZVNldHRpbmdzIH0gZnJvbSAnQC9ob29rcy9BcHAvdXNlUGFnZVNldHRpbmdzJztcbmltcG9ydCB7IFVzZUZpbHRlcnMgfSBmcm9tICdAL2hvb2tzL0thdGFsb2cvVXNlRmlsdGVycyc7XG5pbXBvcnQgUGFnaW5hdGVCdXR0b25zIGZyb20gJ0AvY29tcG9uZW50cy9QYWdpbmF0ZUJ1dHRvbnMudnVlJztcblxuaW50ZXJmYWNlIEVtaXRzIHtcbiAgICAoZTogJ2xvYWQnKTogdm9pZFxufVxuXG5jb25zdCBlbWl0ID0gZGVmaW5lRW1pdHM8RW1pdHM+KClcblxuY29uc3Qgcm91dGUgPSB1c2VSb3V0ZSgpO1xuXG5jb25zdCBzdG9yZSA9IHVzZVZ1ZXgoKTtcblxuY29uc3QgeyBwYWdlIH0gPSB1c2VQYWdlU2V0dGluZ3Moc3RvcmUpO1xuXG5jb25zdCB7IGZpbHRlcnMsIGNob3NlbkZpbHRlcnMsIGdldFJlcXVlc3RQYXJhbXMsIG9uTW91bnRlZEFjdGlvbiB9ID0gVXNlRmlsdGVycyhwYWdlKTtcblxubGV0IGlzRGF0YUxvYWRlZDogUmVmPGJvb2xlYW4+ID0gcmVmKGZhbHNlKVxuXG5sZXQgcHJvZHVjdHM6IFJlZjxBcnJheTxJR3JvdXBwZWRQcm9kdWN0Pj4gPSByZWYoW10pXG5cblxud2F0Y2goZ2V0UmVxdWVzdFBhcmFtcywgYXN5bmMgKCkgPT4ge1xuICAgIHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xuICAgICAgICBwcm9kdWN0cy52YWx1ZSA9IGF3YWl0IGdldFByb2R1Y3RzKDIwLCBjYXRlZ29yeV9pZHNbcm91dGUucGFyYW1zLmNhdGVnb3J5IGFzIHN0cmluZ10sIGdldFJlcXVlc3RQYXJhbXMudmFsdWUpXG4gICAgfSwgMTAwKVxufSwgeyBkZWVwOiB0cnVlIH0pXG5cbmNvbnN0IGNhdGVnb3J5X2lkcyA9IHtcbiAgICBsYXB0b3A6IDE4LFxuICAgIGdhbWluZzogMTYsXG4gICAgd29ya3N0YXRpb246IDE3XG59XG5cbndhdGNoKHJvdXRlLCBhc3luYyAoKSA9PiB7XG4gICAgcHJvZHVjdHMudmFsdWUgPSBhd2FpdCBnZXRQcm9kdWN0cygyMCwgY2F0ZWdvcnlfaWRzW3JvdXRlLnBhcmFtcy5jYXRlZ29yeSBhcyBzdHJpbmddLCBnZXRSZXF1ZXN0UGFyYW1zLnZhbHVlKVxuICAgIGVtaXQoJ2xvYWQnKVxufSwgeyBkZWVwOiB0cnVlIH0pXG5cblxub25CZWZvcmVNb3VudChhc3luYyAoKSA9PiB7XG4gICAgb25Nb3VudGVkQWN0aW9uKCk7XG4gICAgXG4gICAgcHJvZHVjdHMudmFsdWUgPSBhd2FpdCBnZXRQcm9kdWN0cygyMCwgY2F0ZWdvcnlfaWRzW3JvdXRlLnBhcmFtcy5jYXRlZ29yeSBhcyBzdHJpbmddLCBnZXRSZXF1ZXN0UGFyYW1zLnZhbHVlKVxuXG4gICAgaXNEYXRhTG9hZGVkLnZhbHVlID0gdHJ1ZVxuXG4gICAgZW1pdCgnbG9hZCcpXG5cbn0pXG5cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XG5AaW1wb3J0ICdAL3Njc3MvYmFzZS9taXhpbnMuc2Nzcyc7XG5AaW1wb3J0ICdAL3Njc3MvYmFzZS90eXBvZ3JhcGh5LnNjc3MnO1xuXG4ucGFnaW5hdGUge1xuICAgIHBhZGRpbmctdG9wOiA3MHB4O1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cblxuLnNlY29uZC1zZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzgwcHggMWZyO1xuICAgIGdhcDogMzBweDtcbiAgICBwYWRkaW5nLXRvcDogNTZweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNjhweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICBtYXgtd2lkdGg6IDE0MjBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmZpbHRlcnMtYm94IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQxNDE0O1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgZ2FwOiAxMHB4O1xufVxuXG4ucHJvZHVjdHMtYm94IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCAzMTBweCk7XG4gICAgZ2FwOiAyMHB4O1xuICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cblxuLmxpc3QtbW92ZSxcbi8qIGFwcGx5IHRyYW5zaXRpb24gdG8gbW92aW5nIGVsZW1lbnRzICovXG4ubGlzdC1lbnRlci1hY3RpdmUsXG4ubGlzdC1sZWF2ZS1hY3RpdmUge1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XG59XG5cbi5saXN0LWVudGVyLWZyb20sXG4ubGlzdC1sZWF2ZS10byB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzBweCk7XG59XG5cbi8qIGVuc3VyZSBsZWF2aW5nIGl0ZW1zIGFyZSB0YWtlbiBvdXQgb2YgbGF5b3V0IGZsb3cgc28gdGhhdCBtb3ZpbmdcbiAgIGFuaW1hdGlvbnMgY2FuIGJlIGNhbGN1bGF0ZWQgY29ycmVjdGx5LiAqL1xuLmxpc3QtbGVhdmUtYWN0aXZlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG48L3N0eWxlPiIsImltcG9ydCB7IGRlZmluZUNvbXBvbmVudCBhcyBfZGVmaW5lQ29tcG9uZW50IH0gZnJvbSAndnVlJ1xuaW1wb3J0IHsgZ2V0UGFnZVNldHRpbmdzIH0gZnJvbSAnQC9hcGkvQXBwL2dldFBhZ2VTZXR0aW5ncyc7XG5pbXBvcnQgeyB1c2VMb2FkIH0gZnJvbSAnQC9ob29rcy9BcHAvdXNlTG9hZCc7XG5pbXBvcnQgeyB1c2VQYWdlU2V0dGluZ3MgfSBmcm9tICdAL2hvb2tzL0FwcC91c2VQYWdlU2V0dGluZ3MnO1xuaW1wb3J0IEZpcnN0U2VjdGlvbiBmcm9tICdAL3NlY3Rpb25zL2thdGFsb2cvZmlyc3Qtc2VjdGlvbi52dWUnO1xuaW1wb3J0IFNlY29uZFNlY3Rpb24gZnJvbSAnQC9zZWN0aW9ucy9rYXRhbG9nL3NlY29uZC1zZWN0aW9uLnZ1ZSc7XG5pbXBvcnQgeyB1c2VWdWV4IH0gZnJvbSAnQC9zdG9yZS91c2VWdWV4JztcbmltcG9ydCB7IFJlZiwgb25Nb3VudGVkLCByZWYgfSBmcm9tICd2dWUnO1xuXG5kZWNsYXJlIHZhciBwcmVsb2FkZXJDbG9zZTogKCkgPT4gdm9pZDtcblxuXG5leHBvcnQgZGVmYXVsdCAvKiNfX1BVUkVfXyovX2RlZmluZUNvbXBvbmVudCh7XG4gIF9fbmFtZTogJ2thdGFsb2cnLFxuICBzZXR1cChfX3Byb3BzLCB7IGV4cG9zZTogX19leHBvc2UgfSkge1xuICBfX2V4cG9zZSgpO1xuXG5sZXQgaXNQYWdlRGF0YUxvYWRlZDogUmVmPGJvb2xlYW4+ID0gcmVmKGZhbHNlKVxuXG5jb25zdCBzdG9yZSA9IHVzZVZ1ZXgoKVxuXG5sZXQge2xvYWRlcn0gPSB1c2VMb2FkKDIpXG5cbmxvYWRlci52YWx1ZS5vbkFsbGlzTG9hZGVkID0gKCkgPT4ge1xuICAgIHByZWxvYWRlckNsb3NlKCk7XG4gICAgbG9hZGVyLnZhbHVlLnJlc3RhcnQoKVxufVxuXG5sZXQgeyBwYWdlIH0gPSB1c2VQYWdlU2V0dGluZ3Moc3RvcmUpXG5cbm9uTW91bnRlZChhc3luYyAoKSA9PiB7XG4gICAgcGFnZS52YWx1ZSA9IGF3YWl0IGdldFBhZ2VTZXR0aW5ncygxOTApIC8vIGthdGFsb2cgcG9zdCBpZFxuXG4gICAgaXNQYWdlRGF0YUxvYWRlZC52YWx1ZSA9IHRydWVcblxuICAgIC8vIHByZWxvYWRlckNsb3NlKCk7XG59KVxuXG5cbmNvbnN0IF9fcmV0dXJuZWRfXyA9IHsgZ2V0IGlzUGFnZURhdGFMb2FkZWQoKSB7IHJldHVybiBpc1BhZ2VEYXRhTG9hZGVkIH0sIHNldCBpc1BhZ2VEYXRhTG9hZGVkKHYpIHsgaXNQYWdlRGF0YUxvYWRlZCA9IHYgfSwgc3RvcmUsIGdldCBsb2FkZXIoKSB7IHJldHVybiBsb2FkZXIgfSwgc2V0IGxvYWRlcih2KSB7IGxvYWRlciA9IHYgfSwgZ2V0IHBhZ2UoKSB7IHJldHVybiBwYWdlIH0sIHNldCBwYWdlKHYpIHsgcGFnZSA9IHYgfSwgRmlyc3RTZWN0aW9uLCBTZWNvbmRTZWN0aW9uIH1cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShfX3JldHVybmVkX18sICdfX2lzU2NyaXB0U2V0dXAnLCB7IGVudW1lcmFibGU6IGZhbHNlLCB2YWx1ZTogdHJ1ZSB9KVxucmV0dXJuIF9fcmV0dXJuZWRfX1xufVxuXG59KSIsIlxuPHRlbXBsYXRlPlxuICAgIDxtYWluIHYtaWY9XCJpc1BhZ2VEYXRhTG9hZGVkXCI+XG4gICAgICAgIDxGaXJzdFNlY3Rpb24gOmtleT1cIjFcIiBAbG9hZD1cImxvYWRlci5sb2FkKClcIiAvPlxuICAgICAgICA8U2Vjb25kU2VjdGlvbiA6a2V5PVwiMlwiIEBsb2FkPVwibG9hZGVyLmxvYWQoKVwiLz5cbiAgICA8L21haW4+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgZ2V0UGFnZVNldHRpbmdzIH0gZnJvbSAnQC9hcGkvQXBwL2dldFBhZ2VTZXR0aW5ncyc7XG5pbXBvcnQgeyB1c2VMb2FkIH0gZnJvbSAnQC9ob29rcy9BcHAvdXNlTG9hZCc7XG5pbXBvcnQgeyB1c2VQYWdlU2V0dGluZ3MgfSBmcm9tICdAL2hvb2tzL0FwcC91c2VQYWdlU2V0dGluZ3MnO1xuaW1wb3J0IEZpcnN0U2VjdGlvbiBmcm9tICdAL3NlY3Rpb25zL2thdGFsb2cvZmlyc3Qtc2VjdGlvbi52dWUnO1xuaW1wb3J0IFNlY29uZFNlY3Rpb24gZnJvbSAnQC9zZWN0aW9ucy9rYXRhbG9nL3NlY29uZC1zZWN0aW9uLnZ1ZSc7XG5pbXBvcnQgeyB1c2VWdWV4IH0gZnJvbSAnQC9zdG9yZS91c2VWdWV4JztcbmltcG9ydCB7IFJlZiwgb25Nb3VudGVkLCByZWYgfSBmcm9tICd2dWUnO1xuXG5sZXQgaXNQYWdlRGF0YUxvYWRlZDogUmVmPGJvb2xlYW4+ID0gcmVmKGZhbHNlKVxuXG5kZWNsYXJlIHZhciBwcmVsb2FkZXJDbG9zZTogKCkgPT4gdm9pZDtcblxuY29uc3Qgc3RvcmUgPSB1c2VWdWV4KClcblxubGV0IHtsb2FkZXJ9ID0gdXNlTG9hZCgyKVxuXG5sb2FkZXIudmFsdWUub25BbGxpc0xvYWRlZCA9ICgpID0+IHtcbiAgICBwcmVsb2FkZXJDbG9zZSgpO1xuICAgIGxvYWRlci52YWx1ZS5yZXN0YXJ0KClcbn1cblxubGV0IHsgcGFnZSB9ID0gdXNlUGFnZVNldHRpbmdzKHN0b3JlKVxuXG5vbk1vdW50ZWQoYXN5bmMgKCkgPT4ge1xuICAgIHBhZ2UudmFsdWUgPSBhd2FpdCBnZXRQYWdlU2V0dGluZ3MoMTkwKSAvLyBrYXRhbG9nIHBvc3QgaWRcblxuICAgIGlzUGFnZURhdGFMb2FkZWQudmFsdWUgPSB0cnVlXG5cbiAgICAvLyBwcmVsb2FkZXJDbG9zZSgpO1xufSlcblxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD48L3N0eWxlPiIsImltcG9ydCB7IHRvRGlzcGxheVN0cmluZyBhcyBfdG9EaXNwbGF5U3RyaW5nLCBjcmVhdGVFbGVtZW50Vk5vZGUgYXMgX2NyZWF0ZUVsZW1lbnRWTm9kZSwgcmVuZGVyTGlzdCBhcyBfcmVuZGVyTGlzdCwgRnJhZ21lbnQgYXMgX0ZyYWdtZW50LCBvcGVuQmxvY2sgYXMgX29wZW5CbG9jaywgY3JlYXRlRWxlbWVudEJsb2NrIGFzIF9jcmVhdGVFbGVtZW50QmxvY2ssIG5vcm1hbGl6ZUNsYXNzIGFzIF9ub3JtYWxpemVDbGFzcywgcHVzaFNjb3BlSWQgYXMgX3B1c2hTY29wZUlkLCBwb3BTY29wZUlkIGFzIF9wb3BTY29wZUlkIH0gZnJvbSBcInZ1ZVwiXG5cbmNvbnN0IF93aXRoU2NvcGVJZCA9IG4gPT4gKF9wdXNoU2NvcGVJZChcImRhdGEtdi0wNDM1MGQwNlwiKSxuPW4oKSxfcG9wU2NvcGVJZCgpLG4pXG5jb25zdCBfaG9pc3RlZF8xID0geyBjbGFzczogXCJzZWxlY3RcIiB9XG5jb25zdCBfaG9pc3RlZF8yID0geyBjbGFzczogXCJzZWxlY3RfX3RpdGxlXCIgfVxuY29uc3QgX2hvaXN0ZWRfMyA9IFtcInNyY1wiXVxuY29uc3QgX2hvaXN0ZWRfNCA9IHsgY2xhc3M6IFwic2VsZWN0X19saXN0XCIgfVxuY29uc3QgX2hvaXN0ZWRfNSA9IFtcIm9uQ2xpY2tcIl1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihfY3R4OiBhbnksX2NhY2hlOiBhbnksJHByb3BzOiBhbnksJHNldHVwOiBhbnksJGRhdGE6IGFueSwkb3B0aW9uczogYW55KSB7XG4gIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwiZGl2XCIsIF9ob2lzdGVkXzEsIFtcbiAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiYnV0dG9uXCIsIHtcbiAgICAgIG9uQ2xpY2s6IF9jYWNoZVswXSB8fCAoX2NhY2hlWzBdID0gKCRldmVudDogYW55KSA9PiAoJHNldHVwLmlzUGFuZWxPcGVuID0gISRzZXR1cC5pc1BhbmVsT3BlbikpLFxuICAgICAgY2xhc3M6IFwic2VsZWN0X19wYW5lbFwiXG4gICAgfSwgW1xuICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcInBcIiwgX2hvaXN0ZWRfMiwgX3RvRGlzcGxheVN0cmluZygkcHJvcHMudGl0bGUpLCAxIC8qIFRFWFQgKi8pLFxuICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImltZ1wiLCB7XG4gICAgICAgIHNyYzogJHNldHVwLmFwcFsnZ2VuZXJhbF9zZWxlY3QtaWNvbiddLFxuICAgICAgICBhbHQ6IFwic2VsZWN0LWljb25cIlxuICAgICAgfSwgbnVsbCwgOCAvKiBQUk9QUyAqLywgX2hvaXN0ZWRfMylcbiAgICBdKSxcbiAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzOiBfbm9ybWFsaXplQ2xhc3MoW1wic2VsZWN0X193cmFwcGVyXCIsIHsgJ3NlbGVjdF9fd3JhcHBlci0tb3Blbic6ICRzZXR1cC5pc1BhbmVsT3BlbiB9XSlcbiAgICB9LCBbXG4gICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwidWxcIiwgX2hvaXN0ZWRfNCwgW1xuICAgICAgICAoX29wZW5CbG9jayh0cnVlKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhfRnJhZ21lbnQsIG51bGwsIF9yZW5kZXJMaXN0KCRzZXR1cC5tYXRjaGVkTGlzdCwgKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJsaVwiLCB7XG4gICAgICAgICAgICBrZXk6IGluZGV4LFxuICAgICAgICAgICAgY2xhc3M6IF9ub3JtYWxpemVDbGFzcyhbXCJzZWxlY3RfX2l0ZW1cIiwgeyAnc2VsZWN0X19pdGVtLS1hY3RpdmUnOiAkcHJvcHMuY2hvc2VuLmluY2x1ZGVzKGl0ZW0pIH1dKVxuICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJidXR0b25cIiwge1xuICAgICAgICAgICAgICBvbkNsaWNrOiAoJGV2ZW50OiBhbnkpID0+ICgkc2V0dXAuY2hvaWNlKGl0ZW0pKVxuICAgICAgICAgICAgfSwgX3RvRGlzcGxheVN0cmluZygkcHJvcHMubGFiZWxOYW1lID8gaXRlbVskcHJvcHMubGFiZWxOYW1lXSA6IGl0ZW1bJ2xhYmVsJ10pLCA5IC8qIFRFWFQsIFBST1BTICovLCBfaG9pc3RlZF81KVxuICAgICAgICAgIF0sIDIgLyogQ0xBU1MgKi8pKVxuICAgICAgICB9KSwgMTI4IC8qIEtFWUVEX0ZSQUdNRU5UICovKSlcbiAgICAgIF0pXG4gICAgXSwgMiAvKiBDTEFTUyAqLylcbiAgXSkpXG59IiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudFZOb2RlIGFzIF9jcmVhdGVFbGVtZW50Vk5vZGUsIHRvRGlzcGxheVN0cmluZyBhcyBfdG9EaXNwbGF5U3RyaW5nLCBvcGVuQmxvY2sgYXMgX29wZW5CbG9jaywgY3JlYXRlRWxlbWVudEJsb2NrIGFzIF9jcmVhdGVFbGVtZW50QmxvY2ssIHB1c2hTY29wZUlkIGFzIF9wdXNoU2NvcGVJZCwgcG9wU2NvcGVJZCBhcyBfcG9wU2NvcGVJZCB9IGZyb20gXCJ2dWVcIlxuXG5jb25zdCBfd2l0aFNjb3BlSWQgPSBuID0+IChfcHVzaFNjb3BlSWQoXCJkYXRhLXYtM2NmNGVmNmZcIiksbj1uKCksX3BvcFNjb3BlSWQoKSxuKVxuY29uc3QgX2hvaXN0ZWRfMSA9IHsgY2xhc3M6IFwicHJvZHVjdFwiIH1cbmNvbnN0IF9ob2lzdGVkXzIgPSBbXCJzcmNcIiwgXCJhbHRcIl1cbmNvbnN0IF9ob2lzdGVkXzMgPSB7IGNsYXNzOiBcInByb2R1Y3QtZGVzY3JpcHRpb25cIiB9XG5jb25zdCBfaG9pc3RlZF80ID0geyBjbGFzczogXCJwcm9kdWN0LWRlc2NyaXB0aW9uX19uYW1lXCIgfVxuY29uc3QgX2hvaXN0ZWRfNSA9IHsgY2xhc3M6IFwicHJvZHVjdC1kZXNjcmlwdGlvbi1zcGVjc1wiIH1cbmNvbnN0IF9ob2lzdGVkXzYgPSB7IGNsYXNzOiBcInNwZWNcIiB9XG5jb25zdCBfaG9pc3RlZF83ID0geyBjbGFzczogXCJzcGVjXCIgfVxuY29uc3QgX2hvaXN0ZWRfOCA9IHsgY2xhc3M6IFwic3BlY1wiIH1cbmNvbnN0IF9ob2lzdGVkXzkgPSB7IGNsYXNzOiBcInByb2R1Y3RfX3ByaWNlXCIgfVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKF9jdHg6IGFueSxfY2FjaGU6IGFueSwkcHJvcHM6IGFueSwkc2V0dXA6IGFueSwkZGF0YTogYW55LCRvcHRpb25zOiBhbnkpIHtcbiAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJkaXZcIiwgX2hvaXN0ZWRfMSwgW1xuICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJpbWdcIiwge1xuICAgICAgY2xhc3M6IFwicHJvZHVjdF9faW1hZ2VcIixcbiAgICAgIHNyYzogJHByb3BzLmltYWdlU3JjLFxuICAgICAgYWx0OiAkcHJvcHMubmFtZVxuICAgIH0sIG51bGwsIDggLyogUFJPUFMgKi8sIF9ob2lzdGVkXzIpLFxuICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfMywgW1xuICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcInBcIiwgX2hvaXN0ZWRfNCwgX3RvRGlzcGxheVN0cmluZygkcHJvcHMubmFtZSksIDEgLyogVEVYVCAqLyksXG4gICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzUsIFtcbiAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF82LCBbXG4gICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcInBcIiwgbnVsbCwgX3RvRGlzcGxheVN0cmluZygkc2V0dXAucHJvZHVjdENwdSA/ICRzZXR1cC5wcm9kdWN0Q3B1LmNmcy5zaG9ydGx5X25hbWUgOiAn0L7RgtGB0YPRgtGB0LLRg9C10YInKSwgMSAvKiBURVhUICovKVxuICAgICAgICBdKSxcbiAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF83LCBbXG4gICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcInBcIiwgbnVsbCwgX3RvRGlzcGxheVN0cmluZygkc2V0dXAucHJvZHVjdEdwdSA/ICRzZXR1cC5wcm9kdWN0R3B1LmNmcy5zaG9ydGx5X25hbWUgOiAn0L7RgtGB0YPRgdGC0LLRg9C10YInKSwgMSAvKiBURVhUICovKVxuICAgICAgICBdKSxcbiAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF84LCBbXG4gICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcInBcIiwgbnVsbCwgX3RvRGlzcGxheVN0cmluZygkc2V0dXAucHJvZHVjdFJhbSA/ICRzZXR1cC5wcm9kdWN0UmFtLmNmcy5zaG9ydGx5X25hbWUgOiAn0L7RgtGB0YPRgdGC0LLRg9C10YInKSwgMSAvKiBURVhUICovKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdKSxcbiAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwicFwiLCBfaG9pc3RlZF85LCBfdG9EaXNwbGF5U3RyaW5nKCRwcm9wcy5wcmljZSkgKyBcIiBSVUJcIiwgMSAvKiBURVhUICovKVxuICBdKSlcbn0iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50Vk5vZGUgYXMgX2NyZWF0ZUVsZW1lbnRWTm9kZSwgdG9EaXNwbGF5U3RyaW5nIGFzIF90b0Rpc3BsYXlTdHJpbmcsIG5vcm1hbGl6ZVN0eWxlIGFzIF9ub3JtYWxpemVTdHlsZSwgb3BlbkJsb2NrIGFzIF9vcGVuQmxvY2ssIGNyZWF0ZUVsZW1lbnRCbG9jayBhcyBfY3JlYXRlRWxlbWVudEJsb2NrLCBwdXNoU2NvcGVJZCBhcyBfcHVzaFNjb3BlSWQsIHBvcFNjb3BlSWQgYXMgX3BvcFNjb3BlSWQgfSBmcm9tIFwidnVlXCJcblxuY29uc3QgX3dpdGhTY29wZUlkID0gbiA9PiAoX3B1c2hTY29wZUlkKFwiZGF0YS12LTY4MjJmZGQyXCIpLG49bigpLF9wb3BTY29wZUlkKCksbilcbmNvbnN0IF9ob2lzdGVkXzEgPSB7IGNsYXNzOiBcImZpcnN0LXNlY3Rpb24tY29udGFpbmVyIGNvbnRhaW5lclwiIH1cbmNvbnN0IF9ob2lzdGVkXzIgPSB7IGNsYXNzOiBcImltYWdlLWJveFwiIH1cbmNvbnN0IF9ob2lzdGVkXzMgPSBbXCJzcmNcIiwgXCJhbHRcIl1cbmNvbnN0IF9ob2lzdGVkXzQgPSB7IGNsYXNzOiBcImRlc2NyaXB0aW9uLWJveFwiIH1cbmNvbnN0IF9ob2lzdGVkXzUgPSB7IGNsYXNzOiBcImRlc2NyaXB0aW9uLWJveF9fdGl0bGUgdGl0bGVcIiB9XG5jb25zdCBfaG9pc3RlZF82ID0geyBjbGFzczogXCJkZXNjcmlwdGlvbi1ib3hfX3RleHRcIiB9XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eDogYW55LF9jYWNoZTogYW55LCRwcm9wczogYW55LCRzZXR1cDogYW55LCRkYXRhOiBhbnksJG9wdGlvbnM6IGFueSkge1xuICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcImRpdlwiLCB7XG4gICAgcmVmOiBcImJveFwiLFxuICAgIGNsYXNzOiBcImZpcnN0LXNlY3Rpb25cIixcbiAgICBzdHlsZTogX25vcm1hbGl6ZVN0eWxlKHsgYmFja2dyb3VuZDogYHVybCgnJHskc2V0dXAuY3VycmVudFNldHRpbmdzLmJhY2tncm91bmR9JyksIG5vLXJlcGVhdCBjZW50ZXIgLyBjb3ZlcmAgfSlcbiAgfSwgW1xuICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfMSwgW1xuICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF8yLCBbXG4gICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJpbWdcIiwge1xuICAgICAgICAgIG9uTG9hZDogJHNldHVwLnVwZGF0ZUltYWdlcyxcbiAgICAgICAgICByZWY6IFwiaW1hZ2VcIixcbiAgICAgICAgICBzcmM6ICRzZXR1cC5jdXJyZW50U2V0dGluZ3MuaW1hZ2UsXG4gICAgICAgICAgYWx0OiAkc2V0dXAuY3VycmVudFNldHRpbmdzLnRpdGxlXG4gICAgICAgIH0sIG51bGwsIDQwIC8qIFBST1BTLCBIWURSQVRFX0VWRU5UUyAqLywgX2hvaXN0ZWRfMylcbiAgICAgIF0pLFxuICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF80LCBbXG4gICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJwXCIsIF9ob2lzdGVkXzUsIF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLmN1cnJlbnRTZXR0aW5ncy50aXRsZSksIDEgLyogVEVYVCAqLyksXG4gICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJwXCIsIF9ob2lzdGVkXzYsIF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLmN1cnJlbnRTZXR0aW5ncy50ZXh0KSwgMSAvKiBURVhUICovKVxuICAgICAgXSlcbiAgICBdKVxuICBdLCA0IC8qIFNUWUxFICovKSlcbn0iLCJpbXBvcnQgeyBjcmVhdGVWTm9kZSBhcyBfY3JlYXRlVk5vZGUsIEZyYWdtZW50IGFzIF9GcmFnbWVudCwgb3BlbkJsb2NrIGFzIF9vcGVuQmxvY2ssIGNyZWF0ZUVsZW1lbnRCbG9jayBhcyBfY3JlYXRlRWxlbWVudEJsb2NrLCBjcmVhdGVDb21tZW50Vk5vZGUgYXMgX2NyZWF0ZUNvbW1lbnRWTm9kZSwgY3JlYXRlRWxlbWVudFZOb2RlIGFzIF9jcmVhdGVFbGVtZW50Vk5vZGUsIHJlbmRlckxpc3QgYXMgX3JlbmRlckxpc3QsIGNyZWF0ZUJsb2NrIGFzIF9jcmVhdGVCbG9jaywgVHJhbnNpdGlvbkdyb3VwIGFzIF9UcmFuc2l0aW9uR3JvdXAsIHdpdGhDdHggYXMgX3dpdGhDdHgsIHB1c2hTY29wZUlkIGFzIF9wdXNoU2NvcGVJZCwgcG9wU2NvcGVJZCBhcyBfcG9wU2NvcGVJZCB9IGZyb20gXCJ2dWVcIlxuXG5jb25zdCBfd2l0aFNjb3BlSWQgPSBuID0+IChfcHVzaFNjb3BlSWQoXCJkYXRhLXYtMDE0ZjYyZjJcIiksbj1uKCksX3BvcFNjb3BlSWQoKSxuKVxuY29uc3QgX2hvaXN0ZWRfMSA9IHsgY2xhc3M6IFwic2Vjb25kLXNlY3Rpb25cIiB9XG5jb25zdCBfaG9pc3RlZF8yID0geyBjbGFzczogXCJmaWx0ZXJzLWJveFwiIH1cbmNvbnN0IF9ob2lzdGVkXzMgPSB7IGNsYXNzOiBcInByb2R1Y3RzLXdyYXBwZXJcIiB9XG5jb25zdCBfaG9pc3RlZF80ID0geyBjbGFzczogXCJwcm9kdWN0cy1ib3hcIiB9XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eDogYW55LF9jYWNoZTogYW55LCRwcm9wczogYW55LCRzZXR1cDogYW55LCRkYXRhOiBhbnksJG9wdGlvbnM6IGFueSkge1xuICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcImRpdlwiLCBfaG9pc3RlZF8xLCBbXG4gICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF8yLCBbXG4gICAgICAoJHNldHVwLmlzRGF0YUxvYWRlZClcbiAgICAgICAgPyAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKF9GcmFnbWVudCwgeyBrZXk6IDAgfSwgW1xuICAgICAgICAgICAgX2NyZWF0ZVZOb2RlKCRzZXR1cFtcIkN1c3RvbVNlbGVjdFwiXSwge1xuICAgICAgICAgICAgICBcIm9uVXBkYXRlOmNob3NlbkRlbGV0ZVwiOiBfY2FjaGVbMF0gfHwgKF9jYWNoZVswXSA9ICgkZXZlbnQ6IGFueSkgPT4gKCRzZXR1cC5lbGltaW5hdGUoJHNldHVwLmNob3NlbkZpbHRlcnMucHJvZHVjZXJfY3B1LCAkZXZlbnQpKSksXG4gICAgICAgICAgICAgIFwib25VcGRhdGU6Y2hvc2VuQWRkXCI6IF9jYWNoZVsxXSB8fCAoX2NhY2hlWzFdID0gKCRldmVudDogYW55KSA9PiAoJHNldHVwLmNob3NlbkZpbHRlcnMucHJvZHVjZXJfY3B1LnB1c2goJGV2ZW50KSkpLFxuICAgICAgICAgICAgICB0aXRsZTogJ9Cf0YDQvtC40LfQstC+0LTQuNGC0LXQu9GMINC/0YDQvtGG0LXRgdGB0L7RgNCwJyxcbiAgICAgICAgICAgICAgbGlzdDogJHNldHVwLmZpbHRlcnMucHJvZHVjZXJfY3B1LFxuICAgICAgICAgICAgICBjaG9zZW46ICRzZXR1cC5jaG9zZW5GaWx0ZXJzLnByb2R1Y2VyX2NwdSxcbiAgICAgICAgICAgICAgbGFiZWxOYW1lOiAnbmFtZSdcbiAgICAgICAgICAgIH0sIG51bGwsIDggLyogUFJPUFMgKi8sIFtcImxpc3RcIiwgXCJjaG9zZW5cIl0pLFxuICAgICAgICAgICAgX2NyZWF0ZVZOb2RlKCRzZXR1cFtcIkN1c3RvbVNlbGVjdFwiXSwge1xuICAgICAgICAgICAgICBcIm9uVXBkYXRlOmNob3NlbkRlbGV0ZVwiOiBfY2FjaGVbMl0gfHwgKF9jYWNoZVsyXSA9ICgkZXZlbnQ6IGFueSkgPT4gKCRzZXR1cC5lbGltaW5hdGUoJHNldHVwLmNob3NlbkZpbHRlcnMuc29ja2V0X2NwdSwgJGV2ZW50KSkpLFxuICAgICAgICAgICAgICBcIm9uVXBkYXRlOmNob3NlbkFkZFwiOiBfY2FjaGVbM10gfHwgKF9jYWNoZVszXSA9ICgkZXZlbnQ6IGFueSkgPT4gKCRzZXR1cC5jaG9zZW5GaWx0ZXJzLnNvY2tldF9jcHUucHVzaCgkZXZlbnQpKSksXG4gICAgICAgICAgICAgIHRpdGxlOiAn0KHQvtC60LXRgiDQv9GA0L7RhtC10YHRgdC+0YDQsCcsXG4gICAgICAgICAgICAgIGxpc3Q6ICRzZXR1cC5maWx0ZXJzLnNvY2tldF9jcHUsXG4gICAgICAgICAgICAgIGNob3NlbjogJHNldHVwLmNob3NlbkZpbHRlcnMuc29ja2V0X2NwdSxcbiAgICAgICAgICAgICAgbGFiZWxOYW1lOiAnbmFtZScsXG4gICAgICAgICAgICAgIFwibWF0Y2hpbmctcnVsZXNcIjogW3sga2V5OiAncHJvZHVjZXInLCB0eXBlOiAnbWF0Y2hpbmcnLCB2YWx1ZTogJHNldHVwLmNob3NlbkZpbHRlcnMucHJvZHVjZXJfY3B1LCBjb21wYXJlS2V5OiAnbmFtZScgfV1cbiAgICAgICAgICAgIH0sIG51bGwsIDggLyogUFJPUFMgKi8sIFtcImxpc3RcIiwgXCJjaG9zZW5cIiwgXCJtYXRjaGluZy1ydWxlc1wiXSksXG4gICAgICAgICAgICBfY3JlYXRlVk5vZGUoJHNldHVwW1wiQ3VzdG9tU2VsZWN0XCJdLCB7XG4gICAgICAgICAgICAgIFwib25VcGRhdGU6Y2hvc2VuRGVsZXRlXCI6IF9jYWNoZVs0XSB8fCAoX2NhY2hlWzRdID0gKCRldmVudDogYW55KSA9PiAoJHNldHVwLmVsaW1pbmF0ZSgkc2V0dXAuY2hvc2VuRmlsdGVycy5tb2RlbF9jcHUsICRldmVudCkpKSxcbiAgICAgICAgICAgICAgXCJvblVwZGF0ZTpjaG9zZW5BZGRcIjogX2NhY2hlWzVdIHx8IChfY2FjaGVbNV0gPSAoJGV2ZW50OiBhbnkpID0+ICgkc2V0dXAuY2hvc2VuRmlsdGVycy5tb2RlbF9jcHUucHVzaCgkZXZlbnQpKSksXG4gICAgICAgICAgICAgIHRpdGxlOiAn0JzQvtC00LXQu9GMINC/0YDQvtGG0LXRgdGB0L7RgNCwJyxcbiAgICAgICAgICAgICAgXCJtYXRjaGluZy1ydWxlc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ3Byb2R1Y2VyJywgdHlwZTogJ21hdGNoaW5nJywgdmFsdWU6ICRzZXR1cC5jaG9zZW5GaWx0ZXJzLnByb2R1Y2VyX2NwdSwgY29tcGFyZUtleTogJ25hbWUnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ3NvY2tldCcsIHR5cGU6ICdtYXRjaGluZycsIHZhbHVlOiAkc2V0dXAuY2hvc2VuRmlsdGVycy5zb2NrZXRfY3B1LCBjb21wYXJlS2V5OiAnbmFtZScgfSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgbGlzdDogJHNldHVwLmZpbHRlcnMubW9kZWxfY3B1LFxuICAgICAgICAgICAgICBjaG9zZW46ICRzZXR1cC5jaG9zZW5GaWx0ZXJzLm1vZGVsX2NwdVxuICAgICAgICAgICAgfSwgbnVsbCwgOCAvKiBQUk9QUyAqLywgW1wibWF0Y2hpbmctcnVsZXNcIiwgXCJsaXN0XCIsIFwiY2hvc2VuXCJdKSxcbiAgICAgICAgICAgIF9jcmVhdGVWTm9kZSgkc2V0dXBbXCJDdXN0b21TZWxlY3RcIl0sIHtcbiAgICAgICAgICAgICAgXCJvblVwZGF0ZTpjaG9zZW5EZWxldGVcIjogX2NhY2hlWzZdIHx8IChfY2FjaGVbNl0gPSAoJGV2ZW50OiBhbnkpID0+ICgkc2V0dXAuZWxpbWluYXRlKCRzZXR1cC5jaG9zZW5GaWx0ZXJzLnByb2R1Y2VyX2dwdSwgJGV2ZW50KSkpLFxuICAgICAgICAgICAgICBcIm9uVXBkYXRlOmNob3NlbkFkZFwiOiBfY2FjaGVbN10gfHwgKF9jYWNoZVs3XSA9ICgkZXZlbnQ6IGFueSkgPT4gKCRzZXR1cC5jaG9zZW5GaWx0ZXJzLnByb2R1Y2VyX2dwdS5wdXNoKCRldmVudCkpKSxcbiAgICAgICAgICAgICAgdGl0bGU6ICfQn9GA0L7QuNC30LLQvtC00LjRgtC10LvRjCDQstC40LTQtdC+0LrQsNGA0YLRiycsXG4gICAgICAgICAgICAgIGxpc3Q6ICRzZXR1cC5maWx0ZXJzLnByb2R1Y2VyX2dwdSxcbiAgICAgICAgICAgICAgY2hvc2VuOiAkc2V0dXAuY2hvc2VuRmlsdGVycy5wcm9kdWNlcl9ncHUsXG4gICAgICAgICAgICAgIGxhYmVsTmFtZTogJ25hbWUnXG4gICAgICAgICAgICB9LCBudWxsLCA4IC8qIFBST1BTICovLCBbXCJsaXN0XCIsIFwiY2hvc2VuXCJdKSxcbiAgICAgICAgICAgIF9jcmVhdGVWTm9kZSgkc2V0dXBbXCJDdXN0b21TZWxlY3RcIl0sIHtcbiAgICAgICAgICAgICAgXCJvblVwZGF0ZTpjaG9zZW5EZWxldGVcIjogX2NhY2hlWzhdIHx8IChfY2FjaGVbOF0gPSAoJGV2ZW50OiBhbnkpID0+ICgkc2V0dXAuZWxpbWluYXRlKCRzZXR1cC5jaG9zZW5GaWx0ZXJzLm1vZGVsX2dwdSwgJGV2ZW50KSkpLFxuICAgICAgICAgICAgICBcIm9uVXBkYXRlOmNob3NlbkFkZFwiOiBfY2FjaGVbOV0gfHwgKF9jYWNoZVs5XSA9ICgkZXZlbnQ6IGFueSkgPT4gKCRzZXR1cC5jaG9zZW5GaWx0ZXJzLm1vZGVsX2dwdS5wdXNoKCRldmVudCkpKSxcbiAgICAgICAgICAgICAgdGl0bGU6ICfQnNC+0LTQtdC70Ywg0LLQuNC00LXQvtC60LDRgNGC0YsnLFxuICAgICAgICAgICAgICBsaXN0OiAkc2V0dXAuZmlsdGVycy5tb2RlbF9ncHUsXG4gICAgICAgICAgICAgIGNob3NlbjogJHNldHVwLmNob3NlbkZpbHRlcnMubW9kZWxfZ3B1LFxuICAgICAgICAgICAgICBcIm1hdGNoaW5nLXJ1bGVzXCI6IFt7IGtleTogJ3Byb2R1Y2VyJywgdHlwZTogJ21hdGNoaW5nJywgdmFsdWU6ICRzZXR1cC5jaG9zZW5GaWx0ZXJzLnByb2R1Y2VyX2dwdSwgY29tcGFyZUtleTogJ25hbWUnIH1dXG4gICAgICAgICAgICB9LCBudWxsLCA4IC8qIFBST1BTICovLCBbXCJsaXN0XCIsIFwiY2hvc2VuXCIsIFwibWF0Y2hpbmctcnVsZXNcIl0pXG4gICAgICAgICAgXSwgNjQgLyogU1RBQkxFX0ZSQUdNRU5UICovKSlcbiAgICAgICAgOiBfY3JlYXRlQ29tbWVudFZOb2RlKFwidi1pZlwiLCB0cnVlKVxuICAgIF0pLFxuICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfMywgW1xuICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF80LCBbXG4gICAgICAgIF9jcmVhdGVWTm9kZShfVHJhbnNpdGlvbkdyb3VwLCB7IG5hbWU6IFwibGlzdFwiIH0sIHtcbiAgICAgICAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICAgICAgICAoJHNldHVwLmlzRGF0YUxvYWRlZClcbiAgICAgICAgICAgICAgPyAoX29wZW5CbG9jayh0cnVlKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhfRnJhZ21lbnQsIHsga2V5OiAwIH0sIF9yZW5kZXJMaXN0KCRzZXR1cC5wcm9kdWN0cywgKHByb2R1Y3QpID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlQmxvY2soJHNldHVwW1wiUHJvZHVjdFwiXSwge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IHByb2R1Y3QuaWQsXG4gICAgICAgICAgICAgICAgICAgIFwiaW1hZ2Utc3JjXCI6IHByb2R1Y3QuaW1hZ2VzWzBdLnNyYyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogcHJvZHVjdC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICBncm91cGVkX3Byb2R1Y3RzOiBwcm9kdWN0Lmdyb3VwZWRfcHJvZHVjdHMsXG4gICAgICAgICAgICAgICAgICAgIHByaWNlOiBwcm9kdWN0LnByaWNlXG4gICAgICAgICAgICAgICAgICB9LCBudWxsLCA4IC8qIFBST1BTICovLCBbXCJpbWFnZS1zcmNcIiwgXCJuYW1lXCIsIFwiZ3JvdXBlZF9wcm9kdWN0c1wiLCBcInByaWNlXCJdKSlcbiAgICAgICAgICAgICAgICB9KSwgMTI4IC8qIEtFWUVEX0ZSQUdNRU5UICovKSlcbiAgICAgICAgICAgICAgOiBfY3JlYXRlQ29tbWVudFZOb2RlKFwidi1pZlwiLCB0cnVlKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF86IDEgLyogU1RBQkxFICovXG4gICAgICAgIH0pXG4gICAgICBdKVxuICAgIF0pXG4gIF0pKVxufSIsImltcG9ydCB7IG9wZW5CbG9jayBhcyBfb3BlbkJsb2NrLCBjcmVhdGVCbG9jayBhcyBfY3JlYXRlQmxvY2ssIGNyZWF0ZUVsZW1lbnRCbG9jayBhcyBfY3JlYXRlRWxlbWVudEJsb2NrLCBjcmVhdGVDb21tZW50Vk5vZGUgYXMgX2NyZWF0ZUNvbW1lbnRWTm9kZSB9IGZyb20gXCJ2dWVcIlxuXG5jb25zdCBfaG9pc3RlZF8xID0geyBrZXk6IDAgfVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKF9jdHg6IGFueSxfY2FjaGU6IGFueSwkcHJvcHM6IGFueSwkc2V0dXA6IGFueSwkZGF0YTogYW55LCRvcHRpb25zOiBhbnkpIHtcbiAgcmV0dXJuICgkc2V0dXAuaXNQYWdlRGF0YUxvYWRlZClcbiAgICA/IChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJtYWluXCIsIF9ob2lzdGVkXzEsIFtcbiAgICAgICAgKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUJsb2NrKCRzZXR1cFtcIkZpcnN0U2VjdGlvblwiXSwge1xuICAgICAgICAgIGtleTogMSxcbiAgICAgICAgICBvbkxvYWQ6IF9jYWNoZVswXSB8fCAoX2NhY2hlWzBdID0gKCRldmVudDogYW55KSA9PiAoJHNldHVwLmxvYWRlci5sb2FkKCkpKVxuICAgICAgICB9KSksXG4gICAgICAgIChfb3BlbkJsb2NrKCksIF9jcmVhdGVCbG9jaygkc2V0dXBbXCJTZWNvbmRTZWN0aW9uXCJdLCB7XG4gICAgICAgICAga2V5OiAyLFxuICAgICAgICAgIG9uTG9hZDogX2NhY2hlWzFdIHx8IChfY2FjaGVbMV0gPSAoJGV2ZW50OiBhbnkpID0+ICgkc2V0dXAubG9hZGVyLmxvYWQoKSkpXG4gICAgICAgIH0pKVxuICAgICAgXSkpXG4gICAgOiBfY3JlYXRlQ29tbWVudFZOb2RlKFwidi1pZlwiLCB0cnVlKVxufSIsImltcG9ydCBXUCBmcm9tICdAL2F4aW9zV1AnXG5pbXBvcnQgeyBTZXR0aW5ncyB9IGZyb20gJ0AvdHlwZXMvQXBwJ1xuXG5cblxuZXhwb3J0IGNvbnN0IGdldFBhZ2VTZXR0aW5ncyA9IGFzeW5jIChpZDogbnVtYmVyKTogUHJvbWlzZTxTZXR0aW5ncz4gPT4ge1xuICAgIHJldHVybiBhd2FpdCBXUC5nZXQoJ3BhZ2VzLycgKyBpZCkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5kYXRhKVxufSIsImltcG9ydCBXT08gZnJvbSAnQC9heGlvc1dvb2NvbWVyY2UnXG5pbXBvcnQgeyBJUHJvZHVjdCB9IGZyb20gJ0AvdHlwZXMvUHJvZHVjdCc7XG5pbXBvcnQgeyBBeGlvc1JlcXVlc3RDb25maWcgfSBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVBhcmFtcyB7XG4gICAgY3B1X3NvY2tldD86IEFycmF5PHN0cmluZz47XG4gICAgY3B1X3Byb2R1Y2VyPzogQXJyYXk8c3RyaW5nPjtcbiAgICBjcHVfbW9kZWw/OiBBcnJheTxudW1iZXI+O1xuICAgIGdwdV9tb2RlbD86IEFycmF5PG51bWJlcj47XG4gICAgZ3B1X3Byb2R1Y2VyPzogQXJyYXk8c3RyaW5nPjtcbiAgICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cblxuZXhwb3J0IGNvbnN0IGdldFByb2R1Y3RzID0gYXN5bmMgKHBlcl9wYWdlOiBudW1iZXIsIGNhdGVnb3J5X2lkPzogbnVtYmVyLCBwYXJhbXM/OiBJUGFyYW1zKSA9PiB7XG4gICAgbGV0IHByb2R1Y3RzID0gW11cbiAgICBsZXQgcGFnZSA9IDA7XG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgcGFnZSsrO1xuXG4gICAgICAgIGlmIChwcm9kdWN0cy5sZW5ndGggPj0gcGVyX3BhZ2UpIHtcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgbGV0IGZldGNoZWRQcm9kdWN0cyA9IGF3YWl0IFdPTy5nZXQoJ3Byb2R1Y3RzJywge1xuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgcGVyX3BhZ2U6IHBlcl9wYWdlLFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBjYXRlZ29yeV9pZCA/PyBudWxsLFxuICAgICAgICAgICAgICAgIHBhZ2U6IHBhZ2UsXG4gICAgICAgICAgICAgICAgLi4ucGFyYW1zXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAocGFnZSA+IE51bWJlcihmZXRjaGVkUHJvZHVjdHMuaGVhZGVyc1sneC13cC10b3RhbHBhZ2VzJ10pKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHByb2R1Y3RzLnB1c2goLi4uZmV0Y2hlZFByb2R1Y3RzLmRhdGEpXG4gICAgfVxuICAgIHJldHVybiBwcm9kdWN0cztcbn0iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbmNvbnN0IGluc3RhbmNlID0gYXhpb3MuY3JlYXRlKHtcbiAgICBiYXNlVVJMOiAnaHR0cDovL2xvY2FsaG9zdC93cC1qc29uL3djL3YzLycsXG4gICAgaGVhZGVyczogeyAnQXV0aG9yaXphdGlvbic6ICdCYXNpYyBZMnRmWTJFek1qZGtOalkxTkdVeU5qVXdPVGxqTmpJM09EWXlPV0UzT0RGbU16UTVabUl3WW1ObFlUcGpjMTloTkRRME5EUXlPVFppT1RJMU9EQTJaamhtTVdNek0ySTVOMlJtTmpKaU1UQTBOemhsTTJRMicgfVxufSk7XG5cblxuZXhwb3J0IGRlZmF1bHQgaW5zdGFuY2VcbiIsImV4cG9ydCBjb25zdCBlbGltaW5hdGUgPSAoYXJyYXk6IEFycmF5PGFueT4sIGVsZW1lbnQ6IGFueSkgPT4ge1xuICAgIGFycmF5LnNwbGljZShhcnJheS5pbmRleE9mKGVsZW1lbnQpLCAxKVxufVxuIiwiaW1wb3J0IHsgUmVmLCBjb21wdXRlZCwgcmVmLCB3YXRjaCB9IGZyb20gXCJ2dWVcIjtcblxuY2xhc3MgTG9hZGVyIHtcblxuICAgIHByaXZhdGUgbG9hZGVkQ291bnRlcjogbnVtYmVyID0gMDtcblxuICAgIHByaXZhdGUgY291bnRlcjogbnVtYmVyID0gMDtcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoY291bnRlcjogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuY291bnRlciA9IGNvdW50ZXI7XG4gICAgfVxuICAgIHB1YmxpYyBsb2FkKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmxvYWRlZENvdW50ZXIrKztcblxuICAgICAgICB0aGlzLmFmdGVyTG9hZCgpXG4gICAgfVxuICAgIHB1YmxpYyByZXN0YXJ0KGNvdW50PzogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmIChjb3VudCkge1xuICAgICAgICAgICAgdGhpcy5jb3VudGVyID0gY291bnRcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubG9hZGVkQ291bnRlciA9IDA7XG4gICAgfVxuICAgIHB1YmxpYyBvbkFsbGlzTG9hZGVkOiBGdW5jdGlvbjtcbiAgICBwcml2YXRlIGFmdGVyTG9hZCgpOiB2b2lkIHtcblxuICAgICAgICBpZiAodGhpcy5sb2FkZWRDb3VudGVyICE9IHRoaXMuY291bnRlcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMub25BbGxpc0xvYWRlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub25BbGxpc0xvYWRlZCgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbmV4cG9ydCBjb25zdCB1c2VMb2FkID0gKGNvdW50OiBudW1iZXIpID0+IHtcblxuICAgIGNvbnN0IGxvYWRlciA9IHJlZihuZXcgTG9hZGVyKGNvdW50KSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBsb2FkZXIsXG4gICAgfVxufSIsImltcG9ydCBTdG9yZSwgeyBNdXRhdGlvbnMgfSBmcm9tICdAL3N0b3JlJztcbmltcG9ydCB7IFdyaXRhYmxlQ29tcHV0ZWRSZWYsIGNvbXB1dGVkIH0gZnJvbSAndnVlJztcbmltcG9ydCB7IElDYXRlZ29yeU1haW5QYWdlLCBTZXR0aW5ncyB9IGZyb20gJ0AvdHlwZXMvQXBwJztcblxuXG5leHBvcnQgY29uc3QgdXNlUGFnZVNldHRpbmdzID0gKHN0b3JlOiB0eXBlb2YgU3RvcmUpID0+IHtcblxuICAgIGxldCBwYWdlOiBXcml0YWJsZUNvbXB1dGVkUmVmPE9iamVjdD4gPSBjb21wdXRlZCh7XG4gICAgICAgIGdldDogKCkgPT4gc3RvcmUuc3RhdGUucGFnZS5jZnMsXG4gICAgICAgIHNldDogKHZhbHVlOiBTZXR0aW5ncykgPT4gc3RvcmUuY29tbWl0KE11dGF0aW9ucy5TRVRfUEFHRV9TRVRUSU5HUywgdmFsdWUpLFxuICAgIH0pXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwYWdlXG4gICAgfVxuXG59IiwiaW1wb3J0IHsgUmVmLCBXcml0YWJsZUNvbXB1dGVkUmVmLCBjb21wdXRlZCwgcmVmIH0gZnJvbSAndnVlJztcbmltcG9ydCB7SVBhcmFtcywgZ2V0UHJvZHVjdHN9IGZyb20gJ0AvYXBpL0thdGFsb2cvZ2V0UHJvZHVjdHMnO1xuXG5cbmludGVyZmFjZSBJRmlsdGVycyB7XG4gICAgcHJvZHVjZXJfY3B1OiBBcnJheTxhbnk+LFxuICAgIHNvY2tldF9jcHU6IEFycmF5PGFueT4sXG4gICAgbW9kZWxfY3B1OiBBcnJheTxhbnk+LFxuICAgIHByb2R1Y2VyX2dwdTogQXJyYXk8YW55PixcbiAgICBtb2RlbF9ncHU6IEFycmF5PGFueT4sXG59XG5cblxuZXhwb3J0IGNvbnN0IFVzZUZpbHRlcnMgPSAocGFnZTogV3JpdGFibGVDb21wdXRlZFJlZjxPYmplY3Q+KSA9PiB7XG4gICAgXG4gICAgY29uc3QgZmlsdGVyczogUmVmPElGaWx0ZXJzPiA9IHJlZih7XG4gICAgICAgIHByb2R1Y2VyX2NwdTogW10sXG4gICAgICAgIHNvY2tldF9jcHU6IFtdLFxuICAgICAgICBtb2RlbF9jcHU6IFtdLFxuICAgICAgICBwcm9kdWNlcl9ncHU6IFtdLFxuICAgICAgICBtb2RlbF9ncHU6IFtdLFxuICAgIH0pXG5cbiAgICBjb25zdCBjaG9zZW5GaWx0ZXJzOiBSZWY8SUZpbHRlcnM+ID0gcmVmKHtcbiAgICAgICAgcHJvZHVjZXJfY3B1OiBbXSxcbiAgICAgICAgc29ja2V0X2NwdTogW10sXG4gICAgICAgIG1vZGVsX2NwdTogW10sXG4gICAgICAgIHByb2R1Y2VyX2dwdTogW10sXG4gICAgICAgIG1vZGVsX2dwdTogW10sXG4gICAgfSlcblxuICAgIGNvbnN0IGdldFJlcXVlc3RQYXJhbXMgPSBjb21wdXRlZCgoKTogSVBhcmFtcyA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjcHVfcHJvZHVjZXI6IGNob3NlbkZpbHRlcnMudmFsdWUucHJvZHVjZXJfY3B1Lm1hcChpdGVtID0+IGl0ZW0ubmFtZSksXG4gICAgICAgICAgICBjcHVfc29ja2V0OiBjaG9zZW5GaWx0ZXJzLnZhbHVlLnNvY2tldF9jcHUubWFwKGl0ZW0gPT4gaXRlbS5uYW1lKSxcbiAgICAgICAgICAgIGNwdV9tb2RlbDogY2hvc2VuRmlsdGVycy52YWx1ZS5tb2RlbF9jcHUubWFwKGl0ZW0gPT4gaXRlbS5pZCksXG4gICAgICAgICAgICBncHVfcHJvZHVjZXI6IGNob3NlbkZpbHRlcnMudmFsdWUucHJvZHVjZXJfZ3B1Lm1hcChpdGVtID0+IGl0ZW0ubmFtZSksXG4gICAgICAgICAgICBncHVfbW9kZWw6IGNob3NlbkZpbHRlcnMudmFsdWUubW9kZWxfZ3B1Lm1hcChpdGVtID0+IGl0ZW0uaWQpLFxuICAgICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IG9uTW91bnRlZEFjdGlvbiA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgZmlsdGVycy52YWx1ZS5wcm9kdWNlcl9jcHUgPSBwYWdlLnZhbHVlWydmaWx0ZXJzX2NwdS1wcm9kdWNlciddO1xuICAgICAgICBmaWx0ZXJzLnZhbHVlLm1vZGVsX2NwdSA9IGF3YWl0IGdldFByb2R1Y3RzKDEwLCAyMSk7XG4gICAgICAgIGZpbHRlcnMudmFsdWUuc29ja2V0X2NwdSA9IHBhZ2UudmFsdWVbJ2ZpbHRlcnNfY3B1LXNvY2tldCddXG4gICAgICAgIGZpbHRlcnMudmFsdWUucHJvZHVjZXJfZ3B1ID0gcGFnZS52YWx1ZVsnZmlsdGVyc19ncHUtcHJvZHVjZXInXVxuXG4gICAgICAgIGZpbHRlcnMudmFsdWUubW9kZWxfZ3B1ID0gYXdhaXQgZ2V0UHJvZHVjdHMoMTAsIDIwKTtcblxuICAgICAgICBmaWx0ZXJzLnZhbHVlLm1vZGVsX2NwdS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgaXRlbS5sYWJlbCA9IGl0ZW0uY2ZzLnNob3J0bHlfbmFtZVxuICAgICAgICAgICAgaXRlbS5wcm9kdWNlciA9IGl0ZW0uY2ZzLnByb2R1Y2VyXG4gICAgICAgICAgICBpdGVtLnNvY2tldCA9IGl0ZW0uY2ZzLnByb3BlcnRpZXMuZmluZChpdGVtID0+IGl0ZW0ua2V5WzBdLnNsdWcgPSAnY3B1X3NvY2tldCcpPy52YWx1ZVxuICAgICAgICB9KVxuXG4gICAgICAgIGZpbHRlcnMudmFsdWUubW9kZWxfZ3B1LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBpdGVtLmxhYmVsID0gaXRlbS5jZnMuc2hvcnRseV9uYW1lXG4gICAgICAgICAgICBpdGVtLnByb2R1Y2VyID0gaXRlbS5jZnMucHJvZHVjZXJcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBmaWx0ZXJzLFxuICAgICAgICBjaG9zZW5GaWx0ZXJzLFxuICAgICAgICBnZXRSZXF1ZXN0UGFyYW1zLFxuICAgICAgICBvbk1vdW50ZWRBY3Rpb25cbiAgICB9XG59IiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vQ3VzdG9tU2VsZWN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wNDM1MGQwNiZzY29wZWQ9dHJ1ZSZ0cz10cnVlXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQ3VzdG9tU2VsZWN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmc2V0dXA9dHJ1ZSZsYW5nPXRzXCJcbmV4cG9ydCAqIGZyb20gXCIuL0N1c3RvbVNlbGVjdC52dWU/dnVlJnR5cGU9c2NyaXB0JnNldHVwPXRydWUmbGFuZz10c1wiXG5cbmltcG9ydCBcIi4vQ3VzdG9tU2VsZWN0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTA0MzUwZDA2Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZVwiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fc2NvcGVJZCcsXCJkYXRhLXYtMDQzNTBkMDZcIl0sWydfX2ZpbGUnLFwic3JjL2NvbXBvbmVudHMvQ3VzdG9tU2VsZWN0LnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCIwNDM1MGQwNlwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzA0MzUwZDA2JywgX19leHBvcnRzX18pKSB7XG4gICAgYXBpLnJlbG9hZCgnMDQzNTBkMDYnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0N1c3RvbVNlbGVjdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDQzNTBkMDYmc2NvcGVkPXRydWUmdHM9dHJ1ZVwiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCcwNDM1MGQwNicsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vUHJvZHVjdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2NmNGVmNmYmc2NvcGVkPXRydWUmdHM9dHJ1ZVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1Byb2R1Y3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZzZXR1cD10cnVlJmxhbmc9dHNcIlxuZXhwb3J0ICogZnJvbSBcIi4vUHJvZHVjdC52dWU/dnVlJnR5cGU9c2NyaXB0JnNldHVwPXRydWUmbGFuZz10c1wiXG5cbmltcG9ydCBcIi4vUHJvZHVjdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zY2Y0ZWY2ZiZsYW5nPXNjc3Mmc2NvcGVkPXRydWVcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2V4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl0sWydfX3Njb3BlSWQnLFwiZGF0YS12LTNjZjRlZjZmXCJdLFsnX19maWxlJyxcInNyYy9jb21wb25lbnRzL1Byb2R1Y3QudnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcIjNjZjRlZjZmXCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnM2NmNGVmNmYnLCBfX2V4cG9ydHNfXykpIHtcbiAgICBhcGkucmVsb2FkKCczY2Y0ZWY2ZicsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vUHJvZHVjdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2NmNGVmNmYmc2NvcGVkPXRydWUmdHM9dHJ1ZVwiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCczY2Y0ZWY2ZicsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vZmlyc3Qtc2VjdGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjgyMmZkZDImc2NvcGVkPXRydWUmdHM9dHJ1ZVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2ZpcnN0LXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZzZXR1cD10cnVlJmxhbmc9dHNcIlxuZXhwb3J0ICogZnJvbSBcIi4vZmlyc3Qtc2VjdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0JnNldHVwPXRydWUmbGFuZz10c1wiXG5cbmltcG9ydCBcIi4vZmlyc3Qtc2VjdGlvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02ODIyZmRkMiZsYW5nPXNjc3Mmc2NvcGVkPXRydWVcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2V4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl0sWydfX3Njb3BlSWQnLFwiZGF0YS12LTY4MjJmZGQyXCJdLFsnX19maWxlJyxcInNyYy9zZWN0aW9ucy9rYXRhbG9nL2ZpcnN0LXNlY3Rpb24udnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcIjY4MjJmZGQyXCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnNjgyMmZkZDInLCBfX2V4cG9ydHNfXykpIHtcbiAgICBhcGkucmVsb2FkKCc2ODIyZmRkMicsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vZmlyc3Qtc2VjdGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjgyMmZkZDImc2NvcGVkPXRydWUmdHM9dHJ1ZVwiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCc2ODIyZmRkMicsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vc2Vjb25kLXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTAxNGY2MmYyJnNjb3BlZD10cnVlJnRzPXRydWVcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9zZWNvbmQtc2VjdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0JnNldHVwPXRydWUmbGFuZz10c1wiXG5leHBvcnQgKiBmcm9tIFwiLi9zZWNvbmQtc2VjdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0JnNldHVwPXRydWUmbGFuZz10c1wiXG5cbmltcG9ydCBcIi4vc2Vjb25kLXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDE0ZjYyZjImbGFuZz1zY3NzJnNjb3BlZD10cnVlXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19zY29wZUlkJyxcImRhdGEtdi0wMTRmNjJmMlwiXSxbJ19fZmlsZScsXCJzcmMvc2VjdGlvbnMva2F0YWxvZy9zZWNvbmQtc2VjdGlvbi52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiMDE0ZjYyZjJcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCcwMTRmNjJmMicsIF9fZXhwb3J0c19fKSkge1xuICAgIGFwaS5yZWxvYWQoJzAxNGY2MmYyJywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9zZWNvbmQtc2VjdGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDE0ZjYyZjImc2NvcGVkPXRydWUmdHM9dHJ1ZVwiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCcwMTRmNjJmMicsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4va2F0YWxvZy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZDQ5YTFmMTImdHM9dHJ1ZVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2thdGFsb2cudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZzZXR1cD10cnVlJmxhbmc9dHNcIlxuZXhwb3J0ICogZnJvbSBcIi4va2F0YWxvZy52dWU/dnVlJnR5cGU9c2NyaXB0JnNldHVwPXRydWUmbGFuZz10c1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fZmlsZScsXCJzcmMvdmlld3Mva2F0YWxvZy52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiZDQ5YTFmMTJcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCdkNDlhMWYxMicsIF9fZXhwb3J0c19fKSkge1xuICAgIGFwaS5yZWxvYWQoJ2Q0OWExZjEyJywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9rYXRhbG9nLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kNDlhMWYxMiZ0cz10cnVlXCIsICgpID0+IHtcbiAgICBhcGkucmVyZW5kZXIoJ2Q0OWExZjEyJywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMTBdLnVzZVswXSEuL0N1c3RvbVNlbGVjdC52dWU/dnVlJnR5cGU9c2NyaXB0JnNldHVwPXRydWUmbGFuZz10c1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxMF0udXNlWzBdIS4vQ3VzdG9tU2VsZWN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmc2V0dXA9dHJ1ZSZsYW5nPXRzXCIiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMTBdLnVzZVswXSEuL1Byb2R1Y3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZzZXR1cD10cnVlJmxhbmc9dHNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMTBdLnVzZVswXSEuL1Byb2R1Y3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZzZXR1cD10cnVlJmxhbmc9dHNcIiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxMF0udXNlWzBdIS4vZmlyc3Qtc2VjdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0JnNldHVwPXRydWUmbGFuZz10c1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxMF0udXNlWzBdIS4vZmlyc3Qtc2VjdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0JnNldHVwPXRydWUmbGFuZz10c1wiIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzEwXS51c2VbMF0hLi9zZWNvbmQtc2VjdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0JnNldHVwPXRydWUmbGFuZz10c1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxMF0udXNlWzBdIS4vc2Vjb25kLXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZzZXR1cD10cnVlJmxhbmc9dHNcIiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxMF0udXNlWzBdIS4va2F0YWxvZy52dWU/dnVlJnR5cGU9c2NyaXB0JnNldHVwPXRydWUmbGFuZz10c1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxMF0udXNlWzBdIS4va2F0YWxvZy52dWU/dnVlJnR5cGU9c2NyaXB0JnNldHVwPXRydWUmbGFuZz10c1wiIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzEwXS51c2VbMF0hLi9DdXN0b21TZWxlY3QudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDQzNTBkMDYmbGFuZz1zY3NzJnNjb3BlZD10cnVlXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjk3MTljMjkwXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxMF0udXNlWzBdIS4vQ3VzdG9tU2VsZWN0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTA0MzUwZDA2Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxMF0udXNlWzBdIS4vQ3VzdG9tU2VsZWN0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTA0MzUwZDA2Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZVwiKTtcbiAgICAgaWYobmV3Q29udGVudC5fX2VzTW9kdWxlKSBuZXdDb250ZW50ID0gbmV3Q29udGVudC5kZWZhdWx0O1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMTBdLnVzZVswXSEuL1Byb2R1Y3QudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9M2NmNGVmNmYmbGFuZz1zY3NzJnNjb3BlZD10cnVlXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjc5ZGI2MzczXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxMF0udXNlWzBdIS4vUHJvZHVjdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zY2Y0ZWY2ZiZsYW5nPXNjc3Mmc2NvcGVkPXRydWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMTBdLnVzZVswXSEuL1Byb2R1Y3QudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9M2NmNGVmNmYmbGFuZz1zY3NzJnNjb3BlZD10cnVlXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxMF0udXNlWzBdIS4vZmlyc3Qtc2VjdGlvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02ODIyZmRkMiZsYW5nPXNjc3Mmc2NvcGVkPXRydWVcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiMWExZmI3NzhcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzEwXS51c2VbMF0hLi9maXJzdC1zZWN0aW9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTY4MjJmZGQyJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxMF0udXNlWzBdIS4vZmlyc3Qtc2VjdGlvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02ODIyZmRkMiZsYW5nPXNjc3Mmc2NvcGVkPXRydWVcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzEwXS51c2VbMF0hLi9zZWNvbmQtc2VjdGlvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wMTRmNjJmMiZsYW5nPXNjc3Mmc2NvcGVkPXRydWVcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiMjg2YjI2ZmRcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzEwXS51c2VbMF0hLi9zZWNvbmQtc2VjdGlvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wMTRmNjJmMiZsYW5nPXNjc3Mmc2NvcGVkPXRydWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMTBdLnVzZVswXSEuL3NlY29uZC1zZWN0aW9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTAxNGY2MmYyJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZVwiKTtcbiAgICAgaWYobmV3Q29udGVudC5fX2VzTW9kdWxlKSBuZXdDb250ZW50ID0gbmV3Q29udGVudC5kZWZhdWx0O1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=