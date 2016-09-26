(function() {
	'use strict';

	angular
		.module('demo')
		.controller('testController', testController);

	/** @ngInject */
	function testController($scope) {
		console.log('TEST');
        var vm = this;

        vm.posts = [{
            url: "https://placekitten.com/300/300",
        },{
            url: "https://placekitten.com/301/300",
        },{
            url: "https://placekitten.com/300/301",
        },{
            url: "https://placekitten.com/300/302",
        },{
            url: "https://placekitten.com/302/300",
        },{
            url: "https://placekitten.com/304/304",
        },{
            url: "https://placekitten.com/301/301",
        },{
            url: "https://placekitten.com/303/303",
        },{
            url: "https://placekitten.com/300/305",
        },{
            url: "https://placekitten.com/305/300",
        },{
            url: "https://placekitten.com/309/309",
        },{
            url: "https://placekitten.com/309/300",
        }];
	}

})();
