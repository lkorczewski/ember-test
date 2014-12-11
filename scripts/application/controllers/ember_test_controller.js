EmberTest.EmberTestController = Ember.ArrayController.extend({
	actions: {
		createBook: function(){
			console.log(this);
			
			var author = this.get('newAuthor')
			if(!author){
				console.log('empty author');
				return false;
			}
			
			//author = author.trim();
			
			var title = this.get('newTitle')
			if(!title){
				console.log('empty title');
				return false;
			}
			
			//title = title.trim();
			
			var book = this.store.createRecord('book', {
				title:    title,
				author:   author,
				checkbox: false,
			})
			
			this.set('newTitle', '');
			this.set('newAuthor', '');
			
			book.save();
		},
		/*
		isChecked: function(key, value){
			var model = this.get('model');
			
			if(value === undefined){
				return model.get('checkbox');
			} else {
				model.set('checkbox', value);
				model.save();
				return value;
			}
		}.property('model.checkbox'),
		*/
		
	},
	
	remaining: function(){
		return this.filterBy('checkbox', false).get('length');
	}.property('@each.checkbox'),
	
	total: function(){
		return this.get('length');
	}.property('length'),
})
