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
				title: title,
				author: author,
			})
			
			this.set('newTitle', '');
			this.set('newAuthor', '');
			
			book.save();
		}
	}
})
