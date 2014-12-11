<html>
<head>
	<script src="scripts/libraries/jquery/dist/jquery.min.js"></script>
	<script src="scripts/libraries/handlebars/handlebars.min.js"></script>
	<script src="scripts/libraries/ember/ember.js"></script>
	<script src="scripts/libraries/ember-data/ember-data.js"></script>
	<meta charset="UTF-8" />
	<link rel="stylesheet" type="text/css" href="styles/test.css">
</head>
<body>
<script type="text/x-handlebars" data-template-name="ember-test">
	<section id="my-section">
		<ul>
			{{#each book in model}}
				<li {{bind-attr class="book.checkbox:read"}}>{{input type="checkbox" checked=book.checkbox}} {{book.author}} "{{book.title}}"</li>
			{{/each}}
			<li>
				{{input id="new-author" type="text" placeholder="autor" value=newAuthor}}
				{{input id="new-title" type="text" placeholder="tytuł" value=newTitle}}
				<button {{action 'createBook'}}>save</button>
			</li>
		</ul>
		<div id="book-count">Zostało: {{remaining}} na {{total}}</div>
	</section>
</script>
<script src="scripts/application/application.js"></script>
<script src="scripts/application/router.js"></script>
<script src="scripts/application/models/book.js"></script>
<script src="scripts/application/controllers/ember_test_controller.js"></script>
</body>
</html>
