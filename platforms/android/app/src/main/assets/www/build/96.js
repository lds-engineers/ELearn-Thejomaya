webpackJsonp([96],{

/***/ 2023:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonModH5PActivityIndexPageModule", function() { return AddonModH5PActivityIndexPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_directives_module__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(1032);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__index__ = __webpack_require__(2179);
// (C) Copyright 2015 Moodle Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AddonModH5PActivityIndexPageModule = /** @class */ (function () {
    function AddonModH5PActivityIndexPageModule() {
    }
    AddonModH5PActivityIndexPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__index__["a" /* AddonModH5PActivityIndexPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__directives_directives_module__["a" /* CoreDirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* AddonModH5PActivityComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__index__["a" /* AddonModH5PActivityIndexPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], AddonModH5PActivityIndexPageModule);
    return AddonModH5PActivityIndexPageModule;
}());

//# sourceMappingURL=index.module.js.map

/***/ }),

/***/ 2179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddonModH5PActivityIndexPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_utils_dom__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_index_index__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__singletons_core_singletons__ = __webpack_require__(24);
// (C) Copyright 2015 Moodle Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Page that displays an H5P activity.
 */
var AddonModH5PActivityIndexPage = /** @class */ (function () {
    function AddonModH5PActivityIndexPage(navParams) {
        this.module = navParams.get('module') || {};
        this.courseId = navParams.get('courseId');
        this.title = this.module.name;
    }
    /**
     * Update some data based on the H5P activity instance.
     *
     * @param h5p H5P activity instance.
     */
    AddonModH5PActivityIndexPage.prototype.updateData = function (h5p) {
        this.title = h5p.name || this.title;
    };
    /**
     * Check if we can leave the page or not.
     *
     * @return Resolved if we can leave it, rejected if not.
     */
    AddonModH5PActivityIndexPage.prototype.ionViewCanLeave = function () {
        if (!this.h5pComponent.playing || this.h5pComponent.isOpeningPage) {
            return;
        }
        return __WEBPACK_IMPORTED_MODULE_2__providers_utils_dom__["a" /* CoreDomUtils */].instance.showConfirm(__WEBPACK_IMPORTED_MODULE_4__singletons_core_singletons__["a" /* Translate */].instance.instant('core.confirmleaveunknownchanges'));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__components_index_index__["a" /* AddonModH5PActivityIndexComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__components_index_index__["a" /* AddonModH5PActivityIndexComponent */])
    ], AddonModH5PActivityIndexPage.prototype, "h5pComponent", void 0);
    AddonModH5PActivityIndexPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addon-mod-h5pactivity-index',template:/*ion-inline-start:"E:\data\Suresh\moodleapp3.9.0 sushilms1\moodleapp\src\addon\mod\h5pactivity\pages\index\index.html"*/'<ion-header>\n\n    <ion-navbar core-back-button>\n\n        <ion-title><core-format-text [text]="title" contextLevel="module" [contextInstanceId]="module.id" [courseId]="courseId"></core-format-text></ion-title>\n\n\n\n        <ion-buttons end>\n\n            <!-- The buttons defined by the component will be added in here. -->\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <ion-refresher [enabled]="h5pComponent.loaded" (ionRefresh)="h5pComponent.doRefresh($event)">\n\n        <ion-refresher-content pullingText="{{ \'core.pulltorefresh\' | translate }}"></ion-refresher-content>\n\n    </ion-refresher>\n\n\n\n    <addon-mod-h5pactivity-index [module]="module" [courseId]="courseId" (dataRetrieved)="updateData($event)"></addon-mod-h5pactivity-index>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\data\Suresh\moodleapp3.9.0 sushilms1\moodleapp\src\addon\mod\h5pactivity\pages\index\index.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */]])
    ], AddonModH5PActivityIndexPage);
    return AddonModH5PActivityIndexPage;
}());

//# sourceMappingURL=index.js.map

/***/ })

});
//# sourceMappingURL=96.js.map