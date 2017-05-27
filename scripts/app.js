angular
	.module("ngClassifieds", ["ngMaterial"])
	.config(function($mdThemingProvider){

		$mdThemingProvider.theme('default')
			.primaryPalette('green')
			.backgroundPalette('teal')
			.accentPalette('orange');

	})
	.directive("helloWorld", function() {
		return {
			template: "{{ message }}"
		}
	});