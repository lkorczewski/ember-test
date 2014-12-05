EmberTest.Book = DS.Model.extend({
	author:   DS.attr('string'),
	title:    DS.attr('string'),
	checkbox: DS.attr('boolean'),
});

EmberTest.Book.FIXTURES = [
	{
		id:       1,
		author:   'Stanisław Lem',
		title:    'Niezwyciężony',
		checkbox: false,
	},
	{
		id:       2,
		author:   'Jacek Dukaj',
		title:    'Inne Pieśni',
		checkbox: true,
	},
];
