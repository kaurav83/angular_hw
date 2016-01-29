var scotchApp = angular.module('scotchApp', []);


scotchApp.controller('mainController', function($scope) {

    // сообщение, которое мы хотим отобразить
    $scope.message = 'Everyone come and see how good I look!';
});





var scotchApp = angular.module('scotchApp', ['ngRoute']);

// маршруты
scotchApp.config(function($routeProvider, $locationProvider) {
    $routeProvider

        
        .when('/', {
            templateUrl: 'home.html',
            controller: 'mainController'
        })

       
        .when('/about', {
            templateUrl: '/about.html',
            controller: 'aboutController'
        })

        
        .when('/contact', {
            templateUrl: 'contacts.html',
            controller: 'contactController'
        })
        .when('/resume', {
        	templateUrl: 'resume.html',
        	controller: 'resumeController'
        });
        
        $locationProvider.html5Mode(true);
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