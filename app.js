let app = angular.module('myapp', ['ui.router', 'ngAnimate']);

app.config(function($stateProvider, $urlRouterProvider, ){
    $urlRouterProvider.otherwise('/myhome');
    $stateProvider
        .state('myhome', {
            url: '/myhome',
            template: '<myhome></myhome>'
        })
        .state('info', {
            url: '/mymenu',
            template: '<mymenu></mymenu>'
        })
});
