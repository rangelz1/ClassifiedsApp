(function() {

	"use strict";

	angular
	.module("ngClassifieds")
	.controller("classifiedsCtrl", function($scope) {



		$scope.classified = {
			title:"First Item",
			price: "$1,000.00",
			description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, ipsam, velit. Maxime laborum, hic blanditiis aliquam praesentium. Fugiat hic laboriosam corrupti minima quidem delectus dolor doloremque, est enim, magni corporis!"
		}

	});
})();