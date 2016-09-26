(function() {
    'use strict';

    angular
        .module('angular-lazy-load-images', [])
        .directive('imageLoaderDirective', imageLoaderDirective);

    /** @ngInject */
    function imageLoaderDirective($window) {
        var topFoldOffset = 0;
        var bottomFoldOffset = 0;

        var isVisible = function(element){
            var top = element.offsetTop;
            var bottom = ( top + element.clientHeight );

            return((
                ( top <= bottomFoldOffset ) &&
                ( top >= topFoldOffset )
            ) || (
                ( bottom <= bottomFoldOffset ) &&
                ( bottom >= topFoldOffset )
            ) || (
                ( top <= topFoldOffset ) &&
                ( bottom >= bottomFoldOffset )
            ));
        };

        return {
            restrict: 'E',
            template: '<img class="{{ imgClass }}" id="img-loaded-{{ index }}" ng-src="{{ src }}" width="{{ width }}" height="{{ height }}" alt="{{ alt }}" />',
            link: function($scope, element, attributes){

                // Set attributes
                $scope.index = $scope.$index;
                $scope.imgClass = attributes.imgClass;
                $scope.width = attributes.imgWidth || 300;
                $scope.height = attributes.imgHeight || 300;
                $scope.alt = attributes.imgAlt || "";

                var stashUrl = attributes.imgUrl;
                var elm = element.find('img')[0];

                var renderImages = function(){
                    topFoldOffset = $window.pageYOffset;
                    bottomFoldOffset = ( topFoldOffset + $window.innerHeight );

                    var shouldRenderImage = isVisible(elm);

                    if(shouldRenderImage){
                        $scope.safeApply(function() {
                            $scope.src = stashUrl;
                            angular.element($window).off("scroll", renderImages);
                        });
                    }
                };

                // Event Binding

                $scope.safeApply = function(fn) {
                    var phase = this.$root.$$phase;
                    if(phase == '$apply' || phase == '$digest') {
                        if(fn && (typeof(fn) === 'function')) {
                            fn();
                        }
                    } else {
                        this.$apply(fn);
                    }
                };

                angular.element($window).on("scroll", renderImages);

                angular.element(document).ready(function () {
                    renderImages();
                });
            }
        };
    }
})();
