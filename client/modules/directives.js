const imdbCard = `<div class="imdb-card">
<h2><a ng-href="{{data.imdburl}}">{{data.title}} - {{data.rating}}</a></h2>
<img ng-src="{{data.poster}}" />
<p ng-if="data.seasons">Seasons: {{data.seasons}}</p>
<ul>
<li ng-repeat="gen in data.genres">{{gen}}</li>
<ul>
<ul>
<li ng-repeat="act in data.actors">{{act}}</li>
<ul>
</div>`;

export function buildImdbCard() {
  return {
    restrict: 'E',
		replace: true,
  	template: imdbCard,
		scope: {
			data: '<'
		}
	};
}
