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
        // const computedMatchedList = computed(() => {
        //     let result = [];
        //     for (const item of chosen) {
        //         if (matchedList.value.includes(item)) {
        //             result.push(item)
        //         }
        //     }
        //     return result;
        // })
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
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.mjs");
/* harmony import */ var _components_CustomSelect_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/CustomSelect.vue */ "./src/components/CustomSelect.vue");
/* harmony import */ var _api_Katalog_getProducts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/api/Katalog/getProducts */ "./src/api/Katalog/getProducts.ts");






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    __name: 'second-section',
    setup(__props, { expose: __expose }) {
        __expose();
        const eliminate = (array, $event) => {
            array.splice(array.indexOf($event), 1);
        };
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
        const route = (0,vue_router__WEBPACK_IMPORTED_MODULE_4__.useRoute)();
        let isDataLoaded = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
        let products = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeMount)(async () => {
            products.value = await (0,_api_Katalog_getProducts__WEBPACK_IMPORTED_MODULE_3__.getProducts)(4, 16);
            console.log(products.value);
            isDataLoaded.value = true;
        });
        const __returned__ = { eliminate, chosenFilters, filters, route, get isDataLoaded() { return isDataLoaded; }, set isDataLoaded(v) { isDataLoaded = v; }, get products() { return products; }, set products(v) { products = v; }, Product: _components_Product_vue__WEBPACK_IMPORTED_MODULE_1__["default"], CustomSelect: _components_CustomSelect_vue__WEBPACK_IMPORTED_MODULE_2__["default"] };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y0FBYyxtQkFBTyxDQUFDLCtsQkFBaVQ7QUFDdlU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLGdLQUFpRjtBQUMzRiwrQ0FBK0M7QUFDL0M7QUFDQSxHQUFHLEtBQVUsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL3NyYy8uL3NyYy9jb21wb25lbnRzL0N1c3RvbVNlbGVjdC52dWU/YjVkZSIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0LnZ1ZT9iMTlhIiwid2VicGFjazovL3NyYy8uL3NyYy9zZWN0aW9ucy9rYXRhbG9nL2ZpcnN0LXNlY3Rpb24udnVlPzNkODAiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL3NlY3Rpb25zL2thdGFsb2cvc2Vjb25kLXNlY3Rpb24udnVlP2Q1ODgiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL2NvbXBvbmVudHMvQ3VzdG9tU2VsZWN0LnZ1ZT9hZDg5Iiwid2VicGFjazovL3NyYy8uL3NyYy9jb21wb25lbnRzL0N1c3RvbVNlbGVjdC52dWUiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdC52dWU/MzYzOSIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0LnZ1ZSIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvc2VjdGlvbnMva2F0YWxvZy9maXJzdC1zZWN0aW9uLnZ1ZT80MTUwIiwid2VicGFjazovL3NyYy8uL3NyYy9zZWN0aW9ucy9rYXRhbG9nL2ZpcnN0LXNlY3Rpb24udnVlIiwid2VicGFjazovL3NyYy8uL3NyYy9zZWN0aW9ucy9rYXRhbG9nL3NlY29uZC1zZWN0aW9uLnZ1ZT85NWVjIiwid2VicGFjazovL3NyYy8uL3NyYy9zZWN0aW9ucy9rYXRhbG9nL3NlY29uZC1zZWN0aW9uLnZ1ZSIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvdmlld3Mva2F0YWxvZy52dWU/ZDM2YyIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvdmlld3Mva2F0YWxvZy52dWUiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL2NvbXBvbmVudHMvQ3VzdG9tU2VsZWN0LnZ1ZT9hNzFiIiwid2VicGFjazovL3NyYy8uL3NyYy9jb21wb25lbnRzL1Byb2R1Y3QudnVlPzU3ZmYiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL3NlY3Rpb25zL2thdGFsb2cvZmlyc3Qtc2VjdGlvbi52dWU/MjY4ZSIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvc2VjdGlvbnMva2F0YWxvZy9zZWNvbmQtc2VjdGlvbi52dWU/Mzk4MCIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvdmlld3Mva2F0YWxvZy52dWU/NDRhNCIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvYXBpL0FwcC9nZXRQYWdlU2V0dGluZ3MudHMiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL2FwaS9LYXRhbG9nL2dldFByb2R1Y3RzLnRzIiwid2VicGFjazovL3NyYy8uL3NyYy9heGlvc1dvb2NvbWVyY2UudHMiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL2hvb2tzL0FwcC91c2VMb2FkLnRzIiwid2VicGFjazovL3NyYy8uL3NyYy9ob29rcy9BcHAvdXNlUGFnZVNldHRpbmdzLnRzIiwid2VicGFjazovL3NyYy8uL3NyYy9jb21wb25lbnRzL0N1c3RvbVNlbGVjdC52dWU/ZmExNCIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0LnZ1ZT9jZWZiIiwid2VicGFjazovL3NyYy8uL3NyYy9zZWN0aW9ucy9rYXRhbG9nL2ZpcnN0LXNlY3Rpb24udnVlPzUwYmYiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL3NlY3Rpb25zL2thdGFsb2cvc2Vjb25kLXNlY3Rpb24udnVlPzJjZWUiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL3ZpZXdzL2thdGFsb2cudnVlPzk1MjgiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL2NvbXBvbmVudHMvQ3VzdG9tU2VsZWN0LnZ1ZT9lMzVjIiwid2VicGFjazovL3NyYy8uL3NyYy9jb21wb25lbnRzL1Byb2R1Y3QudnVlP2MzM2MiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL3NlY3Rpb25zL2thdGFsb2cvZmlyc3Qtc2VjdGlvbi52dWU/YzRiYSIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvc2VjdGlvbnMva2F0YWxvZy9zZWNvbmQtc2VjdGlvbi52dWU/NDg3ZCIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvdmlld3Mva2F0YWxvZy52dWU/N2Q0NyIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvY29tcG9uZW50cy9DdXN0b21TZWxlY3QudnVlPzdhZDMiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdC52dWU/YzUyMSIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvc2VjdGlvbnMva2F0YWxvZy9maXJzdC1zZWN0aW9uLnZ1ZT9hMDRmIiwid2VicGFjazovL3NyYy8uL3NyYy9zZWN0aW9ucy9rYXRhbG9nL3NlY29uZC1zZWN0aW9uLnZ1ZT81MWM1Iiwid2VicGFjazovL3NyYy8uL3NyYy92aWV3cy9rYXRhbG9nLnZ1ZT8wYTEwIiwid2VicGFjazovL3NyYy8uL3NyYy9jb21wb25lbnRzL0N1c3RvbVNlbGVjdC52dWU/YTMwNyIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0LnZ1ZT9jNWE3Iiwid2VicGFjazovL3NyYy8uL3NyYy9zZWN0aW9ucy9rYXRhbG9nL2ZpcnN0LXNlY3Rpb24udnVlPzY1N2QiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL3NlY3Rpb25zL2thdGFsb2cvc2Vjb25kLXNlY3Rpb24udnVlPzY2ZjkiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL2NvbXBvbmVudHMvQ3VzdG9tU2VsZWN0LnZ1ZT8xOGE3Iiwid2VicGFjazovL3NyYy8uL3NyYy9jb21wb25lbnRzL1Byb2R1Y3QudnVlP2U1ZWMiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL3NlY3Rpb25zL2thdGFsb2cvZmlyc3Qtc2VjdGlvbi52dWU/YjU2YSIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvc2VjdGlvbnMva2F0YWxvZy9zZWNvbmQtc2VjdGlvbi52dWU/ZjM2YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnNlbGVjdFtkYXRhLXYtMDQzNTBkMDZdIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uc2VsZWN0X19wYW5lbFtkYXRhLXYtMDQzNTBkMDZdIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDE2cHggMThweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBDMEMwQztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uc2VsZWN0X190aXRsZVtkYXRhLXYtMDQzNTBkMDZdIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogI0ZGRjtcbn1cbi5zZWxlY3RfX2xpc3RbZGF0YS12LTA0MzUwZDA2XSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMHB4O1xufVxuLnNlbGVjdF9faXRlbVtkYXRhLXYtMDQzNTBkMDZdIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNDE0MTQ7XG59XG4uc2VsZWN0X19pdGVtIGJ1dHRvbltkYXRhLXYtMDQzNTBkMDZdIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgY29sb3I6ICNGRkY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5zZWxlY3RfX2l0ZW0tLWFjdGl2ZVtkYXRhLXYtMDQzNTBkMDZdIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0MzQzNDtcbn1cbi5zZWxlY3RfX3dyYXBwZXJbZGF0YS12LTA0MzUwZDA2XSB7XG4gIGhlaWdodDogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG9wYWNpdHk6IDA7XG59XG4uc2VsZWN0X193cmFwcGVyLS1vcGVuW2RhdGEtdi0wNDM1MGQwNl0ge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIG9wYWNpdHk6IDE7XG4gIGhlaWdodDogdW5zZXQ7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9DdXN0b21TZWxlY3QudnVlXCIsXCJ3ZWJwYWNrOi8vLi9DdXN0b21TZWxlY3QudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBO0VBQ0ksV0FBQTtBQ0FKO0FERUk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBRUEsa0JBQUE7QUNEUjtBRElJO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDRlI7QURLSTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQ0pSO0FET0k7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FDTFI7QURPUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FDTFo7QURTUTtFQUNJLHlCQUFBO0FDUFo7QURXSTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFFQSxnQkFBQTtFQUVBLFVBQUE7QUNYUjtBRGFRO0VBRUksaUJBQUE7RUFDQSxvQkFBQTtFQUVBLFVBQUE7RUFFQSxhQUFBO0FDZFpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuLnNlbGVjdCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICAmX19wYW5lbCB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIHBhZGRpbmc6IDE2cHggMThweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwQzBDMEM7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgfVxcblxcbiAgICAmX190aXRsZSB7XFxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgICAgIGNvbG9yOiAjRkZGO1xcbiAgICB9XFxuXFxuICAgICZfX2xpc3Qge1xcbiAgICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGdhcDogMTBweDtcXG4gICAgfVxcblxcbiAgICAmX19pdGVtIHtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQxNDE0O1xcblxcbiAgICAgICAgYnV0dG9uIHtcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICAgICAgY29sb3I6ICNGRkY7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgICAgIH1cXG5cXG5cXG4gICAgICAgICYtLWFjdGl2ZSB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM0MzQzNDtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmX193cmFwcGVyIHtcXG4gICAgICAgIGhlaWdodDogMHB4O1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG5cXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuXFxuICAgICAgICBvcGFjaXR5OiAwO1xcblxcbiAgICAgICAgJi0tb3BlbiB7XFxuXFxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuXFxuICAgICAgICAgICAgb3BhY2l0eTogMTtcXG5cXG4gICAgICAgICAgICBoZWlnaHQ6IHVuc2V0O1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblwiLFwiLnNlbGVjdCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLnNlbGVjdF9fcGFuZWwge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxNnB4IDE4cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEMwQzBDO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbi5zZWxlY3RfX3RpdGxlIHtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgY29sb3I6ICNGRkY7XFxufVxcbi5zZWxlY3RfX2xpc3Qge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG59XFxuLnNlbGVjdF9faXRlbSB7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE0MTQxNDtcXG59XFxuLnNlbGVjdF9faXRlbSBidXR0b24ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBjb2xvcjogI0ZGRjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG4uc2VsZWN0X19pdGVtLS1hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0MzQzNDtcXG59XFxuLnNlbGVjdF9fd3JhcHBlciB7XFxuICBoZWlnaHQ6IDBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgb3BhY2l0eTogMDtcXG59XFxuLnNlbGVjdF9fd3JhcHBlci0tb3BlbiB7XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgb3BhY2l0eTogMTtcXG4gIGhlaWdodDogdW5zZXQ7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnByb2R1Y3RbZGF0YS12LTNjZjRlZjZmXSB7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBwYWRkaW5nLXRvcDogMTVweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE0MTQxNDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDIwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuLnByb2R1Y3RbZGF0YS12LTNjZjRlZjZmXTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggI2ZmZmZmZjtcbn1cbi5wcm9kdWN0X19pbWFnZVtkYXRhLXYtM2NmNGVmNmZdIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cbi5wcm9kdWN0X19wcmljZVtkYXRhLXYtM2NmNGVmNmZdIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNTAwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4ucHJvZHVjdC1kZXNjcmlwdGlvbltkYXRhLXYtM2NmNGVmNmZdIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG4ucHJvZHVjdC1kZXNjcmlwdGlvbl9fbmFtZVtkYXRhLXYtM2NmNGVmNmZdIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLnByb2R1Y3QtZGVzY3JpcHRpb24tc3BlY3NbZGF0YS12LTNjZjRlZjZmXSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBnYXA6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5zcGVjW2RhdGEtdi0zY2Y0ZWY2Zl0ge1xuICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkIHJnYig1MSwgNTEsIDUxKTtcbiAgd2lkdGg6IDgwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogcmdiKDIxNCwgMjEzLCAyMTMpO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdC52dWVcIixcIndlYnBhY2s6Ly8uL1Byb2R1Y3QudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBO0VBQ0ksK0NBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUVBLHlCQUFBO0VBRUEsa0JBQUE7RUFFQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUVBLFNBQUE7RUFFQSxvQkFBQTtBQ0xKO0FET0k7RUFDSSxlQUFBO0VBQ0EsNEJBQUE7QUNMUjtBRFFJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ05SO0FEU0k7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQ1BSO0FEV0E7RUFHSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUVBLFdBQUE7QUNYSjtBRGFJO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ1hSO0FEZUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUNaSjtBRGVBO0VBQ0kseUNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUVBLGdCQUFBO0VBQ0EseUJBQUE7QUNiSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG4ucHJvZHVjdCB7XFxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMjVweDtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE0MTQxNDtcXG5cXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBnYXA6IDIwcHg7XFxuXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcblxcbiAgICAmOmhvdmVyIHtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4ICNmZmZmZmY7XFxuICAgIH1cXG5cXG4gICAgJl9faW1hZ2Uge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xcbiAgICB9XFxuXFxuICAgICZfX3ByaWNlIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDBweDtcXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIH1cXG59XFxuXFxuLnByb2R1Y3QtZGVzY3JpcHRpb24ge1xcblxcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgJl9fbmFtZSB7XFxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIH1cXG59XFxuXFxuLnByb2R1Y3QtZGVzY3JpcHRpb24tc3BlY3Mge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcblxcbi5zcGVjIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCByZ2IoNTEsIDUxLCA1MSk7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcXG5cXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgY29sb3I6IHJnYigyMTQsIDIxMywgMjEzKTtcXG59XFxuXCIsXCIucHJvZHVjdCB7XFxuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gIHBhZGRpbmctYm90dG9tOiAyNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE0MTQxNDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcbn1cXG4ucHJvZHVjdDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3gtc2hhZG93OiAwIDAgMTBweCAjZmZmZmZmO1xcbn1cXG4ucHJvZHVjdF9faW1hZ2Uge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvYmplY3QtZml0OiBjb250YWluO1xcbn1cXG4ucHJvZHVjdF9fcHJpY2Uge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMHB4O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuXFxuLnByb2R1Y3QtZGVzY3JpcHRpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5wcm9kdWN0LWRlc2NyaXB0aW9uX19uYW1lIHtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXNpemU6IDIycHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLnByb2R1Y3QtZGVzY3JpcHRpb24tc3BlY3Mge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBnYXA6IDEwcHg7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcblxcbi5zcGVjIHtcXG4gIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgcmdiKDUxLCA1MSwgNTEpO1xcbiAgd2lkdGg6IDgwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgY29sb3I6IHJnYigyMTQsIDIxMywgMjEzKTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAudGl0bGVbZGF0YS12LTY4MjJmZGQyXSB7XG4gIGNvbG9yOiAjRkZGO1xuICBmb250LWZhbWlseTogUnViaWs7XG4gIGZvbnQtc2l6ZTogNHJlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogMS42cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbi1ib3R0b206IDIxcHg7XG59XG4uZmlyc3Qtc2VjdGlvbltkYXRhLXYtNjgyMmZkZDJdIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5maXJzdC1zZWN0aW9uLWNvbnRhaW5lcltkYXRhLXYtNjgyMmZkZDJdIHtcbiAgcGFkZGluZy10b3A6IDE1MHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDhmciA2ZnI7XG4gIGdhcDogODBweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4uZmlyc3Qtc2VjdGlvbi1jb250YWluZXJbZGF0YS12LTY4MjJmZGQyXSB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgcGFkZGluZy10b3A6IDkwcHg7XG4gICAgZ2FwOiAwcHg7XG59XG59XG4uaW1hZ2UtYm94W2RhdGEtdi02ODIyZmRkMl0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xuLmltYWdlLWJveFtkYXRhLXYtNjgyMmZkZDJdIHtcbiAgICB0b3A6IDE1cHg7XG59XG59XG4uaW1hZ2UtYm94IGltZ1tkYXRhLXYtNjgyMmZkZDJdIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZGVzY3JpcHRpb24tYm94W2RhdGEtdi02ODIyZmRkMl0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4uZGVzY3JpcHRpb24tYm94W2RhdGEtdi02ODIyZmRkMl0ge1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1LCAxNSwgMTUpO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHotaW5kZXg6IDE7XG59XG59XG4uZGVzY3JpcHRpb24tYm94X190aXRsZVtkYXRhLXYtNjgyMmZkZDJdIHtcbiAgbWFyZ2luLWJvdHRvbTogMzVweDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2Jhc2UvdHlwb2dyYXBoeS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9maXJzdC1zZWN0aW9uLnZ1ZVwiLFwid2VicGFjazovLy4vc3JjL3NlY3Rpb25zL2thdGFsb2cvZmlyc3Qtc2VjdGlvbi52dWVcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2Jhc2UvbWl4aW5zLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FDQ0o7QUNOQTtFQUNJLGdCQUFBO0FEU0o7QUNOQTtFQUlJLGtCQUFBO0VBRUEsYUFBQTtFQUNBLDhCQUFBO0VBUUEsU0FBQTtBREZKO0FFUkk7QURMSjtJQVVRLDBCQUFBO0lBQ0EsaUJBQUE7SUFDQSxRQUFBO0FET047QUFDRjtBQ0ZBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBREtKO0FFckJJO0FEYUo7SUFNUSxTQUFBO0FETU47QUFDRjtBQ0pJO0VBQ0ksV0FBQTtBRE1SO0FDREE7RUFFSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBREdKO0FFbkNJO0FENEJKO0lBT1EsbUJBQUE7SUFDQSxpQ0FBQTtJQUNBLGFBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0EsVUFBQTtBRElOO0FBQ0Y7QUNGSTtFQUNJLG1CQUFBO0FESVJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnRpdGxlIHtcXG4gICAgY29sb3I6ICNGRkY7XFxuICAgIGZvbnQtZmFtaWx5OiBSdWJpaztcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxLjZweDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjFweDtcXG59XCIsXCIudGl0bGUge1xcbiAgY29sb3I6ICNGRkY7XFxuICBmb250LWZhbWlseTogUnViaWs7XFxuICBmb250LXNpemU6IDRyZW07XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG4gIGxldHRlci1zcGFjaW5nOiAxLjZweDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBtYXJnaW4tYm90dG9tOiAyMXB4O1xcbn1cXG5cXG4uZmlyc3Qtc2VjdGlvbiB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uZmlyc3Qtc2VjdGlvbi1jb250YWluZXIge1xcbiAgcGFkZGluZy10b3A6IDE1MHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogOGZyIDZmcjtcXG4gIGdhcDogODBweDtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcXG4gIC5maXJzdC1zZWN0aW9uLWNvbnRhaW5lciB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBwYWRkaW5nLXRvcDogOTBweDtcXG4gICAgZ2FwOiAwcHg7XFxuICB9XFxufVxcblxcbi5pbWFnZS1ib3gge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAxMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XFxuICAuaW1hZ2UtYm94IHtcXG4gICAgdG9wOiAxNXB4O1xcbiAgfVxcbn1cXG4uaW1hZ2UtYm94IGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmRlc2NyaXB0aW9uLWJveCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xcbiAgLmRlc2NyaXB0aW9uLWJveCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNSwgMTUsIDE1KTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgei1pbmRleDogMTtcXG4gIH1cXG59XFxuLmRlc2NyaXB0aW9uLWJveF9fdGl0bGUge1xcbiAgbWFyZ2luLWJvdHRvbTogMzVweDtcXG59XCIsXCJcXG5AaW1wb3J0ICdAL3Njc3MvYmFzZS9taXhpbnMuc2Nzcyc7XFxuQGltcG9ydCAnQC9zY3NzL2Jhc2UvdHlwb2dyYXBoeS5zY3NzJztcXG5cXG4uZmlyc3Qtc2VjdGlvbiB7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5maXJzdC1zZWN0aW9uLWNvbnRhaW5lciB7XFxuICAgIC8vIG1heC13aWR0aDogMTYwMHB4O1xcbiAgICAvLyBtYXJnaW46IDAgYXV0bztcXG4gICAgLy8gcGFkZGluZzogMCA0MHB4O1xcbiAgICBwYWRkaW5nLXRvcDogMTUwcHg7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogOGZyIDZmcjtcXG5cXG4gICAgQGluY2x1ZGUgdGFibGUge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgICAgICBwYWRkaW5nLXRvcDogOTBweDtcXG4gICAgICAgIGdhcDogMHB4O1xcbiAgICB9XFxuXFxuICAgIGdhcDogODBweDtcXG59XFxuXFxuLmltYWdlLWJveCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAxMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgQGluY2x1ZGUgdGFibGUge1xcbiAgICAgICAgdG9wOiAxNXB4O1xcbiAgICB9XFxuXFxuICAgIGltZyB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgfVxcbn1cXG5cXG4uZGVzY3JpcHRpb24tYm94IHtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuXFxuICAgIEBpbmNsdWRlIHRhYmxlIHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUsIDE1LCAxNSk7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICB6LWluZGV4OiAxO1xcbiAgICB9XFxuXFxuICAgICZfX3RpdGxlIHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDM1cHg7XFxuICAgIH1cXG5cXG4gICAgJl9fdGV4dCB7fVxcbn1cXG5cIixcIkBtaXhpbiBwaG9uZSB7XFxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XFxuICAgICAgICBAY29udGVudDtcXG4gICAgfVxcbn1cXG5cXG5AbWl4aW4gbWluLXRhYmxlIHtcXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gICAgICAgIEBjb250ZW50O1xcbiAgICB9XFxufVxcblxcbkBtaXhpbiB0YWJsZSB7XFxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XFxuICAgICAgICBAY29udGVudDtcXG4gICAgfVxcbn1cXG5cXG5AbWl4aW4gbGFwdG9wIHtcXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTEwMHB4KSB7XFxuICAgICAgICBAY29udGVudDtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC50aXRsZVtkYXRhLXYtMDE0ZjYyZjJdIHtcbiAgY29sb3I6ICNGRkY7XG4gIGZvbnQtZmFtaWx5OiBSdWJpaztcbiAgZm9udC1zaXplOiA0cmVtO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiAxLjZweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luLWJvdHRvbTogMjFweDtcbn1cbi5zZWNvbmQtc2VjdGlvbltkYXRhLXYtMDE0ZjYyZjJdIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzODBweCAxZnI7XG4gIGdhcDogMzBweDtcbiAgcGFkZGluZy10b3A6IDU2cHg7XG4gIHBhZGRpbmctYm90dG9tOiA2OHB4O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIG1heC13aWR0aDogMTQyMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5maWx0ZXJzLWJveFtkYXRhLXYtMDE0ZjYyZjJdIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE0MTQxNDtcbiAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMTVweDtcbiAgZ2FwOiAxMHB4O1xufVxuLnByb2R1Y3RzLWJveFtkYXRhLXYtMDE0ZjYyZjJdIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIDMxMHB4KTtcbiAgZ2FwOiAyMHB4O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Njc3MvYmFzZS90eXBvZ3JhcGh5LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NlY29uZC1zZWN0aW9uLnZ1ZVwiLFwid2VicGFjazovLy4vc3JjL3NlY3Rpb25zL2thdGFsb2cvc2Vjb25kLXNlY3Rpb24udnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQ0NKO0FDTkE7RUFDSSxhQUFBO0VBQ0EsZ0NBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QURTSjtBQ05BO0VBQ0kseUJBQUE7RUFDQSwrQ0FBQTtFQUNBLGtCQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7QURRSjtBQ0xBO0VBQ0ksYUFBQTtFQUNBLDhDQUFBO0VBQ0EsU0FBQTtBRFFKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi50aXRsZSB7XFxuICAgIGNvbG9yOiAjRkZGO1xcbiAgICBmb250LWZhbWlseTogUnViaWs7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMS42cHg7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIG1hcmdpbi1ib3R0b206IDIxcHg7XFxufVwiLFwiLnRpdGxlIHtcXG4gIGNvbG9yOiAjRkZGO1xcbiAgZm9udC1mYW1pbHk6IFJ1YmlrO1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxuICBsZXR0ZXItc3BhY2luZzogMS42cHg7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgbWFyZ2luLWJvdHRvbTogMjFweDtcXG59XFxuXFxuLnNlY29uZC1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDM4MHB4IDFmcjtcXG4gIGdhcDogMzBweDtcXG4gIHBhZGRpbmctdG9wOiA1NnB4O1xcbiAgcGFkZGluZy1ib3R0b206IDY4cHg7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbiAgbWF4LXdpZHRoOiAxNDIwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLmZpbHRlcnMtYm94IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNDE0MTQ7XFxuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLnByb2R1Y3RzLWJveCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIDMxMHB4KTtcXG4gIGdhcDogMjBweDtcXG59XCIsXCJcXG5AaW1wb3J0ICdAL3Njc3MvYmFzZS9taXhpbnMuc2Nzcyc7XFxuQGltcG9ydCAnQC9zY3NzL2Jhc2UvdHlwb2dyYXBoeS5zY3NzJztcXG5cXG4uc2Vjb25kLXNlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDM4MHB4IDFmcjtcXG4gICAgZ2FwOiAzMHB4O1xcbiAgICBwYWRkaW5nLXRvcDogNTZweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDY4cHg7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcXG4gICAgbWF4LXdpZHRoOiAxNDIwcHg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4uZmlsdGVycy1ib3gge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQxNDE0O1xcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5wcm9kdWN0cy1ib3gge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgMzEwcHgpO1xcbiAgICBnYXA6IDIwcHg7XFxuXFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJpbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgYXMgX2RlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSdcbmltcG9ydCB7IHVzZUFwcFNldHRpbmdzIH0gZnJvbSAnQC9ob29rcy9BcHAvdXNlQXBwU2V0dGluZ3MnO1xuaW1wb3J0IHsgdXNlVnVleCB9IGZyb20gJ0Avc3RvcmUvdXNlVnVleCc7XG5pbXBvcnQgeyBJTWF0Y2hpbmdSdWxlLCBUeXBlTWF0Y2hpbmcgfSBmcm9tICdAL3R5cGVzL0thdGFsb2cnO1xuaW1wb3J0IHsgUmVmLCBjb21wdXRlZCwgcmVmLCB3YXRjaCB9IGZyb20gJ3Z1ZSc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBsaXN0OiBBcnJheTxPYmplY3Q+O1xuICAgIG11bHRpcGxlPzogYm9vbGVhbjtcbiAgICBsYWJlbE5hbWU/OiBzdHJpbmc7XG4gICAgdmFsdWVOYW1lPzogc3RyaW5nO1xuICAgIGNob3NlbjogQXJyYXk8T2JqZWN0PjtcbiAgICBtYXRjaGluZ1J1bGVzPzogQXJyYXk8SU1hdGNoaW5nUnVsZT5cbn1cblxuaW50ZXJmYWNlIEVtaXRzIHtcbiAgICAoZTogJ3VwZGF0ZTpjaG9zZW4tYWRkJywgaXRlbTogb2JqZWN0KTogdm9pZFxuICAgIChlOiAndXBkYXRlOmNob3Nlbi1kZWxldGUnLCBpdGVtOiBvYmplY3QpOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IC8qI19fUFVSRV9fKi9fZGVmaW5lQ29tcG9uZW50KHtcbiAgX19uYW1lOiAnQ3VzdG9tU2VsZWN0JyxcbiAgcHJvcHM6IHtcbiAgICB0aXRsZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG4gICAgbGlzdDogeyB0eXBlOiBBcnJheSwgcmVxdWlyZWQ6IHRydWUgfSxcbiAgICBtdWx0aXBsZTogeyB0eXBlOiBCb29sZWFuLCByZXF1aXJlZDogZmFsc2UgfSxcbiAgICBsYWJlbE5hbWU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogZmFsc2UgfSxcbiAgICB2YWx1ZU5hbWU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogZmFsc2UgfSxcbiAgICBjaG9zZW46IHsgdHlwZTogQXJyYXksIHJlcXVpcmVkOiB0cnVlIH0sXG4gICAgbWF0Y2hpbmdSdWxlczogeyB0eXBlOiBBcnJheSwgcmVxdWlyZWQ6IGZhbHNlIH1cbiAgfSxcbiAgZW1pdHM6IFtcInVwZGF0ZTpjaG9zZW4tYWRkXCIsIFwidXBkYXRlOmNob3Nlbi1kZWxldGVcIl0sXG4gIHNldHVwKF9fcHJvcHM6IGFueSwgeyBleHBvc2U6IF9fZXhwb3NlLCBlbWl0OiBfX2VtaXQgfSkge1xuICBfX2V4cG9zZSgpO1xuXG5jb25zdCBzdG9yZSA9IHVzZVZ1ZXgoKVxuXG5jb25zdCB7IGFwcCB9ID0gdXNlQXBwU2V0dGluZ3Moc3RvcmUpXG5cbmNvbnN0IHsgdGl0bGUsIGxpc3QsIG11bHRpcGxlLCBsYWJlbE5hbWUsIHZhbHVlTmFtZSwgY2hvc2VuLCBtYXRjaGluZ1J1bGVzIH0gPSBfX3Byb3BzXG5cbi8vIGNvbnN0IGNvbXB1dGVkTWF0Y2hlZExpc3QgPSBjb21wdXRlZCgoKSA9PiB7XG4vLyAgICAgbGV0IHJlc3VsdCA9IFtdO1xuLy8gICAgIGZvciAoY29uc3QgaXRlbSBvZiBjaG9zZW4pIHtcbi8vICAgICAgICAgaWYgKG1hdGNoZWRMaXN0LnZhbHVlLmluY2x1ZGVzKGl0ZW0pKSB7XG4vLyAgICAgICAgICAgICByZXN1bHQucHVzaChpdGVtKVxuLy8gICAgICAgICB9XG4vLyAgICAgfVxuXG4vLyAgICAgcmV0dXJuIHJlc3VsdDtcbi8vIH0pXG5cbmNvbnN0IG1hdGNoZWRMaXN0ID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGlmICghbWF0Y2hpbmdSdWxlcykge1xuICAgICAgICByZXR1cm4gbGlzdFxuICAgIH1cblxuICAgIHJldHVybiBsaXN0LmZpbHRlcihpdGVtID0+IHtcbiAgICAgICAgbGV0IG1hdGNoaW5nQ291bnQgPSAwXG4gICAgICAgIGZvciAoY29uc3QgcnVsZSBvZiBtYXRjaGluZ1J1bGVzKSB7XG4gICAgICAgICAgICBpZiAocnVsZS52YWx1ZS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgIG1hdGNoaW5nQ291bnQrK1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHJ1bGUudmFsdWUuZmluZChvYmogPT4gb2JqW3J1bGUuY29tcGFyZUtleV0gPT0gaXRlbVtydWxlLmtleV0pXG4gICAgICAgICAgICBpZiAocnVsZS50eXBlID09ICdtYXRjaGluZycgPyByZXN1bHQgOiAhcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgbWF0Y2hpbmdDb3VudCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChtYXRjaGluZ0NvdW50ID09IG1hdGNoaW5nUnVsZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pXG59KVxuXG5cbmlmIChtYXRjaGluZ1J1bGVzKSB7XG4gICAgY29uc29sZS5sb2cobWF0Y2hpbmdSdWxlcylcbiAgICB3YXRjaChtYXRjaGVkTGlzdCwgKCkgPT4ge1xuICAgICAgICBmb3IgKGNvbnN0IGNob2ljZSBvZiBjaG9zZW4pIHtcbiAgICAgICAgICAgIGlmICghbWF0Y2hlZExpc3QudmFsdWUuaW5jbHVkZXMoY2hvaWNlKSkge1xuICAgICAgICAgICAgICAgIGVtaXQoJ3VwZGF0ZTpjaG9zZW4tZGVsZXRlJywgY2hvaWNlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgeyBkZWVwOiB0cnVlIH0pXG59XG5cblxuXG5cbmxldCBpc1BhbmVsT3BlbjogUmVmPGJvb2xlYW4+ID0gcmVmKGZhbHNlKVxuXG5cbmNvbnN0IGVtaXQgPSBfX2VtaXRcblxuY29uc3QgY2hvaWNlID0gKGl0ZW06IG9iamVjdCkgPT4ge1xuICAgIGlmIChjaG9zZW4uaW5jbHVkZXMoaXRlbSkpIHtcbiAgICAgICAgY29uc29sZS5sb2coaXRlbSlcbiAgICAgICAgZW1pdCgndXBkYXRlOmNob3Nlbi1kZWxldGUnLCBpdGVtKVxuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGVtaXQoJ3VwZGF0ZTpjaG9zZW4tYWRkJywgaXRlbSlcbn1cblxuXG5jb25zdCBfX3JldHVybmVkX18gPSB7IHN0b3JlLCBhcHAsIG1hdGNoZWRMaXN0LCBnZXQgaXNQYW5lbE9wZW4oKSB7IHJldHVybiBpc1BhbmVsT3BlbiB9LCBzZXQgaXNQYW5lbE9wZW4odikgeyBpc1BhbmVsT3BlbiA9IHYgfSwgZW1pdCwgY2hvaWNlIH1cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShfX3JldHVybmVkX18sICdfX2lzU2NyaXB0U2V0dXAnLCB7IGVudW1lcmFibGU6IGZhbHNlLCB2YWx1ZTogdHJ1ZSB9KVxucmV0dXJuIF9fcmV0dXJuZWRfX1xufVxuXG59KSIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwic2VsZWN0XCI+XG4gICAgICAgIDxidXR0b24gQGNsaWNrPVwiaXNQYW5lbE9wZW4gPSAhaXNQYW5lbE9wZW5cIiBjbGFzcz1cInNlbGVjdF9fcGFuZWxcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwic2VsZWN0X190aXRsZVwiPnt7IHRpdGxlIH19PC9wPlxuICAgICAgICAgICAgPGltZyA6c3JjPVwiYXBwWydnZW5lcmFsX3NlbGVjdC1pY29uJ11cIiBhbHQ9XCJzZWxlY3QtaWNvblwiPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNlbGVjdF9fd3JhcHBlclwiIDpjbGFzcz1cInsgJ3NlbGVjdF9fd3JhcHBlci0tb3Blbic6IGlzUGFuZWxPcGVuIH1cIj5cbiAgICAgICAgICAgIDx1bCBjbGFzcz1cInNlbGVjdF9fbGlzdFwiPlxuICAgICAgICAgICAgICAgIDxsaSB2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gbWF0Y2hlZExpc3RcIiA6a2V5PVwiaW5kZXhcIiBjbGFzcz1cInNlbGVjdF9faXRlbVwiXG4gICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ3NlbGVjdF9faXRlbS0tYWN0aXZlJzogY2hvc2VuLmluY2x1ZGVzKGl0ZW0pIH1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJjaG9pY2UoaXRlbSlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7IGxhYmVsTmFtZSA/IGl0ZW1bbGFiZWxOYW1lXSA6IGl0ZW1bJ2xhYmVsJ10gfX1cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IHVzZUFwcFNldHRpbmdzIH0gZnJvbSAnQC9ob29rcy9BcHAvdXNlQXBwU2V0dGluZ3MnO1xuaW1wb3J0IHsgdXNlVnVleCB9IGZyb20gJ0Avc3RvcmUvdXNlVnVleCc7XG5pbXBvcnQgeyBJTWF0Y2hpbmdSdWxlLCBUeXBlTWF0Y2hpbmcgfSBmcm9tICdAL3R5cGVzL0thdGFsb2cnO1xuaW1wb3J0IHsgUmVmLCBjb21wdXRlZCwgcmVmLCB3YXRjaCB9IGZyb20gJ3Z1ZSc7XG5cbmNvbnN0IHN0b3JlID0gdXNlVnVleCgpXG5cbmNvbnN0IHsgYXBwIH0gPSB1c2VBcHBTZXR0aW5ncyhzdG9yZSlcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIGxpc3Q6IEFycmF5PE9iamVjdD47XG4gICAgbXVsdGlwbGU/OiBib29sZWFuO1xuICAgIGxhYmVsTmFtZT86IHN0cmluZztcbiAgICB2YWx1ZU5hbWU/OiBzdHJpbmc7XG4gICAgY2hvc2VuOiBBcnJheTxPYmplY3Q+O1xuICAgIG1hdGNoaW5nUnVsZXM/OiBBcnJheTxJTWF0Y2hpbmdSdWxlPlxufVxuXG5jb25zdCB7IHRpdGxlLCBsaXN0LCBtdWx0aXBsZSwgbGFiZWxOYW1lLCB2YWx1ZU5hbWUsIGNob3NlbiwgbWF0Y2hpbmdSdWxlcyB9ID0gZGVmaW5lUHJvcHM8UHJvcHM+KClcblxuLy8gY29uc3QgY29tcHV0ZWRNYXRjaGVkTGlzdCA9IGNvbXB1dGVkKCgpID0+IHtcbi8vICAgICBsZXQgcmVzdWx0ID0gW107XG4vLyAgICAgZm9yIChjb25zdCBpdGVtIG9mIGNob3Nlbikge1xuLy8gICAgICAgICBpZiAobWF0Y2hlZExpc3QudmFsdWUuaW5jbHVkZXMoaXRlbSkpIHtcbi8vICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGl0ZW0pXG4vLyAgICAgICAgIH1cbi8vICAgICB9XG5cbi8vICAgICByZXR1cm4gcmVzdWx0O1xuLy8gfSlcblxuY29uc3QgbWF0Y2hlZExpc3QgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgaWYgKCFtYXRjaGluZ1J1bGVzKSB7XG4gICAgICAgIHJldHVybiBsaXN0XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpc3QuZmlsdGVyKGl0ZW0gPT4ge1xuICAgICAgICBsZXQgbWF0Y2hpbmdDb3VudCA9IDBcbiAgICAgICAgZm9yIChjb25zdCBydWxlIG9mIG1hdGNoaW5nUnVsZXMpIHtcbiAgICAgICAgICAgIGlmIChydWxlLnZhbHVlLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgbWF0Y2hpbmdDb3VudCsrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gcnVsZS52YWx1ZS5maW5kKG9iaiA9PiBvYmpbcnVsZS5jb21wYXJlS2V5XSA9PSBpdGVtW3J1bGUua2V5XSlcbiAgICAgICAgICAgIGlmIChydWxlLnR5cGUgPT0gJ21hdGNoaW5nJyA/IHJlc3VsdCA6ICFyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBtYXRjaGluZ0NvdW50Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1hdGNoaW5nQ291bnQgPT0gbWF0Y2hpbmdSdWxlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSlcbn0pXG5cblxuaWYgKG1hdGNoaW5nUnVsZXMpIHtcbiAgICBjb25zb2xlLmxvZyhtYXRjaGluZ1J1bGVzKVxuICAgIHdhdGNoKG1hdGNoZWRMaXN0LCAoKSA9PiB7XG4gICAgICAgIGZvciAoY29uc3QgY2hvaWNlIG9mIGNob3Nlbikge1xuICAgICAgICAgICAgaWYgKCFtYXRjaGVkTGlzdC52YWx1ZS5pbmNsdWRlcyhjaG9pY2UpKSB7XG4gICAgICAgICAgICAgICAgZW1pdCgndXBkYXRlOmNob3Nlbi1kZWxldGUnLCBjaG9pY2UpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7IGRlZXA6IHRydWUgfSlcbn1cblxuXG5cblxubGV0IGlzUGFuZWxPcGVuOiBSZWY8Ym9vbGVhbj4gPSByZWYoZmFsc2UpXG5cblxuaW50ZXJmYWNlIEVtaXRzIHtcbiAgICAoZTogJ3VwZGF0ZTpjaG9zZW4tYWRkJywgaXRlbTogb2JqZWN0KTogdm9pZFxuICAgIChlOiAndXBkYXRlOmNob3Nlbi1kZWxldGUnLCBpdGVtOiBvYmplY3QpOiB2b2lkXG59XG5jb25zdCBlbWl0ID0gZGVmaW5lRW1pdHM8RW1pdHM+KClcblxuY29uc3QgY2hvaWNlID0gKGl0ZW06IG9iamVjdCkgPT4ge1xuICAgIGlmIChjaG9zZW4uaW5jbHVkZXMoaXRlbSkpIHtcbiAgICAgICAgY29uc29sZS5sb2coaXRlbSlcbiAgICAgICAgZW1pdCgndXBkYXRlOmNob3Nlbi1kZWxldGUnLCBpdGVtKVxuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGVtaXQoJ3VwZGF0ZTpjaG9zZW4tYWRkJywgaXRlbSlcbn1cblxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cbi5zZWxlY3Qge1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgJl9fcGFuZWwge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZzogMTZweCAxOHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEMwQzBDO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIH1cblxuICAgICZfX3RpdGxlIHtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBjb2xvcjogI0ZGRjtcbiAgICB9XG5cbiAgICAmX19saXN0IHtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGdhcDogMTBweDtcbiAgICB9XG5cbiAgICAmX19pdGVtIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxNDE0MTQ7XG5cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgY29sb3I6ICNGRkY7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgJi0tYWN0aXZlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDM0MzQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmX193cmFwcGVyIHtcbiAgICAgICAgaGVpZ2h0OiAwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcblxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgICAgIG9wYWNpdHk6IDA7XG5cbiAgICAgICAgJi0tb3BlbiB7XG5cbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG5cbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG5cbiAgICAgICAgICAgIGhlaWdodDogdW5zZXQ7XG4gICAgICAgIH1cbiAgICB9XG59XG48L3N0eWxlPiIsImltcG9ydCB7IGRlZmluZUNvbXBvbmVudCBhcyBfZGVmaW5lQ29tcG9uZW50IH0gZnJvbSAndnVlJ1xuaW1wb3J0IHsgSVByb2R1Y3QgfSBmcm9tICdAL3R5cGVzL1Byb2R1Y3QnO1xuaW1wb3J0IHsgY29tcHV0ZWQgfSBmcm9tICd2dWUnO1xuXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gICAgaW1hZ2VTcmM6IHN0cmluZztcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgZ3JvdXBlZF9wcm9kdWN0czogSVByb2R1Y3RbXTtcbiAgICBwcmljZTogc3RyaW5nIHwgbnVtYmVyO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IC8qI19fUFVSRV9fKi9fZGVmaW5lQ29tcG9uZW50KHtcbiAgX19uYW1lOiAnUHJvZHVjdCcsXG4gIHByb3BzOiB7XG4gICAgaW1hZ2VTcmM6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICAgIG5hbWU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICAgIGdyb3VwZWRfcHJvZHVjdHM6IHsgdHlwZTogQXJyYXksIHJlcXVpcmVkOiB0cnVlIH0sXG4gICAgcHJpY2U6IHsgdHlwZTogW1N0cmluZywgTnVtYmVyXSwgcmVxdWlyZWQ6IHRydWUgfVxuICB9LFxuICBzZXR1cChfX3Byb3BzOiBhbnksIHsgZXhwb3NlOiBfX2V4cG9zZSB9KSB7XG4gIF9fZXhwb3NlKCk7XG5cbmNvbnN0IHByb3BzID0gX19wcm9wc1xuXG5jb25zdCBuZWNlc3NhcnlTcGVjc1NsdWdzID0gW1xuICAgICdjcHUnLCAnZ3B1JywgJ3JhbSdcbl1cbmNvbnN0IGdyb3VwcGVkUHJvZHVjdE5hbWVzID0gY29tcHV0ZWQoKCkgPT4ge1xuXG4gICAgbGV0IGZpbHRlcmVkQXJyYXkgPSBwcm9wcy5ncm91cGVkX3Byb2R1Y3RzLmZpbHRlcihpdGVtID0+IGl0ZW0uY2F0ZWdvcmllcy5maW5kKGNhdGVnb3J5ID0+IG5lY2Vzc2FyeVNwZWNzU2x1Z3MuaW5jbHVkZXMoY2F0ZWdvcnkuc2x1ZykpKVxuXG4gICAgcmV0dXJuIGZpbHRlcmVkQXJyYXlcbn0pXG5cbmNvbnN0IHByb2R1Y3RDcHUgPSBjb21wdXRlZCgoKSA9PiBncm91cHBlZFByb2R1Y3ROYW1lcy52YWx1ZS5maW5kKGl0ZW0gPT4gaXRlbS5jYXRlZ29yaWVzLmZpbmQoY2F0ZWdvcnkgPT4gY2F0ZWdvcnkuc2x1ZyA9PSAnY3B1JykpKVxuXG5jb25zdCBwcm9kdWN0R3B1ID0gY29tcHV0ZWQoKCkgPT4gZ3JvdXBwZWRQcm9kdWN0TmFtZXMudmFsdWUuZmluZChpdGVtID0+IGl0ZW0uY2F0ZWdvcmllcy5maW5kKGNhdGVnb3J5ID0+IGNhdGVnb3J5LnNsdWcgPT0gJ2dwdScpKSlcblxuY29uc3QgcHJvZHVjdFJhbSA9IGNvbXB1dGVkKCgpID0+IGdyb3VwcGVkUHJvZHVjdE5hbWVzLnZhbHVlLmZpbmQoaXRlbSA9PiBpdGVtLmNhdGVnb3JpZXMuZmluZChjYXRlZ29yeSA9PiBjYXRlZ29yeS5zbHVnID09ICdyYW0nKSkpXG5cblxuY29uc3QgX19yZXR1cm5lZF9fID0geyBwcm9wcywgbmVjZXNzYXJ5U3BlY3NTbHVncywgZ3JvdXBwZWRQcm9kdWN0TmFtZXMsIHByb2R1Y3RDcHUsIHByb2R1Y3RHcHUsIHByb2R1Y3RSYW0gfVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KF9fcmV0dXJuZWRfXywgJ19faXNTY3JpcHRTZXR1cCcsIHsgZW51bWVyYWJsZTogZmFsc2UsIHZhbHVlOiB0cnVlIH0pXG5yZXR1cm4gX19yZXR1cm5lZF9fXG59XG5cbn0pIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0XCI+XG4gICAgICAgIDxpbWcgY2xhc3M9XCJwcm9kdWN0X19pbWFnZVwiIDpzcmM9XCJpbWFnZVNyY1wiIDphbHQ9XCJuYW1lXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0LWRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICA8cCBjbGFzcz1cInByb2R1Y3QtZGVzY3JpcHRpb25fX25hbWVcIj57eyBuYW1lIH19PC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3QtZGVzY3JpcHRpb24tc3BlY3NcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3BlY1wiPlxuICAgICAgICAgICAgICAgICAgICA8cD57eyBwcm9kdWN0Q3B1ID8gcHJvZHVjdENwdS5jZnMuc2hvcnRseV9uYW1lIDogJ9C+0YLRgdGD0YLRgdCy0YPQtdGCJyB9fTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3BlY1wiPlxuICAgICAgICAgICAgICAgICAgICA8cD57eyBwcm9kdWN0R3B1ID8gcHJvZHVjdEdwdS5jZnMuc2hvcnRseV9uYW1lIDogJ9C+0YLRgdGD0YHRgtCy0YPQtdGCJyB9fTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3BlY1wiPlxuICAgICAgICAgICAgICAgICAgICA8cD57eyBwcm9kdWN0UmFtID8gcHJvZHVjdFJhbS5jZnMuc2hvcnRseV9uYW1lIDogJ9C+0YLRgdGD0YHRgtCy0YPQtdGCJyB9fTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHAgY2xhc3M9XCJwcm9kdWN0X19wcmljZVwiPnt7IHByaWNlIH19IFJVQjwvcD5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBJUHJvZHVjdCB9IGZyb20gJ0AvdHlwZXMvUHJvZHVjdCc7XG5pbXBvcnQgeyBjb21wdXRlZCB9IGZyb20gJ3Z1ZSc7XG5cblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgICBpbWFnZVNyYzogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBncm91cGVkX3Byb2R1Y3RzOiBJUHJvZHVjdFtdO1xuICAgIHByaWNlOiBzdHJpbmcgfCBudW1iZXI7XG59XG5cbmNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHM8UHJvcHM+KClcblxuY29uc3QgbmVjZXNzYXJ5U3BlY3NTbHVncyA9IFtcbiAgICAnY3B1JywgJ2dwdScsICdyYW0nXG5dXG5jb25zdCBncm91cHBlZFByb2R1Y3ROYW1lcyA9IGNvbXB1dGVkKCgpID0+IHtcblxuICAgIGxldCBmaWx0ZXJlZEFycmF5ID0gcHJvcHMuZ3JvdXBlZF9wcm9kdWN0cy5maWx0ZXIoaXRlbSA9PiBpdGVtLmNhdGVnb3JpZXMuZmluZChjYXRlZ29yeSA9PiBuZWNlc3NhcnlTcGVjc1NsdWdzLmluY2x1ZGVzKGNhdGVnb3J5LnNsdWcpKSlcblxuICAgIHJldHVybiBmaWx0ZXJlZEFycmF5XG59KVxuXG5jb25zdCBwcm9kdWN0Q3B1ID0gY29tcHV0ZWQoKCkgPT4gZ3JvdXBwZWRQcm9kdWN0TmFtZXMudmFsdWUuZmluZChpdGVtID0+IGl0ZW0uY2F0ZWdvcmllcy5maW5kKGNhdGVnb3J5ID0+IGNhdGVnb3J5LnNsdWcgPT0gJ2NwdScpKSlcblxuY29uc3QgcHJvZHVjdEdwdSA9IGNvbXB1dGVkKCgpID0+IGdyb3VwcGVkUHJvZHVjdE5hbWVzLnZhbHVlLmZpbmQoaXRlbSA9PiBpdGVtLmNhdGVnb3JpZXMuZmluZChjYXRlZ29yeSA9PiBjYXRlZ29yeS5zbHVnID09ICdncHUnKSkpXG5cbmNvbnN0IHByb2R1Y3RSYW0gPSBjb21wdXRlZCgoKSA9PiBncm91cHBlZFByb2R1Y3ROYW1lcy52YWx1ZS5maW5kKGl0ZW0gPT4gaXRlbS5jYXRlZ29yaWVzLmZpbmQoY2F0ZWdvcnkgPT4gY2F0ZWdvcnkuc2x1ZyA9PSAncmFtJykpKVxuXG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxuLnByb2R1Y3Qge1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyNXB4O1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE0MTQxNDtcblxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgZ2FwOiAyMHB4O1xuXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgMTBweCAjZmZmZmZmO1xuICAgIH1cblxuICAgICZfX2ltYWdlIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICB9XG5cbiAgICAmX19wcmljZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMHB4O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIH1cbn1cblxuLnByb2R1Y3QtZGVzY3JpcHRpb24ge1xuXG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgJl9fbmFtZSB7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG59XG5cbi5wcm9kdWN0LWRlc2NyaXB0aW9uLXNwZWNzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBnYXA6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4uc3BlYyB7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCByZ2IoNTEsIDUxLCA1MSk7XG4gICAgd2lkdGg6IDgwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcblxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgY29sb3I6IHJnYigyMTQsIDIxMywgMjEzKTtcbn1cbjwvc3R5bGU+IiwiaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IGFzIF9kZWZpbmVDb21wb25lbnQgfSBmcm9tICd2dWUnXG5pbXBvcnQgeyB1c2VMb2FkIH0gZnJvbSAnQC9ob29rcy9BcHAvdXNlTG9hZCc7XG5pbXBvcnQgeyB1c2VQYWdlU2V0dGluZ3MgfSBmcm9tICdAL2hvb2tzL0FwcC91c2VQYWdlU2V0dGluZ3MnO1xuaW1wb3J0IHsgdXNlVnVleCB9IGZyb20gJ0Avc3RvcmUvdXNlVnVleCc7XG5pbXBvcnQgeyBJRmlyc3RTZWN0aW9uU2V0dGluZ3MgfSBmcm9tICdAL3R5cGVzL0thdGFsb2cnO1xuaW1wb3J0IHsgUmVmLCBjb21wdXRlZCwgb25VcGRhdGVkLCByZWYsIHdhdGNoIH0gZnJvbSAndnVlJztcbmltcG9ydCB7IHVzZVJvdXRlIH0gZnJvbSAndnVlLXJvdXRlcic7XG5pbXBvcnQgaW1hZ2VzTG9hZGVkIGZyb20gJ2ltYWdlc2xvYWRlZCc7XG5cblxuZXhwb3J0IGRlZmF1bHQgLyojX19QVVJFX18qL19kZWZpbmVDb21wb25lbnQoe1xuICBfX25hbWU6ICdmaXJzdC1zZWN0aW9uJyxcbiAgZW1pdHM6IFtcImxvYWRcIl0sXG4gIHNldHVwKF9fcHJvcHMsIHsgZXhwb3NlOiBfX2V4cG9zZSwgZW1pdDogX19lbWl0IH0pIHtcbiAgX19leHBvc2UoKTtcblxuXG5jb25zdCBlbWl0ID0gX19lbWl0XG5cbmNvbnN0IHJvdXRlID0gdXNlUm91dGUoKTtcblxuY29uc3Qgc3RvcmUgPSB1c2VWdWV4KClcblxubGV0IHsgcGFnZSB9ID0gdXNlUGFnZVNldHRpbmdzKHN0b3JlKVxuXG5jb25zdCBzZXR0aW5ncyA9IHJlZihwYWdlLnZhbHVlWydmaXJzdC1zZWN0aW9uLXNldHRpbmdzJ10pIGFzIFJlZjxJRmlyc3RTZWN0aW9uU2V0dGluZ3NbXT5cblxuY29uc3QgY3VycmVudFNldHRpbmdzID0gY29tcHV0ZWQoKCkgPT4gc2V0dGluZ3MudmFsdWUuZmluZChpdGVtID0+IGl0ZW0uY2F0ZWdvcnlbMF0uc2x1ZyA9PSByb3V0ZS5wYXJhbXMuY2F0ZWdvcnkpKVxuXG5cblxuXG4vLyByZWZzXG5jb25zdCBib3g6IFJlZjxIVE1MRWxlbWVudCB8IG51bGw+ID0gcmVmKG51bGwpXG5jb25zdCBpbWFnZTogUmVmPEhUTUxFbGVtZW50IHwgbnVsbD4gPSByZWYobnVsbClcblxubGV0IHsgbG9hZGVyIH0gPSB1c2VMb2FkKDEpXG5cblxuXG5sb2FkZXIudmFsdWUub25BbGxpc0xvYWRlZCA9ICgpID0+IHtcbiAgICBlbWl0KCdsb2FkJylcbiAgICBsb2FkZXIudmFsdWUucmVzdGFydCgpXG59XG5cbmNvbnN0IHVwZGF0ZUltYWdlcyA9ICgpID0+IHtcbiAgICBpbWFnZXNMb2FkZWQoYm94LnZhbHVlLCAoKSA9PiB7XG4gICAgICAgIGxvYWRlci52YWx1ZS5sb2FkKClcbiAgICB9KVxufVxuXG5cbmNvbnN0IF9fcmV0dXJuZWRfXyA9IHsgZW1pdCwgcm91dGUsIHN0b3JlLCBnZXQgcGFnZSgpIHsgcmV0dXJuIHBhZ2UgfSwgc2V0IHBhZ2UodikgeyBwYWdlID0gdiB9LCBzZXR0aW5ncywgY3VycmVudFNldHRpbmdzLCBib3gsIGltYWdlLCBnZXQgbG9hZGVyKCkgeyByZXR1cm4gbG9hZGVyIH0sIHNldCBsb2FkZXIodikgeyBsb2FkZXIgPSB2IH0sIHVwZGF0ZUltYWdlcyB9XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoX19yZXR1cm5lZF9fLCAnX19pc1NjcmlwdFNldHVwJywgeyBlbnVtZXJhYmxlOiBmYWxzZSwgdmFsdWU6IHRydWUgfSlcbnJldHVybiBfX3JldHVybmVkX19cbn1cblxufSkiLCI8dGVtcGxhdGU+XG4gICAgPGRpdiByZWY9XCJib3hcIiBjbGFzcz1cImZpcnN0LXNlY3Rpb25cIlxuICAgICAgICA6c3R5bGU9XCJ7IGJhY2tncm91bmQ6IGB1cmwoJyR7Y3VycmVudFNldHRpbmdzLmJhY2tncm91bmR9JyksIG5vLXJlcGVhdCBjZW50ZXIgLyBjb3ZlcmAgfVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmlyc3Qtc2VjdGlvbi1jb250YWluZXIgY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW1hZ2UtYm94XCI+XG4gICAgICAgICAgICAgICAgPGltZyBAbG9hZD1cInVwZGF0ZUltYWdlc1wiIHJlZj1cImltYWdlXCIgOnNyYz1cImN1cnJlbnRTZXR0aW5ncy5pbWFnZVwiIDphbHQ9XCJjdXJyZW50U2V0dGluZ3MudGl0bGVcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlc2NyaXB0aW9uLWJveFwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZGVzY3JpcHRpb24tYm94X190aXRsZSB0aXRsZVwiPnt7IGN1cnJlbnRTZXR0aW5ncy50aXRsZSB9fTwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImRlc2NyaXB0aW9uLWJveF9fdGV4dFwiPnt7IGN1cnJlbnRTZXR0aW5ncy50ZXh0IH19PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cblxuaW1wb3J0IHsgdXNlTG9hZCB9IGZyb20gJ0AvaG9va3MvQXBwL3VzZUxvYWQnO1xuaW1wb3J0IHsgdXNlUGFnZVNldHRpbmdzIH0gZnJvbSAnQC9ob29rcy9BcHAvdXNlUGFnZVNldHRpbmdzJztcbmltcG9ydCB7IHVzZVZ1ZXggfSBmcm9tICdAL3N0b3JlL3VzZVZ1ZXgnO1xuaW1wb3J0IHsgSUZpcnN0U2VjdGlvblNldHRpbmdzIH0gZnJvbSAnQC90eXBlcy9LYXRhbG9nJztcbmltcG9ydCB7IFJlZiwgY29tcHV0ZWQsIG9uVXBkYXRlZCwgcmVmLCB3YXRjaCB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgeyB1c2VSb3V0ZSB9IGZyb20gJ3Z1ZS1yb3V0ZXInO1xuaW1wb3J0IGltYWdlc0xvYWRlZCBmcm9tICdpbWFnZXNsb2FkZWQnO1xuXG5jb25zdCBlbWl0ID0gZGVmaW5lRW1pdHM8e1xuICAgIChlOiAnbG9hZCcpOiB2b2lkXG59PigpXG5cbmNvbnN0IHJvdXRlID0gdXNlUm91dGUoKTtcblxuY29uc3Qgc3RvcmUgPSB1c2VWdWV4KClcblxubGV0IHsgcGFnZSB9ID0gdXNlUGFnZVNldHRpbmdzKHN0b3JlKVxuXG5jb25zdCBzZXR0aW5ncyA9IHJlZihwYWdlLnZhbHVlWydmaXJzdC1zZWN0aW9uLXNldHRpbmdzJ10pIGFzIFJlZjxJRmlyc3RTZWN0aW9uU2V0dGluZ3NbXT5cblxuY29uc3QgY3VycmVudFNldHRpbmdzID0gY29tcHV0ZWQoKCkgPT4gc2V0dGluZ3MudmFsdWUuZmluZChpdGVtID0+IGl0ZW0uY2F0ZWdvcnlbMF0uc2x1ZyA9PSByb3V0ZS5wYXJhbXMuY2F0ZWdvcnkpKVxuXG5cblxuXG4vLyByZWZzXG5jb25zdCBib3g6IFJlZjxIVE1MRWxlbWVudCB8IG51bGw+ID0gcmVmKG51bGwpXG5jb25zdCBpbWFnZTogUmVmPEhUTUxFbGVtZW50IHwgbnVsbD4gPSByZWYobnVsbClcblxubGV0IHsgbG9hZGVyIH0gPSB1c2VMb2FkKDEpXG5cblxuXG5sb2FkZXIudmFsdWUub25BbGxpc0xvYWRlZCA9ICgpID0+IHtcbiAgICBlbWl0KCdsb2FkJylcbiAgICBsb2FkZXIudmFsdWUucmVzdGFydCgpXG59XG5cbmNvbnN0IHVwZGF0ZUltYWdlcyA9ICgpID0+IHtcbiAgICBpbWFnZXNMb2FkZWQoYm94LnZhbHVlLCAoKSA9PiB7XG4gICAgICAgIGxvYWRlci52YWx1ZS5sb2FkKClcbiAgICB9KVxufVxuXG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxuQGltcG9ydCAnQC9zY3NzL2Jhc2UvbWl4aW5zLnNjc3MnO1xuQGltcG9ydCAnQC9zY3NzL2Jhc2UvdHlwb2dyYXBoeS5zY3NzJztcblxuLmZpcnN0LXNlY3Rpb24ge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5maXJzdC1zZWN0aW9uLWNvbnRhaW5lciB7XG4gICAgLy8gbWF4LXdpZHRoOiAxNjAwcHg7XG4gICAgLy8gbWFyZ2luOiAwIGF1dG87XG4gICAgLy8gcGFkZGluZzogMCA0MHB4O1xuICAgIHBhZGRpbmctdG9wOiAxNTBweDtcblxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA4ZnIgNmZyO1xuXG4gICAgQGluY2x1ZGUgdGFibGUge1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICAgICAgcGFkZGluZy10b3A6IDkwcHg7XG4gICAgICAgIGdhcDogMHB4O1xuICAgIH1cblxuICAgIGdhcDogODBweDtcbn1cblxuLmltYWdlLWJveCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMTBweDtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIEBpbmNsdWRlIHRhYmxlIHtcbiAgICAgICAgdG9wOiAxNXB4O1xuICAgIH1cblxuICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgfVxufVxuXG4uZGVzY3JpcHRpb24tYm94IHtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblxuICAgIEBpbmNsdWRlIHRhYmxlIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1LCAxNSwgMTUpO1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgIH1cblxuICAgICZfX3RpdGxlIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzVweDtcbiAgICB9XG5cbiAgICAmX190ZXh0IHt9XG59XG48L3N0eWxlPiIsImltcG9ydCB7IGRlZmluZUNvbXBvbmVudCBhcyBfZGVmaW5lQ29tcG9uZW50IH0gZnJvbSAndnVlJ1xuaW1wb3J0IFByb2R1Y3QgZnJvbSAnQC9jb21wb25lbnRzL1Byb2R1Y3QudnVlJztcbmltcG9ydCBXT08gZnJvbSAnQC9heGlvc1dvb2NvbWVyY2UnXG5pbXBvcnQgeyBSZWYsIG9uQmVmb3JlTW91bnQsIG9uTW91bnRlZCwgcmVmIH0gZnJvbSAndnVlJztcbmltcG9ydCB7IElHcm91cHBlZFByb2R1Y3QgfSBmcm9tICdAL3R5cGVzL1Byb2R1Y3QnO1xuaW1wb3J0IHsgdXNlUm91dGUgfSBmcm9tICd2dWUtcm91dGVyJztcbmltcG9ydCBDdXN0b21TZWxlY3QgZnJvbSAnQC9jb21wb25lbnRzL0N1c3RvbVNlbGVjdC52dWUnO1xuaW1wb3J0IHsgZ2V0UHJvZHVjdHMgfSBmcm9tICdAL2FwaS9LYXRhbG9nL2dldFByb2R1Y3RzJztcblxuXG5leHBvcnQgZGVmYXVsdCAvKiNfX1BVUkVfXyovX2RlZmluZUNvbXBvbmVudCh7XG4gIF9fbmFtZTogJ3NlY29uZC1zZWN0aW9uJyxcbiAgc2V0dXAoX19wcm9wcywgeyBleHBvc2U6IF9fZXhwb3NlIH0pIHtcbiAgX19leHBvc2UoKTtcblxuY29uc3QgZWxpbWluYXRlID0gKGFycmF5OiBBcnJheTxhbnk+LCAkZXZlbnQpID0+IHtcbiAgICBhcnJheS5zcGxpY2UoYXJyYXkuaW5kZXhPZigkZXZlbnQpLCAxKVxufVxuXG5cbmNvbnN0IGNob3NlbkZpbHRlcnMgPSByZWYoe1xuICAgIHByb2R1Y2VyX2NwdTogW10sXG4gICAgbW9kZWxfY3B1OiBbXSxcbn0pXG5cbmNvbnN0IGZpbHRlcnMgPSByZWYoe1xuICAgIHByb2R1Y2VyX2NwdTogW1xuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnQU1EJyxcbiAgICAgICAgICAgIGxhYmVsOiAn0LrQvtC80L/QsNC90LjRjyBBTUQnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdJTlRFTCcsXG4gICAgICAgICAgICBsYWJlbDogJ9C60L7QvNC/0LDQvdC40Y8gSU5URUwnXG4gICAgICAgIH0sXG4gICAgXSxcbiAgICBtb2RlbF9jcHU6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2k1IDExNTVHNycsXG4gICAgICAgICAgICBsYWJlbDogJ2k1IDExNTVHNycsXG4gICAgICAgICAgICBwcm9kdWNlcjogJ0lOVEVMJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2k3IDExNjVHNycsXG4gICAgICAgICAgICBsYWJlbDogJ2k3IDExNjVHNycsXG4gICAgICAgICAgICBwcm9kdWNlcjogJ0lOVEVMJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ3J5emVuIDUgNTYwMEcnLFxuICAgICAgICAgICAgbGFiZWw6ICdyeXplbiA1IDU2MDBHJyxcbiAgICAgICAgICAgIHByb2R1Y2VyOiAnQU1EJyxcbiAgICAgICAgfVxuICAgIF0sXG59KVxuY29uc3Qgcm91dGUgPSB1c2VSb3V0ZSgpO1xuXG5sZXQgaXNEYXRhTG9hZGVkOiBSZWY8Ym9vbGVhbj4gPSByZWYoZmFsc2UpXG5cbmxldCBwcm9kdWN0czogUmVmPEFycmF5PElHcm91cHBlZFByb2R1Y3Q+PiA9IHJlZihbXSlcbm9uQmVmb3JlTW91bnQoYXN5bmMgKCkgPT4ge1xuICAgIHByb2R1Y3RzLnZhbHVlID0gYXdhaXQgZ2V0UHJvZHVjdHMoNCwgMTYpXG5cbiAgICBjb25zb2xlLmxvZyhwcm9kdWN0cy52YWx1ZSlcblxuICAgIGlzRGF0YUxvYWRlZC52YWx1ZSA9IHRydWVcbn0pXG5cblxuY29uc3QgX19yZXR1cm5lZF9fID0geyBlbGltaW5hdGUsIGNob3NlbkZpbHRlcnMsIGZpbHRlcnMsIHJvdXRlLCBnZXQgaXNEYXRhTG9hZGVkKCkgeyByZXR1cm4gaXNEYXRhTG9hZGVkIH0sIHNldCBpc0RhdGFMb2FkZWQodikgeyBpc0RhdGFMb2FkZWQgPSB2IH0sIGdldCBwcm9kdWN0cygpIHsgcmV0dXJuIHByb2R1Y3RzIH0sIHNldCBwcm9kdWN0cyh2KSB7IHByb2R1Y3RzID0gdiB9LCBQcm9kdWN0LCBDdXN0b21TZWxlY3QgfVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KF9fcmV0dXJuZWRfXywgJ19faXNTY3JpcHRTZXR1cCcsIHsgZW51bWVyYWJsZTogZmFsc2UsIHZhbHVlOiB0cnVlIH0pXG5yZXR1cm4gX19yZXR1cm5lZF9fXG59XG5cbn0pIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJzZWNvbmQtc2VjdGlvblwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsdGVycy1ib3hcIj5cbiAgICAgICAgICAgIDxDdXN0b21TZWxlY3QgQHVwZGF0ZTpjaG9zZW4tZGVsZXRlPVwiZWxpbWluYXRlKGNob3NlbkZpbHRlcnMucHJvZHVjZXJfY3B1LCAkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICBAdXBkYXRlOmNob3Nlbi1hZGQ9XCJjaG9zZW5GaWx0ZXJzLnByb2R1Y2VyX2NwdS5wdXNoKCRldmVudClcIiA6dGl0bGU9XCIn0J/RgNC+0LjQt9Cy0L7QtNC40YLQtdC70Ywg0L/RgNC+0YbQtdGB0YHQvtGA0LAnXCJcbiAgICAgICAgICAgICAgICA6bGlzdD1cImZpbHRlcnMucHJvZHVjZXJfY3B1XCIgOmNob3Nlbj1cImNob3NlbkZpbHRlcnMucHJvZHVjZXJfY3B1XCIgLz5cbiAgICAgICAgICAgIDxDdXN0b21TZWxlY3QgQHVwZGF0ZTpjaG9zZW4tZGVsZXRlPVwiZWxpbWluYXRlKGNob3NlbkZpbHRlcnMubW9kZWxfY3B1LCAkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICBAdXBkYXRlOmNob3Nlbi1hZGQ9XCJjaG9zZW5GaWx0ZXJzLm1vZGVsX2NwdS5wdXNoKCRldmVudClcIiA6dGl0bGU9XCIn0JzQvtC00LXQu9GMINC/0YDQvtGG0LXRgdGB0L7RgNCwJ1wiXG4gICAgICAgICAgICAgICAgOm1hdGNoaW5nLXJ1bGVzPVwiW3sga2V5OiAncHJvZHVjZXInLCB0eXBlOiAnbWF0Y2hpbmcnLCB2YWx1ZTogY2hvc2VuRmlsdGVycy5wcm9kdWNlcl9jcHUsIGNvbXBhcmVLZXk6ICduYW1lJyB9XVwiXG4gICAgICAgICAgICAgICAgOmxpc3Q9XCJmaWx0ZXJzLm1vZGVsX2NwdVwiIDpjaG9zZW49XCJjaG9zZW5GaWx0ZXJzLm1vZGVsX2NwdVwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdHMtYm94XCI+XG4gICAgICAgICAgICA8UHJvZHVjdCB2LWlmPVwiaXNEYXRhTG9hZGVkXCIgdi1mb3I9XCJwcm9kdWN0IGluIHByb2R1Y3RzXCIgOmtleT1cInByb2R1Y3QuaWRcIiA6aW1hZ2Utc3JjPVwicHJvZHVjdC5pbWFnZXNbMF0uc3JjXCJcbiAgICAgICAgICAgICAgICA6bmFtZT1cInByb2R1Y3QubmFtZVwiIDpncm91cGVkX3Byb2R1Y3RzPVwicHJvZHVjdC5ncm91cGVkX3Byb2R1Y3RzXCIgOnByaWNlPVwicHJvZHVjdC5wcmljZVwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCBQcm9kdWN0IGZyb20gJ0AvY29tcG9uZW50cy9Qcm9kdWN0LnZ1ZSc7XG5pbXBvcnQgV09PIGZyb20gJ0AvYXhpb3NXb29jb21lcmNlJ1xuaW1wb3J0IHsgUmVmLCBvbkJlZm9yZU1vdW50LCBvbk1vdW50ZWQsIHJlZiB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgeyBJR3JvdXBwZWRQcm9kdWN0IH0gZnJvbSAnQC90eXBlcy9Qcm9kdWN0JztcbmltcG9ydCB7IHVzZVJvdXRlIH0gZnJvbSAndnVlLXJvdXRlcic7XG5pbXBvcnQgQ3VzdG9tU2VsZWN0IGZyb20gJ0AvY29tcG9uZW50cy9DdXN0b21TZWxlY3QudnVlJztcbmltcG9ydCB7IGdldFByb2R1Y3RzIH0gZnJvbSAnQC9hcGkvS2F0YWxvZy9nZXRQcm9kdWN0cyc7XG5cbmNvbnN0IGVsaW1pbmF0ZSA9IChhcnJheTogQXJyYXk8YW55PiwgJGV2ZW50KSA9PiB7XG4gICAgYXJyYXkuc3BsaWNlKGFycmF5LmluZGV4T2YoJGV2ZW50KSwgMSlcbn1cblxuXG5jb25zdCBjaG9zZW5GaWx0ZXJzID0gcmVmKHtcbiAgICBwcm9kdWNlcl9jcHU6IFtdLFxuICAgIG1vZGVsX2NwdTogW10sXG59KVxuXG5jb25zdCBmaWx0ZXJzID0gcmVmKHtcbiAgICBwcm9kdWNlcl9jcHU6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ0FNRCcsXG4gICAgICAgICAgICBsYWJlbDogJ9C60L7QvNC/0LDQvdC40Y8gQU1EJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnSU5URUwnLFxuICAgICAgICAgICAgbGFiZWw6ICfQutC+0LzQv9Cw0L3QuNGPIElOVEVMJ1xuICAgICAgICB9LFxuICAgIF0sXG4gICAgbW9kZWxfY3B1OiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdpNSAxMTU1RzcnLFxuICAgICAgICAgICAgbGFiZWw6ICdpNSAxMTU1RzcnLFxuICAgICAgICAgICAgcHJvZHVjZXI6ICdJTlRFTCcsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdpNyAxMTY1RzcnLFxuICAgICAgICAgICAgbGFiZWw6ICdpNyAxMTY1RzcnLFxuICAgICAgICAgICAgcHJvZHVjZXI6ICdJTlRFTCcsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdyeXplbiA1IDU2MDBHJyxcbiAgICAgICAgICAgIGxhYmVsOiAncnl6ZW4gNSA1NjAwRycsXG4gICAgICAgICAgICBwcm9kdWNlcjogJ0FNRCcsXG4gICAgICAgIH1cbiAgICBdLFxufSlcbmNvbnN0IHJvdXRlID0gdXNlUm91dGUoKTtcblxubGV0IGlzRGF0YUxvYWRlZDogUmVmPGJvb2xlYW4+ID0gcmVmKGZhbHNlKVxuXG5sZXQgcHJvZHVjdHM6IFJlZjxBcnJheTxJR3JvdXBwZWRQcm9kdWN0Pj4gPSByZWYoW10pXG5vbkJlZm9yZU1vdW50KGFzeW5jICgpID0+IHtcbiAgICBwcm9kdWN0cy52YWx1ZSA9IGF3YWl0IGdldFByb2R1Y3RzKDQsIDE2KVxuXG4gICAgY29uc29sZS5sb2cocHJvZHVjdHMudmFsdWUpXG5cbiAgICBpc0RhdGFMb2FkZWQudmFsdWUgPSB0cnVlXG59KVxuXG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxuQGltcG9ydCAnQC9zY3NzL2Jhc2UvbWl4aW5zLnNjc3MnO1xuQGltcG9ydCAnQC9zY3NzL2Jhc2UvdHlwb2dyYXBoeS5zY3NzJztcblxuLnNlY29uZC1zZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzgwcHggMWZyO1xuICAgIGdhcDogMzBweDtcbiAgICBwYWRkaW5nLXRvcDogNTZweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNjhweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICBtYXgtd2lkdGg6IDE0MjBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmZpbHRlcnMtYm94IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQxNDE0O1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGdhcDogMTBweDtcbn1cblxuLnByb2R1Y3RzLWJveCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgMzEwcHgpO1xuICAgIGdhcDogMjBweDtcblxufVxuPC9zdHlsZT4iLCJpbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgYXMgX2RlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSdcbmltcG9ydCB7IGdldFBhZ2VTZXR0aW5ncyB9IGZyb20gJ0AvYXBpL0FwcC9nZXRQYWdlU2V0dGluZ3MnO1xuaW1wb3J0IHsgdXNlTG9hZCB9IGZyb20gJ0AvaG9va3MvQXBwL3VzZUxvYWQnO1xuaW1wb3J0IHsgdXNlUGFnZVNldHRpbmdzIH0gZnJvbSAnQC9ob29rcy9BcHAvdXNlUGFnZVNldHRpbmdzJztcbmltcG9ydCBGaXJzdFNlY3Rpb24gZnJvbSAnQC9zZWN0aW9ucy9rYXRhbG9nL2ZpcnN0LXNlY3Rpb24udnVlJztcbmltcG9ydCBTZWNvbmRTZWN0aW9uIGZyb20gJ0Avc2VjdGlvbnMva2F0YWxvZy9zZWNvbmQtc2VjdGlvbi52dWUnO1xuaW1wb3J0IHsgdXNlVnVleCB9IGZyb20gJ0Avc3RvcmUvdXNlVnVleCc7XG5pbXBvcnQgeyBSZWYsIG9uTW91bnRlZCwgcmVmIH0gZnJvbSAndnVlJztcblxuZGVjbGFyZSB2YXIgcHJlbG9hZGVyQ2xvc2U6ICgpID0+IHZvaWQ7XG5cblxuZXhwb3J0IGRlZmF1bHQgLyojX19QVVJFX18qL19kZWZpbmVDb21wb25lbnQoe1xuICBfX25hbWU6ICdrYXRhbG9nJyxcbiAgc2V0dXAoX19wcm9wcywgeyBleHBvc2U6IF9fZXhwb3NlIH0pIHtcbiAgX19leHBvc2UoKTtcblxubGV0IGlzUGFnZURhdGFMb2FkZWQ6IFJlZjxib29sZWFuPiA9IHJlZihmYWxzZSlcblxuY29uc3Qgc3RvcmUgPSB1c2VWdWV4KClcblxubGV0IHtsb2FkZXJ9ID0gdXNlTG9hZCgxKVxuXG5sb2FkZXIudmFsdWUub25BbGxpc0xvYWRlZCA9ICgpID0+IHtcbiAgICBwcmVsb2FkZXJDbG9zZSgpO1xuICAgIGxvYWRlci52YWx1ZS5yZXN0YXJ0KClcbn1cblxubGV0IHsgcGFnZSB9ID0gdXNlUGFnZVNldHRpbmdzKHN0b3JlKVxuXG5vbk1vdW50ZWQoYXN5bmMgKCkgPT4ge1xuICAgIHBhZ2UudmFsdWUgPSBhd2FpdCBnZXRQYWdlU2V0dGluZ3MoMTkwKSAvLyBrYXRhbG9nIHBvc3QgaWRcblxuICAgIGlzUGFnZURhdGFMb2FkZWQudmFsdWUgPSB0cnVlXG5cbiAgICAvLyBwcmVsb2FkZXJDbG9zZSgpO1xufSlcblxuXG5jb25zdCBfX3JldHVybmVkX18gPSB7IGdldCBpc1BhZ2VEYXRhTG9hZGVkKCkgeyByZXR1cm4gaXNQYWdlRGF0YUxvYWRlZCB9LCBzZXQgaXNQYWdlRGF0YUxvYWRlZCh2KSB7IGlzUGFnZURhdGFMb2FkZWQgPSB2IH0sIHN0b3JlLCBnZXQgbG9hZGVyKCkgeyByZXR1cm4gbG9hZGVyIH0sIHNldCBsb2FkZXIodikgeyBsb2FkZXIgPSB2IH0sIGdldCBwYWdlKCkgeyByZXR1cm4gcGFnZSB9LCBzZXQgcGFnZSh2KSB7IHBhZ2UgPSB2IH0sIEZpcnN0U2VjdGlvbiwgU2Vjb25kU2VjdGlvbiB9XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoX19yZXR1cm5lZF9fLCAnX19pc1NjcmlwdFNldHVwJywgeyBlbnVtZXJhYmxlOiBmYWxzZSwgdmFsdWU6IHRydWUgfSlcbnJldHVybiBfX3JldHVybmVkX19cbn1cblxufSkiLCJcbjx0ZW1wbGF0ZT5cbiAgICA8bWFpbiB2LWlmPVwiaXNQYWdlRGF0YUxvYWRlZFwiPlxuICAgICAgICA8Rmlyc3RTZWN0aW9uIDprZXk9XCIxXCIgQGxvYWQ9XCJsb2FkZXIubG9hZCgpXCIgLz5cbiAgICAgICAgPFNlY29uZFNlY3Rpb24gOmtleT1cIjJcIiAvPlxuICAgIDwvbWFpbj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBnZXRQYWdlU2V0dGluZ3MgfSBmcm9tICdAL2FwaS9BcHAvZ2V0UGFnZVNldHRpbmdzJztcbmltcG9ydCB7IHVzZUxvYWQgfSBmcm9tICdAL2hvb2tzL0FwcC91c2VMb2FkJztcbmltcG9ydCB7IHVzZVBhZ2VTZXR0aW5ncyB9IGZyb20gJ0AvaG9va3MvQXBwL3VzZVBhZ2VTZXR0aW5ncyc7XG5pbXBvcnQgRmlyc3RTZWN0aW9uIGZyb20gJ0Avc2VjdGlvbnMva2F0YWxvZy9maXJzdC1zZWN0aW9uLnZ1ZSc7XG5pbXBvcnQgU2Vjb25kU2VjdGlvbiBmcm9tICdAL3NlY3Rpb25zL2thdGFsb2cvc2Vjb25kLXNlY3Rpb24udnVlJztcbmltcG9ydCB7IHVzZVZ1ZXggfSBmcm9tICdAL3N0b3JlL3VzZVZ1ZXgnO1xuaW1wb3J0IHsgUmVmLCBvbk1vdW50ZWQsIHJlZiB9IGZyb20gJ3Z1ZSc7XG5cbmxldCBpc1BhZ2VEYXRhTG9hZGVkOiBSZWY8Ym9vbGVhbj4gPSByZWYoZmFsc2UpXG5cbmRlY2xhcmUgdmFyIHByZWxvYWRlckNsb3NlOiAoKSA9PiB2b2lkO1xuXG5jb25zdCBzdG9yZSA9IHVzZVZ1ZXgoKVxuXG5sZXQge2xvYWRlcn0gPSB1c2VMb2FkKDEpXG5cbmxvYWRlci52YWx1ZS5vbkFsbGlzTG9hZGVkID0gKCkgPT4ge1xuICAgIHByZWxvYWRlckNsb3NlKCk7XG4gICAgbG9hZGVyLnZhbHVlLnJlc3RhcnQoKVxufVxuXG5sZXQgeyBwYWdlIH0gPSB1c2VQYWdlU2V0dGluZ3Moc3RvcmUpXG5cbm9uTW91bnRlZChhc3luYyAoKSA9PiB7XG4gICAgcGFnZS52YWx1ZSA9IGF3YWl0IGdldFBhZ2VTZXR0aW5ncygxOTApIC8vIGthdGFsb2cgcG9zdCBpZFxuXG4gICAgaXNQYWdlRGF0YUxvYWRlZC52YWx1ZSA9IHRydWVcblxuICAgIC8vIHByZWxvYWRlckNsb3NlKCk7XG59KVxuXG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPjwvc3R5bGU+IiwiaW1wb3J0IHsgdG9EaXNwbGF5U3RyaW5nIGFzIF90b0Rpc3BsYXlTdHJpbmcsIGNyZWF0ZUVsZW1lbnRWTm9kZSBhcyBfY3JlYXRlRWxlbWVudFZOb2RlLCByZW5kZXJMaXN0IGFzIF9yZW5kZXJMaXN0LCBGcmFnbWVudCBhcyBfRnJhZ21lbnQsIG9wZW5CbG9jayBhcyBfb3BlbkJsb2NrLCBjcmVhdGVFbGVtZW50QmxvY2sgYXMgX2NyZWF0ZUVsZW1lbnRCbG9jaywgbm9ybWFsaXplQ2xhc3MgYXMgX25vcm1hbGl6ZUNsYXNzLCBwdXNoU2NvcGVJZCBhcyBfcHVzaFNjb3BlSWQsIHBvcFNjb3BlSWQgYXMgX3BvcFNjb3BlSWQgfSBmcm9tIFwidnVlXCJcblxuY29uc3QgX3dpdGhTY29wZUlkID0gbiA9PiAoX3B1c2hTY29wZUlkKFwiZGF0YS12LTA0MzUwZDA2XCIpLG49bigpLF9wb3BTY29wZUlkKCksbilcbmNvbnN0IF9ob2lzdGVkXzEgPSB7IGNsYXNzOiBcInNlbGVjdFwiIH1cbmNvbnN0IF9ob2lzdGVkXzIgPSB7IGNsYXNzOiBcInNlbGVjdF9fdGl0bGVcIiB9XG5jb25zdCBfaG9pc3RlZF8zID0gW1wic3JjXCJdXG5jb25zdCBfaG9pc3RlZF80ID0geyBjbGFzczogXCJzZWxlY3RfX2xpc3RcIiB9XG5jb25zdCBfaG9pc3RlZF81ID0gW1wib25DbGlja1wiXVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKF9jdHg6IGFueSxfY2FjaGU6IGFueSwkcHJvcHM6IGFueSwkc2V0dXA6IGFueSwkZGF0YTogYW55LCRvcHRpb25zOiBhbnkpIHtcbiAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJkaXZcIiwgX2hvaXN0ZWRfMSwgW1xuICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJidXR0b25cIiwge1xuICAgICAgb25DbGljazogX2NhY2hlWzBdIHx8IChfY2FjaGVbMF0gPSAoJGV2ZW50OiBhbnkpID0+ICgkc2V0dXAuaXNQYW5lbE9wZW4gPSAhJHNldHVwLmlzUGFuZWxPcGVuKSksXG4gICAgICBjbGFzczogXCJzZWxlY3RfX3BhbmVsXCJcbiAgICB9LCBbXG4gICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwicFwiLCBfaG9pc3RlZF8yLCBfdG9EaXNwbGF5U3RyaW5nKCRwcm9wcy50aXRsZSksIDEgLyogVEVYVCAqLyksXG4gICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiaW1nXCIsIHtcbiAgICAgICAgc3JjOiAkc2V0dXAuYXBwWydnZW5lcmFsX3NlbGVjdC1pY29uJ10sXG4gICAgICAgIGFsdDogXCJzZWxlY3QtaWNvblwiXG4gICAgICB9LCBudWxsLCA4IC8qIFBST1BTICovLCBfaG9pc3RlZF8zKVxuICAgIF0pLFxuICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwge1xuICAgICAgY2xhc3M6IF9ub3JtYWxpemVDbGFzcyhbXCJzZWxlY3RfX3dyYXBwZXJcIiwgeyAnc2VsZWN0X193cmFwcGVyLS1vcGVuJzogJHNldHVwLmlzUGFuZWxPcGVuIH1dKVxuICAgIH0sIFtcbiAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJ1bFwiLCBfaG9pc3RlZF80LCBbXG4gICAgICAgIChfb3BlbkJsb2NrKHRydWUpLCBfY3JlYXRlRWxlbWVudEJsb2NrKF9GcmFnbWVudCwgbnVsbCwgX3JlbmRlckxpc3QoJHNldHVwLm1hdGNoZWRMaXN0LCAoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcImxpXCIsIHtcbiAgICAgICAgICAgIGtleTogaW5kZXgsXG4gICAgICAgICAgICBjbGFzczogX25vcm1hbGl6ZUNsYXNzKFtcInNlbGVjdF9faXRlbVwiLCB7ICdzZWxlY3RfX2l0ZW0tLWFjdGl2ZSc6ICRwcm9wcy5jaG9zZW4uaW5jbHVkZXMoaXRlbSkgfV0pXG4gICAgICAgICAgfSwgW1xuICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgIG9uQ2xpY2s6ICgkZXZlbnQ6IGFueSkgPT4gKCRzZXR1cC5jaG9pY2UoaXRlbSkpXG4gICAgICAgICAgICB9LCBfdG9EaXNwbGF5U3RyaW5nKCRwcm9wcy5sYWJlbE5hbWUgPyBpdGVtWyRwcm9wcy5sYWJlbE5hbWVdIDogaXRlbVsnbGFiZWwnXSksIDkgLyogVEVYVCwgUFJPUFMgKi8sIF9ob2lzdGVkXzUpXG4gICAgICAgICAgXSwgMiAvKiBDTEFTUyAqLykpXG4gICAgICAgIH0pLCAxMjggLyogS0VZRURfRlJBR01FTlQgKi8pKVxuICAgICAgXSlcbiAgICBdLCAyIC8qIENMQVNTICovKVxuICBdKSlcbn0iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50Vk5vZGUgYXMgX2NyZWF0ZUVsZW1lbnRWTm9kZSwgdG9EaXNwbGF5U3RyaW5nIGFzIF90b0Rpc3BsYXlTdHJpbmcsIG9wZW5CbG9jayBhcyBfb3BlbkJsb2NrLCBjcmVhdGVFbGVtZW50QmxvY2sgYXMgX2NyZWF0ZUVsZW1lbnRCbG9jaywgcHVzaFNjb3BlSWQgYXMgX3B1c2hTY29wZUlkLCBwb3BTY29wZUlkIGFzIF9wb3BTY29wZUlkIH0gZnJvbSBcInZ1ZVwiXG5cbmNvbnN0IF93aXRoU2NvcGVJZCA9IG4gPT4gKF9wdXNoU2NvcGVJZChcImRhdGEtdi0zY2Y0ZWY2ZlwiKSxuPW4oKSxfcG9wU2NvcGVJZCgpLG4pXG5jb25zdCBfaG9pc3RlZF8xID0geyBjbGFzczogXCJwcm9kdWN0XCIgfVxuY29uc3QgX2hvaXN0ZWRfMiA9IFtcInNyY1wiLCBcImFsdFwiXVxuY29uc3QgX2hvaXN0ZWRfMyA9IHsgY2xhc3M6IFwicHJvZHVjdC1kZXNjcmlwdGlvblwiIH1cbmNvbnN0IF9ob2lzdGVkXzQgPSB7IGNsYXNzOiBcInByb2R1Y3QtZGVzY3JpcHRpb25fX25hbWVcIiB9XG5jb25zdCBfaG9pc3RlZF81ID0geyBjbGFzczogXCJwcm9kdWN0LWRlc2NyaXB0aW9uLXNwZWNzXCIgfVxuY29uc3QgX2hvaXN0ZWRfNiA9IHsgY2xhc3M6IFwic3BlY1wiIH1cbmNvbnN0IF9ob2lzdGVkXzcgPSB7IGNsYXNzOiBcInNwZWNcIiB9XG5jb25zdCBfaG9pc3RlZF84ID0geyBjbGFzczogXCJzcGVjXCIgfVxuY29uc3QgX2hvaXN0ZWRfOSA9IHsgY2xhc3M6IFwicHJvZHVjdF9fcHJpY2VcIiB9XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eDogYW55LF9jYWNoZTogYW55LCRwcm9wczogYW55LCRzZXR1cDogYW55LCRkYXRhOiBhbnksJG9wdGlvbnM6IGFueSkge1xuICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcImRpdlwiLCBfaG9pc3RlZF8xLCBbXG4gICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImltZ1wiLCB7XG4gICAgICBjbGFzczogXCJwcm9kdWN0X19pbWFnZVwiLFxuICAgICAgc3JjOiAkcHJvcHMuaW1hZ2VTcmMsXG4gICAgICBhbHQ6ICRwcm9wcy5uYW1lXG4gICAgfSwgbnVsbCwgOCAvKiBQUk9QUyAqLywgX2hvaXN0ZWRfMiksXG4gICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF8zLCBbXG4gICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwicFwiLCBfaG9pc3RlZF80LCBfdG9EaXNwbGF5U3RyaW5nKCRwcm9wcy5uYW1lKSwgMSAvKiBURVhUICovKSxcbiAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfNSwgW1xuICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzYsIFtcbiAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwicFwiLCBudWxsLCBfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC5wcm9kdWN0Q3B1ID8gJHNldHVwLnByb2R1Y3RDcHUuY2ZzLnNob3J0bHlfbmFtZSA6ICfQvtGC0YHRg9GC0YHQstGD0LXRgicpLCAxIC8qIFRFWFQgKi8pXG4gICAgICAgIF0pLFxuICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzcsIFtcbiAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwicFwiLCBudWxsLCBfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC5wcm9kdWN0R3B1ID8gJHNldHVwLnByb2R1Y3RHcHUuY2ZzLnNob3J0bHlfbmFtZSA6ICfQvtGC0YHRg9GB0YLQstGD0LXRgicpLCAxIC8qIFRFWFQgKi8pXG4gICAgICAgIF0pLFxuICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzgsIFtcbiAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwicFwiLCBudWxsLCBfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC5wcm9kdWN0UmFtID8gJHNldHVwLnByb2R1Y3RSYW0uY2ZzLnNob3J0bHlfbmFtZSA6ICfQvtGC0YHRg9GB0YLQstGD0LXRgicpLCAxIC8qIFRFWFQgKi8pXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF0pLFxuICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJwXCIsIF9ob2lzdGVkXzksIF90b0Rpc3BsYXlTdHJpbmcoJHByb3BzLnByaWNlKSArIFwiIFJVQlwiLCAxIC8qIFRFWFQgKi8pXG4gIF0pKVxufSIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnRWTm9kZSBhcyBfY3JlYXRlRWxlbWVudFZOb2RlLCB0b0Rpc3BsYXlTdHJpbmcgYXMgX3RvRGlzcGxheVN0cmluZywgbm9ybWFsaXplU3R5bGUgYXMgX25vcm1hbGl6ZVN0eWxlLCBvcGVuQmxvY2sgYXMgX29wZW5CbG9jaywgY3JlYXRlRWxlbWVudEJsb2NrIGFzIF9jcmVhdGVFbGVtZW50QmxvY2ssIHB1c2hTY29wZUlkIGFzIF9wdXNoU2NvcGVJZCwgcG9wU2NvcGVJZCBhcyBfcG9wU2NvcGVJZCB9IGZyb20gXCJ2dWVcIlxuXG5jb25zdCBfd2l0aFNjb3BlSWQgPSBuID0+IChfcHVzaFNjb3BlSWQoXCJkYXRhLXYtNjgyMmZkZDJcIiksbj1uKCksX3BvcFNjb3BlSWQoKSxuKVxuY29uc3QgX2hvaXN0ZWRfMSA9IHsgY2xhc3M6IFwiZmlyc3Qtc2VjdGlvbi1jb250YWluZXIgY29udGFpbmVyXCIgfVxuY29uc3QgX2hvaXN0ZWRfMiA9IHsgY2xhc3M6IFwiaW1hZ2UtYm94XCIgfVxuY29uc3QgX2hvaXN0ZWRfMyA9IFtcInNyY1wiLCBcImFsdFwiXVxuY29uc3QgX2hvaXN0ZWRfNCA9IHsgY2xhc3M6IFwiZGVzY3JpcHRpb24tYm94XCIgfVxuY29uc3QgX2hvaXN0ZWRfNSA9IHsgY2xhc3M6IFwiZGVzY3JpcHRpb24tYm94X190aXRsZSB0aXRsZVwiIH1cbmNvbnN0IF9ob2lzdGVkXzYgPSB7IGNsYXNzOiBcImRlc2NyaXB0aW9uLWJveF9fdGV4dFwiIH1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihfY3R4OiBhbnksX2NhY2hlOiBhbnksJHByb3BzOiBhbnksJHNldHVwOiBhbnksJGRhdGE6IGFueSwkb3B0aW9uczogYW55KSB7XG4gIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwiZGl2XCIsIHtcbiAgICByZWY6IFwiYm94XCIsXG4gICAgY2xhc3M6IFwiZmlyc3Qtc2VjdGlvblwiLFxuICAgIHN0eWxlOiBfbm9ybWFsaXplU3R5bGUoeyBiYWNrZ3JvdW5kOiBgdXJsKCckeyRzZXR1cC5jdXJyZW50U2V0dGluZ3MuYmFja2dyb3VuZH0nKSwgbm8tcmVwZWF0IGNlbnRlciAvIGNvdmVyYCB9KVxuICB9LCBbXG4gICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF8xLCBbXG4gICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzIsIFtcbiAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImltZ1wiLCB7XG4gICAgICAgICAgb25Mb2FkOiAkc2V0dXAudXBkYXRlSW1hZ2VzLFxuICAgICAgICAgIHJlZjogXCJpbWFnZVwiLFxuICAgICAgICAgIHNyYzogJHNldHVwLmN1cnJlbnRTZXR0aW5ncy5pbWFnZSxcbiAgICAgICAgICBhbHQ6ICRzZXR1cC5jdXJyZW50U2V0dGluZ3MudGl0bGVcbiAgICAgICAgfSwgbnVsbCwgNDAgLyogUFJPUFMsIEhZRFJBVEVfRVZFTlRTICovLCBfaG9pc3RlZF8zKVxuICAgICAgXSksXG4gICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzQsIFtcbiAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcInBcIiwgX2hvaXN0ZWRfNSwgX3RvRGlzcGxheVN0cmluZygkc2V0dXAuY3VycmVudFNldHRpbmdzLnRpdGxlKSwgMSAvKiBURVhUICovKSxcbiAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcInBcIiwgX2hvaXN0ZWRfNiwgX3RvRGlzcGxheVN0cmluZygkc2V0dXAuY3VycmVudFNldHRpbmdzLnRleHQpLCAxIC8qIFRFWFQgKi8pXG4gICAgICBdKVxuICAgIF0pXG4gIF0sIDQgLyogU1RZTEUgKi8pKVxufSIsImltcG9ydCB7IGNyZWF0ZVZOb2RlIGFzIF9jcmVhdGVWTm9kZSwgY3JlYXRlRWxlbWVudFZOb2RlIGFzIF9jcmVhdGVFbGVtZW50Vk5vZGUsIHJlbmRlckxpc3QgYXMgX3JlbmRlckxpc3QsIEZyYWdtZW50IGFzIF9GcmFnbWVudCwgb3BlbkJsb2NrIGFzIF9vcGVuQmxvY2ssIGNyZWF0ZUVsZW1lbnRCbG9jayBhcyBfY3JlYXRlRWxlbWVudEJsb2NrLCBjcmVhdGVCbG9jayBhcyBfY3JlYXRlQmxvY2ssIGNyZWF0ZUNvbW1lbnRWTm9kZSBhcyBfY3JlYXRlQ29tbWVudFZOb2RlLCBwdXNoU2NvcGVJZCBhcyBfcHVzaFNjb3BlSWQsIHBvcFNjb3BlSWQgYXMgX3BvcFNjb3BlSWQgfSBmcm9tIFwidnVlXCJcblxuY29uc3QgX3dpdGhTY29wZUlkID0gbiA9PiAoX3B1c2hTY29wZUlkKFwiZGF0YS12LTAxNGY2MmYyXCIpLG49bigpLF9wb3BTY29wZUlkKCksbilcbmNvbnN0IF9ob2lzdGVkXzEgPSB7IGNsYXNzOiBcInNlY29uZC1zZWN0aW9uXCIgfVxuY29uc3QgX2hvaXN0ZWRfMiA9IHsgY2xhc3M6IFwiZmlsdGVycy1ib3hcIiB9XG5jb25zdCBfaG9pc3RlZF8zID0geyBjbGFzczogXCJwcm9kdWN0cy1ib3hcIiB9XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eDogYW55LF9jYWNoZTogYW55LCRwcm9wczogYW55LCRzZXR1cDogYW55LCRkYXRhOiBhbnksJG9wdGlvbnM6IGFueSkge1xuICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcImRpdlwiLCBfaG9pc3RlZF8xLCBbXG4gICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF8yLCBbXG4gICAgICBfY3JlYXRlVk5vZGUoJHNldHVwW1wiQ3VzdG9tU2VsZWN0XCJdLCB7XG4gICAgICAgIFwib25VcGRhdGU6Y2hvc2VuRGVsZXRlXCI6IF9jYWNoZVswXSB8fCAoX2NhY2hlWzBdID0gKCRldmVudDogYW55KSA9PiAoJHNldHVwLmVsaW1pbmF0ZSgkc2V0dXAuY2hvc2VuRmlsdGVycy5wcm9kdWNlcl9jcHUsICRldmVudCkpKSxcbiAgICAgICAgXCJvblVwZGF0ZTpjaG9zZW5BZGRcIjogX2NhY2hlWzFdIHx8IChfY2FjaGVbMV0gPSAoJGV2ZW50OiBhbnkpID0+ICgkc2V0dXAuY2hvc2VuRmlsdGVycy5wcm9kdWNlcl9jcHUucHVzaCgkZXZlbnQpKSksXG4gICAgICAgIHRpdGxlOiAn0J/RgNC+0LjQt9Cy0L7QtNC40YLQtdC70Ywg0L/RgNC+0YbQtdGB0YHQvtGA0LAnLFxuICAgICAgICBsaXN0OiAkc2V0dXAuZmlsdGVycy5wcm9kdWNlcl9jcHUsXG4gICAgICAgIGNob3NlbjogJHNldHVwLmNob3NlbkZpbHRlcnMucHJvZHVjZXJfY3B1XG4gICAgICB9LCBudWxsLCA4IC8qIFBST1BTICovLCBbXCJsaXN0XCIsIFwiY2hvc2VuXCJdKSxcbiAgICAgIF9jcmVhdGVWTm9kZSgkc2V0dXBbXCJDdXN0b21TZWxlY3RcIl0sIHtcbiAgICAgICAgXCJvblVwZGF0ZTpjaG9zZW5EZWxldGVcIjogX2NhY2hlWzJdIHx8IChfY2FjaGVbMl0gPSAoJGV2ZW50OiBhbnkpID0+ICgkc2V0dXAuZWxpbWluYXRlKCRzZXR1cC5jaG9zZW5GaWx0ZXJzLm1vZGVsX2NwdSwgJGV2ZW50KSkpLFxuICAgICAgICBcIm9uVXBkYXRlOmNob3NlbkFkZFwiOiBfY2FjaGVbM10gfHwgKF9jYWNoZVszXSA9ICgkZXZlbnQ6IGFueSkgPT4gKCRzZXR1cC5jaG9zZW5GaWx0ZXJzLm1vZGVsX2NwdS5wdXNoKCRldmVudCkpKSxcbiAgICAgICAgdGl0bGU6ICfQnNC+0LTQtdC70Ywg0L/RgNC+0YbQtdGB0YHQvtGA0LAnLFxuICAgICAgICBcIm1hdGNoaW5nLXJ1bGVzXCI6IFt7IGtleTogJ3Byb2R1Y2VyJywgdHlwZTogJ21hdGNoaW5nJywgdmFsdWU6ICRzZXR1cC5jaG9zZW5GaWx0ZXJzLnByb2R1Y2VyX2NwdSwgY29tcGFyZUtleTogJ25hbWUnIH1dLFxuICAgICAgICBsaXN0OiAkc2V0dXAuZmlsdGVycy5tb2RlbF9jcHUsXG4gICAgICAgIGNob3NlbjogJHNldHVwLmNob3NlbkZpbHRlcnMubW9kZWxfY3B1XG4gICAgICB9LCBudWxsLCA4IC8qIFBST1BTICovLCBbXCJtYXRjaGluZy1ydWxlc1wiLCBcImxpc3RcIiwgXCJjaG9zZW5cIl0pXG4gICAgXSksXG4gICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF8zLCBbXG4gICAgICAoJHNldHVwLmlzRGF0YUxvYWRlZClcbiAgICAgICAgPyAoX29wZW5CbG9jayh0cnVlKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhfRnJhZ21lbnQsIHsga2V5OiAwIH0sIF9yZW5kZXJMaXN0KCRzZXR1cC5wcm9kdWN0cywgKHByb2R1Y3QpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlQmxvY2soJHNldHVwW1wiUHJvZHVjdFwiXSwge1xuICAgICAgICAgICAgICBrZXk6IHByb2R1Y3QuaWQsXG4gICAgICAgICAgICAgIFwiaW1hZ2Utc3JjXCI6IHByb2R1Y3QuaW1hZ2VzWzBdLnNyYyxcbiAgICAgICAgICAgICAgbmFtZTogcHJvZHVjdC5uYW1lLFxuICAgICAgICAgICAgICBncm91cGVkX3Byb2R1Y3RzOiBwcm9kdWN0Lmdyb3VwZWRfcHJvZHVjdHMsXG4gICAgICAgICAgICAgIHByaWNlOiBwcm9kdWN0LnByaWNlXG4gICAgICAgICAgICB9LCBudWxsLCA4IC8qIFBST1BTICovLCBbXCJpbWFnZS1zcmNcIiwgXCJuYW1lXCIsIFwiZ3JvdXBlZF9wcm9kdWN0c1wiLCBcInByaWNlXCJdKSlcbiAgICAgICAgICB9KSwgMTI4IC8qIEtFWUVEX0ZSQUdNRU5UICovKSlcbiAgICAgICAgOiBfY3JlYXRlQ29tbWVudFZOb2RlKFwidi1pZlwiLCB0cnVlKVxuICAgIF0pXG4gIF0pKVxufSIsImltcG9ydCB7IG9wZW5CbG9jayBhcyBfb3BlbkJsb2NrLCBjcmVhdGVCbG9jayBhcyBfY3JlYXRlQmxvY2ssIGNyZWF0ZUVsZW1lbnRCbG9jayBhcyBfY3JlYXRlRWxlbWVudEJsb2NrLCBjcmVhdGVDb21tZW50Vk5vZGUgYXMgX2NyZWF0ZUNvbW1lbnRWTm9kZSB9IGZyb20gXCJ2dWVcIlxuXG5jb25zdCBfaG9pc3RlZF8xID0geyBrZXk6IDAgfVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKF9jdHg6IGFueSxfY2FjaGU6IGFueSwkcHJvcHM6IGFueSwkc2V0dXA6IGFueSwkZGF0YTogYW55LCRvcHRpb25zOiBhbnkpIHtcbiAgcmV0dXJuICgkc2V0dXAuaXNQYWdlRGF0YUxvYWRlZClcbiAgICA/IChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJtYWluXCIsIF9ob2lzdGVkXzEsIFtcbiAgICAgICAgKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUJsb2NrKCRzZXR1cFtcIkZpcnN0U2VjdGlvblwiXSwge1xuICAgICAgICAgIGtleTogMSxcbiAgICAgICAgICBvbkxvYWQ6IF9jYWNoZVswXSB8fCAoX2NhY2hlWzBdID0gKCRldmVudDogYW55KSA9PiAoJHNldHVwLmxvYWRlci5sb2FkKCkpKVxuICAgICAgICB9KSksXG4gICAgICAgIChfb3BlbkJsb2NrKCksIF9jcmVhdGVCbG9jaygkc2V0dXBbXCJTZWNvbmRTZWN0aW9uXCJdLCB7IGtleTogMiB9KSlcbiAgICAgIF0pKVxuICAgIDogX2NyZWF0ZUNvbW1lbnRWTm9kZShcInYtaWZcIiwgdHJ1ZSlcbn0iLCJpbXBvcnQgV1AgZnJvbSAnQC9heGlvc1dQJ1xuaW1wb3J0IHsgU2V0dGluZ3MgfSBmcm9tICdAL3R5cGVzL0FwcCdcblxuXG5cbmV4cG9ydCBjb25zdCBnZXRQYWdlU2V0dGluZ3MgPSBhc3luYyAoaWQ6IG51bWJlcik6IFByb21pc2U8U2V0dGluZ3M+ID0+IHtcbiAgICByZXR1cm4gYXdhaXQgV1AuZ2V0KCdwYWdlcy8nICsgaWQpLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuZGF0YSlcbn0iLCJpbXBvcnQgV09PIGZyb20gJ0AvYXhpb3NXb29jb21lcmNlJ1xuaW1wb3J0IHsgSVByb2R1Y3QgfSBmcm9tICdAL3R5cGVzL1Byb2R1Y3QnO1xuXG5leHBvcnQgY29uc3QgZ2V0UHJvZHVjdHMgPSBhc3luYyAocGVyX3BhZ2U6IG51bWJlciwgY2F0ZWdvcnlfaWQ6IG51bWJlcikgPT4ge1xuICAgIGxldCBwcm9kdWN0cyA9IFtdXG4gICAgbGV0IHBhZ2UgPSAwO1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHBhZ2UrKztcblxuICAgICAgICBpZiAocHJvZHVjdHMubGVuZ3RoID49IHBlcl9wYWdlKSB7XG4gICAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIGxldCBmZXRjaGVkUHJvZHVjdHMgPSBhd2FpdCBXT08uZ2V0KCdwcm9kdWN0cycsIHtcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgIHBlcl9wYWdlOiBwZXJfcGFnZSxcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogY2F0ZWdvcnlfaWQsXG4gICAgICAgICAgICAgICAgcGFnZTogcGFnZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHBhZ2UgPiBOdW1iZXIoZmV0Y2hlZFByb2R1Y3RzLmhlYWRlcnNbJ3gtd3AtdG90YWxwYWdlcyddKSkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBwcm9kdWN0cy5wdXNoKC4uLmZldGNoZWRQcm9kdWN0cy5kYXRhKVxuICAgIH1cbiAgICByZXR1cm4gcHJvZHVjdHM7XG59IiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5jb25zdCBpbnN0YW5jZSA9IGF4aW9zLmNyZWF0ZSh7XG4gICAgYmFzZVVSTDogJ2h0dHA6Ly9sb2NhbGhvc3Qvd3AtanNvbi93Yy92My8nLFxuICAgIGhlYWRlcnM6IHsgJ0F1dGhvcml6YXRpb24nOiAnQmFzaWMgWTJ0ZlkyRXpNamRrTmpZMU5HVXlOalV3T1Rsak5qSTNPRFl5T1dFM09ERm1NelE1Wm1Jd1ltTmxZVHBqYzE5aE5EUTBORFF5T1RaaU9USTFPREEyWmpobU1XTXpNMkk1TjJSbU5qSmlNVEEwTnpobE0yUTInIH1cbn0pO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGluc3RhbmNlXG4iLCJpbXBvcnQgeyBSZWYsIGNvbXB1dGVkLCByZWYsIHdhdGNoIH0gZnJvbSBcInZ1ZVwiO1xuXG5jbGFzcyBMb2FkZXIge1xuXG4gICAgcHJpdmF0ZSBsb2FkZWRDb3VudGVyOiBudW1iZXIgPSAwO1xuXG4gICAgcHJpdmF0ZSBjb3VudGVyOiBudW1iZXIgPSAwO1xuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihjb3VudGVyOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5jb3VudGVyID0gY291bnRlcjtcbiAgICB9XG4gICAgcHVibGljIGxvYWQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMubG9hZGVkQ291bnRlcisrO1xuXG4gICAgICAgIHRoaXMuYWZ0ZXJMb2FkKClcbiAgICB9XG4gICAgcHVibGljIHJlc3RhcnQoY291bnQ/OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKGNvdW50KSB7XG4gICAgICAgICAgICB0aGlzLmNvdW50ZXIgPSBjb3VudFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5sb2FkZWRDb3VudGVyID0gMDtcbiAgICB9XG4gICAgcHVibGljIG9uQWxsaXNMb2FkZWQ6IEZ1bmN0aW9uO1xuICAgIHByaXZhdGUgYWZ0ZXJMb2FkKCk6IHZvaWQge1xuXG4gICAgICAgIGlmICh0aGlzLmxvYWRlZENvdW50ZXIgIT0gdGhpcy5jb3VudGVyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5vbkFsbGlzTG9hZGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vbkFsbGlzTG9hZGVkKCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZygnYWxsIGxvYWRlZCcpXG4gICAgfVxufVxuXG5cbmV4cG9ydCBjb25zdCB1c2VMb2FkID0gKGNvdW50OiBudW1iZXIpID0+IHtcblxuICAgIGNvbnN0IGxvYWRlciA9IHJlZihuZXcgTG9hZGVyKGNvdW50KSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBsb2FkZXIsXG4gICAgfVxufSIsImltcG9ydCBTdG9yZSwgeyBNdXRhdGlvbnMgfSBmcm9tICdAL3N0b3JlJztcbmltcG9ydCB7IFdyaXRhYmxlQ29tcHV0ZWRSZWYsIGNvbXB1dGVkIH0gZnJvbSAndnVlJztcbmltcG9ydCB7IElDYXRlZ29yeU1haW5QYWdlLCBTZXR0aW5ncyB9IGZyb20gJ0AvdHlwZXMvQXBwJztcblxuXG5leHBvcnQgY29uc3QgdXNlUGFnZVNldHRpbmdzID0gKHN0b3JlOiB0eXBlb2YgU3RvcmUpID0+IHtcblxuICAgIGxldCBwYWdlOiBXcml0YWJsZUNvbXB1dGVkUmVmPE9iamVjdD4gPSBjb21wdXRlZCh7XG4gICAgICAgIGdldDogKCkgPT4gc3RvcmUuc3RhdGUucGFnZS5jZnMsXG4gICAgICAgIHNldDogKHZhbHVlOiBTZXR0aW5ncykgPT4gc3RvcmUuY29tbWl0KE11dGF0aW9ucy5TRVRfUEFHRV9TRVRUSU5HUywgdmFsdWUpLFxuICAgIH0pXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwYWdlXG4gICAgfVxuXG59IiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vQ3VzdG9tU2VsZWN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wNDM1MGQwNiZzY29wZWQ9dHJ1ZSZ0cz10cnVlXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQ3VzdG9tU2VsZWN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmc2V0dXA9dHJ1ZSZsYW5nPXRzXCJcbmV4cG9ydCAqIGZyb20gXCIuL0N1c3RvbVNlbGVjdC52dWU/dnVlJnR5cGU9c2NyaXB0JnNldHVwPXRydWUmbGFuZz10c1wiXG5cbmltcG9ydCBcIi4vQ3VzdG9tU2VsZWN0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTA0MzUwZDA2Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZVwiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fc2NvcGVJZCcsXCJkYXRhLXYtMDQzNTBkMDZcIl0sWydfX2ZpbGUnLFwic3JjL2NvbXBvbmVudHMvQ3VzdG9tU2VsZWN0LnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCIwNDM1MGQwNlwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzA0MzUwZDA2JywgX19leHBvcnRzX18pKSB7XG4gICAgYXBpLnJlbG9hZCgnMDQzNTBkMDYnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0N1c3RvbVNlbGVjdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDQzNTBkMDYmc2NvcGVkPXRydWUmdHM9dHJ1ZVwiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCcwNDM1MGQwNicsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vUHJvZHVjdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2NmNGVmNmYmc2NvcGVkPXRydWUmdHM9dHJ1ZVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1Byb2R1Y3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZzZXR1cD10cnVlJmxhbmc9dHNcIlxuZXhwb3J0ICogZnJvbSBcIi4vUHJvZHVjdC52dWU/dnVlJnR5cGU9c2NyaXB0JnNldHVwPXRydWUmbGFuZz10c1wiXG5cbmltcG9ydCBcIi4vUHJvZHVjdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zY2Y0ZWY2ZiZsYW5nPXNjc3Mmc2NvcGVkPXRydWVcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2V4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl0sWydfX3Njb3BlSWQnLFwiZGF0YS12LTNjZjRlZjZmXCJdLFsnX19maWxlJyxcInNyYy9jb21wb25lbnRzL1Byb2R1Y3QudnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcIjNjZjRlZjZmXCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnM2NmNGVmNmYnLCBfX2V4cG9ydHNfXykpIHtcbiAgICBhcGkucmVsb2FkKCczY2Y0ZWY2ZicsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vUHJvZHVjdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2NmNGVmNmYmc2NvcGVkPXRydWUmdHM9dHJ1ZVwiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCczY2Y0ZWY2ZicsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vZmlyc3Qtc2VjdGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjgyMmZkZDImc2NvcGVkPXRydWUmdHM9dHJ1ZVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2ZpcnN0LXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZzZXR1cD10cnVlJmxhbmc9dHNcIlxuZXhwb3J0ICogZnJvbSBcIi4vZmlyc3Qtc2VjdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0JnNldHVwPXRydWUmbGFuZz10c1wiXG5cbmltcG9ydCBcIi4vZmlyc3Qtc2VjdGlvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02ODIyZmRkMiZsYW5nPXNjc3Mmc2NvcGVkPXRydWVcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2V4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl0sWydfX3Njb3BlSWQnLFwiZGF0YS12LTY4MjJmZGQyXCJdLFsnX19maWxlJyxcInNyYy9zZWN0aW9ucy9rYXRhbG9nL2ZpcnN0LXNlY3Rpb24udnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcIjY4MjJmZGQyXCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnNjgyMmZkZDInLCBfX2V4cG9ydHNfXykpIHtcbiAgICBhcGkucmVsb2FkKCc2ODIyZmRkMicsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vZmlyc3Qtc2VjdGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjgyMmZkZDImc2NvcGVkPXRydWUmdHM9dHJ1ZVwiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCc2ODIyZmRkMicsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vc2Vjb25kLXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTAxNGY2MmYyJnNjb3BlZD10cnVlJnRzPXRydWVcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9zZWNvbmQtc2VjdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0JnNldHVwPXRydWUmbGFuZz10c1wiXG5leHBvcnQgKiBmcm9tIFwiLi9zZWNvbmQtc2VjdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0JnNldHVwPXRydWUmbGFuZz10c1wiXG5cbmltcG9ydCBcIi4vc2Vjb25kLXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDE0ZjYyZjImbGFuZz1zY3NzJnNjb3BlZD10cnVlXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19zY29wZUlkJyxcImRhdGEtdi0wMTRmNjJmMlwiXSxbJ19fZmlsZScsXCJzcmMvc2VjdGlvbnMva2F0YWxvZy9zZWNvbmQtc2VjdGlvbi52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiMDE0ZjYyZjJcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCcwMTRmNjJmMicsIF9fZXhwb3J0c19fKSkge1xuICAgIGFwaS5yZWxvYWQoJzAxNGY2MmYyJywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9zZWNvbmQtc2VjdGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDE0ZjYyZjImc2NvcGVkPXRydWUmdHM9dHJ1ZVwiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCcwMTRmNjJmMicsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4va2F0YWxvZy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZDQ5YTFmMTImdHM9dHJ1ZVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2thdGFsb2cudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZzZXR1cD10cnVlJmxhbmc9dHNcIlxuZXhwb3J0ICogZnJvbSBcIi4va2F0YWxvZy52dWU/dnVlJnR5cGU9c2NyaXB0JnNldHVwPXRydWUmbGFuZz10c1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fZmlsZScsXCJzcmMvdmlld3Mva2F0YWxvZy52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiZDQ5YTFmMTJcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCdkNDlhMWYxMicsIF9fZXhwb3J0c19fKSkge1xuICAgIGFwaS5yZWxvYWQoJ2Q0OWExZjEyJywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9rYXRhbG9nLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kNDlhMWYxMiZ0cz10cnVlXCIsICgpID0+IHtcbiAgICBhcGkucmVyZW5kZXIoJ2Q0OWExZjEyJywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMTBdLnVzZVswXSEuL0N1c3RvbVNlbGVjdC52dWU/dnVlJnR5cGU9c2NyaXB0JnNldHVwPXRydWUmbGFuZz10c1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxMF0udXNlWzBdIS4vQ3VzdG9tU2VsZWN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmc2V0dXA9dHJ1ZSZsYW5nPXRzXCIiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMTBdLnVzZVswXSEuL1Byb2R1Y3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZzZXR1cD10cnVlJmxhbmc9dHNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMTBdLnVzZVswXSEuL1Byb2R1Y3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZzZXR1cD10cnVlJmxhbmc9dHNcIiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxMF0udXNlWzBdIS4vZmlyc3Qtc2VjdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0JnNldHVwPXRydWUmbGFuZz10c1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxMF0udXNlWzBdIS4vZmlyc3Qtc2VjdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0JnNldHVwPXRydWUmbGFuZz10c1wiIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzEwXS51c2VbMF0hLi9zZWNvbmQtc2VjdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0JnNldHVwPXRydWUmbGFuZz10c1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxMF0udXNlWzBdIS4vc2Vjb25kLXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZzZXR1cD10cnVlJmxhbmc9dHNcIiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxMF0udXNlWzBdIS4va2F0YWxvZy52dWU/dnVlJnR5cGU9c2NyaXB0JnNldHVwPXRydWUmbGFuZz10c1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxMF0udXNlWzBdIS4va2F0YWxvZy52dWU/dnVlJnR5cGU9c2NyaXB0JnNldHVwPXRydWUmbGFuZz10c1wiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvdGVtcGxhdGVMb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxMF0udXNlWzBdIS4vQ3VzdG9tU2VsZWN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wNDM1MGQwNiZzY29wZWQ9dHJ1ZSZ0cz10cnVlXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC90ZW1wbGF0ZUxvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1syXSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzEwXS51c2VbMF0hLi9Qcm9kdWN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zY2Y0ZWY2ZiZzY29wZWQ9dHJ1ZSZ0cz10cnVlXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC90ZW1wbGF0ZUxvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1syXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzEwXS51c2VbMF0hLi9maXJzdC1zZWN0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02ODIyZmRkMiZzY29wZWQ9dHJ1ZSZ0cz10cnVlXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC90ZW1wbGF0ZUxvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1syXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzEwXS51c2VbMF0hLi9zZWNvbmQtc2VjdGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDE0ZjYyZjImc2NvcGVkPXRydWUmdHM9dHJ1ZVwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvdGVtcGxhdGVMb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxMF0udXNlWzBdIS4va2F0YWxvZy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZDQ5YTFmMTImdHM9dHJ1ZVwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMTBdLnVzZVswXSEuL0N1c3RvbVNlbGVjdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wNDM1MGQwNiZsYW5nPXNjc3Mmc2NvcGVkPXRydWVcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzEwXS51c2VbMF0hLi9Qcm9kdWN0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTNjZjRlZjZmJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZVwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMTBdLnVzZVswXSEuL2ZpcnN0LXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NjgyMmZkZDImbGFuZz1zY3NzJnNjb3BlZD10cnVlXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxMF0udXNlWzBdIS4vc2Vjb25kLXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDE0ZjYyZjImbGFuZz1zY3NzJnNjb3BlZD10cnVlXCIiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMTBdLnVzZVswXSEuL0N1c3RvbVNlbGVjdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wNDM1MGQwNiZsYW5nPXNjc3Mmc2NvcGVkPXRydWVcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiOTcxOWMyOTBcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzEwXS51c2VbMF0hLi9DdXN0b21TZWxlY3QudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDQzNTBkMDYmbGFuZz1zY3NzJnNjb3BlZD10cnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzEwXS51c2VbMF0hLi9DdXN0b21TZWxlY3QudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDQzNTBkMDYmbGFuZz1zY3NzJnNjb3BlZD10cnVlXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxMF0udXNlWzBdIS4vUHJvZHVjdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zY2Y0ZWY2ZiZsYW5nPXNjc3Mmc2NvcGVkPXRydWVcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiNzlkYjYzNzNcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzEwXS51c2VbMF0hLi9Qcm9kdWN0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTNjZjRlZjZmJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxMF0udXNlWzBdIS4vUHJvZHVjdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zY2Y0ZWY2ZiZsYW5nPXNjc3Mmc2NvcGVkPXRydWVcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzEwXS51c2VbMF0hLi9maXJzdC1zZWN0aW9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTY4MjJmZGQyJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZVwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIxYTFmYjc3OFwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMTBdLnVzZVswXSEuL2ZpcnN0LXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NjgyMmZkZDImbGFuZz1zY3NzJnNjb3BlZD10cnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzEwXS51c2VbMF0hLi9maXJzdC1zZWN0aW9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTY4MjJmZGQyJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZVwiKTtcbiAgICAgaWYobmV3Q29udGVudC5fX2VzTW9kdWxlKSBuZXdDb250ZW50ID0gbmV3Q29udGVudC5kZWZhdWx0O1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMTBdLnVzZVswXSEuL3NlY29uZC1zZWN0aW9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTAxNGY2MmYyJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZVwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIyODZiMjZmZFwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMTBdLnVzZVswXSEuL3NlY29uZC1zZWN0aW9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTAxNGY2MmYyJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxMF0udXNlWzBdIS4vc2Vjb25kLXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDE0ZjYyZjImbGFuZz1zY3NzJnNjb3BlZD10cnVlXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==