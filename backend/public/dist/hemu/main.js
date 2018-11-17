(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing/app-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/app-routing/app-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _uttarakhand_uttarakhand_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../uttarakhand/uttarakhand.component */ "./src/app/uttarakhand/uttarakhand.component.ts");
/* harmony import */ var _rishikesh_rishikesh_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rishikesh/rishikesh.component */ "./src/app/rishikesh/rishikesh.component.ts");
/* harmony import */ var _corbett_corbett_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../corbett/corbett.component */ "./src/app/corbett/corbett.component.ts");
/* harmony import */ var _lansdowne_lansdowne_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lansdowne/lansdowne.component */ "./src/app/lansdowne/lansdowne.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', component: _uttarakhand_uttarakhand_component__WEBPACK_IMPORTED_MODULE_3__["UttarakhandComponent"] },
    { path: 'rishikesh', component: _rishikesh_rishikesh_component__WEBPACK_IMPORTED_MODULE_4__["RishikeshComponent"] },
    { path: 'corbett', component: _corbett_corbett_component__WEBPACK_IMPORTED_MODULE_5__["CorbettComponent"] },
    { path: 'lansdowne', component: _lansdowne_lansdowne_component__WEBPACK_IMPORTED_MODULE_6__["LansdowneComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            declarations: [],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet> "

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _query_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./query.service */ "./src/app/query.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _rishikesh_rishikesh_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./rishikesh/rishikesh.component */ "./src/app/rishikesh/rishikesh.component.ts");
/* harmony import */ var _uttarakhand_uttarakhand_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./uttarakhand/uttarakhand.component */ "./src/app/uttarakhand/uttarakhand.component.ts");
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var _corbett_corbett_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./corbett/corbett.component */ "./src/app/corbett/corbett.component.ts");
/* harmony import */ var _lansdowne_lansdowne_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./lansdowne/lansdowne.component */ "./src/app/lansdowne/lansdowne.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











// import { AppRoutingModule } from '../';



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _rishikesh_rishikesh_component__WEBPACK_IMPORTED_MODULE_9__["RishikeshComponent"],
                _uttarakhand_uttarakhand_component__WEBPACK_IMPORTED_MODULE_10__["UttarakhandComponent"],
                _corbett_corbett_component__WEBPACK_IMPORTED_MODULE_12__["CorbettComponent"],
                _lansdowne_lansdowne_component__WEBPACK_IMPORTED_MODULE_13__["LansdowneComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrModule"].forRoot(),
                ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_8__["Ng4LoadingSpinnerModule"].forRoot(),
                _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"]
            ],
            providers: [_query_service__WEBPACK_IMPORTED_MODULE_4__["QueryService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/corbett/corbett.component.css":
/*!***********************************************!*\
  !*** ./src/app/corbett/corbett.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2{color:red}\r\n\r\np{\r\n    color:white;\r\n}\r\n\r\n.pic{\r\nbackground-image: url(\"/assets/images/cbk.jpg\");\r\nbackground-size: cover;\r\nheight: auto;\r\n\r\n}\r\n\r\n.text{\r\n    color:greenyellow;\r\n    padding-top: 110px;\r\n    padding-left:60px\r\n}\r\n\r\n.text p{\r\n  color:#7c0a0a;\r\n   \r\n}\r\n\r\n.form{\r\n    padding-top: 110px;\r\n\r\n    \r\n}\r\n\r\nli{\r\n    list-style-type:none\r\n}\r\n\r\n.error{\r\n  color: red;\r\n}\r\n\r\n.mybtn{\r\n    margin-top: 20px;\r\n    margin-bottom: 20px};\r\n\r\n.img_paddings{\r\n    margin-bottom: 6px;\r\n  }\r\n\r\n.text_align{\r\n    text-align: right;\r\n    color: antiquewhite;\r\n  }\r\n\r\nh6{color:powderblue}\r\n\r\n.img{padding-top: 20px}\r\n\r\n/* .footer{background-color:grey ;width:100%;height:100% } */\r\n\r\n.footer{padding-top: 20px ; color:white }\r\n\r\n.fu{text-align: center}"

/***/ }),

/***/ "./src/app/corbett/corbett.component.html":
/*!************************************************!*\
  !*** ./src/app/corbett/corbett.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng4-loading-spinner> </ng4-loading-spinner>\n\n<nav class=\"navbar navbar-light bg-dark\">\n  <div class=\"row\" style=\"width:100%\">\n  <div  class=\"col-sm-6\"> \n\n  <a class=\"navbar-brand\" href=\"#\">\n      <img src=\"/assets/logo.png\" style=\"height: 63px; border-radius: 50%;\"alt=\"dsdsdsd\">\n  </a>\n\n  </div>\n  <div  class=\"col-sm-6 text_align\">\n        <span>+91-8077990871,+91-9219061344</span><br/>\n        <span>tourmyuk@gmail.com</span>\n   \n  </div>\n\n</div>\n</nav>\n<div class=\"container-fluid pic\">\n  <div class=\"row\">\n    <div class=\"col-sm-7  text\">\n      <h1>\n        <b>Welcome <span>TO GOFREEHOLIDAY</span></b>\n      </h1>\n    <!--   <h1>\n       \n      </h1> -->\n      <b><h3><p><i class=\"fa fa-beer\" aria-hidden=\"true\"></i>\n                               &nbsp;Welcome to Corbett.</p></h3>\n                               <p><i class=\"fa fa-plus-circle\"></i>\n&nbsp;1N/2D @4000(breakfast & dinr).</p>\n<p><i class=\"fa fa-cutlery\"></i>\n&nbsp;2N/3D @4000(breakfast & dinr).</p>\n<p><i class=\"fa fa-life-ring\"></i>\n&nbsp;Jeep Safari @4500/-per jeep.</p></b>\n\n    \n    </div>\n\n    <div class=\"col-sm-5\">\n      <form name=\"contactform\" [formGroup]=\"contactform\" class=\"form\" method=\"post\" (submit)=\"contactformdetail()\">\n        <!-- <div id=\"form-content\"> -->\n         <h2 style=\"color:greenyellow;\"> Query Form</h2>\n        <div class=\"row\">\n          <div class=\"col-sm-6 form-group\">\n            <label for=\"date-to\"></label>\n            <div>\n              <!-- ::::{{f.name.errors.minlength}}{{f.name.errors.minlength}} -->\n              <input formControlName=\"name\" class=\"form-control\" type=\"text\" placeholder=\"Name\" required>\n              <p class=\"error\" *ngIf=\"contactform.controls['name'].hasError('required') && isSubmited\">\n                  name required\n               </p>\n               <p class=\"error\" *ngIf=\"contactform.controls['name'].hasError('maxlength')\">\n                Maximum 20 characters allowed\n              </p>\n              <p class=\"error\" *ngIf=\"contactform.controls['name'].hasError('minlength')\">\n               enter at leaset 3 characters\n              </p>\n              <p class=\"error\" *ngIf=\"contactform.controls['name'].hasError('pattern')\">\n                Invalid name\n              </p>\n            </div>\n          </div>\n           <!-- <label for=\"phone\">Phone</label> -->\n          <div class=\"col-sm-6 form-group\">\n          \t<label for=\"phone\"></label>\n            <input id=\"phone\" formControlName=\"phone\" class=\"form-control\" type=\"text\" placeholder=\"Phone\" required maxlength=\"10\">\n            <p class=\"error\" *ngIf=\"contactform.controls['phone'].hasError('required') && isSubmited\">\n                phone required\n             </p>\n             <p class=\"error\" *ngIf=\"contactform.controls['phone'].hasError('minlength')\">\n              enter at leaset 10 number\n            </p>\n            <p class=\"error\" *ngIf=\"contactform.controls['phone'].hasError('pattern')\">\n              Invalid number\n            </p>\n            \n          </div>\n        </div>\n        <!--  <div class=\"group\"> -->\n        <div class=\"row\">\n          <div class=\"col-sm-6 form-group\">\n          \t <label for=\"email\"></label>\n            <input id=\"email\" formControlName=\"email\" class=\"form-control\" type=\"email\" placeholder=\"Email\" required>\n            <p class=\"error\" *ngIf=\"contactform.controls['email'].hasError('required') && isSubmited\">\n                email required\n             </p>\n             <p class=\"error\" *ngIf=\"contactform.controls['email'].hasError('pattern')\">\n              Invalid Email\n            </p> \n            \n          </div>\n\n\n  <!-- date -->\n          <div class=\"col-sm-6 form-group\">\n          \t<label for=\"date-to\"></label>\n            <div class=\"addon-right\">\n              <input id=\"date\" formControlName=\"date\" class=\"form-control\" type=\"date\" required>\n              <p class=\"error\" *ngIf=\"contactform.controls['date'].hasError('required') && isSubmited\">\n                  date required\n               </p> \n            </div>\n\n\n\n          </div>\n        </div>\n\n        <!--  <div class=\"group\"> -->\n        <div class=\"row\">\n          <div class=\"col-sm-6\">\n            <label for=\"date-to\"></label>\n            <select id=\"adults\" formControlName=\"adults\" class=\"form-control\">\n              <option value=\"\">No of Adults</option>\n              <option value=\"1 Person\">1 Person</option>\n              <option value=\"2 Persons\">2 Persons</option>\n              <option value=\"3 Persons\">3 Persons</option>\n              <option value=\"4 Persons\">4 Persons</option>\n              <option value=\"5 Persons\">5 Persons</option>\n              <option value=\"6 Persons\">6 Persons</option>\n              <option value=\"7 Persons\">7 Persons</option>\n              <option value=\"8 Persons\">8 Persons</option>\n              <option value=\"Group\">Group</option>\n\n            </select>\n            <p class=\"error\" *ngIf=\"contactform.controls['adults'].hasError('required') && isSubmited\">\n                adults required\n             </p> \n          </div>\n\n\n          <div class=\"col-sm-6 form-group\">\n            <!--  <label for=\"children\">Children</label> -->\n            <label for=\"date-to\"></label>\n            <div>\n              <select id=\"children\" formControlName=\"children\" class=\"form-control\">\n                <option value=\"\">No of kids</option>\n\n                <option value=\"0 kids\">0 kids</option>\n                <option value=\"1 kids\">1 kids</option>\n\n                <option value=\"2 kids\">2 kids</option>\n\n                <option value=\"3 kids\">3 kids</option>\n\n                <option value=\"4 kids\">4 kids</option>\n\n                <option value=\"5 kids\">5 kids</option>\n\n                <option value=\"6 kids\">6 kids</option>\n\n                <option value=\"Group\">Group</option>\n\n              </select>\n              <p class=\"error\" *ngIf=\"contactform.controls['children'].hasError('required') && isSubmited\">\n                  children required\n               </p> \n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-sm-6 form-group\">\n\n            <label for=\"date-to\"></label>\n            <select id=\"select_budget\" formControlName=\"SB\" class=\"form-control\">\n              <option value=\"\">Select Your Budget</option>\n              <option value=\"Economical\">Economical</option>\n              <option value=\"Standard\">Standard</option>\n              <option value=\"Luxury\">Luxury</option>\n            </select>\n            <p class=\"error\" *ngIf=\"contactform.controls['SB'].hasError('required') && isSubmited\">\n                select_budget required\n             </p> \n          \t\n           \n            \n          </div>\n          <div class=\"col-sm-6 form-group\">\n            <label for=\"date-to\"></label>\n            \n                        <select id=\"select_package\" formControlName=\"SP\" class=\"form-control\" placeholder=\"\">\n                          <option value=\"\">Select Tour Package</option>\n                          <option value=\"2N/3D Jim Corbet\">Deluxe</option>\n                          <option value=\"3N/4D Jim Corbet\">Super Deluxe</option>\n                          <option value=\"4N/5D Jim Corbet\">Luxury</option>\n                        </select>\n                        <p class=\"error\" *ngIf=\"contactform.controls['SP'].hasError('required') && isSubmited\">\n                            select_package required\n                         </p> \n            \n                       \n                      </div>        </div>\n\n        <!-- <div class=\"col-sm-12 form-group\"> -->\n          <label for=\"your_message\"></label>\n          <div>\n            <textarea id=\"your_message\" formControlName=\"message\" type=\"text\" class=\"form-control\" placeholder=\"Your message\">\n               </textarea>\n               <!-- <p class=\"error\" *ngIf=\"contactform.controls['message'].hasError('required') && isSubmited\">\n                  message required\n               </p> -->\n              \n          </div>\n        <!-- </div> -->\n        <!-- <div class=\"col-sm-12 form-group submit\"> -->\n\n          <label class=\"empty\"></label>\n          <button class=\"btn btn-success mybtn\" name=\"submit\"  value=\"Submit\">submit</button>\n        <!-- </div> -->\n\n        <div id=\"form-loading\" class=\"hide\">\n          <i class=\"fa fa-circle-o-notch fa-spin\"></i>\n        </div>\n      </form>\n    </div>\n\n  </div>\n\n</div>\n<div class=\"container-fluid img\">\n  <div class=\"row\">\n    <div class=\"col-sm-4 img_paddings\">\n      <img src=\"/assets/images/cor.jpg\" width=\"100%\" height=\"300px\" alt=\"image\">\n    </div>\n    <div class=\"col-sm-4 img_paddings\">\n      <img src=\"/assets/images/cor1.jpg\" width=\"100%\" height=\"300px\" alt=\"image\">\n    </div>\n    <div class=\"col-sm-4 img_paddings\">\n      <img src=\"/assets/images/cor3.jpg\" width=\"100%\" height=\"300px\" alt=\"image\">\n    </div>\n  </div>\n</div>\n\n<div class=\"footer\">\n  <nav class=\"navbar navbar-light bg-dark fu\">\n   \n\n\n    <!-- <div class=\"social-icon\">\n              <div class=\"col-md-4\">\n                <ul class=\"social-network\">\n                  <li><a href=\"#\" class=\"fb tool-tip\" title=\"Facebook\"><i class=\"fa fa-facebook\"></i></a></li>\n                  <li><a href=\"#\" class=\"twitter tool-tip\" title=\"Twitter\"><i class=\"fa fa-twitter\"></i></a></li>\n                  <li><a href=\"#\" class=\"gplus tool-tip\" title=\"Google Plus\"><i class=\"fa fa-google-plus\"></i></a></li>\n                  <li><a href=\"#\" class=\"linkedin tool-tip\" title=\"Linkedin\"><i class=\"fa fa-linkedin\"></i></a></li>\n                  <li><a href=\"#\" class=\"ytube tool-tip\" title=\"You Tube\"><i class=\"fa fa-youtube-play\"></i></a></li>\n                </ul>\n              </div>\n            </div> -->\n\n    <div class=\"col-md-12\">\n      <div class=\"copyright\" style=\"float:right;\">\n        &copy; Company Theme. All Rights Reserved.\n        <div class=\"credits\">\n          <!--\n                    All the links in the footer should remain intact.\n                    You can delete the links only if you purchased the pro version.\n                    Licensing information: https://bootstrapmade.com/license/\n                    Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=Company\n                  -->\n          \n          <!-- <span style=\"text-transform:uppercase; color: sandybrown;\">Vandana</span> -->\n        </div>\n      </div>\n\n\n      <div class=\"pull-right\">\n        <a href=\"#home\" class=\"scrollup\">\n          <i class=\"fa fa-angle-up fa-3x\"></i>\n        </a>\n      </div>\n    </div>\n  </nav>\n</div>\n<p>\n  corbett works!\n</p>\n"

/***/ }),

/***/ "./src/app/corbett/corbett.component.ts":
/*!**********************************************!*\
  !*** ./src/app/corbett/corbett.component.ts ***!
  \**********************************************/
/*! exports provided: CorbettComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorbettComponent", function() { return CorbettComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_query_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/query.service */ "./src/app/query.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CorbettComponent = /** @class */ (function () {
    function CorbettComponent(fb, _service, toastr, spinnerService) {
        this.fb = fb;
        this._service = _service;
        this.toastr = toastr;
        this.spinnerService = spinnerService;
        this.isSubmited = false;
    }
    CorbettComponent.prototype.ngOnInit = function () {
        this.contactform = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[A-Za-z -]+$/)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^-?(|[0-9]\d*)?$/)]],
            message: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            SP: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            SB: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            adults: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            children: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            date: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    };
    CorbettComponent.prototype.contactformdetail = function () {
        var _this = this;
        if (this.contactform.invalid) {
            this.isSubmited = true;
            return;
        }
        this.spinnerService.show();
        this._service.query(this.contactform.value)
            .subscribe(function (res) {
            if (res.code === 200) {
                // this.contactform.reset(this.contactform.value);
                _this.toastr.success('Query send successfully');
                _this.spinnerService.hide();
            }
            else {
                _this.spinnerService.hide();
                _this.toastr.warning('Query not send');
            }
        });
    };
    CorbettComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-corbett',
            template: __webpack_require__(/*! ./corbett.component.html */ "./src/app/corbett/corbett.component.html"),
            styles: [__webpack_require__(/*! ./corbett.component.css */ "./src/app/corbett/corbett.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], src_app_query_service__WEBPACK_IMPORTED_MODULE_2__["QueryService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__["Ng4LoadingSpinnerService"]])
    ], CorbettComponent);
    return CorbettComponent;
}());



/***/ }),

/***/ "./src/app/lansdowne/lansdowne.component.css":
/*!***************************************************!*\
  !*** ./src/app/lansdowne/lansdowne.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2{color:red}\r\n\r\np{\r\n    color:white;\r\n}\r\n\r\n.pic{\r\nbackground-image: url(\"/assets/images/lbk.jpg\");\r\nbackground-size: cover;\r\nheight: auto;\r\n\r\n}\r\n\r\n.text{\r\n    color:greenyellow;\r\n    padding-top: 110px;\r\n    padding-left:60px\r\n}\r\n\r\n.form{\r\n    padding-top: 110px;\r\n\r\n    \r\n}\r\n\r\nli{\r\n    list-style-type:none\r\n}\r\n\r\n.error{\r\n  color: red;\r\n}\r\n\r\n.mybtn{\r\n    margin-top: 20px;\r\n    margin-bottom: 20px};\r\n\r\n.img_paddings{\r\n    margin-bottom: 6px;\r\n  }\r\n\r\n.text_align{\r\n    text-align: right;\r\n    color: antiquewhite;\r\n  }\r\n\r\nh6{color:powderblue}\r\n\r\n.img{padding-top: 20px}\r\n\r\n/* .footer{background-color:grey ;width:100%;height:100% } */\r\n\r\n.footer{padding-top: 20px ; color:white }\r\n\r\n.fu{text-align: center}"

/***/ }),

/***/ "./src/app/lansdowne/lansdowne.component.html":
/*!****************************************************!*\
  !*** ./src/app/lansdowne/lansdowne.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng4-loading-spinner> </ng4-loading-spinner>\n\n<nav class=\"navbar navbar-light bg-dark\">\n  <div class=\"row\" style=\"width:100%\">\n  <div  class=\"col-sm-6\"> \n\n  <a class=\"navbar-brand\" href=\"#\">\n      <img src=\"/assets/logo.png\" style=\"height: 63px; border-radius: 50%;\"alt=\"dsdsdsd\">\n  </a>\n\n  </div>\n  <div  class=\"col-sm-6 text_align\">\n        <span>+91-8077990871,+91-9219061344</span><br />\n        <span>tourmyuk@gmail.com</span>\n   \n  </div>\n\n</div>\n</nav>\n<div class=\"container-fluid pic\">\n  <div class=\"row\">\n    <div class=\"col-sm-7  text\">\n      <h1>\n        <b>Welcome <span>TO GOFREEHOLIDAY</span></b>\n      </h1>\n    <!--   <h1>\n       \n      </h1> -->\n      <p><i class=\"fa fa-beer\" aria-hidden=\"true\"></i>\n                               &nbsp;Welcome Drink on arrival.</p> \n                               <p><i class=\"fa fa-plus-circle\"></i>\n&nbsp;Stay In Resort On Double Occupancy Basis.</p>\n<p><i class=\"fa fa-cutlery\"></i>\n&nbsp;Breakfast,Lunch &amp; Dinner.</p>\n<p><i class=\"fa fa-life-ring\"></i>\n&nbsp;One Time Jungle Safari.</p>\n<p><i class=\"fa fa-info-circle\"></i>\n&nbsp;Complimentary Use Of Swimming Pool.</p>\n    \n    </div>\n\n    <div class=\"col-sm-5\">\n      <form name=\"contactform\" [formGroup]=\"contactform\" class=\"form\" method=\"post\" (submit)=\"contactformdetail()\">\n        <!-- <div id=\"form-content\"> -->\n         <h2 style=\"color:greenyellow;\"> Query Form</h2>\n        <div class=\"row\">\n          <div class=\"col-sm-6 form-group\">\n            <label for=\"date-to\"></label>\n            <div>\n              <!-- ::::{{f.name.errors.minlength}}{{f.name.errors.minlength}} -->\n              <input formControlName=\"name\" class=\"form-control\" type=\"text\" placeholder=\"Name\" required>\n              <p class=\"error\" *ngIf=\"contactform.controls['name'].hasError('required') && isSubmited\">\n                  name required\n               </p>\n               <p class=\"error\" *ngIf=\"contactform.controls['name'].hasError('maxlength')\">\n                Maximum 20 characters allowed\n              </p>\n              <p class=\"error\" *ngIf=\"contactform.controls['name'].hasError('minlength')\">\n               enter at leaset 3 characters\n              </p>\n              <p class=\"error\" *ngIf=\"contactform.controls['name'].hasError('pattern')\">\n                Invalid name\n              </p>\n            </div>\n          </div>\n           <!-- <label for=\"phone\">Phone</label> -->\n          <div class=\"col-sm-6 form-group\">\n          \t<label for=\"phone\"></label>\n            <input id=\"phone\" formControlName=\"phone\" class=\"form-control\" type=\"text\" placeholder=\"Phone\" required maxlength=\"10\">\n            <p class=\"error\" *ngIf=\"contactform.controls['phone'].hasError('required') && isSubmited\">\n                phone required\n             </p>\n             <p class=\"error\" *ngIf=\"contactform.controls['phone'].hasError('minlength')\">\n              enter at leaset 10 number\n            </p>\n            <p class=\"error\" *ngIf=\"contactform.controls['phone'].hasError('pattern')\">\n              Invalid number\n            </p>\n            \n          </div>\n        </div>\n        <!--  <div class=\"group\"> -->\n        <div class=\"row\">\n          <div class=\"col-sm-6 form-group\">\n          \t <label for=\"email\"></label>\n            <input id=\"email\" formControlName=\"email\" class=\"form-control\" type=\"email\" placeholder=\"Email\" required>\n            <p class=\"error\" *ngIf=\"contactform.controls['email'].hasError('required') && isSubmited\">\n                email required\n             </p>\n             <p class=\"error\" *ngIf=\"contactform.controls['email'].hasError('pattern')\">\n              Invalid Email\n            </p> \n            \n          </div>\n\n\n  <!-- date -->\n          <div class=\"col-sm-6 form-group\">\n          \t<label for=\"date-to\"></label>\n            <div class=\"addon-right\">\n              <input id=\"date\" formControlName=\"date\" class=\"form-control\" type=\"date\" required>\n              <p class=\"error\" *ngIf=\"contactform.controls['date'].hasError('required') && isSubmited\">\n                  date required\n               </p> \n            </div>\n\n\n\n          </div>\n        </div>\n\n        <!--  <div class=\"group\"> -->\n        <div class=\"row\">\n          <div class=\"col-sm-6\">\n            <label for=\"date-to\"></label>\n            <select id=\"adults\" formControlName=\"adults\" class=\"form-control\">\n              <option value=\"\">No of Adults</option>\n              <option value=\"1 Person\">1 Person</option>\n              <option value=\"2 Persons\">2 Persons</option>\n              <option value=\"3 Persons\">3 Persons</option>\n              <option value=\"4 Persons\">4 Persons</option>\n              <option value=\"5 Persons\">5 Persons</option>\n              <option value=\"6 Persons\">6 Persons</option>\n              <option value=\"7 Persons\">7 Persons</option>\n              <option value=\"8 Persons\">8 Persons</option>\n              <option value=\"Group\">Group</option>\n\n            </select>\n            <p class=\"error\" *ngIf=\"contactform.controls['adults'].hasError('required') && isSubmited\">\n                adults required\n             </p> \n          </div>\n\n\n          <div class=\"col-sm-6 form-group\">\n            <!--  <label for=\"children\">Children</label> -->\n            <label for=\"date-to\"></label>\n            <div>\n              <select id=\"children\" formControlName=\"children\" class=\"form-control\">\n                <option value=\"\">No of kids</option>\n\n                <option value=\"0 kids\">0 kids</option>\n                <option value=\"1 kids\">1 kids</option>\n\n                <option value=\"2 kids\">2 kids</option>\n\n                <option value=\"3 kids\">3 kids</option>\n\n                <option value=\"4 kids\">4 kids</option>\n\n                <option value=\"5 kids\">5 kids</option>\n\n                <option value=\"6 kids\">6 kids</option>\n\n                <option value=\"Group\">Group</option>\n\n              </select>\n              <p class=\"error\" *ngIf=\"contactform.controls['children'].hasError('required') && isSubmited\">\n                  children required\n               </p> \n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-sm-6 form-group\">\n\n            <label for=\"date-to\"></label>\n            <select id=\"select_budget\" formControlName=\"SB\" class=\"form-control\">\n              <option value=\"\">Select Your Budget</option>\n              <option value=\"Economical\">Economical</option>\n              <option value=\"Standard\">Standard</option>\n              <option value=\"Luxury\">Luxury</option>\n            </select>\n            <p class=\"error\" *ngIf=\"contactform.controls['SB'].hasError('required') && isSubmited\">\n                select_budget required\n             </p> \n          \t\n           \n            \n          </div>\n\n          <div class=\"col-sm-6 form-group\">\n<label for=\"date-to\"></label>\n\n            <select id=\"select_package\" formControlName=\"SP\" class=\"form-control\" placeholder=\"\">\n              <option value=\"\">Select Tour Package</option>\n              <option value=\"2N/3D Jim Corbet\">Deluxe</option>\n              <option value=\"3N/4D Jim Corbet\">Super Deluxe</option>\n              <option value=\"4N/5D Jim Corbet\">Luxury</option>\n            </select>\n            <p class=\"error\" *ngIf=\"contactform.controls['SP'].hasError('required') && isSubmited\">\n                select_package required\n             </p> \n\n           \n          </div>\n        </div>\n\n        <!-- <div class=\"col-sm-12 form-group\"> -->\n          <label for=\"your_message\"></label>\n          <div>\n            <textarea id=\"your_message\" formControlName=\"message\" type=\"text\" class=\"form-control\" placeholder=\"Your message\">\n               </textarea>\n               <!-- <p class=\"error\" *ngIf=\"contactform.controls['message'].hasError('required') && isSubmited\">\n                  message required\n               </p> -->\n              \n          </div>\n        <!-- </div> -->\n        <!-- <div class=\"col-sm-12 form-group submit\"> -->\n\n          <label class=\"empty\"></label>\n          <button class=\"btn btn-success mybtn\" name=\"submit\"  value=\"Submit\">submit</button>\n        <!-- </div> -->\n\n        <div id=\"form-loading\" class=\"hide\">\n          <i class=\"fa fa-circle-o-notch fa-spin\"></i>\n        </div>\n      </form>\n    </div>\n\n  </div>\n\n</div>\n<div class=\"container-fluid img\">\n  <div class=\"row\">\n    <div class=\"col-sm-4 img_paddings\">\n      <img src=\"/assets/images/lans1.jpg\" width=\"100%\" height=\"300px\" alt=\"image\">\n    </div>\n    <div class=\"col-sm-4 img_paddings\">\n      <img src=\"/assets/images/lans3.jpg\" width=\"100%\" height=\"300px\" alt=\"image\">\n    </div>\n    <div class=\"col-sm-4 img_paddings\">\n      <img src=\"/assets/images/lans.jpg\" width=\"100%\" height=\"300px\" alt=\"image\">\n    </div>\n  </div>\n</div>\n\n<div class=\"footer\">\n  <nav class=\"navbar navbar-light bg-dark fu\">\n   \n\n\n    <!-- <div class=\"social-icon\">\n              <div class=\"col-md-4\">\n                <ul class=\"social-network\">\n                  <li><a href=\"#\" class=\"fb tool-tip\" title=\"Facebook\"><i class=\"fa fa-facebook\"></i></a></li>\n                  <li><a href=\"#\" class=\"twitter tool-tip\" title=\"Twitter\"><i class=\"fa fa-twitter\"></i></a></li>\n                  <li><a href=\"#\" class=\"gplus tool-tip\" title=\"Google Plus\"><i class=\"fa fa-google-plus\"></i></a></li>\n                  <li><a href=\"#\" class=\"linkedin tool-tip\" title=\"Linkedin\"><i class=\"fa fa-linkedin\"></i></a></li>\n                  <li><a href=\"#\" class=\"ytube tool-tip\" title=\"You Tube\"><i class=\"fa fa-youtube-play\"></i></a></li>\n                </ul>\n              </div>\n            </div> -->\n\n    <div class=\"col-md-12\">\n      <div class=\"copyright\" style=\"float:right;\">\n        &copy; Company Theme. All Rights Reserved.\n        <div class=\"credits\">\n          <!--\n                    All the links in the footer should remain intact.\n                    You can delete the links only if you purchased the pro version.\n                    Licensing information: https://bootstrapmade.com/license/\n                    Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=Company\n                  -->\n         \n        </div>\n      </div>\n\n\n      <div class=\"pull-right\">\n        <a href=\"#home\" class=\"scrollup\">\n          <i class=\"fa fa-angle-up fa-3x\"></i>\n        </a>\n      </div>\n    </div>\n  </nav>\n</div>\n\n<!-- <p>\n  lansdowne works!\n</p> -->\n"

/***/ }),

/***/ "./src/app/lansdowne/lansdowne.component.ts":
/*!**************************************************!*\
  !*** ./src/app/lansdowne/lansdowne.component.ts ***!
  \**************************************************/
/*! exports provided: LansdowneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LansdowneComponent", function() { return LansdowneComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_query_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/query.service */ "./src/app/query.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LansdowneComponent = /** @class */ (function () {
    function LansdowneComponent(fb, _service, toastr, spinnerService) {
        this.fb = fb;
        this._service = _service;
        this.toastr = toastr;
        this.spinnerService = spinnerService;
        this.isSubmited = false;
    }
    LansdowneComponent.prototype.ngOnInit = function () {
        this.contactform = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[A-Za-z -]+$/)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^-?(|[0-9]\d*)?$/)]],
            message: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            SP: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            SB: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            adults: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            children: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            date: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    };
    LansdowneComponent.prototype.contactformdetail = function () {
        var _this = this;
        if (this.contactform.invalid) {
            this.isSubmited = true;
            return;
        }
        this.spinnerService.show();
        this._service.query(this.contactform.value)
            .subscribe(function (res) {
            if (res.code === 200) {
                // this.contactform.reset(this.contactform.value);
                _this.toastr.success('Query send successfully');
                _this.spinnerService.hide();
            }
            else {
                _this.spinnerService.hide();
                _this.toastr.warning('Query not send');
            }
        });
    };
    LansdowneComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lansdowne',
            template: __webpack_require__(/*! ./lansdowne.component.html */ "./src/app/lansdowne/lansdowne.component.html"),
            styles: [__webpack_require__(/*! ./lansdowne.component.css */ "./src/app/lansdowne/lansdowne.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], src_app_query_service__WEBPACK_IMPORTED_MODULE_2__["QueryService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__["Ng4LoadingSpinnerService"]])
    ], LansdowneComponent);
    return LansdowneComponent;
}());



/***/ }),

/***/ "./src/app/query.service.ts":
/*!**********************************!*\
  !*** ./src/app/query.service.ts ***!
  \**********************************/
/*! exports provided: QueryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryService", function() { return QueryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QueryService = /** @class */ (function () {
    function QueryService(http) {
        this.http = http;
        this.apiUrl = 'http://localhost:4002/';
    }
    QueryService.prototype.query = function (data) {
        console.log(data);
        return this.http.post(this.apiUrl + 'mailer', { data: data });
    };
    QueryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], QueryService);
    return QueryService;
}());



/***/ }),

/***/ "./src/app/rishikesh/rishikesh.component.css":
/*!***************************************************!*\
  !*** ./src/app/rishikesh/rishikesh.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2{color:red}\r\n\r\np{\r\n    color:white;\r\n}\r\n\r\n.pic{\r\nbackground-image: url(\"/assets/images/rishi4.jpg\");\r\nbackground-size: cover;\r\nheight: auto;\r\n\r\n}\r\n\r\n.text{\r\n    color:greenyellow;\r\n    padding-top: 110px;\r\n    padding-left:60px;\r\n}\r\n\r\n.text p{\r\n  color:#7c0a0a;\r\n   \r\n}\r\n\r\n.form{\r\n    padding-top: 110px;\r\n\r\n    \r\n}\r\n\r\nli{\r\n    list-style-type:none\r\n}\r\n\r\n.error{\r\n  color: red;\r\n}\r\n\r\n.mybtn{\r\n    margin-top: 20px;\r\n    margin-bottom: 20px};\r\n\r\n.img_paddings{\r\n    margin-bottom: 6px;\r\n  }\r\n\r\n.text_align{\r\n    text-align: right;\r\n    color: antiquewhite;\r\n  }\r\n\r\nh6{color:powderblue}\r\n\r\n.img{padding-top: 20px}\r\n\r\n/* .footer{background-color:grey ;width:100%;height:100% } */\r\n\r\n.footer{padding-top: 20px ; color:white }\r\n\r\n.fu{text-align: center}"

/***/ }),

/***/ "./src/app/rishikesh/rishikesh.component.html":
/*!****************************************************!*\
  !*** ./src/app/rishikesh/rishikesh.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng4-loading-spinner> </ng4-loading-spinner>\n\n<nav class=\"navbar navbar-light bg-dark\">\n  <div class=\"row\" style=\"width:100%\">\n  <div  class=\"col-sm-6\"> \n\n  <a class=\"navbar-brand\" href=\"#\">\n      <img src=\"/assets/logo.png\" style=\"height: 63px; border-radius: 50%;\"alt=\"dsdsdsd\">\n  </a>\n\n  </div>\n  <div  class=\"col-sm-6 text_align\">\n        <span>+91-8077990871,+91-9219061344</span><br />\n        <span>tourmyuk@gmail.com</span>\n   \n  </div>\n\n</div>\n</nav>\n<div class=\"container-fluid pic\">\n  <div class=\"row\">\n    <div class=\"col-sm-7  text\">\n      <h1>\n        <b>Welcome <span>TO GOFREEHOLIDAY</span></b>\n      </h1>\n    <!--   <h1>\n       \n      </h1> -->\n      <b><h3><p><i class=\"fa fa-beer\" aria-hidden=\"true\"></i>\n                               &nbsp;Welcome to Rishikesh</p> </h3>\n                               <p><i class=\"fa fa-plus-circle\"></i>\n&nbsp;One night camping @1500/-pp.</p>\n<p><i class=\"fa fa-cutlery\"></i>\n&nbsp;Breakfast,Lunch &amp; Dinner.</p>\n<p><i class=\"fa fa-life-ring\"></i>\n&nbsp;Evening bonfire with snacks.</p>\n<p><i class=\"fa fa-info-circle\"></i>\n&nbsp;Stay in riverside tents.</p>\n<p><i class=\"fa fa-info-circle\"></i>\n&nbsp;River rafting.</p></b>\n    \n    </div>\n\n    <div class=\"col-sm-5\">\n      <form name=\"contactform\" [formGroup]=\"contactform\" class=\"form\" method=\"post\" (submit)=\"contactformdetail()\">\n        <!-- <div id=\"form-content\"> -->\n         <h2 style=\"color:greenyellow;\"> Query Form</h2>\n        <div class=\"row\">\n          <div class=\"col-sm-6 form-group\">\n            <label for=\"date-to\"></label>\n            <div>\n              <!-- ::::{{f.name.errors.minlength}}{{f.name.errors.minlength}} -->\n              <input formControlName=\"name\" class=\"form-control\" type=\"text\" placeholder=\"Name\" required>\n              <p class=\"error\" *ngIf=\"contactform.controls['name'].hasError('required') && isSubmited\">\n                  name required\n               </p>\n               <p class=\"error\" *ngIf=\"contactform.controls['name'].hasError('maxlength')\">\n                Maximum 20 characters allowed\n              </p>\n              <p class=\"error\" *ngIf=\"contactform.controls['name'].hasError('minlength')\">\n               enter at leaset 3 characters\n              </p>\n              <p class=\"error\" *ngIf=\"contactform.controls['name'].hasError('pattern')\">\n                Invalid name\n              </p>\n            </div>\n          </div>\n           <!-- <label for=\"phone\">Phone</label> -->\n          <div class=\"col-sm-6 form-group\">\n            <label for=\"phone\"></label>\n            <input id=\"phone\" formControlName=\"phone\" class=\"form-control\" type=\"text\" placeholder=\"Phone\" required maxlength=\"10\">\n            <p class=\"error\" *ngIf=\"contactform.controls['phone'].hasError('required') && isSubmited\">\n                phone required\n             </p>\n             <p class=\"error\" *ngIf=\"contactform.controls['phone'].hasError('minlength')\">\n              enter at leaset 10 number\n            </p>\n            <p class=\"error\" *ngIf=\"contactform.controls['phone'].hasError('pattern')\">\n              Invalid number\n            </p>\n            \n          </div>\n        </div>\n        <!--  <div class=\"group\"> -->\n        <div class=\"row\">\n          <div class=\"col-sm-6 form-group\">\n             <label for=\"email\"></label>\n            <input id=\"email\" formControlName=\"email\" class=\"form-control\" type=\"email\" placeholder=\"Email\" required>\n            <p class=\"error\" *ngIf=\"contactform.controls['email'].hasError('required') && isSubmited\">\n                email required\n             </p>\n             <p class=\"error\" *ngIf=\"contactform.controls['email'].hasError('pattern')\">\n              Invalid Email\n            </p> \n            \n          </div>\n\n\n  <!-- date -->\n          <div class=\"col-sm-6 form-group\">\n            <label for=\"date-to\"></label>\n            <div class=\"addon-right\">\n              <input id=\"date\" formControlName=\"date\" class=\"form-control\" type=\"date\" required>\n              <p class=\"error\" *ngIf=\"contactform.controls['date'].hasError('required') && isSubmited\">\n                  date required\n               </p> \n            </div>\n\n\n\n          </div>\n        </div>\n\n        <!--  <div class=\"group\"> -->\n        <div class=\"row\">\n          <div class=\"col-sm-6\">\n            <label for=\"date-to\"></label>\n            <select id=\"adults\" formControlName=\"adults\" class=\"form-control\">\n              <option value=\"\">No of Adults</option>\n              <option value=\"1 Person\">1 Person</option>\n              <option value=\"2 Persons\">2 Persons</option>\n              <option value=\"3 Persons\">3 Persons</option>\n              <option value=\"4 Persons\">4 Persons</option>\n              <option value=\"5 Persons\">5 Persons</option>\n              <option value=\"6 Persons\">6 Persons</option>\n              <option value=\"7 Persons\">7 Persons</option>\n              <option value=\"8 Persons\">8 Persons</option>\n              <option value=\"Group\">Group</option>\n\n            </select>\n            <p class=\"error\" *ngIf=\"contactform.controls['adults'].hasError('required') && isSubmited\">\n                adults required\n             </p> \n          </div>\n\n\n          <div class=\"col-sm-6 form-group\">\n            <!--  <label for=\"children\">Children</label> -->\n            <label for=\"date-to\"></label>\n            <div>\n              <select id=\"children\" formControlName=\"children\" class=\"form-control\">\n                <option value=\"\">No of kids</option>\n\n                <option value=\"0 kids\">0 kids</option>\n                <option value=\"1 kids\">1 kids</option>\n\n                <option value=\"2 kids\">2 kids</option>\n\n                <option value=\"3 kids\">3 kids</option>\n\n                <option value=\"4 kids\">4 kids</option>\n\n                <option value=\"5 kids\">5 kids</option>\n\n                <option value=\"6 kids\">6 kids</option>\n\n                <option value=\"Group\">Group</option>\n\n              </select>\n              <p class=\"error\" *ngIf=\"contactform.controls['children'].hasError('required') && isSubmited\">\n                  children required\n               </p> \n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-sm-6 form-group\">\n\n            <label for=\"date-to\"></label>\n            <select id=\"select_budget\" formControlName=\"SB\" class=\"form-control\">\n              <option value=\"\">Select Your Budget</option>\n              <option value=\"Economical\">Economical</option>\n              <option value=\"Standard\">Standard</option>\n              <option value=\"Luxury\">Luxury</option>\n            </select>\n            <p class=\"error\" *ngIf=\"contactform.controls['SB'].hasError('required') && isSubmited\">\n                select_budget required\n             </p> \n            \n           \n            \n          </div>\n\n          <div class=\"col-sm-6 form-group\">\n            <label for=\"date-to\"></label>\n            \n                        <select id=\"select_package\" formControlName=\"SP\" class=\"form-control\" placeholder=\"\">\n                          <option value=\"\">Select Tour Package</option>\n                          <option value=\"2N/3D Jim Corbet\">Deluxe</option>\n                          <option value=\"3N/4D Jim Corbet\">Super Deluxe</option>\n                          <option value=\"4N/5D Jim Corbet\">Luxury</option>\n                        </select>\n                        <p class=\"error\" *ngIf=\"contactform.controls['SP'].hasError('required') && isSubmited\">\n                            select_package required\n                         </p> \n            \n                       \n                      </div>\n        </div>\n\n        <!-- <div class=\"col-sm-12 form-group\"> -->\n          <label for=\"your_message\"></label>\n          <div>\n            <textarea id=\"your_message\" formControlName=\"message\" type=\"text\" class=\"form-control\" placeholder=\"Your message\">\n               </textarea>\n               <!-- <p class=\"error\" *ngIf=\"contactform.controls['message'].hasError('required') && isSubmited\">\n                  message required\n               </p> -->\n              \n          </div>\n        <!-- </div> -->\n        <!-- <div class=\"col-sm-12 form-group submit\"> -->\n\n          <label class=\"empty\"></label>\n          <button class=\"btn btn-success mybtn\" name=\"submit\"  value=\"Submit\">submit</button>\n        <!-- </div> -->\n\n        <div id=\"form-loading\" class=\"hide\">\n          <i class=\"fa fa-circle-o-notch fa-spin\"></i>\n        </div>\n      </form>\n    </div>\n\n  </div>\n\n</div>\n<div class=\"container-fluid img\">\n  <div class=\"row\">\n    <div class=\"col-sm-4 img_paddings\">\n      <img src=\"/assets/images/rishi.png\" width=\"100%\" height=\"300px\" alt=\"image\">\n    </div>\n    <div class=\"col-sm-4 img_paddings\">\n      <img src=\"/assets/images/risi3.jpg\" width=\"100%\" height=\"300px\" alt=\"image\">\n    </div>\n    <div class=\"col-sm-4 img_paddings\">\n      <img src=\"/assets/images/rishi2.jpg\" width=\"100%\" height=\"300px\" alt=\"image\">\n    </div>\n  </div>\n</div>\n\n<div class=\"footer\">\n  <nav class=\"navbar navbar-light bg-dark fu\">\n   \n\n\n    <!-- <div class=\"social-icon\">\n              <div class=\"col-md-4\">\n                <ul class=\"social-network\">\n                  <li><a href=\"#\" class=\"fb tool-tip\" title=\"Facebook\"><i class=\"fa fa-facebook\"></i></a></li>\n                  <li><a href=\"#\" class=\"twitter tool-tip\" title=\"Twitter\"><i class=\"fa fa-twitter\"></i></a></li>\n                  <li><a href=\"#\" class=\"gplus tool-tip\" title=\"Google Plus\"><i class=\"fa fa-google-plus\"></i></a></li>\n                  <li><a href=\"#\" class=\"linkedin tool-tip\" title=\"Linkedin\"><i class=\"fa fa-linkedin\"></i></a></li>\n                  <li><a href=\"#\" class=\"ytube tool-tip\" title=\"You Tube\"><i class=\"fa fa-youtube-play\"></i></a></li>\n                </ul>\n              </div>\n            </div> -->\n\n    <div class=\"col-md-12\">\n      <div class=\"copyright\" style=\"float:right;\">\n        &copy; Company Theme. All Rights Reserved.\n        <div class=\"credits\">\n          <!--\n                    All the links in the footer should remain intact.\n                    You can delete the links only if you purchased the pro version.\n                    Licensing information: https://bootstrapmade.com/license/\n                    Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=Company\n                  -->\n          \n        </div>\n      </div>\n\n\n      <div class=\"pull-right\">\n        <a href=\"#home\" class=\"scrollup\">\n          <i class=\"fa fa-angle-up fa-3x\"></i>\n        </a>\n      </div>\n    </div>\n  </nav>\n</div>\n<!-- <p>\n  corbett works!\n</p> -->\n"

/***/ }),

/***/ "./src/app/rishikesh/rishikesh.component.ts":
/*!**************************************************!*\
  !*** ./src/app/rishikesh/rishikesh.component.ts ***!
  \**************************************************/
/*! exports provided: RishikeshComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RishikeshComponent", function() { return RishikeshComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_query_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/query.service */ "./src/app/query.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RishikeshComponent = /** @class */ (function () {
    function RishikeshComponent(fb, _service, toastr, spinnerService) {
        this.fb = fb;
        this._service = _service;
        this.toastr = toastr;
        this.spinnerService = spinnerService;
        this.isSubmited = false;
    }
    RishikeshComponent.prototype.ngOnInit = function () {
        this.contactform = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[A-Za-z -]+$/)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^-?(|[0-9]\d*)?$/)]],
            message: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            SP: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            SB: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            adults: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            children: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            date: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    };
    RishikeshComponent.prototype.contactformdetail = function () {
        var _this = this;
        if (this.contactform.invalid) {
            this.isSubmited = true;
            return;
        }
        this.spinnerService.show();
        this._service.query(this.contactform.value)
            .subscribe(function (res) {
            if (res.code === 200) {
                // this.contactform.reset(this.contactform.value);
                _this.toastr.success('Query send successfully');
                _this.spinnerService.hide();
            }
            else {
                _this.spinnerService.hide();
                _this.toastr.warning('Query not send');
            }
        });
    };
    RishikeshComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rishikesh',
            template: __webpack_require__(/*! ./rishikesh.component.html */ "./src/app/rishikesh/rishikesh.component.html"),
            styles: [__webpack_require__(/*! ./rishikesh.component.css */ "./src/app/rishikesh/rishikesh.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], src_app_query_service__WEBPACK_IMPORTED_MODULE_2__["QueryService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__["Ng4LoadingSpinnerService"]])
    ], RishikeshComponent);
    return RishikeshComponent;
}());



/***/ }),

/***/ "./src/app/uttarakhand/uttarakhand.component.css":
/*!*******************************************************!*\
  !*** ./src/app/uttarakhand/uttarakhand.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2{color:red}\r\n\r\np{\r\n    color:white;\r\n}\r\n\r\n.pic{\r\nbackground-image: url(\"/assets/images/uk2.jpg\");\r\nbackground-size: cover;\r\nheight: auto;\r\n\r\n}\r\n\r\n.text{\r\n    color:greenyellow;\r\n    padding-top: 110px;\r\n    padding-left:60px\r\n}\r\n\r\n.form{\r\n    padding-top: 110px;\r\n\r\n    \r\n}\r\n\r\nli{\r\n    list-style-type:none\r\n}\r\n\r\n.error{\r\n  color: red;\r\n}\r\n\r\n.mybtn{\r\n    margin-top: 20px;\r\n    margin-bottom: 20px};\r\n\r\n.img_paddings{\r\n    margin-bottom: 6px;\r\n  }\r\n\r\n.text_align{\r\n    text-align: right;\r\n    color: antiquewhite;\r\n  }\r\n\r\nh6{color:powderblue}\r\n\r\n.img{padding-top: 20px}\r\n\r\n/* .footer{background-color:grey ;width:100%;height:100% } */\r\n\r\n.footer{padding-top: 20px ; color:white }\r\n\r\n.fu{text-align: center}"

/***/ }),

/***/ "./src/app/uttarakhand/uttarakhand.component.html":
/*!********************************************************!*\
  !*** ./src/app/uttarakhand/uttarakhand.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng4-loading-spinner> </ng4-loading-spinner>\n\n<nav class=\"navbar navbar-light bg-dark\">\n  <div class=\"row\" style=\"width:100%\">\n  <div  class=\"col-sm-6\"> \n\n  <a class=\"navbar-brand\" href=\"#\">\n      <img src=\"/assets/logo.png\" style=\"height: 63px; border-radius: 50%;\"alt=\"dsdsdsd\">\n  </a>\n\n  </div>\n  <div  class=\"col-sm-6 text_align\">\n        <span>+91-8077990871,+91-9219061344</span><br />\n        <span>tourmyuk@gmail.com</span>\n   \n  </div>\n\n</div>\n</nav>\n<div class=\"container-fluid pic\">\n  <div class=\"row\">\n    <div class=\"col-sm-7  text\">\n      <h1>\n        <b>Welcome <span>TO GOFREEHOLIDAY</span></b>\n      </h1>\n    <!--   <h1>\n       \n      </h1> -->\n      <p><i class=\"fa fa-beer\" aria-hidden=\"true\"></i>\n                               &nbsp;Welcome Drink on arrival.</p> \n                               <p><i class=\"fa fa-plus-circle\"></i>\n&nbsp;Stay In Resort On Double Occupancy Basis.</p>\n<p><i class=\"fa fa-cutlery\"></i>\n&nbsp;Breakfast,Lunch &amp; Dinner.</p>\n<p><i class=\"fa fa-life-ring\"></i>\n&nbsp;One Time Jungle Safari.</p>\n<p><i class=\"fa fa-info-circle\"></i>\n&nbsp;Complimentary Use Of Swimming Pool.</p>\n    \n    </div>\n\n    <div class=\"col-sm-5\">\n      <form name=\"contactform\" [formGroup]=\"contactform\" class=\"form\" method=\"post\" (submit)=\"contactformdetail()\">\n        <!-- <div id=\"form-content\"> -->\n         <h2 style=\"color:greenyellow;\"> Query Form</h2>\n        <div class=\"row\">\n          <div class=\"col-sm-6 form-group\">\n            <label for=\"date-to\"></label>\n            <div>\n              <!-- ::::{{f.name.errors.minlength}}{{f.name.errors.minlength}} -->\n              <input formControlName=\"name\" class=\"form-control\" type=\"text\" placeholder=\"Name\" required>\n              <p class=\"error\" *ngIf=\"contactform.controls['name'].hasError('required') && isSubmited\">\n                  name required\n               </p>\n               <p class=\"error\" *ngIf=\"contactform.controls['name'].hasError('maxlength')\">\n                Maximum 20 characters allowed\n              </p>\n              <p class=\"error\" *ngIf=\"contactform.controls['name'].hasError('minlength')\">\n               enter at leaset 3 characters\n              </p>\n              <p class=\"error\" *ngIf=\"contactform.controls['name'].hasError('pattern')\">\n                Invalid name\n              </p>\n            </div>\n          </div>\n           <!-- <label for=\"phone\">Phone</label> -->\n          <div class=\"col-sm-6 form-group\">\n            <label for=\"phone\"></label>\n            <input id=\"phone\" formControlName=\"phone\" class=\"form-control\" type=\"text\" placeholder=\"Phone\" required maxlength=\"10\">\n            <p class=\"error\" *ngIf=\"contactform.controls['phone'].hasError('required') && isSubmited\">\n                phone required\n             </p>\n             <p class=\"error\" *ngIf=\"contactform.controls['phone'].hasError('minlength')\">\n              enter at leaset 10 number\n            </p>\n            <p class=\"error\" *ngIf=\"contactform.controls['phone'].hasError('pattern')\">\n              Invalid number\n            </p>\n            \n          </div>\n        </div>\n        <!--  <div class=\"group\"> -->\n        <div class=\"row\">\n          <div class=\"col-sm-6 form-group\">\n             <label for=\"email\"></label>\n            <input id=\"email\" formControlName=\"email\" class=\"form-control\" type=\"email\" placeholder=\"Email\" required>\n            <p class=\"error\" *ngIf=\"contactform.controls['email'].hasError('required') && isSubmited\">\n                email required\n             </p>\n             <p class=\"error\" *ngIf=\"contactform.controls['email'].hasError('pattern')\">\n              Invalid Email\n            </p> \n            \n          </div>\n\n\n  <!-- date -->\n          <div class=\"col-sm-6 form-group\">\n            <label for=\"date-to\"></label>\n            <div class=\"addon-right\">\n              <input id=\"date\" formControlName=\"date\" class=\"form-control\" type=\"date\" required>\n              <p class=\"error\" *ngIf=\"contactform.controls['date'].hasError('required') && isSubmited\">\n                  date required\n               </p> \n            </div>\n\n\n\n          </div>\n        </div>\n\n        <!--  <div class=\"group\"> -->\n        <div class=\"row\">\n          <div class=\"col-sm-6\">\n            <label for=\"date-to\"></label>\n            <select id=\"adults\" formControlName=\"adults\" class=\"form-control\">\n              <option value=\"\">No of Adults</option>\n              <option value=\"1 Person\">1 Person</option>\n              <option value=\"2 Persons\">2 Persons</option>\n              <option value=\"3 Persons\">3 Persons</option>\n              <option value=\"4 Persons\">4 Persons</option>\n              <option value=\"5 Persons\">5 Persons</option>\n              <option value=\"6 Persons\">6 Persons</option>\n              <option value=\"7 Persons\">7 Persons</option>\n              <option value=\"8 Persons\">8 Persons</option>\n              <option value=\"Group\">Group</option>\n\n            </select>\n            <p class=\"error\" *ngIf=\"contactform.controls['adults'].hasError('required') && isSubmited\">\n                adults required\n             </p> \n          </div>\n\n\n          <div class=\"col-sm-6 form-group\">\n            <!--  <label for=\"children\">Children</label> -->\n            <label for=\"date-to\"></label>\n            <div>\n              <select id=\"children\" formControlName=\"children\" class=\"form-control\">\n                <option value=\"\">No of kids</option>\n\n                <option value=\"0 kids\">0 kids</option>\n                <option value=\"1 kids\">1 kids</option>\n\n                <option value=\"2 kids\">2 kids</option>\n\n                <option value=\"3 kids\">3 kids</option>\n\n                <option value=\"4 kids\">4 kids</option>\n\n                <option value=\"5 kids\">5 kids</option>\n\n                <option value=\"6 kids\">6 kids</option>\n\n                <option value=\"Group\">Group</option>\n\n              </select>\n              <p class=\"error\" *ngIf=\"contactform.controls['children'].hasError('required') && isSubmited\">\n                  children required\n               </p> \n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-sm-6 form-group\">\n\n            <label for=\"date-to\"></label>\n            <select id=\"select_budget\" formControlName=\"SB\" class=\"form-control\">\n              <option value=\"\">Select Your Budget</option>\n              <option value=\"Economical\">Economical</option>\n              <option value=\"Standard\">Standard</option>\n              <option value=\"Luxury\">Luxury</option>\n            </select>\n            <p class=\"error\" *ngIf=\"contactform.controls['SB'].hasError('required') && isSubmited\">\n                select_budget required\n             </p> \n            \n           \n            \n          </div>\n\n          <div class=\"col-sm-6 form-group\">\n            <label for=\"date-to\"></label>\n            \n                        <select id=\"select_package\" formControlName=\"SP\" class=\"form-control\" placeholder=\"\">\n                          <option value=\"\">Select Tour Package</option>\n                          <option value=\"2N/3D Jim Corbet\">Deluxe</option>\n                          <option value=\"3N/4D Jim Corbet\">Super Deluxe</option>\n                          <option value=\"4N/5D Jim Corbet\">Luxury</option>\n                        </select>\n                        <p class=\"error\" *ngIf=\"contactform.controls['SP'].hasError('required') && isSubmited\">\n                            select_package required\n                         </p> \n            \n                       \n                      </div>\n        </div>\n\n        <!-- <div class=\"col-sm-12 form-group\"> -->\n          <label for=\"your_message\"></label>\n          <div>\n            <textarea id=\"your_message\" formControlName=\"message\" type=\"text\" class=\"form-control\" placeholder=\"Your message\">\n               </textarea>\n               <!-- <p class=\"error\" *ngIf=\"contactform.controls['message'].hasError('required') && isSubmited\">\n                  message required\n               </p> -->\n              \n          </div>\n        <!-- </div> -->\n        <!-- <div class=\"col-sm-12 form-group submit\"> -->\n\n          <label class=\"empty\"></label>\n          <button class=\"btn btn-success mybtn\" name=\"submit\"  value=\"Submit\">submit</button>\n        <!-- </div> -->\n\n        <div id=\"form-loading\" class=\"hide\">\n          <i class=\"fa fa-circle-o-notch fa-spin\"></i>\n        </div>\n      </form>\n    </div>\n\n  </div>\n\n</div>\n<div class=\"container-fluid img\">\n  <div class=\"row\">\n    <div class=\"col-sm-4 img_paddings\">\n      <img src=\"/assets/images/haridwar.png\" width=\"100%\" height=\"300px\" alt=\"image\">\n    </div>\n    <div class=\"col-sm-4 img_paddings\">\n      <img src=\"/assets/images/uk.jpg\" width=\"100%\" height=\"300px\" alt=\"image\">\n    </div>\n    <div class=\"col-sm-4 img_paddings\">\n      <img src=\"/assets/images/uk1.jpg\" width=\"100%\" height=\"300px\" alt=\"image\">\n    </div>\n  </div>\n</div>\n\n<div class=\"footer\">\n  <nav class=\"navbar navbar-light bg-dark fu\">\n   \n\n\n    <!-- <div class=\"social-icon\">\n              <div class=\"col-md-4\">\n                <ul class=\"social-network\">\n                  <li><a href=\"#\" class=\"fb tool-tip\" title=\"Facebook\"><i class=\"fa fa-facebook\"></i></a></li>\n                  <li><a href=\"#\" class=\"twitter tool-tip\" title=\"Twitter\"><i class=\"fa fa-twitter\"></i></a></li>\n                  <li><a href=\"#\" class=\"gplus tool-tip\" title=\"Google Plus\"><i class=\"fa fa-google-plus\"></i></a></li>\n                  <li><a href=\"#\" class=\"linkedin tool-tip\" title=\"Linkedin\"><i class=\"fa fa-linkedin\"></i></a></li>\n                  <li><a href=\"#\" class=\"ytube tool-tip\" title=\"You Tube\"><i class=\"fa fa-youtube-play\"></i></a></li>\n                </ul>\n              </div>\n            </div> -->\n\n    <div class=\"col-md-12\">\n      <div class=\"copyright\" style=\"float:right;\">\n        &copy; Company Theme. All Rights Reserved.\n        <!-- <div class=\"credits\">\n          <!--\n                    All the links in the footer should remain intact.\n                    You can delete the links only if you purchased the pro version.\n                    Licensing information: https://bootstrapmade.com/license/\n                    Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=Company\n                  -->\n          <!-- Designed by -->\n          <!-- <span style=\"text-transform:uppercase; color: sandybrown;\">Vandana</span> -->\n        <!-- </div> -->\n      </div>\n\n\n      <div class=\"pull-right\">\n        <a href=\"#home\" class=\"scrollup\">\n          <i class=\"fa fa-angle-up fa-3x\"></i>\n        </a>\n      </div>\n    </div>\n  </nav>\n</div>\n<p>\n  corbett works!\n</p>\n"

/***/ }),

/***/ "./src/app/uttarakhand/uttarakhand.component.ts":
/*!******************************************************!*\
  !*** ./src/app/uttarakhand/uttarakhand.component.ts ***!
  \******************************************************/
/*! exports provided: UttarakhandComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UttarakhandComponent", function() { return UttarakhandComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_query_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/query.service */ "./src/app/query.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UttarakhandComponent = /** @class */ (function () {
    function UttarakhandComponent(fb, _service, toastr, spinnerService) {
        this.fb = fb;
        this._service = _service;
        this.toastr = toastr;
        this.spinnerService = spinnerService;
        this.isSubmited = false;
    }
    UttarakhandComponent.prototype.ngOnInit = function () {
        this.contactform = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[A-Za-z -]+$/)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^-?(|[0-9]\d*)?$/)]],
            message: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            SP: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            SB: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            adults: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            children: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            date: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    };
    UttarakhandComponent.prototype.contactformdetail = function () {
        var _this = this;
        if (this.contactform.invalid) {
            this.isSubmited = true;
            return;
        }
        this.spinnerService.show();
        this._service.query(this.contactform.value)
            .subscribe(function (res) {
            if (res.code === 200) {
                // this.contactform.reset(this.contactform.value);
                _this.toastr.success('Query send successfully');
                _this.spinnerService.hide();
            }
            else {
                _this.spinnerService.hide();
                _this.toastr.warning('Query not send');
            }
        });
    };
    UttarakhandComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-uttarakhand',
            template: __webpack_require__(/*! ./uttarakhand.component.html */ "./src/app/uttarakhand/uttarakhand.component.html"),
            styles: [__webpack_require__(/*! ./uttarakhand.component.css */ "./src/app/uttarakhand/uttarakhand.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], src_app_query_service__WEBPACK_IMPORTED_MODULE_2__["QueryService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__["Ng4LoadingSpinnerService"]])
    ], UttarakhandComponent);
    return UttarakhandComponent;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\LENOVO\Desktop\gofree\f\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map