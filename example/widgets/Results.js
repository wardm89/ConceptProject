define([
    'dojo/_base/declare',
    'dojo/_base/lang',
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    'dojo/html',
    'dojo/dom-class',
    'dijit/form/Button',
    'dojo/text!example/templates/Results.html'
], function(declare, lang, WidgetBase, TemplatedMixin, HTML, domClass, Button, template) {
    return declare([WidgetBase, TemplatedMixin], {

        templateString: template,

        name: "No Title",
        bio: "Fake info",
        avatar: "No image",


        postCreate : function() {
            this.inherited(arguments);
            console.log('Results:postCreate()');
            this.createStuff();


        },

        createStuff: function(){
            new Button({
                label: "Click Me!!!",
                onClick: lang.hitch(this, this.buttonClick)
            }, this.buttonNode);

        },

        buttonClick: function(evt) {
            console.log("You clicked on " + this.name);
        }

    });
});