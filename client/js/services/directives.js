
export function buildImdbCard() {
	return {
		restrict: 'E',
		replace: true,
		templateUrl: './views/imdbItem',
		scope: {
			data: '<',
			callAction: '&',
			textBtn: '@'
		}
	};
}
