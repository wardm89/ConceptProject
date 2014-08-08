define([
    'dojo/_base/declare',
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    'dojo/html',
    'dijit/form/Button',
    'dijit/form/TextBox',
    'dojo/text!example/templates/SearchBox.html'
], function(declare, WidgetBase, TemplatedMixin, HTML, Button, TextBox, template) {
    return declare([WidgetBase, TemplatedMixin], {

        templateString: template,

        navBar: null,

        postCreate : function() {
            this.inherited(arguments);

            console.log('SearchBox:postCreate()');
            this.createSearchBox();

        },

        getQuery : function() {
            return this.searchBox.get("value");
        },

        createSearchBox: function(){
            this.searchBox = new TextBox({

            }, this.SBNode)

        }

    });
});