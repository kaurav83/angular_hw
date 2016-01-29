var scotchApp = angular.module('scotchApp', []);

// создадим контроллер и внедрим $scope
scotchApp.controller('mainController', function($scope) {

    // сообщение, которое мы хотим отобразить
    $scope.message = 'Everyone come and see how good I look!';
});





var scotchApp = angular.module('scotchApp', ['ngRoute'])

// настроим маршруты
.config(function($routeProvider, $locationProvider) {
    

        // маршрут для страницы home
        $routeProvider.when('/home', {
            templateUrl: 'pages/home.html',
            controller: 'mainController'
        });

        // маршрут для страницы about
        $routeProvider.when('/about', {
            templateUrl: 'pages/about.html',
            controller: 'aboutController'
        });

        // маршрут для страницы contact
        $routeProvider.when('/contact', {
            templateUrl: 'pages/contacts.html',
            controller: 'contactController'
        });
        $routeProvider.when('/resume', {
        	templateUrl: 'pages/resume.html',
        	controller: 'resumeController'
        });
        
        
        $routeProvider.otherwise({redirectTo: '/home'});
});

scotchApp.controller('mainController', function($scope) {
    $scope.message = 'Everyone come and see how good I look!';
});

scotchApp.controller('aboutController', function($scope) {
    $scope.message = 'Look! I am an about page.';
});

scotchApp.controller('contactController', function($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});
scotchApp.controller('resumeController', function($scope){
	$scope.message = 'Read our works. We hope you like them.';
});

