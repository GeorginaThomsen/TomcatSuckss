'use strict';

angular.module('myApp.view3', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {

                $routeProvider.when('/view3', {
                    templateUrl: 'app/view3/view3.html',
                    controller: 'View3Ctrl'
                });
            }])

        .controller('View3Ctrl', function ($http, $scope) {
            var self = this;
            $http({
                method: 'GET',
                url: 'api/currency/dailyRates',
                cache: true//Ask Aleks if he has used this
            }).then(function (data) {//Should/can there be a scope here?
                self.data = data.data;
//                $scope.data = response.data;
                alert($scope.data);
                
                
            }, function (data) {
                alert("error"  + data)
            })
            
//                Or:
//                .controller('View3Ctrl', function ($http, $scope) {
//                $http({
//                method: 'GET',
//                        url: 'api/currency/dailyRates',
//                        cache: true
//                }).success(function (response) {
//                $scope.data = response.data;
//                }).error(function (response, status) {
//                    $scope.error = {message: response, status: status};
//                    console.log($scope.data.response.status)
//                })
            //---------------------------------------------------------------------------               

//  $http.get('api/demoadmin')
//            .success(function (data, status, headers, config) {
//              $scope.data = data;
//            })
//            .error(function (data, status, headers, config) {
//              
//             });
//            $scope.currencies = ["New York", "Vancouver", "Atlantis", "Blackpool", "Copenhagen"];
//            $scope.convert = function (amount, fromCurrency, toCurrency) {
//                $scope.amount = "";
//                $scope.fromCurrency = "";
//                $scope.toCurrency = "";
//                $http({
//                    method: 'GET',
////                    url: 'api/currency/calculator/:amount/:fromcurrency/:tocurrency',
//                    url: 'api/currency/calculator/' + amount + '/' + fromCurrency + '/' + toCurrency,
//                    cache: true//Ask Aleks if he has used this
//
//                }).then(function (response) {//Should/can there be a scope here?
////                    $scope.data = response.data;
//                    $scope.calculate = (fromCurrency / toCurrency) * amount;
//                }, function (data) {
//
//                })
//                return amount * usdToForeignRates[outCurr] / usdToForeignRates[inCurr];
//            };
//
//            return {
//                currencies: currencies,
//                convert: convert
//            };
        });