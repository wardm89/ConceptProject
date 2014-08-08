define([
    'dojo/_base/declare',
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    'dojo/html',
    'dojo/text!example/templates/SearchBackground.html'
], function(declare, WidgetBase, TemplatedMixin, HTML, template) {
    return declare([WidgetBase, TemplatedMixin], {

        templateString: template,


        postCreate : function() {
            this.inherited(arguments);

            console.log('SearchBackground:postCreate()');


        }

    });
});