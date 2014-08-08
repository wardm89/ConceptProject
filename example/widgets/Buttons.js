define([
    'dojo/_base/declare',
    'dojo/_base/lang',
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    'dojo/html',
    'dijit/form/Button',
    'dojo/text!example/templates/Buttons.html'
], function(declare, lang, WidgetBase, TemplatedMixin, HTML, Button, template ) {
    return declare([WidgetBase, TemplatedMixin], {

        templateString: template,

        navBar: null,
        parent: null,


        postCreate : function() {
            this.inherited(arguments);

            console.log('Buttons:postCreate()');
            this.createButtons();


        },
        createButtons: function(){

            var searchBtn = new Button({
                label: "Search",
                onClick: lang.hitch(this.parent, this.parent.populateResults)
            }, this.searchButton);


        }


    });
});