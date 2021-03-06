/* Angular Specific */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
/* My Components */
var app_component_1 = require("./app.component");
var app_nav_component_1 = require("../app/components/app-nav/app-nav.component");
var home_component_1 = require("./components/home/home.component");
var currentWeather_component_1 = require("./components/CurrentWeather/currentWeather.component");
var forecast_component_1 = require("./components/forecast/forecast.component");
var weather_service_1 = require("./services/weather.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            router_1.RouterModule.forRoot([
                { path: 'home', component: home_component_1.HomeComponent },
                { path: 'current', component: currentWeather_component_1.CurrentWeatherComponent },
                { path: 'forecast', component: forecast_component_1.ForecastComponent },
                { path: '', component: home_component_1.HomeComponent },
                { path: "**", component: home_component_1.HomeComponent }
            ]),
        ],
        providers: [weather_service_1.WeatherService],
        declarations: [app_component_1.AppComponent,
            home_component_1.HomeComponent,
            currentWeather_component_1.CurrentWeatherComponent,
            forecast_component_1.ForecastComponent,
            app_nav_component_1.AppNavComponent],
        bootstrap: [app_component_1.AppComponent],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map