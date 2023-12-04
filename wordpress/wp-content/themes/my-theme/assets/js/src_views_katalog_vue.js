(self["webpackChunksrc"] = self["webpackChunksrc"] || []).push([["src_views_katalog_vue"],{

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
}`, "",{"version":3,"sources":["webpack://./src/components/Product.vue","webpack://./Product.vue"],"names":[],"mappings":"AACA;EACI,+CAAA;EACA,iBAAA;EACA,kBAAA;EACA,mBAAA;EACA,oBAAA;EAEA,yBAAA;EAEA,kBAAA;EAEA,aAAA;EACA,sBAAA;EACA,mBAAA;EAEA,SAAA;EAEA,oBAAA;ACLJ;ADMI;EACI,eAAA;EACA,4BAAA;ACJR;ADOI;EACI,WAAA;EACA,YAAA;EACA,mBAAA;ACLR;ADQI;EACI,eAAA;EACA,kBAAA;EACA,yBAAA;ACNR;ADUA;EAGI,aAAA;EACA,sBAAA;EACA,mBAAA;EAEA,WAAA;ACVJ;ADYI;EACI,yBAAA;EACA,eAAA;EACA,gBAAA;EACA,mBAAA;ACVR;ADcA;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,WAAA;EACA,SAAA;EACA,kBAAA;ACXJ;ADcA;EACI,yCAAA;EACA,UAAA;EACA,kBAAA;EACA,mBAAA;EAEA,gBAAA;EACA,yBAAA;ACZJ","sourcesContent":["\n.product {\n    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);\n    padding-top: 15px;\n    padding-left: 10px;\n    padding-right: 10px;\n    padding-bottom: 25px;\n\n    background-color: #141414;\n\n    border-radius: 5px;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    gap: 20px;\n\n    transition: all 0.3s;\n    &:hover{\n        cursor: pointer;\n        box-shadow: 0 0 10px #ffffff;\n    }\n\n    &__image{\n        width: 100%;\n        height: 100%;\n        object-fit: contain;\n    }\n\n    &__price{\n        font-size: 18px;\n        font-weight: 500px;\n        text-transform: uppercase;\n    }\n}\n\n.product-description {\n\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    width: 100%;\n\n    &__name {\n        text-transform: uppercase;\n        font-size: 22px;\n        font-weight: 600;\n        margin-bottom: 20px;\n    }\n}\n\n.product-description-specs {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n    gap: 10px;\n    margin-bottom: 5px;\n}\n\n.spec {\n    border-bottom: 2px dashed rgb(51, 51, 51);\n    width: 80%;\n    text-align: center;\n    padding-bottom: 5px;\n\n    font-weight: 300;\n    color: rgb(214, 213, 213);\n}\n",".product {\n  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);\n  padding-top: 15px;\n  padding-left: 10px;\n  padding-right: 10px;\n  padding-bottom: 25px;\n  background-color: #141414;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n  transition: all 0.3s;\n}\n.product:hover {\n  cursor: pointer;\n  box-shadow: 0 0 10px #ffffff;\n}\n.product__image {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n.product__price {\n  font-size: 18px;\n  font-weight: 500px;\n  text-transform: uppercase;\n}\n\n.product-description {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n}\n.product-description__name {\n  text-transform: uppercase;\n  font-size: 22px;\n  font-weight: 600;\n  margin-bottom: 20px;\n}\n\n.product-description-specs {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  gap: 10px;\n  margin-bottom: 5px;\n}\n\n.spec {\n  border-bottom: 2px dashed rgb(51, 51, 51);\n  width: 80%;\n  text-align: center;\n  padding-bottom: 5px;\n  font-weight: 300;\n  color: rgb(214, 213, 213);\n}"],"sourceRoot":""}]);
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
}
.products-box[data-v-014f62f2] {
  display: grid;
  grid-template-columns: repeat(auto-fit, 310px);
  gap: 20px;
}`, "",{"version":3,"sources":["webpack://./src/scss/base/typography.scss","webpack://./second-section.vue","webpack://./src/sections/katalog/second-section.vue"],"names":[],"mappings":"AAAA;EACI,WAAA;EACA,kBAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;EACA,qBAAA;EACA,yBAAA;EACA,mBAAA;ACCJ;ACNA;EACI,aAAA;EACA,gCAAA;EACA,SAAA;EACA,iBAAA;EACA,oBAAA;EACA,kBAAA;EACA,mBAAA;EACA,iBAAA;EACA,cAAA;ADSJ;ACNA;EACI,yBAAA;EACA,+CAAA;EACA,kBAAA;ADSJ;ACNA;EACI,aAAA;EACA,8CAAA;EACA,SAAA;ADSJ","sourcesContent":[".title {\n    color: #FFF;\n    font-family: Rubik;\n    font-size: 4rem;\n    font-style: normal;\n    font-weight: 600;\n    line-height: normal;\n    letter-spacing: 1.6px;\n    text-transform: uppercase;\n    margin-bottom: 21px;\n}",".title {\n  color: #FFF;\n  font-family: Rubik;\n  font-size: 4rem;\n  font-style: normal;\n  font-weight: 600;\n  line-height: normal;\n  letter-spacing: 1.6px;\n  text-transform: uppercase;\n  margin-bottom: 21px;\n}\n\n.second-section {\n  display: grid;\n  grid-template-columns: 380px 1fr;\n  gap: 30px;\n  padding-top: 56px;\n  padding-bottom: 68px;\n  padding-left: 20px;\n  padding-right: 20px;\n  max-width: 1420px;\n  margin: 0 auto;\n}\n\n.filters-box {\n  background-color: #141414;\n  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);\n  border-radius: 5px;\n}\n\n.products-box {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 310px);\n  gap: 20px;\n}","\n@import '@/scss/base/mixins.scss';\n@import '@/scss/base/typography.scss';\n\n.second-section {\n    display: grid;\n    grid-template-columns: 380px 1fr;\n    gap: 30px;\n    padding-top: 56px;\n    padding-bottom: 68px;\n    padding-left: 20px;\n    padding-right: 20px;\n    max-width: 1420px;\n    margin: 0 auto;\n}\n\n.filters-box {\n    background-color: #141414;\n    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);\n    border-radius: 5px;\n}\n\n.products-box {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, 310px);\n    gap: 20px;\n\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


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
/* harmony import */ var _hooks_App_usePageSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/hooks/App/usePageSettings */ "./src/hooks/App/usePageSettings.ts");
/* harmony import */ var _store_useVuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store/useVuex */ "./src/store/useVuex.ts");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.mjs");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    __name: 'first-section',
    setup(__props, { expose: __expose }) {
        __expose();
        const route = (0,vue_router__WEBPACK_IMPORTED_MODULE_3__.useRoute)();
        const store = (0,_store_useVuex__WEBPACK_IMPORTED_MODULE_2__.useVuex)();
        let { page } = (0,_hooks_App_usePageSettings__WEBPACK_IMPORTED_MODULE_1__.usePageSettings)(store);
        const settings = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(page.value['first-section-settings']);
        const currentSettings = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => settings.value.find(item => item.category[0].slug == route.params.category));
        console.log(currentSettings);
        const __returned__ = { route, store, get page() { return page; }, set page(v) { page = v; }, settings, currentSettings };
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
/* harmony import */ var _axiosWoocomerce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/axiosWoocomerce */ "./src/axiosWoocomerce.ts");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.mjs");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    __name: 'second-section',
    setup(__props, { expose: __expose }) {
        __expose();
        const route = (0,vue_router__WEBPACK_IMPORTED_MODULE_3__.useRoute)();
        let isDataLoaded = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
        let products = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeMount)(async () => {
            products.value = await _axiosWoocomerce__WEBPACK_IMPORTED_MODULE_2__["default"].get('products', {
                params: {
                    per_page: 20,
                    category: 16,
                }
            }).then(res => res.data);
            console.log(products.value);
            isDataLoaded.value = true;
        });
        const __returned__ = { route, get isDataLoaded() { return isDataLoaded; }, set isDataLoaded(v) { isDataLoaded = v; }, get products() { return products; }, set products(v) { products = v; }, Product: _components_Product_vue__WEBPACK_IMPORTED_MODULE_1__["default"] };
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
/* harmony import */ var _hooks_App_usePageSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/hooks/App/usePageSettings */ "./src/hooks/App/usePageSettings.ts");
/* harmony import */ var _sections_katalog_first_section_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/sections/katalog/first-section.vue */ "./src/sections/katalog/first-section.vue");
/* harmony import */ var _sections_katalog_second_section_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/sections/katalog/second-section.vue */ "./src/sections/katalog/second-section.vue");
/* harmony import */ var _store_useVuex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/store/useVuex */ "./src/store/useVuex.ts");







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    __name: 'katalog',
    setup(__props, { expose: __expose }) {
        __expose();
        let isPageDataLoaded = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
        const store = (0,_store_useVuex__WEBPACK_IMPORTED_MODULE_5__.useVuex)();
        let { page } = (0,_hooks_App_usePageSettings__WEBPACK_IMPORTED_MODULE_2__.usePageSettings)(store);
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(async () => {
            page.value = await (0,_api_App_getPageSettings__WEBPACK_IMPORTED_MODULE_1__.getPageSettings)(190); // katalog post id
            isPageDataLoaded.value = true;
        });
        const __returned__ = { get isPageDataLoaded() { return isPageDataLoaded; }, set isPageDataLoaded(v) { isPageDataLoaded = v; }, store, get page() { return page; }, set page(v) { page = v; }, FirstSection: _sections_katalog_first_section_vue__WEBPACK_IMPORTED_MODULE_3__["default"], SecondSection: _sections_katalog_second_section_vue__WEBPACK_IMPORTED_MODULE_4__["default"] };
        Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
        return __returned__;
    }
}));


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
        class: "first-section",
        style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({ background: `url('${$setup.currentSettings.background}'), no-repeat center / cover` })
    }, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
                    src: $setup.currentSettings.image,
                    alt: $setup.currentSettings.title
                }, null, 8 /* PROPS */, _hoisted_3)
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
const _hoisted_2 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", { class: "filters-box" }, null, -1 /* HOISTED */));
const _hoisted_3 = { class: "products-box" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [
        _hoisted_2,
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
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["FirstSection"]),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["SecondSection"])
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3JjLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdC52dWU/YjE5YSIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvc2VjdGlvbnMva2F0YWxvZy9maXJzdC1zZWN0aW9uLnZ1ZT8zZDgwIiwid2VicGFjazovL3NyYy8uL3NyYy9zZWN0aW9ucy9rYXRhbG9nL3NlY29uZC1zZWN0aW9uLnZ1ZT9kNTg4Iiwid2VicGFjazovL3NyYy8uL3NyYy9jb21wb25lbnRzL1Byb2R1Y3QudnVlPzM2MzkiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdC52dWUiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL3NlY3Rpb25zL2thdGFsb2cvZmlyc3Qtc2VjdGlvbi52dWU/NDE1MCIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvc2VjdGlvbnMva2F0YWxvZy9maXJzdC1zZWN0aW9uLnZ1ZSIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvc2VjdGlvbnMva2F0YWxvZy9zZWNvbmQtc2VjdGlvbi52dWU/OTVlYyIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvc2VjdGlvbnMva2F0YWxvZy9zZWNvbmQtc2VjdGlvbi52dWUiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL3ZpZXdzL2thdGFsb2cudnVlP2QzNmMiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL3ZpZXdzL2thdGFsb2cudnVlIiwid2VicGFjazovL3NyYy8uL3NyYy9jb21wb25lbnRzL1Byb2R1Y3QudnVlPzU3ZmYiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL3NlY3Rpb25zL2thdGFsb2cvZmlyc3Qtc2VjdGlvbi52dWU/MjY4ZSIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvc2VjdGlvbnMva2F0YWxvZy9zZWNvbmQtc2VjdGlvbi52dWU/Mzk4MCIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvdmlld3Mva2F0YWxvZy52dWU/NDRhNCIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvYXBpL0FwcC9nZXRQYWdlU2V0dGluZ3MudHMiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL2F4aW9zV29vY29tZXJjZS50cyIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvaG9va3MvQXBwL3VzZVBhZ2VTZXR0aW5ncy50cyIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0LnZ1ZT9jZWZiIiwid2VicGFjazovL3NyYy8uL3NyYy9zZWN0aW9ucy9rYXRhbG9nL2ZpcnN0LXNlY3Rpb24udnVlPzUwYmYiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL3NlY3Rpb25zL2thdGFsb2cvc2Vjb25kLXNlY3Rpb24udnVlPzJjZWUiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL3ZpZXdzL2thdGFsb2cudnVlPzk1MjgiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdC52dWU/YzMzYyIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvc2VjdGlvbnMva2F0YWxvZy9maXJzdC1zZWN0aW9uLnZ1ZT9jNGJhIiwid2VicGFjazovL3NyYy8uL3NyYy9zZWN0aW9ucy9rYXRhbG9nL3NlY29uZC1zZWN0aW9uLnZ1ZT80ODdkIiwid2VicGFjazovL3NyYy8uL3NyYy92aWV3cy9rYXRhbG9nLnZ1ZT83ZDQ3Iiwid2VicGFjazovL3NyYy8uL3NyYy9jb21wb25lbnRzL1Byb2R1Y3QudnVlP2M1MjEiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL3NlY3Rpb25zL2thdGFsb2cvZmlyc3Qtc2VjdGlvbi52dWU/YTA0ZiIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvc2VjdGlvbnMva2F0YWxvZy9zZWNvbmQtc2VjdGlvbi52dWU/NTFjNSIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvdmlld3Mva2F0YWxvZy52dWU/MGExMCIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0LnZ1ZT9jNWE3Iiwid2VicGFjazovL3NyYy8uL3NyYy9zZWN0aW9ucy9rYXRhbG9nL2ZpcnN0LXNlY3Rpb24udnVlPzY1N2QiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL3NlY3Rpb25zL2thdGFsb2cvc2Vjb25kLXNlY3Rpb24udnVlPzY2ZjkiLCJ3ZWJwYWNrOi8vc3JjLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdC52dWU/ZTVlYyIsIndlYnBhY2s6Ly9zcmMvLi9zcmMvc2VjdGlvbnMva2F0YWxvZy9maXJzdC1zZWN0aW9uLnZ1ZT9iNTZhIiwid2VicGFjazovL3NyYy8uL3NyYy9zZWN0aW9ucy9rYXRhbG9nL3NlY29uZC1zZWN0aW9uLnZ1ZT9mMzZiIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAucHJvZHVjdFtkYXRhLXYtM2NmNGVmNmZdIHtcbiAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQxNDE0O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMjBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG4ucHJvZHVjdFtkYXRhLXYtM2NmNGVmNmZdOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCAjZmZmZmZmO1xufVxuLnByb2R1Y3RfX2ltYWdlW2RhdGEtdi0zY2Y0ZWY2Zl0ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb250YWluO1xufVxuLnByb2R1Y3RfX3ByaWNlW2RhdGEtdi0zY2Y0ZWY2Zl0ge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5wcm9kdWN0LWRlc2NyaXB0aW9uW2RhdGEtdi0zY2Y0ZWY2Zl0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cbi5wcm9kdWN0LWRlc2NyaXB0aW9uX19uYW1lW2RhdGEtdi0zY2Y0ZWY2Zl0ge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4ucHJvZHVjdC1kZXNjcmlwdGlvbi1zcGVjc1tkYXRhLXYtM2NmNGVmNmZdIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGdhcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLnNwZWNbZGF0YS12LTNjZjRlZjZmXSB7XG4gIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgcmdiKDUxLCA1MSwgNTEpO1xuICB3aWR0aDogODAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiByZ2IoMjE0LCAyMTMsIDIxMyk7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0LnZ1ZVwiLFwid2VicGFjazovLy4vUHJvZHVjdC52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7RUFDSSwrQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBRUEseUJBQUE7RUFFQSxrQkFBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBRUEsU0FBQTtFQUVBLG9CQUFBO0FDTEo7QURNSTtFQUNJLGVBQUE7RUFDQSw0QkFBQTtBQ0pSO0FET0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDTFI7QURRSTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FDTlI7QURVQTtFQUdJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBRUEsV0FBQTtBQ1ZKO0FEWUk7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDVlI7QURjQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQ1hKO0FEY0E7RUFDSSx5Q0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBRUEsZ0JBQUE7RUFDQSx5QkFBQTtBQ1pKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbi5wcm9kdWN0IHtcXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAyNXB4O1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQxNDE0O1xcblxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGdhcDogMjBweDtcXG5cXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxuICAgICY6aG92ZXJ7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMTBweCAjZmZmZmZmO1xcbiAgICB9XFxuXFxuICAgICZfX2ltYWdle1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xcbiAgICB9XFxuXFxuICAgICZfX3ByaWNle1xcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMHB4O1xcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgfVxcbn1cXG5cXG4ucHJvZHVjdC1kZXNjcmlwdGlvbiB7XFxuXFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICAmX19uYW1lIHtcXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgICAgICBmb250LXNpemU6IDIycHg7XFxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgfVxcbn1cXG5cXG4ucHJvZHVjdC1kZXNjcmlwdGlvbi1zcGVjcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuXFxuLnNwZWMge1xcbiAgICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkIHJnYig1MSwgNTEsIDUxKTtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcblxcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBjb2xvcjogcmdiKDIxNCwgMjEzLCAyMTMpO1xcbn1cXG5cIixcIi5wcm9kdWN0IHtcXG4gIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbiAgcGFkZGluZy10b3A6IDE1cHg7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDI1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQxNDE0O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxufVxcbi5wcm9kdWN0OmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4ICNmZmZmZmY7XFxufVxcbi5wcm9kdWN0X19pbWFnZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XFxufVxcbi5wcm9kdWN0X19wcmljZSB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LXdlaWdodDogNTAwcHg7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG5cXG4ucHJvZHVjdC1kZXNjcmlwdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLnByb2R1Y3QtZGVzY3JpcHRpb25fX25hbWUge1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4ucHJvZHVjdC1kZXNjcmlwdGlvbi1zcGVjcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGdhcDogMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuXFxuLnNwZWMge1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCByZ2IoNTEsIDUxLCA1MSk7XFxuICB3aWR0aDogODAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZy1ib3R0b206IDVweDtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBjb2xvcjogcmdiKDIxNCwgMjEzLCAyMTMpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC50aXRsZVtkYXRhLXYtNjgyMmZkZDJdIHtcbiAgY29sb3I6ICNGRkY7XG4gIGZvbnQtZmFtaWx5OiBSdWJpaztcbiAgZm9udC1zaXplOiA0cmVtO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiAxLjZweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luLWJvdHRvbTogMjFweDtcbn1cbi5maXJzdC1zZWN0aW9uW2RhdGEtdi02ODIyZmRkMl0ge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmZpcnN0LXNlY3Rpb24tY29udGFpbmVyW2RhdGEtdi02ODIyZmRkMl0ge1xuICBwYWRkaW5nLXRvcDogMTUwcHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogOGZyIDZmcjtcbiAgZ2FwOiA4MHB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcbi5maXJzdC1zZWN0aW9uLWNvbnRhaW5lcltkYXRhLXYtNjgyMmZkZDJdIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBwYWRkaW5nLXRvcDogOTBweDtcbiAgICBnYXA6IDBweDtcbn1cbn1cbi5pbWFnZS1ib3hbZGF0YS12LTY4MjJmZGQyXSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4uaW1hZ2UtYm94W2RhdGEtdi02ODIyZmRkMl0ge1xuICAgIHRvcDogMTVweDtcbn1cbn1cbi5pbWFnZS1ib3ggaW1nW2RhdGEtdi02ODIyZmRkMl0ge1xuICB3aWR0aDogMTAwJTtcbn1cbi5kZXNjcmlwdGlvbi1ib3hbZGF0YS12LTY4MjJmZGQyXSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcbi5kZXNjcmlwdGlvbi1ib3hbZGF0YS12LTY4MjJmZGQyXSB7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUsIDE1LCAxNSk7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgei1pbmRleDogMTtcbn1cbn1cbi5kZXNjcmlwdGlvbi1ib3hfX3RpdGxlW2RhdGEtdi02ODIyZmRkMl0ge1xuICBtYXJnaW4tYm90dG9tOiAzNXB4O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Njc3MvYmFzZS90eXBvZ3JhcGh5LnNjc3NcIixcIndlYnBhY2s6Ly8uL2ZpcnN0LXNlY3Rpb24udnVlXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2VjdGlvbnMva2F0YWxvZy9maXJzdC1zZWN0aW9uLnZ1ZVwiLFwid2VicGFjazovLy4vc3JjL3Njc3MvYmFzZS9taXhpbnMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUNDSjtBQ05BO0VBQ0ksZ0JBQUE7QURTSjtBQ05BO0VBSUksa0JBQUE7RUFFQSxhQUFBO0VBQ0EsOEJBQUE7RUFRQSxTQUFBO0FERko7QUVSSTtBRExKO0lBVVEsMEJBQUE7SUFDQSxpQkFBQTtJQUNBLFFBQUE7QURPTjtBQUNGO0FDRkE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FES0o7QUVyQkk7QURhSjtJQU1RLFNBQUE7QURNTjtBQUNGO0FDSkk7RUFDSSxXQUFBO0FETVI7QUNEQTtFQUVJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FER0o7QUVuQ0k7QUQ0Qko7SUFPUSxtQkFBQTtJQUNBLGlDQUFBO0lBQ0EsYUFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxVQUFBO0FESU47QUFDRjtBQ0ZJO0VBQ0ksbUJBQUE7QURJUlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIudGl0bGUge1xcbiAgICBjb2xvcjogI0ZGRjtcXG4gICAgZm9udC1mYW1pbHk6IFJ1YmlrO1xcbiAgICBmb250LXNpemU6IDRyZW07XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuNnB4O1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMXB4O1xcbn1cIixcIi50aXRsZSB7XFxuICBjb2xvcjogI0ZGRjtcXG4gIGZvbnQtZmFtaWx5OiBSdWJpaztcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNnB4O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIG1hcmdpbi1ib3R0b206IDIxcHg7XFxufVxcblxcbi5maXJzdC1zZWN0aW9uIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5maXJzdC1zZWN0aW9uLWNvbnRhaW5lciB7XFxuICBwYWRkaW5nLXRvcDogMTUwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA4ZnIgNmZyO1xcbiAgZ2FwOiA4MHB4O1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xcbiAgLmZpcnN0LXNlY3Rpb24tY29udGFpbmVyIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIHBhZGRpbmctdG9wOiA5MHB4O1xcbiAgICBnYXA6IDBweDtcXG4gIH1cXG59XFxuXFxuLmltYWdlLWJveCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDEwcHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcXG4gIC5pbWFnZS1ib3gge1xcbiAgICB0b3A6IDE1cHg7XFxuICB9XFxufVxcbi5pbWFnZS1ib3ggaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24tYm94IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XFxuICAuZGVzY3JpcHRpb24tYm94IHtcXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1LCAxNSwgMTUpO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB6LWluZGV4OiAxO1xcbiAgfVxcbn1cXG4uZGVzY3JpcHRpb24tYm94X190aXRsZSB7XFxuICBtYXJnaW4tYm90dG9tOiAzNXB4O1xcbn1cIixcIlxcbkBpbXBvcnQgJ0Avc2Nzcy9iYXNlL21peGlucy5zY3NzJztcXG5AaW1wb3J0ICdAL3Njc3MvYmFzZS90eXBvZ3JhcGh5LnNjc3MnO1xcblxcbi5maXJzdC1zZWN0aW9uIHtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmZpcnN0LXNlY3Rpb24tY29udGFpbmVyIHtcXG4gICAgLy8gbWF4LXdpZHRoOiAxNjAwcHg7XFxuICAgIC8vIG1hcmdpbjogMCBhdXRvO1xcbiAgICAvLyBwYWRkaW5nOiAwIDQwcHg7XFxuICAgIHBhZGRpbmctdG9wOiAxNTBweDtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA4ZnIgNmZyO1xcblxcbiAgICBAaW5jbHVkZSB0YWJsZSB7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgICAgIHBhZGRpbmctdG9wOiA5MHB4O1xcbiAgICAgICAgZ2FwOiAwcHg7XFxuICAgIH1cXG5cXG4gICAgZ2FwOiA4MHB4O1xcbn1cXG5cXG4uaW1hZ2UtYm94IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDEwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICBAaW5jbHVkZSB0YWJsZSB7XFxuICAgICAgICB0b3A6IDE1cHg7XFxuICAgIH1cXG5cXG4gICAgaW1nIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICB9XFxufVxcblxcbi5kZXNjcmlwdGlvbi1ib3gge1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG5cXG4gICAgQGluY2x1ZGUgdGFibGUge1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNSwgMTUsIDE1KTtcXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgICAgICBwYWRkaW5nLXRvcDogMzBweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgIHotaW5kZXg6IDE7XFxuICAgIH1cXG5cXG4gICAgJl9fdGl0bGUge1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzVweDtcXG4gICAgfVxcblxcbiAgICAmX190ZXh0IHt9XFxufVxcblwiLFwiQG1peGluIHBob25lIHtcXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcXG4gICAgICAgIEBjb250ZW50O1xcbiAgICB9XFxufVxcblxcbkBtaXhpbiBtaW4tdGFibGUge1xcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgICAgICAgQGNvbnRlbnQ7XFxuICAgIH1cXG59XFxuXFxuQG1peGluIHRhYmxlIHtcXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcXG4gICAgICAgIEBjb250ZW50O1xcbiAgICB9XFxufVxcblxcbkBtaXhpbiBsYXB0b3Age1xcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTAwcHgpIHtcXG4gICAgICAgIEBjb250ZW50O1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnRpdGxlW2RhdGEtdi0wMTRmNjJmMl0ge1xuICBjb2xvcjogI0ZGRjtcbiAgZm9udC1mYW1pbHk6IFJ1YmlrO1xuICBmb250LXNpemU6IDRyZW07XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW4tYm90dG9tOiAyMXB4O1xufVxuLnNlY29uZC1zZWN0aW9uW2RhdGEtdi0wMTRmNjJmMl0ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDM4MHB4IDFmcjtcbiAgZ2FwOiAzMHB4O1xuICBwYWRkaW5nLXRvcDogNTZweDtcbiAgcGFkZGluZy1ib3R0b206IDY4cHg7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgbWF4LXdpZHRoOiAxNDIwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLmZpbHRlcnMtYm94W2RhdGEtdi0wMTRmNjJmMl0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQxNDE0O1xuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLnByb2R1Y3RzLWJveFtkYXRhLXYtMDE0ZjYyZjJdIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIDMxMHB4KTtcbiAgZ2FwOiAyMHB4O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Njc3MvYmFzZS90eXBvZ3JhcGh5LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NlY29uZC1zZWN0aW9uLnZ1ZVwiLFwid2VicGFjazovLy4vc3JjL3NlY3Rpb25zL2thdGFsb2cvc2Vjb25kLXNlY3Rpb24udnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQ0NKO0FDTkE7RUFDSSxhQUFBO0VBQ0EsZ0NBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QURTSjtBQ05BO0VBQ0kseUJBQUE7RUFDQSwrQ0FBQTtFQUNBLGtCQUFBO0FEU0o7QUNOQTtFQUNJLGFBQUE7RUFDQSw4Q0FBQTtFQUNBLFNBQUE7QURTSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIudGl0bGUge1xcbiAgICBjb2xvcjogI0ZGRjtcXG4gICAgZm9udC1mYW1pbHk6IFJ1YmlrO1xcbiAgICBmb250LXNpemU6IDRyZW07XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuNnB4O1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMXB4O1xcbn1cIixcIi50aXRsZSB7XFxuICBjb2xvcjogI0ZGRjtcXG4gIGZvbnQtZmFtaWx5OiBSdWJpaztcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNnB4O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIG1hcmdpbi1ib3R0b206IDIxcHg7XFxufVxcblxcbi5zZWNvbmQtc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzODBweCAxZnI7XFxuICBnYXA6IDMwcHg7XFxuICBwYWRkaW5nLXRvcDogNTZweDtcXG4gIHBhZGRpbmctYm90dG9tOiA2OHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgcGFkZGluZy1yaWdodDogMjBweDtcXG4gIG1heC13aWR0aDogMTQyMHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi5maWx0ZXJzLWJveCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQxNDE0O1xcbiAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5wcm9kdWN0cy1ib3gge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCAzMTBweCk7XFxuICBnYXA6IDIwcHg7XFxufVwiLFwiXFxuQGltcG9ydCAnQC9zY3NzL2Jhc2UvbWl4aW5zLnNjc3MnO1xcbkBpbXBvcnQgJ0Avc2Nzcy9iYXNlL3R5cG9ncmFwaHkuc2Nzcyc7XFxuXFxuLnNlY29uZC1zZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzODBweCAxZnI7XFxuICAgIGdhcDogMzBweDtcXG4gICAgcGFkZGluZy10b3A6IDU2cHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiA2OHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxuICAgIG1heC13aWR0aDogMTQyMHB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLmZpbHRlcnMtYm94IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE0MTQxNDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnByb2R1Y3RzLWJveCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCAzMTBweCk7XFxuICAgIGdhcDogMjBweDtcXG5cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsImltcG9ydCB7IGRlZmluZUNvbXBvbmVudCBhcyBfZGVmaW5lQ29tcG9uZW50IH0gZnJvbSAndnVlJ1xuaW1wb3J0IHsgSVByb2R1Y3QgfSBmcm9tICdAL3R5cGVzL1Byb2R1Y3QnO1xuaW1wb3J0IHsgY29tcHV0ZWQgfSBmcm9tICd2dWUnO1xuXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gICAgaW1hZ2VTcmM6IHN0cmluZztcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgZ3JvdXBlZF9wcm9kdWN0czogSVByb2R1Y3RbXTtcbiAgICBwcmljZTogc3RyaW5nIHwgbnVtYmVyO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IC8qI19fUFVSRV9fKi9fZGVmaW5lQ29tcG9uZW50KHtcbiAgX19uYW1lOiAnUHJvZHVjdCcsXG4gIHByb3BzOiB7XG4gICAgaW1hZ2VTcmM6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICAgIG5hbWU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICAgIGdyb3VwZWRfcHJvZHVjdHM6IHsgdHlwZTogQXJyYXksIHJlcXVpcmVkOiB0cnVlIH0sXG4gICAgcHJpY2U6IHsgdHlwZTogW1N0cmluZywgTnVtYmVyXSwgcmVxdWlyZWQ6IHRydWUgfVxuICB9LFxuICBzZXR1cChfX3Byb3BzOiBhbnksIHsgZXhwb3NlOiBfX2V4cG9zZSB9KSB7XG4gIF9fZXhwb3NlKCk7XG5cbmNvbnN0IHByb3BzID0gX19wcm9wc1xuXG5jb25zdCBuZWNlc3NhcnlTcGVjc1NsdWdzID0gW1xuICAgICdjcHUnLCAnZ3B1JywgJ3JhbSdcbl1cbmNvbnN0IGdyb3VwcGVkUHJvZHVjdE5hbWVzID0gY29tcHV0ZWQoKCkgPT4ge1xuXG4gICAgbGV0IGZpbHRlcmVkQXJyYXkgPSBwcm9wcy5ncm91cGVkX3Byb2R1Y3RzLmZpbHRlcihpdGVtID0+IGl0ZW0uY2F0ZWdvcmllcy5maW5kKGNhdGVnb3J5ID0+IG5lY2Vzc2FyeVNwZWNzU2x1Z3MuaW5jbHVkZXMoY2F0ZWdvcnkuc2x1ZykpKVxuXG4gICAgcmV0dXJuIGZpbHRlcmVkQXJyYXlcbn0pXG5cbmNvbnN0IHByb2R1Y3RDcHUgPSBjb21wdXRlZCgoKSA9PiBncm91cHBlZFByb2R1Y3ROYW1lcy52YWx1ZS5maW5kKGl0ZW0gPT4gaXRlbS5jYXRlZ29yaWVzLmZpbmQoY2F0ZWdvcnkgPT4gY2F0ZWdvcnkuc2x1ZyA9PSAnY3B1JykpKVxuXG5jb25zdCBwcm9kdWN0R3B1ID0gY29tcHV0ZWQoKCkgPT4gZ3JvdXBwZWRQcm9kdWN0TmFtZXMudmFsdWUuZmluZChpdGVtID0+IGl0ZW0uY2F0ZWdvcmllcy5maW5kKGNhdGVnb3J5ID0+IGNhdGVnb3J5LnNsdWcgPT0gJ2dwdScpKSlcblxuY29uc3QgcHJvZHVjdFJhbSA9IGNvbXB1dGVkKCgpID0+IGdyb3VwcGVkUHJvZHVjdE5hbWVzLnZhbHVlLmZpbmQoaXRlbSA9PiBpdGVtLmNhdGVnb3JpZXMuZmluZChjYXRlZ29yeSA9PiBjYXRlZ29yeS5zbHVnID09ICdyYW0nKSkpXG5cblxuY29uc3QgX19yZXR1cm5lZF9fID0geyBwcm9wcywgbmVjZXNzYXJ5U3BlY3NTbHVncywgZ3JvdXBwZWRQcm9kdWN0TmFtZXMsIHByb2R1Y3RDcHUsIHByb2R1Y3RHcHUsIHByb2R1Y3RSYW0gfVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KF9fcmV0dXJuZWRfXywgJ19faXNTY3JpcHRTZXR1cCcsIHsgZW51bWVyYWJsZTogZmFsc2UsIHZhbHVlOiB0cnVlIH0pXG5yZXR1cm4gX19yZXR1cm5lZF9fXG59XG5cbn0pIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0XCI+XG4gICAgICAgIDxpbWcgY2xhc3M9XCJwcm9kdWN0X19pbWFnZVwiIDpzcmM9XCJpbWFnZVNyY1wiIDphbHQ9XCJuYW1lXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0LWRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICA8cCBjbGFzcz1cInByb2R1Y3QtZGVzY3JpcHRpb25fX25hbWVcIj57eyBuYW1lIH19PC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3QtZGVzY3JpcHRpb24tc3BlY3NcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3BlY1wiPlxuICAgICAgICAgICAgICAgICAgICA8cD57eyBwcm9kdWN0Q3B1ID8gcHJvZHVjdENwdS5jZnMuc2hvcnRseV9uYW1lIDogJ9C+0YLRgdGD0YLRgdCy0YPQtdGCJyB9fTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3BlY1wiPlxuICAgICAgICAgICAgICAgICAgICA8cD57eyBwcm9kdWN0R3B1ID8gcHJvZHVjdEdwdS5jZnMuc2hvcnRseV9uYW1lIDogJ9C+0YLRgdGD0YHRgtCy0YPQtdGCJyB9fTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3BlY1wiPlxuICAgICAgICAgICAgICAgICAgICA8cD57eyBwcm9kdWN0UmFtID8gcHJvZHVjdFJhbS5jZnMuc2hvcnRseV9uYW1lIDogJ9C+0YLRgdGD0YHRgtCy0YPQtdGCJyB9fTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHAgY2xhc3M9XCJwcm9kdWN0X19wcmljZVwiPnt7IHByaWNlIH19IFJVQjwvcD5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBJUHJvZHVjdCB9IGZyb20gJ0AvdHlwZXMvUHJvZHVjdCc7XG5pbXBvcnQgeyBjb21wdXRlZCB9IGZyb20gJ3Z1ZSc7XG5cblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgICBpbWFnZVNyYzogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBncm91cGVkX3Byb2R1Y3RzOiBJUHJvZHVjdFtdO1xuICAgIHByaWNlOiBzdHJpbmcgfCBudW1iZXI7XG59XG5cbmNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHM8UHJvcHM+KClcblxuY29uc3QgbmVjZXNzYXJ5U3BlY3NTbHVncyA9IFtcbiAgICAnY3B1JywgJ2dwdScsICdyYW0nXG5dXG5jb25zdCBncm91cHBlZFByb2R1Y3ROYW1lcyA9IGNvbXB1dGVkKCgpID0+IHtcblxuICAgIGxldCBmaWx0ZXJlZEFycmF5ID0gcHJvcHMuZ3JvdXBlZF9wcm9kdWN0cy5maWx0ZXIoaXRlbSA9PiBpdGVtLmNhdGVnb3JpZXMuZmluZChjYXRlZ29yeSA9PiBuZWNlc3NhcnlTcGVjc1NsdWdzLmluY2x1ZGVzKGNhdGVnb3J5LnNsdWcpKSlcblxuICAgIHJldHVybiBmaWx0ZXJlZEFycmF5XG59KVxuXG5jb25zdCBwcm9kdWN0Q3B1ID0gY29tcHV0ZWQoKCkgPT4gZ3JvdXBwZWRQcm9kdWN0TmFtZXMudmFsdWUuZmluZChpdGVtID0+IGl0ZW0uY2F0ZWdvcmllcy5maW5kKGNhdGVnb3J5ID0+IGNhdGVnb3J5LnNsdWcgPT0gJ2NwdScpKSlcblxuY29uc3QgcHJvZHVjdEdwdSA9IGNvbXB1dGVkKCgpID0+IGdyb3VwcGVkUHJvZHVjdE5hbWVzLnZhbHVlLmZpbmQoaXRlbSA9PiBpdGVtLmNhdGVnb3JpZXMuZmluZChjYXRlZ29yeSA9PiBjYXRlZ29yeS5zbHVnID09ICdncHUnKSkpXG5cbmNvbnN0IHByb2R1Y3RSYW0gPSBjb21wdXRlZCgoKSA9PiBncm91cHBlZFByb2R1Y3ROYW1lcy52YWx1ZS5maW5kKGl0ZW0gPT4gaXRlbS5jYXRlZ29yaWVzLmZpbmQoY2F0ZWdvcnkgPT4gY2F0ZWdvcnkuc2x1ZyA9PSAncmFtJykpKVxuXG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxuLnByb2R1Y3Qge1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyNXB4O1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE0MTQxNDtcblxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgZ2FwOiAyMHB4O1xuXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgJjpob3ZlcntcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgMTBweCAjZmZmZmZmO1xuICAgIH1cblxuICAgICZfX2ltYWdle1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgIH1cblxuICAgICZfX3ByaWNle1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDBweDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB9XG59XG5cbi5wcm9kdWN0LWRlc2NyaXB0aW9uIHtcblxuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICB3aWR0aDogMTAwJTtcblxuICAgICZfX25hbWUge1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfVxufVxuXG4ucHJvZHVjdC1kZXNjcmlwdGlvbi1zcGVjcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZ2FwOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLnNwZWMge1xuICAgIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgcmdiKDUxLCA1MSwgNTEpO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG5cbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGNvbG9yOiByZ2IoMjE0LCAyMTMsIDIxMyk7XG59XG48L3N0eWxlPiIsImltcG9ydCB7IGRlZmluZUNvbXBvbmVudCBhcyBfZGVmaW5lQ29tcG9uZW50IH0gZnJvbSAndnVlJ1xuaW1wb3J0IHsgdXNlUGFnZVNldHRpbmdzIH0gZnJvbSAnQC9ob29rcy9BcHAvdXNlUGFnZVNldHRpbmdzJztcbmltcG9ydCB7IHVzZVZ1ZXggfSBmcm9tICdAL3N0b3JlL3VzZVZ1ZXgnO1xuaW1wb3J0IHsgSUZpcnN0U2VjdGlvblNldHRpbmdzIH0gZnJvbSAnQC90eXBlcy9LYXRhbG9nJztcbmltcG9ydCB7IFJlZiwgY29tcHV0ZWQsIHJlZiB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgeyB1c2VSb3V0ZSB9IGZyb20gJ3Z1ZS1yb3V0ZXInO1xuXG5cbmV4cG9ydCBkZWZhdWx0IC8qI19fUFVSRV9fKi9fZGVmaW5lQ29tcG9uZW50KHtcbiAgX19uYW1lOiAnZmlyc3Qtc2VjdGlvbicsXG4gIHNldHVwKF9fcHJvcHMsIHsgZXhwb3NlOiBfX2V4cG9zZSB9KSB7XG4gIF9fZXhwb3NlKCk7XG5cblxuY29uc3Qgcm91dGUgPSB1c2VSb3V0ZSgpO1xuXG5jb25zdCBzdG9yZSA9IHVzZVZ1ZXgoKVxuXG5sZXQgeyBwYWdlIH0gPSB1c2VQYWdlU2V0dGluZ3Moc3RvcmUpXG5cbmNvbnN0IHNldHRpbmdzID0gcmVmKHBhZ2UudmFsdWVbJ2ZpcnN0LXNlY3Rpb24tc2V0dGluZ3MnXSkgYXMgUmVmPElGaXJzdFNlY3Rpb25TZXR0aW5nc1tdPlxuXG5jb25zdCBjdXJyZW50U2V0dGluZ3MgPSBjb21wdXRlZCgoKSA9PiBzZXR0aW5ncy52YWx1ZS5maW5kKGl0ZW0gPT4gaXRlbS5jYXRlZ29yeVswXS5zbHVnID09IHJvdXRlLnBhcmFtcy5jYXRlZ29yeSkpXG5cblxuY29uc29sZS5sb2coY3VycmVudFNldHRpbmdzKTtcblxuY29uc3QgX19yZXR1cm5lZF9fID0geyByb3V0ZSwgc3RvcmUsIGdldCBwYWdlKCkgeyByZXR1cm4gcGFnZSB9LCBzZXQgcGFnZSh2KSB7IHBhZ2UgPSB2IH0sIHNldHRpbmdzLCBjdXJyZW50U2V0dGluZ3MgfVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KF9fcmV0dXJuZWRfXywgJ19faXNTY3JpcHRTZXR1cCcsIHsgZW51bWVyYWJsZTogZmFsc2UsIHZhbHVlOiB0cnVlIH0pXG5yZXR1cm4gX19yZXR1cm5lZF9fXG59XG5cbn0pIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJmaXJzdC1zZWN0aW9uXCIgOnN0eWxlPVwieyBiYWNrZ3JvdW5kOiBgdXJsKCcke2N1cnJlbnRTZXR0aW5ncy5iYWNrZ3JvdW5kfScpLCBuby1yZXBlYXQgY2VudGVyIC8gY292ZXJgIH1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZpcnN0LXNlY3Rpb24tY29udGFpbmVyIGNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImltYWdlLWJveFwiPlxuICAgICAgICAgICAgICAgIDxpbWcgOnNyYz1cImN1cnJlbnRTZXR0aW5ncy5pbWFnZVwiIDphbHQ9XCJjdXJyZW50U2V0dGluZ3MudGl0bGVcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlc2NyaXB0aW9uLWJveFwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZGVzY3JpcHRpb24tYm94X190aXRsZSB0aXRsZVwiPnt7IGN1cnJlbnRTZXR0aW5ncy50aXRsZSB9fTwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImRlc2NyaXB0aW9uLWJveF9fdGV4dFwiPnt7IGN1cnJlbnRTZXR0aW5ncy50ZXh0IH19PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cblxuaW1wb3J0IHsgdXNlUGFnZVNldHRpbmdzIH0gZnJvbSAnQC9ob29rcy9BcHAvdXNlUGFnZVNldHRpbmdzJztcbmltcG9ydCB7IHVzZVZ1ZXggfSBmcm9tICdAL3N0b3JlL3VzZVZ1ZXgnO1xuaW1wb3J0IHsgSUZpcnN0U2VjdGlvblNldHRpbmdzIH0gZnJvbSAnQC90eXBlcy9LYXRhbG9nJztcbmltcG9ydCB7IFJlZiwgY29tcHV0ZWQsIHJlZiB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgeyB1c2VSb3V0ZSB9IGZyb20gJ3Z1ZS1yb3V0ZXInO1xuXG5jb25zdCByb3V0ZSA9IHVzZVJvdXRlKCk7XG5cbmNvbnN0IHN0b3JlID0gdXNlVnVleCgpXG5cbmxldCB7IHBhZ2UgfSA9IHVzZVBhZ2VTZXR0aW5ncyhzdG9yZSlcblxuY29uc3Qgc2V0dGluZ3MgPSByZWYocGFnZS52YWx1ZVsnZmlyc3Qtc2VjdGlvbi1zZXR0aW5ncyddKSBhcyBSZWY8SUZpcnN0U2VjdGlvblNldHRpbmdzW10+XG5cbmNvbnN0IGN1cnJlbnRTZXR0aW5ncyA9IGNvbXB1dGVkKCgpID0+IHNldHRpbmdzLnZhbHVlLmZpbmQoaXRlbSA9PiBpdGVtLmNhdGVnb3J5WzBdLnNsdWcgPT0gcm91dGUucGFyYW1zLmNhdGVnb3J5KSlcblxuXG5jb25zb2xlLmxvZyhjdXJyZW50U2V0dGluZ3MpO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cbkBpbXBvcnQgJ0Avc2Nzcy9iYXNlL21peGlucy5zY3NzJztcbkBpbXBvcnQgJ0Avc2Nzcy9iYXNlL3R5cG9ncmFwaHkuc2Nzcyc7XG5cbi5maXJzdC1zZWN0aW9uIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uZmlyc3Qtc2VjdGlvbi1jb250YWluZXIge1xuICAgIC8vIG1heC13aWR0aDogMTYwMHB4O1xuICAgIC8vIG1hcmdpbjogMCBhdXRvO1xuICAgIC8vIHBhZGRpbmc6IDAgNDBweDtcbiAgICBwYWRkaW5nLXRvcDogMTUwcHg7XG5cbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogOGZyIDZmcjtcblxuICAgIEBpbmNsdWRlIHRhYmxlIHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgICAgIHBhZGRpbmctdG9wOiA5MHB4O1xuICAgICAgICBnYXA6IDBweDtcbiAgICB9XG5cbiAgICBnYXA6IDgwcHg7XG59XG5cbi5pbWFnZS1ib3gge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDEwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICBAaW5jbHVkZSB0YWJsZSB7XG4gICAgICAgIHRvcDogMTVweDtcbiAgICB9XG5cbiAgICBpbWcge1xuICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgIH1cbn1cblxuLmRlc2NyaXB0aW9uLWJveCB7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cbiAgICBAaW5jbHVkZSB0YWJsZSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNSwgMTUsIDE1KTtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICB9XG5cbiAgICAmX190aXRsZSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDM1cHg7XG4gICAgfVxuXG4gICAgJl9fdGV4dCB7fVxufVxuPC9zdHlsZT4iLCJpbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgYXMgX2RlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSdcbmltcG9ydCBQcm9kdWN0IGZyb20gJ0AvY29tcG9uZW50cy9Qcm9kdWN0LnZ1ZSc7XG5pbXBvcnQgV09PIGZyb20gJ0AvYXhpb3NXb29jb21lcmNlJ1xuaW1wb3J0IHsgUmVmLCBvbkJlZm9yZU1vdW50LCBvbk1vdW50ZWQsIHJlZiB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgeyBJR3JvdXBwZWRQcm9kdWN0IH0gZnJvbSAnQC90eXBlcy9Qcm9kdWN0JztcbmltcG9ydCB7IHVzZVJvdXRlIH0gZnJvbSAndnVlLXJvdXRlcic7XG5cblxuZXhwb3J0IGRlZmF1bHQgLyojX19QVVJFX18qL19kZWZpbmVDb21wb25lbnQoe1xuICBfX25hbWU6ICdzZWNvbmQtc2VjdGlvbicsXG4gIHNldHVwKF9fcHJvcHMsIHsgZXhwb3NlOiBfX2V4cG9zZSB9KSB7XG4gIF9fZXhwb3NlKCk7XG5cbmNvbnN0IHJvdXRlID0gdXNlUm91dGUoKTtcblxubGV0IGlzRGF0YUxvYWRlZDogUmVmPGJvb2xlYW4+ID0gcmVmKGZhbHNlKVxuXG5sZXQgcHJvZHVjdHM6IFJlZjxBcnJheTxJR3JvdXBwZWRQcm9kdWN0Pj4gPSByZWYoW10pXG5vbkJlZm9yZU1vdW50KGFzeW5jICgpID0+IHtcbiAgICBwcm9kdWN0cy52YWx1ZSA9IGF3YWl0IFdPTy5nZXQoJ3Byb2R1Y3RzJywge1xuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgIHBlcl9wYWdlOiAyMCxcbiAgICAgICAgICAgIGNhdGVnb3J5OiAxNixcbiAgICAgICAgfVxuICAgIH0pLnRoZW4ocmVzID0+IHJlcy5kYXRhKVxuXG4gICAgY29uc29sZS5sb2cocHJvZHVjdHMudmFsdWUpXG5cbiAgICBpc0RhdGFMb2FkZWQudmFsdWUgPSB0cnVlXG59KVxuXG5cbmNvbnN0IF9fcmV0dXJuZWRfXyA9IHsgcm91dGUsIGdldCBpc0RhdGFMb2FkZWQoKSB7IHJldHVybiBpc0RhdGFMb2FkZWQgfSwgc2V0IGlzRGF0YUxvYWRlZCh2KSB7IGlzRGF0YUxvYWRlZCA9IHYgfSwgZ2V0IHByb2R1Y3RzKCkgeyByZXR1cm4gcHJvZHVjdHMgfSwgc2V0IHByb2R1Y3RzKHYpIHsgcHJvZHVjdHMgPSB2IH0sIFByb2R1Y3QgfVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KF9fcmV0dXJuZWRfXywgJ19faXNTY3JpcHRTZXR1cCcsIHsgZW51bWVyYWJsZTogZmFsc2UsIHZhbHVlOiB0cnVlIH0pXG5yZXR1cm4gX19yZXR1cm5lZF9fXG59XG5cbn0pIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJzZWNvbmQtc2VjdGlvblwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsdGVycy1ib3hcIj5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3RzLWJveFwiPlxuICAgICAgICAgICAgPFByb2R1Y3Qgdi1pZj1cImlzRGF0YUxvYWRlZFwiIHYtZm9yPVwicHJvZHVjdCBpbiBwcm9kdWN0c1wiIDprZXk9XCJwcm9kdWN0LmlkXCIgOmltYWdlLXNyYz1cInByb2R1Y3QuaW1hZ2VzWzBdLnNyY1wiXG4gICAgICAgICAgICAgICAgOm5hbWU9XCJwcm9kdWN0Lm5hbWVcIiA6Z3JvdXBlZF9wcm9kdWN0cz1cInByb2R1Y3QuZ3JvdXBlZF9wcm9kdWN0c1wiIDpwcmljZT1cInByb2R1Y3QucHJpY2VcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgUHJvZHVjdCBmcm9tICdAL2NvbXBvbmVudHMvUHJvZHVjdC52dWUnO1xuaW1wb3J0IFdPTyBmcm9tICdAL2F4aW9zV29vY29tZXJjZSdcbmltcG9ydCB7IFJlZiwgb25CZWZvcmVNb3VudCwgb25Nb3VudGVkLCByZWYgfSBmcm9tICd2dWUnO1xuaW1wb3J0IHsgSUdyb3VwcGVkUHJvZHVjdCB9IGZyb20gJ0AvdHlwZXMvUHJvZHVjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZSB9IGZyb20gJ3Z1ZS1yb3V0ZXInO1xuXG5jb25zdCByb3V0ZSA9IHVzZVJvdXRlKCk7XG5cbmxldCBpc0RhdGFMb2FkZWQ6IFJlZjxib29sZWFuPiA9IHJlZihmYWxzZSlcblxubGV0IHByb2R1Y3RzOiBSZWY8QXJyYXk8SUdyb3VwcGVkUHJvZHVjdD4+ID0gcmVmKFtdKVxub25CZWZvcmVNb3VudChhc3luYyAoKSA9PiB7XG4gICAgcHJvZHVjdHMudmFsdWUgPSBhd2FpdCBXT08uZ2V0KCdwcm9kdWN0cycsIHtcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICBwZXJfcGFnZTogMjAsXG4gICAgICAgICAgICBjYXRlZ29yeTogMTYsXG4gICAgICAgIH1cbiAgICB9KS50aGVuKHJlcyA9PiByZXMuZGF0YSlcblxuICAgIGNvbnNvbGUubG9nKHByb2R1Y3RzLnZhbHVlKVxuXG4gICAgaXNEYXRhTG9hZGVkLnZhbHVlID0gdHJ1ZVxufSlcblxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cbkBpbXBvcnQgJ0Avc2Nzcy9iYXNlL21peGlucy5zY3NzJztcbkBpbXBvcnQgJ0Avc2Nzcy9iYXNlL3R5cG9ncmFwaHkuc2Nzcyc7XG5cbi5zZWNvbmQtc2VjdGlvbiB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDM4MHB4IDFmcjtcbiAgICBnYXA6IDMwcHg7XG4gICAgcGFkZGluZy10b3A6IDU2cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDY4cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgbWF4LXdpZHRoOiAxNDIwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5maWx0ZXJzLWJveCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE0MTQxNDtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5wcm9kdWN0cy1ib3gge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIDMxMHB4KTtcbiAgICBnYXA6IDIwcHg7XG5cbn1cbjwvc3R5bGU+IiwiaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IGFzIF9kZWZpbmVDb21wb25lbnQgfSBmcm9tICd2dWUnXG5pbXBvcnQgeyBnZXRQYWdlU2V0dGluZ3MgfSBmcm9tICdAL2FwaS9BcHAvZ2V0UGFnZVNldHRpbmdzJztcbmltcG9ydCB7IHVzZVBhZ2VTZXR0aW5ncyB9IGZyb20gJ0AvaG9va3MvQXBwL3VzZVBhZ2VTZXR0aW5ncyc7XG5pbXBvcnQgRmlyc3RTZWN0aW9uIGZyb20gJ0Avc2VjdGlvbnMva2F0YWxvZy9maXJzdC1zZWN0aW9uLnZ1ZSc7XG5pbXBvcnQgU2Vjb25kU2VjdGlvbiBmcm9tICdAL3NlY3Rpb25zL2thdGFsb2cvc2Vjb25kLXNlY3Rpb24udnVlJztcbmltcG9ydCB7IHVzZVZ1ZXggfSBmcm9tICdAL3N0b3JlL3VzZVZ1ZXgnO1xuaW1wb3J0IHsgUmVmLCBvbk1vdW50ZWQsIHJlZiB9IGZyb20gJ3Z1ZSc7XG5cblxuZXhwb3J0IGRlZmF1bHQgLyojX19QVVJFX18qL19kZWZpbmVDb21wb25lbnQoe1xuICBfX25hbWU6ICdrYXRhbG9nJyxcbiAgc2V0dXAoX19wcm9wcywgeyBleHBvc2U6IF9fZXhwb3NlIH0pIHtcbiAgX19leHBvc2UoKTtcblxubGV0IGlzUGFnZURhdGFMb2FkZWQ6IFJlZjxib29sZWFuPiA9IHJlZihmYWxzZSlcblxuXG5cbmNvbnN0IHN0b3JlID0gdXNlVnVleCgpXG5cbmxldCB7IHBhZ2UgfSA9IHVzZVBhZ2VTZXR0aW5ncyhzdG9yZSlcblxub25Nb3VudGVkKGFzeW5jICgpID0+IHtcblxuICAgIHBhZ2UudmFsdWUgPSBhd2FpdCBnZXRQYWdlU2V0dGluZ3MoMTkwKSAvLyBrYXRhbG9nIHBvc3QgaWRcblxuICAgIGlzUGFnZURhdGFMb2FkZWQudmFsdWUgPSB0cnVlXG59KVxuXG5cbmNvbnN0IF9fcmV0dXJuZWRfXyA9IHsgZ2V0IGlzUGFnZURhdGFMb2FkZWQoKSB7IHJldHVybiBpc1BhZ2VEYXRhTG9hZGVkIH0sIHNldCBpc1BhZ2VEYXRhTG9hZGVkKHYpIHsgaXNQYWdlRGF0YUxvYWRlZCA9IHYgfSwgc3RvcmUsIGdldCBwYWdlKCkgeyByZXR1cm4gcGFnZSB9LCBzZXQgcGFnZSh2KSB7IHBhZ2UgPSB2IH0sIEZpcnN0U2VjdGlvbiwgU2Vjb25kU2VjdGlvbiB9XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoX19yZXR1cm5lZF9fLCAnX19pc1NjcmlwdFNldHVwJywgeyBlbnVtZXJhYmxlOiBmYWxzZSwgdmFsdWU6IHRydWUgfSlcbnJldHVybiBfX3JldHVybmVkX19cbn1cblxufSkiLCJcbjx0ZW1wbGF0ZT5cbiAgICA8bWFpbiB2LWlmPVwiaXNQYWdlRGF0YUxvYWRlZFwiPlxuICAgICAgICA8Rmlyc3RTZWN0aW9uIC8+XG4gICAgICAgIDxTZWNvbmRTZWN0aW9uIC8+XG4gICAgPC9tYWluPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IGdldFBhZ2VTZXR0aW5ncyB9IGZyb20gJ0AvYXBpL0FwcC9nZXRQYWdlU2V0dGluZ3MnO1xuaW1wb3J0IHsgdXNlUGFnZVNldHRpbmdzIH0gZnJvbSAnQC9ob29rcy9BcHAvdXNlUGFnZVNldHRpbmdzJztcbmltcG9ydCBGaXJzdFNlY3Rpb24gZnJvbSAnQC9zZWN0aW9ucy9rYXRhbG9nL2ZpcnN0LXNlY3Rpb24udnVlJztcbmltcG9ydCBTZWNvbmRTZWN0aW9uIGZyb20gJ0Avc2VjdGlvbnMva2F0YWxvZy9zZWNvbmQtc2VjdGlvbi52dWUnO1xuaW1wb3J0IHsgdXNlVnVleCB9IGZyb20gJ0Avc3RvcmUvdXNlVnVleCc7XG5pbXBvcnQgeyBSZWYsIG9uTW91bnRlZCwgcmVmIH0gZnJvbSAndnVlJztcblxubGV0IGlzUGFnZURhdGFMb2FkZWQ6IFJlZjxib29sZWFuPiA9IHJlZihmYWxzZSlcblxuXG5cbmNvbnN0IHN0b3JlID0gdXNlVnVleCgpXG5cbmxldCB7IHBhZ2UgfSA9IHVzZVBhZ2VTZXR0aW5ncyhzdG9yZSlcblxub25Nb3VudGVkKGFzeW5jICgpID0+IHtcblxuICAgIHBhZ2UudmFsdWUgPSBhd2FpdCBnZXRQYWdlU2V0dGluZ3MoMTkwKSAvLyBrYXRhbG9nIHBvc3QgaWRcblxuICAgIGlzUGFnZURhdGFMb2FkZWQudmFsdWUgPSB0cnVlXG59KVxuXG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPjwvc3R5bGU+IiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudFZOb2RlIGFzIF9jcmVhdGVFbGVtZW50Vk5vZGUsIHRvRGlzcGxheVN0cmluZyBhcyBfdG9EaXNwbGF5U3RyaW5nLCBvcGVuQmxvY2sgYXMgX29wZW5CbG9jaywgY3JlYXRlRWxlbWVudEJsb2NrIGFzIF9jcmVhdGVFbGVtZW50QmxvY2ssIHB1c2hTY29wZUlkIGFzIF9wdXNoU2NvcGVJZCwgcG9wU2NvcGVJZCBhcyBfcG9wU2NvcGVJZCB9IGZyb20gXCJ2dWVcIlxuXG5jb25zdCBfd2l0aFNjb3BlSWQgPSBuID0+IChfcHVzaFNjb3BlSWQoXCJkYXRhLXYtM2NmNGVmNmZcIiksbj1uKCksX3BvcFNjb3BlSWQoKSxuKVxuY29uc3QgX2hvaXN0ZWRfMSA9IHsgY2xhc3M6IFwicHJvZHVjdFwiIH1cbmNvbnN0IF9ob2lzdGVkXzIgPSBbXCJzcmNcIiwgXCJhbHRcIl1cbmNvbnN0IF9ob2lzdGVkXzMgPSB7IGNsYXNzOiBcInByb2R1Y3QtZGVzY3JpcHRpb25cIiB9XG5jb25zdCBfaG9pc3RlZF80ID0geyBjbGFzczogXCJwcm9kdWN0LWRlc2NyaXB0aW9uX19uYW1lXCIgfVxuY29uc3QgX2hvaXN0ZWRfNSA9IHsgY2xhc3M6IFwicHJvZHVjdC1kZXNjcmlwdGlvbi1zcGVjc1wiIH1cbmNvbnN0IF9ob2lzdGVkXzYgPSB7IGNsYXNzOiBcInNwZWNcIiB9XG5jb25zdCBfaG9pc3RlZF83ID0geyBjbGFzczogXCJzcGVjXCIgfVxuY29uc3QgX2hvaXN0ZWRfOCA9IHsgY2xhc3M6IFwic3BlY1wiIH1cbmNvbnN0IF9ob2lzdGVkXzkgPSB7IGNsYXNzOiBcInByb2R1Y3RfX3ByaWNlXCIgfVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKF9jdHg6IGFueSxfY2FjaGU6IGFueSwkcHJvcHM6IGFueSwkc2V0dXA6IGFueSwkZGF0YTogYW55LCRvcHRpb25zOiBhbnkpIHtcbiAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJkaXZcIiwgX2hvaXN0ZWRfMSwgW1xuICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJpbWdcIiwge1xuICAgICAgY2xhc3M6IFwicHJvZHVjdF9faW1hZ2VcIixcbiAgICAgIHNyYzogJHByb3BzLmltYWdlU3JjLFxuICAgICAgYWx0OiAkcHJvcHMubmFtZVxuICAgIH0sIG51bGwsIDggLyogUFJPUFMgKi8sIF9ob2lzdGVkXzIpLFxuICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfMywgW1xuICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcInBcIiwgX2hvaXN0ZWRfNCwgX3RvRGlzcGxheVN0cmluZygkcHJvcHMubmFtZSksIDEgLyogVEVYVCAqLyksXG4gICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzUsIFtcbiAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF82LCBbXG4gICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcInBcIiwgbnVsbCwgX3RvRGlzcGxheVN0cmluZygkc2V0dXAucHJvZHVjdENwdSA/ICRzZXR1cC5wcm9kdWN0Q3B1LmNmcy5zaG9ydGx5X25hbWUgOiAn0L7RgtGB0YPRgtGB0LLRg9C10YInKSwgMSAvKiBURVhUICovKVxuICAgICAgICBdKSxcbiAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF83LCBbXG4gICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcInBcIiwgbnVsbCwgX3RvRGlzcGxheVN0cmluZygkc2V0dXAucHJvZHVjdEdwdSA/ICRzZXR1cC5wcm9kdWN0R3B1LmNmcy5zaG9ydGx5X25hbWUgOiAn0L7RgtGB0YPRgdGC0LLRg9C10YInKSwgMSAvKiBURVhUICovKVxuICAgICAgICBdKSxcbiAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF84LCBbXG4gICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcInBcIiwgbnVsbCwgX3RvRGlzcGxheVN0cmluZygkc2V0dXAucHJvZHVjdFJhbSA/ICRzZXR1cC5wcm9kdWN0UmFtLmNmcy5zaG9ydGx5X25hbWUgOiAn0L7RgtGB0YPRgdGC0LLRg9C10YInKSwgMSAvKiBURVhUICovKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdKSxcbiAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwicFwiLCBfaG9pc3RlZF85LCBfdG9EaXNwbGF5U3RyaW5nKCRwcm9wcy5wcmljZSkgKyBcIiBSVUJcIiwgMSAvKiBURVhUICovKVxuICBdKSlcbn0iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50Vk5vZGUgYXMgX2NyZWF0ZUVsZW1lbnRWTm9kZSwgdG9EaXNwbGF5U3RyaW5nIGFzIF90b0Rpc3BsYXlTdHJpbmcsIG5vcm1hbGl6ZVN0eWxlIGFzIF9ub3JtYWxpemVTdHlsZSwgb3BlbkJsb2NrIGFzIF9vcGVuQmxvY2ssIGNyZWF0ZUVsZW1lbnRCbG9jayBhcyBfY3JlYXRlRWxlbWVudEJsb2NrLCBwdXNoU2NvcGVJZCBhcyBfcHVzaFNjb3BlSWQsIHBvcFNjb3BlSWQgYXMgX3BvcFNjb3BlSWQgfSBmcm9tIFwidnVlXCJcblxuY29uc3QgX3dpdGhTY29wZUlkID0gbiA9PiAoX3B1c2hTY29wZUlkKFwiZGF0YS12LTY4MjJmZGQyXCIpLG49bigpLF9wb3BTY29wZUlkKCksbilcbmNvbnN0IF9ob2lzdGVkXzEgPSB7IGNsYXNzOiBcImZpcnN0LXNlY3Rpb24tY29udGFpbmVyIGNvbnRhaW5lclwiIH1cbmNvbnN0IF9ob2lzdGVkXzIgPSB7IGNsYXNzOiBcImltYWdlLWJveFwiIH1cbmNvbnN0IF9ob2lzdGVkXzMgPSBbXCJzcmNcIiwgXCJhbHRcIl1cbmNvbnN0IF9ob2lzdGVkXzQgPSB7IGNsYXNzOiBcImRlc2NyaXB0aW9uLWJveFwiIH1cbmNvbnN0IF9ob2lzdGVkXzUgPSB7IGNsYXNzOiBcImRlc2NyaXB0aW9uLWJveF9fdGl0bGUgdGl0bGVcIiB9XG5jb25zdCBfaG9pc3RlZF82ID0geyBjbGFzczogXCJkZXNjcmlwdGlvbi1ib3hfX3RleHRcIiB9XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eDogYW55LF9jYWNoZTogYW55LCRwcm9wczogYW55LCRzZXR1cDogYW55LCRkYXRhOiBhbnksJG9wdGlvbnM6IGFueSkge1xuICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcImRpdlwiLCB7XG4gICAgY2xhc3M6IFwiZmlyc3Qtc2VjdGlvblwiLFxuICAgIHN0eWxlOiBfbm9ybWFsaXplU3R5bGUoeyBiYWNrZ3JvdW5kOiBgdXJsKCckeyRzZXR1cC5jdXJyZW50U2V0dGluZ3MuYmFja2dyb3VuZH0nKSwgbm8tcmVwZWF0IGNlbnRlciAvIGNvdmVyYCB9KVxuICB9LCBbXG4gICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF8xLCBbXG4gICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzIsIFtcbiAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImltZ1wiLCB7XG4gICAgICAgICAgc3JjOiAkc2V0dXAuY3VycmVudFNldHRpbmdzLmltYWdlLFxuICAgICAgICAgIGFsdDogJHNldHVwLmN1cnJlbnRTZXR0aW5ncy50aXRsZVxuICAgICAgICB9LCBudWxsLCA4IC8qIFBST1BTICovLCBfaG9pc3RlZF8zKVxuICAgICAgXSksXG4gICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzQsIFtcbiAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcInBcIiwgX2hvaXN0ZWRfNSwgX3RvRGlzcGxheVN0cmluZygkc2V0dXAuY3VycmVudFNldHRpbmdzLnRpdGxlKSwgMSAvKiBURVhUICovKSxcbiAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcInBcIiwgX2hvaXN0ZWRfNiwgX3RvRGlzcGxheVN0cmluZygkc2V0dXAuY3VycmVudFNldHRpbmdzLnRleHQpLCAxIC8qIFRFWFQgKi8pXG4gICAgICBdKVxuICAgIF0pXG4gIF0sIDQgLyogU1RZTEUgKi8pKVxufSIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnRWTm9kZSBhcyBfY3JlYXRlRWxlbWVudFZOb2RlLCByZW5kZXJMaXN0IGFzIF9yZW5kZXJMaXN0LCBGcmFnbWVudCBhcyBfRnJhZ21lbnQsIG9wZW5CbG9jayBhcyBfb3BlbkJsb2NrLCBjcmVhdGVFbGVtZW50QmxvY2sgYXMgX2NyZWF0ZUVsZW1lbnRCbG9jaywgY3JlYXRlQmxvY2sgYXMgX2NyZWF0ZUJsb2NrLCBjcmVhdGVDb21tZW50Vk5vZGUgYXMgX2NyZWF0ZUNvbW1lbnRWTm9kZSwgcHVzaFNjb3BlSWQgYXMgX3B1c2hTY29wZUlkLCBwb3BTY29wZUlkIGFzIF9wb3BTY29wZUlkIH0gZnJvbSBcInZ1ZVwiXG5cbmNvbnN0IF93aXRoU2NvcGVJZCA9IG4gPT4gKF9wdXNoU2NvcGVJZChcImRhdGEtdi0wMTRmNjJmMlwiKSxuPW4oKSxfcG9wU2NvcGVJZCgpLG4pXG5jb25zdCBfaG9pc3RlZF8xID0geyBjbGFzczogXCJzZWNvbmQtc2VjdGlvblwiIH1cbmNvbnN0IF9ob2lzdGVkXzIgPSAvKiNfX1BVUkVfXyovIF93aXRoU2NvcGVJZCgoKSA9PiAvKiNfX1BVUkVfXyovX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCB7IGNsYXNzOiBcImZpbHRlcnMtYm94XCIgfSwgbnVsbCwgLTEgLyogSE9JU1RFRCAqLykpXG5jb25zdCBfaG9pc3RlZF8zID0geyBjbGFzczogXCJwcm9kdWN0cy1ib3hcIiB9XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eDogYW55LF9jYWNoZTogYW55LCRwcm9wczogYW55LCRzZXR1cDogYW55LCRkYXRhOiBhbnksJG9wdGlvbnM6IGFueSkge1xuICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcImRpdlwiLCBfaG9pc3RlZF8xLCBbXG4gICAgX2hvaXN0ZWRfMixcbiAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzMsIFtcbiAgICAgICgkc2V0dXAuaXNEYXRhTG9hZGVkKVxuICAgICAgICA/IChfb3BlbkJsb2NrKHRydWUpLCBfY3JlYXRlRWxlbWVudEJsb2NrKF9GcmFnbWVudCwgeyBrZXk6IDAgfSwgX3JlbmRlckxpc3QoJHNldHVwLnByb2R1Y3RzLCAocHJvZHVjdCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVCbG9jaygkc2V0dXBbXCJQcm9kdWN0XCJdLCB7XG4gICAgICAgICAgICAgIGtleTogcHJvZHVjdC5pZCxcbiAgICAgICAgICAgICAgXCJpbWFnZS1zcmNcIjogcHJvZHVjdC5pbWFnZXNbMF0uc3JjLFxuICAgICAgICAgICAgICBuYW1lOiBwcm9kdWN0Lm5hbWUsXG4gICAgICAgICAgICAgIGdyb3VwZWRfcHJvZHVjdHM6IHByb2R1Y3QuZ3JvdXBlZF9wcm9kdWN0cyxcbiAgICAgICAgICAgICAgcHJpY2U6IHByb2R1Y3QucHJpY2VcbiAgICAgICAgICAgIH0sIG51bGwsIDggLyogUFJPUFMgKi8sIFtcImltYWdlLXNyY1wiLCBcIm5hbWVcIiwgXCJncm91cGVkX3Byb2R1Y3RzXCIsIFwicHJpY2VcIl0pKVxuICAgICAgICAgIH0pLCAxMjggLyogS0VZRURfRlJBR01FTlQgKi8pKVxuICAgICAgICA6IF9jcmVhdGVDb21tZW50Vk5vZGUoXCJ2LWlmXCIsIHRydWUpXG4gICAgXSlcbiAgXSkpXG59IiwiaW1wb3J0IHsgY3JlYXRlVk5vZGUgYXMgX2NyZWF0ZVZOb2RlLCBvcGVuQmxvY2sgYXMgX29wZW5CbG9jaywgY3JlYXRlRWxlbWVudEJsb2NrIGFzIF9jcmVhdGVFbGVtZW50QmxvY2ssIGNyZWF0ZUNvbW1lbnRWTm9kZSBhcyBfY3JlYXRlQ29tbWVudFZOb2RlIH0gZnJvbSBcInZ1ZVwiXG5cbmNvbnN0IF9ob2lzdGVkXzEgPSB7IGtleTogMCB9XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eDogYW55LF9jYWNoZTogYW55LCRwcm9wczogYW55LCRzZXR1cDogYW55LCRkYXRhOiBhbnksJG9wdGlvbnM6IGFueSkge1xuICByZXR1cm4gKCRzZXR1cC5pc1BhZ2VEYXRhTG9hZGVkKVxuICAgID8gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcIm1haW5cIiwgX2hvaXN0ZWRfMSwgW1xuICAgICAgICBfY3JlYXRlVk5vZGUoJHNldHVwW1wiRmlyc3RTZWN0aW9uXCJdKSxcbiAgICAgICAgX2NyZWF0ZVZOb2RlKCRzZXR1cFtcIlNlY29uZFNlY3Rpb25cIl0pXG4gICAgICBdKSlcbiAgICA6IF9jcmVhdGVDb21tZW50Vk5vZGUoXCJ2LWlmXCIsIHRydWUpXG59IiwiaW1wb3J0IFdQIGZyb20gJ0AvYXhpb3NXUCdcbmltcG9ydCB7IFNldHRpbmdzIH0gZnJvbSAnQC90eXBlcy9BcHAnXG5cblxuXG5leHBvcnQgY29uc3QgZ2V0UGFnZVNldHRpbmdzID0gYXN5bmMgKGlkOiBudW1iZXIpOiBQcm9taXNlPFNldHRpbmdzPiA9PiB7XG4gICAgcmV0dXJuIGF3YWl0IFdQLmdldCgncGFnZXMvJyArIGlkKS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmRhdGEpXG59IiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5jb25zdCBpbnN0YW5jZSA9IGF4aW9zLmNyZWF0ZSh7XG4gICAgYmFzZVVSTDogJ2h0dHA6Ly9sb2NhbGhvc3Qvd3AtanNvbi93Yy92My8nLFxuICAgIGhlYWRlcnM6IHsgJ0F1dGhvcml6YXRpb24nOiAnQmFzaWMgWTJ0ZlkyRXpNamRrTmpZMU5HVXlOalV3T1Rsak5qSTNPRFl5T1dFM09ERm1NelE1Wm1Jd1ltTmxZVHBqYzE5aE5EUTBORFF5T1RaaU9USTFPREEyWmpobU1XTXpNMkk1TjJSbU5qSmlNVEEwTnpobE0yUTInIH1cbn0pO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGluc3RhbmNlXG4iLCJpbXBvcnQgU3RvcmUsIHsgTXV0YXRpb25zIH0gZnJvbSAnQC9zdG9yZSc7XG5pbXBvcnQgeyBXcml0YWJsZUNvbXB1dGVkUmVmLCBjb21wdXRlZCB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgeyBJQ2F0ZWdvcnlNYWluUGFnZSwgU2V0dGluZ3MgfSBmcm9tICdAL3R5cGVzL0FwcCc7XG5cblxuZXhwb3J0IGNvbnN0IHVzZVBhZ2VTZXR0aW5ncyA9IChzdG9yZTogdHlwZW9mIFN0b3JlKSA9PiB7XG5cbiAgICBsZXQgcGFnZTogV3JpdGFibGVDb21wdXRlZFJlZjxPYmplY3Q+ID0gY29tcHV0ZWQoe1xuICAgICAgICBnZXQ6ICgpID0+IHN0b3JlLnN0YXRlLnBhZ2UuY2ZzLFxuICAgICAgICBzZXQ6ICh2YWx1ZTogU2V0dGluZ3MpID0+IHN0b3JlLmNvbW1pdChNdXRhdGlvbnMuU0VUX1BBR0VfU0VUVElOR1MsIHZhbHVlKSxcbiAgICB9KVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVxuICAgIH1cblxufSIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL1Byb2R1Y3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNjZjRlZjZmJnNjb3BlZD10cnVlJnRzPXRydWVcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Qcm9kdWN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmc2V0dXA9dHJ1ZSZsYW5nPXRzXCJcbmV4cG9ydCAqIGZyb20gXCIuL1Byb2R1Y3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZzZXR1cD10cnVlJmxhbmc9dHNcIlxuXG5pbXBvcnQgXCIuL1Byb2R1Y3QudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9M2NmNGVmNmYmbGFuZz1zY3NzJnNjb3BlZD10cnVlXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19zY29wZUlkJyxcImRhdGEtdi0zY2Y0ZWY2ZlwiXSxbJ19fZmlsZScsXCJzcmMvY29tcG9uZW50cy9Qcm9kdWN0LnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCIzY2Y0ZWY2ZlwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzNjZjRlZjZmJywgX19leHBvcnRzX18pKSB7XG4gICAgYXBpLnJlbG9hZCgnM2NmNGVmNmYnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1Byb2R1Y3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNjZjRlZjZmJnNjb3BlZD10cnVlJnRzPXRydWVcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignM2NmNGVmNmYnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL2ZpcnN0LXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY4MjJmZGQyJnNjb3BlZD10cnVlJnRzPXRydWVcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9maXJzdC1zZWN0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmc2V0dXA9dHJ1ZSZsYW5nPXRzXCJcbmV4cG9ydCAqIGZyb20gXCIuL2ZpcnN0LXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZzZXR1cD10cnVlJmxhbmc9dHNcIlxuXG5pbXBvcnQgXCIuL2ZpcnN0LXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NjgyMmZkZDImbGFuZz1zY3NzJnNjb3BlZD10cnVlXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19zY29wZUlkJyxcImRhdGEtdi02ODIyZmRkMlwiXSxbJ19fZmlsZScsXCJzcmMvc2VjdGlvbnMva2F0YWxvZy9maXJzdC1zZWN0aW9uLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCI2ODIyZmRkMlwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzY4MjJmZGQyJywgX19leHBvcnRzX18pKSB7XG4gICAgYXBpLnJlbG9hZCgnNjgyMmZkZDInLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2ZpcnN0LXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY4MjJmZGQyJnNjb3BlZD10cnVlJnRzPXRydWVcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignNjgyMmZkZDInLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL3NlY29uZC1zZWN0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wMTRmNjJmMiZzY29wZWQ9dHJ1ZSZ0cz10cnVlXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vc2Vjb25kLXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZzZXR1cD10cnVlJmxhbmc9dHNcIlxuZXhwb3J0ICogZnJvbSBcIi4vc2Vjb25kLXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZzZXR1cD10cnVlJmxhbmc9dHNcIlxuXG5pbXBvcnQgXCIuL3NlY29uZC1zZWN0aW9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTAxNGY2MmYyJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZVwiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fc2NvcGVJZCcsXCJkYXRhLXYtMDE0ZjYyZjJcIl0sWydfX2ZpbGUnLFwic3JjL3NlY3Rpb25zL2thdGFsb2cvc2Vjb25kLXNlY3Rpb24udnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcIjAxNGY2MmYyXCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnMDE0ZjYyZjInLCBfX2V4cG9ydHNfXykpIHtcbiAgICBhcGkucmVsb2FkKCcwMTRmNjJmMicsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vc2Vjb25kLXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTAxNGY2MmYyJnNjb3BlZD10cnVlJnRzPXRydWVcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignMDE0ZjYyZjInLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL2thdGFsb2cudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWQ0OWExZjEyJnRzPXRydWVcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9rYXRhbG9nLnZ1ZT92dWUmdHlwZT1zY3JpcHQmc2V0dXA9dHJ1ZSZsYW5nPXRzXCJcbmV4cG9ydCAqIGZyb20gXCIuL2thdGFsb2cudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZzZXR1cD10cnVlJmxhbmc9dHNcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2V4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl0sWydfX2ZpbGUnLFwic3JjL3ZpZXdzL2thdGFsb2cudnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcImQ0OWExZjEyXCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnZDQ5YTFmMTInLCBfX2V4cG9ydHNfXykpIHtcbiAgICBhcGkucmVsb2FkKCdkNDlhMWYxMicsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4va2F0YWxvZy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZDQ5YTFmMTImdHM9dHJ1ZVwiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCdkNDlhMWYxMicsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzEwXS51c2VbMF0hLi9Qcm9kdWN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmc2V0dXA9dHJ1ZSZsYW5nPXRzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzEwXS51c2VbMF0hLi9Qcm9kdWN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmc2V0dXA9dHJ1ZSZsYW5nPXRzXCIiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMTBdLnVzZVswXSEuL2ZpcnN0LXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZzZXR1cD10cnVlJmxhbmc9dHNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMTBdLnVzZVswXSEuL2ZpcnN0LXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZzZXR1cD10cnVlJmxhbmc9dHNcIiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxMF0udXNlWzBdIS4vc2Vjb25kLXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZzZXR1cD10cnVlJmxhbmc9dHNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMTBdLnVzZVswXSEuL3NlY29uZC1zZWN0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmc2V0dXA9dHJ1ZSZsYW5nPXRzXCIiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMTBdLnVzZVswXSEuL2thdGFsb2cudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZzZXR1cD10cnVlJmxhbmc9dHNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMTBdLnVzZVswXSEuL2thdGFsb2cudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZzZXR1cD10cnVlJmxhbmc9dHNcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMTBdLnVzZVswXSEuL1Byb2R1Y3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNjZjRlZjZmJnNjb3BlZD10cnVlJnRzPXRydWVcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMTBdLnVzZVswXSEuL2ZpcnN0LXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY4MjJmZGQyJnNjb3BlZD10cnVlJnRzPXRydWVcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMTBdLnVzZVswXSEuL3NlY29uZC1zZWN0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wMTRmNjJmMiZzY29wZWQ9dHJ1ZSZ0cz10cnVlXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC90ZW1wbGF0ZUxvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1syXSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzEwXS51c2VbMF0hLi9rYXRhbG9nLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kNDlhMWYxMiZ0cz10cnVlXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxMF0udXNlWzBdIS4vUHJvZHVjdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zY2Y0ZWY2ZiZsYW5nPXNjc3Mmc2NvcGVkPXRydWVcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzEwXS51c2VbMF0hLi9maXJzdC1zZWN0aW9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTY4MjJmZGQyJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZVwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMTBdLnVzZVswXSEuL3NlY29uZC1zZWN0aW9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTAxNGY2MmYyJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZVwiIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzEwXS51c2VbMF0hLi9Qcm9kdWN0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTNjZjRlZjZmJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZVwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCI3OWRiNjM3M1wiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMTBdLnVzZVswXSEuL1Byb2R1Y3QudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9M2NmNGVmNmYmbGFuZz1zY3NzJnNjb3BlZD10cnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzEwXS51c2VbMF0hLi9Qcm9kdWN0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTNjZjRlZjZmJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZVwiKTtcbiAgICAgaWYobmV3Q29udGVudC5fX2VzTW9kdWxlKSBuZXdDb250ZW50ID0gbmV3Q29udGVudC5kZWZhdWx0O1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMTBdLnVzZVswXSEuL2ZpcnN0LXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NjgyMmZkZDImbGFuZz1zY3NzJnNjb3BlZD10cnVlXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjFhMWZiNzc4XCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxMF0udXNlWzBdIS4vZmlyc3Qtc2VjdGlvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02ODIyZmRkMiZsYW5nPXNjc3Mmc2NvcGVkPXRydWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMTBdLnVzZVswXSEuL2ZpcnN0LXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NjgyMmZkZDImbGFuZz1zY3NzJnNjb3BlZD10cnVlXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxMF0udXNlWzBdIS4vc2Vjb25kLXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDE0ZjYyZjImbGFuZz1zY3NzJnNjb3BlZD10cnVlXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjI4NmIyNmZkXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxMF0udXNlWzBdIS4vc2Vjb25kLXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDE0ZjYyZjImbGFuZz1zY3NzJnNjb3BlZD10cnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzEwXS51c2VbMF0hLi9zZWNvbmQtc2VjdGlvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wMTRmNjJmMiZsYW5nPXNjc3Mmc2NvcGVkPXRydWVcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9