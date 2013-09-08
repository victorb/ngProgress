// Here is the business logic that we will use for the progress
/*globals angular:true*/
/**
* ngProgress.provider Module
*
* This is the singleton that handles the actual progress of ngProgress
*/
angular.module('ngProgress.provider', ['ngProgress.directive'])
    .provider('progressbar', function () {
        'use strict';
        //Default values for provider
        this.autoStyle = true;
        this.count = 0;
        this.height = '2px';
        this.color = 'firebrick';

        this.$get = ['$document',
            '$window',
            '$compile',
            '$rootScope', function ($document, $window, $compile, $rootScope) {
            var count = this.count,
                height = this.height,
                color = this.color,
                $scope = $rootScope,
                $body = $document.find('body');
                // Create elements that is needed
                // progressbarEl = '<h1>{{ count }}</h1>';

            $rootScope.count = count;
            var el = $compile('<div>{{' + count + '}}</div>')($rootScope);
            $body.prepend(el);
            // $body.append(progressbarEl);
            // $compile(progressbarEl)($scope);
            // $body.prepend(progressbarEl);
                // console.log(progressbarEl.eq(0).html());
                // progressbarContainer = angular.element('<div class="progressbar-container"></div>'),
                // progressbar = angular.element('<div class="progressbar"></div>');

            var intervalCounterId = 0;
            // $rootScope.$digest();
            // Add progressbar to progressbar-container and progressbar-container
            // to body
            // progressbarContainer.append(progressbar);
            // $body.append(progressbarContainer);

            // Styling for the progressbar itself
            // if (this.autoStyle) {
            //     progressbarContainer.css({
            //         position: 'fixed',
            //         margin: 0,
            //         padding: 0,
            //         top: 0,
            //         left: 0,
            //         right: 0,
            //         'z-index': 99999
            //     });
            //     progressbar.css({
            //         height: height,
            //         width:  count + '%',
            //         'background-color': color,
            //         color: color,
            //         'box-shadow': '0 0 10px 0',
            //         margin: 0,
            //         padding: 0,
            //         'z-index': 99998,
            //         '-webkit-transition': 'all 0.5s ease-in-out',
            //         '-moz-transition': 'all 0.5s ease-in-out',

            //         '-o-transition': 'all 0.5s ease-in-out',
            //         'transition': 'all 0.5s ease-in-out'
            //     });
            // }

            return {
                // Starts the animation and adds between 0 - 5 percent to loading
                // each 400 milliseconds. Should always be finished with progressbar.complete()
                // to hide it
                start: function () {
                    // TODO Use requestAnimationFrame instead of setInterval
                    // https://developer.mozilla.org/en-US/docs/Web/API/window.requestAnimationFrame
                    console.log('start called!');
                    intervalCounterId = setInterval(function () {
                        if (isNaN(count)) {
                            clearInterval(intervalCounterId);
                            count = 0;
                        }
                        var remaining = 100 - count;
                        console.log('count: ' + count);
                        count = count + (0.15 * Math.pow(1 - Math.sqrt(remaining), 2));
                    }, 200);
                },
                // Sets the height of the progressbar. Use any valid CSS value
                // Eg '10px', '1em' or '1%'
                height: function (new_height) {
                    if (new_height !== undefined) {
                        height = new_height;
                    }
                    return height;
                },
                // Sets the color of the progressbar and it's shadow. Use any valid HTML
                // color
                color: function (new_color) {
                    if (new_color !== undefined) {
                        color = new_color;
                    }
                    return color;
                },
                // Returns on how many percent the progressbar is at. Should'nt be needed
                status: function () {
                    return count;
                },
                // Stops the progressbar at it's current location
                stop: function () {
                    clearInterval(intervalCounterId);
                },
                // Set's the progressbar percentage. Use a number between 0 - 100. 
                // If 100 is provided, complete will be called.
                set: function (new_count) {
                    count = new_count;
                    clearInterval(intervalCounterId);
                    return count;
                },
                // Resets the progressbar to percetage 0 and therefore will be hided after
                // it's rollbacked
                reset: function () {
                    clearInterval(intervalCounterId);
                    count = 0;
                    // progressbar.css('width', count + '%');
                    // progressbar.css('opacity', '1');
                    return 0;
                },
                // Jumps to 100% progress and fades away progressbar.
                complete: function () {
                    // this.reset();
                    count = 100;
                    // progressbar.css('width', count + '%');
                    // setTimeout(function () {
                    //     progressbar.css('opacity', '0');
                    // }, 500);
                    // setTimeout(function () {
                    //     count = 0;
                    //     progressbar.css('width', count + '%');
                    // }, 1000);
                    return count;
                }
            };
        }];

        this.setColor = function (color) {
            this.color = color;
        };

        this.setHeight = function (height) {
            this.height = height;
        };
    });
// Here we have our dom manipulation
/*globals angular:true*/
angular.module('ngProgress.directive', [])
    .directive('ngProgress', function () {
        var directiveObj = {
            replace: true,
            // scope: {
            //     'counter': '=ngModel'
            // },
            // template: '<p>hello {{ counter }}</p>'
            template: '<h1>fucker</h1>'
        };
        return directiveObj;
    });
// Here is the main module