EmberTest.Book = DS.Model.extend({
	author: DS.attr('string'),
	title:  DS.attr('string'),
});

EmberTest.Book.FIXTURES = [
	{
		id:     1,
		author: 'Stanisław Lem',
		title:  'Niezwyciężony',
	},
	{
		id:     2,
		author: 'Jacek Dukaj',
		title:  'Inne Pieśni',
	},
];
