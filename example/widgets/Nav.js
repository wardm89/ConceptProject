define([
    'dojo/_base/declare',
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    'dojo/html',
    'dijit/form/Button',
    'dojo/text!example/templates/Nav.html'
], function(declare, WidgetBase, TemplatedMixin, HTML, Button, template) {
    return declare([WidgetBase, TemplatedMixin], {

        templateString: template,

        navBar: null,

        postCreate : function() {
            this.inherited(arguments);

            console.log('Nav:postCreate()');


        }

    });
});