// Here we have our dom manipulation
/*globals angular:true*/
angular.module('ngProgress.directive', [])
    .directive('ngProgress', function ($window) {
        var directiveObj = {
            replace: true,
            restrict: 'E',
            // scope: {
            //     'counter': '='
            // },
            link: function ($scope, $attrs, $element, $controller) {
                // $scope.counter = counter;
                // console.log($attrs.counter);
                // console.log($scope.counter);
                // console.log('window count');
                // console.log($window.count);
                // $scope.$watch('counter', function (newVal) {
                //     console.log(newVal);
                //     if(newVal !== undefined) {
                //         console.log(newVal);
                //     }
                // });

                $scope.counter = $window.count;

                console.log('linking');
                console.log()

                // console.log(ngProgress.status());
                // console.log(ngProgress.start());
                // console.log(ngProgress.stop());
                // console.log(ngProgress.status());

                // setInterval(function(){
                //     console.log('========================checking count');
                //     console.log(ngProgress);
                // }, 500)

            },
            template: '<p>hello {{ counter }}</p>'
        };
        return directiveObj;
    });