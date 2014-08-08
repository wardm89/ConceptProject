define([
	'dojo/_base/declare',
    'dojo/_base/lang',
	'dijit/_WidgetBase',
	'dijit/_TemplatedMixin',
	'dojo/html',
    'dojo/store/Memory',
    'dojo/dom-construct',
	'example/widgets/Nav',
    'example/widgets/SearchBackground',
    'example/widgets/Buttons',
    'example/widgets/Results',
    'example/widgets/SearchBox',
    "dojo/request",
    "dojo/dom",
    "dojo/_base/array",
    'dijit/form/Button',
    'dojo/text!example/templates/App.html'
], function(declare, lang, WidgetBase, TemplatedMixin, HTML, Memory, domConstruct, Navigation,
            Search, Buttons, Results, SearchBox, request, dom, arrayUtil, Button, template) {
	return declare([WidgetBase, TemplatedMixin], {

		templateString: template,

		navBar: null,
        results: [],

		postCreate : function() {

			this.inherited(arguments);

			console.log('App:postCreate()');

			this.navBar = new Navigation({

            }, this.navNode);

            new Buttons({
                parent: this
            }, this.buttonNode);

            this.searchBox = new SearchBox({

            }, this.searchBoxNode);

            request.get("example/data/authors.json", {
                handleAs: "json"
            }).then(lang.hitch(this, this.gotAuthors));
		},

        gotAuthors : function(authors) {
            this.store = new Memory({
                data: authors
            });

            this.populateResults();
        },

        populateResults : function () {
            domConstruct.empty(this.searchNode);
            this.results = [];

            var nameQuery = this.searchBox.getQuery(),
                query;

            if (nameQuery) {
                query = {
                    name: nameQuery
                };
            }

            console.log(query);

            var authors = this.store.query(query || {});

            arrayUtil.forEach(authors, function(author){
                this.results.push(new Results({
                    name: author.name,
                    bio: author.bio,
                    avatar: author.avatar
                }, domConstruct.create('div', {}, this.searchNode)));
            }, this);
        }


	});
});