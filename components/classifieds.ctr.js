(function() {

	"use strict";

	angular
	.module("ngClassifieds")
	.controller("classifiedsCtrl", function($scope) {

		$scope.classifieds = [
		{
			"id":"1",
			"title":"First Item",
			"description": "Lorem ipsum dolor sit amet, co velit. Maxime laborum, hic blanditiis aliquam praesentium. Fugiat hic laboriosam corrupti minima quidem delectus dolor doloremque, est enim, magni corporis!",
			"price": "$1,000.00",
			"posted":"2015-10-22",
			"contact": {
				"name":"Pit Dragon",
				"phone":"(555)555-5555",
				"email":"pitd@gmail.com"
			},
			"categories":[
			"Vehicles",
			"Parts and Accessories"
			],
			"image":"http://lorempixel.com/600/600/technics",
			"views":213 
		},
		{
			"id":"2",
			"title":"Secondt Item",
			"description": "Lorem ipsum dolor sit amet, co velit. Maxime laborum, hic blanditiis aliquam praesentium. Fugiat hic laboriosam corrupti minima quidem delectus dolor doloremque, est enim, magni corporis!",
			"price": "$500.00",
			"posted":"2016-11-02",
			"contact": {
				"name":"Pit Dragon",
				"phone":"(555)555-5555",
				"email":"pitd@gmail.com"
			},
			"categories":[
			"Vehicles",
			"Parts and Accessories"
			],
			"image":"http://lorempixel.com/600/600/food",
			"views":213 
		},
		{
			"id":"3",
			"title":"Third Item",
			"description": "Lorem ipsum dolor sit amet, co velit. Maxime laborum, hic blanditiis aliquam praesentium. Fugiat hic laboriosam corrupti minima quidem delectus dolor doloremque, est enim, magni corporis!",
			"price": "$2,000.00",
			"posted":"2014-05-13",
			"contact": {
				"name":"Pit Dragon",
				"phone":"(555)555-5555",
				"email":"pitd@gmail.com"
			},
			"categories":[
			"Vehicles",
			"Parts and Accessories"
			],
			"image":"http://lorempixel.com/600/600/city",
			"views":213 
		},
		{
			"id":"4",
			"title":"Forth Item",
			"description": "Lorem ipsum dolor sit amet, co velit. Maxime laborum, hic blanditiis aliquam praesentium. Fugiat hic laboriosam corrupti minima quidem delectus dolor doloremque, est enim, magni corporis!",
			"price": "$600.00",
			"posted":"2016-07-09",
			"contact": {
				"name":"Pit Dragon",
				"phone":"(555)555-5555",
				"email":"pitd@gmail.com"
			},
			"categories":[
			"Vehicles",
			"Parts and Accessories"
			],
			"image":"http://lorempixel.com/600/600/abstract",
			"views":213 
		},
		{
			"id":"5",
			"title":"Fifth Item",
			"description": "Lorem ipsum dolor sit amet, co velit. Maxime laborum, hic blanditiis aliquam praesentium. Fugiat hic laboriosam corrupti minima quidem delectus dolor doloremque, est enim, magni corporis!",
			"price": "$130.00",
			"posted":"2015-04-18",
			"contact": {
				"name":"Pit Dragon",
				"phone":"(555)555-5555",
				"email":"pitd@gmail.com"
			},
			"categories":[
			"Vehicles",
			"Parts and Accessories"
			],
			"image":"http://lorempixel.com/600/600/fashion",
			"views":213 
		},
		{
			"id":"6",
			"title":"Sixth Item",
			"description": "Lorem ipsum dolor sit amet, co velit. Maxime laborum, hic blanditiis aliquam praesentium. Fugiat hic laboriosam corrupti minima quidem delectus dolor doloremque, est enim, magni corporis!",
			"price": "$40.00",
			"posted":"2013-02-05",
			"contact": {
				"name":"Pit Dragon",
				"phone":"(555)555-5555",
				"email":"pitd@gmail.com"
			},
			"categories":[
			"Vehicles",
			"Parts and Accessories"
			],
			"image":"http://lorempixel.com/600/600/sports",
			"views":213 
		}
		]

	});
})();