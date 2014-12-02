EmberTest.Router.map(function(){
	this.resource('ember-test', { path: '/' })
});

EmberTest.EmberTestRoute = Ember.Route.extend({
	model: function(){
		return this.store.find('book');
	},
});
