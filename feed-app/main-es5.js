(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"layout\">\n  <infinite-feed></infinite-feed>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/infinite-feed/infinite-feed.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/infinite-feed/infinite-feed.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"infinite-feed\">\r\n    <div class=\"infinite-feed__controls\">\r\n        <button mat-raised-button (click)=\"loadMore()\">Load more</button>\r\n    </div>\r\n\r\n    <cdk-virtual-scroll-viewport itemSize=\"650\" class=\"infinite-feed__viewport\" #scrollViewport>\r\n      <div *cdkVirtualFor=\"let item of items; index as $index; trackBy: trackByIndex\"\r\n           class=\"infinite-feed__item\"\r\n           (detectedVisibility)=\"item.visible = $event\"\r\n           [idx]=\"$index\" [root]=\"scrollViewport\">\r\n        <mat-card class=\"infinite-feed__item__content\"\r\n                  [@itemAnimation]=\"item.visible ? 'visible' : 'hidden'\"\r\n                  [class.visible]=\"item.visible\">\r\n            <mat-card-header>\r\n              <div mat-card-avatar class=\"infinite-feed__item__content__header-image\"></div>\r\n              <mat-card-title>Shiba Inu</mat-card-title>\r\n              <mat-card-subtitle>Dog Breed</mat-card-subtitle>\r\n            </mat-card-header>\r\n            <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">\r\n            <mat-card-content>\r\n              <div>{{item.value}}</div>\r\n              <p>\r\n                The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\r\n                A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\r\n                bred for hunting.\r\n              </p>\r\n            </mat-card-content>\r\n            <mat-card-actions>\r\n              <button mat-button>LIKE</button>\r\n              <button mat-button>SHARE</button>\r\n            </mat-card-actions>\r\n          </mat-card>\r\n      </div>\r\n    </cdk-virtual-scroll-viewport>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _infinite_feed_infinite_feed_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./infinite-feed/infinite-feed.module */ "./src/app/infinite-feed/infinite-feed.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _infinite_feed_infinite_feed_module__WEBPACK_IMPORTED_MODULE_4__["InfiniteFeedModule"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/infinite-feed/detect-visibility.directive.ts":
/*!**************************************************************!*\
  !*** ./src/app/infinite-feed/detect-visibility.directive.ts ***!
  \**************************************************************/
/*! exports provided: DetectVisibilityDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetectVisibilityDirective", function() { return DetectVisibilityDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DetectVisibilityDirective = /** @class */ (function () {
    function DetectVisibilityDirective(el) {
        this.el = el;
        this.detectedVisibility = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isVisible = false;
        this.detectVisibility = this.detectVisibility.bind(this);
    }
    DetectVisibilityDirective.prototype.ngAfterViewInit = function () {
        this.setupObserver();
    };
    DetectVisibilityDirective.prototype.ngOnChanges = function (changes) {
        if (!changes.idx || this.idx === undefined) {
            return;
        }
        if (this.observer) {
            this.observer.disconnect();
        }
        this.setupObserver();
    };
    DetectVisibilityDirective.prototype.ngOnDestroy = function () {
        if (this.observer) {
            this.observer.disconnect();
        }
    };
    DetectVisibilityDirective.prototype.setupObserver = function () {
        this.observer = new IntersectionObserver(this.detectVisibility, {
            root: this.root.elementRef.nativeElement,
            threshold: [0, 0.1]
        });
        this.observer.observe(this.el.nativeElement);
    };
    DetectVisibilityDirective.prototype.detectVisibility = function (entries, observer) {
        var currentVisibility = entries[0].intersectionRatio >= 0.1;
        if (this.isVisible !== currentVisibility) {
            this.isVisible = currentVisibility;
            this.detectedVisibility.emit(this.isVisible);
        }
    };
    DetectVisibilityDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], DetectVisibilityDirective.prototype, "root", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], DetectVisibilityDirective.prototype, "idx", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], DetectVisibilityDirective.prototype, "detectedVisibility", void 0);
    DetectVisibilityDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[detectedVisibility]',
        })
    ], DetectVisibilityDirective);
    return DetectVisibilityDirective;
}());



/***/ }),

/***/ "./src/app/infinite-feed/feed-data.service.ts":
/*!****************************************************!*\
  !*** ./src/app/infinite-feed/feed-data.service.ts ***!
  \****************************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var DataService = /** @class */ (function () {
    function DataService() {
        this.itemsPerPage = 10;
        this.cache = {};
    }
    DataService.prototype.getOldData = function (page) {
        var _this = this;
        if (!this.cache[page]) {
            this.cache[page] = Array.from({ length: this.itemsPerPage }).map(function (x, i) { return ({
                id: page * _this.itemsPerPage + i,
                value: "item #" + (page * _this.itemsPerPage + i)
            }); });
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.cache[page]);
    };
    DataService.prototype.getNewData = function () {
        var id = new Date().valueOf();
        return {
            id: id,
            value: "item #" + id
        };
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/infinite-feed/infinite-feed.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/infinite-feed/infinite-feed.component.ts ***!
  \**********************************************************/
/*! exports provided: InfiniteFeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfiniteFeedComponent", function() { return InfiniteFeedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _feed_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./feed-data.service */ "./src/app/infinite-feed/feed-data.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");






var InfiniteFeedComponent = /** @class */ (function () {
    function InfiniteFeedComponent(dataService, cd) {
        this.dataService = dataService;
        this.cd = cd;
        this.currentPage = 0;
        this.items = [];
        this.visibilityArr = [];
        this.loadTrigger$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.trackByIndex = function (index, item) { return index; };
    }
    InfiniteFeedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadTrigger$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(undefined), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["throttleTime"])(100), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function () { return _this.loadItems(); })).subscribe(function (items) {
            _this.items = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](_this.items, items);
            _this.cd.detectChanges();
        });
    };
    InfiniteFeedComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.scrollViewport.elementScrolled().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) { return _this.scrollViewport.getRenderedRange().end === _this.scrollViewport.getDataLength(); })).subscribe(function () {
            _this.currentPage++;
            _this.loadTrigger$.next();
        });
    };
    InfiniteFeedComponent.prototype.loadMore = function () {
        this.scrollViewport.scrollToIndex(0, 'smooth');
        var newItem = this.dataService.getNewData();
        this.items = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"]([tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, newItem, { visible: true })], this.items);
    };
    InfiniteFeedComponent.prototype.loadItems = function () {
        return this.dataService.getOldData(this.currentPage);
    };
    InfiniteFeedComponent.ctorParameters = function () { return [
        { type: _feed_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('scrollViewport', { static: true })
    ], InfiniteFeedComponent.prototype, "scrollViewport", void 0);
    InfiniteFeedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'infinite-feed',
            template: __webpack_require__(/*! raw-loader!./infinite-feed.html */ "./node_modules/raw-loader/index.js!./src/app/infinite-feed/infinite-feed.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('itemAnimation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 1 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 0 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('hidden => visible', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('0.5s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 1 }))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('visible => hidden', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('0.5s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 0 })),
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./infinite-feed.scss */ "./src/app/infinite-feed/infinite-feed.scss")]
        })
    ], InfiniteFeedComponent);
    return InfiniteFeedComponent;
}());



/***/ }),

/***/ "./src/app/infinite-feed/infinite-feed.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/infinite-feed/infinite-feed.module.ts ***!
  \*******************************************************/
/*! exports provided: InfiniteFeedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfiniteFeedModule", function() { return InfiniteFeedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _feed_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./feed-data.service */ "./src/app/infinite-feed/feed-data.service.ts");
/* harmony import */ var _infinite_feed_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./infinite-feed.component */ "./src/app/infinite-feed/infinite-feed.component.ts");
/* harmony import */ var _detect_visibility_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./detect-visibility.directive */ "./src/app/infinite-feed/detect-visibility.directive.ts");








var InfiniteFeedModule = /** @class */ (function () {
    function InfiniteFeedModule() {
    }
    InfiniteFeedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollingModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"]
            ],
            declarations: [
                _infinite_feed_component__WEBPACK_IMPORTED_MODULE_6__["InfiniteFeedComponent"],
                _detect_visibility_directive__WEBPACK_IMPORTED_MODULE_7__["DetectVisibilityDirective"]
            ],
            exports: [
                _infinite_feed_component__WEBPACK_IMPORTED_MODULE_6__["InfiniteFeedComponent"]
            ],
            providers: [_feed_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]]
        })
    ], InfiniteFeedModule);
    return InfiniteFeedModule;
}());



/***/ }),

/***/ "./src/app/infinite-feed/infinite-feed.scss":
/*!**************************************************!*\
  !*** ./src/app/infinite-feed/infinite-feed.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".infinite-feed {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.infinite-feed__controls {\n  margin-bottom: 20px;\n}\n.infinite-feed__viewport {\n  height: 90vh;\n  width: 100%;\n}\n.infinite-feed__item {\n  height: 650px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin: 10px 0;\n}\n.infinite-feed__item__content {\n  max-width: 400px;\n}\n.infinite-feed__item__content__header-image {\n  background-image: url(\"https://material.angular.io/assets/img/examples/shiba1.jpg\");\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5maW5pdGUtZmVlZC9XOlxcQW5ndWxhciBBcHBzXFxmZWVkLWFwcC9zcmNcXGFwcFxcaW5maW5pdGUtZmVlZFxcaW5maW5pdGUtZmVlZC5zY3NzIiwic3JjL2FwcC9pbmZpbml0ZS1mZWVkL2luZmluaXRlLWZlZWQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNDRjtBRENFO0VBQ0UsbUJBQUE7QUNDSjtBREVFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUNBSjtBREdFO0VBQ0UsYUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxjQUFBO0FDREo7QURHSTtFQUNFLGdCQUFBO0FDRE47QURHTTtFQUNFLG1GQUFBO0VBQ0Esc0JBQUE7QUNEUiIsImZpbGUiOiJzcmMvYXBwL2luZmluaXRlLWZlZWQvaW5maW5pdGUtZmVlZC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmluZmluaXRlLWZlZWQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAmX19jb250cm9scyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgJl9fdmlld3BvcnQge1xyXG4gICAgaGVpZ2h0OiA5MHZoO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAmX19pdGVtIHtcclxuICAgIGhlaWdodDogNjUwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDEwcHggMDtcclxuXHJcbiAgICAmX19jb250ZW50IHtcclxuICAgICAgbWF4LXdpZHRoOiA0MDBweDtcclxuXHJcbiAgICAgICZfX2hlYWRlci1pbWFnZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vYXNzZXRzL2ltZy9leGFtcGxlcy9zaGliYTEuanBnJyk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIuaW5maW5pdGUtZmVlZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uaW5maW5pdGUtZmVlZF9fY29udHJvbHMge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLmluZmluaXRlLWZlZWRfX3ZpZXdwb3J0IHtcbiAgaGVpZ2h0OiA5MHZoO1xuICB3aWR0aDogMTAwJTtcbn1cbi5pbmZpbml0ZS1mZWVkX19pdGVtIHtcbiAgaGVpZ2h0OiA2NTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogMTBweCAwO1xufVxuLmluZmluaXRlLWZlZWRfX2l0ZW1fX2NvbnRlbnQge1xuICBtYXgtd2lkdGg6IDQwMHB4O1xufVxuLmluZmluaXRlLWZlZWRfX2l0ZW1fX2NvbnRlbnRfX2hlYWRlci1pbWFnZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9hc3NldHMvaW1nL2V4YW1wbGVzL3NoaWJhMS5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! W:\Angular Apps\feed-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map